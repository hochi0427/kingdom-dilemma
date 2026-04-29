<script setup>
import { computed, ref } from 'vue';
import { storylets, initialStats, endings } from "./data/storylets";

const maxStat = 10;
const finalTurn = 10;

const stats = ref({ ...initialStats });
const turn = ref(1);
const phase = ref('choice');
const seenStoryletIds = ref([]);
const selectedStoryletId = ref(storylets[0]?.id);
const resultText = ref('');
const pendingFoodPenalty = ref(0);
const ending = ref(null);

const statCards = computed(() => [
  { key: 'food', label: 'Food', icon: '🍞', className: 'food' },
  { key: 'army', label: 'Army', icon: '⚔️', className: 'army' },
  { key: 'trust', label: 'Trust', icon: '👥', className: 'trust' },
  { key: 'faith', label: 'Faith', icon: '⛪', className: 'faith' }
]);

const currentStorylet = computed(() =>
  storylets.find((storylet) => storylet.id === selectedStoryletId.value)
);

const endingText = computed(() => (ending.value ? endings[ending.value] : ''));
const turnProgress = computed(() => `${(Math.min(turn.value, finalTurn) / finalTurn) * 100}%`);

function findNextStorylet(currentTurn, currentStats) {
  const unseen = storylets.filter((storylet) => !seenStoryletIds.value.includes(storylet.id));
  const fixed = unseen.find(
    (storylet) => storylet.trigger.type === 'fixed' && storylet.trigger.turn === currentTurn
  );

  if (fixed) {
    return fixed;
  }

  const statTriggered = unseen.find((storylet) => {
    if (storylet.trigger.type !== 'stat') {
      return false;
    }

    const value = currentStats[storylet.trigger.stat];
    return storylet.trigger.operator === '<=' && value <= storylet.trigger.value;
  });

  if (statTriggered) {
    return statTriggered;
  }

  return unseen.find((storylet) => storylet.trigger.type === 'random') ?? unseen[0];
}

function clampStat(value) {
  return Math.max(0, Math.min(maxStat, value));
}

function applyEffects(effects) {
  stats.value = {
    food: clampStat(stats.value.food + effects.food),
    army: clampStat(stats.value.army + effects.army),
    trust: clampStat(stats.value.trust + effects.trust),
    faith: clampStat(stats.value.faith + effects.faith)
  };
}

function findEnding() {
  if (stats.value.food <= 0) {
    return 'famine';
  }

  if (stats.value.army <= 0) {
    return 'militaryCollapse';
  }

  if (stats.value.trust <= 0) {
    return 'revolt';
  }

  if (turn.value >= finalTurn) {
    return 'victory';
  }

  return null;
}

function choose(choice) {
  if (phase.value !== 'choice' || ending.value) {
    return;
  }

  seenStoryletIds.value = [...seenStoryletIds.value, currentStorylet.value.id];
  applyEffects(choice.effects);
  pendingFoodPenalty.value = choice.effects.nextFoodPenalty ?? 0;
  resultText.value = choice.resultText;
  ending.value = findEnding();
  phase.value = 'result';
}

function continueGame() {
  if (ending.value) {
    phase.value = 'ending';
    return;
  }

  turn.value += 1;

  if (pendingFoodPenalty.value) {
    stats.value = {
      ...stats.value,
      food: clampStat(stats.value.food + pendingFoodPenalty.value)
    };
    pendingFoodPenalty.value = 0;
  }

  ending.value = findEnding();

  if (ending.value) {
    phase.value = 'ending';
    return;
  }

  selectedStoryletId.value = findNextStorylet(turn.value, stats.value)?.id;
  resultText.value = '';
  phase.value = 'choice';
}

function restart() {
  stats.value = { ...initialStats };
  turn.value = 1;
  phase.value = 'choice';
  seenStoryletIds.value = [];
  resultText.value = '';
  pendingFoodPenalty.value = 0;
  ending.value = null;
  selectedStoryletId.value = findNextStorylet(1, stats.value)?.id;
}
</script>

<template>
  <main class="game">
    <header class="header">
      <div class="title-row">
        <div>
          <p class="eyebrow">A Crown Under Strain</p>
          <h1>Kingdom Dilemma</h1>
          <!-- <p class="subtitle">Rule through hunger, war, faith, and unrest.</p> -->
        </div>
        <button class="restart-button" type="button" @click="restart">New Reign</button>
      </div>

      <div class="progress-section">
        <div class="progress-top">
          <span>Progress</span>
          <strong>Turn {{ turn }} / {{ finalTurn }}</strong>
        </div>
        <div class="progress-bar" aria-label="Turn progress">
          <div class="progress-fill" :style="{ width: turnProgress }"></div>
        </div>
      </div>
    </header>

    <section class="layout">
      <aside class="vitals-panel">
        <h2>Kingdom Vitals</h2>

        <div v-for="stat in statCards" :key="stat.key" class="stat-card">
          <div class="stat-top">
            <div class="stat-name">
              <span class="icon">{{ stat.icon }}</span>
              <span>{{ stat.label }}</span>
            </div>
            <strong>{{ stats[stat.key] }}/{{ maxStat }}</strong>
          </div>
          <div class="bar" :aria-label="`${stat.label}: ${stats[stat.key]} of ${maxStat}`">
            <div
              class="fill"
              :class="stat.className"
              :style="{ width: `${(stats[stat.key] / maxStat) * 100}%` }"
            ></div>
          </div>
        </div>

        <section class="facts-panel">
          <h3>Medieval Facts</h3>
          <div v-if="phase === 'result' && currentStorylet" class="fact-reveal">
            <h4>{{ currentStorylet.factTitle }}</h4>
            <p>{{ currentStorylet.fact }}</p>
            <p class="fact-source">{{ currentStorylet.factSource }}</p>
          </div>
          <p v-else class="fact-placeholder">Make a decision to reveal the historical context.</p>
        </section>
      </aside>

      <section v-if="currentStorylet && phase !== 'ending'" class="story-card">
        <p class="chapter">{{ currentStorylet.season }} Court</p>
        <h2>{{ currentStorylet.title }}</h2>

        <p class="story-text">
          {{ phase === 'result' ? resultText : currentStorylet.scenario }}
        </p>

        <div v-if="phase === 'choice'" class="choices">
          <button
            v-for="choice in currentStorylet.choices"
            :key="choice.label"
            class="choice-button"
            type="button"
            @click="choose(choice)"
          >
            <span>{{ choice.label }}.</span>
            <strong>{{ choice.text }}</strong>
          </button>
        </div>

        <div v-else class="choices">
          <button class="continue-button" type="button" @click="continueGame">
            Continue the reign
          </button>
        </div>
      </section>

      <section v-else class="story-card ending-card">
        <p class="chapter">Final Chronicle</p>
        <h2>{{ ending === 'victory' ? 'The Crown Endures' : 'The Reign Falls' }}</h2>
        <p class="story-text">{{ endingText }}</p>

        <div class="choices">
          <button class="continue-button" type="button" @click="restart">Begin again</button>
        </div>
      </section>
    </section>
  </main>
</template>

<style scoped>
.game {
  min-height: 100vh;
  padding: 30px 44px 40px;
  background:
    radial-gradient(circle at top, rgba(255, 236, 190, 0.12), transparent 35%),
    #1f1a17;
  font-family: Georgia, serif;
  color: #2b1b10;
}

.header {
  width: min(1540px, 100%);
  margin: 0 auto 24px;
  color: #f3e4c8;
}

.title-row {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
}

.eyebrow {
  margin: 0 0 6px;
  color: #d9c7a3;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.header h1 {
  margin: 0;
  color: #f3e4c8;
  font-family: Georgia, serif;
  font-size: 52px;
  font-weight: bold;
  letter-spacing: 0;
}


.progress-section {
  margin-top: 25px;
  max-width: 720px;
}

.progress-top {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 8px;
  color: #ecd9b3;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.progress-bar {
  height: 18px;
  padding: 3px;
  background: #2b1b10;
  border: 2px solid #9a7645;
  border-radius: 999px;
  box-shadow:
    inset 0 2px 5px rgba(0, 0, 0, 0.45),
    0 2px 0 rgba(243, 228, 200, 0.14);
}

.progress-fill {
  height: 100%;
  width: 0;
  background:
    linear-gradient(90deg, #9d6b2f, #d4aa54 48%, #f0d27a);
  border-radius: 999px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35);
  transition: width 180ms ease;
}

.restart-button {
  flex: 0 0 auto;
  padding: 12px 18px;
  background: #f3e4c8;
  color: #3b2413;
  border: 2px solid #8a623a;
  border-radius: 8px;
  font-family: Georgia, serif;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.layout {
  width: min(1540px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 440px minmax(0, 1fr);
  gap: 28px;
  align-items: stretch;
}

.vitals-panel,
.story-card {
  background: #f3e4c8;
  border: 2px solid #6a4528;
  border-radius: 8px;
  box-shadow: 0 6px 0 #3b2413;
}

.vitals-panel {
  padding: 22px;
}

.vitals-panel h2 {
  margin: 0 0 16px;
  font-family: Georgia, serif;
  font-size: 28px;
  font-weight: bold;
  color: #2b1b10;
}

.stat-card {
  background:
    linear-gradient(135deg, rgba(255, 250, 240, 0.98), rgba(229, 207, 163, 0.72));
  border: 1px solid #b8955f;
  border-radius: 8px;
  padding: 11px 13px;
  margin-bottom: 10px;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.65),
    0 2px 0 rgba(88, 58, 30, 0.22);
}

.stat-card:nth-of-type(4) {
  margin-bottom: 0;
}

.stat-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.stat-name {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 18px;
  font-weight: bold;
}

.icon {
  font-size: 22px;
}

.stat-top strong {
  font-size: 15px;
}

.bar {
  height: 10px;
  background: #e0d0b5;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid rgba(106, 69, 40, 0.3);
}

.fill {
  height: 100%;
  border-radius: 999px;
  transition: width 180ms ease;
}

.food {
  background: #b8892f;
}

.army {
  background: #8b3a2b;
}

.trust {
  background: #2f8f5b;
}

.faith {
  background: #4d6f9f;
}

.facts-panel {
  margin-top: 20px;
  padding: 18px;
  background:
    linear-gradient(135deg, rgba(255, 250, 240, 0.96), rgba(226, 202, 155, 0.75));
  border: 1px solid #b8955f;
  border-radius: 8px;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.65),
    0 2px 0 rgba(88, 58, 30, 0.22);
}

.facts-panel h3 {
  margin: 0 0 9px;
  color: #2b1b10;
  font-family: Georgia, serif;
  font-size: 22px;
}

.facts-panel p {
  margin: 0;
  color: #4d321d;
  font-size: 17px;
  line-height: 1.45;
}

.facts-panel h4 {
  margin: 0 0 8px;
  color: #5b3a1e;
  font-size: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.fact-reveal {
  border-top: 1px solid rgba(106, 69, 40, 0.24);
  padding-top: 12px;
}

.facts-panel .fact-source {
  margin-top: 12px;
  color: #7a4f2a;
  font-size: 13px;
  font-style: italic;
  letter-spacing: 0.5px;
}

.fact-source::before {
  content: "Source: ";
  font-style: normal;
  font-weight: bold;
}

.facts-panel .fact-placeholder {
  color: #6a5138;
  font-style: italic;
}

.story-card {
  padding: 40px 44px;
  min-height: 540px;
  display: flex;
  flex-direction: column;
}

.chapter {
  margin: 0 0 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  color: #7a4f2a;
  font-weight: bold;
}

.story-card h2 {
  margin: 0 0 24px;
  font-family: Georgia, serif;
  font-size: 42px;
  font-weight: bold;
  color: #2b1b10;
}

.story-text {
  font-size: 22px;
  line-height: 1.65;
  max-width: 760px;
}

.choices {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.choice-button,
.continue-button {
  display: grid;
  align-items: center;
  gap: 10px;
  padding: 16px 18px;
  background: #5b3a1e;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: Georgia, serif;
  font-size: 18px;
  cursor: pointer;
  text-align: left;
}

.choice-button {
  grid-template-columns: 32px minmax(0, 1fr);
}

.choice-button span {
  width: 32px;
  height: 32px;
  background: #f3e4c8;
  color: #5b3a1e;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: bold;
}

.choice-button strong {
  font-size: 18px;
}

.continue-button {
  display: block;
  text-align: center;
  font-weight: bold;
}

.choice-button:hover,
.continue-button:hover,
.restart-button:hover {
  background: #7a4f2a;
  color: white;
}

.ending-card {
  justify-content: center;
}

@media (max-width: 900px) {
  .game {
    padding: 24px;
  }

  .title-row {
    align-items: start;
    flex-direction: column;
  }

  .progress-section {
    max-width: none;
  }

  .layout {
    grid-template-columns: 1fr;
  }

  .header h1 {
    font-size: 40px;
  }

  .story-card h2 {
    font-size: 34px;
  }

}
</style>
