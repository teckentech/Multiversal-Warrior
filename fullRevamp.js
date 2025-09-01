
var IShowableClass;
var IGameData;
var ITraining
var IFight;
var ICanCall;
var ISelUpgrade;
var ICanvas;

var IProgress;
var IUniversal;
var IUniversalChallenger;

var secretKey = "DontLookAtMePls";
var saveData;
var waiting = false;

document.addEventListener('DOMContentLoaded', (event) => {
  createClassInstance()

  passiveImport()
  saveGameData();
  idleTimeChecker()

  IShowableClass.init = true;
});

//an attribute x, with a next attribute = x+ "F", then x will be frozen, and impossible to modify.

class GameData {
  constructor(options) {
    options = options || {}

    this.power = options.power || 1;

    this.essence = options.essence || 0;
    this.essenceProd = options.essenceProd || 0;

    this.universeTime = options.universeTime || 1;

    this.offProgressLimit = options.offProgressLimit || 21600;
    this.lastTick = options.lastTick || Date.now();
    this.tickSpeedOff = options.tickSpeedOff || 0;
    //tickspeed mult temp
    this.tickSpeedMult = options.tickSpeedMult || 0.05;
    this.tickSpeed = options.tickSpeed || 1;
  }
}

class Universal {
  constructor(options) {
    options = options || {};

    this.universe = options.universe || 1;
    this.ascensionPoint = options.ascensionPoint || 0;
    this.ascensionPointMax = options.ascensionPointMax || 0;

    this.milestones = options.milestones || {
      m1: {
        mCheck: function () { return f(IUniversal.universe).gte(2); },
        mReqDesc: "",
        mDesc: "",
      },
      m2: {
        mCheck: function () { return f(IUniversal.universe).gte(5); },
        mReqDesc: "",
        mDesc: "",
      }
    };

    this.energyMulti = options.energyMulti || false;

    this.energyUpgrades = options.energyUpgrades || {
      upgrade1: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
      upgrade2: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
      upgrade3: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
      upgrade4: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
      upgrade5: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
      upgrade6: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
      upgrade7: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
      upgrade8: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
      upgrade9: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
      upgrade10: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
      upgrade11: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
      upgrade12: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
      upgrade13: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
      upgrade14: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
      upgrade15: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
      upgrade16: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
      upgrade17: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
      upgrade18: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
      upgrade19: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
      upgrade20: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
      upgrade21: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
      upgrade22: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
      upgrade23: {
        name: "", nameF: true, level: 0,
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
        showReq: false,
      },
    };

    this.attributesLabels = options.attributesLabels || {
      crit: {
        name: "CRITICAL", nameF: true,
      },

      lifeRegeneration: {
        name: "LIFE REGENERATION", nameF: true,
      },

      defence: {
        name: "DEFENCE", nameF: true,
      },

      defencePenetration: {
        name: "DEFENCE PENETRATION", nameF: true,
      },

      lifeSteal: {
        name: "LIFE STEAL", nameF: true,
      },

      shield: {
        name: "SHIELD", nameF: true,
      },

    }

    this.attributes = options.attributes || {

      //ATTRIBUTE BONUS

      attributesUnlock1: {
        name: "", nameF: true,
        active: false,
        req: function () { return true }
      },

      attributesUnlock2: {
        name: "", nameF: true,
        active: false,
        req1: function () { return true },
        req2: function () { return true },
      },

      attributesUnlock3: {
        name: "", nameF: true,
        active: false,
        req1: function () { return true },
        req2: function () { return true },
      },

      attributeBonus1: {
        name: "", nameF: true,
        active: false,
        effect: 0,
      },

      attributeBonus2: {
        name: "", nameF: true,
        active: false,
        effect: 0,
      },

      attributeBonus3: {
        name: "", nameF: true,
        active: false,
        effect: 0,
      },

      attributeBonus4: {
        name: "", nameF: true,
        active: false,
        effect: 0,
      },

      attributeBonus5: {
        name: "", nameF: true,
        active: false,
        effect: 0,
      },

      attributeBonus6: {
        name: "", nameF: true,
        active: false,
        effect: 0,
      },



      //CRIT

      critMulti: false,

      critPoints: 0,
      critPointsName: "",

      critRate: {
        name: "", nameF: true,
        level: 0, effect: 0, price: 0, priceIdentity: "universalShards", priceIdentityF: true,
      },

      critDamage: {
        name: "", nameF: true,
        level: 0, effect: 0, price: 0, priceIdentity: "universalShards", priceIdentityF: true,
      },

      //LIFE REGENERATION

      regenerationMulti: false,

      regenerationPoints: 0,
      regenerationPointsName: "",

      regeneration: {
        name: "", nameF: true,
        level: 0, effect: 0, price: 0, priceIdentity: "universalShards", priceIdentityF: true,
      },

      maxRegeneration: {
        name: "", nameF: true,
        level: 0, effect: 0, price: 0, priceIdentity: "universalShards", priceIdentityF: true,
      },

      //DEFENCE PENETRATION

      defencePenetrationMulti: false,

      defencePenetrationPoints: 0,
      defencePenetrationPointsName: "",

      defencePenetration: {
        name: "", nameF: true,
        level: 0, effect: 0, price: 0, priceIdentity: "universalNodes", priceIdentityF: true,
      },

      maxDefencePenetration: {
        name: "", nameF: true,
        level: 0, effect: 0, price: 0, priceIdentity: "universalNodes", priceIdentityF: true,
      },

      //DEFENCE

      defenceMulti: false,
      defencePoints: 0,
      defencePointsName: "",

      defence: {
        name: "", nameF: true,
        level: 0, effect: 0, odds: 0, price: 0, priceIdentity: "universalNodes", priceIdentityF: true,
      },
      maxDefence: {
        name: "", nameF: true,
        level: 0, effect: 0, price: 0, priceIdentity: "universalNodes", priceIdentityF: true,
      },

      //LIFE STEAL

      lifeStealMulti: false,
      lifeStealPoints: 0,
      lifeStealPointsName: "",

      lifeSteal: {
        name: "", nameF: true,
        level: 0, effect: 0, price: 0, priceIdentity: "universalCores", priceIdentityF: true,
        active: false,
      },

      lifeStealMax: {
        name: "", nameF: true,
        level: 0, effect: 0, price: 0, priceIdentity: "universalCores", priceIdentityF: true,
      },

      //SHIELD

      shieldMulti: false,
      shieldPoints: 0,
      shieldPointsName: "",

      shield: {
        name: "", nameF: true,
        level: 0, effect: 0, price: 0, priceIdentity: "universalCores", priceIdentityF: true,
      },

      maxShield: {
        name: "", nameF: true,
        level: 0, effect: 0, price: 0, priceIdentity: "universalCores", priceIdentityF: true,
      },

    };



    //HUNT EVOLUTION

    this.huntEvolution = options.huntEvolution || {
      b1: {
        name: "", nameF: true,
        description1: "", description2: "", description3: "", description4: "",
        level: 0, effect1: 0, effect2: 0, effect3: 0, effect4: 0, effect5: 0,
        price: 0, priceIdentity: "universalShards", priceIdentityF: true,
        active1: false, active2: false, active3: false, active4: false, active5: false,
        maxLevel: 0,
      },
      b2: {
        name: "", nameF: true,
        description1: "", description2: "", description3: "", description4: "",
        level: 0, effect1: 0, effect2: 0, effect3: 0, effect4: 0, effect5: 0,
        price: 0, priceIdentity: "universalShards", priceIdentityF: true,
        active1: false, active2: false, active3: false, active4: false, active5: false,
        maxLevel: 0,
      },
      b3: {
        name: "", nameF: true,
        description1: "", description2: "", description3: "", description4: "",
        level: 0, effect1: 0, effect2: 0, effect3: 0, effect4: 0, effect5: 0,
        price: 0, priceIdentity: "universalNodes", priceIdentityF: true,
        active1: false, active2: false, active3: false, active4: false, active5: false,
        maxLevel: 0,
      },
      b4: {
        name: "", nameF: true,
        description1: "", description2: "", description3: "", description4: "",
        level: 0, effect1: 0, effect2: 0, effect3: 0, effect4: 0, effect5: 0,
        price: 0, priceIdentity: "universalNodes", priceIdentityF: true,
        active1: false, active2: false, active3: false, active4: false, active5: false,
        maxLevel: 0,
      },
      b5: {
        name: "", nameF: true,
        description1: "", description2: "", description3: "", description4: "",
        level: 0, effect1: 0, effect2: 0, effect3: 0, effect4: 0, effect5: 0,
        price: 0, priceIdentity: "universalCores", priceIdentityF: true,
        active1: false, active2: false, active3: false, active4: false, active5: false,
        maxLevel: 0,
      },
    }

    this.huntEvolutionLabels = options.huntEvolutionLabels || {
      effect1: {
        level1: "WEAK", level2: "FRAIL", level3: "INSECURE", level4: "ADEGUATE", level5: "COMPETENT", level6: "STRONG", level7: "POWERFUL", level8: "FORMIDABLE", level9: "UNSTOPPABLE", level10: "INVINCIBLE",
      },

      effect2: {
        level1: "SLOW", level2: "SLUGGISH", level3: "CLUMSY", level4: "STEADY", level5: "AVERAGE", level6: "FAST", level7: "SWIFT", level8: "BLINDING", level9: "INSTANTANEOUS", level10: "OMNIPRESENT",
      },

      effect3: {
        level1: "DUMB", level2: "SLOW-WITTED", level3: "SIMPLE", level4: "AVERAGE", level5: "SMART", level6: "CLEVER", level7: "BRILLIANT", level8: "GENIUS", level9: "TRANSCENDENTAL", level10: "OMNISCIENT",
      },

      effect4: {
        level1: "USELESS", level2: "MEANINGLESS", level3: "IRRELEVANT", level4: "MARGINAL", level5: "HELPFUL", level6: "IMPORTANT", level7: "ESSENTIAL", level8: "CRUCIAL", level9: "INDISPENSABLE", level10: "FUNDAMENTAL",
      },

    }

    this.maxInventoryStorage

    this.inventory = options.inventory || {

    };

    this.maxInventoryStorage = options.maxInventoryStorage || 40

    this.inventoryStorage = options.inventoryStorage || {

    };

    this.equipment = options.equipment || {
      item1: { key: null, type: "weapon", subtype: "equipment" },
      item2: { key: null, type: "armor", subtype: "equipment" },
      item3: { key: null, type: "accessory", subtype: "equipment" },
    };

    this.crafting = options.crafting || {
      craftingLevel: f(1),
      craftEffectsLuck: f(0.33),
      starIncrementer: f(0.25),
    };

    this.automation = {
      automation1: {
        unlocked: false,
        active: false, price: 0, priceIdentity: "universalShards", priceIdentityF: true,
        level: 0, maxLevel: 0,
      },
      automation2: {
        unlocked: false,
        active: false, price: 0, priceIdentity: "universalShards", priceIdentityF: true,
      },
      automation3: {
        unlocked: false,
        active: false, price: 0, priceIdentity: "universalShards", priceIdentityF: true,
      },
      automation4: {
        unlocked: false,
        active: false, price: 0, priceIdentity: "universalShards", priceIdentityF: true,
      },
      automation5: {
        unlocked: false,
        active: false, price: 0, priceIdentity: "universalShards", priceIdentityF: true,
      },
    }

    this.lore = options.lore || {
      lore1: {
        text: "", active: true,
      },
      lore2: {
        text: "", active: true,
      },
      lore3: {
        text: "", active: true,
      },
      lore4: {
        text: "", active: true,
      },
      lore5: {
        text: "", active: true,
      },
    }
  }
}



class Training {
  constructor(options) {
    options = options || {}

    this.title = options.title || ""
    this.titleF = true;
    this.reqDescription = ""

    this.base = options.base || {
      base1: {
        name: "Damage", nameF: true, tot: 0, prod: 0, level: 1, price: 0, priceIdentity: "", group: "group1", groupF: true, active: false,
        descripion: "", descriptionF: true,
      },

      base2: {
        name: "Life", nameF: true, tot: 0, prod: 0, level: 1, price: 0, priceIdentity: "", group: "group1", groupF: true, active: false,
        descripion: "", descriptionF: true,
      },

      base3: {
        name: "Will", nameF: true, tot: 0, prod: 0, level: 1, price: 0, priceIdentity: "", group: "group1", groupF: true, active: false,
        description: "Physical Training ×", descriptionF: true,
        req: function () { return f(IGameData.power).gte(f(10)) }, reqF: true,
        reqDescription: "Unlock New Training At 10 Power", reqDescriptionF: true,
      },

      base4: {
        name: "Insight", nameF: true, tot: 0, prod: 0, level: 1, price: 0, priceIdentity: "", group: "group1", groupF: true, active: false,
        description: "Essence/s ×", descriptionF: true,
        req: function () { return f(IGameData.power).gte(f(10)) }, reqF: true,
        reqDescription: "Unlock New Training At 10 Power", reqDescriptionF: true,
      },
    }
  }
}

class Fight {
  constructor(options) {
    options = options || {};

    this.youStats = options.youStats || {
      onFight1: false,
      onFight2: false,
      fightController1: "",
      fightController2: "",
      leftLife: 0,
      damage: 0,
      life: 0,
    };

    this.onFightStats = options.onFightStats || {
      life: 0,
      leftLife: 0,
      damage: 0,
    };

    this.challengers = options.challengers || {
      baseChallenger: {
        name: "", damage: 0, life: 0, leftLife: 0, title: "", level: 1, maxLevel: 0,
      },
      universalChallenger: {
        name: "", damage: 0, life: 0, leftLife: 0, title: "", level: 1, maxLevel: 0,
      }
    };

    this.challengerRewards = options.challengerRewards || {
      reward1: {
        name: "Damage And Life Training × ", nameF: true, level: 0, effect: 0
      },
      reward2: {
        name: "Will And Insight Training × ", nameF: true, level: 0, effect: 0
      },
    };

    this.huntingMulti = options.huntingMulti || false,

      this.normalHunting = options.normalHunting || {
        hunt1: {
          name: "Slime", nameF: true, level: 0, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true, active: false,
          req: function () { return }, unlocked: false,
          reqDescription: "", reqDescriptionF: true,
          reqF: true,
        },
        hunt2: {
          name: "Zombie", nameF: true, level: 0, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true, active: false,
          req: function () { return }, unlocked: false,
          reqDescription: "", reqDescriptionF: true,
        },
        hunt3: {
          name: "Knight", nameF: true, level: 0, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true, active: false,
          req: function () { return }, unlocked: false,
          reqDescription: "", reqDescriptionF: true,
          reqF: true,
        },
        hunt4: {
          name: "Demon", nameF: true, level: 0, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true, active: false,
          req: function () { return }, unlocked: false,
          reqDescription: "", reqDescriptionF: true,
          reqF: true,
        },
        hunt5: {
          name: "Wyvern", nameF: true, level: 0, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true, active: false,
          req: function () { return }, unlocked: false,
          reqDescription: "", reqDescriptionF: true,
          reqF: true,
        }
      };

    this.normalHuntingRewards = options.normalHuntingRewards || {
      upgrade1: {
        name: "Damage × ", nameF: true, level: 0, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true,
        req: function () { return f(IFight.normalHunting.hunt1.level).gte(f(10)) },
        reqDescription: "", reqDescriptionF: true,
        reqF: true,
      },
      upgrade2: {
        name: "Life × ", nameF: true, level: 0, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true,
        req: function () { return f(IFight.normalHunting.hunt2.level).gte(f(10)) },
        reqDescription: "", reqDescriptionF: true,
        reqF: true,
      },
      upgrade3: {
        name: "Slime Multiplies Essence By × ", nameF: true, level: 0, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true,
        req: function () { return f(IFight.normalHunting.hunt3.level).gte(f(10)) },
        reqDescription: "", reqDescriptionF: true,
        reqF: true,
      },
      upgrade4: {
        name: "Percentage Of Damage Added To Life", nameF: true, level: 0, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true,
        req: function () { return f(IFight.normalHunting.hunt4.level).gte(f(10)) },
        reqDescription: "", reqDescriptionF: true,
        reqF: true,
      },
      upgrade5: {
        name: "Multiply Challenger First Reward By × ", nameF: true, level: 0, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true,
        req: function () { return f(IFight.normalHunting.hunt5.level).gte(f(10)) },
        reqDescription: "", reqDescriptionF: true,
        reqF: true,
      },
    };
  }
}



class ShowableClass {
  constructor(options) {
    options = options || {}

    this.popUp = options.popUp || {

    }

    this.svg = options.svg || {
      ascensionCirclesScale: 0.3, ascensionCirclesScaleF: true,
    }

    this.flashIntervals = options.flashIntervals || {

    }

    this.flashState = options.flashState || {

    };

    this.init = options.init || true;

    this.showable = options.showable || {

      //Valutes

      essenceValute: false, universalValute: false,

      universalShardsBase: true,
      universalNodesBase: false,
      universalCoresBase: false,

      //Pages

      mainMenu: true, mainMenuExit: false,

      offSave: false,

      resetScreen: false, opaqueScreen2: false, opaqueScreen3: false,



      fp2_content2_1_container: false, fp2_content2_6_container: false, fp2_content2_7_container: false, fp2_content2_11_container: false, fp2_content2_4_container: false, fp2_content2_10_container: false, fp2_content2_8_container: false, fp2_content1_8: false, fp2_content2_12_container: false, fp2_content2_13_container: false, fp2_content2_14_container: false, fp2_content2_15_container: false, fp2_content2_16_container: false,

      options: false, achievements: false, content2_1: false, content2_4: false, content2_6: false, content2_7: false, content2_8: false, content2_10: false, content2_11: false, content2_12: false, content2_13: false, content2_14: false, content2_15: false, content2_16: false,

      fp2_content2_1: true, fp2_content2_4: true, fp2_content2_5: true, fp2_content2_6: true, fp2_achievements: false, fp2_content2_7: true, fp2_content2_8: true, fp2_content2_10: true, fp2_content2_11: true, fp2_content2_12: true, fp2_content2_13: true, fp2_content2_14: true, fp2_content2_15: true, fp2_content2_16: true,

      fp3_content1_1: false, fp3_content1_2: false, fp3_content1_4: false, fp3_content1_8: false,

      //Challenger

      c2_4_B_part1: true, c2_4_VS: true, c2_10_VS: true,

      //challenger rewards

      //Universal Challenger

      c2_10_challenges: false,

      c2_4_rewards_reward1: false, c2_4_rewards_reward2: false,

      //Hunting
      content2_6_hunt1_button: false, content2_6_hunt2_button: false, content2_6_hunt3_button: false, content2_6_hunt4_button: false, content2_6_hunt5_button: false,
      content2_6_hunt1: false, content2_6_hunt2: false, content2_6_hunt3: false, content2_6_hunt4: false, content2_6_hunt5: false,

      //hunt evolution

      content2_6_huntEvolution: false,
      //hunting rewards
      content2_6_upgrade1_button: false,
      content2_6_upgrade2_button: false,
      content2_6_upgrade3_button: false,
      content2_6_upgrade4_button: false,
      content2_6_upgrade5_button: false,
      content2_6_upgrade1: false,
      content2_6_upgrade2: false,
      content2_6_upgrade3: false,
      content2_6_upgrade4: false,
      content2_6_upgrade5: false,

      //bases
      base1: false, base2: false, base3: false, base4: false,

      //Milestones

      content1_7_m1: false, content1_7_m2: false,

      //energyButtons

      content2_7_upgrade1_b1: true,
      content2_7_upgrade2_b1: false,
      content2_7_upgrade3_b1: false,
      content2_7_upgrade4_b1: false,
      content2_7_upgrade5_b1: false,

      content2_7_upgrade6_b1: true,
      content2_7_upgrade7_b1: false,
      content2_7_upgrade8_b1: false,
      content2_7_upgrade9_b1: false,
      content2_7_upgrade10_b1: false,

      content2_7_upgrade11_b1: true,
      content2_7_upgrade12_b1: false,
      content2_7_upgrade13_b1: false,
      content2_7_upgrade14_b1: false,
      content2_7_upgrade15_b1: false,

      content2_7_upgrade16_b1: true,
      content2_7_upgrade17_b1: false,
      content2_7_upgrade18_b1: false,
      content2_7_upgrade19_b1: false,
      content2_7_upgrade20_b1: false,

      content2_7_upgrade21_b1: false,
      content2_7_upgrade22_b1: false,
      content2_7_upgrade23_b1: false,

      //Attributes

      content2_11_grid_b1: false,
      content2_11_grid_b2: false,
      content2_11_grid_b3: false,
      content2_11_grid_b4: false,
      content2_11_grid_b5: false,
      content2_11_grid_b6: false,
      content2_11_grid_b7: false,
      content2_11_grid_b8: false,
      content2_11_grid_b9: false,

      content2_11_grid_b1_cont: false,
      content2_11_grid_b2_cont: false,
      content2_11_grid_b4_cont: false,
      content2_11_grid_b5_cont: false,
      content2_11_grid_b7_cont: false,
      content2_11_grid_b8_cont: false,

      content2_11_grid_c1: false,
      content2_11_grid_c2: false,
      content2_11_grid_c4: false,
      content2_11_grid_c5: false,
      content2_11_grid_c7: false,
      content2_11_grid_c8: false,



      content2_11_grid_exit: false,
    }

  }
}

class CanCall {
  constructor(options) {
    options = options || {}
    this.offProgressCanCall = options.offProgressCanCall || true;
    this.importSaveCanCall = options.importCanCall || true;
    this.valuesSetterCanCall = options.valuesSetterCanCall || true;
    this.visualLoopFunction = options.visualLoopFunction || true;
  }
}

class SelUpgrade {
  constructor(options) {
    options = options || {}
    this.group = options.group || {
      //bases
      group1: {
        num: 0, maxNum: 1, lastSel: "",
      },
      group2: {
        num: 0, maxNum: 1, lastSel: "",
      },
    }
  }
}


class Canvas {
  constructor(options) {
    options = options || {}


    // it works with percetiles
    this.screen = options.screen || {

    }
  }
}

class Screen {
  constructor(options) {
    options = options || {}

  }
}

class Progress {
  constructor(options) {
    options = options || {}
    this.actualProgress = options.actualProgress || 1;

    this.progress = options.progress || {
      p1: "Reach 10 Life to unlock Challenger", p1Check: function () { return progressBar(ITraining.base.base2.tot, 10, "progressBarFp4") },
      p1Progress: function () { return progressBarInfo(ITraining.base.base2.tot, 10, "progressBarFp4") },
      p1F: true, p1CheckF: true,

      p2: "Defeat Challenger 3 to unlock Hunting", p2Check: function () { return progressBar(IFight.challengers.baseChallenger.level, 4, "progressBarFp4") },
      p2Progress: function () { return progressBarInfo(IFight.challengers.baseChallenger.level, 4, "progressBarFp4") },
      p2F: true, p2CheckF: true,

      p3: "Defeat Challenger 10 to unlock Ascension", p3Check: function () { return progressBar(IFight.challengers.baseChallenger.level, 11, "progressBarFp4") },
      p3Progress: function () { return progressBarInfo(IFight.challengers.baseChallenger.level, 11, "progressBarFp4") },
      p3F: true, p3CheckF: true,

      p4: "Reach Universe 5 To Unlock Universal Challenger And Attributes", p4Check: function () { return progressBar(IUniversal.universe, 5, "progressBarFp4") },
      p4Progress: function () { return progressBarInfo(IUniversal.universe, 5, "progressBarFp4") },
      p4F: true, p4CheckF: true,
    }
  }
}

class UniversalChallenger {
  constructor(options) {
    options = options || {}

    this.universalShards = options.universalShards || 0;
    this.universalShardsProd = options.universalShardsProd || 0;

    this.universalNodes = options.universalNodes || 0;
    this.universalNodesProd = options.universalNodesProd || 0;

    this.universalCores = options.universalCores || 0;
    this.universalCoresProd = options.universalCoresProd || 0;

    this.challengers = options.challengers || {
      universalChallenger: {
        name: "", damage: 0, life: 0, leftLife: 0, title: "", level: 1, maxLevel: 0,
      }
    };

    this.descriptionF = true

    this.universalChallengerRewards = options.universalChallengerRewards || {
      reward1: {
        name: "Universal Shards/s: ", nameF: true, level: 0, effect: 0
      },
    };

    this.universalChallengerChallenges = options.universalChallengerChallenges || {
      c1: {
        name: "<div>CHALLENGE: DISABLE HUNTING</div>", nameF: true, active: false, level: 0, maxLevel: 0,
        description: "",
      },
      c2: {
        name: "<div>DISABLE ENERGY</div>", nameF: true, active: false, level: 0, maxLevel: 0,
        description: "",
      },
    };

    this.universalChallengerChallengesRewards = options.universalChallengerChallengesRewards || {
      c1: {
        name: "<div>Universal Nodes</div>", nameF: true, level: 0, effect: 0
      },
      c2: {
        name: "<div>Universal Cores</div>", nameF: true, level: 0, effect: 0
      },
    };
  }
}

//SAVING

function createClassInstance(type) {
  if (type == null) {
    IShowableClass = new ShowableClass();
    IGameData = new GameData();
    ITraining = new Training();
    IFight = new Fight();
    ICanCall = new CanCall();
    ISelUpgrade = new SelUpgrade();
    ICanvas = new Canvas();

    IProgress = new Progress();
    IUniversal = new Universal();
    IUniversalChallenger = new UniversalChallenger();
  }

  if (type == 1) {
    IShowableClass = new ShowableClass();
    IGameData = new GameData();
    ITraining = new Training();
    IFight = new Fight();
    ICanCall = new CanCall();
    ISelUpgrade = new SelUpgrade();
    ICanvas = new Canvas();
  }
}

function createSaveData(type) {
  if (type == null) {
    saveData = {
      IShowableClass: IShowableClass,
      IGameData: IGameData,
      ITraining: ITraining,
      IFight: IFight,
      ICanCall: ICanCall,
      ISelUpgrade: ISelUpgrade,
      ICanvas: ICanvas,

      IProgress: IProgress,
      IUniversal: IUniversal,
      IUniversalChallenger,
    };
  }

  if (type == 1) {
    saveData = {
      IShowableClass: IShowableClass,
      IGameData: IGameData,
      ITraining: ITraining,
      IFight: IFight,
      ICanCall: ICanCall,
      ISelUpgrade: ISelUpgrade,
      ICanvas: ICanvas,
    };
  }
}


function saveGameData() {
  createSaveData()
  const stringifiedData = JSON.stringify(saveData);
  localStorage.setItem("GameSave", stringifiedData);

}

function offSaveGameData() {
  createSaveData()
  const stringifiedData = JSON.stringify(saveData);
  localStorage.setItem("GameSaveOff", stringifiedData);

}

function resetSave() {
  createClassInstance()
  createSaveData()

  const stringifiedData = JSON.stringify(saveData);

  localStorage.setItem("GameSave", stringifiedData);
}

function partialResetSave(type) {
  createClassInstance(type)
  createSaveData(type)

  IGameData.universeTime = f(0)

  const stringifiedData = JSON.stringify(saveData);

  localStorage.setItem("GameSave", stringifiedData);
}

function deepMerge(obj1, obj2) {
  for (let key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      if (obj2[key] instanceof Object && obj1[key] instanceof Object) {
        obj1[key] = deepMerge(obj1[key], obj2[key]);
      } else {
        //check if it must be frozen
        if (obj1[key + "F"]) {
        }
        else {
          obj1[key] = obj2[key];
        }
      }
    }
  }
  return obj1;
}

function encryptData(data, key) {
  return CryptoJS.AES.encrypt(data, key).toString();
}

function decryptData(data, key) {
  var bytes = CryptoJS.AES.decrypt(data, key);
  return bytes.toString(CryptoJS.enc.Utf8);
}

function exportSave() {
  saveGameData();
  var exportSaveData = localStorage.getItem("GameSave");
  var encryptedData = CryptoJS.AES.encrypt(exportSaveData, secretKey).toString();
  document.getElementById("Save").value = encryptedData;
}

function offExportSave() {
  offSaveGameData();
}

function importSave() {
  if (!document.getElementById("Save").value == "") {
    IShowableClass.init = true;
    resetSave()
    var encryptedData = document.getElementById("Save").value;
    const decryptedData = decryptData(encryptedData, secretKey);
    try {
      var savedGameData = JSON.parse(decryptedData);
      for (let x in savedGameData) {
        if (saveData[x]) {
          deepMerge(saveData[x], savedGameData[x]);
        }
      }
    } catch (e) {

    }
    //resetCanvas()

    IShowableClass.init = true;
  }
}

function offImportSave() {
  IShowableClass.init = true;
  resetSave();

  if (localStorage.getItem("GameSaveOff") !== null) {
    const savedGameData = JSON.parse(localStorage.getItem("GameSaveOff"));

    try {
      saveGameData(); // <--- Spostato fuori dal ciclo
      for (let x in savedGameData) {
        if (saveData[x]) {
          deepMerge(saveData[x], savedGameData[x]);
        }
      }
    } catch (e) {
      console.error("Errore nella decifratura o parsing dei dati: ", e);
    }
  }

  IShowableClass.init = true;
}

function passiveImport() {
  if (localStorage.getItem("GameSave") !== null) {

    var encryptedData = JSON.parse(localStorage.getItem("GameSave"));
    try {
      var savedGameData = encryptedData;
      for (let x in savedGameData) {
        saveGameData()
        if (saveData[x]) {
          deepMerge(saveData[x], savedGameData[x]);
        }
      }
    } catch (e) {
      console.error("Errore nella decifratura o parsing dei dati: ", e);
    }
  }
}

document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    // Salva i dati solo quando l'utente lascia la pagina

    offExportSave();
  } else {
    // Importa i dati quando l'utente ritorna alla pagina
    if (localStorage.getItem("GameSaveOff") !== null) {
      offImportSave();
    }
  }
});

//COSE DA FARE/AGGIUNTE

function update(id, content) {
  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = content;
  } else {
    console.error(`Element with ID '${id}' not found`);
  }
}

function updateClass(cla, content) {
  var update = document.getElementsByClassName(cla);
  var x = 0;

  while (update[x] != null) {
    update[x].innerHTML = content;
    x++;
  }
}

//VISUAL ALL LAYERS

function visualValute() {

  if (f(IUniversal.universe).gte(f(2))) {
    var UniversalText = `<span class="boldBlackBorder">${IUniversal.universe}</span><span class="grey"> Universe</span>`
  } else {
    UniversalText = ""
  }
  update("powerValute", `<div><span class="boldBlackBorder">${format(IGameData.power, 1)}</span><span class="grey"> Power</span></div><div>${UniversalText}</div>`)

  update("essenceBase", `<span class="boldBlackBorder">${format(IGameData.essence)}</span> <span class="grey"> Essence</span>`)
  update("essenceProd", `<span class="boldBlackBorder">${format(sec(IGameData.essenceProd))}/s`)

  update("universalShardsBase", `<span class="boldBlackBorder">${format(IUniversalChallenger.universalShards)}</span><span class="grey"> Universal Shards</span>`)
  update("universalNodesBase", `<span class="boldBlackBorder">${format(IUniversalChallenger.universalNodes)}</span><span class="grey"> Universal Nodes</span>`)
  update("universalCoresBase", `<span class="boldBlackBorder">${format(IUniversalChallenger.universalCores)}</span><span class="grey"> Universal Cores</span>`)

}

function buy(item, propertyToUpdate, effect, type) {

  var priceId = item.priceIdentity
  var pri = f(item.price)

  if (type == "uni") {
    if (f(IUniversal[priceId]).gte(f(pri))) {
      // Modifica il valore della proprietà specificata in base al tipo di effetto

      if (typeof effect == "boolean") {
        item[propertyToUpdate] = effect ? 1 : 0;  // Aggiorna la proprietà con un valore booleano
      } else {
        if (f(effect) instanceof Decimal) {
          item[propertyToUpdate] = f(item[propertyToUpdate]).add(f(effect));  // Aggiorna la proprietà specificata (ad esempio: 'level', 'count', ecc.)
        }
      }

      // Dopo l'acquisto, riduci le risorse del giocatore
      IUniversal[priceId] = f(IUniversal[priceId]).minus(f(pri));
      valuesSetter();
      return true;
    } else {
      return false;
    }
  }

  if (type == "uniChallenger") {

    if (f(IUniversalChallenger[priceId]).gte(f(pri))) {

      // Modifica il valore della proprietà specificata in base al tipo di effetto
      if (typeof effect == "boolean") {
        item[propertyToUpdate] = effect ? 1 : 0;  // Aggiorna la proprietà con un valore booleano
      } else {
        if (f(effect) instanceof Decimal) {
          item[propertyToUpdate] = f(item[propertyToUpdate]).add(f(effect));  // Aggiorna la proprietà specificata (ad esempio: 'level', 'count', ecc.)
        }
      }

      // Dopo l'acquisto, riduci le risorse del giocatore
      IUniversalChallenger[priceId] = f(IUniversalChallenger[priceId]).minus(f(pri));
      valuesSetter();
      return true;
    } else {
      return false;
    }
  }

  if (type == "uniFree") {
    if (f(IUniversal[priceId]).gte(f(pri))) {
      // Modifica il valore della proprietà specificata in base al tipo di effetto

      if (typeof effect == "boolean") {
        item[propertyToUpdate] = effect ? 1 : 0;  // Aggiorna la proprietà con un valore booleano
      } else {
        if (f(effect) instanceof Decimal) {
          item[propertyToUpdate] = f(item[propertyToUpdate]).add(f(effect));  // Aggiorna la proprietà specificata (ad esempio: 'level', 'count', ecc.)
        }
      }
      valuesSetter();
      return true;
    } else {
      return false;
    }
  }

  if (type == "uniChallengerFree") {

    if (f(IUniversalChallenger[priceId]).gte(f(pri))) {

      // Modifica il valore della proprietà specificata in base al tipo di effetto
      if (typeof effect == "boolean") {
        item[propertyToUpdate] = effect ? 1 : 0;  // Aggiorna la proprietà con un valore booleano
      } else {
        if (f(effect) instanceof Decimal) {
          item[propertyToUpdate] = f(item[propertyToUpdate]).add(f(effect));  // Aggiorna la proprietà specificata (ad esempio: 'level', 'count', ecc.)
        }
      }

      valuesSetter();
      return true;
    } else {
      return false;
    }
  }

  if (type == "free") {
    if (f(IGameData[priceId]).gte(f(pri))) {
      // Modifica il valore della proprietà specificata in base al tipo di effetto
      if (f(effect) instanceof Decimal) {
        item[propertyToUpdate] = f(item[propertyToUpdate]).add(f(effect));  // Aggiorna la proprietà specificata (ad esempio: 'level', 'count', ecc.)
      }

      if (typeof effect == "boolean") {
        item[propertyToUpdate] = effect ? 1 : 0;  // Aggiorna la proprietà con un valore booleano
      }

      valuesSetter();
      return true;
    } else {
      return false;
    }
  }

  if (f(IGameData[priceId]).gte(f(pri))) {
    // Modifica il valore della proprietà specificata in base al tipo di effetto
    if (f(effect) instanceof Decimal) {
      item[propertyToUpdate] = f(item[propertyToUpdate]).add(f(effect));  // Aggiorna la proprietà specificata (ad esempio: 'level', 'count', ecc.)
    }

    if (typeof effect == "boolean") {
      item[propertyToUpdate] = effect ? 1 : 0;  // Aggiorna la proprietà con un valore booleano
    }

    // Dopo l'acquisto, riduci le risorse del giocatore
    IGameData[priceId] = f(IGameData[priceId]).minus(f(pri));
    valuesSetter();
    return true;
  } else {
    return false;
  }
}

function checkBuy(priceIdentity, price, type) {

  if (type == "uni") {
    if (f(IUniversal[priceIdentity]).gte(f(price))) {
      return true;
    } else {
      return false;
    }
  }

  if (type == "uniChallenger") {
    if (f(IUniversalChallenger[priceIdentity]).gte(f(price))) {
      return true;
    } else {
      return false;
    }
  }


  if (f(IGameData[priceIdentity]).gte(f(price))) {
    return true;
  } else {
    return false;
  }
}

function visualProgress() {

  var locator = IProgress.actualProgress;

  var checkMetod = `p${locator}Check`

  if (IProgress.progress[checkMetod] != null) {

    if (IProgress.progress[checkMetod]() == true) {

      IProgress.actualProgress += 1
    }

    update("progressInfo", `<div>[${IProgress.progress["p" + locator + "Progress"]()}]    ${IProgress.progress["p" + locator]}</div>`)
  } else {
    locator = IProgress.actualProgress - 1;
    IProgress.actualProgress = IProgress.actualProgress - 1

    checkMetod = `p${locator}Check`
    update("progressInfo", `<div>[${IProgress.progress["p" + locator + "Progress"]()}]    ${IProgress.progress["p" + locator]}</div>`)
  }
}

function visualAutomation() {
  //TRAINING

  update("fp3_content1_8_auto1_title", `<span class="boldBlackBorder">TRAINING</span>`)
  update("fp3_content1_8_auto1_1", `Maximum Active Trainings: ${format(f(ISelUpgrade.group.group1.maxNum), 0)}`)

  if (f(IUniversal.automation.automation1.level).equals(f(IUniversal.automation.automation1.maxLevel))) {
    update("fp3_content1_8_auto1_b1", `<div class="noClick">MAX</div>`)
  } else {
    update("fp3_content1_8_auto1_b1", `<div class="noClick">UPGRADE<div>
                                     <div class="noClick">Universal Shards: ${format(f(IUniversal.automation.automation1.price))}</div>`)
  }

  //HUNTING
  update("fp3_content1_8_auto2_title", `<span class="boldBlackBorder">HUNTING</span>`)
  update("fp3_content1_8_auto2_1", `Autobuy Hunts (Doesnt Consume Essence)`)

  if (IUniversal.automation.automation2.unlocked) {
    if (IUniversal.automation.automation2.active) {
      document.getElementById(`fp3_content1_8_auto2_b1`).style.backgroundColor = "#004526"
      update("fp3_content1_8_auto2_b1", `<div class="noClick">DEACTIVE</div>`)
    } else {
      document.getElementById(`fp3_content1_8_auto2_b1`).style.backgroundColor = "#660000"
      update("fp3_content1_8_auto2_b1", `<div class="noClick">ACTIVE</div>`)
    }
  } else {
    update("fp3_content1_8_auto2_b1", `<div class="noClick">UPGRADE<div>
                                     <div class="noClick">Universal Shards: ${format(f(IUniversal.automation.automation2.price))}</div>`)
  }

  update("fp3_content1_8_auto3_1", `Autobuy Hunting Upgrades (Doesnt Consume Essence)`)

  if (IUniversal.automation.automation3.unlocked) {
    if (IUniversal.automation.automation3.active) {
      document.getElementById(`fp3_content1_8_auto3_b1`).style.backgroundColor = "#004526"
      update("fp3_content1_8_auto3_b1", `<div class="noClick">DEACTIVE</div>`)
    } else {
      document.getElementById(`fp3_content1_8_auto3_b1`).style.backgroundColor = "#660000"
      update("fp3_content1_8_auto3_b1", `<div class="noClick">ACTIVE</div>`)
    }
  } else {
    update("fp3_content1_8_auto3_b1", `<div class="noClick">UPGRADE<div>
                                     <div class="noClick">Universal Shards: ${format(f(IUniversal.automation.automation3.price))}</div>`)
  }

  //CHALLENGER

  update("fp3_content1_8_auto4_title", `<span class="boldBlackBorder">CHALLENGER</span>`)
  update("fp3_content1_8_auto4_1", `<div class="centerDiv">Auto Challenge Challenger</div>
                                    <div class="centerDiv">(Only If Your Damage And Life Is Highter Than The Challenger's)</div>`)

  if (IUniversal.automation.automation4.unlocked) {
    if (IUniversal.automation.automation4.active) {
      document.getElementById(`fp3_content1_8_auto4_b1`).style.backgroundColor = "#004526"
      update("fp3_content1_8_auto4_b1", `<div class="noClick">DEACTIVE</div>`)
    } else {
      document.getElementById(`fp3_content1_8_auto4_b1`).style.backgroundColor = "#660000"
      update("fp3_content1_8_auto4_b1", `<div class="noClick">ACTIVE</div>`)
    }
  } else {
    update("fp3_content1_8_auto4_b1", `<div class="noClick">UPGRADE<div>
                                     <div class="noClick">Universal Shards: ${format(f(IUniversal.automation.automation4.price))}</div>`)
  }

  //ASCENSION

  update("fp3_content1_8_auto5_title", `<span class="boldBlackBorder">ASCENSION</span>`)
  update("fp3_content1_8_auto5_1", `<div class="centerDiv">Auto Ascend</div>
                                    <div class="centerDiv">(Doesnt Reset Anything)</div>
                                    <div class="centerDiv">You Can Ascend Without Resetting, Permanently</div>`)

  if (IUniversal.automation.automation5.unlocked) {
    if (IUniversal.automation.automation5.active) {
      document.getElementById(`fp3_content1_8_auto5_b1`).style.backgroundColor = "#004526"
      update("fp3_content1_8_auto5_b1", `<div class="noClick">DEACTIVE</div>`)
    } else {
      document.getElementById(`fp3_content1_8_auto5_b1`).style.backgroundColor = "#660000"
      update("fp3_content1_8_auto5_b1", `<div class="noClick">ACTIVE</div>`)
    }
  } else {
    update("fp3_content1_8_auto5_b1", `<div class="noClick">UPGRADE<div>
                                     <div class="noClick">Universal Shards: ${format(f(IUniversal.automation.automation5.price))}</div>`)
  }

}
//VALUTE

function fullSetter() {
  valuesSetter()
  valuesSetterDinamic()
}


function valuesSetter(type) {
  //global 

  var global1 = f(IGameData.tickSpeedMult);

  //tickSpeed

  if (!waiting) {
    IGameData.tickSpeedMult = f(0.05);
  }

  var tickSpeed2 = f(IGameData.tickSpeedMult);

  IGameData.tickSpeedProd = f(1).mul(f(tickSpeed2))

  IGameData.tickSpeed = f(IGameData.tickSpeedProd)

  //Power bases

  //damage training
  var base1_2 = IFight.challengerRewards.reward1.effect

  if (f(ITraining.base.base3.tot).gte(f(1))) {
    var base1_3 = ITraining.base.base3.tot;
  }
  else {
    base1_3 = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade1.active) {
    var base1_4 = f(IUniversal.energyUpgrades.upgrade1.effect);
  }
  else {
    base1_4 = f(0)
  }

  if (IUniversal.energyUpgrades.upgrade3.active) {
    var base1_5 = f(IUniversal.energyUpgrades.upgrade3.effect);
  }
  else {
    base1_5 = f(1)
  }

  if (IUniversal.attributes.attributeBonus3.active) {
    var base1_6 = f(IUniversal.attributes.attributeBonus3.effect)
  } else {
    var base1_6 = f(1)
  }

  ITraining.base.base1.prod = (f(0.2).mul(f(base1_2)).add(f(base1_4))).mul(f(base1_3)).mul(f(base1_5)).mul(f(base1_6));
  ITraining.base.base1.level = f(ITraining.base.base1.level);
  ITraining.base.base1.description = `<span class="boldBlackBorder">${format(f(ITraining.base.base1.tot), 2)}</span>`


  //life training
  var base2_2 = IFight.challengerRewards.reward1.effect

  if (f(ITraining.base.base3.tot).gte(f(1))) {
    var base1_4 = ITraining.base.base3.tot;
  }
  else {
    ITraining.base.base3.tot = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade6.active) {
    var base1_5 = IUniversal.energyUpgrades.upgrade6.effect;
  }
  else {
    base1_5 = f(0)
  }

  if (IUniversal.energyUpgrades.upgrade7.active) {
    var lifeTraining6 = IUniversal.energyUpgrades.upgrade7.effect;
  }
  else {
    lifeTraining6 = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade8.active) {
    var lifeTraining7 = IUniversal.energyUpgrades.upgrade8.effect;
  }
  else {
    lifeTraining7 = f(1)
  }

  if (IUniversal.attributes.attributeBonus3.active) {
    var lifeTraining8 = f(IUniversal.attributes.attributeBonus3.effect)
  } else {
    var lifeTraining8 = f(1)
  }


  ITraining.base.base2.prod = (f(1).mul(f(base2_2)).add(f(base1_5))).mul(f(base1_4)).mul(f(lifeTraining6)).mul(f(lifeTraining7)).mul(f(lifeTraining8));
  ITraining.base.base2.level = f(ITraining.base.base2.level);
  ITraining.base.base2.description = `<span class="boldBlackBorder">${format(f(ITraining.base.base2.tot), 2)}</span>`


  //Will training

  var base3_1 = IFight.challengerRewards.reward2.effect

  if (IUniversal.attributes.attributeBonus4.active) {
    var base3_2 = f(IUniversal.attributes.attributeBonus4.effect)
  } else {
    var base3_2 = f(1)
  }


  ITraining.base.base3.prod = f(0.01).mul(f(base3_1)).mul(f(base3_2))
  ITraining.base.base3.level = f(ITraining.base.base3.level);
  ITraining.base.base3.description = `Physical Training ×<span class="boldBlackBorder">${format(f(ITraining.base.base3.tot), 2)}</span>`

  //Insight training

  var base4_1 = IFight.challengerRewards.reward2.effect

  if (IUniversal.attributes.attributeBonus4.active) {
    var base4_2 = f(IUniversal.attributes.attributeBonus4.effect)
  } else {
    var base4_2 = f(1)
  }

  ITraining.base.base4.prod = f(0.01).mul((base4_1)).mul(f(base4_2));
  ITraining.base.base4.level = f(ITraining.base.base4.level);
  ITraining.base.base4.description = `Essence/s ×<span class="boldBlackBorder">${format(f(ITraining.base.base4.tot), 2)}</span>`


  //leftLife


  if (!IFight.youStats.onFight1 && !IFight.youStats.onFight2) {
    IFight.youStats.leftLife = f(IFight.youStats.life)
  }

  //CHALLENGER

  //BASE CHALLENGER

  //name

  IFight.challengers.baseChallenger.name = "Challenger"

  //damage

  var cDamage1 = f(IFight.challengers.baseChallenger.level)

  var cDamage2 = cDamage1.dividedBy(5).floor()

  if (IUniversal.energyUpgrades.upgrade16.active) {
    var cDamage3 = IUniversal.energyUpgrades.upgrade16.effect;
  }
  else {
    cDamage3 = f(1)
  }

  var cDamage4 = cDamage1.dividedBy(10).floor()

  IFight.challengers.baseChallenger.damage = Decimal.div(f(1).mul(((f(5).add(cDamage2).add(f(cDamage4))).pow((cDamage1).minus(f(1))))), f(cDamage3))

  //life

  var cLife1 = f(IFight.challengers.baseChallenger.level)

  var cLife3 = cLife1.dividedBy(5).floor()

  if (IUniversal.energyUpgrades.upgrade17.active) {
    var cLife4 = IUniversal.energyUpgrades.upgrade17.effect;
  }
  else {
    cLife4 = f(1)
  }

  var cLife5 = cLife1.dividedBy(10).floor()

  IFight.challengers.baseChallenger.life = Decimal.div(f(10).mul(((((f(5).add(f(cLife3)).add(f(cLife5))).pow(f(cLife1).minus(f(1))))))), f(cLife4))


  //leftLife

  if (!IFight.youStats.onFight1) {

    IFight.challengers.baseChallenger.leftLife = f(IFight.challengers.baseChallenger.life)
  }

  //Normal Challenger Max Level 

  IFight.challengers.baseChallenger.maxLevel = f(9).add(f(IUniversal.universe))


  //challenger Rewards


  IFight.challengerRewards.reward1.level = f(IFight.challengerRewards.reward1.level)
  IFight.challengerRewards.reward2.level = f(IFight.challengerRewards.reward2.level)

  if (IFight.normalHuntingRewards.upgrade5.active) {
    var cReward = f(IFight.normalHuntingRewards.upgrade5.effect)
  } else {
    cReward = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade18.active) {
    var cReward2 = IUniversal.energyUpgrades.upgrade18.effect;
  }
  else {
    cReward2 = f(1)
  }

  IFight.challengerRewards.reward1.name = `Damage And Life Training ×<span class="boldBlackBorder">${format(f(IFight.challengerRewards.reward1.effect), 0)}</span>`
  IFight.challengerRewards.reward2.name = `Will And Insight Training ×<span class="boldBlackBorder">${format(f(IFight.challengerRewards.reward2.effect), 0)}</span>`

  IFight.challengerRewards.reward1.effect = (f(2).pow((f(IFight.challengerRewards.reward1.level)))).mul(f(cReward)).mul(f(cReward2))
  IFight.challengerRewards.reward2.effect = (f(2).pow((f(IFight.challengerRewards.reward2.level)))).mul(f(cReward))
  //UNIVERSAL CHALLENGER

  //name

  IUniversalChallenger.challengers.universalChallenger.name = `Universal Challenger ${IUniversalChallenger.challengers.universalChallenger.level}`

  //damage

  if (type == "universalChallengerChallenge2" || IUniversalChallenger.universalChallengerChallenges.c2.active) {
    var cDamage1 = f(IUniversalChallenger.challengers.universalChallenger.level).add(f(18))
  } else {
    cDamage1 = f(IUniversalChallenger.challengers.universalChallenger.level).add(f(10))
  }

  if (f(IUniversalChallenger.challengers.universalChallenger.level).gte(f(10))) {
    var cDamage2 = cDamage1.dividedBy(5).floor()
  } else {
    cDamage2 = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade19.active) {
    var cDamage3 = IUniversal.energyUpgrades.upgrade19.effect;
  }
  else {
    cDamage3 = f(1)
  }


  IUniversalChallenger.challengers.universalChallenger.damage = ((f(7.2).add(cDamage2)).pow((cDamage1))).mul(f(cDamage3))

  //life

  if (type == "universalChallengerChallenge2" || IUniversalChallenger.universalChallengerChallenges.c2.active) {
    var cLife1 = f(IUniversalChallenger.challengers.universalChallenger.level).add(f(18))
  } else {
    cLife1 = f(IUniversalChallenger.challengers.universalChallenger.level).add(f(10))
  }

  if (f(IUniversalChallenger.challengers.universalChallenger.level).gte(f(10))) {
    var cLife2 = cLife1.dividedBy(5).floor()
  } else {
    cLife2 = f(1)
  }
  if (IUniversal.energyUpgrades.upgrade19.active) {
    var cLife3 = IUniversal.energyUpgrades.upgrade19.effect;
  }
  else {
    cLife3 = f(1)
  }

  IUniversalChallenger.challengers.universalChallenger.life = ((f(7.2).add(cLife2)).pow((cLife1))).mul(f(cLife3))


  //leftLife

  if (!IFight.youStats.onFight2) {

    IUniversalChallenger.challengers.universalChallenger.leftLife = f(IUniversalChallenger.challengers.universalChallenger.life)
  }

  //Universal Challenger Max Level 

  //Universal challenger Rewards

  IUniversalChallenger.universalChallengerRewards.reward1.name = `<div>Universal Challenger <span class="boldBlackBorder">${IUniversalChallenger.challengers.universalChallenger.maxLevel}</span></div><div><span class="boldBlackBorder">${format(sec(IUniversalChallenger.universalShardsProd), 1)}/s</span> Universal Shards</div>`

  IUniversalChallenger.universalChallengerRewards.reward1.level = f(IUniversalChallenger.challengers.universalChallenger.maxLevel)

  if (IUniversal.energyUpgrades.upgrade20.active) {
    var reward1 = IUniversal.energyUpgrades.upgrade20.effect;
  }
  else {
    reward1 = f(1)
  }

  IUniversalChallenger.universalChallengerRewards.reward1.effect = ((((f(10).pow((f(IUniversalChallenger.universalChallengerRewards.reward1.level)))))).minus(f(1))).mul(f(reward1))


  //UNIVERSAL CHALLENGER CHALLENGES


  IUniversalChallenger.universalChallengerChallenges.c1.name = `<div>Disable Hunting</div>`

  IUniversalChallenger.universalChallengerChallengesRewards.c1.level = f(IUniversalChallenger.universalChallengerChallengesRewards.c1.level)

  IUniversalChallenger.universalChallengerChallenges.c1.maxLevel = f(IUniversalChallenger.universalChallengerChallenges.c1.maxLevel)



  IUniversalChallenger.universalChallengerChallenges.c2.name = `<div>Only Training, harder Universal Challenger</div>`


  IUniversalChallenger.universalChallengerChallengesRewards.c2.level = f(IUniversalChallenger.universalChallengerChallengesRewards.c2.level)

  IUniversalChallenger.universalChallengerChallenges.c2.maxLevel = f(IUniversalChallenger.universalChallengerChallenges.c2.maxLevel)



  //UNIVERSAL CHALLENGER CHALLENGES REWARDS

  var sel = IUniversalChallenger.universalChallengerChallengesRewards.c1

  sel.name = `<div>Universal Challenger <span class="boldBlackBorder">${sel.level}</span></div><div><span class="boldBlackBorder">${format(f(sel.effect))}/s</span> Universal Nodes</div>`

  if (f(IUniversalChallenger.universalChallengerChallengesRewards.c1.level).gte(f(1))) {
    sel.effect = ((f(5).pow((f(IUniversalChallenger.universalChallengerChallengesRewards.c1.level)))))
  } else {
    sel.effect = f(0)
  }

  var sel = IUniversalChallenger.universalChallengerChallengesRewards.c2

  sel.name = `<div>Universal Challenger <span class="boldBlackBorder">${sel.level}</span></div><div><span class="boldBlackBorder">${format(f(sel.effect))}/s</span> Universal Cores</div>`

  if (f(IUniversalChallenger.universalChallengerChallengesRewards.c2.level).gte(f(1))) {
    sel.effect = ((f(10).pow((f(IUniversalChallenger.universalChallengerChallengesRewards.c2.level)))))
  } else {
    sel.effect = f(0)
  }

  //hunting

  //Hunt 1

  var sel = IFight.normalHunting.hunt1;

  sel.level = f(sel.level);

  if (IUniversal.energyUpgrades.upgrade15.active) {
    var extraEffect1 = f(IFight.normalHunting.hunt2.level).mul(IUniversal.energyUpgrades.upgrade15.effect);
  } else {
    extraEffect1 = f(0);
  }

  if (IUniversal.huntEvolution.b1.active1) {
    var extraEffect2 = f(IUniversal.huntEvolution.b1.effect1);
  } else {
    extraEffect2 = f(1);
  }

  if (sel.active) {
    sel.effect = (f(sel.level).add(f(extraEffect1))).mul(f(1.1).mul(f(1).add(f(0.10).mul(f(sel.level))))).mul(f(extraEffect2));
  } else {
    sel.effect = f(0);
  }

  if (IUniversal.huntEvolution.b1.active2) {
    var extraEffect1 = f(IUniversal.huntEvolution.b1.effect2);
  } else {
    extraEffect1 = f(1);
  }

  if (sel.level == 0) {
    sel.price = f(0);
  } else {
    sel.price = (f(10).pow(1)).mul(f(1.2).pow(f(sel.level))).dividedBy(f(extraEffect1));
  }

  sel.req = function () {
    if (IFight.youStats.damage != "NaN") {
      return f(IFight.youStats.damage).gte(f(0))
    }
  }

  sel.reqDescription = "Reach 1e3 Damage to unlock next";

  if (f(sel.level).greaterThan(f(0))) {
    sel.active = true;
  }

  if (sel.req()) {
    sel.unlocked = true;
  }

  // Hunt 2
  var sel2 = IFight.normalHunting.hunt2;

  if (IUniversal.energyUpgrades.upgrade15.active) {
    var extraEffect1 = f(IFight.normalHunting.hunt3.level).mul(IUniversal.energyUpgrades.upgrade15.effect);
  } else {
    extraEffect1 = f(0);
  }

  if (IUniversal.huntEvolution.b2.active1) {
    var extraEffect2 = f(IUniversal.huntEvolution.b2.effect1);
  } else {
    extraEffect2 = f(1);
  }

  sel2.level = f(sel2.level);

  if (sel2.active) {
    sel2.effect = f(20).mul(
      f(sel2.level).add(f(extraEffect1))
        .mul(f(1).add(f(0.15).mul(f(sel2.level).add(f(extraEffect1))))).mul(f(extraEffect2))
    );
  } else {
    sel2.effect = f(0);
  }

  if (IUniversal.huntEvolution.b2.active2) {
    var extraEffect1 = f(IUniversal.huntEvolution.b2.effect2);
  } else {
    extraEffect1 = f(1);
  }

  sel2.price = f(1).mul(f(10).pow(3)).mul(f(1.3).pow(f(1).add(f(sel2.level)))).dividedBy(f(extraEffect1));

  sel2.req = function () {
    if (IFight.youStats.damage != "NaN") {
      return f(IFight.youStats.damage).gte(f(10).pow(f(3)))
    }
  }


  sel2.reqDescription = `
  <div class="width100">
    <div><i>People who failed this universe</i></div>
    <div>Reach 1000 Damage to unlock Zombie  (${format(f(IFight.youStats.damage), 1)} / 1000)</div>
  </div>`;

  if (f(sel2.level).greaterThan(f(0))) {
    sel2.active = true;
  }

  if (sel2.req()) {
    sel2.unlocked = true;
  }

  // Hunt 3
  var sel3 = IFight.normalHunting.hunt3;

  sel3.level = f(sel3.level);

  if (IUniversal.energyUpgrades.upgrade15.active) {
    var extraEffect1 = f(IFight.normalHunting.hunt4.level).mul(IUniversal.energyUpgrades.upgrade15.effect);
  } else {
    extraEffect1 = f(0);
  }

  if (IUniversal.huntEvolution.b3.active1) {
    var extraEffect2 = f(IUniversal.huntEvolution.b3.effect1);
  } else {
    extraEffect2 = f(1);
  }

  if (sel3.active) {
    sel3.effect = f(400).mul(
      f(sel3.level).add(f(extraEffect1))
        .mul(f(1).add(f(0.20).mul(f(sel3.level).add(f(extraEffect1))))).mul(f(extraEffect2))
    );
  } else {
    sel3.effect = f(0);
  }

  if (IUniversal.huntEvolution.b3.active2) {
    var extraEffect1 = f(IUniversal.huntEvolution.b3.effect2);
  } else {
    extraEffect1 = f(1);
  }

  sel3.price = f(2).mul(f(10).pow(4)).mul(f(1.4).pow(f(1).add(f(sel3.level)))).dividedBy(f(extraEffect1));

  sel3.req = function () {
    if (IFight.youStats.damage != "NaN") {
      return f(IFight.youStats.damage).gte(f(10).pow(f(4)))
    }
  }

  sel3.reqDescription = `
  <div class="width100">
    <div><i>Why suddenly every knight wants to duel me? Werent Challengers enought?</i></div>
    <div>Reach 1e4 Damage to unlock Knight  (${format(f(IFight.youStats.damage), 1)} / 1e4)</div>
  </div>`;

  if (f(sel3.level).greaterThan(f(0))) {
    sel3.active = true;
  }

  if (sel3.req()) {
    sel3.unlocked = true;
  }

  // Hunt 4
  var sel4 = IFight.normalHunting.hunt4;

  sel4.level = f(sel4.level);

  if (IUniversal.energyUpgrades.upgrade15.active) {
    var extraEffect1 = f(IFight.normalHunting.hunt5.level).mul(IUniversal.energyUpgrades.upgrade15.effect);
  } else {
    extraEffect1 = f(0);
  }

  if (IUniversal.huntEvolution.b4.active1) {
    var extraEffect2 = f(IUniversal.huntEvolution.b4.effect1);
  } else {
    extraEffect2 = f(1);
  }

  if (sel4.active) {
    sel4.effect = f(8000).mul(
      f(sel4.level).add(f(extraEffect1))
        .mul(f(1).add(f(0.25).mul(f(sel4.level).add(f(extraEffect1))))).mul(f(extraEffect2))
    );
  } else {
    sel4.effect = f(0);
  }

  if (IUniversal.huntEvolution.b4.active2) {
    var extraEffect1 = f(IUniversal.huntEvolution.b4.effect2);
  } else {
    extraEffect1 = f(1);
  }

  sel4.price = f(1).mul(f(10).pow(7)).mul(f(1.5).pow(f(1).add(f(sel4.level)))).dividedBy(f(extraEffect1));

  sel4.req = function () {
    if (IFight.youStats.damage != "NaN") {
      return f(IFight.youStats.damage).gte(f(10).pow(f(5)))
    }
  }


  sel4.reqDescription = `
  <div class="width100">
    <div><i>Demons have been meeting me, they tell me im the chosen</i></div>
    <div>Reach 1e5 Damage to unlock Demon  (${format(f(IFight.youStats.damage), 1)} / 1e5)</div>
  </div>`;

  if (f(sel4.level).greaterThan(f(0))) {
    sel4.active = true;
  }

  if (sel4.req()) {
    sel4.unlocked = true;
  }

  // Hunt 5
  var sel5 = IFight.normalHunting.hunt5;

  sel5.level = f(sel5.level);

  var hunt1;
  if (IUniversal.energyUpgrades.upgrade13.active) {
    hunt1 = f(IUniversal.energyUpgrades.upgrade13.effect);
  } else {
    hunt1 = f(1);
  }

  if (IUniversal.huntEvolution.b5.active1) {
    var extraEffect2 = f(IUniversal.huntEvolution.b5.effect1);
  } else {
    extraEffect2 = f(1);
  }

  if (sel5.active) {
    sel5.effect = f(160000).mul(
      f(sel5.level).mul(f(1).add(f(0.30).mul(f(sel5.level)))).mul(f(extraEffect2))
    ).mul(f(hunt1));
  } else {
    sel5.effect = f(0);
  }

  if (IUniversal.huntEvolution.b5.active2) {
    var extraEffect1 = f(IUniversal.huntEvolution.b5.effect2);
  } else {
    extraEffect1 = f(1);
  }


  sel5.price = f(5).mul(f(10).pow(8)).mul(f(1.6).pow(f(1).add(f(sel5.level)))).dividedBy(f(extraEffect1));



  sel5.req = function () {

    if (IFight.youStats.damage != "NaN") {
      return f(IFight.youStats.damage).gte(f(10).pow(f(6)))
    }
  }



  sel5.reqDescription = `
  <div class="width100">
    <div><i>Fortunately no wyvern knights, i've already dealt with the knights alone</i></div>
    <div>Reach 1e6 Damage to unlock Wyvern  (${format(f(IFight.youStats.damage), 1)} / 1e6)</div>
  </div>`;

  if (f(sel5.level).greaterThan(f(0))) {
    sel5.active = true;
  }

  if (sel5.req()) {
    sel5.unlocked = true;
  }

  //huntingRewards

  //HUNT REWARD 1

  IFight.normalHuntingRewards.upgrade1.name = `Damage ×<span class="boldBlackBorder">${format(f(IFight.normalHuntingRewards.upgrade1.effect), 0)}</span>`

  IFight.normalHuntingRewards.upgrade1.level = f(IFight.normalHuntingRewards.upgrade1.level)

  if (IUniversal.energyUpgrades.upgrade14.active) {
    var extraLevel1 = f(Decimal.log10(f(IFight.normalHunting.hunt1.level).mul(f(IUniversal.energyUpgrades.upgrade14.effect)))).floor()
  } else {
    extraLevel1 = f(0)
  }

  IFight.normalHuntingRewards.upgrade1.effect = f(2).pow(f(IFight.normalHuntingRewards.upgrade1.level).add(f(extraLevel1)))

  if (IUniversal.huntEvolution.b1.active3) {
    var extraEffect1 = f(IUniversal.huntEvolution.b1.effect3);
  } else {
    extraEffect1 = f(1);
  }

  IFight.normalHuntingRewards.upgrade1.price = (f(10).mul(f(10).pow(f(IFight.normalHuntingRewards.upgrade1.level).add(f(1))))).dividedBy(f(extraEffect1))

  IFight.normalHuntingRewards.upgrade1.reqDescription = `
  <div class="width100">
    <div><i class="centerDiv">Slime cores when Ingested makes me stronger</i></div>
    <div class="centerDiv">Reach 10 ${IFight.normalHunting.hunt1.name}  (${format(f(IFight.normalHunting.hunt1.level), 0)} / 10)</div>
  </div>`;

  if (f(IFight.normalHuntingRewards.upgrade1.level).greaterThan(f(0))) {
    IFight.normalHuntingRewards.upgrade1.active = true;
  }


  //HUNT REWARD 2

  IFight.normalHuntingRewards.upgrade2.name = `Life ×<span class="boldBlackBorder">${format(f(IFight.normalHuntingRewards.upgrade2.effect), 0)}</span>`

  IFight.normalHuntingRewards.upgrade2.level = f(IFight.normalHuntingRewards.upgrade2.level)

  if (IUniversal.energyUpgrades.upgrade14.active) {
    var extraLevel1 = f(Decimal.log10(f(IFight.normalHunting.hunt2.level).mul(f(IUniversal.energyUpgrades.upgrade14.effect)))).floor()
  } else {
    extraLevel1 = f(0)
  }

  IFight.normalHuntingRewards.upgrade2.effect = f(5).pow(f(IFight.normalHuntingRewards.upgrade2.level).add(f(extraLevel1)))

  if (IUniversal.huntEvolution.b2.active3) {
    var extraEffect1 = f(IUniversal.huntEvolution.b2.effect3);
  } else {
    extraEffect1 = f(1);
  }

  IFight.normalHuntingRewards.upgrade2.price = (f(200).mul(f(100).pow(f(IFight.normalHuntingRewards.upgrade2.level).add(f(1))))).dividedBy(f(extraEffect1))

  IFight.normalHuntingRewards.upgrade2.reqDescription = `
  <div class="width100">
    <div><i class="centerDiv">Understanding zombies life forms makes me able inflict curses on my enemies! Am i evil?</i></div>
    <div class="centerDiv">Reach 10 ${IFight.normalHunting.hunt2.name}  (${format(f(IFight.normalHunting.hunt2.level), 0)} / 10)</div>
  </div>`;


  if (f(IFight.normalHuntingRewards.upgrade2.level).greaterThan(f(0))) {
    IFight.normalHuntingRewards.upgrade2.active = true;
  }

  //HUNT REWARD 3

  IFight.normalHuntingRewards.upgrade3.name = `Essence/s ×<span class="boldBlackBorder">Slime (${format(f(IFight.normalHuntingRewards.upgrade3.effect), 0)})</span>`

  IFight.normalHuntingRewards.upgrade3.level = f(IFight.normalHuntingRewards.upgrade3.level)

  if (IUniversal.energyUpgrades.upgrade14.active) {
    var extraLevel1 = f(Decimal.log10(f(IFight.normalHunting.hunt3.level).mul(f(IUniversal.energyUpgrades.upgrade14.effect)))).floor()
  } else {
    extraLevel1 = f(0)
  }

  IFight.normalHuntingRewards.upgrade3.effect = ((f(IFight.normalHuntingRewards.upgrade3.level).add(f(extraLevel1))).mul(f(1.3).pow(f(IFight.normalHunting.hunt1.level).div(f(10)))))

  if (IUniversal.huntEvolution.b3.active3) {
    var extraEffect1 = f(IUniversal.huntEvolution.b3.effect3);
  } else {
    extraEffect1 = f(1);
  }

  IFight.normalHuntingRewards.upgrade3.price = (f(4000).mul(f(1000).pow(f(IFight.normalHuntingRewards.upgrade3.level).add(f(1))))).dividedBy(f(extraEffect1))

  IFight.normalHuntingRewards.upgrade3.reqDescription = `
  <div class="width100">
    <div><i class="centerDiv">Slime infused with blessings is an essence concentrator</i></div>
    <div class="centerDiv">Reach 10 ${IFight.normalHunting.hunt3.name}  (${format(f(IFight.normalHunting.hunt3.level), 0)} / 10)</div>
  </div>`;

  if (f(IFight.normalHuntingRewards.upgrade3.level).greaterThan(f(0))) {
    IFight.normalHuntingRewards.upgrade3.active = true;
  }

  //HUNT REWARD 4

  IFight.normalHuntingRewards.upgrade4.name = `Add <span class="boldBlackBorder">${format(f(IFight.normalHuntingRewards.upgrade4.effect).mul(f(100)), 0)}%</span> of Damage to Life`

  IFight.normalHuntingRewards.upgrade4.level = f(IFight.normalHuntingRewards.upgrade4.level)

  if (IUniversal.energyUpgrades.upgrade14.active) {
    var extraLevel1 = f(Decimal.log10(f(IFight.normalHunting.hunt4.level).mul(f(IUniversal.energyUpgrades.upgrade14.effect)))).floor()
  } else {
    extraLevel1 = f(0)
  }


  IFight.normalHuntingRewards.upgrade4.effect = f(IFight.normalHuntingRewards.upgrade4.level).add(f(extraLevel1))

  if (IUniversal.huntEvolution.b4.active4) {
    var extraEffect1 = f(IUniversal.huntEvolution.b4.effect3);
  } else {
    extraEffect1 = f(1);
  }

  IFight.normalHuntingRewards.upgrade4.price = (f(80000).mul(f(10000).pow(f(IFight.normalHuntingRewards.upgrade4.level).add(f(1))))).dividedBy(f(extraEffect1))

  IFight.normalHuntingRewards.upgrade4.reqDescription = `
  <div class="width100">
    <i class="centerDiv">The stronger i am, the stronger i spite death</i></div>
    <div class="centerDiv">Reach 10 ${IFight.normalHunting.hunt4.name}  (${format(f(IFight.normalHunting.hunt4.level), 0)} / 10)</div>
  </div>`;

  if (f(IFight.normalHuntingRewards.upgrade4.level).greaterThan(f(0))) {
    IFight.normalHuntingRewards.upgrade4.active = true;
  }

  //HUNT REWARD 5

  IFight.normalHuntingRewards.upgrade5.name = `Challenger first reward ×<span class="boldBlackBorder">${format(f(IFight.normalHuntingRewards.upgrade5.effect), 0)}</span>`

  IFight.normalHuntingRewards.upgrade5.level = f(IFight.normalHuntingRewards.upgrade5.level)

  if (IUniversal.energyUpgrades.upgrade14.active) {
    var extraLevel1 = f(Decimal.log10(f(IFight.normalHunting.hunt5.level).mul(f(IUniversal.energyUpgrades.upgrade14.effect)))).floor()
  } else {
    extraLevel1 = f(0)
  }

  IFight.normalHuntingRewards.upgrade5.effect = f(1).add(f(0.1).mul(f(IFight.normalHuntingRewards.upgrade5.level).add(f(extraLevel1))).mul(f(IFight.challengers.baseChallenger.level)))

  if (IUniversal.huntEvolution.b5.active3) {
    var extraEffect1 = f(IUniversal.huntEvolution.b5.effect3);
  } else {
    extraEffect1 = f(1);
  }

  IFight.normalHuntingRewards.upgrade5.price = (f(1600000).mul(f(100000).pow(f(IFight.normalHuntingRewards.upgrade5.level).add(f(1))))).dividedBy(f(extraEffect1))

  IFight.normalHuntingRewards.upgrade5.reqDescription = `
  <div class="width100">
    <i class="centerDiv">Draconic arts enchance my training... is the wyvern a dragon?</i></div>
    <div class="centerDiv">Reach 10 ${IFight.normalHunting.hunt5.name}  (${format(f(IFight.normalHunting.hunt5.level), 0)} / 10)</div></div>
  </div>`;


  if (f(IFight.normalHuntingRewards.upgrade5.level).greaterThan(f(0))) {
    IFight.normalHuntingRewards.upgrade5.active = true;
  }
  //Universe

  IUniversal.universe = f(IUniversal.universe)

  //Milestones

  IUniversal.milestones.m1.mReqDesc = `Universe 2`
  IUniversal.milestones.m1.mDesc = `Energy`

  IUniversal.milestones.m2.mReqDesc = `Universe 5`
  IUniversal.milestones.m2.mDesc = `Universal Challenger, Attributes, Automation`


  //REQUISITES
  //Base

  ITraining.reqDescription = `<div><i class="centerDiv">Push yourself beyond your limits, not only in flesh and bones strength resides</i><br>
  <div class="centerDiv">Unlock new training at 10 Power</div></div>`

  ITraining.base.base3.reqDescription = `<div><i class="centerDiv">Push yourself beyond your limits, not only in flesh and bones strength resides</i><br>
  <div class="centerDiv">Unlock new training at 10 Power</div></div>`

  ITraining.base.base4.reqDescription = `<div><i class="centerDiv">In This Reality, The Mind Sees More Than Eyes Can, Is This World Enough?</i><br>
  <div class="centerDiv">Unlock New Training At 10 Power</div></div>`;


  //ASCENSION UPGRADES

  if (IUniversal.energyUpgrades.upgrade23.active) {
    var priceDivider1 = f(IUniversal.energyUpgrades.upgrade23.effect)
  } else {
    priceDivider1 = f(1)
  }

  //POTENTIAL
  var sel = IUniversal.energyUpgrades.upgrade1

  sel.name = `<div>Add <span class="boldBlackBorder">10/s</span> to Damage Training</div><div>×10 per LVL</div>`
  sel.effectDesc = `+${sel.effect}`
  sel.level = f(sel.level)
  if (f(sel.level).gte(f(1))) {
    sel.effect = f(10).pow(f(sel.level))
  } else {
    sel.effect = 0;
  }
  sel.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  sel.showReq = true

  var sel = IUniversal.energyUpgrades.upgrade2

  sel.name = `Damage <span class="boldBlackBorder">×2</span> per LVL`
  sel.effectDesc = `×${sel.effect}`
  sel.level = f(sel.level)
  sel.effect = f(2).pow(f(sel.level))
  sel.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  if (IUniversal.energyUpgrades.upgrade1.active) {
    sel.showReq = true
  } else {
    sel.showReq = false
  }

  var sel = IUniversal.energyUpgrades.upgrade3

  sel.name = `Damage Training <span class="boldBlackBorder">×5</span> per LVL`
  sel.effectDesc = `×${sel.effect}`
  sel.level = f(sel.level)
  sel.effect = f(5).pow(f(sel.level))
  sel.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  if (IUniversal.energyUpgrades.upgrade2.active) {
    sel.showReq = true
  } else {
    sel.showReq = false
  }

  var sel = IUniversal.energyUpgrades.upgrade4

  sel.name = `<div>Damage <span class="boldBlackBorder">×</span></div> <div><span class="boldBlackBorder">log(Universe Time)</span> per LVL</div>`
  sel.effectDesc = `×${format(f(sel.effect), 0)}`
  sel.level = f(sel.level)
  if (f(IGameData.universeTime).gte(f(3)) && IGameData.universeTime != "NaN" && IGameData.universeTime != undefined) {
    sel.effect = f(Decimal.log2(IGameData.universeTime)).mul(f(sel.level))
  } else[
    sel.effect = f(1)
  ]
  sel.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  if (IUniversal.energyUpgrades.upgrade3.active) {
    sel.showReq = true
  } else {
    sel.showReq = false
  }

  var sel = IUniversal.energyUpgrades.upgrade5

  sel.name = `Damage <span class="boldBlackBorder">^1.02</span> per LVL`
  sel.effectDesc = `^${format(f(sel.effect), 2)}`
  sel.level = f(sel.level)
  sel.effect = f(1).add(f(0.02).mul(f(sel.level)))
  sel.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  if (IUniversal.energyUpgrades.upgrade4.active) {
    sel.showReq = true
  } else {
    sel.showReq = false
  }

  //WEIGHT
  var sel = IUniversal.energyUpgrades.upgrade6

  sel.name = `<div>Add <span class="boldBlackBorder">10/s</span> to Life Training</div><div>×10 per LVL</div>`
  sel.effectDesc = `+${sel.effect}`
  sel.level = f(sel.level)
  if (f(sel.level).gte(f(1))) {
    sel.effect = f(10).pow(f(sel.level))
  } else {
    sel.effect = 0;
  }
  sel.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  sel.showReq = true

  var sel = IUniversal.energyUpgrades.upgrade7

  sel.name = `<div>Life Training <span class="boldBlackBorder">×</span></div> <div><span class="boldBlackBorder">Universe</span> per LVL</div>`
  sel.effectDesc = `×${sel.effect}`
  sel.level = f(sel.level)
  sel.effect = f(IUniversal.universe).mul(f(sel.level))
  sel.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  if (IUniversal.energyUpgrades.upgrade6.active) {
    sel.showReq = true
  } else {
    sel.showReq = false
  }

  var sel = IUniversal.energyUpgrades.upgrade8

  sel.name = `Life Training <span class="boldBlackBorder">×2</span> per LVL`
  sel.effectDesc = `×${sel.effect}`
  sel.level = f(sel.level)
  sel.effect = f(2).pow(f(sel.level))
  sel.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  if (IUniversal.energyUpgrades.upgrade7.active) {
    sel.showReq = true
  } else {
    sel.showReq = false
  }

  var sel = IUniversal.energyUpgrades.upgrade9

  sel.name = `Life <span class="boldBlackBorder">×5</span> per LVL`
  sel.effectDesc = `×${sel.effect}`
  sel.level = f(sel.level)
  sel.effect = f(5).pow(f(sel.level))
  sel.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  if (IUniversal.energyUpgrades.upgrade8.active) {
    sel.showReq = true
  } else {
    sel.showReq = false
  }

  var sel = IUniversal.energyUpgrades.upgrade10

  sel.name = `Life <span class="boldBlackBorder">^1.02</span> per LVL`
  sel.effectDesc = `^${format(f(sel.effect), 2)}`
  sel.level = f(sel.level)
  sel.effect = f(1).add(f(0.02).mul(f(sel.level)))
  sel.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  if (IUniversal.energyUpgrades.upgrade9.active) {
    sel.showReq = true
  } else {
    sel.showReq = false
  }

  //PURITY
  var sel = IUniversal.energyUpgrades.upgrade11

  sel.name = `Essence/s <span class="boldBlackBorder">×5</span> per LVL`
  sel.effectDesc = `×${sel.effect}`
  sel.level = f(sel.level)
  sel.effect = f(5).pow(f(sel.level))
  sel.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  sel.showReq = true

  var sel = IUniversal.energyUpgrades.upgrade12

  sel.name = `Essence/s <span class="boldBlackBorder">×log(Total hunt levels per LVL)</span>`
  sel.effectDesc = `×${format(f(sel.effect), 0)}`
  sel.level = f(sel.level)

  var tot = f(0)
  for (let i in IFight.normalHunting) {
    var s = IFight.normalHunting[i]

    tot = f(tot).add(f(s.level))
  }

  if (f(tot).gte(f(3))) {
    sel.effect = f(Decimal.log2(tot)).mul(f(sel.level))
  } else {
    sel.effect = f(1)
  }

  sel.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  if (IUniversal.energyUpgrades.upgrade11.active) {
    sel.showReq = true
  } else {
    sel.showReq = false
  }

  var sel = IUniversal.energyUpgrades.upgrade13

  sel.name = `Wyverns Essence/s <span class="boldBlackBorder">×log(Knights)</span> per LVL`
  sel.effectDesc = `×${format(f(sel.effect), 0)}`
  sel.level = f(sel.level)
  if (f(IFight.normalHunting.hunt3.level).gte(2)) {
    sel.effect = f(Decimal.log2(IFight.normalHunting.hunt3.level)).mul(f(sel.level))

  } else {
    sel.effect = f(1)
  }
  sel.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  if (IUniversal.energyUpgrades.upgrade12.active) {
    sel.showReq = true
  } else {
    sel.showReq = false
  }

  var sel = IUniversal.energyUpgrades.upgrade14

  sel.name = `Each hunt grants a free matching upgrade: <span class="boldBlackBorder">log₁₀(Hunt)per LVL</span>`
  sel.effectDesc = ``
  sel.level = f(sel.level)
  sel.effect = f(sel.level)
  sel.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  if (IUniversal.energyUpgrades.upgrade13.active) {
    sel.showReq = true
  } else {
    sel.showReq = false
  }

  var sel = IUniversal.energyUpgrades.upgrade15

  sel.name = `Hunts grant +<span class="boldBlackBorder">10%</span> to previous hunt per LVL`
  sel.effectDesc = `${format(f(f(sel.level).mul(f(10))))}%`
  sel.level = f(sel.level)
  sel.effect = f(0.1).mul(f(sel.level))
  sel.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  if (IUniversal.energyUpgrades.upgrade14.active) {
    sel.showReq = true
  } else {
    sel.showReq = false
  }

  //ORIGINALITY
  var sel = IUniversal.energyUpgrades.upgrade16

  sel.name = `Challenger Damage <span class="boldBlackBorder">/5</span> per LVL`
  sel.effectDesc = `/${format(f(sel.effect), 0)}`
  sel.level = f(sel.level)
  sel.effect = f(5).pow(f(sel.level))
  sel.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  sel.showReq = true

  var sel = IUniversal.energyUpgrades.upgrade17

  sel.name = `Challenger Life <span class="boldBlackBorder">/5</span> per LVL`
  sel.effectDesc = `/${format(f(sel.effect), 0)}`
  sel.level = f(sel.level)
  sel.effect = f(5).pow(f(sel.level))
  sel.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  if (IUniversal.energyUpgrades.upgrade16.active) {
    sel.showReq = true
  } else {
    sel.showReq = false
  }

  var sel = IUniversal.energyUpgrades.upgrade18

  sel.name = `Challenger Rewards <span class="boldBlackBorder">×2</span> per LVL`
  sel.effectDesc = `×${format(f(sel.effect), 0)}`
  sel.level = f(sel.level)
  sel.effect = f(2).pow(f(sel.level))
  sel.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  if (IUniversal.energyUpgrades.upgrade17.active) {
    sel.showReq = true
  } else {
    sel.showReq = false
  }

  var sel = IUniversal.energyUpgrades.upgrade19

  sel.name = `Universal Challenger is <span class="boldBlackBorder">10</span> times weaker per LVL`
  sel.effectDesc = `/${format(f(f(1).dividedBy(sel.effect)), 0)}`
  sel.level = f(sel.level)
  sel.effect = f(0.1).pow(f(sel.level))
  sel.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  if (IUniversal.energyUpgrades.upgrade18.active) {
    sel.showReq = true
  } else {
    sel.showReq = false
  }

  var sel = IUniversal.energyUpgrades.upgrade20

  sel.name = `Universal Shards <span class="boldBlackBorder">×2</span> per LVL`
  sel.effectDesc = `×${format(f(sel.effect), 0)}`
  sel.level = f(sel.level)
  sel.effect = f(2).pow(f(sel.level))
  sel.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  if (IUniversal.energyUpgrades.upgrade19.active) {
    sel.showReq = true
  } else {
    sel.showReq = false
  }

  var sel = IUniversal.energyUpgrades.upgrade21

  sel.name = `<div>(Requires adiacent upgrades)</div>
  <div>Damage & Life <span class="boldBlackBorder">×log(Power×LVL)</span></div>`
  sel.effectDesc = `×${format(f(sel.effect))}`
  sel.level = f(sel.level)

  if (f(IGameData.power).gte(f(3))) {
    sel.effect = f(Decimal.log2(IGameData.power)).mul(f(sel.level))
  } else {
    sel.effect = f(1)
  }
  sel.price = f(5).pow(f(sel.level).add(f(1)))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  if (IUniversal.energyUpgrades.upgrade5.active && IUniversal.energyUpgrades.upgrade10.active) {
    sel.showReq = true
  } else {
    sel.showReq = false
  }

  var sel = IUniversal.energyUpgrades.upgrade22

  sel.name = `<div>(Requires adiacent upgrades)</div>
  <div>U. Nodes & Cores</div>
              <div><span class="boldBlackBorder">×log(U. Shards×LVL)</span></div>
              `
  sel.effectDesc = `× ${format(f(sel.effect))}`
  sel.level = f(sel.level)
  sel.effect = f(Decimal.log2(IUniversalChallenger.universalShards)).mul(f(sel.level))
  sel.price = f(5).pow(f(sel.level).add(f(1)))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  if (IUniversal.energyUpgrades.upgrade15.active && IUniversal.energyUpgrades.upgrade20.active) {
    sel.showReq = true
  } else {
    sel.showReq = false
  }

  var sel = IUniversal.energyUpgrades.upgrade23

  sel.name = `<div>(Requires adiacent upgrades)</div>
  <div>Energy upgrades price <span class="boldBlackBorder">/2</span> ×LVL</div>
              <div>Except fusion upgrades </div>`
  sel.effectDesc = `/${format(f(sel.effect))}`
  sel.level = f(sel.level)
  sel.effect = f(0.5).pow(f(sel.level))
  sel.price = f(5).pow(f(sel.level).add(f(1)))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  if (IUniversal.energyUpgrades.upgrade10.active && IUniversal.energyUpgrades.upgrade15.active) {
    sel.showReq = true
  } else {
    sel.showReq = false
  }

  //crafting

  var sel = IUniversal.crafting

  sel.craftingLevel = sel.craftingLevel
  sel.craftEffectsLuck = f(0.33)
  sel.starIncrementer = f(0.25)

  //ASCENSION

  IUniversal.ascensionPointMax = f(IUniversal.universe).minus(f(1))

  //ATTRIBUTES

  if (f(IUniversal.attributes.attributeBonus1.effect).gte(f(1))) {
    IUniversal.attributes.attributeBonus1.active = true;
  } else {
    IUniversal.attributes.attributeBonus1.active = false;
    IUniversal.attributes.attributeBonus1.effect = f(1)
  }

  if (f(IUniversal.attributes.attributeBonus2.effect).gte(f(1))) {
    IUniversal.attributes.attributeBonus2.active = true;
  } else {
    IUniversal.attributes.attributeBonus2.active = false;
    IUniversal.attributes.attributeBonus2.effect = f(1)
  }

  if (f(IUniversal.attributes.attributeBonus3.effect).gte(f(1))) {
    IUniversal.attributes.attributeBonus3.active = true;
  } else {
    IUniversal.attributes.attributeBonus3.active = false;
    IUniversal.attributes.attributeBonus3.effect = f(1)
  }

  if (f(IUniversal.attributes.attributeBonus4.effect).gte(f(1))) {
    IUniversal.attributes.attributeBonus4.active = true;
  } else {
    IUniversal.attributes.attributeBonus4.active = false;
    IUniversal.attributes.attributeBonus4.effect = f(1)
  }

  if (f(IUniversal.attributes.attributeBonus5.effect).gte(f(1))) {
    IUniversal.attributes.attributeBonus5.active = true;
  } else {
    IUniversal.attributes.attributeBonus5.active = false;
    IUniversal.attributes.attributeBonus5.effect = f(1)
  }

  if (f(IUniversal.attributes.attributeBonus6.effect).gte(f(1))) {
    IUniversal.attributes.attributeBonus6.active = true;
  } else {
    IUniversal.attributes.attributeBonus6.active = false;
    IUniversal.attributes.attributeBonus6.effect = f(1)
  }

  IUniversal.attributes.attributeBonus1.name = `Universal Shards ×<span class="boldBlackBorder">${format(f(IUniversal.attributes.attributeBonus1.effect))}</span>`
  IUniversal.attributes.attributeBonus2.name = `Essence ×<span class="boldBlackBorder">${format(f(IUniversal.attributes.attributeBonus2.effect))}</span>`

  IUniversal.attributes.attributeBonus3.name = `Damage and Life Training ×<span class="boldBlackBorder">${format(f(IUniversal.attributes.attributeBonus3.effect))}</span>`
  IUniversal.attributes.attributeBonus4.name = `Will and Insight Training ×<span class="boldBlackBorder">${format(f(IUniversal.attributes.attributeBonus4.effect))}</span>`

  IUniversal.attributes.attributeBonus5.name = `Damage ×<span class="boldBlackBorder">${format(f(IUniversal.attributes.attributeBonus5.effect))}</span>`
  IUniversal.attributes.attributeBonus6.name = `Life ×<span class="boldBlackBorder">${format(f(IUniversal.attributes.attributeBonus6.effect))}</span>`

  //ATTRIBUTES UNLOCK


  if (IUniversal.attributes.attributesUnlock1.active) {
    IUniversal.attributes.attributesUnlock1.name =
      IUniversal.attributes.attributesUnlock1.name = `<div class="boldBlackBorder">UNIVERSAL</div>
                                                  <div class="boldBlackBorder">CHALLENGER</div>
                                                  <div class="boldBlackBorder">CHALLENGES</div>
                                                  <div>UNLOCKED</div>`
  } else {
    IUniversal.attributes.attributesUnlock1.name = `<div class="boldBlackBorder">UNIVERSAL</div>
                                                  <div class="boldBlackBorder">CHALLENGER</div>
                                                  <div class="boldBlackBorder">CHALLENGES</div>
                                                  <div class="line"></div>
                                                  <div>50 Critical Points</div>
                                                  <div>100 Regeneration Points</div>`
  }

  IUniversal.attributes.attributesUnlock1.req = function () {
    return f(IUniversal.attributes.critPoints).gte(f(50))
      && f(IUniversal.attributes.regenerationPoints).gte(f(100))
  }


  if (IUniversal.attributes.attributesUnlock2.active) {
    IUniversal.attributes.attributesUnlock2.name =
      IUniversal.attributes.attributesUnlock2.name = `<div class="boldBlackBorder">HUNTING</div>
                                                  <div class="boldBlackBorder">EVOLUTION</div>
                                                  <div class="">UNLOCKED</div>`
  } else {

    IUniversal.attributes.attributesUnlock2.name = `<div class="boldBlackBorder">HUNTING</div>
                                                  <div class="boldBlackBorder">EVOLUTION</div>
                                                  <div class="line"></div>
                                                  <div>50 Defence</div>
                                                  <div> Penetration Points</div>
                                                  <div>100 Defence Points</div>`
  }

  IUniversal.attributes.attributesUnlock2.req = function () {
    return f(IUniversal.attributes.defencePenetrationPoints).gte(f(50))
      && f(IUniversal.attributes.defencePoints).gte(f(100))
  }


  if (IUniversal.attributes.attributesUnlock3.active) {
    IUniversal.attributes.attributesUnlock3.name = `<div class="boldBlackBorder">ENERGY</div>
                                                  <div class="boldBlackBorder">FUSION</div>
                                                  <div class="">UNLOCKED</div>`
  } else {
    IUniversal.attributes.attributesUnlock3.name = `<div>UNLOCK ENERGY FUSION</div>
                                                  <div>50 Life Steal</div>
                                                  <div>50 Shield Points</div>`
  }

  IUniversal.attributes.attributesUnlock3.req = function () {
    return f(IUniversal.attributes.lifeStealPoints).gte(f(50))
      && f(IUniversal.attributes.shieldPoints).gte(f(50))
  }

  //CRIT
  //Crit Rate
  IUniversal.attributes.critRate.name = `Critical rate: <span class="boldBlackBorder">&nbsp${f(IUniversal.attributes.critRate.effect).mul(f(100))}%</span>`
  IUniversal.attributes.critRate.level = f(IUniversal.attributes.critRate.level)

  IUniversal.attributes.critRate.effect = f(0.1).mul(f(IUniversal.attributes.critRate.level))
  IUniversal.attributes.critRate.price = f(10).pow(f(IUniversal.attributes.critRate.level).add(f(2)))

  //Crit Damage
  IUniversal.attributes.critDamage.name = `Critical damage: <span class="boldBlackBorder">&nbsp${f(IUniversal.attributes.critDamage.effect).mul(f(100))}%</span>`
  IUniversal.attributes.critDamage.level = f(IUniversal.attributes.critDamage.level)

  IUniversal.attributes.critDamage.effect = f(1).add(f(0.1).mul(f(IUniversal.attributes.critDamage.level)))
  IUniversal.attributes.critDamage.price = f(25).pow(f(IUniversal.attributes.critDamage.level).add(f(1)))


  if (f(IUniversal.attributes.critRate.level).gte(f(1))) {
    var points1 = f(IUniversal.attributes.critRate.level)
  } else {
    points1 = f(1)
  }

  if (f(IUniversal.attributes.critDamage.level).gte(f(1))) {
    var points2 = f(IUniversal.attributes.critDamage.level)
  } else {
    points2 = f(1)
  }


  IUniversal.attributes.critPoints = f(points1).mul(f(points2))
  IUniversal.attributes.critPointsName = `<span class="boldBlackBorder">${format(f(IUniversal.attributes.critPoints))}</span> Critical Points`


  //LIFE REGENERATION
  //life regeneration


  IUniversal.attributes.regeneration.name = `<span class="boldBlackBorder">&nbsp${format(f(IUniversal.attributes.regeneration.level))}</span> Essence`
  IUniversal.attributes.regeneration.level = f(IUniversal.attributes.regeneration.level)


  if (f(IUniversal.attributes.regeneration.level).gte(f(10))) {
    IUniversal.attributes.regeneration.effect = f(IUniversal.attributes.regeneration.level)
  } else {
    IUniversal.attributes.regeneration.effect = f(1)
  }

  IUniversal.attributes.regeneration.price = f(IUniversal.attributes.regeneration.price)

  if (f(IUniversal.attributes.maxRegeneration.level).gte(f(1))) {
    var points2 = f(IUniversal.attributes.maxRegeneration.level)
  } else {
    points2 = f(1)
  }

  IUniversal.attributes.regenerationPoints = f(Decimal.log(IUniversal.attributes.regeneration.effect, 10)).mul(f(points2))
  IUniversal.attributes.regenerationPointsName = `<span class="boldBlackBorder">${format(f(IUniversal.attributes.regenerationPoints))}</span> Regeneration Points`

  //max life regeneration
  IUniversal.attributes.maxRegeneration.name = `Maximum life regeneration: <span class="boldBlackBorder">&nbsp${f(IUniversal.attributes.maxRegeneration.effect).mul(f(100))}</span>%`
  IUniversal.attributes.maxRegeneration.level = f(IUniversal.attributes.maxRegeneration.level)

  IUniversal.attributes.maxRegeneration.effect = f(0.1).mul(f(IUniversal.attributes.maxRegeneration.level))
  IUniversal.attributes.maxRegeneration.price = f(50).pow(f(IUniversal.attributes.maxRegeneration.level).add(f(1)))

  //DEFENCE PENETRATION
  //Defence Penetration
  IUniversal.attributes.defencePenetration.name = `<span class="boldBlackBorder">${format(f(IUniversal.attributes.defencePenetration.level))}</span> Damage and Life Training`
  IUniversal.attributes.defencePenetration.level = f(IUniversal.attributes.defencePenetration.level)

  if (f(IUniversal.attributes.defencePenetration.level).gte(f(10))) {
    IUniversal.attributes.defencePenetration.effect = f(IUniversal.attributes.defencePenetration.level)
  } else {
    IUniversal.attributes.defencePenetration.effect = f(1)
  }

  IUniversal.attributes.defencePenetration.price = f(IUniversal.attributes.defencePenetration.price)

  //Max Defence Penetration

  IUniversal.attributes.maxDefencePenetration.name = `Maximum defence penetration: <span class="boldBlackBorder">&nbsp${f(IUniversal.attributes.maxDefencePenetration.effect).mul(f(100))}</span>%`
  IUniversal.attributes.maxDefencePenetration.level = f(IUniversal.attributes.maxDefencePenetration.level)

  IUniversal.attributes.maxDefencePenetration.effect = f(0.1).mul(f(IUniversal.attributes.maxDefencePenetration.level))
  IUniversal.attributes.maxDefencePenetration.price = f(50).pow(f(IUniversal.attributes.maxDefencePenetration.level).add(f(1)))

  if (f(IUniversal.attributes.maxDefencePenetration.level).gte(f(1))) {
    var points2 = f(IUniversal.attributes.maxDefencePenetration.level)
  } else {
    points2 = f(1)
  }

  IUniversal.attributes.defencePenetrationPoints = f(Decimal.log(IUniversal.attributes.defencePenetration.effect, 10)).mul(f(points2))
  IUniversal.attributes.defencePenetrationPointsName = `<span class="boldBlackBorder">${format(f(IUniversal.attributes.defencePenetrationPoints))}</span> Defence Penetration Points`

  //DEFENCE
  //Defence


  IUniversal.attributes.defence.level = f(IUniversal.attributes.defence.level)

  IUniversal.attributes.defence.odds = f(1).div(f(2).pow(f(IUniversal.attributes.defence.level).minus(f(10).times(f(IUniversal.attributes.defence.level).div(f(10)).floor()))));

  IUniversal.attributes.defence.price = f(250).mul(f(100).pow(f(IUniversal.attributes.defence.level).div(10).floor()))

  //Max Defence
  IUniversal.attributes.maxDefence.name = `Maximum defence: <span class="boldBlackBorder">&nbsp${f(IUniversal.attributes.maxDefence.effect).mul(f(100))}</span>%`
  IUniversal.attributes.maxDefence.level = f(IUniversal.attributes.maxDefence.level)

  IUniversal.attributes.maxDefence.effect = f(0.1).mul(f(IUniversal.attributes.maxDefence.level))
  IUniversal.attributes.maxDefence.price = f(25).pow(f(IUniversal.attributes.maxDefence.level).add(f(1)))

  if (f(IUniversal.attributes.defence.level).gte(f(1))) {
    var points1 = f(IUniversal.attributes.defence.level)
  } else {
    points1 = f(1)
  }

  if (f(IUniversal.attributes.maxDefence.level).gte(f(1))) {
    var points2 = f(IUniversal.attributes.maxDefence.level)
  } else {
    points2 = f(1)
  }


  IUniversal.attributes.defencePoints = f(points1).mul(f(points2))
  IUniversal.attributes.defencePointsName = `<span class="boldBlackBorder">${format(f(IUniversal.attributes.defencePoints))}</span> Defence Points`


  //LIFE STEAL
  //Life Steal

  if (IUniversal.attributes.lifeSteal.active) {
    IUniversal.attributes.lifeSteal.level = f(IUniversal.attributes.lifeSteal.level).add(f(IUniversalChallenger.universalCoresProd))
  }

  if (f(IUniversal.attributes.lifeSteal.level).gte(f(10))) {
    IUniversal.attributes.shield.effect = f(Decimal.log(IUniversal.attributes.lifeSteal.level, 10))
    var points1 = f(Decimal.log(IUniversal.attributes.lifeSteal.level, 10))
  } else {
    IUniversal.attributes.shield.effect = f(1)
    points1 = f(1)
  }

  //Max Life Steal
  IUniversal.attributes.lifeStealMax.name = `Maximum life steal: <span class="boldBlackBorder">&nbsp${f(IUniversal.attributes.lifeStealMax.effect).mul(f(100))}</span>%`
  IUniversal.attributes.lifeStealMax.level = f(IUniversal.attributes.lifeStealMax.level)

  IUniversal.attributes.lifeStealMax.effect = f(0.1).mul(f(IUniversal.attributes.lifeStealMax.level))

  IUniversal.attributes.lifeStealMax.price = f(25).pow(f(IUniversal.attributes.lifeStealMax.level).add(f(1)))

  if (f(IUniversal.attributes.lifeStealMax.level).gte(f(1))) {

    var points2 = f(IUniversal.attributes.lifeStealMax.level)
  } else {
    points2 = f(1)
  }

  IUniversal.attributes.lifeStealPoints = f(points1).mul(f(points2))
  IUniversal.attributes.lifeStealPointsName = `<span class="boldBlackBorder">${format(f(IUniversal.attributes.lifeStealPoints))}</span> Life Steal Points`

  //SHIELD

  //Shield
  IUniversal.attributes.shield.name = `<span class="boldBlackBorder">${format(f(IUniversal.attributes.shield.level))}</span> Universal Cores`
  IUniversal.attributes.shield.level = f(IUniversal.attributes.shield.level)

  if (f(IUniversal.attributes.shield.level).gte(f(10))) {
    IUniversal.attributes.shield.effect = f(Decimal.log(IUniversal.attributes.shield.level, 10))
    var points1 = f(Decimal.log(IUniversal.attributes.shield.level, 10))
  } else {
    IUniversal.attributes.shield.effect = f(1)
    points1 = f(1)
  }

  IUniversal.attributes.shield.price = f(IUniversal.attributes.shield.price)

  //Max Shield

  IUniversal.attributes.maxShield.name = `Maximum shield: <span class="boldBlackBorder">&nbsp${f(IUniversal.attributes.maxShield.effect).mul(f(100))}</span>%`
  IUniversal.attributes.maxShield.level = f(IUniversal.attributes.maxShield.level)

  IUniversal.attributes.maxShield.effect = f(0.1).mul(f(IUniversal.attributes.maxShield.level))
  IUniversal.attributes.maxShield.price = f(50).pow(f(IUniversal.attributes.maxShield.level).add(f(1)))

  if (f(IUniversal.attributes.shield.level).gte(f(1))) {
    var points2 = f(IUniversal.attributes.maxShield.level)
  } else {
    points2 = f(1)
  }

  IUniversal.attributes.shieldPoints = f(points1).mul(f(points2))
  IUniversal.attributes.shieldPointsName = `<span class="boldBlackBorder">${format(f(IUniversal.attributes.shieldPoints))}</span> Shield Points`


  //ATTRIBUTES BONUS


  IUniversal.attributes.attributeBonus1.effect = f(IUniversal.attributes.critPoints).pow(f(1.5))
  IUniversal.attributes.attributeBonus2.effect = f(IUniversal.attributes.regenerationPoints).pow(f(1.5))
  IUniversal.attributes.attributeBonus3.effect = f(IUniversal.attributes.defencePoints).pow(f(1.5))
  IUniversal.attributes.attributeBonus4.effect = f(IUniversal.attributes.defencePenetrationPoints).pow(f(1.5))
  IUniversal.attributes.attributeBonus5.effect = f(IUniversal.attributes.lifeStealPoints).pow(f(1.5))
  IUniversal.attributes.attributeBonus6.effect = f(IUniversal.attributes.shieldPoints).pow(f(1.5))


  //HUNT EVOLUTION

  var globalEffect1 = f(1)

  if (IUniversal.huntEvolution.b1.active4) {
    globalEffect1 = f(globalEffect1).mul(f(IUniversal.huntEvolution.b1.effect4))
  }

  if (IUniversal.huntEvolution.b2.active4) {
    globalEffect1 = f(globalEffect1).mul(f(IUniversal.huntEvolution.b2.effect4))
  }

  if (IUniversal.huntEvolution.b3.active4) {
    globalEffect1 = f(globalEffect1).mul(f(IUniversal.huntEvolution.b3.effect4))
  }

  if (IUniversal.huntEvolution.b4.active4) {
    globalEffect1 = f(globalEffect1).mul(f(IUniversal.huntEvolution.b4.effect4))
  }

  if (IUniversal.huntEvolution.b5.active4) {
    globalEffect1 = f(globalEffect1).mul(f(IUniversal.huntEvolution.b5.effect4))
  }

  var sel = IUniversal.huntEvolution.b1

  if (Math.floor(f(sel.level).add(f(3)) / 4) > 0) {
    var labelEffect1 = IUniversal.huntEvolutionLabels.effect1["level" + Math.floor(f(sel.level).add(f(3)) / 4)];
    sel.description1 = `Essence/s ×<span class="boldBlackBorder">${format(f(sel.effect1))}</span>`
    sel.active1 = true
  } else {
    labelEffect1 = ""
    sel.description1 = ""
    sel.active1 = false
  }

  if (Math.floor(f(sel.level).add(f(2)) / 4) > 0) {
    var labelEffect2 = IUniversal.huntEvolutionLabels.effect2["level" + Math.floor(f(sel.level).add(f(2)) / 4)];
    sel.description2 = `Price /<span class="boldBlackBorder">${format(f(sel.effect2))}</span>`
    sel.active2 = true
  } else {
    labelEffect2 = ""
    sel.description2 = ""
    sel.active2 = false
  }

  if (Math.floor(f(sel.level).add(f(1)) / 4) > 0) {
    var labelEffect3 = IUniversal.huntEvolutionLabels.effect3["level" + Math.floor(f(sel.level).add(f(1)) / 4)];
    sel.description3 = `Associated effect Price /<span class="boldBlackBorder">${format(f(sel.effect3))}</span>`
    sel.active3 = true
  } else {
    labelEffect3 = ""
    sel.description3 = ""
    sel.active3 = false
  }

  if (Math.floor(f(sel.level).add(f(0)) / 4) > 0) {
    var labelEffect4 = IUniversal.huntEvolutionLabels.effect4["level" + Math.floor(f(sel.level).add(f(0)) / 4)];
    sel.description4 = `Evolution upgrades ×<span class="boldBlackBorder">${format(f(sel.effect4))}</span>`
    sel.active4 = true
  } else {
    labelEffect4 = ""
    sel.description4 = ""
    sel.active4 = false
  }

  sel.level = f(sel.level)
  sel.maxLevel = f(40)

  sel.effect1 = f(5).pow(Math.floor(f(sel.level).add(f(3)) / 4)).mul(f(globalEffect1))
  sel.effect2 = f(10).pow(Math.floor(f(sel.level).add(f(2)) / 4)).mul(f(globalEffect1))
  sel.effect3 = f(10).pow(Math.floor(f(sel.level).add(f(1)) / 4)).mul(f(globalEffect1))
  sel.effect4 = f(2).pow(Math.floor(f(sel.level).add(f(0)) / 4))

  sel.price = f(f(10).pow(f(14))).mul(f(10).pow(f(sel.level)))

  if (f(sel.level).equals(f(sel.maxLevel))) {
    update(`content2_6_huntEvolution_upgrades_b1`, `<div class="noClick">MAX</div>`)
  } else {
    update(`content2_6_huntEvolution_upgrades_b1`, `<div class="noClick">EVOLVE</div>
                                                  <div class="noClick"><span class="boldBlackBorder" class="noClick">${format(f(sel.price))}</span> Universal Shards</div>`)
  }
  update("content2_6_huntEvolution_upgrades_u1_1", `<div>${labelEffect1}</div>
                                                    <div>${sel.description1}</div>`)
  update("content2_6_huntEvolution_upgrades_u1_2", `<div>${labelEffect2}</div>
                                                    <div>${sel.description2}</div>`)
  update("content2_6_huntEvolution_upgrades_u1_3", `<div>${labelEffect3}</div>
                                                    <div>${sel.description3}</div>`)
  update("content2_6_huntEvolution_upgrades_u1_4", `<div>${labelEffect4}</div>
                                                    <div>${sel.description4}</div>`)
  for (var x = 1; x <= 4; x++) {
    var nextIdx = ((f(sel.level)) % 4) + 1;
    if (nextIdx === 0) nextIdx = 4;   // fix matematico
    if (x === nextIdx) {
      document.getElementById(`content2_6_huntEvolution_upgrades_u1_${x}`).style.backgroundColor = "#345fd4ff";
    } else {
      document.getElementById(`content2_6_huntEvolution_upgrades_u1_${x}`).style.backgroundColor = "";
    }
  }

  var sel = IUniversal.huntEvolution.b2

  if (Math.floor(f(sel.level).add(f(3)).dividedBy(f(4))) > 0) {
    var labelEffect1 = IUniversal.huntEvolutionLabels.effect1["level" + Math.floor(f(sel.level).add(f(3)).dividedBy(f(4)))];
    sel.description1 = `Essence/s ×<span class="boldBlackBorder">${format(f(sel.effect1))}</span>`

    sel.active1 = true

  } else {
    labelEffect1 = ""
    sel.description1 = ""
    sel.active1 = false
  }

  if (Math.floor(f(sel.level).add(f(2)).dividedBy(f(4))) > 0) {
    var labelEffect2 = IUniversal.huntEvolutionLabels.effect2["level" + Math.floor(f(sel.level).add(f(2)).dividedBy(f(4)))];
    sel.description2 = `Price /<span class="boldBlackBorder">${format(f(sel.effect2))}</span>`

    sel.active2 = true
  } else {
    labelEffect2 = ""
    sel.description2 = ""
    sel.active2 = false
  }

  if (Math.floor(f(sel.level).add(f(1)) / 4) > 0) {
    var labelEffect3 = IUniversal.huntEvolutionLabels.effect3["level" + Math.floor(f(sel.level).add(f(1)) / 4)];
    sel.description3 = `Associated effect Price /<span class="boldBlackBorder">${format(f(sel.effect3))}</span>`

    sel.active3 = true
  } else {
    labelEffect3 = ""
    sel.description3 = ""
    sel.active3 = false
  }

  if (Math.floor(f(sel.level).add(f(0)) / 4) > 0) {
    var labelEffect4 = IUniversal.huntEvolutionLabels.effect4["level" + Math.floor(f(sel.level).add(f(0)) / 4)];
    sel.description4 = ` Evolution upgrades ×<span class="boldBlackBorder">${format(f(sel.effect4))}</span>`

    sel.active4 = true
  } else {
    labelEffect4 = ""
    sel.description4 = ""
    sel.active4 = false
  }

  sel.level = f(sel.level)
  sel.maxLevel = f(40)

  sel.effect1 = f(5).pow(Math.floor(f(sel.level).add(f(3)) / 4)).mul(f(globalEffect1))
  sel.effect2 = f(10).pow(Math.floor(f(sel.level).add(f(2)) / 4)).mul(f(globalEffect1))
  sel.effect3 = f(10).pow(Math.floor(f(sel.level).add(f(1)) / 4)).mul(f(globalEffect1))
  sel.effect4 = f(2).pow(Math.floor(f(sel.level).add(f(0)) / 4))

  sel.price = f(f(10).pow(f(14))).mul(f(10).pow(f(sel.level)))

  if (f(sel.level).equals(f(sel.maxLevel))) {
    update(`content2_6_huntEvolution_upgrades_b2`, `<div class="noClick">MAX</div>`)
  } else {
    update(`content2_6_huntEvolution_upgrades_b2`, `<div class="noClick">EVOLVE</div>
                                                  <div class="noClick"><span class="boldBlackBorder" class="noClick">${format(f(sel.price))}</span> Universal Shards</div>`)
  }
  update("content2_6_huntEvolution_upgrades_u2_1", `<div>${labelEffect1}</div>
                                                    <div>${sel.description1}</div>`)
  update("content2_6_huntEvolution_upgrades_u2_2", `<div>${labelEffect2}</div>
                                                    <div>${sel.description2}</div>`)
  update("content2_6_huntEvolution_upgrades_u2_3", `<div>${labelEffect3}</div>
                                                    <div>${sel.description3}</div>`)
  update("content2_6_huntEvolution_upgrades_u2_4", `<div>${labelEffect4}</div>
                                                    <div>${sel.description4}</div>`)

  for (var x = 1; x <= 4; x++) {
    var nextIdx = ((f(sel.level)) % 4) + 1;
    if (nextIdx === 0) nextIdx = 4;   // fix matematico
    if (x === nextIdx) {
      document.getElementById(`content2_6_huntEvolution_upgrades_u2_${x}`).style.backgroundColor = "#345fd4ff";
    } else {
      document.getElementById(`content2_6_huntEvolution_upgrades_u2_${x}`).style.backgroundColor = "";
    }
  }

  var sel = IUniversal.huntEvolution.b3

  if (Math.floor(f(sel.level).add(f(3)) / 4) > 0) {
    var labelEffect1 = IUniversal.huntEvolutionLabels.effect1["level" + Math.floor(f(sel.level).add(f(3)) / 4)];
    sel.description1 = `Essence/s ×<span class="boldBlackBorder">${format(f(sel.effect1))}</span>`
    sel.active1 = true
  } else {
    labelEffect1 = ""
    sel.description1 = ""
    sel.active1 = false
  }

  if (Math.floor(f(sel.level).add(f(2)) / 4) > 0) {
    var labelEffect2 = IUniversal.huntEvolutionLabels.effect2["level" + Math.floor(f(sel.level).add(f(2)) / 4)];
    sel.description2 = `Price /<span class="boldBlackBorder">${format(f(sel.effect2))}</span>`
    sel.active2 = true
  } else {
    labelEffect2 = ""
    sel.description2 = ""
    sel.active2 = false
  }

  if (Math.floor(f(sel.level).add(f(1)) / 4) > 0) {
    var labelEffect3 = IUniversal.huntEvolutionLabels.effect3["level" + Math.floor(f(sel.level).add(f(1)) / 4)];
    sel.description3 = `Associated effect Price /<span class="boldBlackBorder">${format(f(sel.effect3))}</span>`
    sel.active3 = true
  } else {
    labelEffect3 = ""
    sel.description3 = ""
    sel.active3 = false
  }

  if (Math.floor(f(sel.level).add(f(0)) / 4) > 0) {
    var labelEffect4 = IUniversal.huntEvolutionLabels.effect4["level" + Math.floor(f(sel.level).add(f(0)) / 4)];
    sel.description4 = `Evolution upgrades ×<span class="boldBlackBorder">${format(f(sel.effect4))}</span>`
    sel.active4 = true
  } else {
    labelEffect4 = ""
    sel.description4 = ""
    sel.active4 = false
  }

  sel.level = f(sel.level)
  sel.maxLevel = f(40)

  sel.effect1 = f(5).pow(Math.floor(f(sel.level).add(f(3)) / 4)).mul(f(globalEffect1))
  sel.effect2 = f(10).pow(Math.floor(f(sel.level).add(f(2)) / 4)).mul(f(globalEffect1))
  sel.effect3 = f(10).pow(Math.floor(f(sel.level).add(f(1)) / 4)).mul(f(globalEffect1))
  sel.effect4 = f(2).pow(Math.floor(f(sel.level).add(f(0)) / 4))

  sel.price = f(f(10).pow(f(7))).mul(f(10).pow(f(sel.level)))

  if (f(sel.level).equals(f(sel.maxLevel))) {
    update(`content2_6_huntEvolution_upgrades_b3`, `<div class="noClick">MAX</div>`)
  } else {
    update(`content2_6_huntEvolution_upgrades_b3`, `<div class="noClick">EVOLVE</div>
                                                  <div class="noClick"><span class="boldBlackBorder" class="noClick">${format(f(sel.price))}</span> Universal Nodes</div>`)
  }
  update("content2_6_huntEvolution_upgrades_u3_1", `<div>${labelEffect1}</div>
                                                    <div>${sel.description1}</div>`)
  update("content2_6_huntEvolution_upgrades_u3_2", `<div>${labelEffect2}</div>
                                                    <div>${sel.description2}</div>`)
  update("content2_6_huntEvolution_upgrades_u3_3", `<div>${labelEffect3}</div>
                                                    <div>${sel.description3}</div>`)
  update("content2_6_huntEvolution_upgrades_u3_4", `<div>${labelEffect4}</div>
                                                    <div>${sel.description4}</div>`)

  for (var x = 1; x <= 4; x++) {
    var nextIdx = ((f(sel.level)) % 4) + 1;
    if (nextIdx === 0) nextIdx = 4;   // fix matematico
    if (x === nextIdx) {
      document.getElementById(`content2_6_huntEvolution_upgrades_u3_${x}`).style.backgroundColor = "#345fd4ff";
    } else {
      document.getElementById(`content2_6_huntEvolution_upgrades_u3_${x}`).style.backgroundColor = "";
    }
  }

  var sel = IUniversal.huntEvolution.b4

  if (Math.floor(f(sel.level).add(f(3)) / 4) > 0) {
    var labelEffect1 = IUniversal.huntEvolutionLabels.effect1["level" + Math.floor(f(sel.level).add(f(3)) / 4)];
    sel.description1 = `Essence/s ×<span class="boldBlackBorder">${format(f(sel.effect1))}</span>`
    sel.active1 = true
  } else {
    labelEffect1 = ""
    sel.description1 = ""
    sel.active1 = false
  }

  if (Math.floor(f(sel.level).add(f(2)) / 4) > 0) {
    var labelEffect2 = IUniversal.huntEvolutionLabels.effect2["level" + Math.floor(f(sel.level).add(f(2)) / 4)];
    sel.description2 = `Price /<span class="boldBlackBorder">${format(f(sel.effect2))}</span>`
    sel.active2 = true
  } else {
    labelEffect2 = ""
    sel.description2 = ""
    sel.active2 = false
  }

  if (Math.floor(f(sel.level).add(f(1)) / 4) > 0) {
    var labelEffect3 = IUniversal.huntEvolutionLabels.effect3["level" + Math.floor(f(sel.level).add(f(1)) / 4)];
    sel.description3 = `Associated effect Price /<span class="boldBlackBorder">${format(f(sel.effect3))}</span>`
    sel.active3 = true
  } else {
    labelEffect3 = ""
    sel.description3 = ""
    sel.active3 = false
  }

  if (Math.floor(f(sel.level).add(f(0)) / 4) > 0) {
    var labelEffect4 = IUniversal.huntEvolutionLabels.effect4["level" + Math.floor(f(sel.level).add(f(0)) / 4)];
    sel.description4 = `Evolution upgrades ×<span class="boldBlackBorder">${format(f(sel.effect4))}</span>`
    sel.active4 = true
  } else {
    labelEffect4 = ""
    sel.description4 = ""
    sel.active4 = false
  }

  sel.level = f(sel.level)
  sel.maxLevel = f(40)

  sel.effect1 = f(5).pow(Math.floor(f(sel.level).add(f(3)) / 4)).mul(f(globalEffect1))
  sel.effect2 = f(10).pow(Math.floor(f(sel.level).add(f(2)) / 4)).mul(f(globalEffect1))
  sel.effect3 = f(10).pow(Math.floor(f(sel.level).add(f(1)) / 4)).mul(f(globalEffect1))
  sel.effect4 = f(2).pow(Math.floor(f(sel.level).add(f(0)) / 4))

  sel.price = f(f(10).pow(f(7))).mul(f(10).pow(f(sel.level)))

  if (f(sel.level).equals(f(sel.maxLevel))) {
    update(`content2_6_huntEvolution_upgrades_b4`, `<div class="noClick">MAX</div>`)
  } else {
    update(`content2_6_huntEvolution_upgrades_b4`, `<div class="noClick">EVOLVE</div>
                                                  <div class="noClick"><span class="boldBlackBorder" class="noClick">${format(f(sel.price))}</span> Universal Nodes</div>`)
  }
  update("content2_6_huntEvolution_upgrades_u4_1", `<div>${labelEffect1}</div>
                                                    <div>${sel.description1}</div>`)
  update("content2_6_huntEvolution_upgrades_u4_2", `<div>${labelEffect2}</div>
                                                    <div>${sel.description2}</div>`)
  update("content2_6_huntEvolution_upgrades_u4_3", `<div>${labelEffect3}</div>
                                                    <div>${sel.description3}</div>`)
  update("content2_6_huntEvolution_upgrades_u4_4", `<div>${labelEffect4}</div>
                                                    <div>${sel.description4}</div>`)


  for (var x = 1; x <= 4; x++) {
    var nextIdx = ((f(sel.level)) % 4) + 1;
    if (nextIdx === 0) nextIdx = 4;   // fix matematico
    if (x === nextIdx) {
      document.getElementById(`content2_6_huntEvolution_upgrades_u4_${x}`).style.backgroundColor = "#345fd4ff";
    } else {
      document.getElementById(`content2_6_huntEvolution_upgrades_u4_${x}`).style.backgroundColor = "";
    }
  }

  var sel = IUniversal.huntEvolution.b5

  if (Math.floor(f(sel.level).add(f(3)) / 4) > 0) {
    var labelEffect1 = IUniversal.huntEvolutionLabels.effect1["level" + Math.floor(f(sel.level).add(f(3)) / 4)];
    sel.description1 = `Essence/s ×<span class="boldBlackBorder">${format(f(sel.effect1))}</span>`
    sel.active1 = true
  } else {
    labelEffect1 = ""
    sel.description1 = ""
    sel.active1 = false
  }

  if (Math.floor(f(sel.level).add(f(2)) / 4) > 0) {
    var labelEffect2 = IUniversal.huntEvolutionLabels.effect2["level" + Math.floor(f(sel.level).add(f(2)) / 4)];
    sel.description2 = `Price /<span class="boldBlackBorder">${format(f(sel.effect2))}</span>`
    sel.active2 = true
  } else {
    labelEffect2 = ""
    sel.description2 = ""
    sel.active2 = false
  }

  if (Math.floor(f(sel.level).add(f(1)) / 4) > 0) {
    var labelEffect3 = IUniversal.huntEvolutionLabels.effect3["level" + Math.floor(f(sel.level).add(f(1)) / 4)];
    sel.description3 = `Associated effect Price /<span class="boldBlackBorder">${format(f(sel.effect3))}</span>`
    sel.active3 = true
  } else {
    labelEffect3 = ""
    sel.description3 = ""
    sel.active3 = false
  }

  if (Math.floor(f(sel.level).add(f(0)) / 4) > 0) {
    var labelEffect4 = IUniversal.huntEvolutionLabels.effect4["level" + Math.floor(f(sel.level).add(f(0)) / 4)];
    sel.description4 = `Evolution upgrades ×<span class="boldBlackBorder">${format(f(sel.effect4))}</span>`
    sel.active4 = true
  } else {
    labelEffect4 = ""
    sel.description4 = ""
    sel.active4 = false
  }

  sel.level = f(sel.level)
  sel.maxLevel = f(40)

  sel.effect1 = f(5).pow(Math.floor(f(sel.level).add(f(3)) / 4)).mul(f(globalEffect1))
  sel.effect2 = f(10).pow(Math.floor(f(sel.level).add(f(2)) / 4)).mul(f(globalEffect1))
  sel.effect3 = f(10).pow(Math.floor(f(sel.level).add(f(1)) / 4)).mul(f(globalEffect1))

  sel.effect4 = f(2).pow(Math.floor(f(sel.level).add(f(0)) / 4))

  sel.price = f(1000).mul(f(10).pow(f(sel.level)))

  if (f(sel.level).equals(f(sel.maxLevel))) {
    update(`content2_6_huntEvolution_upgrades_b5`, `<div class="noClick">MAX</div>`)
  } else {
    update(`content2_6_huntEvolution_upgrades_b5`, `<div class="noClick">EVOLVE</div>
                                                  <div class="noClick"><span class="boldBlackBorder" class="noClick">${format(f(sel.price))}</span> Universal Cores</div>`)
  }
  update("content2_6_huntEvolution_upgrades_u5_1", `<div>${labelEffect1}</div>
                                                    <div>${sel.description1}</div>`)
  update("content2_6_huntEvolution_upgrades_u5_2", `<div>${labelEffect2}</div>
                                                    <div>${sel.description2}</div>`)
  update("content2_6_huntEvolution_upgrades_u5_3", `<div>${labelEffect3}</div>
                                                    <div>${sel.description3}</div>`)
  update("content2_6_huntEvolution_upgrades_u5_4", `<div>${labelEffect4}</div>
                                                    <div>${sel.description4}</div>`)



  for (var x = 1; x <= 4; x++) {
    var nextIdx = ((f(sel.level)) % 4) + 1;
    if (nextIdx === 0) nextIdx = 4;   // fix matematico
    if (x === nextIdx) {
      document.getElementById(`content2_6_huntEvolution_upgrades_u5_${x}`).style.backgroundColor = "#345fd4ff";
    } else {
      document.getElementById(`content2_6_huntEvolution_upgrades_u5_${x}`).style.backgroundColor = "";
    }
  }

  //AUTOMATION
  //Automation 1

  IUniversal.automation.automation1.maxLevel = f(3)

  if (f(IUniversal.automation.automation1.level).gt(f(IUniversal.automation.automation1.maxLevel))) {
    IUniversal.automation.automation1.level = f(IUniversal.automation.automation1.maxLevel)
  } else {
    IUniversal.automation.automation1.level = f(IUniversal.automation.automation1.level)
  }

  ISelUpgrade.group.group1.maxNum = f(IUniversal.automation.automation1.level).add(f(1))

  IUniversal.automation.automation1.price = (f(10).pow(5)).pow(f(IUniversal.automation.automation1.level).add(f(1)))

  //AUTOMATION 2

  IUniversal.automation.automation2.price = (f(10).pow(f(7)))

  //AUTOMATION 3

  IUniversal.automation.automation3.price = (f(10).pow(f(11)))

  //AUTOMATION 4

  IUniversal.automation.automation4.price = (f(10).pow(f(15)))

  //AUTOMATION 5

  IUniversal.automation.automation5.price = (f(10).pow(f(23)))



  //LORE

  //note1
  IUniversal.lore.lore1 = "Welcome to your first universe\n" +
    "A barren realm, the weakest among the infinite worlds scattered across existence\n" +
    "There is only one path forward: grow stronger, by any means necessary\n" +
    "Train, little warrior… and in time, the Multiverse itself will kneel before you";

  //note2
  IUniversal.lore.lore2 = "Challengers, Creatures, just like you\n" +
    "Here, strength is the only measure of worth, and the only way to prove it is to win\n" +
    "A simple law of nature. No wealth, no luck, only raw Power\n" +
    "But if all that matters is to endlessly grasp for more Power…\n" +
    "What meaning remains in the struggle itself?";

  //note3
  IUniversal.lore.lore3 = "There are two absolute truths in this world: you win, or you die\n" +
    "But what truly happens when something dies?\n" +
    "Some claim its soul merges with yours, resonating in harmony\n" +
    "Others believe the fallen body grants its finest qualities\n" +
    "And there are those who say it is simply the reward of killing\n" +
    "A natural law written into existence itself\n" +
    "No one really knows the truth.\n" +
    "The only certainty is this: Essence flows from death, and Essence makes you stronger\n" +
    "And that alone is enough to satisfy everyone";

  //note4
  IUniversal.lore.lore4 = "You stand at the pinnacle of this universe\n" +
    "Nothing can defeat you\n" +
    "But is that truly enough?\n" +
    "As you gaze at the endless stars, you glimpse a boundary, a limit only you can shatter\n" +
    "Breaking this limit will tear you apart\n" +
    "but it is the only way to absorb the raw energy of a greater universe\n" +
    "Beyond yours, there exist countless realms, some weaker, some far stronger.\n" +
    "Each time you transcend your limits, you draw in the power of another universe, energies fundamental to its very existence\n" +
    "With every energy claimed, you evolve, becoming harder to challenge, harder to overthrow\n" +
    "But the question remains: how many universes lie beyond the veil?\n" +
    "And if you never stop breaking your limits… will you one day stand at the pinnacle of all creation?";

  //note5
  IUniversal.lore.lore5 = "As your abilities refine, you begin to strike a roadblock\n" +
    "Raw strength can take you far, but not far enough. Talent must now emerge\n" +
    "Attributes, when properly honed, reveal their true essence, a formula for growth\n" +
    "Yet to awaken them, you must gather fragments of other Universal Climbers like yourself\n" +
    "Such power demands sacrifice. Are you ready to face how much further you still have to climb?";
}

function valuesSetterDinamic(type) {

  //Damage Training

  if (ITraining.base.base1.active) {
    var damage1 = f(ITraining.base.base1.prod)
  }
  else {
    damage1 = f(0)
  }

  ITraining.base.base1.tot = f(ITraining.base.base1.tot)
    .add((f(damage1))
      .mul(f(IGameData.tickSpeed))
    );

  //Life Training

  if (ITraining.base.base2.active) {
    var life1 = f(ITraining.base.base2.prod)
  }
  else {
    life1 = f(0)
  }


  ITraining.base.base2.tot = f(ITraining.base.base2.tot)
    .add((f(life1))
      .mul(f(IGameData.tickSpeed))
    );

  //Will Training

  if (ITraining.base.base3.active) {
    var Will1 = f(ITraining.base.base3.prod)
  }
  else {
    Will1 = f(0)
    if (!f(ITraining.base.base3.tot).gte(f(1))) {
      ITraining.base.base3.tot = f(1)
    }
  }

  ITraining.base.base3.tot = f(ITraining.base.base3.tot)
    .add((f(Will1))
      .mul(f(IGameData.tickSpeed))
    );

  //Insight Training

  if (ITraining.base.base4.active) {
    var Insight1 = f(ITraining.base.base4.prod)
  }
  else {
    Insight1 = f(0)
    if (!f(ITraining.base.base4.tot).gte(f(1))) {
      ITraining.base.base4.tot = f(1)
    }
  }

  ITraining.base.base4.tot = f(ITraining.base.base4.tot)
    .add((f(Insight1))
      .mul(f(IGameData.tickSpeed))
    );
  //DAMAGE FINAL

  //damage



  var damage1 = ITraining.base.base1.tot

  if (IFight.normalHuntingRewards.upgrade1.active && type != "universalChallengerChallenge1" && f(IFight.normalHuntingRewards.upgrade1.effect) != "NaN") {
    var damage2 = f(IFight.normalHuntingRewards.upgrade1.effect)
  } else {
    damage2 = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade2.active && f(IUniversal.energyUpgrades.upgrade2.effect) != "NaN") {
    var damage3 = f(IUniversal.energyUpgrades.upgrade2.effect)
  } else {
    damage3 = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade4.active && f(IUniversal.energyUpgrades.upgrade4.effect) != "NaN") {
    var damage4 = f(IUniversal.energyUpgrades.upgrade4.effect)
  } else {
    damage4 = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade5.active && f(IUniversal.energyUpgrades.upgrade5.effect) != "NaN") {
    var damage5 = f(IUniversal.energyUpgrades.upgrade5.effect)
  } else {
    damage5 = f(1)
  }

  if (IUniversal.attributes.attributeBonus5.active && f(IUniversal.attributes.attributeBonus5.effect) != "NaN") {
    var damage6 = f(IUniversal.attributes.attributeBonus5.effect)
  } else {
    damage6 = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade21.active && f(IUniversal.energyUpgrades.upgrade21.effect) != "NaN") {
    var damage7 = f(IUniversal.energyUpgrades.upgrade21.effect)
  } else {
    damage7 = f(1)
  }

  IFight.youStats.damage = (f(damage1).mul(f(damage2)).mul(f(damage3)).mul(f(damage4).mul(f(damage6)).mul(f(damage7)))).pow(f(damage5))

  if (type == "universalChallengerChallenge2") {
    if (damage1 != null) {
      IFight.youStats.damage = f(damage1)
    } else {
      IFight.youStats.damage = f(0)
    }
  }

  //Life

  var life1 = ITraining.base.base2.tot


  if (IFight.normalHuntingRewards.upgrade4.active && type != "universalChallengerChallenge1") {
    var life2 = f(IFight.youStats.damage).mul(f(IFight.normalHuntingRewards.upgrade4.effect))
  } else {
    life2 = f(0)
  }

  if (IFight.normalHuntingRewards.upgrade2.active && type != "universalChallengerChallenge1") {
    var life4 = f(IFight.normalHuntingRewards.upgrade2.effect)
  } else {
    life4 = f(1)
  }



  if (IUniversal.energyUpgrades.upgrade9.active) {
    var life5 = f(IUniversal.energyUpgrades.upgrade9.effect)
  } else {
    life5 = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade9.active) {
    var life6 = f(IUniversal.energyUpgrades.upgrade10.effect)
  } else {
    life6 = f(1)
  }

  if (IUniversal.attributes.attributeBonus6.active) {
    var life7 = f(IUniversal.attributes.attributeBonus6.effect)
  } else {
    life7 = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade21.active) {
    var life8 = f(IUniversal.energyUpgrades.upgrade21.effect)
  } else {
    life8 = f(1)
  }

  IFight.youStats.life = (f(life1)).mul(f(life4)).mul(f(life5).mul(f(life7)).mul(f(life8))).pow(f(life6)).add(f(life2))

  if (type == "universalChallengerChallenge2") {
    IFight.youStats.life = f(life1)
  }

  //power

  if (f(ITraining.base.base1.tot).gte(f(10))) {
    var power1 = Decimal.log10(f(ITraining.base.base1.tot))
  }
  else {
    power1 = f(1)
  }

  if (f(ITraining.base.base2.tot).gte(f(10))) {
    var power2 = Decimal.log10(f(ITraining.base.base2.tot))
  }
  else {
    power2 = f(1)
  }

  if (f(ITraining.base.base3.tot).gte(f(1))) {
    var power3 = Decimal.log10(f(ITraining.base.base3.tot).add(f(10)))
  }
  else {
    power3 = f(1)
  }

  if (f(ITraining.base.base4.tot).gte(f(1))) {
    var power4 = Decimal.log10(f(ITraining.base.base4.tot).add(f(10)))
  }
  else {
    power4 = f(1)
  }


  IGameData.power = f(1).mul(f(power1)).mul(f(power2)).mul(f(power3)).mul(f(power4))

  //Essence

  if (IFight.normalHunting.hunt1.active) {
    var essence1 = f(IFight.normalHunting.hunt1.effect);
  } else {
    essence1 = (f(0))
  }

  if (IFight.normalHunting.hunt2.active) {
    var essence2 = f(IFight.normalHunting.hunt2.effect);
  } else {
    essence2 = (f(0))
  }

  if (IFight.normalHunting.hunt3.active) {
    var essence3 = f(IFight.normalHunting.hunt3.effect);
  } else {
    essence3 = (f(0))
  }

  if (IFight.normalHunting.hunt4.active) {
    var essence4 = f(IFight.normalHunting.hunt4.effect);
  } else {
    essence4 = (f(0))
  }

  if (IFight.normalHunting.hunt5.active) {
    var essence5 = f(IFight.normalHunting.hunt5.effect);
  } else {
    essence5 = (f(0))
  }

  if (f(ITraining.base.base4.tot).gte(f(1))) {
    var essenceA = ITraining.base.base4.tot;
  } else {
    essenceA = (f(1))
  }

  if (f(ITraining.base.base4.tot).gte(f(1))) {
    var essenceA = ITraining.base.base4.tot;
  } else {
    essenceA = (f(1))
  }

  if (IFight.normalHuntingRewards.upgrade3.active) {
    var essenceB = f(IFight.normalHuntingRewards.upgrade3.effect)
  } else {
    essenceB = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade11.active) {
    var essence6 = f(IUniversal.energyUpgrades.upgrade11.effect);
  } else {
    essence6 = (f(1))
  }

  if (IUniversal.energyUpgrades.upgrade12.active) {
    var essence7 = f(IUniversal.energyUpgrades.upgrade12.effect);
  } else {
    essence7 = (f(1))
  }

  if (IUniversal.attributes.attributeBonus2.active) {
    var essence8 = f(IUniversal.attributes.attributeBonus2.effect)
  } else {
    var essence8 = f(1)
  }


  IGameData.essenceProd = (essence1.add(essence2).add(essence3).add(essence4).add(essence5)).mul(f(IGameData.tickSpeed)).mul(f(essenceA)).mul(f(essenceB)).mul(f(essence6)).mul(f(essence7)).mul(f(essence8))
  IGameData.essence = f(IGameData.essence).add(IGameData.essenceProd)

  //Universal Shards
  var universalShards1 = f(IUniversalChallenger.universalChallengerRewards.reward1.effect)

  if (IUniversal.attributes.attributeBonus1.active) {
    var universalShards3 = f(IUniversal.attributes.attributeBonus1.effect)
  } else {
    var universalShards3 = f(1)
  }

  IUniversalChallenger.universalShardsProd = f(universalShards1).mul(f(IGameData.tickSpeed)).mul(universalShards3)

  IUniversalChallenger.universalShards = f(IUniversalChallenger.universalShards).add(IUniversalChallenger.universalShardsProd)
  //Universal Nodes
  if (f(IUniversalChallenger.universalChallengerChallengesRewards.c1.level).gte(f(1))) {
    var universalNodes1 = f(IUniversalChallenger.universalChallengerChallengesRewards.c1.effect)
  } else {
    var universalNodes1 = f(0)
  }

  if (IUniversal.energyUpgrades.upgrade22.active) {
    var universalNodes2 = f(IUniversal.energyUpgrades.upgrade22.effect)
  } else {
    universalNodes2 = f(1)
  }

  IUniversalChallenger.universalNodesProd = f(universalNodes1).mul(f(universalNodes2)).mul(f(IGameData.tickSpeed))


  IUniversalChallenger.universalNodes = f(IUniversalChallenger.universalNodes).add(IUniversalChallenger.universalNodesProd)



  //Universal Cores
  if (f(IUniversalChallenger.universalChallengerChallengesRewards.c2.level).gte(f(1))) {
    var universalCores1 = f(IUniversalChallenger.universalChallengerChallengesRewards.c2.effect)
  } else {
    var universalCores1 = f(0)
  }

  if (IUniversal.attributes.lifeSteal.active) {
    var universalCores2 = f(0)
  } else {
    var universalCores2 = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade22.active) {
    var universalCores3 = f(IUniversal.energyUpgrades.upgrade22.effect)
  } else {
    universalCores3 = f(1)
  }

  IUniversalChallenger.universalCoresProd = f(universalCores1).mul(f(universalCores3)).mul(f(IGameData.tickSpeed))

  var transit = f(IUniversalChallenger.universalCoresProd).mul(f(universalCores2))

  IUniversalChallenger.universalCores = f(IUniversalChallenger.universalCores).add(transit)

}

//VALUES SETTER FIXED

//BUY ZONE

//options
document.getElementById("fp2_content2_5").onclick = function () {
  changePage("mainMenu", "options")
}

//achievements
document.getElementById("fp2_achievements").onclick = function () {
  changePage("mainMenu", "achievements")
}

//automation
document.getElementById("fp2_content1_8").onclick = function () {

  changePage("mainMenu", "fp3_content1_8")
}
//sub categories:

//Training
document.getElementById("fp2_content2_1").onclick = function () {
  changePage("mainMenu", "content2_1")
}

//Energy
document.getElementById("fp2_content2_7").onclick = function () {
  changePage("mainMenu", "content2_7")
}

//Challengers
document.getElementById("fp2_content2_4").onclick = function () {
  changePage("mainMenu", "content2_4")
}

//Hunting
document.getElementById("fp2_content2_6").onclick = function () {
  changePage("mainMenu", "content2_6")
}

//Ascend
document.getElementById("fp2_content2_8").onclick = function () {
  changePage("mainMenu", "content2_8")
}

//Ascension Points

//Universal Challenger
document.getElementById("fp2_content2_10").onclick = function () {
  changePage("mainMenu", "content2_10")
}

//Ascension
document.getElementById("fp2_content2_11").onclick = function () {
  changePage("mainMenu", "content2_11")

  var element = document.getElementById("content2_11_cont")

  element.scrollTop = element.scrollHeight
}

//note 1
document.getElementById("fp2_content2_12").onclick = function () {
  changePage("mainMenu", "content2_12")
}

//note 2
document.getElementById("fp2_content2_13").onclick = function () {
  changePage("mainMenu", "content2_13")
}


//note 3
document.getElementById("fp2_content2_14").onclick = function () {
  changePage("mainMenu", "content2_14")
}


//note 4
document.getElementById("fp2_content2_15").onclick = function () {
  changePage("mainMenu", "content2_15")
}


//note 5
document.getElementById("fp2_content2_16").onclick = function () {
  changePage("mainMenu", "content2_16")
}


///////

document.getElementById("resetSave").onclick = function () {
  changePage("options", "resetScreen")
}

document.getElementById("acceptReset").onclick = function () {
  changePage("options", "out")

  resetSave()
}

document.getElementById("refuseReset").onclick = function () {
  changePage("options", "out")
}

document.getElementById("exportSave").onclick = function () {
  exportSave()
}

document.getElementById("importSave").onclick = function () {
  importSave()
}

//options

document.getElementById("opaqueScreen2").onclick = function () {
  changePage("options", "out")
}

//Bases
document.getElementById("base1Button").onclick = function () {
  assignGroup(ITraining.base, "base1")
}

document.getElementById("base2Button").onclick = function () {
  assignGroup(ITraining.base, "base2")
}

document.getElementById("base3Button").onclick = function () {
  assignGroup(ITraining.base, "base3")
}

document.getElementById("base4Button").onclick = function () {
  assignGroup(ITraining.base, "base4")
}

//Ascension Points

document.getElementById("content2_7_b1_b").onclick = function () {

  IUniversal.ascensionPoint = f(IUniversal.ascensionPointMax)

  for (var x in IUniversal.energyUpgrades) {
    var sel = IUniversal.energyUpgrades[x]

    sel.level = f(0)
  }
}


document.getElementById("content2_7_upgrade1_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade1.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade1, "level", 1, "uni")
    } else {

      buy(IUniversal.energyUpgrades.upgrade1, "level", 1, "uni")
    }
  }
}

document.getElementById("content2_7_upgrade2_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade2.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade2, "level", 1, "uni")
    } else {
      buy(IUniversal.energyUpgrades.upgrade2, "level", 1, "uni")
    }
  }
}

document.getElementById("content2_7_upgrade3_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade3.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade3, "level", 1, "uni")
    } else {
      buy(IUniversal.energyUpgrades.upgrade3, "level", 1, "uni")
    }
  }
}

document.getElementById("content2_7_upgrade4_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade4.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade4, "level", 1, "uni")
    } else {
      buy(IUniversal.energyUpgrades.upgrade4, "level", 1, "uni")
    }
  }
}

document.getElementById("content2_7_upgrade5_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade5.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade5, "level", 1, "uni")
    } else {
      buy(IUniversal.energyUpgrades.upgrade5, "level", 1, "uni")
    }
  }
}

document.getElementById("content2_7_upgrade6_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade6.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade6, "level", 1, "uni")
    } else {
      buy(IUniversal.energyUpgrades.upgrade6, "level", 1, "uni")
    }
  }
}

document.getElementById("content2_7_upgrade7_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade7.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade7, "level", 1, "uni")
    } else {
      buy(IUniversal.energyUpgrades.upgrade7, "level", 1, "uni")
    }
  }
}

document.getElementById("content2_7_upgrade8_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade8.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade8, "level", 1, "uni")
    } else {
      buy(IUniversal.energyUpgrades.upgrade8, "level", 1, "uni")
    }
  }
}

document.getElementById("content2_7_upgrade9_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade9.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade9, "level", 1, "uni")
    } else {
      buy(IUniversal.energyUpgrades.upgrade9, "level", 1, "uni")
    }
  }
}

document.getElementById("content2_7_upgrade10_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade10.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade10, "level", 1, "uni")
    } else {
      buy(IUniversal.energyUpgrades.upgrade10, "level", 1, "uni")
    }
  }
}

document.getElementById("content2_7_upgrade11_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade11.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade11, "level", 1, "uni")
    } else {
      buy(IUniversal.energyUpgrades.upgrade11, "level", 1, "uni")
    }
  }
}

document.getElementById("content2_7_upgrade12_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade12.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade12, "level", 1, "uni")
    } else {
      buy(IUniversal.energyUpgrades.upgrade12, "level", 1, "uni")
    }
  }
}

document.getElementById("content2_7_upgrade13_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade13.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade13, "level", 1, "uni")
    } else {
      buy(IUniversal.energyUpgrades.upgrade13, "level", 1, "uni")
    }
  }
}

document.getElementById("content2_7_upgrade14_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade14.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade14, "level", 1, "uni")
    } else {
      buy(IUniversal.energyUpgrades.upgrade14, "level", 1, "uni")
    }
  }
}

document.getElementById("content2_7_upgrade15_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade15.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade15, "level", 1, "uni")
    } else {
      buy(IUniversal.energyUpgrades.upgrade15, "level", 1, "uni")
    }
  }
}

document.getElementById("content2_7_upgrade16_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade16.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade16, "level", 1, "uni")
    } else {
      buy(IUniversal.energyUpgrades.upgrade16, "level", 1, "uni")
    }
  }
}

document.getElementById("content2_7_upgrade17_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade17.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade17, "level", 1, "uni")
    } else {
      buy(IUniversal.energyUpgrades.upgrade17, "level", 1, "uni")
    }
  }
}

document.getElementById("content2_7_upgrade18_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade18.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade18, "level", 1, "uni")
    } else {
      buy(IUniversal.energyUpgrades.upgrade18, "level", 1, "uni")
    }
  }
}

document.getElementById("content2_7_upgrade19_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade19.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade19, "level", 1, "uni")
    } else {
      buy(IUniversal.energyUpgrades.upgrade19, "level", 1, "uni")
    }
  }
}

document.getElementById("content2_7_upgrade20_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade20.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade20, "level", 1, "uni")
    } else {
      buy(IUniversal.energyUpgrades.upgrade20, "level", 1, "uni")
    }
  }
}

document.getElementById("content2_7_upgrade21_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade21.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade21, "level", 1, "uni")
    } else {
      buy(IUniversal.energyUpgrades.upgrade21, "level", 1, "uni")
    }
  }
}

document.getElementById("content2_7_upgrade22_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade22.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade22, "level", 1, "uni")
    } else {
      buy(IUniversal.energyUpgrades.upgrade22, "level", 1, "uni")
    }
  }
}

document.getElementById("content2_7_upgrade23_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade23.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversal.energyUpgrades.upgrade23, "level", 1, "uni")
    } else {
      buy(IUniversal.energyUpgrades.upgrade23, "level", 1, "uni")
    }
  }
}

//Fight

document.getElementById("c2_4_VS").onclick = async function () {

  if (!(f(IFight.challengers.baseChallenger.level).gt(IFight.challengers.baseChallenger.maxLevel))) {
    try {
      // Se c'è già un combattimento, fermalo
      if (IFight.youStats.fightController1 && typeof IFight.youStats.fightController1.abort === "function") {
        IFight.youStats.fightController1.abort();
        IFight.youStats.fightController1 = null;
        return; // Esce se il combattimento è stato interrotto
      }

      // Inizia un nuovo combattimento
      IFight.youStats.fightController1 = new AbortController();
      const signal = IFight.youStats.fightController1.signal;
      // Aspetta che il combattimento finisca
      if (f(IFight.youStats.life).gt(f(0)) && f(IFight.youStats.damage).gt(f(0))) {
        await fight("baseChallenger", IFight.challengers.baseChallenger, signal);
      }

      // Resetta il controller solo se il combattimento è completato senza interruzione
      if (!signal.aborted) {
        IFight.youStats.fightController1 = null;
      }

    } catch (error) {
      console.error("Errore durante il combattimento:", error);
      // Gestione errori in caso di problemi con la funzione `fight`
      IFight.youStats.fightController1 = null; // Assicurati che il controller venga resettato
    }
  }
};

document.getElementById("c2_10_VS").onclick = async function () {
  try {
    // Se c'è già un combattimento, fermalo
    if (IFight.youStats.fightController2 && typeof IFight.youStats.fightController2.abort === "function") {
      IFight.youStats.fightController2.abort();
      IFight.youStats.fightController2 = null;
      return; // Esce se il combattimento è stato interrotto
    }

    // Inizia un nuovo combattimento
    IFight.youStats.fightController2 = new AbortController();
    const signal = IFight.youStats.fightController2.signal;

    // Aspetta che il combattimento finisca

    if (f(IFight.youStats.life).gt(f(0)) && f(IFight.youStats.damage).gt(f(0))) {
      await fight("universalChallenger", IUniversalChallenger.challengers.universalChallenger, signal);
    }

    // Resetta il controller solo se il combattimento è completato senza interruzione
    if (!signal.aborted) {
      IFight.youStats.fightController2 = null;
    }

  } catch (error) {
    console.error("Errore durante il combattimento:", error);
    // Gestione errori in caso di problemi con la funzione `fight`
    IFight.youStats.fightController2 = null; // Assicurati che il controller venga resettato
  }
};

document.getElementById("c2_10_challenges_c1_p2").onclick = async function () {

  if (!(IFight.youStats.onFight2)) {
    IUniversalChallenger.universalChallengerChallenges.c1.active = false
  } else {
    IUniversalChallenger.universalChallengerChallenges.c1.active = true
  }

  try {
    // Se c'è già un combattimento, fermalo
    if (IFight.youStats.fightController2 && typeof IFight.youStats.fightController2.abort === "function") {
      IFight.youStats.fightController2.abort();
      IFight.youStats.fightController2 = null;
      return; // Esce se il combattimento è stato interrotto
    }

    // Inizia un nuovo combattimento
    IFight.youStats.fightController2 = new AbortController();
    const signal = IFight.youStats.fightController2.signal;

    // Aspetta che il combattimento finisca

    if (f(IFight.youStats.life).gt(f(0)) && f(IFight.youStats.damage).gt(f(0))) {
      await fight("universalChallengerChallenge1", IUniversalChallenger.challengers.universalChallenger, signal);
    }

    // Resetta il controller solo se il combattimento è completato senza interruzione
    if (!signal.aborted) {
      IFight.youStats.fightController2 = null;
    }

  } catch (error) {
    console.error("Errore durante il combattimento:", error);
    // Gestione errori in caso di problemi con la funzione `fight`
    IFight.youStats.fightController2 = null; // Assicurati che il controller venga resettato
  }
}

document.getElementById("c2_10_challenges_c2_p2").onclick = async function () {

  if (!(IFight.youStats.onFight2)) {
    IUniversalChallenger.universalChallengerChallenges.c2.active = false
  } else {
    IUniversalChallenger.universalChallengerChallenges.c2.active = true
  }

  try {
    // Se c'è già un combattimento, fermalo
    if (IFight.youStats.fightController2 && typeof IFight.youStats.fightController2.abort === "function") {
      IFight.youStats.fightController2.abort();
      IFight.youStats.fightController2 = null;
      return; // Esce se il combattimento è stato interrotto
    }

    // Inizia un nuovo combattimento
    IFight.youStats.fightController2 = new AbortController();
    const signal = IFight.youStats.fightController2.signal;

    // Aspetta che il combattimento finisca

    if (f(IFight.youStats.life).gt(f(0)) && f(IFight.youStats.damage).gt(f(0))) {
      await fight("universalChallengerChallenge2", IUniversalChallenger.challengers.universalChallenger, signal);
    }

    // Resetta il controller solo se il combattimento è completato senza interruzione
    if (!signal.aborted) {
      IFight.youStats.fightController2 = null;
    }

  } catch (error) {
    console.error("Errore durante il combattimento:", error);
    // Gestione errori in caso di problemi con la funzione `fight`
    IFight.youStats.fightController2 = null; // Assicurati che il controller venga resettato
  }
}


//hunting

//Multi

document.getElementById("content2_6_menu_button").onclick = function () {
  if (IFight.huntingMulti) {
    IFight.huntingMulti = false
  }
  else {
    IFight.huntingMulti = true
  }
}

document.getElementById("content2_7_b2").onclick = function () {
  if (IUniversal.energyMulti) {
    IUniversal.energyMulti = false
  }
  else {
    IUniversal.energyMulti = true
  }
}

//Hunt

document.getElementById("content2_6_hunt1_button").onclick = function () {
  if (IFight.huntingMulti) {
    buyMultiple(IFight.normalHunting.hunt1, "level", 1)

  } else {
    buy(IFight.normalHunting.hunt1, "level", 1)

  }
}

document.getElementById("content2_6_hunt2_button").onclick = function () {
  if (IFight.huntingMulti) {
    buyMultiple(IFight.normalHunting.hunt2, "level", 1)

  } else {
    buy(IFight.normalHunting.hunt2, "level", 1)

  }
}

document.getElementById("content2_6_hunt3_button").onclick = function () {
  if (IFight.huntingMulti) {
    buyMultiple(IFight.normalHunting.hunt3, "level", 1)

  } else {
    buy(IFight.normalHunting.hunt3, "level", 1)

  }
}

document.getElementById("content2_6_hunt4_button").onclick = function () {
  if (IFight.huntingMulti) {
    buyMultiple(IFight.normalHunting.hunt4, "level", 1)

  } else {
    buy(IFight.normalHunting.hunt4, "level", 1)

  }
}

document.getElementById("content2_6_hunt5_button").onclick = function () {
  if (IFight.huntingMulti) {
    buyMultiple(IFight.normalHunting.hunt5, "level", 1)

  } else {
    buy(IFight.normalHunting.hunt5, "level", 1)

  }
}

//huntingRewards

document.getElementById("content2_6_upgrade1_button").onclick = function () {
  if (IFight.huntingMulti) {
    buyMultiple(IFight.normalHuntingRewards.upgrade1, "level", 1)

  } else {
    buy(IFight.normalHuntingRewards.upgrade1, "level", 1)

  }
}

document.getElementById("content2_6_upgrade2_button").onclick = function () {
  if (IFight.huntingMulti) {
    buyMultiple(IFight.normalHuntingRewards.upgrade2, "level", 1)

  } else {
    buy(IFight.normalHuntingRewards.upgrade2, "level", 1)

  }
}

document.getElementById("content2_6_upgrade3_button").onclick = function () {
  if (IFight.huntingMulti) {
    buyMultiple(IFight.normalHuntingRewards.upgrade3, "level", 1)

  } else {
    buy(IFight.normalHuntingRewards.upgrade3, "level", 1)

  }
}

document.getElementById("content2_6_upgrade4_button").onclick = function () {
  if (IFight.huntingMulti) {
    buyMultiple(IFight.normalHuntingRewards.upgrade4, "level", 1)

  } else {
    buy(IFight.normalHuntingRewards.upgrade4, "level", 1)

  }
}

document.getElementById("content2_6_upgrade5_button").onclick = function () {
  if (IFight.huntingMulti) {
    buyMultiple(IFight.normalHuntingRewards.upgrade5, "level", 1)

  } else {
    buy(IFight.normalHuntingRewards.upgrade5, "level", 1)

  }
}

//Ascension
document.getElementById("content1_7_ascension_button").onclick = function () {

  if (!IUniversal.automation.automation5.unlocked) {

    if ((f((IFight.challengers.baseChallenger.level)).minus(f(1))).gte(f(IFight.challengers.baseChallenger.maxLevel))) {
      partialResetSave(1)

      if (IFight.youStats.fightController1 && typeof IFight.youStats.fightController1.abort === "function") {
        IFight.youStats.fightController1.abort();
        IFight.youStats.fightController1 = null;
      }

      if (IFight.youStats.fightController2 && typeof IFight.youStats.fightController2.abort === "function") {
        IFight.youStats.fightController2.abort();
        IFight.youStats.fightController2 = null;
      }

      IUniversal.universe = f(IUniversal.universe).add(f(1))

      //Ascension Points

      IUniversal.ascensionPointMax = f(IUniversal.ascensionPointMax).add(f(1))
      IUniversal.ascensionPoint = f(IUniversal.ascensionPoint).add(f(1))
      //page

      changePage("mainMenu", "fp2_content1_7")
      changePage("mainMenu", "content2_8")

    }
  } else {
    if ((f((IFight.challengers.baseChallenger.level)).minus(f(1))).gte(f(IFight.challengers.baseChallenger.maxLevel))) {
      partialResetSave(2)

      IUniversal.universe = f(IUniversal.universe).add(f(1))

      //Ascension Points

      IUniversal.ascensionPointMax = f(IUniversal.ascensionPointMax).add(f(1))
      IUniversal.ascensionPoint = f(IUniversal.ascensionPoint).add(f(1))
    }
  }
}


document.getElementById("content2_11_grid_b1").onclick = function () {
  changePage("attributes", "content2_11_grid_b1_cont")
}

document.getElementById("content2_11_grid_b2").onclick = function () {
  changePage("attributes", "content2_11_grid_b2_cont")
}

document.getElementById("content2_11_grid_b4").onclick = function () {
  changePage("attributes", "content2_11_grid_b4_cont")
}

document.getElementById("content2_11_grid_b5").onclick = function () {
  changePage("attributes", "content2_11_grid_b5_cont")
}

document.getElementById("content2_11_grid_b7").onclick = function () {
  changePage("attributes", "content2_11_grid_b7_cont")
}

document.getElementById("content2_11_grid_b8").onclick = function () {
  changePage("attributes", "content2_11_grid_b8_cont")
}


document.getElementById("content2_11_grid_exit").onclick = function () {
  changePage("attributes", "out")
}

document.getElementById("mainMenuExit").onclick = function () {
  changePage("mainMenu", "out")
}

document.getElementById("content2_11_grid_b1_cont_multi").onclick = function () {
  if (IUniversal.attributes.critMulti) {
    IUniversal.attributes.critMulti = false;
  } else {
    IUniversal.attributes.critMulti = true;
  }
}

document.getElementById("content2_11_grid_b1_cont_b1").onclick = function () {

  if (IUniversal.attributes.critMulti) {
    buyMultiple(IUniversal.attributes.critRate, "level", 1, "uniChallenger")

  } else {
    buy(IUniversal.attributes.critRate, "level", 1, "uniChallenger")
  }
}

document.getElementById("content2_11_grid_b1_cont_b2").onclick = function () {

  if (IUniversal.attributes.critMulti) {
    buyMultiple(IUniversal.attributes.critDamage, "level", 1, "uniChallenger")

  } else {
    buy(IUniversal.attributes.critDamage, "level", 1, "uniChallenger")
  }
}

document.getElementById("content2_11_grid_b2_cont_multi").onclick = function () {
  if (IUniversal.attributes.regenerationMulti) {
    IUniversal.attributes.regenerationMulti = false;
  } else {
    IUniversal.attributes.regenerationMulti = true;
  }
}

document.getElementById("content2_11_grid_b2_cont_1_b1").onclick = function () {

  IUniversal.attributes.regeneration.level = f(IUniversal.attributes.regeneration.level).add(f(IGameData.essence))

  IGameData.essence = f(0)
}

document.getElementById("content2_11_grid_b2_cont_b2").onclick = function () {

  if (IUniversal.attributes.regenerationMulti) {
    buyMultiple(IUniversal.attributes.maxRegeneration, "level", 1, "uniChallenger")

  } else {
    buy(IUniversal.attributes.maxRegeneration, "level", 1, "uniChallenger")
  }
}

document.getElementById("content2_11_grid_b5_cont_multi").onclick = function () {
  if (IUniversal.attributes.defenceMulti) {
    IUniversal.attributes.defenceMulti = false;
  } else {
    IUniversal.attributes.defenceMulti = true;
  }
}

document.getElementById("content2_11_grid_b5_cont_1_b1").onclick = function () {

  if (IUniversal.attributes.defenceMulti) {
    var oddsBeaten = false
    while (!oddsBeaten) {
      if (f(Math.random()).lte(f(IUniversal.attributes.defence.odds))) {
        buy(IUniversal.attributes.defence, "level", 1, "uniChallenger")
        oddsBeaten = true
      } else {
        buy(IUniversal.attributes.defence, "level", 0, "uniChallenger")
      }
    }



  } else {
    if (f(Math.random()).lte(f(IUniversal.attributes.defence.odds))) {
      buy(IUniversal.attributes.defence, "level", 1, "uniChallenger")
    } else {
      buy(IUniversal.attributes.defence, "level", 0, "uniChallenger")
    }
  }
}

document.getElementById("content2_11_grid_b5_cont_b2").onclick = function () {

  if (IUniversal.attributes.defenceMulti) {
    buyMultiple(IUniversal.attributes.maxDefence, "level", 1, "uniChallenger")

  } else {
    buy(IUniversal.attributes.maxDefence, "level", 1, "uniChallenger")
  }
}

document.getElementById("content2_11_grid_b4_cont_multi").onclick = function () {
  if (IUniversal.attributes.defencePenetrationMulti) {
    IUniversal.attributes.defencePenetrationMulti = false;
  } else {
    IUniversal.attributes.defencePenetrationMulti = true;
  }
}


document.getElementById("content2_11_grid_b4_cont_1_b1").onclick = function () {

  IUniversal.attributes.defencePenetration.level = f(IUniversal.attributes.defencePenetration.level).add(f(ITraining.base.base1.tot)).add(f(ITraining.base.base2.tot))

  ITraining.base.base1.tot = f(0)
  ITraining.base.base2.tot = f(0)
}

document.getElementById("content2_11_grid_b4_cont_b2").onclick = function () {

  if (IUniversal.attributes.defencePenetrationMulti) {
    buyMultiple(IUniversal.attributes.maxDefencePenetration, "level", 1, "uniChallenger")

  } else {
    buy(IUniversal.attributes.maxDefencePenetration, "level", 1, "uniChallenger")
  }
}

document.getElementById("content2_11_grid_b7_cont_multi").onclick = function () {
  if (IUniversal.attributes.lifeStealMulti) {
    IUniversal.attributes.lifeStealMulti = false;
  } else {
    IUniversal.attributes.lifeStealMulti = true;
  }
}

document.getElementById("content2_11_grid_b7_cont_b1").onclick = function () {

  if (IUniversal.attributes.lifeSteal.active) {
    IUniversal.attributes.lifeSteal.active = false
  } else {
    IUniversal.attributes.lifeSteal.active = true
  }
}

document.getElementById("content2_11_grid_b7_cont_b2").onclick = function () {

  if (IUniversal.attributes.lifeStealMulti) {
    buyMultiple(IUniversal.attributes.lifeStealMax, "level", 1, "uniChallenger")

  } else {
    buy(IUniversal.attributes.lifeStealMax, "level", 1, "uniChallenger")
  }
}

document.getElementById("content2_11_grid_b8_cont_multi").onclick = function () {
  if (IUniversal.attributes.shieldMulti) {
    IUniversal.attributes.shieldMulti = false;
  } else {
    IUniversal.attributes.shieldMulti = true;
  }
}

document.getElementById("content2_11_grid_b8_cont_1_b1").onclick = function () {

  IUniversal.attributes.shield.level = f(IUniversal.attributes.shield.level).add(IUniversalChallenger.universalCores)

  IUniversalChallenger.universalCores = f(0)
}

document.getElementById("content2_11_grid_b8_cont_b2").onclick = function () {

  if (IUniversal.attributes.shieldMulti) {
    buyMultiple(IUniversal.attributes.maxShield, "level", 1, "uniChallenger")

  } else {
    buy(IUniversal.attributes.maxShield, "level", 1, "uniChallenger")
  }
}

//REQ ATTRIBUTES


document.getElementById("content2_11_grid_b3").onclick = function () {
  if (IUniversal.attributes.attributesUnlock1.req()) {
    IUniversal.attributes.attributesUnlock1.active = true;
  }
}

document.getElementById("content2_11_grid_b6").onclick = function () {
  if (IUniversal.attributes.attributesUnlock2.req()) {
    IUniversal.attributes.attributesUnlock2.active = true;
  }
}

document.getElementById("content2_11_grid_b9").onclick = function () {
  if (IUniversal.attributes.attributesUnlock3.req()) {
    IUniversal.attributes.attributesUnlock3.active = true;
  }
}

//HUNT EVOLUTION

document.getElementById("content2_6_huntEvolution_upgrades_b1").onclick = function () {
  if (f(IUniversal.huntEvolution.b1.level).lt(f(IUniversal.huntEvolution.b1.maxLevel))) {
    buy(IUniversal.huntEvolution.b1, "level", 1, "uniChallenger")
  }
}

document.getElementById("content2_6_huntEvolution_upgrades_b2").onclick = function () {
  if (f(IUniversal.huntEvolution.b2.level).lt(f(IUniversal.huntEvolution.b2.maxLevel))) {
    buy(IUniversal.huntEvolution.b2, "level", 1, "uniChallenger")
  }
}

document.getElementById("content2_6_huntEvolution_upgrades_b3").onclick = function () {
  if (f(IUniversal.huntEvolution.b3.level).lt(f(IUniversal.huntEvolution.b3.maxLevel))) {
    buy(IUniversal.huntEvolution.b3, "level", 1, "uniChallenger")
  }
}

document.getElementById("content2_6_huntEvolution_upgrades_b4").onclick = function () {
  if (f(IUniversal.huntEvolution.b4.level).lt(f(IUniversal.huntEvolution.b4.maxLevel))) {
    buy(IUniversal.huntEvolution.b4, "level", 1, "uniChallenger")
  }
}

document.getElementById("content2_6_huntEvolution_upgrades_b5").onclick = function () {
  if (f(IUniversal.huntEvolution.b5.level).lt(f(IUniversal.huntEvolution.b5.maxLevel))) {
    buy(IUniversal.huntEvolution.b5, "level", 1, "uniChallenger")
  }
}

//AUTOMATION

document.getElementById("fp3_content1_8_auto1_b1").onclick = function () {
  if (f(IUniversal.automation.automation1.level).lt(f(IUniversal.automation.automation1.maxLevel))) {
    buy(IUniversal.automation.automation1, "level", 1, "uniChallenger")
  }
}

document.getElementById("fp3_content1_8_auto2_b1").onclick = function () {
  if (!IUniversal.automation.automation2.unlocked) {
    buy(IUniversal.automation.automation2, "unlocked", true, "uniChallenger")
  } else {
    if (IUniversal.automation.automation2.active) {
      IUniversal.automation.automation2.active = false
    } else {
      IUniversal.automation.automation2.active = true
    }
  }
}

document.getElementById("fp3_content1_8_auto3_b1").onclick = function () {
  if (!IUniversal.automation.automation3.unlocked) {
    buy(IUniversal.automation.automation3, "unlocked", true, "uniChallenger")
  } else {
    if (IUniversal.automation.automation3.active) {
      IUniversal.automation.automation3.active = false
    } else {
      IUniversal.automation.automation3.active = true
    }
  }
}

document.getElementById("fp3_content1_8_auto4_b1").onclick = function () {
  if (!IUniversal.automation.automation4.unlocked) {
    buy(IUniversal.automation.automation4, "unlocked", true, "uniChallenger")
  } else {
    if (IUniversal.automation.automation4.active) {
      IUniversal.automation.automation4.active = false
    } else {
      IUniversal.automation.automation4.active = true
    }
  }
}

document.getElementById("fp3_content1_8_auto5_b1").onclick = function () {
  if (!IUniversal.automation.automation5.unlocked) {
    buy(IUniversal.automation.automation5, "unlocked", true, "uniChallenger")
  } else {
    if (IUniversal.automation.automation5.active) {
      IUniversal.automation.automation5.active = false
    } else {
      IUniversal.automation.automation5.active = true
    }
  }
}

//discord link
document.getElementById("options_discord").onclick = function () {
  window.open("https://discord.gg/6wpH3wuv", "_blank");
}

//FUNCTION: PAUSE FUNCTION

function pauseFunctionPassive(fun, time, bool) {
  let SelFunction = fun + "CanCall";
  ICanCall[SelFunction] = false;
  if (time != null) {
    return new Promise(resolve => {
      setTimeout(() => {
        ICanCall[SelFunction] = true;
        resolve();
      }, time);
    });
  }
  if (time == null) {
    ICanCall[SelFunction] = bool
  }
}

//OFFLINE TIME

async function offProgress(time) {
  if (!waiting) {

    waiting = true;

    IGameData.tickSpeedMult = f(IGameData.tickSpeedMult).mul(f(20)).mul(f(time))


    await challengerOff(time);

    fullSetter()

    waiting = false;

    IGameData.tickSpeedMult = f(0.05)

  }
}

async function challengerOff(time) {

  //prendi quanto tempo devi recuperare

  //prendi la vita e il danno di YOU
  //prendi la vita e il danno di Challenger

  //moltiplica il danno di YOU fino a portare a 0 la vita di Challenger, segna il tempo passato.
  //moltiplica il danno di Challenger fino a portare a 0 la vita di YOU, segna il tempo passato.

  //se il primo risultato e' maggiore del secondo, allora vince YOU seno' vince Challenger.
  //sottrai il tempo passato uguale al minore dei risultati

  //Assegna i premi


  //------------
  //ripeti se ce l' automazione.
  //------------

  var leftTime = time;



  var playerDamage = f(IFight.onFightStats.damage);
  var enemyDamage = f(IFight.challengers.baseChallenger.damage);

  var calcYou = f(IFight.challengers.baseChallenger.leftLife).div(f(playerDamage));
  var calcChallenger = f(IFight.onFightStats.leftLife).div(f(enemyDamage));

  var minimum = Decimal.min(calcYou, calcChallenger)

  if (minimum.toNumber() < leftTime && IFight.youStats.onFight1) {
    if (calcYou < calcChallenger) {

      leftTime -= minimum

      IFight.youStats.fightController = new AbortController();
      IFight.youStats.fightController.abort();

      await fight("baseChallengerPass", null);
    }
    else {
      IFight.youStats.onFight1 = false;
      return
    }
  }


  IFight.youStats.onFight2 = false;


}

//FUNCTIONAL FUNCTIONS

function spheres(targetId, numSpheres, radiusXPercent, radiusYPercent, colorSelected, offSetX, offSetY, sideRate, behindActive, frontActive, startAngle) {

  /*targetId = target a cui gira attorno
  numSpheres = numero di sphere
  radiusXPercent = quanto e' schiacciato
  radiusYPercent = quanto e' schiacciato sulla linea verticale
  colorSelected = colore delle sfere
  offSetX = quanto lo si sposta sull' asse X
  offSetY = quanto lo si sposta sull' asse Y
  sideRate = quanto tempo e' front, e quanto tempo e' behind, di base e' 1/2
  behindActive = e' attivato il behind?
  frontActive = e' attivato il front?
  startAngle = parte di base da pi, input valido: Math.PI / n
  */



  const target = document.getElementById(targetId);
  if (!target) return;

  // SVG dietro
  let behindSvg = target.querySelector('.behindSvg');
  if (!behindSvg) {
    behindSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    behindSvg.classList.add('behindSvg');
    behindSvg.style.position = 'absolute';
    behindSvg.style.top = `${offSetY}%`;
    behindSvg.style.left = `${offSetX}%`;
    behindSvg.style.width = '100%';
    behindSvg.style.height = '100%';
    behindSvg.style.zIndex = '1'; // dietro immagine
    target.appendChild(behindSvg);
    behindSvg.style.pointerEvents = "none"
  }

  // SVG davanti
  let frontSvg = target.querySelector('.frontSvg');
  if (!frontSvg) {
    frontSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    frontSvg.classList.add('frontSvg');
    frontSvg.style.position = 'absolute';
    frontSvg.style.top = `${offSetY}%`;
    frontSvg.style.left = `${offSetX}%`;
    frontSvg.style.width = '100%';
    frontSvg.style.height = '100%';
    frontSvg.style.zIndex = '-1'; // davanti immagine
    target.appendChild(frontSvg);
    behindSvg.style.pointerEvents = "none"
  }

  const cx = target.offsetWidth / 2;
  const cy = target.offsetHeight / 2;

  const colorScale = [
    '#000000', '#0a0a3c', '#1e1a78', '#4b0082', '#8b00ff',
    '#ff0040', '#ff6600', '#ffaa00', '#ffe066', '#ffffff'
  ];

  const behind = [];
  const front = [];
  const t = Date.now() / 1000;

  // Raggio della sfera proporzionale al lato minore
  const sphereRadius = Math.min(target.offsetWidth, target.offsetHeight) * 0.04;


  for (let i = 0; i < numSpheres; i++) {
    const angle = t * 0.8 + (i / numSpheres) * 2 * Math.PI
    const x = cx + Math.cos(angle + startAngle) * target.offsetWidth * (radiusXPercent / 300);
    const y = cy + Math.sin(angle + startAngle) * target.offsetHeight * (radiusYPercent / 400);

    const color = colorSelected;
    const circle = `<circle cx="${x}" cy="${y}" r="${sphereRadius}" fill="${color}" stroke="black" stroke-width="${sphereRadius * 0.1}"/>`;

    const normalizedAngle = ((angle) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI); // sempre tra 0 e 2π
    const rate = (2 * Math.PI) * (sideRate);

    if (normalizedAngle < rate) {
      if (frontActive) {
        behind.push(circle);
      }
    } else {
      if (behindActive) {
        front.push(circle);
      }
    }
  }

  behindSvg.innerHTML = behind.join('\n');
  frontSvg.innerHTML = front.join('\n');
}

function visualSvg(value) {
  const maxRadius = 100;
  const minRadius = 20;

  const colorScale = [
    '#000000', // oscurità assoluta
    '#0a0a3c', // blu notte profondo
    '#1e1a78', // blu mistico
    '#4b0082', // indaco (viola intenso, colore "mistico")
    '#8b00ff', // viola brillante
    '#ff0040', // rosso energia pura
    '#ff6600', // arancione fiamma
    '#ffaa00', // oro brillante
    '#ffe066', // luce solare
    '#ffffff'  // apice: bianco divino
  ];

  let radius = 20;

  const log10 = Math.log10(value || 1);
  const log100 = log10 / 2;
  const isPowerOf100 = value > 0 && Number.isInteger(log100);

  var scaleFactor = 0.8;

  if (isPowerOf100 || f(value).lte(f(2))) {
    radius = minRadius;
  } else {
    const lower = Math.pow(100, Math.floor(log100));
    const upper = lower * 100;
    const scale = (value - lower) / (upper - lower);

    radius = minRadius + (maxRadius - minRadius) * scale * scaleFactor;
  }

  let colorIndex = Math.floor(log100);

  if (colorIndex < 0) {
    colorIndex = 0;
  } else {
    if (f(value).lt(f("1e200"))) {
      // loop finché sotto 1e110
      colorIndex = colorIndex % colorScale.length;
    } else {
      // sopra 1e110 resta fisso all'ultimo colore
      if (colorIndex >= colorScale.length) {
        colorIndex = colorScale.length - 1;
      }
    }
  }

  const fillColor = colorScale[colorIndex];

  let size;
  if (f(value).lte(f(10).pow(f(20)))) {
    size = "100%";
  } else {
    size = "50%";
  }

  // Aura irregolare
  const auraPoints = [];
  const auraRadius = radius * 1.4;
  const segments = 40;
  for (let i = 0; i < segments; i++) {
    const angle = (i / segments) * 2 * Math.PI;
    const variation = (Math.random() - 0.5) * (radius * 0.4);
    const r = auraRadius + variation;
    const x = 150 + r * Math.cos(angle);
    const y = 150 + r * Math.sin(angle);
    auraPoints.push([x, y]);
  }
  const auraPath = auraPoints.map((p, i) =>
    (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)
  ).join(" ") + " Z";

  // Orb1
  const log10_part2 = Math.log10(value || 1);
  let colorIndex2 = Math.floor(log10_part2 / 20);

  if (colorIndex2 < 0) {
    colorIndex2 = 0;
  } else {
    if (f(value).lt(f("1"))) {
      // loop finché sotto 1e110
      colorIndex2 = colorIndex2 % colorScale.length;
    } else {
      // sopra 1e110 resta fisso all'ultimo colore
      if (colorIndex2 >= colorScale.length) {
        colorIndex2 = colorScale.length - 1;
      }
    }
  }

  const fillColor2 = colorScale[colorIndex2];

  var radius2 = maxRadius * scaleFactor;

  // Aura irregolare
  const auraPoints2 = [];
  const auraRadius2 = radius2 * 1.4;
  const segments2 = 40;
  for (let i = 0; i < segments2; i++) {
    const angle2 = (i / segments2) * 2 * Math.PI;
    const variation2 = (Math.random() - 0.5) * (radius2 * 0.4);
    const r = auraRadius2 + variation2;
    const x = 150 + r * Math.cos(angle2);
    const y = 150 + r * Math.sin(angle2);
    auraPoints2.push([x, y]);
  }
  const auraPath2 = auraPoints2.map((p, i) =>
    (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)
  ).join(" ") + " Z";

  let orb1 = "";
  if (f(value).gte(f(10).pow(f(20)))) {
    orb1 = `<svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet"
       style="position:absolute; top:50%; left:50%; transform: translate(-50%, -50%); z-index:1;">
    <path d="${auraPath2}" fill="${fillColor2}" opacity="0.25" stroke="black" stroke-width="2"/>
    <circle cx="150" cy="150" r="${radius2}" fill="${fillColor2}" 
            stroke="black" stroke-width="2"/>
  </svg>`;
  } else {
    orb1 = ""
  }

  const svg = `
<div style="position: relative; width: 100%; height: 100%;">
  <!-- Sfera grande sotto -->
  <svg width="${size}" height="${size}" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet"
       style="position:absolute; top:50%; left:50%; transform: translate(-50%, -50%); z-index:2;">
<path d="${auraPath}" fill="${fillColor}" opacity="0.25" stroke="black" stroke-width="2"/>
    <circle cx="150" cy="150" r="${radius}" fill="${fillColor}" 
            stroke="black" stroke-width="2"/>
  </svg>

  ${orb1}
</div>
  `;

  return svg
}

// funzione principale per generare i cerchi
function fibonacciUpTo(max) {
  const seq = [1, 1];
  while (true) {
    const next = seq[seq.length - 1] + seq[seq.length - 2];
    if (next > max) break;
    seq.push(next);
  }
  return max < 1 ? [] : (max === 1 ? [1] : seq);
}
function ascensionRings(div, valore, spacingFactor = 1, padding = 0, startPercent = 0.2, scaleFactor = 1) {
  const el = (typeof div === 'string') ? document.getElementById(div) : div;
  if (!el) return;

  let svg = el.querySelector('svg.ascension-overlay');
  if (!svg) {
    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('ascension-overlay');
    Object.assign(svg.style, {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1   // ⬅️ sempre dietro
    });
    el.style.position = 'relative';
    el.appendChild(svg);
  }

  while (svg.firstChild) svg.removeChild(svg.firstChild);

  const rect = el.getBoundingClientRect();
  const cx = rect.width / 2;
  const cy = rect.height / 2;
  const maxRadius = (rect.width / 2) - padding;

  const fibSeq = fibonacciUpTo(valore);
  let step = maxRadius * spacingFactor / fibSeq.length;
  let radii = [];
  let currentRadius = startPercent * maxRadius;

  for (let i = 0; i < fibSeq.length; i++) {
    radii.push(currentRadius * scaleFactor);
    currentRadius += step * Math.pow(1.2, i);
  }

  for (const r of radii) {
    const circle = document.createElementNS(svg.namespaceURI, 'circle');
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', r);
    circle.setAttribute('data-original-r', r / scaleFactor); // salva raggio originale
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', '#8ab4ff');
    circle.setAttribute('stroke-width', '2');
    circle.setAttribute('stroke-opacity', '0.8');
    svg.appendChild(circle);
  }

  svg.dataset.scale = scaleFactor; // salva fattore corrente
}

// funzione per scalare i cerchi
function scaleAscensionRings(factor) {
  IShowableClass.svg.ascensionCirclesScale = IShowableClass.svg.ascensionCirclesScale * factor

}

document.getElementById('scale-up').addEventListener('click', () => scaleAscensionRings(1.1));
document.getElementById('scale-down').addEventListener('click', () => scaleAscensionRings(0.9));

// Chiama la funzion


function visualMenu() {

  document.getElementById("menu1").style.backgroundImage = `url("images/ground.png")`
  document.getElementById("menu1").style.zIndex = 3

  document.getElementById("menu2").style.backgroundImage = `url("images/mountain.png")`
  document.getElementById("menu2").style.zIndex = 2

  document.getElementById("menu3").style.backgroundImage = `url("images/sky.png")`
  document.getElementById("menu3").style.zIndex = 1



  document.getElementById("fp2_content2_1_image").style.backgroundImage = `url("images/training.png")`

  let hunt1 = f(IFight.normalHunting.hunt1.level).gt(f(0)) ? `url("images/slime stand.png")` : "";
  let hunt2 = f(IFight.normalHunting.hunt2.level).gt(f(0)) ? `url("images/zombie stand.png")` : "";
  let hunt3 = f(IFight.normalHunting.hunt3.level).gt(f(0)) ? `url("images/knight stand.png")` : "";
  let hunt4 = f(IFight.normalHunting.hunt4.level).gt(f(0)) ? `url("images/demon stand.png")` : "";
  let hunt5 = f(IFight.normalHunting.hunt5.level).gt(f(0)) ? `url("images/wyvern stand.png")` : "";

  // Array con tutti i background
  let backgrounds = [
    // sempre presente
    hunt1,
    hunt2,
    hunt3,
    hunt4,
    hunt5,
    `url("images/hunting board.png")`
  ].filter(b => b !== ""); // rimuove quelli vuoti

  // Assegna a backgroundImage
  document.getElementById("fp2_content2_6_image").style.backgroundImage = backgrounds.join(", ");

  document.getElementById("fp2_content2_7_image").style.backgroundImage = `url("images/energy.png")`


  var image = `url("images/attributes 1.png")`

  if (IUniversal.attributes.attributesUnlock1.active) {
    image = `url("images/attributes 2.png")`
    if (IUniversal.attributes.attributesUnlock2.active) {
      image = `url("images/attributes 3.png")`
    }
  }

  document.getElementById("fp2_content2_11_image").style.backgroundImage = image

  document.getElementById("fp2_content2_4_image").style.backgroundImage = `url("images/challenger.png")`

  document.getElementById("fp2_content2_10_image").style.backgroundImage = `url("images/universal challenger.png")`

  document.getElementById("fp2_content2_8_image").style.backgroundImage = `url("images/ascension.png")`

  //notes

  document.getElementById("fp2_content2_12_image").style.backgroundImage = `url("images/note 1 version 1.png")`

  document.getElementById("fp2_content2_13_image").style.backgroundImage = `url("images/note 2 version 1.png")`

  document.getElementById("fp2_content2_14_image").style.backgroundImage = `url("images/note 3 version 1.png")`

  document.getElementById("fp2_content2_15_image").style.backgroundImage = `url("images/note 4 version 1.png")`

  document.getElementById("fp2_content2_16_image").style.backgroundImage = `url("images/note 5 version 1.png")`



  //svg

  document.getElementById("content2_1_svg").innerHTML = visualSvg(f(ITraining.base.base1.tot).mul(f(ITraining.base.base2.tot)));
  document.getElementById("fp2_content2_1_svg").innerHTML = visualSvg(f(ITraining.base.base1.tot).mul(f(ITraining.base.base2.tot)));


  document.getElementById("c2_4_A_image").innerHTML = visualSvg(f(IFight.youStats.life).mul(f(IFight.youStats.damage)));

  if (f(IFight.challengers.baseChallenger.level).lte(f(f(IFight.challengers.baseChallenger.maxLevel)))) {
    document.getElementById("c2_4_B_image").innerHTML = visualSvg(f(IFight.challengers.baseChallenger.damage).mul(f(IFight.challengers.baseChallenger.life)));
  } else {
    document.getElementById("c2_4_B_image").innerHTML = ""
  }

  document.getElementById("c2_10_A_image").innerHTML = visualSvg(f(IFight.youStats.life).mul(f(IFight.youStats.damage)));
  document.getElementById("c2_10_B_image").innerHTML = visualSvg(f(IUniversalChallenger.challengers.universalChallenger.damage).mul(f(IUniversalChallenger.challengers.universalChallenger.life)));


  //spheres

  var sel = IUniversal.energyUpgrades
  var tot1 = f(sel.upgrade1.level).add(sel.upgrade2.level).add(sel.upgrade3.level).add(sel.upgrade4.level).add(sel.upgrade5.level)

  var sel = IUniversal.energyUpgrades
  var tot2 = f(sel.upgrade6.level).add(sel.upgrade7.level).add(sel.upgrade8.level).add(sel.upgrade9.level).add(sel.upgrade10.level)

  var sel = IUniversal.energyUpgrades
  var tot3 = f(sel.upgrade11.level).add(sel.upgrade12.level).add(sel.upgrade13.level).add(sel.upgrade14.level).add(sel.upgrade15.level)

  var sel = IUniversal.energyUpgrades
  var tot4 = f(sel.upgrade16.level).add(sel.upgrade17.level).add(sel.upgrade18.level).add(sel.upgrade19.level).add(sel.upgrade20.level)

  //energy
  spheres('content2_7_grid_svg1', tot1, 100, 40, "#ff0040", 0, -20, 1 / 2, true, true, null);

  spheres('content2_7_grid_svg2', tot2, 110, 44, "#00ff80", 0, -5, 1 / 2, true, true, null);

  spheres('content2_7_grid_svg3', tot3, 120, 48, "#0066ff", 0, 10, 1 / 2, true, true, null);

  spheres('content2_7_grid_svg4', tot4, 130, 52, "#ffd700", 0, 25, 1 / 2, true, true, null);

  //menu

  spheres('fp2_content2_7_svg1', tot1, 80, 48, "#ff0040", -2, -20, 2.25 / 3, false, true, -45 * Math.PI / 180);

  spheres('fp2_content2_7_svg2', tot2, 90, 54, "#00ff80", -2, 0, 2.25 / 3, false, true, -45 * Math.PI / 180);

  spheres('fp2_content2_7_svg3', tot3, 100, 60, "#0066ff", -2, 20, 2.25 / 3, false, true, -45 * Math.PI / 180);

  spheres('fp2_content2_7_svg4', tot4, 110, 66, "#ffd700", -2, 40, 2.25 / 3, false, true, -45 * Math.PI / 180);

}

//LORE

function visualLore() {
  update("content2_12_text", IUniversal.lore.lore1)
  update("content2_13_text", IUniversal.lore.lore2)
  update("content2_14_text", IUniversal.lore.lore3)
  update("content2_15_text", IUniversal.lore.lore4)
  update("content2_16_text", IUniversal.lore.lore5)
}

//VISUAL TRAINING

function visualTraining() {
  for (let x in ITraining.base) {
    var sel = ITraining.base[x]

    update(x + "_1", `<div>${sel.name}</div>`)

    if (sel.name == "Damage") {
      update(x + "_2", `<div>${sel.description}  (${format(f(IFight.youStats.damage), 0)})</div>`)
    } else if (sel.name == "Life") {
      update(x + "_2", `<div>${sel.description}  (${format(f(IFight.youStats.life), 0)})</div>`)
    } else {
      update(x + "_2", `<div>${sel.description}</div>`)
    }
    update(x + "_3", `<div>${format(sel.prod, 2)}/s</div>`)

    if (x == "base3" || x == "base4") {

      if (sel.req() == true || checkShow(x)) {
        update(x + "_1", `<div>${sel.name}</div>`)
        update(x + "_2", `<div>${sel.description}</div>`)
        update(x + "_3", `<div>${format(sel.prod, 2)}/s</div>`)
        update("base34_req", "")
      } else {
        update("base34_req", ITraining.reqDescription)
      }
    }

    let state = ""

    if (sel.active) {
      state = "STOP"
      document.getElementById(x + "Button").style.backgroundColor = "#972a2aff"
    }
    else {
      state = "TRAIN"
      document.getElementById(x + "Button").style.backgroundColor = "#1e8449"
    }

    update(x + "Button", `<div>${state}</div>`)
  }

  //IMAGE

  document.getElementById("content2_1_image").style.backgroundImage = `url("images/training.png")`
}

async function flashFight(type) {
  if (type == "baseChallengerW") {
    var element = document.getElementById("c2_4_A_container").style
    element.borderRadius = "1vw";
    element.boxShadow = "0 0 3vw rgba(33, 227, 72, 0.4)"

    var element = document.getElementById("c2_4_B_container").style
    element.borderRadius = "1vw";
    element.boxShadow = "0 0 3vw hsla(0, 82%, 46%, 0.4)"
  }

  if (type == "baseChallengerL") {
    var element = document.getElementById("c2_4_A_container").style
    element.borderRadius = "1vw";
    element.boxShadow = "0 0 3vw hsla(0, 82%, 46%, 0.4)"

    var element = document.getElementById("c2_4_B_container").style
    element.borderRadius = "1vw";
    element.boxShadow = "0 0 3vw rgba(33, 227, 72, 0.4)"
  }

  if (type == "baseChallengerR") {
    var element = document.getElementById("c2_4_A_container").style
    element.borderRadius = "";
    element.boxShadow = ""

    var element = document.getElementById("c2_4_B_container").style
    element.borderRadius = "";
    element.boxShadow = ""
  }



  //Universal Challenger

  if (type == "universalChallengerW") {
    var element = document.getElementById("c2_10_A_container").style
    element.borderRadius = "1vw";
    element.boxShadow = "0 0 3vw rgba(33, 227, 72, 0.4)"

    var element = document.getElementById("c2_10_B_container").style
    element.borderRadius = "1vw";
    element.boxShadow = "0 0 3vw hsla(0, 82%, 46%, 0.4)"
  }

  if (type == "universalChallengerL") {
    var element = document.getElementById("c2_10_A_container").style
    element.borderRadius = "1vw";
    element.boxShadow = "0 0 3vw hsla(0, 82%, 46%, 0.4)"

    var element = document.getElementById("c2_10_B_container").style
    element.borderRadius = "1vw";
    element.boxShadow = "0 0 3vw rgba(33, 227, 72, 0.4)"
  }

  if (type == "universalChallengerR") {
    var element = document.getElementById("c2_10_A_container").style
    element.borderRadius = "";
    element.boxShadow = ""

    var element = document.getElementById("c2_10_B_container").style
    element.borderRadius = "";
    element.boxShadow = ""
  }
}

function visualChallenger() {
  //you
  if (IFight.youStats.onFight1) {
    var YouLife = IFight.onFightStats.life
    var YouDamage = IFight.onFightStats.damage
    var LeftLife = IFight.onFightStats.leftLife
  }
  else {
    YouLife = IFight.youStats.life
    YouDamage = IFight.youStats.damage
    LeftLife = IFight.youStats.leftLife
  }

  var YouTitle = ITraining.title

  //Base Challenger
  var challengerName = IFight.challengers.baseChallenger.name
  var challengerDamage = IFight.challengers.baseChallenger.damage
  var challengerLife = IFight.challengers.baseChallenger.life
  var challengerLeftLife = IFight.challengers.baseChallenger.leftLife
  var challengerTitle = IFight.challengers.baseChallenger.title
  var challengerLevel = IFight.challengers.baseChallenger.level

  update("c2_4_A_name", `YOU`)
  update("c2_4_A_damage", `<span class="boldBlackBorder">${format(f(YouDamage))}</span> Damage`)
  update("c2_4_A_life", `<span class="boldBlackBorder">${format(f(YouLife))}</span> Total Life`)
  update("c2_4_A_part3", `${format(f(LeftLife))}`)

  if (IFight.youStats.onFight1 == false) {
    if (f(IFight.challengers.baseChallenger.level).gt(f(IFight.challengers.baseChallenger.maxLevel))) {
      update("c2_4_VS", `<span class="boldBlackBorder noClick">MAX</span>`)
      document.getElementById("c2_4_VS").style.backgroundColor = "#1e8449"
    } else {
      update("c2_4_VS", `<span class="boldBlackBorder noClick">CHALLENGE</span>`)
      document.getElementById("c2_4_VS").style.backgroundColor = "#1e8449"
    }
  }
  else {
    update("c2_4_VS", `<span class="boldBlackBorder noClick">STOP</span>`)
    document.getElementById("c2_4_VS").style.backgroundColor = "#972a2aff"
  }


  if (f(IFight.challengers.baseChallenger.level).gt(f(IFight.challengers.baseChallenger.maxLevel))) {
    update("c2_4_B_name", `<div class = "centerDiv">You Are The Strongest In This Universe<div>`)
    update("c2_4_B_damage", ``)
    update("c2_4_B_life", ``)
    update("c2_4_B_part3", ``)
    unlockShow("c2_4_B_part1", false)
  } else {
    update("c2_4_B_name", `${challengerName} ${format(f(challengerLevel), 0)} ${challengerTitle}`)
    update("c2_4_B_damage", `<span class="boldBlackBorder">${format(f(challengerDamage))}</span> Damage`)
    update("c2_4_B_life", `<span class="boldBlackBorder">${format(f(challengerLife))}</span> Total Life`)
    update("c2_4_B_part3", `${format(f(challengerLeftLife))}`)
    unlockShow("c2_4_B_part1", true)
  }
  //REWARDS

  for (let x in IFight.challengerRewards) {

    var sel = IFight.challengerRewards[x]
    update("c2_4_rewards_" + x, sel.name)
  }

  if (checkShow("content2_4")) {
    if (!IFight.youStats.onFight1) {

      progressBar(IFight.youStats.leftLife, IFight.youStats.life, "c2_4_A_part2")
      progressBar(IFight.challengers.baseChallenger.leftLife, IFight.challengers.baseChallenger.life, "c2_4_B_part2")
    }
    else {
      progressBar(IFight.onFightStats.leftLife, IFight.onFightStats.life, "c2_4_A_part2")
      progressBar(IFight.challengers.baseChallenger.leftLife, IFight.challengers.baseChallenger.life, "c2_4_B_part2")
    }
  }

  //CHALLENGER REWARDS

  for (let x in IFight.challengerRewards) {
    var sel = IFight.challengerRewards[x]

    if (sel.level > 0) {
      unlockShow("c2_4_rewards_" + x, true)
    }
    else {
      unlockShow("c2_4_rewards_" + x, false)
    }
  }



  //UNIVERSAL CHALLENGER

  //you
  if (IFight.youStats.onFight2) {
    var YouLife = IFight.onFightStats.life
    var YouDamage = IFight.onFightStats.damage
    var LeftLife = IFight.onFightStats.leftLife
  }
  else {
    YouLife = IFight.youStats.life
    YouDamage = IFight.youStats.damage
    LeftLife = IFight.youStats.leftLife
  }
  //Universal Challenger
  var challengerName = IUniversalChallenger.challengers.universalChallenger.name
  var challengerDamage = IUniversalChallenger.challengers.universalChallenger.damage
  var challengerLife = IUniversalChallenger.challengers.universalChallenger.life
  var challengerLeftLife = IUniversalChallenger.challengers.universalChallenger.leftLife
  var challengerTitle = IUniversalChallenger.challengers.universalChallenger.title
  var challengerLevel = IUniversalChallenger.challengers.universalChallenger.level

  update("c2_10_A_name", `YOU`)
  update("c2_10_A_damage", `<span class="boldBlackBorder">${format(f(YouDamage))}</span> Damage`)
  update("c2_10_A_life", `<span class="boldBlackBorder">${format(f(YouLife))}</span> Total Life`)
  update("c2_10_A_part3", `${format(f(LeftLife))}`)

  if (IFight.youStats.fightController2 == null || IFight.youStats.fightController2 == false) {
    update("c2_10_VS", `<span class="boldBlackBorder noClick">CHALLENGE</span>`)
    document.getElementById("c2_10_VS").style.backgroundColor = "#1e8449"
  }
  else {
    update("c2_10_VS", `<span class="boldBlackBorder noClick">STOP</span>`)
    document.getElementById("c2_10_VS").style.backgroundColor = "#972a2aff"
  }

  update("c2_10_B_name", `${challengerName}`)
  update("c2_10_B_damage", `<span class="boldBlackBorder">${format(f(challengerDamage))}</span> Damage`)
  update("c2_10_B_life", `<span class="boldBlackBorder">${format(f(challengerLife))}</span> Total Life`)
  update("c2_10_B_part3", `${format(f(challengerLeftLife))}`)
  unlockShow("c2_10_B_part1", true)

  //REWARDS

  for (let x in IUniversalChallenger.universalChallengerRewards) {

    var sel = IUniversalChallenger.universalChallengerRewards[x]
    update("c2_10_rewards_" + x, sel.name)
  }

  if (checkShow("content2_10")) {
    if (!IFight.youStats.onFight2) {

      progressBar(IFight.youStats.leftLife, IFight.youStats.life, "c2_10_A_part2")
      progressBar(IUniversalChallenger.challengers.universalChallenger.leftLife, IUniversalChallenger.challengers.universalChallenger.life, "c2_10_B_part2")
    }
    else {
      progressBar(IFight.onFightStats.leftLife, IFight.onFightStats.life, "c2_10_A_part2")
      progressBar(IUniversalChallenger.challengers.universalChallenger.leftLife, IUniversalChallenger.challengers.universalChallenger.life, "c2_10_B_part2")
    }
  }

  //CHALLENGER REWARDS

  for (let x in IUniversalChallenger.universalChallengerRewards) {
    var sel = IUniversalChallenger.universalChallengerRewards[x]

    if (sel.level > 0) {
      unlockShow("c2_10_rewards_" + x, true)
    }
    else {
      unlockShow("c2_10_rewards_" + x, false)
    }
  }

  //UNIVERSAL CHALLENGER CHALLENGES

  update("c2_10_challenges_title", `<div>CHALLENGES</div>`)

  for (let x in IUniversalChallenger.universalChallengerChallenges) {
    var sel = IUniversalChallenger.universalChallengerChallenges[x]
    update(`c2_10_challenges_${x}_p1`, sel.name)
    if (sel.active == true) {
      update(`c2_10_challenges_${x}_p2`, `<span class="boldBlackBorder noClick">STOP CHALLENGE</span>`)
      document.getElementById(`c2_10_challenges_${x}_p2`).style.backgroundColor = "#972a2aff"
    }
    else {
      update(`c2_10_challenges_${x}_p2`, `<span class="boldBlackBorder noClick">CHALLENGE</span>`)
      document.getElementById(`c2_10_challenges_${x}_p2`).style.backgroundColor = "#1e8449"
    }
  }

  //UNIVERSAL CHALLENGER CHALLENGES REWARDS

  for (let x in IUniversalChallenger.universalChallengerChallengesRewards) {
    var sel = IUniversalChallenger.universalChallengerChallengesRewards[x]

    update(`c2_10_challenges_${x}_p3`, sel.name)
  }
}

function visualHunting() {

  //funzione che mostra le cose di content2_6_hunt

  //se non e' stato sbloccato cambia tutto il div in un testo con il requisito.

  //se e' stato sbloccato mostra le informazioni

  for (let x in IFight.normalHunting) {
    var sel = IFight.normalHunting[x]

    if (sel.req() == true || sel.unlocked) {
      unlockShow("content2_6_" + x + "_button", true)

      if (checkBuy(sel.priceIdentity, sel.price)) {
        document.getElementById("content2_6_" + x + "_button").style.backgroundColor = "#1e8449"
      } else {
        document.getElementById("content2_6_" + x + "_button").style.backgroundColor = "#972a2aff"
      }

      update("content2_6_" + x + "_name", `<span class="boldBlackBorder">${format(sel.level, 0)}</span> ${sel.name}`)
      update("content2_6_" + x + "_effect", `<span class="boldBlackBorder">${format(sel.effect)}</span> Essence/s`)
      //applica pointer events:  pointer-events: none;

      if (IFight.huntingMulti) {
        var multiText = `Buy Max`
      } else {
        multiText = "Buy 1"
      }

      update("content2_6_" + x + "_req", ``)
      update("content2_6_" + x + "_upgrade", `
                                            <div><span class="boldBlackBorder">${format(sel.price)}</span> Essence</div>`)
    }
    else {
      unlockShow("content2_6_" + x + "_button", false)

      update("content2_6_" + x + "_name", ``)
      update("content2_6_" + x + "_req", `<div>${sel.reqDescription}</div>`)
      update(`content2_6_` + x + `_effect`, "")
      //applica pointer events:  pointer-events: none;
      update(`content2_6_` + x + `_upgrade`, "")
    }
  }

  for (let x in IFight.normalHuntingRewards) {
    var sel = IFight.normalHuntingRewards[x]

    if (sel.req() == true) {

      unlockShow("content2_6_" + x + "_button", true)

      if (checkBuy(sel.priceIdentity, sel.price)) {
        document.getElementById("content2_6_" + x + "_button").style.backgroundColor = "#1e8449"
      } else {
        document.getElementById("content2_6_" + x + "_button").style.backgroundColor = "#972a2aff"
      }

      update("content2_6_" + x + "_name", `<span class="boldBlackBorder">${format(sel.level, 0)}</span> ${sel.name}`)

      if (IFight.huntingMulti) {
        var multiText = "Buy Max"
      } else {
        multiText = "Buy 1"
      }

      update("content2_6_" + x + "_req", ``)
      update(`content2_6_` + x + `_upgrade`, `
                                          <div><span class="boldBlackBorder">${format(sel.price)}</span> Essence</div>`)
    }
    else {
      unlockShow("content2_6_" + x + "_button", false)


      update("content2_6_" + x + "_name", ``)
      update("content2_6_" + x + "_req", `<div>${sel.reqDescription}</div>`)
      //applica pointer events:  pointer-events: none;
      update(`content2_6_` + x + `_upgrade`, "")
    }
  }

  //Hunting Menu

  if (IFight.huntingMulti) {
    update("content2_6_menu_sel", "BUY MAX")
  } else {
    update("content2_6_menu_sel", "BUY 1")
  }

  //HUNT EVOLUTION

  for (let x in IUniversal.huntEvolution) {
    var sel = IUniversal.huntEvolution[x]

    if (checkBuy(sel.priceIdentity, sel.price, "uniChallenger")) {
      document.getElementById(`content2_6_huntEvolution_upgrades_${x}`).style.backgroundColor = "#1e8449"
    } else {
      document.getElementById(`content2_6_huntEvolution_upgrades_${x}`).style.backgroundColor = "#660000"
    }
  }


  document.getElementById("content2_6_huntEvolution_upgrades_u1_image").style.backgroundImage = `url("images/stand slime close.png")`
  document.getElementById("content2_6_huntEvolution_upgrades_u2_image").style.backgroundImage = `url("images/stand zombie close.png")`
  document.getElementById("content2_6_huntEvolution_upgrades_u3_image").style.backgroundImage = `url("images/stand knight close.png")`
  document.getElementById("content2_6_huntEvolution_upgrades_u4_image").style.backgroundImage = `url("images/stand demon close.png")`
  document.getElementById("content2_6_huntEvolution_upgrades_u5_image").style.backgroundImage = `url("images/stand wyvern close.png")`

}

function visualUniversal() {

  if (f(IFight.challengers.baseChallenger.level).minus(f(1)).eq(f(IFight.challengers.baseChallenger.maxLevel))) {
    update("content1_7_ascension_button_text", `Ascend To Universe ${f(IUniversal.universe).add(f(1))}`)
  } else {
    update("content1_7_ascension_button_text", `Ascension Requires Challenger ${f(IFight.challengers.baseChallenger.level).minus(1)} / ${f(IFight.challengers.baseChallenger.maxLevel)}`)
  }

  //Milestones

  var check = false

  unlockShow()
  for (let x in IUniversal.milestones) {
    var sel = IUniversal.milestones[x]

    if (sel.mCheck()) {

      check = true;

      unlockShow(`content1_7_${x}`, true)

      document.getElementById(`content1_7_${x}`).style.backgroundColor = "#004526"

      update(`content1_7_${x}`, `<div>${sel.mReqDesc}</div>
                 <div>${sel.mDesc}</div>`)
    } else {
      document.getElementById(`content1_7_${x}`).style.backgroundColor = "#660000"
      if (check) {
        unlockShow(`content1_7_${x}`, true)

        update(`content1_7_${x}`, `<div>${sel.mReqDesc}</div>
                   <div>${sel.mDesc}</div>`)
      } else {
        unlockShow(`content1_7_${x}`, false)
      }
    }
  }
}

function visualEnergy() {

  //RESPEC

  update("content2_7_b1_text", `${IUniversal.ascensionPoint}/${IUniversal.ascensionPointMax} Ascension Points`)

  //ASCENSION MULTI

  if (IUniversal.energyMulti) {
    update("content2_7_b2_sel", "BUY MAX")
  } else {
    update("content2_7_b2_sel", "BUY 1")
  }

  update("content2_7_b1_b", `RESPEC`)

  //IMAGE

  document.getElementById("content2_7_grid_image").style.backgroundImage = `url("images/Energy Version 5.png")`

  //PULSANTI
  for (let i in IUniversal.energyUpgrades) {
    var sel = IUniversal.energyUpgrades[i]

    update(`content2_7_${i}_b2`, `
      <div>${sel.name}</div>
      <div class="line"></div>
      <div>
      <div><span class="boldBlackBorder">${sel.effectDesc}</span></div>
      <div class="line2">
      </div><div><span class="boldBlackBorder">${sel.price}</span> Ascension Points</div>
      </div>
      `)

    if (sel.showReq) {
      if (checkBuy(sel.priceIdentity, sel.price, "uni")) {
        document.getElementById(`content2_7_${i}_b1`).style.backgroundColor = "#004526"
      } else {
        document.getElementById(`content2_7_${i}_b1`).style.backgroundColor = "#660000"
      }
    }
    else {
      document.getElementById(`content2_7_${i}_b1`).style.backgroundColor = "#36454f"

      if (i == "upgrade21" || i == "upgrade22" || i == "upgrade23") {
        document.getElementById(`content2_7_${i}_b1`).style.backgroundColor = "#324375ff"
      }
    }
  }
}

function visualInventory() {

  const gridContainer = document.getElementById("fp3_content1_4_screen_p1_grid");

  addElement("void");

  const styles = getComputedStyle(gridContainer);

  const numColumns = styles.gridTemplateColumns.trim().split(/\s+/).length;
  const numRows = styles.gridTemplateRows.trim().split(/\s+/).length;

  for (let y = 1; y <= numRows; y++) {
    for (let x = 1; x <= numColumns; x++) {

      const cellKey = `c${y}r${x}`
      addObjectToSpace(y, x, cellKey, "grid1")

    }
  }

  for (let x in IUniversal.equipment) {
    addObjectToSpace(null, null, x, "inventory")
  }

  var element = document.getElementById("fp3_content1_4_screen_p1_display_item1");
  var key = IUniversal.equipment.item1.key;

  if (IUniversal.inventoryStorage[key]) {
    element.innerHTML = IUniversal.inventoryStorage[key].itemBox;
    element.style.display = "block"; // Mostra l'elemento se ha contenuto
  } else {
    element.innerHTML = "";           // Non usare null, meglio stringa vuota
    element.style.display = "none";   // Nascondi completamente l'elemento
  }


  var element = document.getElementById("fp3_content1_4_screen_p1_display_item2");
  var key = IUniversal.equipment.item2.key;

  if (IUniversal.inventoryStorage[key]) {
    element.innerHTML = IUniversal.inventoryStorage[key].itemBox;
    element.style.display = "block"; // Mostra l'elemento se ha contenuto
  } else {
    element.innerHTML = "";           // Non usare null, meglio stringa vuota
    element.style.display = "none";   // Nascondi completamente l'elemento
  }


  var element = document.getElementById("fp3_content1_4_screen_p1_display_item3");
  var key = IUniversal.equipment.item3.key;

  if (IUniversal.inventoryStorage[key]) {
    element.innerHTML = IUniversal.inventoryStorage[key].itemBox;
    element.style.display = "block"; // Mostra l'elemento se ha contenuto
  } else {
    element.innerHTML = "";           // Non usare null, meglio stringa vuota
    element.style.display = "none";   // Nascondi completamente l'elemento
  }
}

function addObjectToSpace(row, col, key, space) {

  if (space == "grid1") {
    const gridContainer = document.getElementById("fp3_content1_4_screen_p1_grid");
    const existing = document.getElementById(`fp3_content1_4_screen_p1_grid_${col}${row}`);

    if (existing) {
      if (IUniversal.inventory[key].key) {
        var element = IUniversal.inventoryStorage[IUniversal.inventory[key].key].name
      } else {
        element = null
      }
      existing.textContent = element

      if (IUniversal.inventory[key].key == null) {
        existing.setAttribute("draggable", "false");
      } else {
        existing.setAttribute("draggable", "true");
      }
      return;
    }

    const div = document.createElement('div');
    div.id = `fp3_content1_4_screen_p1_grid_${col}${row}`;
    div.className = "item";
    div.style.gridColumnStart = col;
    div.style.gridRowStart = row;

    // Wrap the text in a span and disable pointer events
    const label = document.createElement('span');

    label.textContent = IUniversal.inventory[key].key
    label.style.pointerEvents = 'none';  // 👈 Makes the text not interfere with drag/drop
    div.appendChild(label);

    var stringKey = `'${key}'`


    draggableSet(div, `IUniversal.inventory[${stringKey}]`, "inventory")


    gridContainer.appendChild(div);

  }

  if (space == "inventory") {
    const gridContainer = document.getElementById(`fp3_content1_4_screen_p1_equipment_${key}`);
    const existing = document.getElementById(`fp3_content1_4_screen_p1_equipment_${key}_div`);

    if (existing) {
      if (IUniversal.equipment[key].key) {
        var element = IUniversal.inventoryStorage[IUniversal.equipment[key].key].name
        existing.textContent = element
      }
      existing.textContent = element

      if (IUniversal.equipment[key].key == null) {
        existing.setAttribute("draggable", "false");
      } else {
        existing.setAttribute("draggable", "true");
      }
      return;
    }

    const div = document.createElement('div');
    div.id = `fp3_content1_4_screen_p1_equipment_${key}_div`;
    div.className = "item";

    // Wrap the text in a span and disable pointer events
    const label = document.createElement('span');


    label.textContent = IUniversal.equipment[key].key
    label.style.pointerEvents = 'none';  // 👈 Makes the text not interfere with drag/drop
    div.appendChild(label);


    var stringKey = `'${key}'`



    draggableSet(div, `IUniversal.equipment[${stringKey}]`, "inventory")

    gridContainer.appendChild(div);

  }

}

function visualAttributes() {

  update("content2_11_grid_b1", `<div class="noClick"><span class="boldBlackBorder">${IUniversal.attributesLabels.crit.name}</span></div>`)
  update("content2_11_grid_b2", `<div class="noClick"><span class="boldBlackBorder">${IUniversal.attributesLabels.lifeRegeneration.name}</span></div>`)
  update("content2_11_grid_b4", `<div class="noClick"><span class="boldBlackBorder">${IUniversal.attributesLabels.defencePenetration.name}</span></div>`)
  update("content2_11_grid_b5", `<div class="noClick"><span class="boldBlackBorder">${IUniversal.attributesLabels.defence.name}</span></div>`)
  update("content2_11_grid_b7", `<div class="noClick"><span class="boldBlackBorder">${IUniversal.attributesLabels.lifeSteal.name}</span></div>`)
  update("content2_11_grid_b8", `<div class="noClick"><span class="boldBlackBorder">${IUniversal.attributesLabels.shield.name}</span></div>`)

  update("content2_11_grid_c1", `<div class="noClick">${IUniversal.attributes.critPointsName}</div><div class="noClick">${IUniversal.attributes.attributeBonus1.name}</div>`)
  update("content2_11_grid_c2", `<div class="noClick">${IUniversal.attributes.regenerationPointsName}</div><div class="noClick">${IUniversal.attributes.attributeBonus2.name}</div>`)
  update("content2_11_grid_c4", `<div class="noClick">${IUniversal.attributes.defencePenetrationPointsName}</div><div class="noClick">${IUniversal.attributes.attributeBonus4.name}</div>`)
  update("content2_11_grid_c5", `<div class="noClick">${IUniversal.attributes.defencePointsName}</div><div class="noClick">${IUniversal.attributes.attributeBonus3.name}</div>`)
  update("content2_11_grid_c7", `<div class="noClick">${IUniversal.attributes.lifeStealPointsName}</div><div class="noClick">${IUniversal.attributes.attributeBonus5.name}</div>`)
  update("content2_11_grid_c8", `<div class="noClick">${IUniversal.attributes.shieldPointsName}</div><div class="noClick">${IUniversal.attributes.attributeBonus6.name}</div>`)

  //IMAGE

  //ATTRIBUTES UNLOCK

  update("content2_11_grid_b3", `<div class="noClick">${IUniversal.attributes.attributesUnlock1.name}</div>`)
  update("content2_11_grid_b6", `<div class="noClick">${IUniversal.attributes.attributesUnlock2.name}</div>`)
  update("content2_11_grid_b9", `<div class="noClick">${IUniversal.attributes.attributesUnlock3.name}</div>`)

  document.getElementById("content2_11_image").style.backgroundImage = `url("images/Attributes 1 Version 1.png")`
  if (IUniversal.attributes.attributesUnlock1.active) {
    document.getElementById(`content2_11_grid_b3`).style.backgroundColor = "#004526"
    document.getElementById("content2_11_image").style.backgroundImage = `url("images/Attributes 2 Version 1.png")`
  } else {
    document.getElementById(`content2_11_grid_b3`).style.backgroundColor = "#660000"
  }

  if (IUniversal.attributes.attributesUnlock2.active) {
    document.getElementById(`content2_11_grid_b6`).style.backgroundColor = "#004526"
    document.getElementById("content2_11_image").style.backgroundImage = `url("images/Attributes 3 Version 1.png")`
  } else {
    document.getElementById(`content2_11_grid_b6`).style.backgroundColor = "#660000"
  }

  if (IUniversal.attributes.attributesUnlock3.active) {
    document.getElementById(`content2_11_grid_b9`).style.backgroundColor = "#004526"
  } else {
    document.getElementById(`content2_11_grid_b9`).style.backgroundColor = "#660000"
  }





  if (IUniversal.attributes.attributesUnlock1.req()) {
    document.getElementById(`content2_11_grid_b3`).style.backgroundColor = "#004526"
  } else {
    document.getElementById(`content2_11_grid_b3`).style.backgroundColor = "#660000"
  }

  if (IUniversal.attributes.attributesUnlock2.req()) {
    document.getElementById(`content2_11_grid_b6`).style.backgroundColor = "#004526"
  } else {
    document.getElementById(`content2_11_grid_b6`).style.backgroundColor = "#660000"
  }

  if (IUniversal.attributes.attributesUnlock3.req()) {
    document.getElementById(`content2_11_grid_b9`).style.backgroundColor = "#004526"
  } else {
    document.getElementById(`content2_11_grid_b9`).style.backgroundColor = "#660000"
  }

  //CRIT

  var multiText = ""

  if (IUniversal.attributes.critMulti) {
    multiText = "BUY MAX"
  } else {
    multiText = "BUY 1"
  }

  update("content2_11_grid_b1_cont_multi_sel", `${multiText}`)

  update("content2_11_grid_b1_cont_1_1", `<div class="centerDiv">${format(f(IUniversal.attributes.critRate.level), 0)} ${IUniversal.attributes.critRate.name}</div>`)


  update("content2_11_grid_b1_cont_b1", `
                                         <div><span class="boldBlackBorder">${format(f(IUniversal.attributes.critRate.price), 0)}</span> Universal Shards</div>`)



  update("content2_11_grid_b1_cont_2_1", `<div class="centerDiv">${format(f(IUniversal.attributes.critDamage.level), 0)} ${IUniversal.attributes.critDamage.name}</div>`)

  update("content2_11_grid_b1_cont_b2", `
                                         <div><span class="boldBlackBorder">${format(f(IUniversal.attributes.critDamage.price), 0)}</span> Universal Shards</div>`)

  update("content2_11_grid_b1_cont_critPoints", `<div>${format(f(IUniversal.attributes.critPoints))} Critical Points</div>`)

  if (checkBuy(IUniversal.attributes.critRate.priceIdentity, IUniversal.attributes.critRate.price, "uniChallenger")) {
    document.getElementById("content2_11_grid_b1_cont_b1").style.backgroundColor = "#1e8449"
  } else {
    document.getElementById("content2_11_grid_b1_cont_b1").style.backgroundColor = "#972a2aff"
  }

  if (checkBuy(IUniversal.attributes.critDamage.priceIdentity, IUniversal.attributes.critDamage.price, "uniChallenger")) {
    document.getElementById("content2_11_grid_b1_cont_b2").style.backgroundColor = "#1e8449"
  } else {
    document.getElementById("content2_11_grid_b1_cont_b2").style.backgroundColor = "#972a2aff"
  }
  //LIFE REGENERATION

  var multiText = ""

  if (IUniversal.attributes.regenerationMulti) {
    multiText = "BUY MAX"
  } else {
    multiText = "BUY 1"
  }

  update("content2_11_grid_b2_cont_multi_sel", `${multiText}`)

  update("content2_11_grid_b2_cont_1_d1", `Fill With Essence`)

  update("content2_11_grid_b2_cont_1_b1_text", `FILL`)

  update("content2_11_grid_b2_cont_1_d2", `${IUniversal.attributes.regeneration.name}`)



  update("content2_11_grid_b2_cont_2_1", `<div class="centerDiv">${format(f(IUniversal.attributes.maxRegeneration.level), 0)} ${IUniversal.attributes.maxRegeneration.name}</div>`)


  update("content2_11_grid_b2_cont_b2", `
                                         <div><span class="boldBlackBorder">${format(f(IUniversal.attributes.maxRegeneration.price), 0)}</span> Universal Shards</div>`)

  update("content2_11_grid_b2_cont_regenerationPoints", `<div>${format(f(IUniversal.attributes.regenerationPoints))} Regeneration Points</div>`)

  if (checkBuy(IUniversal.attributes.maxRegeneration.priceIdentity, IUniversal.attributes.maxRegeneration.price, "uniChallenger")) {
    document.getElementById("content2_11_grid_b2_cont_b2").style.backgroundColor = "#1e8449"
  } else {
    document.getElementById("content2_11_grid_b2_cont_b2").style.backgroundColor = "#972a2aff"
  }

  //DEFENCE PENETRATION

  var multiText = ""

  if (IUniversal.attributes.defencePenetrationMulti) {
    multiText = "BUY MAX"
  } else {
    multiText = "BUY 1"
  }

  update("content2_11_grid_b4_cont_multi_sel", `${multiText}`)


  update("content2_11_grid_b4_cont_1_d1", `Fill With Damage And Life Training`)
  update("content2_11_grid_b4_cont_1_b1_text", `<div>FILL</div>`)

  update("content2_11_grid_b4_cont_1_d2", `${IUniversal.attributes.defencePenetration.name}`)



  update("content2_11_grid_b4_cont_2_1", `<div class="centerDiv">${format(f(IUniversal.attributes.maxDefencePenetration.level), 0)} ${IUniversal.attributes.maxDefencePenetration.name}</div>`)

  update("content2_11_grid_b4_cont_b2", `
                                         <div><span class="boldBlackBorder">${format(f(IUniversal.attributes.maxDefencePenetration.price), 0)}</span> Universal Nodes</div>`)

  update("content2_11_grid_b4_cont_defencePenetrationPoints", `<div>${format(f(IUniversal.attributes.defencePenetrationPoints))} Defence Penetration Points</div>`)

  if (checkBuy(IUniversal.attributes.maxDefencePenetration.priceIdentity, IUniversal.attributes.maxDefencePenetration.price, "uniChallenger")) {
    document.getElementById("content2_11_grid_b4_cont_b2").style.backgroundColor = "#1e8449"
  } else {
    document.getElementById("content2_11_grid_b4_cont_b2").style.backgroundColor = "#972a2aff"
  }

  //DEFENCE

  var multiText = ""

  if (IUniversal.attributes.defenceMulti) {
    multiText = "BUY MAX"
  } else {
    multiText = "BUY 1"
  }

  update("content2_11_grid_b5_cont_multi_sel", `${multiText}`)

  update("content2_11_grid_b5_cont_1_d1", `<div class="centerDiv">Bet&nbsp <span class="boldBlackBorder">${format(f(IUniversal.attributes.defence.price))}</span>&nbspUniversal Nodes To Level Up Defence</div>
                                           <div class="centerDiv">Odds&nbsp<span class="boldBlackBorder">${format(f(IUniversal.attributes.defence.odds).mul(f(100)))}</span>%`)
  update("content2_11_grid_b5_cont_1_b1_text", `<div>${multiText}</div><div>BET</div>`)

  update("content2_11_grid_b5_cont_1_d2", `<span class="boldBlackBorder">${format(f(IUniversal.attributes.defence.level))}</span> Defence`)



  update("content2_11_grid_b5_cont_2_1", `<div class="centerDiv">${format(f(IUniversal.attributes.maxDefence.level), 0)} ${IUniversal.attributes.maxDefence.name}</div>`)

  update("content2_11_grid_b5_cont_b2", `
                                         <div><span class="boldBlackBorder">${format(f(IUniversal.attributes.maxDefence.price), 0)}</span> Universal Nodes</div>`)

  update("content2_11_grid_b5_cont_defencePoints", `<div>${format(f(IUniversal.attributes.defencePoints))} Defence Points</div>`)

  if (checkBuy(IUniversal.attributes.defence.priceIdentity, IUniversal.attributes.defence.price, "uniChallenger")) {
    document.getElementById("content2_11_grid_b5_cont_1_b1_text").style.backgroundColor = "#1e8449"
  } else {
    document.getElementById("content2_11_grid_b5_cont_1_b1_text").style.backgroundColor = "#972a2aff"
  }

  if (checkBuy(IUniversal.attributes.maxDefence.priceIdentity, IUniversal.attributes.maxDefence.price, "uniChallenger")) {
    document.getElementById("content2_11_grid_b5_cont_b2").style.backgroundColor = "#1e8449"
  } else {
    document.getElementById("content2_11_grid_b5_cont_b2").style.backgroundColor = "#972a2aff"
  }

  //LIFE STEAL

  var multiText = ""

  if (IUniversal.attributes.lifeStealMulti) {
    multiText = "BUY MAX"
  } else {
    multiText = "BUY 1"
  }

  update("content2_11_grid_b7_cont_multi_sel", `${multiText}`)

  update("content2_11_grid_b7_cont_1_1", `Disable Universal Cores/s, Obtain Life Steal Equal To Universal Cores/s`)

  if (IUniversal.attributes.lifeSteal.active) {
    update("content2_11_grid_b7_cont_b1", `<div class="noClick">DEACTIVE</div>`)
    document.getElementById(`content2_11_grid_b7_cont_b1`).style.backgroundColor = "#660000"
  } else {
    update("content2_11_grid_b7_cont_b1", `<div class="noClick">ACTIVE</div>`)
    document.getElementById(`content2_11_grid_b7_cont_b1`).style.backgroundColor = "#004526"
  }

  update("content2_11_grid_b7_cont_1_2", `Life Steal: <span class="boldBlackBorder">${format(f(IUniversal.attributes.lifeSteal.level))}</span>`)


  update("content2_11_grid_b7_cont_2_1", `<div class="centerDiv">${format(f(IUniversal.attributes.lifeStealMax.level), 0)} ${IUniversal.attributes.lifeStealMax.name}</div>`)

  update("content2_11_grid_b7_cont_b2", `
                                         <div><span class="boldBlackBorder">${format(f(IUniversal.attributes.lifeStealMax.price), 0)}</span> Universal Cores</div>`)

  update("content2_11_grid_b7_cont_lifeStealPoints", `<div>${format(f(IUniversal.attributes.lifeStealPoints))} Life Steal Points</div>`)

  if (checkBuy(IUniversal.attributes.lifeStealMax.priceIdentity, IUniversal.attributes.lifeStealMax.price, "uniChallenger")) {
    document.getElementById("content2_11_grid_b7_cont_b2").style.backgroundColor = "#1e8449"
  } else {
    document.getElementById("content2_11_grid_b7_cont_b2").style.backgroundColor = "#972a2aff"
  }

  //SHIELD

  var multiText = ""

  if (IUniversal.attributes.shieldMulti) {
    multiText = "BUY MAX"
  } else {
    multiText = "BUY 1"
  }

  update("content2_11_grid_b8_cont_multi_sel", `${multiText}`)

  update("content2_11_grid_b8_cont_1_d1", `Fill With Universal Cores`)
  update("content2_11_grid_b8_cont_1_b1_text", `<div>FILL</div>`)

  update("content2_11_grid_b8_cont_1_d2", `${IUniversal.attributes.shield.name}`)



  update("content2_11_grid_b8_cont_2_1", `<div class="centerDiv">${format(f(IUniversal.attributes.maxShield.level), 0)} ${IUniversal.attributes.maxShield.name}</div>`)

  update("content2_11_grid_b8_cont_b2", `
                                         <div><span class="boldBlackBorder">${format(f(IUniversal.attributes.maxShield.price), 0)}</span> Universal Cores</div>`)

  update("content2_11_grid_b8_cont_defencePenetrationPoints", `${IUniversal.attributes.shieldPointsName}`)


  if (checkBuy(IUniversal.attributes.maxShield.priceIdentity, IUniversal.attributes.maxShield.price, "uniChallenger")) {
    document.getElementById("content2_11_grid_b8_cont_b2").style.backgroundColor = "#1e8449"
  } else {
    document.getElementById("content2_11_grid_b8_cont_b2").style.backgroundColor = "#972a2aff"
  }
}

//VISUAL LOOP

async function fight(type, enemy, signal) {
  var tickSpeed = IGameData.tickSpeed;

  // Se il segnale è già stato abortito, interrompi subito

  //controlla se hai battuto il challenger
  if (type == "baseChallengerPass") {
    IFight.youStats.onFight1 = false;

    const level = f(IFight.challengers.baseChallenger.level)
    if (level.dividedBy(10).floor().times(10).eq(level)) {
      rewardSet("finalBase")
      return
    }

    rewardSet("base")

    return;
  }

  if (type == "UniversalChallengerPass") {
    IFight.youStats.onFight2 = false;

    rewardSet("universalBase")

    return;
  }

  //quanto tempo passa per ogni attacco in ms
  var delay = 500


  if (type == "baseChallenger") {
    IFight.onFightStats.life = IFight.youStats.life;
    IFight.onFightStats.leftLife = IFight.youStats.leftLife;
    IFight.onFightStats.damage = IFight.youStats.damage;

    var abortHandler1 = () => { }
    // Ascoltatore per l'abort che ferma il combattimento immediatamente
    if (type == "baseChallenger") {
      var abortHandler1 = () => {
        IFight.youStats.onFight1 = false;
      };
    }

    signal?.addEventListener("abort", abortHandler1);

    if (signal?.aborted) {

      IFight.youStats.onFight1 = false;
      return;
    }

    IFight.youStats.onFight1 = true;

    try {
      while (IFight.youStats.onFight1) {
        await sleep(delay);

        // Controllo ad ogni iterazione se il segnale è stato abortito
        if (signal?.aborted) {
          break;
        }


        IFight.youStats.leftLife = IFight.onFightStats.leftLife;

        //danno tuo
        var playerDamage = f(IFight.onFightStats.damage).mul(f(tickSpeed)).mul(f(delay).dividedBy(f(50)));
        //danno nemico
        var enemyDamage = f(IFight.challengers.baseChallenger.damage).mul(f(tickSpeed)).mul(f(delay).dividedBy(f(50)));

        //attacco tuo
        IFight.challengers.baseChallenger.leftLife = f(IFight.challengers.baseChallenger.leftLife).minus(f(playerDamage));
        //attacco nemico
        IFight.onFightStats.leftLife = f(IFight.onFightStats.leftLife).minus(f(enemyDamage));


        if (f(IFight.onFightStats.leftLife).lt(f(0)) && f(IFight.challengers.baseChallenger.leftLife).lt(f(0))) {
          if (f(IFight.onFightStats.leftLife).gte(f(IFight.challengers.baseChallenger.leftLife))) {
            const level = f(IFight.challengers.baseChallenger.level)
            if (level.dividedBy(10).floor().times(10).eq(level)) {
              rewardSet("finalBase")
              visualChallenger()
              flashFight("baseChallengerW")
              await sleep(delay);
              flashFight("baseChallengerR")
              IFight.youStats.onFight1 = false;
              return
            }

            rewardSet("base")
            visualChallenger()
            flashFight("baseChallengerW")
            await sleep(delay);
            flashFight("baseChallengerR")
            IFight.youStats.onFight1 = false;

            return;
          } else {
            visualChallenger()
            flashFight("baseChallengerL")
            await sleep(delay);
            flashFight("baseChallengerR")
            IFight.youStats.onFight1 = false;
            return;
          }
        }

        if (f(IFight.challengers.baseChallenger.leftLife).lessThan(f(0))) {
          const level = f(IFight.challengers.baseChallenger.level)
          if (level.dividedBy(10).floor().times(10).eq(level)) {
            rewardSet("finalBase")
            visualChallenger()
            flashFight("baseChallengerW")
            await sleep(delay);
            flashFight("baseChallengerR")
            IFight.youStats.onFight1 = false;
            return
          }

          rewardSet("base")
          visualChallenger()
          flashFight("baseChallengerW")
          await sleep(delay);
          flashFight("baseChallengerR")
          IFight.youStats.onFight1 = false;

          return;
        }

        if (f(IFight.onFightStats.leftLife).lessThan(f(0))) {
          visualChallenger()
          flashFight("baseChallengerL")
          await sleep(delay);
          flashFight("baseChallengerR")
          IFight.youStats.onFight1 = false;
          return;
        }
      }
    } finally {
      // Rimuovi il listener per evitare memory leak
      signal?.removeEventListener("abort", abortHandler1);
    }
  }

  if (type === "universalChallenger") {
    var abortHandler2 = () => {
      IFight.youStats.onFight2 = false;
      IUniversalChallenger.challengers.universalChallenger.level = f(1)
    };

    if (signal?.aborted) {
      IFight.youStats.onFight2 = false;
      IUniversalChallenger.challengers.universalChallenger.level = f(1)
      return;
    }

    signal?.addEventListener("abort", abortHandler2);

    IFight.youStats.onFight2 = true;

    IUniversalChallenger.challengers.universalChallenger.level = f(1)

    try {
      while (IFight.youStats.onFight2) {
        // Resetta le vite per un nuovo round

        valuesSetterDinamic();
        IFight.onFightStats.life = IFight.youStats.life;
        IFight.onFightStats.leftLife = IFight.youStats.leftLife;
        IFight.onFightStats.damage = IFight.youStats.damage;

        IUniversalChallenger.challengers.universalChallenger.leftLife = IUniversalChallenger.challengers.universalChallenger.life;

        await sleep(delay);
        if (f(IUniversalChallenger.challengers.universalChallenger.leftLife).greaterThan(0) && f(IFight.onFightStats.leftLife).greaterThan(0)) {
          while (f(IUniversalChallenger.challengers.universalChallenger.leftLife).greaterThan(0) && f(IFight.onFightStats.leftLife).greaterThan(0)) {

            if (signal?.aborted) {
              IFight.youStats.onFight2 = false;
              return;
            }

            // Sincronizza leftLife esterna
            IFight.youStats.leftLife = IFight.onFightStats.leftLife;

            const playerDamage = f(IFight.onFightStats.damage).mul(f(tickSpeed)).mul(f(delay).dividedBy(50));
            const enemyDamage = f(IUniversalChallenger.challengers.universalChallenger.damage).mul(f(tickSpeed)).mul(f(delay).dividedBy(50));

            IUniversalChallenger.challengers.universalChallenger.leftLife = f(IUniversalChallenger.challengers.universalChallenger.leftLife).minus(playerDamage);
            IFight.onFightStats.leftLife = f(IFight.onFightStats.leftLife).minus(enemyDamage);

            if (f(IFight.onFightStats.leftLife).lt(f(0)) && f(IUniversalChallenger.challengers.universalChallenger.leftLife).lt(f(0))) {
              if (f(IFight.onFightStats.leftLife).gte(f(IFight.challengers.baseChallenger.leftLife))) {
                rewardSet("universalBase");
                valuesSetter();
                visualChallenger();
                flashFight("universalChallengerW")
                await sleep(delay);
                break; // Passa al round successivo
              } else {

                rewardSet("lostUniversalBase");
                IFight.youStats.onFight2 = false;
                valuesSetter();
                visualChallenger();
                flashFight("universalChallengerL")
                await sleep(delay);
                flashFight("universalChallengerR")
                return;
              }
            }

            if (f(IUniversalChallenger.challengers.universalChallenger.leftLife).lessThanOrEqualTo(0)) {
              rewardSet("universalBase");
              valuesSetter();
              visualChallenger();
              flashFight("universalChallengerW")
              await sleep(delay);
              flashFight("universalChallengerR")
              break; // Passa al round successivo
            }

            if (f(IFight.onFightStats.leftLife).lessThanOrEqualTo(0)) {
              rewardSet("lostUniversalBase");
              IFight.youStats.onFight2 = false;
              valuesSetter();
              visualChallenger();
              flashFight("universalChallengerL")
              await sleep(delay);
              flashFight("universalChallengerR")
              return;
            }
          }
        } else {
          IFight.youStats.onFight2 = false;
        }
      }
    } finally {
      signal?.removeEventListener("abort", abortHandler2);
      IFight.youStats.onFight2 = false;
    }
  }

  if (type === "universalChallengerChallenge1") {

    IUniversalChallenger.universalChallengerChallenges.c1.active = true;

    const challenger = IUniversalChallenger.challengers.universalChallenger;

    var abortHandler2 = () => {
      IFight.youStats.onFight2 = false;
      IUniversalChallenger.challengers.universalChallenger.level = f(1)
    };

    if (signal?.aborted) {
      IFight.youStats.onFight2 = false;
      IUniversalChallenger.challengers.universalChallenger.level = f(1)
      return;
    }

    signal?.addEventListener("abort", abortHandler2);

    IFight.youStats.onFight2 = true;

    IUniversalChallenger.challengers.universalChallenger.level = f(1)


    try {
      while (IFight.youStats.onFight2) {
        // Resetta le vite per un nuovo round

        valuesSetterDinamic("universalChallengerChallenge1")
        IFight.onFightStats.life = IFight.youStats.life;
        IFight.onFightStats.leftLife = IFight.onFightStats.life;
        IFight.onFightStats.damage = IFight.youStats.damage;

        IFight.youStats.leftLife = IFight.onFightStats.leftLife
        visualChallenger()


        IUniversalChallenger.challengers.universalChallenger.leftLife = IUniversalChallenger.challengers.universalChallenger.life;

        await sleep(delay);
        if (f(IUniversalChallenger.challengers.universalChallenger.leftLife).greaterThan(0) && f(IFight.onFightStats.leftLife).greaterThan(0)) {
          while (f(IUniversalChallenger.challengers.universalChallenger.leftLife).greaterThan(0) && f(IFight.onFightStats.leftLife).greaterThan(0)) {

            if (signal?.aborted) {
              IFight.youStats.onFight2 = false;
              return;
            }

            const playerDamage = f(IFight.onFightStats.damage).mul(f(tickSpeed)).mul(f(delay).dividedBy(50));
            const enemyDamage = f(IUniversalChallenger.challengers.universalChallenger.damage).mul(f(tickSpeed)).mul(f(delay).dividedBy(50));

            IUniversalChallenger.challengers.universalChallenger.leftLife = f(challenger.leftLife).minus(playerDamage);
            IFight.onFightStats.leftLife = f(IFight.onFightStats.leftLife).minus(enemyDamage);

            if (f(IFight.onFightStats.leftLife).lt(f(0)) && f(IUniversalChallenger.challengers.universalChallenger.leftLife).lt(f(0))) {
              if (f(IFight.onFightStats.leftLife).gte(f(IFight.challengers.baseChallenger.leftLife))) {
                rewardSet("universalChallenge1Win");
                valuesSetter();
                visualChallenger();
                flashFight("universalChallengerW")
                await sleep(delay);
                flashFight("universalChallengerR")
                break; // Passa al round successivo
              } else {

                rewardSet("universalChallenge1Lost");
                IFight.youStats.onFight2 = false;
                IUniversalChallenger.universalChallengerChallenges.c1.active = false
                valuesSetter();
                flashFight("universalChallengerL")
                visualChallenger();
                flashFight("universalChallengerR")
                await sleep(delay);
                return;
              }
            }

            if (f(IUniversalChallenger.challengers.universalChallenger.leftLife).lessThanOrEqualTo(0)) {
              rewardSet("universalChallenge1Win");
              valuesSetter();
              visualChallenger();
              flashFight("universalChallengerW")
              await sleep(delay);
              flashFight("universalChallengerR")
              break; // Passa al round successivo
            }

            if (f(IFight.onFightStats.leftLife).lessThanOrEqualTo(0)) {
              rewardSet("universalChallenge1Lost");
              IFight.youStats.onFight2 = false;
              IUniversalChallenger.universalChallengerChallenges.c1.active = false;
              valuesSetter();
              visualChallenger()
              flashFight("universalChallengerL")
              await sleep(delay);
              flashFight("universalChallengerR")
              return;
            }

          }
        } else {
          IFight.youStats.onFight2 = false;
        }
      }
    } finally {

      signal?.removeEventListener("abort", abortHandler2);
      IFight.youStats.onFight2 = false;
      IUniversalChallenger.universalChallengerChallenges.c1.active = false;
    }
  }

  if (type === "universalChallengerChallenge2") {

    IUniversalChallenger.universalChallengerChallenges.c2.active = true;

    const challenger = IUniversalChallenger.challengers.universalChallenger;

    var abortHandler2 = () => {
      IFight.youStats.onFight2 = false;
      IUniversalChallenger.challengers.universalChallenger.level = f(1)
    };

    if (signal?.aborted) {
      IFight.youStats.onFight2 = false;
      IUniversalChallenger.challengers.universalChallenger.level = f(1)
      return;
    }

    signal?.addEventListener("abort", abortHandler2);

    IFight.youStats.onFight2 = true;

    IUniversalChallenger.challengers.universalChallenger.level = f(1)


    try {
      while (IFight.youStats.onFight2) {
        // Resetta le vite per un nuovo round

        valuesSetterDinamic("universalChallengerChallenge2")
        valuesSetter("universalChallengerChallenge2")
        IFight.onFightStats.life = IFight.youStats.life;
        IFight.onFightStats.leftLife = IFight.onFightStats.life;
        IFight.onFightStats.damage = IFight.youStats.damage;
        IFight.youStats.leftLife = IFight.onFightStats.leftLife

        visualChallenger()

        IUniversalChallenger.challengers.universalChallenger.leftLife = IUniversalChallenger.challengers.universalChallenger.life;

        await sleep(delay);
        if (f(IUniversalChallenger.challengers.universalChallenger.leftLife).greaterThan(0) && f(IFight.onFightStats.leftLife).greaterThan(0)) {
          while (f(IUniversalChallenger.challengers.universalChallenger.leftLife).greaterThan(0) && f(IFight.onFightStats.leftLife).greaterThan(0)) {

            if (signal?.aborted) {
              IFight.youStats.onFight2 = false;
              return;
            }

            const playerDamage = f(IFight.onFightStats.damage).mul(f(tickSpeed)).mul(f(delay).dividedBy(50));
            const enemyDamage = f(challenger.damage).mul(f(tickSpeed)).mul(f(delay).dividedBy(50));

            IUniversalChallenger.challengers.universalChallenger.leftLife = f(IUniversalChallenger.challengers.universalChallenger.leftLife).minus(playerDamage);
            IFight.onFightStats.leftLife = f(IFight.onFightStats.leftLife).minus(enemyDamage);

            if (f(IFight.onFightStats.leftLife).lt(f(0)) && f(IUniversalChallenger.challengers.universalChallenger.leftLife).lt(f(0))) {
              if (f(IFight.onFightStats.leftLife).gte(f(IFight.challengers.baseChallenger.leftLife))) {
                rewardSet("universalChallenge2Win");
                valuesSetter();
                visualChallenger();
                flashFight("universalChallengerW")
                await sleep(delay);
                flashFight("universalChallengerR")
                break; // Passa al round successivo
              } else {
                rewardSet("universalChallenge2Lost");
                IFight.youStats.onFight2 = false;
                IUniversalChallenger.universalChallengerChallenges.c2.active = false
                valuesSetter();
                visualChallenger()
                flashFight("universalChallengerL")
                await sleep(delay);
                flashFight("universalChallengerR")
                return;
              }
            }

            if (f(IUniversalChallenger.challengers.universalChallenger.leftLife).lessThanOrEqualTo(0)) {
              rewardSet("universalChallenge2Win");
              valuesSetter();
              visualChallenger();
              flashFight("universalChallengerW")
              await sleep(delay);
              flashFight("universalChallengerR")
              break; // Passa al round successivo
            }

            if (f(IFight.onFightStats.leftLife).lessThanOrEqualTo(0)) {
              rewardSet("universalChallenge2Lost");
              IFight.youStats.onFight2 = false;
              IUniversalChallenger.universalChallengerChallenges.c2.active = false;
              valuesSetter();
              visualChallenger()
              flashFight("universalChallengerL")
              await sleep(delay);
              flashFight("universalChallengerR")
              return;
            }

          }
        } else {
          IFight.youStats.onFight2 = false;
        }
      }
    } finally {
      signal?.removeEventListener("abort", abortHandler2);
      IFight.youStats.onFight2 = false;
      IUniversalChallenger.universalChallengerChallenges.c2.active = false;
    }
  }
}

function rewardSet(type) {
  if (type == "base") {
    IFight.challengers.baseChallenger.level = f(IFight.challengers.baseChallenger.level).add(f(1));
    IFight.challengerRewards.reward1.level = f(IFight.challengerRewards.reward1.level).add(f(1));
  }
  if (type == "finalBase") {
    IFight.challengers.baseChallenger.level = f(IFight.challengers.baseChallenger.level).add(f(1));

    IFight.challengerRewards.reward1.level = f(IFight.challengerRewards.reward1.level).add(f(1));
    IFight.challengerRewards.reward2.level = f(IFight.challengerRewards.reward2.level).add(f(1));
  }
  if (type == "universalBase") {
    IUniversalChallenger.challengers.universalChallenger.level = f(IUniversalChallenger.challengers.universalChallenger.level).add(f(1))
    IUniversalChallenger.universalChallengerRewards.reward1.level = f(IUniversalChallenger.challengers.universalChallenger.level)

  }

  if (type == "lostUniversalBase") {

    if (f(IUniversalChallenger.challengers.universalChallenger.level).gt(f(IUniversalChallenger.challengers.universalChallenger.maxLevel).add(f(1)))) {
      IUniversalChallenger.challengers.universalChallenger.maxLevel = f(IUniversalChallenger.challengers.universalChallenger.level).minus(f(1))
      IUniversalChallenger.challengers.universalChallenger.level = f(1)
    } else {

    }

    IUniversalChallenger.universalChallengerRewards.reward1.level = f(IUniversalChallenger.challengers.universalChallenger.level).minus(f(1))
    IUniversalChallenger.challengers.universalChallenger.level = f(1)
  }

  if (type == "universalChallenge1Win") {
    IUniversalChallenger.challengers.universalChallenger.level = f(IUniversalChallenger.challengers.universalChallenger.level).add(f(1))
    IUniversalChallenger.universalChallengerChallenges.c1.level = f(IUniversalChallenger.challengers.universalChallenger.level)

  }

  if (type == "universalChallenge1Lost") {
    if (f(IUniversalChallenger.universalChallengerChallenges.c1.level).gt(f(IUniversalChallenger.universalChallengerChallenges.c1.maxLevel))) {
      IUniversalChallenger.universalChallengerChallenges.c1.maxLevel = f(IUniversalChallenger.universalChallengerChallenges.c1.level).minus(f(1))
      IUniversalChallenger.universalChallengerChallengesRewards.c1.level = f(IUniversalChallenger.universalChallengerChallenges.c1.maxLevel)
    }

    IUniversalChallenger.challengers.universalChallenger.level = f(1)
  }


  if (type == "universalChallenge2Win") {
    IUniversalChallenger.challengers.universalChallenger.level = f(IUniversalChallenger.challengers.universalChallenger.level).add(f(1))
    IUniversalChallenger.universalChallengerChallenges.c2.level = f(IUniversalChallenger.challengers.universalChallenger.level)

  }

  if (type == "universalChallenge2Lost") {

    if (f(IUniversalChallenger.universalChallengerChallenges.c2.level).gt(f(IUniversalChallenger.universalChallengerChallenges.c2.maxLevel))) {
      IUniversalChallenger.universalChallengerChallenges.c2.maxLevel = f(IUniversalChallenger.universalChallengerChallenges.c2.level).minus(f(1))
      IUniversalChallenger.universalChallengerChallengesRewards.c2.level = f(IUniversalChallenger.universalChallengerChallenges.c2.maxLevel)
    }

    IUniversalChallenger.challengers.universalChallenger.level = f(1)
  }
}



async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function format(number, type, formatType = 'scientific') {
  if (number != null) {
    // Se il formato richiesto è "scientific" (notazione scientifica)
    if (formatType === 'scientific') {
      if (typeof number === 'object' && number.exponent != undefined) {
        if (number.exponent < 3) {
          if (type != null) {
            return (number.toNumber()).toFixed(type);
          }
          return (number.toNumber()).toFixed(1);
        }

        if (number.exponent >= 4) {
          let num = number.mantissa;
          num = num.toFixed(2);
          return num + "e" + number.exponent;
        }

        return number.toNumber().toFixed(1);
      } else {
        // Gestione di numeri primitivi (es: 12345)
        return number.toExponential(type || 1);
      }
    }
  }

  return number;
}

function f(number) {
  if (isNaN(number)) {
    return
  } else {

    return new Decimal(number);  // Converte in un oggetto Decimal
  }

}

function sec(number) {
  if (isNaN(number)) {

    throw new Error('Il valore passato non è un numero valido.');
  }

  return new Decimal(number).mul(f(20));  // Converte in un oggetto Decimal
}


function unlockShow(show, visibility) {
  let showableItem = IShowableClass.showable
  for (let a in showableItem) {
    if (a == show) {

      if (visibility == false) {
        showableItem[show] = false;
        document.getElementById(a).style.display = "none";
      }
      if (visibility == true) {
        showableItem[show] = true;
        document.getElementById(a).style.display = "";
      }
    }
  }
}

function unlockShowAll(visibility) {
  let showableItem = IShowableClass.showable
  for (let a in showableItem) {
    const keys = Object.keys(showableItem[a]);
    for (let key of keys) {
      if (visibility === false) {
        document.getElementById(key).style.display = "none";
      }
      if (visibility === true) {
        document.getElementById(key).style.display = "";
      }
    }
  }
}

function checkShow(show) {
  let showableItem = IShowableClass.showable
  for (let a in showableItem) {
    if (a == show) {
      var value = showableItem[a]
      return value;
    }
  }
}

function loopShow() {
  let showableItem = IShowableClass.showable
  for (let a in showableItem) {
    const value = showableItem[a];
    if (value == false) {
      if (document.getElementById(a) == null) {
      } else {
        document.getElementById(a).style.display = "none";
      }
    }
    if (value == true) {
      document.getElementById(a).style.display = "";
    }
  }

  //initial

  if (IShowableClass.init) {

    unlockShow("mainMenu", true);
    unlockShow("fp2_content2_5", true);
    unlockShow("fp2_achievements", false);

    unlockShow("power", true);
    unlockShow("essenceValute", false);
    unlockShow("universalValute", false);
    IShowableClass.init = false;
  }
  //Valutes
  if (IProgress.progress.p2Check() || f(IUniversal.universe).gte(2)) {
    unlockShow("essenceValute", true)
  }

  if (IProgress.progress.p4Check()) {
    unlockShow("universalValute", true)
    unlockShow("universalShardsBase", true)
  }

  if (IUniversal.attributes.attributesUnlock1.req()) {
    unlockShow("universalNodesBase", true)
    unlockShow("universalCoresBase", true)
  }

  //Tabs

  unlockShow("fp2_content2_1_container", true)
  unlockShow("fp2_content2_12_container", true)

  if (IProgress.progress.p1Check() == true || f(IUniversal.universe).gte(f(2))) {
    unlockShow("fp2_content2_4_container", true)
    document.getElementById("fp2_content2_4_image").style.opacity = "1";  // attivo 1, disattivo 0.5
    update("fp2_content2_4", "Challenger")
    document.getElementById("fp2_content2_4").style.pointerEvents = "auto";

    unlockShow("fp2_content2_13_container", true)
    document.getElementById("fp2_content2_13_image").style.opacity = "1";  // attivo 1, disattivo 0.5
    document.getElementById("fp2_content2_13").style.pointerEvents = "auto";
  } else {
    unlockShow("fp2_content2_4_container", true)
    document.getElementById("fp2_content2_4_image").style.opacity = "0.5";  // attivo 1, disattivo 0.5
    update("fp2_content2_4", "Reach 10 Life")
    document.getElementById("fp2_content2_4").style.pointerEvents = "none";

    unlockShow("fp2_content2_13_container", true)
    document.getElementById("fp2_content2_13_image").style.opacity = "0.5";  // attivo 1, disattivo 0.5
    document.getElementById("fp2_content2_13").style.pointerEvents = "none";
  }

  if (IProgress.progress.p1Check() == true || f(IUniversal.universe).gte(f(2))) {
    if (IProgress.progress.p2Check() == true || f(IUniversal.universe).gte(f(2))) {
      unlockShow("fp2_content2_6_container", true)
      document.getElementById("fp2_content2_6_image").style.opacity = "1";  // attivo 1, disattivo 0.5
      update("fp2_content2_6", "Hunting")
      document.getElementById("fp2_content2_6").style.pointerEvents = "auto";

      unlockShow("fp2_content2_14_container", true)
      document.getElementById("fp2_content2_14_image").style.opacity = "1";  // attivo 1, disattivo 0.5
      document.getElementById("fp2_content2_14").style.pointerEvents = "auto";
    } else {
      unlockShow("fp2_content2_6_container", true)
      document.getElementById("fp2_content2_6_image").style.opacity = "0.5";  // attivo 1, disattivo 0.5
      update("fp2_content2_6", "Defeat Challenger 3")
      document.getElementById("fp2_content2_6").style.pointerEvents = "none";

      unlockShow("fp2_content2_14_container", true)
      document.getElementById("fp2_content2_14_image").style.opacity = "0.5";  // attivo 1, disattivo 0.5
      document.getElementById("fp2_content2_14").style.pointerEvents = "none";
    }
  } else {
    unlockShow("fp2_content2_6_container", false)
    unlockShow("fp2_content2_14_container", false)
  }

  if (IProgress.progress.p2Check() == true || f(IUniversal.universe).gte(f(2))) {
    if (IProgress.progress.p3Check() == true || f(IUniversal.universe).gte(f(2))) {
      unlockShow("fp2_content2_8_container", true)
      document.getElementById("fp2_content2_8_image").style.opacity = "1";  // attivo 1, disattivo 0.5
      update("fp2_content2_8", "Ascension")
      document.getElementById("fp2_content2_8").style.pointerEvents = "auto";

      unlockShow("fp2_content2_15_container", true)
      document.getElementById("fp2_content2_15_image").style.opacity = "1";  // attivo 1, disattivo 0.5
      document.getElementById("fp2_content2_15").style.pointerEvents = "auto";
    } else {
      unlockShow("fp2_content2_8_container", true)
      document.getElementById("fp2_content2_8_image").style.opacity = "0.5";  // attivo 1, disattivo 0.5
      update("fp2_content2_8", "Defeat Challenger 10")
      document.getElementById("fp2_content2_8").style.pointerEvents = "none";

      unlockShow("fp2_content2_15_container", true)
      document.getElementById("fp2_content2_15_image").style.opacity = "0.5";  // attivo 1, disattivo 0.5
      document.getElementById("fp2_content2_15").style.pointerEvents = "none";
    }
  } else {
    unlockShow("fp2_content2_8_container", false)
    unlockShow("fp2_content2_15_container", false)
  }

  if (IProgress.progress.p3Check() == true || f(IUniversal.universe).gte(f(2))) {
    if (IUniversal.milestones.m1.mCheck()) {
      unlockShow("fp2_content2_7_container", true)
      document.getElementById("fp2_content2_7_image").style.opacity = "1";  // attivo 1, disattivo 0.5
      update("fp2_content2_7", "Energy")
      document.getElementById("fp2_content2_7").style.pointerEvents = "auto";
    } else {
      unlockShow("fp2_content2_7_container", true)
      document.getElementById("fp2_content2_7_image").style.opacity = "0.5";  // attivo 1, disattivo 0.5
      update("fp2_content2_7", "Reach Universe 2")
      document.getElementById("fp2_content2_7").style.pointerEvents = "none";
    }
  } else {
    unlockShow("fp2_content2_7_container", false)
  }

  if (IUniversal.milestones.m1.mCheck()) {
    if (IUniversal.milestones.m2.mCheck()) {
      unlockShow("fp2_content2_10_container", true)
      document.getElementById("fp2_content2_10_image").style.opacity = "1";  // attivo 1, disattivo 0.5
      update("fp2_content2_10", "Universal Challenger")
      document.getElementById("fp2_content2_10").style.pointerEvents = "auto";

      unlockShow("fp2_content2_11_container", true)
      document.getElementById("fp2_content2_11_image").style.opacity = "1";  // attivo 1, disattivo 0.5
      update("fp2_content2_11", "Attributes")
      document.getElementById("fp2_content2_11").style.pointerEvents = "auto";

      unlockShow("fp2_content1_8", true)

      unlockShow("fp2_content2_16_container", true)
      document.getElementById("fp2_content2_16_image").style.opacity = "1";  // attivo 1, disattivo 0.5
      document.getElementById("fp2_content2_16").style.pointerEvents = "auto";
    } else {
      unlockShow("fp2_content2_10_container", true)
      document.getElementById("fp2_content2_10_image").style.opacity = "0.5";  // attivo 1, disattivo 0.5
      update("fp2_content2_10", "Reach Universe 5")
      document.getElementById("fp2_content2_10").style.pointerEvents = "none";

      unlockShow("fp2_content2_11_container", true)
      document.getElementById("fp2_content2_11_image").style.opacity = "0.5";  // attivo 1, disattivo 0.5
      update("fp2_content2_11", "Reach Universe 5")
      document.getElementById("fp2_content2_11").style.pointerEvents = "none";

      unlockShow("fp2_content2_16_container", true)
      document.getElementById("fp2_content2_16_image").style.opacity = "0.5";  // attivo 1, disattivo 0.5
      document.getElementById("fp2_content2_16").style.pointerEvents = "none";
    }
  } else {
    unlockShow("fp2_content2_10_container", false)
    unlockShow("fp2_content2_11_container", false)
    unlockShow("fp2_content1_8", false)
    unlockShow("fp2_content2_16_container", false)

  }


  //PROGRESS BARS
  //CHALLENGER

  //Bases

  unlockShow("base1", true)
  unlockShow("base2", true)

  if (ITraining.base.base3.req()) {
    unlockShow("base3", true)
  }

  if (ITraining.base.base4.req()) {
    unlockShow("base4", true)
  }

  //hunting

  unlockShow("content2_6_upgrade2", false)
  unlockShow("content2_6_upgrade3", false)
  unlockShow("content2_6_upgrade4", false)
  unlockShow("content2_6_upgrade5", false)


  if (IFight.normalHunting.hunt1.req() == true) {
    unlockShow("content2_6_hunt1", true)
  }

  if (IFight.normalHunting.hunt2.req() == true || IFight.normalHunting.hunt1.req() == true) {
    unlockShow("content2_6_hunt2", true)
  }

  if (IFight.normalHunting.hunt3.req() == true || IFight.normalHunting.hunt2.req() == true) {
    unlockShow("content2_6_hunt3", true)
  }

  if (IFight.normalHunting.hunt4.req() == true || IFight.normalHunting.hunt3.req() == true) {
    unlockShow("content2_6_hunt4", true)
  }

  if (IFight.normalHunting.hunt5.req() == true || IFight.normalHunting.hunt4.req() == true) {
    unlockShow("content2_6_hunt5", true)
  }

  if (IUniversal.attributes.attributesUnlock2.active) {
    unlockShow("content2_6_huntEvolution", true)
  } else {
    unlockShow("content2_6_huntEvolution", false)
  }

  //huntingRewards

  unlockShow("content2_6_upgrade1", true)

  if (IFight.normalHuntingRewards.upgrade1.req() == true) {
    unlockShow("content2_6_upgrade2", true)
  }

  if (IFight.normalHuntingRewards.upgrade2.req() == true) {
    unlockShow("content2_6_upgrade3", true)
  }

  if (IFight.normalHuntingRewards.upgrade3.req() == true) {
    unlockShow("content2_6_upgrade4", true)
  }

  if (IFight.normalHuntingRewards.upgrade4.req() == true) {
    unlockShow("content2_6_upgrade5", true)
  }

  //energy

  if (IUniversal.energyUpgrades.upgrade1.showReq) {
    unlockShow("content2_7_upgrade1_b1", true)
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade2.showReq) {
    unlockShow("content2_7_upgrade2_b1", true)
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade3.showReq) {
    unlockShow("content2_7_upgrade3_b1", true)
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade4.showReq) {
    unlockShow("content2_7_upgrade4_b1", true)
  } else {

  }
  if (IUniversal.energyUpgrades.upgrade5.showReq) {
    unlockShow("content2_7_upgrade5_b1", true)
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade6.showReq) {
    unlockShow("content2_7_upgrade6_b1", true)
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade7.showReq) {
    unlockShow("content2_7_upgrade7_b1", true)
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade8.showReq) {
    unlockShow("content2_7_upgrade8_b1", true)
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade9.showReq) {
    unlockShow("content2_7_upgrade9_b1", true)
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade10.showReq) {
    unlockShow("content2_7_upgrade10_b1", true)
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade11.showReq) {
    unlockShow("content2_7_upgrade11_b1", true)
  } else {

  }


  if (IUniversal.energyUpgrades.upgrade12.showReq) {
    unlockShow("content2_7_upgrade12_b1", true)
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade13.showReq) {
    unlockShow("content2_7_upgrade13_b1", true)
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade14.showReq) {
    unlockShow("content2_7_upgrade14_b1", true)
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade15.showReq) {
    unlockShow("content2_7_upgrade15_b1", true)
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade16.showReq) {
    unlockShow("content2_7_upgrade16_b1", true)
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade17.showReq) {
    unlockShow("content2_7_upgrade17_b1", true)
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade18.showReq) {
    unlockShow("content2_7_upgrade18_b1", true)
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade19.showReq) {
    unlockShow("content2_7_upgrade19_b1", true)
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade20.showReq) {
    unlockShow("content2_7_upgrade20_b1", true)
  } else {

  }

  if (IUniversal.attributes.attributesUnlock3.active) {
    unlockShow("content2_7_upgrade21_b1", true)
  }

  if (IUniversal.attributes.attributesUnlock3.active) {
    unlockShow("content2_7_upgrade22_b1", true)
  }

  if (IUniversal.attributes.attributesUnlock3.active) {
    unlockShow("content2_7_upgrade23_b1", true)
  }


  //ATTRIBUTES

  unlockShow("content2_11_grid_b1", true)
  unlockShow("content2_11_grid_b2", true)
  unlockShow("content2_11_grid_b3", true)

  unlockShow("content2_11_grid_c1", true)
  unlockShow("content2_11_grid_c2", true)

  if (IUniversal.attributes.attributesUnlock1.active) {

    unlockShow("c2_10_challenges", true)

    unlockShow("content2_11_grid_b4", true)
    unlockShow("content2_11_grid_b5", true)
    unlockShow("content2_11_grid_c4", true)
    unlockShow("content2_11_grid_c5", true)

    unlockShow("content2_11_grid_b6", true)
  } else {
    unlockShow("c2_10_challenges", false)

    unlockShow("content2_11_grid_b4", false)
    unlockShow("content2_11_grid_b5", false)
    unlockShow("content2_11_grid_c4", false)
    unlockShow("content2_11_grid_c5", false)

    unlockShow("content2_11_grid_b6", false)
  }

  if (IUniversal.attributes.attributesUnlock2.active) {
    unlockShow("content2_11_grid_b7", true)
    unlockShow("content2_11_grid_b8", true)
    unlockShow("content2_11_grid_c7", true)
    unlockShow("content2_11_grid_c8", true)

    unlockShow("content2_11_grid_b9", true)
  } else {
    unlockShow("content2_11_grid_b7", false)
    unlockShow("content2_11_grid_b8", false)
    unlockShow("content2_11_grid_c7", false)
    unlockShow("content2_11_grid_c8", false)

    unlockShow("content2_11_grid_b9", false)
  }
}

function changePage(type, page) {

  const hideElements = (ids) => ids.forEach(id => unlockShow(id, false));
  const showElements = (ids) => ids.forEach(id => unlockShow(id, true));

  if (type === "mainMenu") {
    // Nasconde tutto
    hideElements([
      "content2_1", "content2_2", "fcontent2_3", "content2_4", "content2_5", "content2_6", "content2_7", "content2_8", "content2_10", "content2_11", "content2_12", "content2_13", "content2_14", "content2_15", "content2_16",
      "options", "achievements", "fp3_content1_7", "fp3_content1_8", "fp3_content1_12", "fp3_content1_13", "fp3_content1_14", "fp3_content1_15", "fp3_content1_16"
    ]);

    if (page !== "out") {
      unlockShow("mainMenuExit", true);

    } else {
      unlockShow("mainMenuExit", false);
    }

    unlockShow(page, true)
  }

  // Opzioni
  if (type === "options") {
    unlockShow("resetScreen", false);
    unlockShow("opaqueScreen2", false);

    if (page !== "out") {
      showElements(["opaqueScreen2", page]);
    }
  }

  if (type == "attributes") {
    unlockShow("content2_11_grid_b1_cont", false)
    unlockShow("content2_11_grid_b2_cont", false)
    unlockShow("content2_11_grid_b4_cont", false)
    unlockShow("content2_11_grid_b5_cont", false)
    unlockShow("content2_11_grid_b7_cont", false)
    unlockShow("content2_11_grid_b8_cont", false)
    unlockShow("content2_11_grid_exit", false);

    if (page !== "out") {
      showElements(["content2_11_grid_exit", page]);
      unlockShow(page, true);
    }
  }
}

function visualLoopFunction() {

  if (checkShow("content2_4") || checkShow("content2_10")) {
    visualChallenger()
  }

  if (checkShow("content2_6")) {
    visualHunting()
  }

  if (checkShow("content2_11")) {
    visualAttributes()
  }

  if (waiting == false) {
    manualVisualLoop();
    visualValute();
  }

  if (checkShow("content2_1")) {
    visualTraining()
  }

  if (checkShow("content2_8")) {
    visualUniversal()
    ascensionRings('content2_8', IUniversal.universe, IShowableClass.svg.ascensionCirclesScale, 1, 0.5);

  }

  if (checkShow("content2_7")) {
    visualEnergy()
  }

  visualMenu()

  visualLore()

  visualAutomation()

  //visualProgress()
  //visualInventory()

}


var SaveGameLoop = window.setInterval(function () {
  saveGameData();

}, 1000);


var mainGameLoop = window.setInterval(function () {

  //CanvasLines("screenCanvas");
  idleTimeChecker()
  fullSetter()
  visualLoopFunction()
  automation()
  saveGameData();

  IGameData.universeTime = f(IGameData.universeTime).add(0.050)

}, 50)


function idleTimeChecker() {
  let diff = Date.now() - IGameData.lastTick

  let diffSec = diff / 1000;



  if (diffSec > IGameData.offProgressLimit) {
    diffSec = IGameData.offProgressLimit;
  }
  if (diffSec < 2) {
    diffSec = 1;
  }
  if (diffSec > 2) {
    offProgress(diffSec);
  }

  IGameData.lastTick = Date.now()

}

function manualVisualLoop() {
  loopShow();
}

function buyMultiple(item, propertyToUpdate, effect, type) {

  while (buy(item, propertyToUpdate, effect, type)) {

    if (item.maxLevel != undefined) {
      if (f(item.level).gt(f(item.maxLevel))) {
        return
      }
    }
  }
}

//AUTOMATION

/*
function CanvasLines(selCanvas) {
 
 
  const canvas = document.getElementById(selCanvas);
 
  canvas.height = document.getElementById("hardware").offsetHeight;
  canvas.width = document.getElementById("hardware").offsetWidth;
 
  const canvasHeight = canvas.height
 
  const canvasWidth = canvas.width;
 
  if (selCanvas == "screenCanvas")
    for (let x in ICanvas.screen) {
 
      var sel = ICanvas.screen[x]
 
      x = canvas.getContext("2d")
 
      x.lineWidth = canvasWidth / 100;
 
      curvedX = canvasWidth * sel.startX
 
      if (sel.active == true) {
        x.beginPath();
 
        x.moveTo(canvasWidth * sel.startX, canvasHeight * sel.startY)
 
        x.quadraticCurveTo(canvasWidth * sel.controlPX, canvasHeight * sel.controlPY, canvasWidth * sel.endX, canvasHeight * sel.endY);
 
        x.stroke();
      }
    }
 
}
 
function resetCanvas() {
  const c = document.getElementById("screenCanvas");
  const ctx = c.getContext("2d");
 
  // Clear the canvas using its actual width and height
  ctx.clearRect(0, 0, c.width, c.height);
}
  */

//developer functions

/*
function flashOnce(buttonId) {
 
  if (!(IShowableClass.flashState[buttonId])) {
    IShowableClass.flashState[buttonId] = true;
    flashButtonColor(buttonId);
  }
}
 
function flashButtonColor(buttonId) {
  // Create a unique interval for each button based on its ID
  IShowableClass.flashIntervals[buttonId] = true;
}
 
 
function flashLoopActuator() {
  for (let x in IShowableClass.flashIntervals) {
    var iter = IShowableClass.flashIntervals[x];
 
    var button = document.getElementById(x);
    if (iter === true) {
      // If button is set to flash, toggle the box shadow for flashing effect
      // The 'flashingState' for each button is tracked
      if (button.flashingState) {
        button.style.animation = `colorBlink 1s linear infinite`; // Color 1 (flashing)
      } else {
        button.style.animation = `` // Reset (no flash)
      }
      // Toggle flashing state for the next iteration
      button.flashingState = !button.flashingState;
    } else {
      button.style.animation = `` // Reset (no flash)
    }
  }
}
 
// Run the flashing loop every 500ms
var flashLoop = window.setInterval(function () {
  flashLoopActuator();
}, 1000);
 
document.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    resetFlash(event.target.id)
  }
});
 
function resetFlash(target) {
  IShowableClass.flashIntervals[target] = false; // Clear the flashing interval for this button
  var element = document.getElementById(target)
  element.style.boxShadow = ``; // Color 1
}
 
function setFlash(target, status) {
  IShowableClass.flashState[target] = status
}
 
 
function popUp(popScreen, element) {
  if (popScreen == "monument") {
    if (IShowableClass.popUp[element] == false) {
 
      IShowableClass.popUp[element] = true
 
      var el = IExpansor.monuments[element]
 
      update("monumentPop", `<div>${el.name}</div><div>UNLOCKS ${el.unlocked}</div>`)
 
      unlockShow("monumentPop", true)
 
      setTimeout(() => {
        unlockShow("monumentPop", false)
      }, 10000);
    }
  }
}
 
var popTime = window.setInterval(function () {
  unlockShow("monumentPop", false)
}, 30000)
*/
function assignGroup(obj, element) {
  var sel = obj[element]
  var selGroup = ISelUpgrade.group[sel.group]

  if (sel.active) {
    sel.active = false
    selGroup.num = selGroup.num - 1;
  }
  else {

    if (selGroup.num < selGroup.maxNum) {
      sel.active = true
      selGroup.num += 1;
      selGroup.lastSel = element

    } else {
      sel.active = true

      obj[selGroup.lastSel].active = false
      selGroup.lastSel = element

    }
  }
}

function progressBar(value, limit, id, type) {

  if (type == "check") {
    var confronter = f(value).div(f(limit))

    if (confronter >= 1) {
      return true
    } else {
      return false
    }

  } else {
    if (f(value).lt(f(0))) {
      var confronter = f(0)
    } else {
      confronter = f(value).div(f(limit))
    }

    var sel = document.getElementById(id);
    if (confronter < 1) {
      sel.style.width = confronter * 100 + "%"
    }

    if (confronter >= 1) {
      sel.style.width = "100%"
      return true
    } else {
      return false
    }
  }

}

function progressBarInfo(value, limit, id) {


  var confronter = f(value).div(f(limit))

  var sel = document.getElementById(id);

  if (confronter <= 1) {
    sel.style.width = confronter * 100 + "%"
  }

  if (confronter >= 1) {
    sel.style.width = "100%"
    return "100%"
  } else {
    return (confronter * 100).toFixed(0) + "%"
  }
}

function getIntegerPart(number) {
  const decimalValue = f(number);  // Converte il numero in un'istanza Decimal

  // Se il numero contiene "e" nella sua rappresentazione stringa, manteniamo la notazione scientifica
  if (decimalValue.toString().includes('e')) {
    // Ottieni la notazione scientifica
    const notazioneScientifica = number.toExponential();
    // Estrai il primo intero e l'esponente
    const [primoIntero, esponente] = notazioneScientifica.split('e');

    const prim = number.toString()[0]

    return prim + esponente;
  }

  // Altrimenti, restituisce la parte intera come stringa
  return decimalValue.floor().toString();  // Restituisce la parte intera
}

function removeElement(key) {
  if (this.inventory[key]) {
    delete this.inventory[key];
  } else {
    console.warn(`Elemento '${key}' non esiste.`);
  }
}

function addCells(type, x, y, key) {
  if (type == "equipmentInventory") {
    if (IUniversal.inventory[key]) {
      return false
    }

    IUniversal.inventory[key] = {
      key: "",
      pX: x,
      pY: y,
      amount: 1
    };
  }
}

function addElement(type, key) {

  if (type == "void") {
    const gridContainer = document.getElementById("fp3_content1_4_screen_p1_grid");
    const styles = getComputedStyle(gridContainer);

    const numColumns = styles.gridTemplateColumns.trim().split(/\s+/).length;
    const numRows = styles.gridTemplateRows.trim().split(/\s+/).length;

    const children = Array.from(gridContainer.children);

    for (let y = 1; y <= numRows; y++) {
      for (let x = 1; x <= numColumns; x++) {

        // Controlla se la cella è occupata
        var occupied = true;
        const cellKey = `c${y}r${x}`

        if (IUniversal.inventory[cellKey] == null) {
          occupied = false
        }

        if (!occupied) {
          // Aggiunge all'inventario
          const cellKey = `c${y}r${x}`;
          IUniversal.inventory[cellKey] = {
            key: null,
            pX: x,
            pY: y,
            amount: 1,
          };

          return true;
        }
      }
    }
  }

  if (type == "equipment") {

    // Controlla se l'oggetto è già nell'inventario
    for (let pos in IUniversal.inventory) {
      const item = IUniversal.inventory[pos];

      if (item.key === key) {
        return false; // Oggetto già presente
      }
    }

    const gridContainer = document.getElementById("fp3_content1_4_screen_p1_grid");
    const styles = getComputedStyle(gridContainer);

    const numColumns = styles.gridTemplateColumns.trim().split(/\s+/).length;
    const numRows = styles.gridTemplateRows.trim().split(/\s+/).length;

    const children = Array.from(gridContainer.children);

    for (let y = 1; y <= numRows; y++) {
      for (let x = 1; x <= numColumns; x++) {


        // Controlla se la cella è occupata
        var occupied = true;
        const cellKey = `c${y}r${x}`


        if (IUniversal.inventory[cellKey].key != key && IUniversal.inventory[cellKey].key == null) {
          occupied = false
        }


        if (!occupied) {
          // Aggiunge all'inventario
          const cellKey = `c${y}r${x}`;
          IUniversal.inventory[cellKey] = {
            key: key,
            pX: x,
            pY: y,
            amount: 1
          };

          return true;
        }
      }
    }
  }

  return false;
}

function craft(type) {
  if (type === "equipment_weapon") {

    // Trova una chiave libera nell'inventario
    let i = 1;
    let keyName;
    do {
      keyName = `element${i}`;
      i++;
    } while (IUniversal.inventoryStorage.hasOwnProperty(keyName));

    if (i >= IUniversal.maxInventoryStorage) {
      return
    }

    // Dati di base per il crafting
    var craftName = "sword" + i;
    var craftType = "weapon"
    var craftStars = IUniversal.crafting.craftingLevel;
    var craftEffectsLuck = IUniversal.crafting.craftEffectsLuck;
    var starIncrementChance = IUniversal.crafting.starIncrementer;

    // Calcolo attributi di base
    var craftAttributeDamage = f(1.5).pow(craftStars);
    var craftEffects = [];
    var craftEffectsText = "";

    // Generazione effetti (abilità)
    for (let effectName in IUniversal.weaponEffects) {
      if (f(Math.random()).lte(craftEffectsLuck)) {
        var effectData = IUniversal.weaponEffects[effectName];

        // Calcolo stelle bonus extra per l'effetto
        let moreStarsValue = f(0);
        while (f(Math.random()).lte(starIncrementChance)) {
          moreStarsValue = moreStarsValue.add(f(1));
        }

        var effectNameDisplay = effectData.name

        var effectStars = f(craftStars).add(moreStarsValue);
        var effectValue = effectData.effect(effectStars);

        // Aggiunge effetto alla lista
        craftEffects.push({
          id: effectNameDisplay,
          stars: effectStars,
          value: effectValue,
        });

        craftEffectsText += `<div>[${f(effectStars)}☆]${effectNameDisplay}: ${f(effectValue)}</div>`;

      }
    }

    // Assegnazione dell'oggetto craftato all'inventario
    IUniversal.inventoryStorage[keyName] = {
      name: craftName,
      type: craftType,
      stars: craftStars,

      // Attributi base
      attributes: [
        {
          id: "Damage",
          stars: craftStars,
          value: craftAttributeDamage,
        },
      ],

      // Effetti speciali
      effects: craftEffects,

      /*
      // Esempio di effetti di set (commentato per ora)
      setName: "",
      setsEffects: [
        {
          id: "damage",
          stars: 1,
          value: f(2),
        },
        {
          id: "life",
          stars: 1,
          value: f(2),
        },
      ],
      */

      itemBox: `<div>[${f(craftStars)}☆]${craftName}</div>
               <div>[${f(craftStars)}☆]Damage: ×${f(craftAttributeDamage)}</div>
               <div>${craftEffectsText}</div>`
    };
    // Debug: stampa inventario


    addElement("equipment", keyName)
  }

  if (type === "equipment_armor") {

    // Trova una chiave libera nell'inventario
    let i = 1;
    let keyName;
    do {
      keyName = `element${i}`;
      i++;
    } while (IUniversal.inventoryStorage.hasOwnProperty(keyName));

    if (i >= IUniversal.maxInventoryStorage) {
      return
    }

    // Dati di base per il crafting
    var craftName = "armor" + i;
    var craftType = "armor"
    var craftStars = IUniversal.crafting.craftingLevel;
    var craftEffectsLuck = IUniversal.crafting.craftEffectsLuck;
    var starIncrementChance = IUniversal.crafting.starIncrementer;

    // Calcolo attributi di base
    var craftAttributeLife = f(1.5).pow(craftStars);
    var craftEffects = [];
    var craftEffectsText = "";

    // Generazione effetti (abilità)
    for (let effectName in IUniversal.armorEffects) {
      if (f(Math.random()).lte(craftEffectsLuck)) {
        var effectData = IUniversal.armorEffects[effectName];

        // Calcolo stelle bonus extra per l'effetto
        let moreStarsValue = f(0);
        while (f(Math.random()).lte(starIncrementChance)) {
          moreStarsValue = moreStarsValue.add(f(1));
        }

        var effectNameDisplay = effectData.name

        var effectStars = f(craftStars).add(moreStarsValue);
        var effectValue = effectData.effect(effectStars);

        // Aggiunge effetto alla lista
        craftEffects.push({
          id: effectNameDisplay,
          stars: effectStars,
          value: effectValue,
        });

        craftEffectsText += `<div>[${f(effectStars)}☆]${effectNameDisplay}: ${f(effectValue)}</div>`;

      }
    }

    // Assegnazione dell'oggetto craftato all'inventario
    IUniversal.inventoryStorage[keyName] = {
      name: craftName,
      type: craftType,
      stars: craftStars,

      // Attributi base
      attributes: [
        {
          id: "Life",
          stars: craftStars,
          value: craftAttributeLife,
        },
      ],

      // Effetti speciali
      effects: craftEffects,

      /*
      // Esempio di effetti di set (commentato per ora)
      setName: "",
      setsEffects: [
        {
          id: "damage",
          stars: 1,
          value: f(2),
        },
        {
          id: "life",
          stars: 1,
          value: f(2),
        },
      ],
      */

      itemBox: `<div>[${f(craftStars)}☆]${craftName}</div>
               <div>[${f(craftStars)}☆]Life: ×${f(craftAttributeLife)}</div>
               <div>${craftEffectsText}</div>`
    };
    // Debug: stampa inventario


    addElement("equipment", keyName)
  }

  if (type === "equipment_accessory") {

    // Trova una chiave libera nell'inventario
    let i = 1;
    let keyName;
    do {
      keyName = `element${i}`;
      i++;
    } while (IUniversal.inventoryStorage.hasOwnProperty(keyName));

    if (i >= IUniversal.maxInventoryStorage) {
      return
    }

    // Dati di base per il crafting
    var craftName = "accessory" + i;
    var craftType = "accessory"
    var craftStars = IUniversal.crafting.craftingLevel;
    var craftEffectsLuck = IUniversal.crafting.craftEffectsLuck;
    var starIncrementChance = IUniversal.crafting.starIncrementer;

    // Calcolo attributi di base
    var craftAttributeTraining = f(1.5).pow(craftStars);
    var craftEffects = [];
    var craftEffectsText = "";

    // Generazione effetti (abilità)
    for (let effectName in IUniversal.accessoryEffects) {
      if (f(Math.random()).lte(craftEffectsLuck)) {
        var effectData = IUniversal.accessoryEffects[effectName];

        // Calcolo stelle bonus extra per l'effetto
        let moreStarsValue = f(0);
        while (f(Math.random()).lte(starIncrementChance)) {
          moreStarsValue = moreStarsValue.add(f(1));
        }

        const effectNameDisplay = effectData.name

        const effectStars = f(craftStars).add(moreStarsValue);
        const effectValue = effectData.effect(effectStars);

        // Aggiunge effetto alla lista
        craftEffects.push({
          id: effectNameDisplay,
          stars: effectStars,
          value: effectValue,
        });

        craftEffectsText += `<div>[${f(effectStars)}☆]${effectNameDisplay}: ${f(effectValue)}</div>`;

      }
    }

    // Assegnazione dell'oggetto craftato all'inventario
    IUniversal.inventoryStorage[keyName] = {
      name: craftName,
      type: craftType,
      stars: craftStars,

      // Attributi base
      attributes: [
        {
          id: "Training",
          stars: craftStars,
          value: craftAttributeTraining,
        },
      ],

      // Effetti speciali
      effects: craftEffects,

      /*
      // Esempio di effetti di set (commentato per ora)
      setName: "",
      setsEffects: [
        {
          id: "damage",
          stars: 1,
          value: f(2),
        },
        {
          id: "life",
          stars: 1,
          value: f(2),
        },
      ],
      */

      itemBox: `<div>[${f(craftStars)}☆]${craftName}</div>
               <div>[${f(craftStars)}☆]Training: ×${f(craftAttributeTraining)}</div>
               <div>${craftEffectsText}</div>`
    };
    // Debug: stampa inventario


    addElement("equipment", keyName)
  }
}

function clearInventory() {
  for (let x in IUniversal.inventoryStorage) {
    delete IUniversal.inventoryStorage[x];
  }

  for (let x in IUniversal.inventory) {
    delete IUniversal.inventory[x];
  }
}

function draggableSet(item, key, type) {

  item.classList.add("drag");
  item.setAttribute("draggable", "true");

  item.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text/plain", key); // salva la chiave trascinata
    e.dataTransfer.effectAllowed = "move";

    const helpbox = document.getElementById("helpbox");
    helpbox.classList.add("hidden");
  });

  item.addEventListener("dragover", function (e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  });

  item.addEventListener("dragenter", function (e) {
    e.preventDefault();
  });

  if (type == "inventory") {
    item.addEventListener("drop", function (e) {
      e.preventDefault();

      var dragged = e.dataTransfer.getData("text/plain");
      var target = key;

      var draggedKeyString = dragged + ".key"
      var targetKeyString = target + ".key"

      var draggedKey = eval(dragged).key;
      var targetKey = eval(target).key;

      if (eval(target).subtype == "equipment") {
        if ((eval(target).type != IUniversal.inventoryStorage[draggedKey].type)) {
          return
        }
      }

      if (!dragged || !target || dragged === target) return;

      if (draggedKey == null && targetKey == null) {
        return;
      }

      if (draggedKey == null || draggedKey == undefined) {
        eval(`${draggedKeyString} = '${targetKey}'`);
        eval(`${targetKeyString} = null`);
      } else if (targetKey == null || targetKey == undefined) {
        eval(`${targetKeyString} = '${draggedKey}'`);
        eval(`${draggedKeyString} = null`);
      } else {
        eval(`${draggedKeyString} = '${targetKey}'`);
        eval(`${targetKeyString} = '${draggedKey}'`);
      }

    });
  }

  if (type == "default") {
    item.addEventListener("drop", function (e) {
      e.preventDefault();

      var dragged = e.dataTransfer.getData("text/plain");
      var target = key;

      var draggedKey = eval(dragged).key;
      var targetKey = eval(target).key;

      if (!dragged || !target || dragged === target) return;

      if (draggedKey == null && targetKey == null) {
        return;
      }

      if (draggedKey == null || draggedKey == undefined) {
        eval(`${dragged} = '${targetKey}'`);
        eval(`${target} = null`);
      } else if (targetKey == null || targetKey == undefined) {
        eval(`${target} = '${draggedKey}'`);
        eval(`${dragged} = null`);
      } else {
        eval(`${dragged} = '${targetKey}'`);
        eval(`${target} = '${draggedKey}'`);
      }

    });
  }

  item.addEventListener("mouseenter", () => {

    const helpbox = document.getElementById("helpbox");

    var k = eval(key).key

    if (IUniversal.inventoryStorage[k] != null) {

      var display = IUniversal.inventoryStorage[k].itemBox;

      helpbox.innerHTML = display;

      const rect = item.getBoundingClientRect();
      helpbox.style.left = rect.left + window.scrollX + 100 + "px";
      helpbox.style.top = rect.top + window.scrollY - 200 + "px";
      helpbox.classList.remove("hidden");
    } else {
      display = null
    }
  });

  item.addEventListener("mouseleave", () => {
    helpbox.classList.add("hidden");
  });

}

//AUTOMATION

function automation() {
  if (IUniversal.automation.automation2.active) {
    buyMultiple(IFight.normalHunting.hunt1, "level", 1, "free")
    buyMultiple(IFight.normalHunting.hunt2, "level", 1, "free")
    buyMultiple(IFight.normalHunting.hunt3, "level", 1, "free")
    buyMultiple(IFight.normalHunting.hunt4, "level", 1, "free")
    buyMultiple(IFight.normalHunting.hunt5, "level", 1, "free")
  }

  if (IUniversal.automation.automation3.active) {
    buyMultiple(IFight.normalHuntingRewards.upgrade1, "level", 1, "free")
    buyMultiple(IFight.normalHuntingRewards.upgrade2, "level", 1, "free")
    buyMultiple(IFight.normalHuntingRewards.upgrade3, "level", 1, "free")
    buyMultiple(IFight.normalHuntingRewards.upgrade4, "level", 1, "free")
    buyMultiple(IFight.normalHuntingRewards.upgrade5, "level", 1, "free")
  }


  if (IUniversal.automation.automation4.active) {
    if (!IFight.youStats.onFight1) {
      if (f(IFight.youStats.damage).gt(f(IFight.challengers.baseChallenger.damage)) && f(IFight.youStats.life).gt(f(IFight.challengers.baseChallenger.life))) {
        document.getElementById("c2_4_VS").click();
      }
    }
  }

  if (IUniversal.automation.automation5.active) {
    document.getElementById("content1_7_ascension_button").click();
  }
}