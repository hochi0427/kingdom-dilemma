export const initialStats = {
  food: 6,
  army: 6,
  trust: 6,
  faith: 5
};

export const endings = {
  famine:
    "The granaries stand hollow, and the bells toll over empty fields. Hunger breaks the realm before any sword can reach the throne.",
  revolt:
    "The commons cast down the royal banners and fill the streets with judgment. Your crown is remembered as a burden they could no longer bear.",
  militaryCollapse:
    "The levies scatter, the captains flee, and the border fires draw nearer. With no shield left to raise, the kingdom falls into the hands of stronger wills.",
  victory:
    "Ten hard turns pass, and still the crown endures. Scarred by famine, sermons, and steel, the kingdom names your reign lawful and lasting."
};

export const storylets = [
  {
    id: "coronation",
    title: "Coronation",
    season: "Spring",
    trigger: { type: "fixed", turn: 1 },
    scenario:
      "Beneath painted rafters and candle smoke, you receive the crown while old enemies kneel with guarded eyes. The realm waits to learn whether mercy, plenty, or law will mark the first hour of your reign.",
    factTitle: "Historical Context",
    fact:
      "Coronation oaths were a core source of medieval royal legitimacy; breaking them could become legal grounds for noble rebellion.",
    factSource: "Medieval coronation oaths",
    choices: [
      {
        label: "A",
        type: "conservative",
        text: "Grant amnesty",
        effects: { food: 0, army: -1, trust: 1, faith: 0 },
        resultText:
          "Chains are struck from wrists, and households whisper that the new sovereign has a gentle hand. The captains grumble that justice has been made too soft."
      },
      {
        label: "B",
        type: "balanced",
        text: "Hold a grand feast",
        effects: { food: -1, army: 0, trust: 1, faith: 0 },
        resultText:
          "Ale flows in the yard and bread is torn beneath the palace windows. The people cheer, though the stewards mark one more storehouse running light."
      },
      {
        label: "C",
        type: "conservative",
        text: "Swear to uphold ancient law",
        effects: { food: 0, army: 0, trust: 1, faith: 0 },
        resultText:
          "Your oath is spoken before relics and charters. Even wary lords approve a crown that binds itself to memory and precedent."
      }
    ]
  },
  {
    id: "trade-caravan",
    title: "Trade Caravan",
    season: "Spring",
    trigger: { type: "random" },
    scenario:
      "A caravan from the southern roads waits before the gate, its wagons bright with silk, spice, and guarded grain. Merchants promise profit, but strangers also bring rumors and unrest.",
    factTitle: "Historical Context",
    fact:
      "The Black Death spread westward along trade routes, entering European ports through merchant ships and caravans.",
    factSource: "Medieval trade routes, 14th century",
    choices: [
      {
        label: "A",
        type: "balanced",
        text: "Trade grain for luxuries",
        effects: { food: -1, army: 0, trust: 1, faith: 0 },
        resultText:
          "Fine cloth and rare salt brighten the market stalls. The town delights in novelty, while the granary clerks quietly recalculate winter needs."
      },
      {
        label: "B",
        type: "conservative",
        text: "Close the gates",
        effects: { food: 0, army: 1, trust: -1, faith: 0 },
        resultText:
          "The portcullis falls and the watch earns praise from soldiers. Traders curse your caution, and townsfolk resent lost bargains."
      },
      {
        label: "C",
        type: "aggressive",
        text: "Allow entry with heavy tax",
        effects: { food: 1, army: 0, trust: -1, faith: 0 },
        resultText:
          "The wagons enter under hard terms, and the crown claims its due in grain. The market opens, but merchants and buyers alike mutter at royal greed."
      }
    ]
  },
  {
    id: "plague-outbreak",
    title: "Plague Outbreak",
    season: "Spring",
    trigger: { type: "random" },
    scenario:
      "A black swelling takes root among the butchers' lanes. Doors are marked with ash, prayers rise at dawn, and every cough in the market sounds like a sentence.",
    factTitle: "Historical Context",
    fact:
      "Medieval people often believed plague was caused by astrological conjunctions or poisonous air rather than bacteria.",
    factSource: "Medieval plague beliefs",
    choices: [
      {
        label: "A",
        type: "conservative",
        text: "Lock down the market",
        effects: { food: -1, army: -1, trust: 0, faith: 1 },
        resultText:
          "Stalls are shuttered by spearpoint, slowing the sickness and the trade alike. Priests praise restraint, while soldiers weary of guarding hungry streets."
      },
      {
        label: "B",
        type: "balanced",
        text: "Allow religious procession",
        effects: { food: -1, army: 0, trust: 1, faith: 1 },
        resultText:
          "Relics pass through the city under a canopy of smoke. The people find courage in song, though work stops and bread grows dearer."
      },
      {
        label: "C",
        type: "aggressive",
        text: "Search for a scapegoat",
        effects: { food: 0, army: 1, trust: -2, faith: 0 },
        resultText:
          "The guard drags suspects through the square, and fear briefly obeys command. Trust curdles as neighbors learn how easily the crown can name a victim."
      }
    ]
  },
  {
    id: "church-demands",
    title: "Church Demands",
    season: "Spring",
    trigger: { type: "random" },
    scenario:
      "The bishop arrives with sealed letters and a voice smooth as oil. He asks exemption for church lands and a fresh tithe for the poor, reminding you that kings also answer before heaven.",
    factTitle: "Historical Context",
    fact:
      "An interdict could deprive an entire kingdom of religious services such as weddings and funerals, directly weakening loyalty to the king.",
    factSource: "Church Interdict practices",
    choices: [
      {
        label: "A",
        type: "conservative",
        text: "Approve tax exemption and tithe",
        effects: { food: -2, army: 0, trust: 1, faith: 1 },
        resultText:
          "The clergy bless your name from every pulpit, and the poor receive alms in your honor. The royal stores feel the cost of grace."
      },
      {
        label: "B",
        type: "aggressive",
        text: "Tax the Church",
        effects: { food: 1, army: 0, trust: -2, faith: -1 },
        resultText:
          "Coin and grain pass from abbey cellars to royal carts. The court applauds your nerve, but sermons sharpen into warnings."
      },
      {
        label: "C",
        type: "balanced",
        text: "Negotiate a compromise",
        effects: { food: -1, army: 0, trust: 0, faith: 0 },
        resultText:
          "After three days of careful words, both sides leave dissatisfied yet obedient. A modest gift leaves the treasury of grain thinner."
      }
    ]
  },
  {
    id: "rival-lords-envoy",
    title: "Rival Lord's Envoy",
    season: "Summer",
    trigger: { type: "random" },
    scenario:
      "An envoy bearing a rival lord's hawk seal requests private audience. His master offers kinship, peace, and veiled judgment on the strength of your court.",
    factTitle: "Historical Context",
    fact:
      "Medieval marriage alliances were major diplomatic tools because kinship made breaking an alliance politically costly.",
    factSource: "Medieval marriage diplomacy",
    choices: [
      {
        label: "A",
        type: "balanced",
        text: "Agree to a marriage alliance",
        effects: { food: -1, army: 0, trust: 1, faith: 0 },
        resultText:
          "The betrothal is announced beneath garlands, and feasting binds old suspicions with new vows. The kitchens pay the first price of diplomacy."
      },
      {
        label: "B",
        type: "aggressive",
        text: "Refuse and fortify the border",
        effects: { food: -1, army: 1, trust: 0, faith: 0 },
        resultText:
          "Stone, timber, and watchfires answer the envoy in place of courtesy. The army stands taller, fed by stores meant for quieter months."
      },
      {
        label: "C",
        type: "conservative",
        text: "Delay negotiations with gifts",
        effects: { food: -1, army: 0, trust: 0, faith: 0 },
        resultText:
          "You send wine, venison, and courteous uncertainty. Time is purchased, though no one mistakes delay for strength."
      }
    ]
  },
  {
    id: "the-long-shiver",
    title: "The Long Shiver",
    season: "Winter",
    trigger: { type: "random" },
    scenario:
      "Cold settles over the kingdom like iron. Rivers close, carts freeze in ruts, and every hearth asks whether the crown can keep its people alive until thaw.",
    factTitle: "Historical Context",
    fact:
      "Peasants sometimes used heated stones as hand warmers; one hot stone could hold warmth for hours.",
    factSource: "Medieval winter survival practices",
    choices: [
      {
        label: "A",
        type: "conservative",
        text: "Order people to conserve firewood",
        effects: { food: 0, army: -1, trust: 0, faith: 1 },
        resultText:
          "Parish bells mark hours of rationed flame, and priests preach endurance. Patrols spend their strength enforcing small sacrifices in bitter streets."
      },
      {
        label: "B",
        type: "balanced",
        text: "Slaughter the oxen for food",
        effects: { food: 2, army: 0, trust: 0, faith: 0, nextFoodPenalty: -2 },
        resultText:
          "Meat steams in common pots, and the hungry bless your order. In the fields, empty yokes promise a harder planting when spring returns."
      },
      {
        label: "C",
        type: "aggressive",
        text: "Seize monastery grain",
        effects: { food: 2, army: 0, trust: -2, faith: -1 },
        resultText:
          "Royal carts leave the abbey full, guarded by men who will not meet the monks' eyes. Bell towers answer with a silence colder than snow."
      }
    ]
  },
  {
    id: "great-rain",
    title: "Great Rain",
    season: "Spring",
    trigger: { type: "random" },
    scenario:
      "Rain falls for seven days until the low fields shine like tarnished mirrors. Dikes strain, mills drown, and villagers gather on the roads with carts of sodden grain.",
    factTitle: "Historical Context",
    fact:
      "In the early 14th century, records describe 150 consecutive days of rain, causing catastrophic crop rot and infrastructure damage.",
    factSource: "Great Famine climate, early 14th century",
    choices: [
      {
        label: "A",
        type: "balanced",
        text: "Fund repairs",
        effects: { food: 1, army: -1, trust: 1, faith: 0 },
        resultText:
          "Soldiers and masons shore the banks before the worst breaks through. Harvests are saved, and the villages remember who came in the rain."
      },
      {
        label: "B",
        type: "conservative",
        text: "Abandon the lowlands",
        effects: { food: -1, army: 1, trust: -1, faith: 0 },
        resultText:
          "The army withdraws to dry roads and defensible towns. The crown preserves order, but flooded tenants curse from chapel floors."
      },
      {
        label: "C",
        type: "balanced",
        text: "Ration grain and repair later",
        effects: { food: 1, army: 0, trust: -1, faith: 0 },
        resultText:
          "The stores are measured with cold precision, enough to avoid waste. Those standing knee-deep in water hear prudence as neglect."
      }
    ]
  },
  {
    id: "seed-corn-dilemma",
    title: "Seed Corn Dilemma",
    season: "Spring",
    trigger: { type: "stat", stat: "food", operator: "<=", value: 3 },
    scenario:
      "The seed corn lies under lock while children cry outside the granary wall. Eat it now and live a little longer; plant it later and hope the realm survives to harvest.",
    factTitle: "Historical Context",
    fact:
      "During the Great Famine, many families faced the impossible choice of eating their seed corn or starving before the next harvest.",
    factSource: "Great Famine, 1315-1322",
    choices: [
      {
        label: "A",
        type: "balanced",
        text: "Distribute reserves",
        effects: { food: 2, army: 0, trust: 1, faith: 0, nextFoodPenalty: -2 },
        resultText:
          "Bread reaches the desperate, and gratitude follows the royal carts. The spring fields will remember every sack that never met the soil."
      },
      {
        label: "B",
        type: "aggressive",
        text: "Guard the granary",
        effects: { food: -1, army: 1, trust: -2, faith: 0 },
        resultText:
          "Spears hold the doors, preserving seed for tomorrow. Tonight's hungry faces learn that the future has armed guards."
      },
      {
        label: "C",
        type: "conservative",
        text: "Split the reserves",
        effects: { food: -1, army: 0, trust: 1, faith: 0 },
        resultText:
          "Some seed becomes bread, and some remains for furrows. No one is satisfied, but many accept the fairness of a shared burden."
      }
    ]
  },
  {
    id: "noble-hoards",
    title: "Noble Hoards",
    season: "Summer",
    trigger: { type: "stat", stat: "trust", operator: "<=", value: 4 },
    scenario:
      "Reports reach court of noble barns packed high while village ovens go cold. The barons call it prudence; the people call it theft under heraldic paint.",
    factTitle: "Historical Context",
    fact:
      "Royal and municipal governments often issued decrees against hoarders who exploited famine conditions to raise prices.",
    factSource: "Famine hoarding laws",
    choices: [
      {
        label: "A",
        type: "aggressive",
        text: "Force requisition",
        effects: { food: 2, army: -1, trust: 1, faith: 0 },
        resultText:
          "Royal warrants pry open guarded barns, and grain rolls toward hungry towns. The people cheer while armed retainers test the patience of your soldiers."
      },
      {
        label: "B",
        type: "balanced",
        text: "Buy the grain with tax promises",
        effects: { food: 1, army: 0, trust: 1, faith: 0 },
        resultText:
          "The nobles sell today for favors tomorrow. The markets breathe again, and few ask what debt has been written in the crown's name."
      },
      {
        label: "C",
        type: "aggressive",
        text: "Threaten the barons",
        effects: { food: 2, army: 0, trust: -1, faith: 0 },
        resultText:
          "The threat works quickly: wagons appear before dusk. So does a harder silence among the great houses."
      }
    ]
  },
  {
    id: "summer-drought",
    title: "Summer Drought",
    season: "Summer",
    trigger: { type: "random" },
    scenario:
      "The sun hangs white over cracked fields, and wells answer with mud. Farmers look to the palace while cattle bawl in thirsty pens.",
    factTitle: "Historical Context",
    fact:
      "Although heavy rain was more common in the 14th century, periodic droughts were also dangerous to harvests and livestock.",
    factSource: "14th-century climate stress",
    choices: [
      {
        label: "A",
        type: "balanced",
        text: "Organize irrigation labor",
        effects: { food: 1, army: -1, trust: -1, faith: 0 },
        resultText:
          "Ditches cut the fields like new veins, carrying water where it can still save crops. Forced labor leaves tired hands and resentful hearts."
      },
      {
        label: "B",
        type: "conservative",
        text: "Conserve water for livestock",
        effects: { food: -1, army: 0, trust: 1, faith: 0 },
        resultText:
          "Herds survive under careful watch, and the villages approve saving what can be moved and bred. Grain withers beneath the same merciless sky."
      },
      {
        label: "C",
        type: "balanced",
        text: "Open royal wells",
        effects: { food: 1, army: 0, trust: -1, faith: 0 },
        resultText:
          "The deepest wells are opened to field crews and millers. Relief comes with queues, quarrels, and complaints that royal mercy is too measured."
      }
    ]
  },
  {
    id: "great-council-demand",
    title: "Great Council Demand",
    season: "Summer",
    trigger: { type: "stat", stat: "trust", operator: "<=", value: 5 },
    scenario:
      "Guild elders, abbots, and lesser lords petition for a great council. They claim the realm cannot be ruled by sealed orders while every shire bleeds.",
    factTitle: "Historical Context",
    fact:
      "Magna Carta established the principle that no tax should be levied without the common counsel of the kingdom.",
    factSource: "Magna Carta and common counsel",
    choices: [
      {
        label: "A",
        type: "balanced",
        text: "Summon the council",
        effects: { food: -1, army: 0, trust: 2, faith: 0 },
        resultText:
          "Voices fill the hall until midnight, costly in feasts and concessions. Yet the realm sees a crown willing to hear its own people."
      },
      {
        label: "B",
        type: "aggressive",
        text: "Rule by prerogative",
        effects: { food: 0, army: 1, trust: -2, faith: 0 },
        resultText:
          "Your seal goes forth without debate, backed by armed messengers. The court moves swiftly, but obedience hardens into fear."
      },
      {
        label: "C",
        type: "conservative",
        text: "Make a limited concession",
        effects: { food: 0, army: -1, trust: 1, faith: 0 },
        resultText:
          "A smaller council is promised and carefully bounded. The gesture cools anger, though soldiers lose time escorting envoys and records."
      }
    ]
  },
  {
    id: "poll-tax-resistance",
    title: "Poll Tax Resistance",
    season: "Autumn",
    trigger: { type: "fixed", turn: 6 },
    scenario:
      "Collectors return with split lips and empty ledgers. The new poll tax has met locked doors, hidden purses, and village bells rung as alarms.",
    factTitle: "Historical Context",
    fact:
      "The 1377 poll tax charged poor people as much as the wealthy and became a major trigger of the 1381 Peasants' Revolt.",
    factSource: "Poll Tax and Peasants' Revolt, 1377-1381",
    choices: [
      {
        label: "A",
        type: "aggressive",
        text: "Collect the tax",
        effects: { food: 0, army: 2, trust: -3, faith: 0 },
        resultText:
          "Armed riders gather the tax by force, and the crown can pay its captains. The villages will not soon forget the sound of boots at dawn."
      },
      {
        label: "B",
        type: "balanced",
        text: "Seek alternate funding",
        effects: { food: 0, army: -1, trust: 2, faith: 0 },
        resultText:
          "You spare the poorest hearths and bargain elsewhere for coin. Trust rises, though captains wait longer for pay."
      },
      {
        label: "C",
        type: "conservative",
        text: "Delay the tax",
        effects: { food: 1, army: 0, trust: -1, faith: 0 },
        resultText:
          "The collectors stand down, and goods keep moving for another season. Many read delay as weakness rather than mercy."
      }
    ]
  },
  {
    id: "captured-rebel",
    title: "Captured Rebel",
    season: "Autumn",
    trigger: { type: "stat", stat: "trust", operator: "<=", value: 3 },
    scenario:
      "A rebel captain is dragged before you, muddy and defiant. His followers wait in hiding, eager to learn whether the crown answers rebellion with blood, mercy, or judgment.",
    factTitle: "Historical Context",
    fact:
      "Peasant rebel leaders in medieval revolts were often judged publicly as rulers tried to restore royal authority and deter further unrest.",
    factSource: "Medieval revolt justice",
    choices: [
      {
        label: "A",
        type: "aggressive",
        text: "Public execution",
        effects: { food: 0, army: 2, trust: -2, faith: 0 },
        resultText:
          "The scaffold teaches obedience in a language no one misunderstands. It also makes a martyr for every tongue already turned against you."
      },
      {
        label: "B",
        type: "balanced",
        text: "Royal pardon",
        effects: { food: 0, army: -1, trust: 2, faith: 0 },
        resultText:
          "The pardon spreads faster than the charge that condemned him. Some soldiers call it weakness, but weary villages call it hope."
      },
      {
        label: "C",
        type: "conservative",
        text: "Offer judgment to the Church",
        effects: { food: 0, army: -1, trust: 1, faith: 1 },
        resultText:
          "The bishop accepts custody, wrapping royal danger in sacred procedure. The people see restraint, and the Church sees respect."
      }
    ]
  },
  {
    id: "violation-of-sanctuary",
    title: "Violation of Sanctuary",
    season: "Any",
    trigger: { type: "random" },
    scenario:
      "A wanted knight has taken sanctuary at the high altar, still wearing blood on his sleeve. Your guards wait outside the church doors while the city gathers to watch.",
    factTitle: "Historical Context",
    fact:
      "Sanctuary allowed fugitives to avoid secular arrest within church grounds.",
    factSource: "Church sanctuary practices",
    choices: [
      {
        label: "A",
        type: "aggressive",
        text: "Violate sanctuary",
        effects: { food: 0, army: 1, trust: -2, faith: -1 },
        resultText:
          "The guards seize him beside the altar, proving no stone can shield your enemies. The faithful recoil from a crown that crossed holy ground with steel."
      },
      {
        label: "B",
        type: "conservative",
        text: "Respect the altar",
        effects: { food: 0, army: -1, trust: 1, faith: 1 },
        resultText:
          "You hold the soldiers back, and the clergy praise lawful patience. The army resents watching a quarry sleep under candlelight."
      },
      {
        label: "C",
        type: "balanced",
        text: "Ask bishops to negotiate",
        effects: { food: 0, army: 0, trust: -1, faith: 1 },
        resultText:
          "The bishops bargain in whispers until the fugitive yields terms. Piety is preserved, though the crowd hears compromise as hesitation."
      }
    ]
  },
  {
    id: "threat-of-excommunication",
    title: "Threat of Excommunication",
    season: "Winter",
    trigger: { type: "random" },
    scenario:
      "A sealed warning arrives from Rome: continue defying church privilege and the sacraments may be closed to your realm. Even proud knights pale at the thought of a cursed crown.",
    factTitle: "Historical Context",
    fact:
      "King Henry IV was forced to wait barefoot in the snow for three days at Canossa before Pope Gregory VII revoked his excommunication.",
    factSource: "Canossa and excommunication, 1077",
    choices: [
      {
        label: "A",
        type: "conservative",
        text: "Perform penance",
        effects: { food: 0, army: -1, trust: 2, faith: 1 },
        resultText:
          "Barefoot before the cathedral, you accept rebuke beneath winter rain. The people are moved; the soldiers look away."
      },
      {
        label: "B",
        type: "aggressive",
        text: "Defy the ban",
        effects: { food: 0, army: 1, trust: -2, faith: -1 },
        resultText:
          "You answer Rome with a drawn sword and a locked treasury. The army cheers your iron will, while many souls fear the cost."
      },
      {
        label: "C",
        type: "balanced",
        text: "Send envoys to Rome",
        effects: { food: -1, army: 0, trust: 1, faith: 0 },
        resultText:
          "Gold, letters, and careful apologies begin the long road south. Hope returns to court, though diplomacy eats like a noble guest."
      }
    ]
  },
  {
    id: "monastery-refuge",
    title: "Monastery Refuge",
    season: "Winter",
    trigger: { type: "stat", stat: "food", operator: "<=", value: 3 },
    scenario:
      "The monastery gates shelter beggars, widows, and children while its cellars still hold sacks of barley. The abbot asks aid, not orders.",
    factTitle: "Historical Context",
    fact:
      "Monastic estates were significant landholders that could support their spiritual missions through agricultural surplus.",
    factSource: "Monastic estates and surplus",
    choices: [
      {
        label: "A",
        type: "conservative",
        text: "Support Church charity",
        effects: { food: 2, army: 0, trust: -1, faith: 1 },
        resultText:
          "Royal protection lets the monks distribute their stores without riot. The hungry eat, but some accuse you of hiding behind cassocks."
      },
      {
        label: "B",
        type: "aggressive",
        text: "Seize the stores",
        effects: { food: 2, army: 1, trust: -2, faith: -1 },
        resultText:
          "The abbey cellar opens under royal command, and guards keep the crowd in line. Bread is won at the price of scandal."
      },
      {
        label: "C",
        type: "balanced",
        text: "Share authority with the monastery",
        effects: { food: -1, army: 0, trust: 1, faith: 0 },
        resultText:
          "Crown and cloister distribute aid together, each watching the other closely. The process is fair, slow, and costly."
      }
    ]
  },
  {
    id: "wildfire",
    title: "Wildfire",
    season: "Summer",
    trigger: { type: "random" },
    scenario:
      "A dry wind drives flame through the western woods, leaping hedges and threatening barns. Smoke stains the noon sky over three parishes.",
    factTitle: "Historical Context",
    fact:
      "Medieval people observed that some unusual fires seemed to consume stone and rock rather than wood.",
    factSource: "Medieval fire beliefs",
    choices: [
      {
        label: "A",
        type: "balanced",
        text: "Deploy the army",
        effects: { food: 1, army: -1, trust: 0, faith: 0 },
        resultText:
          "Soldiers cut breaks and drag water until the fire turns. Granaries are spared, though the army limps back with scorched hands and empty lungs."
      },
      {
        label: "B",
        type: "conservative",
        text: "Leave it to the peasants",
        effects: { food: -1, army: 0, trust: -2, faith: 0 },
        resultText:
          "Villagers fight the flames with wet sacks and desperation. They save what they can and remember who watched from safer ground."
      },
      {
        label: "C",
        type: "balanced",
        text: "Evacuate the villages",
        effects: { food: -1, army: 0, trust: 1, faith: 0 },
        resultText:
          "Families flee before the smoke can swallow them. Lives are spared, while abandoned barns feed the fire."
      }
    ]
  },
  {
    id: "early-frost",
    title: "Early Frost",
    season: "Autumn",
    trigger: { type: "random" },
    scenario:
      "Frost silvered the fields before the harvest songs began. Farmers bring blackened leaves to court as proof that nature has broken its bargain.",
    factTitle: "Historical Context",
    fact:
      "The 14th century saw the beginning of the Little Ice Age, when cooler temperatures and shorter growing seasons contributed to starvation.",
    factSource: "Little Ice Age, 14th century",
    choices: [
      {
        label: "A",
        type: "balanced",
        text: "Allow foraging in royal woods",
        effects: { food: 1, army: 0, trust: -1, faith: 0 },
        resultText:
          "Families gather nuts, roots, and game beneath trees once forbidden. The larders improve, but nobles resent opened preserves."
      },
      {
        label: "B",
        type: "aggressive",
        text: "Enforce strict rationing",
        effects: { food: 1, army: 0, trust: -2, faith: 0 },
        resultText:
          "Every loaf is weighed and every mill watched. Food lasts longer under your seal, and resentment lasts with it."
      },
      {
        label: "C",
        type: "conservative",
        text: "Distribute emergency bread",
        effects: { food: -1, army: 0, trust: 1, faith: 0 },
        resultText:
          "Royal ovens burn through the night, sending warm loaves into cold hands. The people bless the gesture as the stores diminish."
      }
    ]
  },
  {
    id: "foreign-mercenaries",
    title: "Foreign Mercenaries",
    season: "Autumn",
    trigger: { type: "stat", stat: "army", operator: "<=", value: 4 },
    scenario:
      "A company of foreign spears camps beyond the river, offering discipline for pay and plunder for permission. Your own banners look thin beside their drilled ranks.",
    factTitle: "Historical Context",
    fact:
      "English kings hired mercenaries from across Europe, and some companies plundered violently even during truces.",
    factSource: "Medieval mercenary warfare",
    choices: [
      {
        label: "A",
        type: "aggressive",
        text: "Hire mercenaries",
        effects: { food: 0, army: 2, trust: -2, faith: 0 },
        resultText:
          "Hard-faced soldiers take your coin and strengthen the line at once. The people hate hearing strange songs near their barns."
      },
      {
        label: "B",
        type: "balanced",
        text: "Rely on local soldiers",
        effects: { food: 0, army: 1, trust: 1, faith: 0 },
        resultText:
          "You arm local men and place them under familiar captains. The host grows modestly, and the shires take pride in defending their own."
      },
      {
        label: "C",
        type: "conservative",
        text: "Hire a small company",
        effects: { food: -1, army: 1, trust: 0, faith: 0 },
        resultText:
          "A smaller band enters service under strict terms. Their wages bite into stores, but their numbers steady the watch."
      }
    ]
  },
  {
    id: "feudal-call-up",
    title: "Feudal Call-Up",
    season: "Winter",
    trigger: { type: "stat", stat: "army", operator: "<=", value: 5 },
    scenario:
      "Your marshal warns that the musters are too thin for another crisis. Vassals owe service, coin, or excuses, and each answer will shape the realm's loyalties.",
    factTitle: "Historical Context",
    fact:
      "The feudal system connected landholding to military service.",
    factSource: "Feudal military levies",
    choices: [
      {
        label: "A",
        type: "aggressive",
        text: "Summon full levy",
        effects: { food: -1, army: 2, trust: 0, faith: 0 },
        resultText:
          "Banners rise from every obligated manor, filling the roads with armed men. So many mouths make the granaries groan."
      },
      {
        label: "B",
        type: "balanced",
        text: "Accept scutage payments",
        effects: { food: 2, army: -1, trust: 0, faith: 0 },
        resultText:
          "Coin and supplies come in place of service, pleasing lords who prefer ledgers to mud. The muster remains dangerously lean."
      },
      {
        label: "C",
        type: "conservative",
        text: "Call only loyal vassals",
        effects: { food: 0, army: -1, trust: 1, faith: 0 },
        resultText:
          "Only trusted banners are summoned, avoiding quarrels with doubtful houses. The realm appreciates restraint, but the host stays small."
      }
    ]
  }
];
