
const data = Vue.reactive({
  show: {},
  training: {},
  trainingIn: {},

  universal: {},
  universalIn: {},
  animation: {},
})

const app = Vue.createApp({ data: () => data })
app.mount('body')

/** @type {ShowableClass} */

var IShowableClass;
var IGameData;

var IAnimation;


var IPermanent;
var IPermanentIn;

var ITraining;
var ITrainingIn;

var IFight;
var IFightIn;

var ICanCall;
var ISelUpgrade;

var IProgress;
var IProgressIn;

var IUniversal;
var IUniversalIn;

var IUniversalChallenger;
var IUniversalChallengerIn;

var secretKey = "DontLookAtMePls";
var saveData;
var waiting = false;
var freeTick = false


document.addEventListener('DOMContentLoaded', (event) => {

  createClassInstance()
  passiveImport()
  saveGameData();
  idleTimeChecker()
  valuesSetter()
  valuesSetter()

  IShowableClass.init = true;
  freeTick = false


  requestAnimationFrame(mainGameLoop);

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
    this.baseTickSpeed = options.baseTickSpeed || 0.05
  }
}

class Animation {
  constructor(options) {
    options = options || {}

    this.powerSphere = options.powerSphere || {
      sphere1: "",
      sphere2: "",
      sphere3: "",
    }
  }
}

class Permanent {
  constructor(options) {
    options = options || {}

    this.notationCont = options.notationCont || 0
    this.maxNotationCont = options.notationCont || 2

    this.notation = options.notation || {

    }
  }
}

class PermanentIn {
  constructor(options) {
    options = options || {}

    this.notation = options.notation || {
      notation0: "Scientific",
      notation1: "Letters",
      notation2: "Letters and Scientific",
    }
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

      },
      m2: {

      },
      m3: {

      }
    };

    this.energyMulti = options.energyMulti || false;
    this.energyLoadoutSel = options.energyLoadoutSel || "";


    this.energyLoadout = options.energyLoadout || {
      loadout1: {
        ascensionPoints: 0, maximumAscensionPoints: 0, name: "",
        upgrade1: 0, upgrade2: 0, upgrade3: 0, upgrade4: 0, upgrade5: 0, upgrade6: 0, upgrade7: 0, upgrade8: 0, upgrade9: 0, upgrade10: 0,
        upgrade11: 0, upgrade12: 0, upgrade13: 0, upgrade14: 0, upgrade15: 0, upgrade16: 0, upgrade17: 0, upgrade18: 0, upgrade19: 0, upgrade20: 0,
        upgrade21: 0, upgrade22: 0, upgrade23: 0,
      },

      loadout2: {
        ascensionPoints: 0, maximumAscensionPoints: 0, name: "",
        upgrade1: 0, upgrade2: 0, upgrade3: 0, upgrade4: 0, upgrade5: 0, upgrade6: 0, upgrade7: 0, upgrade8: 0, upgrade9: 0, upgrade10: 0,
        upgrade11: 0, upgrade12: 0, upgrade13: 0, upgrade14: 0, upgrade15: 0, upgrade16: 0, upgrade17: 0, upgrade18: 0, upgrade19: 0, upgrade20: 0,
        upgrade21: 0, upgrade22: 0, upgrade23: 0,
      },

      loadout3: {
        ascensionPoints: 0, maximumAscensionPoints: 0, name: "",
        upgrade1: 0, upgrade2: 0, upgrade3: 0, upgrade4: 0, upgrade5: 0, upgrade6: 0, upgrade7: 0, upgrade8: 0, upgrade9: 0, upgrade10: 0,
        upgrade11: 0, upgrade12: 0, upgrade13: 0, upgrade14: 0, upgrade15: 0, upgrade16: 0, upgrade17: 0, upgrade18: 0, upgrade19: 0, upgrade20: 0,
        upgrade21: 0, upgrade22: 0, upgrade23: 0,
      },
    }

    this.energyUpgrades = options.energyUpgrades || {
      upgrade1: {
        level: 0,
        showReq: false, unlocked: false, active: false,
      },
      upgrade2: {
        level: 0,
        showReq: false, unlocked: false, active: false,
      },
      upgrade3: {
        level: 0,
        showReq: false, unlocked: false, active: false,
      },
      upgrade4: {
        level: 0,
        showReq: false, unlocked: false, active: false,
      },
      upgrade5: {
        level: 0,
        showReq: false, unlocked: false, active: false,
      },
      upgrade6: {
        level: 0,
        showReq: false, unlocked: false, active: false,
      },
      upgrade7: {
        level: 0,
        showReq: false, unlocked: false, active: false,
      },
      upgrade8: {
        level: 0,
        showReq: false, unlocked: false, active: false,
      },
      upgrade9: {
        level: 0,
        showReq: false, unlocked: false, active: false,
      },
      upgrade10: {
        level: 0,
        showReq: false, unlocked: false, active: false,
      },
      upgrade11: {
        level: 0,
        showReq: false, unlocked: false, active: false,
      },
      upgrade12: {
        level: 0,
        showReq: false, unlocked: false, active: false,
      },
      upgrade13: {
        level: 0,
        showReq: false, unlocked: false, active: false,
      },
      upgrade14: {
        level: 0,
        showReq: false, unlocked: false, active: false,
      },
      upgrade15: {
        level: 0,
        showReq: false, unlocked: false, active: false,
      },
      upgrade16: {
        level: 0,
        showReq: false, unlocked: false, active: false,
      },
      upgrade17: {
        level: 0,
        showReq: false, unlocked: false, active: false,
      },
      upgrade18: {
        level: 0,
        showReq: false, unlocked: false, active: false,
      },
      upgrade19: {
        level: 0,
        showReq: false, unlocked: false, active: false,
      },
      upgrade20: {
        level: 0,
        showReq: false, unlocked: false, active: false,
      },
      upgrade21: {
        level: 0,
        showReq: false, active: false,
      },
      upgrade22: {
        level: 0,
        showReq: false, active: false,
      },
      upgrade23: {
        level: 0,
        showReq: false, active: false,
      },
    };

    this.attributesLabels = options.attributesLabels || {
      crit: {

      },

      lifeRegeneration: {

      },

      defence: {

      },

      defencePenetration: {

      },

      lifeSteal: {

      },

      shield: {

      },

    }

    this.attributes = options.attributes || {

      //ATTRIBUTE BONUS

      attributesUnlock1: {
        active: false,
      },

      attributesUnlock2: {
        active: false,
      },

      attributesUnlock3: {
        active: false,
      },

      attributeBonus1: {
        active: false,
      },

      attributeBonus2: {
        active: false,
      },

      attributeBonus3: {
        active: false,
      },

      attributeBonus4: {
        active: false,
      },

      attributeBonus5: {
        active: false,
      },

      attributeBonus6: {
        active: false,
      },



      //CRIT

      critMulti: false,

      critPoints: 0,

      critRate: {
        level: 0,
      },

      critDamage: {
        level: 0,
      },

      //LIFE REGENERATION

      regenerationMulti: false,

      regenerationPoints: 0,

      regeneration: {
        level: 0,
      },

      maxRegeneration: {
        level: 0,
      },

      //DEFENCE PENETRATION

      defencePenetrationMulti: false,

      defencePenetrationPoints: 0,

      defencePenetration: {
        level: 0,
      },

      maxDefencePenetration: {
        level: 0,
      },

      //DEFENCE

      defenceMulti: false,
      defencePoints: 0,

      defence: {
        level: 0,
      },
      maxDefence: {
        level: 0,
      },

      //LIFE STEAL

      lifeStealMulti: false,
      lifeStealPoints: 0,

      lifeSteal: {
        level: 0,
        active: false,
      },

      lifeStealMax: {
        level: 0,
      },

      //SHIELD

      shieldMulti: false,
      shieldPoints: 0,

      shield: {
        level: 0,
      },

      maxShield: {
        level: 0,
      },

    };



    //HUNT EVOLUTION

    this.huntEvolution = options.huntEvolution || {
      b1: {
        level: 0,
        active1: false, active2: false, active3: false, active4: false, active5: false,
      },
      b2: {
        level: 0,
        active1: false, active2: false, active3: false, active4: false, active5: false,
      },
      b3: {
        level: 0,
        active1: false, active2: false, active3: false, active4: false, active5: false,
      },
      b4: {
        level: 0,
        active1: false, active2: false, active3: false, active4: false, active5: false,
      },
      b5: {
        level: 0,
        active1: false, active2: false, active3: false, active4: false, active5: false,
      },
    }

    this.huntEvolutionLabels = options.huntEvolutionLabels || {
      effect1: {
      },

      effect2: {
      },

      effect3: {
      },

      effect4: {
      },

    }

    this.fireTreeSize = options.fireTreeSize || 1;

    this.buyFireTree = options.buyFireTree || 0
    this.maxBuyFireTree = options.maxBuyFireTree || 2

    this.size = options.size || 0;
    this.sizeProd = options.sizeProd || 0;

    this.heat = options.heat || 0;
    this.heatProd = options.heatProd || 0;

    this.fireShards = options.fireShards || 0;
    this.fireShardsProd = options.fireShardsProd || 0;

    this.heatTimer = options.heatTimer || 0;
    this.heatCurrentTimer = options.heatCurrentTimer || 0;
    this.heatActiveTimer = options.heatActiveTimer || 0;

    this.fire = options.fire || 0;
    this.fireProd = options.fireProd || 0;
    this.fireProdBase = options.fireProdProd || 0;

    this.wood = options.wood || 0;
    this.woodProd = options.woodProd || 0;
    this.woodProdBase = options.woodProdBase || 0;

    this.coal = options.coal || 0;
    this.coalProd = options.coalProd || 0;
    this.coalProdBase = options.coalProdBase || 0;

    this.magma = options.magma || 0;
    this.magmaProd = options.magmaProd || 0;
    this.magmaProdBase = options.magmaProdBase || 0;

    this.light = options.light || 0;
    this.lightProd = options.lightProd || 0;
    this.lightProdBase = options.lightProdBase || 0;

    this.rotation = options.rotation || 0;
    this.rotationProd = options.rotationProd || 0;

    this.node29Size = options.node29Size || {
      size1: {},
      size2: {},
      size3: {},
      size4: {},
      size5: {},
      size6: {},
      size7: {},
      size8: {},
      size9: {},
      size10: {},
      size11: {},
      size12: {},
      size13: {},
      size14: {},
      size15: {},
      size16: {},
      size17: {},
      size18: {},
      size19: {},
      size20: {},
      size21: {}
    }

    this.fireTree = options.fireTree || {
      node1: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node2: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node3: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node4: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node5: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node6: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node7: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node8: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node9: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node10: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node11: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node12: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node13: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node14: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node15: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node16: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node17: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node18: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node19: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node20: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node21: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node22: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node23: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node24: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node25: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node26: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node27: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node28: {
        active: false, unlocked: false,
        level: 0,
        timer: 0, currentTimer: 0, activeTimer: false,
        click: false,
      },

      node29: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },

      node30: {
        active: false, unlocked: false,
        level: 0,
        timer: 0, currentTimer: 0, activeTimer: false,
        click: false,
        animation: "",
      },

      node31: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },

      node32: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },

      node33: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },

      node34: {
        active: false, unlocked: false,
        level: 0,
        timer: 0, currentTimer: 0, activeTimer: false,
        timer2: 0, currentTimer2: 0, activeTimer2: false,
        click: false,
        animation: "",
      },

      node35: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },

      node36: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },

      node37: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },

      node38: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node39: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node40: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node41: {
        active: false, unlocked: false,
        level: 0,
        click: false,

        trigger: false,
      },
      node42: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node43: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node44: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node45: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node46: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node47: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node48: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node49: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node50: {
        active: false, unlocked: false,
        level: 0,
        timer: 0, currentTimer: 0, activeTimer: false,
        click: false,
        animation: "",
      },
      node51: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node52: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node53: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node54: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node55: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node56: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node57: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node58: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node59: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node60: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node61: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node62: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node63: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node64: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
    }

    this.fireMilestones = options.fireMilestones || {
      m1: {

      },
      m2: {

      },
      m3: {

      },
      m4: {

      },
      m5: {

      },
      m6: {

      },
      m7: {

      },
    };

    this.waterTutorial = options.waterTutorial || 0

    this.WaterTreeSize = options.WaterTreeSize || 1;

    this.buyWaterTree = options.buyWaterTree || 0
    this.maxBuyWaterTree = options.maxBuyWaterTree || 2

    this.water = options.water || 0;
    this.waterMax = options.waterMax || 0;
    this.waterProd = options.waterProd || 0;
    this.waterProdBase = options.waterProdBase || 0;

    this.elisir = options.elisir || 0;
    this.elisirMax = options.elisirMax || 0;
    this.elisirProd = options.elisirProd || 0;
    this.elisirProdBase = options.elisirProdBase || 0;

    this.ambrosia = options.ambrosia || 0;
    this.ambrosiaMax = options.ambrosiaMax || 0;
    this.ambrosiaProd = options.ambrosiaProd || 0;
    this.ambrosiaProdBase = options.ambrosiaProdBase || 0;

    this.erbs = options.erbs || 0;
    this.erbsMax = options.erbsMax || 0;
    this.erbsProd = options.erbsProd || 0;
    this.erbsProdBase = options.erbsProdBase || 0;

    this.fluidFire = options.fluidFire || 0;
    this.fluidFireMax = options.fluidFireMax || 0;
    this.fluidFireProd = options.fluidFireProd || 0;
    this.fluidFireProdBase = options.fluidFireProdBase || 0;

    this.waterGem = options.waterGem || 0;
    this.waterGemMax = options.waterGemMax || 0;
    this.waterGemProd = options.waterGemProd || 0;
    this.waterGemProdBase = options.waterGemProdBase || 0;

    this.pyroFrost = options.pyroFrost || 0;
    this.pyroFrostMax = options.pyroFrostMax || 0;
    this.pyroFrostProd = options.pyroFrostProd || 0;
    this.pyroFrostProdBase = options.pyroFrostProdBase || 0;

    this.maxInventoryStorage = options.maxInventoryStorage || 100
    this.selPotion = ""
    this.lockSelPotion = false

    this.inventory = options.inventory || {};
    this.inventoryR = options.inventoryR || 0

    this.inventoryStorage = options.inventoryStorage || {};
    this.inventoryStorageR = options.inventoryStorageR || 0

    this.equipment = options.equipment || {
      item1: { key: null, drag: "equipment" },
      item2: { key: null, drag: "equipment" },
      item3: { key: null, drag: "equipment" },
      item4: { key: null, drag: "equipment" },
    };

    this.potionUpgrade = options.potionUpgrade || {
      item1: { key: null, drag: "equipment" },
    };

    this.potionDelete = options.potionDelete || {
      item1: {},
    };

    this.potionSource = options.potionSource || {
      item1: { key: null, drag: "equipment", value1: 0, },
      item2: { key: null, drag: "equipment", value1: 0, },
      item3: { key: null, drag: "equipment", value1: 0, },
      item4: { key: null, drag: "equipment", value1: 0, },
      item5: { key: null, drag: "equipment", value1: 0, },
      item6: { key: null, drag: "equipment", value1: 0, },
    };

    this.potionFusion = options.potionFusion || {
      item1: { key: null, drag: "equipment", },
      item2: { key: null, drag: "equipment", },
    };

    this.waterTree = options.waterTree || {
      node1: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node2: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node3: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node4: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node5: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node6: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node7: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node8: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node9: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node10: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node11: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node12: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node13: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node14: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node15: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node16: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node17: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node18: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node19: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node20: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node21: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node22: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node23: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node24: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node25: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node26: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node27: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node28: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node29: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node30: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node31: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node32: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node33: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node34: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node35: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node36: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node37: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
      node38: {
        active: false, unlocked: false,
        level: 0,
        click: false,
      },
    }

    this.automation = {
      automation1: {
        unlocked: false,
        active: false,
        level: 0,
      },
      automation2: {
        unlocked: false,
        active: false,
      },
      automation3: {
        unlocked: false,
        active: false,
      },
      automation4: {
        unlocked: false,
        active: false,
      },
      automation5: {
        unlocked: false,
        active: false,
      },
      automation6: {
        unlocked: false,
        active: false,
        level: 0, selOption: 0,
      },
      automation7: {
        unlocked: false,
        active: false,
        level: 0,
      },
      automation8: {
        unlocked: false,
        active: false,
      },
      automation9: {
        unlocked: false,
        active: false,
      },
      automation10: {
        unlocked: false,
        active: false,
      },
      automation11: {
        unlocked: false,
        active: false,
      },
      automation12: {
        unlocked: false,
        active: false,
      },
      automation13: {
        unlocked: false,
        active: false,
      },
      automation14: {
        unlocked: false,
        active: false,
      },
    }

    this.lore = options.lore || {
      lore1: {
        active: true,
      },
      lore2: {
        active: true,
      },
      lore3: {
        active: true,
      },
      lore4: {
        active: true,
      },
      lore5: {
        active: true,
      },
      lore6: {
        active: true,
      },
      lore7: {
        active: true,
      },
    }
  }
}

class UniversalIn {
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
      },
      m3: {
        mCheck: function () { return f(IUniversal.universe).gte(40); },
        mReqDesc: "",
        mDesc: "",
      }
    };

    this.energyLoadout = options.energyLoadout || {
      loadout1: {

      },

      loadout2: {

      },

      loadout3: {

      },
    }

    this.energyUpgrades = options.energyUpgrades || {
      upgrade1: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
      upgrade2: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
      upgrade3: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
      upgrade4: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
      upgrade5: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
      upgrade6: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
      upgrade7: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
      upgrade8: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
      upgrade9: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
      upgrade10: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
      upgrade11: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
      upgrade12: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
      upgrade13: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
      upgrade14: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
      upgrade15: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
      upgrade16: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
      upgrade17: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
      upgrade18: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
      upgrade19: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
      upgrade20: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
      upgrade21: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
      upgrade22: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
      upgrade23: {
        name: "",
        effect: 0, effectDesc: "",
        price: 0,
        priceIdentity: "ascensionPoint", priceIdentityF: true,
      },
    };

    this.attributesLabels = options.attributesLabels || {
      crit: {
        name: "CRITICAL",
      },

      lifeRegeneration: {
        name: "LIFE REGENERATION",
      },

      defence: {
        name: "DEFENCE",
      },

      defencePenetration: {
        name: "DEFENCE PENETRATION",
      },

      lifeSteal: {
        name: "LIFE STEAL",
      },

      shield: {
        name: "SHIELD",
      },

    }

    this.attributes = options.attributes || {

      //ATTRIBUTE BONUS

      attributesUnlock1: {
        name: "",
        req: function () { return true }
      },

      attributesUnlock2: {
        name: "",
        req1: function () { return true },
        req2: function () { return true },
      },

      attributesUnlock3: {
        name: "",
        req1: function () { return true },
        req2: function () { return true },
      },

      attributeBonus1: {
        name: "",
        effect: 0,
      },

      attributeBonus2: {
        name: "",
        effect: 0,
      },

      attributeBonus3: {
        name: "",
        effect: 0,
      },

      attributeBonus4: {
        name: "",
        effect: 0,
      },

      attributeBonus5: {
        name: "",
        effect: 0,
      },

      attributeBonus6: {
        name: "",
        effect: 0,
      },



      //CRIT

      critPointsName: "",

      critRate: {
        name: "",
        effect: 0, price: 0, priceIdentity: "universalShards",
      },

      critDamage: {
        name: "",
        effect: 0, price: 0, priceIdentity: "universalShards",
      },

      //LIFE REGENERATION

      regenerationPointsName: "",

      regeneration: {
        name: "",
        effect: 0, price: 0, priceIdentity: "universalShards",
      },

      maxRegeneration: {
        name: "",
        effect: 0, price: 0, priceIdentity: "universalShards",
      },

      //DEFENCE PENETRATION

      defencePenetrationPointsName: "",

      defencePenetration: {
        name: "",
        effect: 0, price: 0, priceIdentity: "universalNodes",
      },

      maxDefencePenetration: {
        name: "",
        effect: 0, price: 0, priceIdentity: "universalNodes",
      },

      //DEFENCE

      defencePointsName: "",

      defence: {
        name: "",
        effect: 0, odds: 0, price: 0, priceIdentity: "universalNodes",
      },
      maxDefence: {
        name: "",
        effect: 0, price: 0, priceIdentity: "universalNodes",
      },

      //LIFE STEAL

      lifeStealPointsName: "",

      lifeSteal: {
        name: "",
        effect: 0, price: 0, priceIdentity: "universalCores",
      },

      lifeStealMax: {
        name: "",
        effect: 0, price: 0, priceIdentity: "universalCores",
      },

      //SHIELD

      shieldPointsName: "",

      shield: {
        name: "",
        effect: 0, price: 0, priceIdentity: "universalCores",
      },

      maxShield: {
        name: "",
        effect: 0, price: 0, priceIdentity: "universalCores",
      },

    };



    //HUNT EVOLUTION

    this.huntEvolution = options.huntEvolution || {
      b1: {
        name: "",
        description1: "", description2: "", description3: "", description4: "",
        effect1: 0, effect2: 0, effect3: 0, effect4: 0, effect5: 0,
        price: 0, priceIdentity: "universalShards",
        maxLevel: 0,
      },
      b2: {
        name: "",
        description1: "", description2: "", description3: "", description4: "",
        effect1: 0, effect2: 0, effect3: 0, effect4: 0, effect5: 0,
        price: 0, priceIdentity: "universalShards",
        maxLevel: 0,
      },
      b3: {
        name: "",
        description1: "", description2: "", description3: "", description4: "",
        effect1: 0, effect2: 0, effect3: 0, effect4: 0, effect5: 0,
        price: 0, priceIdentity: "universalNodes",
        maxLevel: 0,
      },
      b4: {
        name: "", nameF: true,
        description1: "", description2: "", description3: "", description4: "",
        effect1: 0, effect2: 0, effect3: 0, effect4: 0, effect5: 0,
        price: 0, priceIdentity: "universalNodes",
        maxLevel: 0,
      },
      b5: {
        name: "", nameF: true,
        description1: "", description2: "", description3: "", description4: "",
        effect1: 0, effect2: 0, effect3: 0, effect4: 0, effect5: 0,
        price: 0, priceIdentity: "universalCores",
        maxLevel: 0,
      },
    }

    this.huntEvolutionLabels = options.huntEvolutionLabels || {
      effect1: {
        level1: "WEAK", level2: "FRAIL", level3: "INSECURE", level4: "ADEQUATE", level5: "COMPETENT", level6: "STRONG", level7: "POWERFUL", level8: "FORMIDABLE", level9: "UNSTOPPABLE", level10: "INVINCIBLE",
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

    this.node29Size = options.node29Size || {
      size1: { name: "Moon Size: 3.47 × 10⁶ m", req: 0, },
      size2: { name: "Small Planetoid: 6.95 × 10⁶ m", req: 5, },
      size3: { name: "Large Planetoid: 1.04 × 10⁷ m", req: 10, },
      size4: { name: "Small Terrestrial Planet: 1.74 × 10⁷ m", req: 15, },
      size5: { name: "Earth-Venus Class Planet: 2.78 × 10⁷ m", req: 20, },
      size6: { name: "Large Terrestrial Planet: 4.52 × 10⁷ m", req: 25, },
      size7: { name: "Neptune-like Planet: 7.30 × 10⁷ m", req: 30, },
      size8: { name: "Gas Giant (Saturn): 1.18 × 10⁸ m", req: 35, },
      size9: { name: "Gas Giant (Jupiter): 8.10 × 10⁸ m", req: 40, },
      size10: { name: "Brown Dwarf: 3.43 × 10⁹ m", req: 45, },
      size11: { name: "Dwarf Star: 7.00 × 10⁹ m", req: 50, },
      size12: { name: "Sun-like Star: 3.81 × 10¹⁰ m", req: 55, },
      size13: { name: "Red Giant: 1.50 × 10¹¹ m", req: 60, },
      size14: { name: "Supergiant Star: 6.00 × 10¹¹ m", req: 65, },
      size15: { name: "Massive Supergiant: 3.21 × 10¹³ m", req: 70, },
      size16: { name: "Extended Nebula: 3.56 × 10¹⁴ m", req: 75, },
      size17: { name: "Star Cluster: 4.37 × 10¹⁶ m", req: 80, },
      size18: { name: "Dwarf Galaxy: 5.38 × 10¹⁸ m", req: 85, },
      size19: { name: "Large Galaxy (Milky Way): 6.62 × 10²⁰ m", req: 90, },
      size20: { name: "Galaxy Cluster: 8.14 × 10²² m", req: 95, },
      size21: { name: "Observable Universe: 1.23 × 10²⁷ m", req: 100, }
    };

    this.fireTree = options.fireTree || {
      node1: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "universalCores",
        maxLevel: 0,
      },
      node2: {
        content: "", button: "",
        effect: 0,
        effect2: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fire",
        maxLevel: 0,
      },
      node3: {
        content: "", button: "",
        effect: 0,
        effect2: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fire",
        maxLevel: 0,
      },
      node4: {
        content: "", button: "",
        effect: 0,
        effect2: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fire",
        maxLevel: 0,
      },
      node5: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "wood",
        maxLevel: 0,
      },
      node6: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "coal",
        maxLevel: 0,
      },
      node7: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "magma",
        maxLevel: 0,
      },
      node8: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "heat",
        maxLevel: 0,
      },
      node9: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "heat",
        maxLevel: 0,
      },
      node10: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "heat",
        maxLevel: 0,
      },
      node11: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fire",
        maxLevel: 0,
      },
      node12: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },
      node13: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },
      node14: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },
      node15: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },
      node16: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },
      node17: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },
      node18: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },
      node19: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },
      node20: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },
      node21: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },
      node22: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },
      node23: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },
      node24: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },
      node25: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },
      node26: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },
      node27: {
        content: "", button: "",
        effect: 0, effect2: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },
      node28: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },

      node29: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },

      node30: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
      },

      node31: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
      },

      node32: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
      },

      node33: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
      },

      node34: {
        content: "", button: "",
        effect: 0, effect2: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
      },

      node35: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
      },

      node36: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
      },

      node37: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
      },

      node38: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "heat",
        maxLevel: 0,
      },
      node39: {
        content: "", button: "",
        effect: 0,
        effect2: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fire",
        maxLevel: 0,
      },
      node40: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "heat",
        maxLevel: 0,
      },
      node41: {
        content: "", button: "", button2: "",
        effect: 0,
        effect2: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
        group: "group2",
      },
      node42: {
        content: "", button: "", button2: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
        group: "group2",
      },
      node43: {
        content: "", button: "", button2: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
        group: "group2",
      },
      node44: {
        content: "", button: "", button2: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
        group: "group2",
      },
      node45: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },
      node46: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },
      node47: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },
      node48: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
      },
      node49: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
      },
      node50: {
        content: "", button: "",
        effect: 0, effect2: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
      },
      node51: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
      },
      node52: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
      },
      node53: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
      },
      node54: {
        content: "", button: "",
        effect: 0, effect2: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
      },
      node55: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
      },
      node56: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
      },
      node57: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
      },
      node58: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fire",
        maxLevel: 0,
      },
      node59: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fire",
        maxLevel: 0,
      },
      node60: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fire",
        maxLevel: 0,
      },
      node61: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },
      node62: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "size",
        maxLevel: 0,
      },
      node63: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
      },
      node64: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fireShards",
        maxLevel: 0,
      },
    }

    this.fireMilestones = options.fireMilestones || {
      m1: {
        mCheck: function () { return f(IUniversal.fireTree.node29.level).gte(15); },
        mReqDesc: "",
        mDesc: "",
      },
      m2: {
        mCheck: function () { return f(IUniversal.fireTree.node29.level).gte(25); },
        mReqDesc: "",
        mDesc: "",
      },
      m3: {
        mCheck: function () { return f(IUniversal.fireTree.node29.level).gte(30); },
        mReqDesc: "",
        mDesc: "",
      },
      m4: {
        mCheck: function () { return f(IUniversal.fireTree.node29.level).gte(35); },
        mReqDesc: "",
        mDesc: "",
      },
      m5: {
        mCheck: function () { return f(IUniversal.fireTree.node29.level).gte(45); },
        mReqDesc: "",
        mDesc: "",
      },
      m6: {
        mCheck: function () { return f(IUniversal.fireTree.node29.level).gte(50); },
        mReqDesc: "",
        mDesc: "",
      },
      m7: {
        mCheck: function () { return f(IUniversal.fireTree.node29.level).gte(55); },
        mReqDesc: "",
        mDesc: "",
      },
    };

    this.inventoryStorage = options.inventoryStorage = {

    }

    this.potionUpgradeVisual1 = ""

    this.equipment = options.equipment || {
      item1: { type: "training", subtype: "potion", content: "" },
      item2: { type: "hunting", subtype: "potion", content: "" },
      item3: { type: "attributes", subtype: "potion", content: "" },
      item4: { type: "challenger", subtype: "potion", content: "" },
    };

    this.potionImages = options.potionImages || {
      training: { image: "images/potion_type2_v2.png" },
      hunting: { image: "images/potion_type1_v2.png" },
      challenger: { image: "images/potion_type4_v2.png" },
      attributes: { image: "images/potion_type3_v2.png" },
      source: { image: "images/potion_type5_v2.png" },
    };

    this.potionUpgrade = options.potionUpgrade || {
      item1: {},
    };

    this.potionDelete = options.potionDelete || {
      item1: { drag: "delete" },
    };

    this.potionSource = options.potionSource || {
      item1: { type: "source", subtype: "potion", content: "", value0: 0, value2: 0, },
      item2: { type: "source", subtype: "potion", content: "", value0: 0, value2: 0, },
      item3: { type: "source", subtype: "potion", content: "", value0: 0, value2: 0, },
      item4: { type: "source", subtype: "potion", content: "", value0: 0, value2: 0, },
      item5: { type: "source", subtype: "potion", content: "", value0: 0, value2: 0, },
      item6: { type: "source", subtype: "potion", content: "", value0: 0, value2: 0, },
    }

    this.potionFusionVisual1 = ""
    this.potionFusionVisual2 = ""
    this.potionFusionVisual3 = ""

    this.potionFusion = options.potionFusion || {
      item1: { type: "", subtype: "potion", content: "", },
      item2: { type: "", subtype: "potion", content: "", },
    };

    this.potionEffects = options.potionEffects || {
      effect1: {
        type: "damage_training", content: "", value: 0, valueFormula: function () { return 0 }, contentFormula: function () { return 0 }, activeValue: 0,
      },
      effect2: {
        type: "life_training", content: "", value: 0, valueFormula: function () { return 0 }, contentFormula: function () { return 0 }, activeValue: 0,
      },
      effect3: {
        type: "source", content: "", value: 0, valueFormula: function () { return 0 }, contentFormula: function () { return 0 }, activeValue: 0,
      },
      effect4: {
        type: "source", content: "", value: 0, valueFormula: function () { return 0 }, contentFormula: function () { return 0 }, activeValue: 0,
      },

      effect5: {
        type: "source", content: "", value: 0, valueFormula: function () { return 0 }, contentFormula: function () { return 0 }, activeValue: 0,
      },
      effect6: {
        type: "source", content: "", value: 0, valueFormula: function () { return 0 }, contentFormula: function () { return 0 }, activeValue: 0,
      },

      effect7: {
        type: "source", content: "", value: 0, valueFormula: function () { return 0 }, contentFormula: function () { return 0 }, activeValue: 0,
      },
      effect8: {
        type: "source", content: "", value: 0, valueFormula: function () { return 0 }, contentFormula: function () { return 0 }, activeValue: 0,
      },
      effect9: {
        type: "will_training", content: "", value: 0, valueFormula: function () { return 0 }, contentFormula: function () { return 0 }, activeValue: 0,
      },
      effect10: {
        type: "insight_training", content: "", value: 0, valueFormula: function () { return 0 }, contentFormula: function () { return 0 }, activeValue: 0,
      },
      effect11: {
        type: "huntPrice_hunting", content: "", value: 0, valueFormula: function () { return 0 }, contentFormula: function () { return 0 }, activeValue: 0,
      },
      effect12: {
        type: "huntEssence_hunting", content: "", value: 0, valueFormula: function () { return 0 }, contentFormula: function () { return 0 }, activeValue: 0,
      },
      effect13: {
        type: "huntUpgradePrice_hunting", content: "", value: 0, valueFormula: function () { return 0 }, contentFormula: function () { return 0 }, activeValue: 0,
      },
      effect14: {
        type: "criticalRegeneration_attributes", content: "", value: 0, valueFormula: function () { return 0 }, contentFormula: function () { return 0 }, activeValue: 0,
      },
      effect15: {
        type: "defencePenDefence_attributes", content: "", value: 0, valueFormula: function () { return 0 }, contentFormula: function () { return 0 }, activeValue: 0,
      },
      effect16: {
        type: "lifestealShield_attributes", content: "", value: 0, valueFormula: function () { return 0 }, contentFormula: function () { return 0 }, activeValue: 0,
      },
      effect17: {
        type: "challengerDamage_challenger", content: "", value: 0, valueFormula: function () { return 0 }, contentFormula: function () { return 0 }, activeValue: 0,
      },
      effect18: {
        type: "challengerLife_challenger", content: "", value: 0, valueFormula: function () { return 0 }, contentFormula: function () { return 0 }, activeValue: 0,
      },
      effect19: {
        type: "universalChallenger_challenger", content: "", value: 0, valueFormula: function () { return 0 }, contentFormula: function () { return 0 }, activeValue: 0,
      },
    };

    this.potionInfo = options.potionInfo || {
      potion1: {
        id: "potion1",
        type: "training",
        name: "Wyvern Fury",
        content: "",
        content2: "",
        image: "images/potion_type2_v1.png",
        priceTier: 1,
        merges: 0,
        level: 0,
        maxLevel: 0,

        effects: {
          effect1: {
            type: "damage_training", level: 1, maxLevel: 3, valueFormula: function () { return 0 }, contentFormula: function () { return 0 },
          },
        },

        //(f(10).mul(f(level))).mul(f(5).pow(f(merges))) 

        prices: {
          price1: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "erbs", type: "uni" },
          price2: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "fluidFire", type: "uni" },
          price3: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "waterGem", type: "uni" },
          price4: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "pyroFrost", type: "uni" },
        },
      },

      potion2: {
        id: "potion2",
        type: "training",
        name: "Stone Blessing",
        content: "",
        content2: "",
        image: "images/potion_type2_v1.png",
        priceTier: 1,
        merges: 0,
        level: 0,
        maxLevel: 0,

        effects: {
          effect1: {
            type: "life_training", level: 1, maxLevel: 3, valueFormula: function () { return 0 }, contentFormula: function () { return 0 },
          },
        },

        prices: {
          price1: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "erbs", type: "uni" },
          price2: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "fluidFire", type: "uni" },
          price3: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "waterGem", type: "uni" },
          price4: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "pyroFrost", type: "uni" },
        },
      },

      potion3: {
        id: "potion3",
        type: "source",
        name: "Source",
        content: "",
        content2: "",
        image: "images/potion_type5_v1.png",
        priceTier: 1,
        merges: 0,
        level: 0,
        maxLevel: 0,

        effects: {
          effect1: {
            type: "source", level: 1, maxLevel: 3, valueFormula: function () { return 0 }, contentFormula: function () { return 0 },
          },
        },

        prices: {
          price1: { tier: 2, price: 0, priceFormula: function () { return 0 }, priceIdentity: "erbs", type: "uni" },
          price2: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "fluidFire", type: "uni" },
          price3: { tier: 0, price: 0, priceFormula: function () { return 0 }, priceIdentity: "waterGem", type: "uni" },
          price4: { tier: -1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "pyroFrost", type: "uni" },
        },
      },

      potion4: {
        id: "potion4",
        type: "training",
        name: "Iron Will",
        content: "",
        content2: "",
        image: "images/potion_type2_v1.png",
        priceTier: 1,
        merges: 0,
        level: 0,
        maxLevel: 0,

        effects: {
          effect1: {
            type: "will_training", level: 1, maxLevel: 3, valueFormula: function () { return 0 }, contentFormula: function () { return 0 },
          },
        },

        prices: {
          price1: { tier: 4, price: 0, priceFormula: function () { return 0 }, priceIdentity: "erbs", type: "uni" },
          price2: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "fluidFire", type: "uni" },
          price3: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "waterGem", type: "uni" },
          price4: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "pyroFrost", type: "uni" },
        },
      },

      potion5: {
        id: "potion5",
        type: "training",
        name: "Fey Touched",
        content: "",
        content2: "",
        image: "images/potion_type2_v1.png",
        priceTier: 1,
        merges: 0,
        level: 0,
        maxLevel: 0,

        effects: {
          effect1: {
            type: "insight_training", level: 1, maxLevel: 3, valueFormula: function () { return 0 }, contentFormula: function () { return 0 },
          },
        },

        prices: {
          price1: { tier: 4, price: 0, priceFormula: function () { return 0 }, priceIdentity: "erbs", type: "uni" },
          price2: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "fluidFire", type: "uni" },
          price3: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "waterGem", type: "uni" },
          price4: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "pyroFrost", type: "uni" },
        },
      },

      potion6: {
        id: "potion6",
        type: "hunting",
        name: "Beast Repellent",
        content: "",
        content2: "",
        image: "images/potion_type1_v1.png",
        priceTier: 1,
        merges: 0,
        level: 0,
        maxLevel: 0,

        effects: {
          effect1: {
            type: "huntPrice_hunting", level: 1, maxLevel: 3, valueFormula: function () { return 0 }, contentFormula: function () { return 0 },
          },
        },

        prices: {
          price1: { tier: 2, price: 0, priceFormula: function () { return 0 }, priceIdentity: "erbs", type: "uni" },
          price2: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "fluidFire", type: "uni" },
          price3: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "waterGem", type: "uni" },
          price4: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "pyroFrost", type: "uni" },
        },
      },

      potion7: {
        id: "potion7",
        type: "hunting",
        name: "Nature's Embrace",
        content: "",
        content2: "",
        image: "images/potion_type1_v1.png",
        priceTier: 1,
        merges: 0,
        level: 0,
        maxLevel: 0,

        effects: {
          effect1: {
            type: "huntEssence_hunting", level: 1, maxLevel: 3, valueFormula: function () { return 0 }, contentFormula: function () { return 0 },
          },
        },

        prices: {
          price1: { tier: 2, price: 0, priceFormula: function () { return 0 }, priceIdentity: "erbs", type: "uni" },
          price2: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "fluidFire", type: "uni" },
          price3: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "waterGem", type: "uni" },
          price4: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "pyroFrost", type: "uni" },
        },
      },

      potion8: {
        id: "potion8",
        type: "hunting",
        name: "Beast King Arom",
        content: "",
        content2: "",
        image: "images/potion_type1_v1.png",
        priceTier: 1,
        merges: 0,
        level: 0,
        maxLevel: 0,

        effects: {
          effect1: {
            type: "huntUpgradePrice_hunting", level: 1, maxLevel: 3, valueFormula: function () { return 0 }, contentFormula: function () { return 0 },
          },
        },

        prices: {
          price1: { tier: 5, price: 0, priceFormula: function () { return 0 }, priceIdentity: "erbs", type: "uni" },
          price2: { tier: 3, price: 0, priceFormula: function () { return 0 }, priceIdentity: "fluidFire", type: "uni" },
          price3: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "waterGem", type: "uni" },
          price4: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "pyroFrost", type: "uni" },
        },
      },

      potion9: {
        id: "potion9",
        type: "attributes",
        name: "Bottled Light",
        content: "",
        content2: "",
        image: "images/potion_type3_v1.png",
        priceTier: 1,
        merges: 0,
        level: 0,
        maxLevel: 0,

        effects: {
          effect1: {
            type: "criticalRegeneration_attributes", level: 1, maxLevel: 3, valueFormula: function () { return 0 }, contentFormula: function () { return 0 },
          },
        },

        prices: {
          price1: { tier: 4, price: 0, priceFormula: function () { return 0 }, priceIdentity: "erbs", type: "uni" },
          price2: { tier: 3, price: 0, priceFormula: function () { return 0 }, priceIdentity: "fluidFire", type: "uni" },
          price3: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "waterGem", type: "uni" },
          price4: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "pyroFrost", type: "uni" },
        },
      },

      potion10: {
        id: "potion10",
        type: "attributes",
        name: "Extracted Gravity",
        content: "",
        content2: "",
        image: "images/potion_type3_v1.png",
        priceTier: 1,
        merges: 0,
        level: 0,
        maxLevel: 0,

        effects: {
          effect1: {
            type: "defencePenDefence_attributes", level: 1, maxLevel: 3, valueFormula: function () { return 0 }, contentFormula: function () { return 0 },
          },
        },

        prices: {
          price1: { tier: 4, price: 0, priceFormula: function () { return 0 }, priceIdentity: "erbs", type: "uni" },
          price2: { tier: 3, price: 0, priceFormula: function () { return 0 }, priceIdentity: "fluidFire", type: "uni" },
          price3: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "waterGem", type: "uni" },
          price4: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "pyroFrost", type: "uni" },
        },
      },

      potion11: {
        id: "potion11",
        type: "attributes",
        name: "Core Tonic",
        content: "",
        content2: "",
        image: "images/potion_type3_v1.png",
        priceTier: 1,
        merges: 0,
        level: 0,
        maxLevel: 0,

        effects: {
          effect1: {
            type: "lifestealShield_attributes", level: 1, maxLevel: 3, valueFormula: function () { return 0 }, contentFormula: function () { return 0 },
          },
        },

        prices: {
          price1: { tier: 5, price: 0, priceFormula: function () { return 0 }, priceIdentity: "erbs", type: "uni" },
          price2: { tier: 4, price: 0, priceFormula: function () { return 0 }, priceIdentity: "fluidFire", type: "uni" },
          price3: { tier: 2, price: 0, priceFormula: function () { return 0 }, priceIdentity: "waterGem", type: "uni" },
          price4: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "pyroFrost", type: "uni" },
        },
      },

      potion12: {
        id: "potion12",
        type: "challenger",
        name: "Gu poison",
        content: "",
        content2: "",
        image: "images/potion_type4_v1.png",
        priceTier: 1,
        merges: 0,
        level: 0,
        maxLevel: 0,

        effects: {
          effect1: {
            type: "challengerDamage_challenger", level: 1, maxLevel: 3, valueFormula: function () { return 0 }, contentFormula: function () { return 0 },
          },
        },

        prices: {
          price1: { tier: 5, price: 0, priceFormula: function () { return 0 }, priceIdentity: "erbs", type: "uni" },
          price2: { tier: 4, price: 0, priceFormula: function () { return 0 }, priceIdentity: "fluidFire", type: "uni" },
          price3: { tier: 3, price: 0, priceFormula: function () { return 0 }, priceIdentity: "waterGem", type: "uni" },
          price4: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "pyroFrost", type: "uni" },
        },
      },

      potion13: {
        id: "potion13",
        type: "challenger",
        name: "Liquid Death",
        content: "",
        content2: "",
        image: "images/potion_type4_v1.png",
        priceTier: 1,
        merges: 0,
        level: 0,
        maxLevel: 0,

        effects: {
          effect1: {
            type: "challengerLife_challenger", level: 1, maxLevel: 3, valueFormula: function () { return 0 }, contentFormula: function () { return 0 },
          },
        },

        prices: {
          price1: { tier: 5, price: 0, priceFormula: function () { return 0 }, priceIdentity: "erbs", type: "uni" },
          price2: { tier: 4, price: 0, priceFormula: function () { return 0 }, priceIdentity: "fluidFire", type: "uni" },
          price3: { tier: 3, price: 0, priceFormula: function () { return 0 }, priceIdentity: "waterGem", type: "uni" },
          price4: { tier: 1, price: 0, priceFormula: function () { return 0 }, priceIdentity: "pyroFrost", type: "uni" },
        },
      },

      potion14: {
        id: "potion14",
        type: "challenger",
        name: "Soured Ambrosia",
        content: "",
        content2: "",
        image: "images/potion_type4_v1.png",
        priceTier: 1,
        merges: 0,
        level: 0,
        maxLevel: 0,

        effects: {
          effect1: {
            type: "universalChallenger_challenger", level: 1, maxLevel: 3, valueFormula: function () { return 0 }, contentFormula: function () { return 0 },
          },
        },

        prices: {
          price1: { tier: 6, price: 0, priceFormula: function () { return 0 }, priceIdentity: "erbs", type: "uni" },
          price2: { tier: 5, price: 0, priceFormula: function () { return 0 }, priceIdentity: "fluidFire", type: "uni" },
          price3: { tier: 4, price: 0, priceFormula: function () { return 0 }, priceIdentity: "waterGem", type: "uni" },
          price4: { tier: 2, price: 0, priceFormula: function () { return 0 }, priceIdentity: "pyroFrost", type: "uni" },
        },
      },
    };



    this.waterTree = options.waterTree || {
      node1: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "universalCores",
        maxLevel: 0,
      },
      node2: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "water",
        maxLevel: 0,
      },
      node3: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "water",
        maxLevel: 0,
      },
      node4: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "water",
        maxLevel: 0,
      },
      node5: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "water",
        maxLevel: 0,
      },
      node6: {
        content: "", button: "",
        effect: 0, maxEffect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "water",
        maxLevel: 0,
      },
      node7: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "water",
        maxLevel: 0,
      },
      node8: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "water",
        maxLevel: 0,
      },
      node9: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "water",
        maxLevel: 0,
      },
      node10: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "elisir",
        maxLevel: 0,
      },
      node11: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "elisir",
        maxLevel: 0,
      },
      node12: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "elisir",
        maxLevel: 0,
      },
      node13: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "elisir",
        maxLevel: 0,
      },
      node14: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "ambrosia",
        maxLevel: 0,
      },
      node15: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "ambrosia",
        maxLevel: 0,
      },
      node16: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "ambrosia",
        maxLevel: 0,
      },
      node17: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "ambrosia",
        maxLevel: 0,
      },
      node18: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "ambrosia",
        maxLevel: 0,
      },
      node19: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "erbs",
        maxLevel: 0,
      },
      node20: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fluidFire",
        maxLevel: 0,
      },
      node21: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "waterGem",
        maxLevel: 0,
      },
      node22: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "water",
        maxLevel: 0,
      },
      node23: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "water",
        maxLevel: 0,
      },
      node24: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "water",
        maxLevel: 0,
      },
      node25: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "water",
        maxLevel: 0,
      },
      node26: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "elisir",
        maxLevel: 0,
      },
      node27: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "elisir",
        maxLevel: 0,
      },
      node28: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "elisir",
        maxLevel: 0,
      },
      node29: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "elisir",
        maxLevel: 0,
      },
      node30: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "erbs",
        maxLevel: 0,
      },
      node31: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "fluidFire",
        maxLevel: 0,
      },
      node32: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "waterGem",
        maxLevel: 0,
      },
      node33: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "pyroFrost",
        maxLevel: 0,
      },
      node34: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "water",
        maxLevel: 0,
      },
      node35: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "elisir",
        maxLevel: 0,
      },
      node36: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "elisir",
        maxLevel: 0,
      },
      node37: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "ambrosia",
        maxLevel: 0,
      },
      node38: {
        content: "", button: "",
        effect: 0,
        req: function () { return false }, checkBuy: function () { return true },
        price: 0, priceIdentity: "ambrosia",
        maxLevel: 0,
      },
    }

    this.automation = {
      automation1: {
        price: 0, priceIdentity: "universalShards",
        maxLevel: 0
      },
      automation2: {
        price: 0, priceIdentity: "universalShards",
      },
      automation3: {
        price: 0, priceIdentity: "universalShards",
      },
      automation4: {
        price: 0, priceIdentity: "universalShards",
      },
      automation5: {
        price: 0, priceIdentity: "universalShards",
      },
      automation6: {
        price: 0, priceIdentity: "universalShards",
        maxLevel: 0, option0: "", option1: "", option2: "", option3: "",
      },
      automation7: {
        price: 0, priceIdentity: "universalShards",
        level: 0,
      },
      automation8: {
        price: 0, priceIdentity: "universalShards",
      },
      automation9: {
        price: 0, priceIdentity: "universalShards",
      },
      automation10: {
        price: 0, priceIdentity: "universalShards",
      },
      automation11: {
        price: 0, priceIdentity: "universalShards",
      },
      automation12: {
        price: 0, priceIdentity: "universalShards",
      },
      automation13: {
        price: 0, priceIdentity: "universalShards",
      },
      automation14: {
        price: 0, priceIdentity: "universalShards",
      },
    }

    this.lore = options.lore || {
      lore1: {
        text: "",
      },
      lore2: {
        text: "",
      },
      lore3: {
        text: "",
      },
      lore4: {
        text: "",
      },
      lore5: {
        text: "",
      },
      lore6: {
        text: "",
      },
      lore7: {
        text: "",
      },
    }
  }
}

class Training {
  constructor(options) {
    options = options || {}

    this.title = options.title || ""
    this.reqDescription = ""

    this.base = options.base || {
      base1: {
        tot: 0, level: 1, active: false,
      },

      base2: {
        tot: 0, level: 1, active: false,
      },

      base3: {
        tot: 0, level: 1, active: false,
      },

      base4: {
        tot: 0, level: 1, active: false,
      },
    }
  }
}

class TrainingIn {
  constructor(options) {
    options = options || {}

    this.title = options.title || ""
    this.titleF = true;
    this.reqDescription = ""

    this.base = options.base || {
      base1: {
        name: "Damage", nameF: true, prod: 0, price: 0, priceIdentity: "",
        descripion: "", descriptionF: true,
        group: "group1",
      },

      base2: {
        name: "Life", nameF: true, prod: 0, price: 0, priceIdentity: "",
        descripion: "", descriptionF: true,
        group: "group1",
      },

      base3: {
        name: "Will", nameF: true, prod: 0, price: 0, priceIdentity: "",
        description: "Physical Training ×", descriptionF: true,
        req: function () { return f(IGameData.power).gte(f(10)) }, reqF: true,
        reqDescription: "Unlock New Training At 10 Power", reqDescriptionF: true,
        group: "group1",
      },

      base4: {
        name: "Insight", nameF: true, prod: 0, price: 0, priceIdentity: "",
        description: "Essence/s ×", descriptionF: true,
        req: function () { return f(IGameData.power).gte(f(10)) }, reqF: true,
        reqDescription: "Unlock New Training At 10 Power", reqDescriptionF: true,
        group: "group1",
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
      leftLife2: 0,
      damage: 0,
      life: 0,
    };

    this.onFightStats = options.onFightStats || {
      life: 0,
      leftLife: 0,
      leftLife2: 0,
      damage: 0,
      fightMulti1: 0,
      fightMulti2: 0,
    };

    this.challengers = options.challengers || {
      baseChallenger: {
        leftLife: 0, level: 1,
      },
      universalChallenger: {
        leftLife: 0, level: 1,
      }
    };

    this.challengerRewards = options.challengerRewards || {
      reward1: {
        level: 0,
      },
      reward2: {
        level: 0,
      },
    };

    this.huntingMulti = options.huntingMulti || false,

      this.normalHunting = options.normalHunting || {
        hunt1: {
          level: 0, active: false,
          unlocked: false, showReq: false,
        },
        hunt2: {
          level: 0, active: false,
          unlocked: false, showReq: false,
        },
        hunt3: {
          level: 0, active: false,
          unlocked: false, showReq: false,
        },
        hunt4: {
          level: 0, active: false,
          unlocked: false, showReq: false,
        },
        hunt5: {
          level: 0, active: false,
          unlocked: false, showReq: false,
        }
      };

    this.normalHuntingRewards = options.normalHuntingRewards || {
      upgrade1: {
        level: 0, active: false, showReq: false,
      },
      upgrade2: {
        level: 0, active: false, showReq: false,
      },
      upgrade3: {
        level: 0, active: false, showReq: false,
      },
      upgrade4: {
        level: 0, active: false, showReq: false,
      },
      upgrade5: {
        level: 0, active: false, showReq: false,
      },
    };
  }
}

class FightIn {
  constructor(options) {
    options = options || {};

    this.youStats = options.youStats || {
    };

    this.onFightStats = options.onFightStats || {
    };

    this.challengers = options.challengers || {
      baseChallenger: {
        name: "", damage: 0, life: 0, title: "", maxLevel: 0,
      },
      universalChallenger: {
        name: "", damage: 0, life: 0, title: "", maxLevel: 0,
      }
    };

    this.challengerRewards = options.challengerRewards || {
      reward1: {
        name: "Damage And Life Training × ", nameF: true, effect: 0
      },
      reward2: {
        name: "Will And Insight Training × ", nameF: true, effect: 0
      },
    };

    this.huntingMulti = options.huntingMulti || false,

      this.normalHunting = options.normalHunting || {
        hunt1: {
          name: "Slime", nameF: true, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true,
          req: function () { return },
          reqDescription: "", reqDescriptionF: true,
          reqF: true, showLevel: 0,
        },
        hunt2: {
          name: "Zombie", nameF: true, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true,
          req: function () { return },
          reqDescription: "", reqDescriptionF: true,
          reqF: true, showLevel: 0,
        },
        hunt3: {
          name: "Knight", nameF: true, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true,
          req: function () { return },
          reqDescription: "", reqDescriptionF: true,
          reqF: true, showLevel: 0,
        },
        hunt4: {
          name: "Demon", nameF: true, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true,
          req: function () { return },
          reqDescription: "", reqDescriptionF: true,
          reqF: true, showLevel: 0,
        },
        hunt5: {
          name: "Wyvern", nameF: true, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true,
          req: function () { return },
          reqDescription: "", reqDescriptionF: true,
          reqF: true, showLevel: 0,
        }
      };

    this.normalHuntingRewards = options.normalHuntingRewards || {
      upgrade1: {
        name: "Damage × ", nameF: true, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true,
        req: function () { return f(IFight.normalHunting.hunt1.level).gte(f(10)) },
        reqDescription: "", reqDescriptionF: true,
        reqF: true, showLevel: 0,
      },
      upgrade2: {
        name: "Life × ", nameF: true, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true,
        req: function () { return f(IFight.normalHunting.hunt2.level).gte(f(10)) },
        reqDescription: "", reqDescriptionF: true,
        reqF: true, showLevel: 0,
      },
      upgrade3: {
        name: "Slime Multiplies Essence By × ", nameF: true, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true,
        req: function () { return f(IFight.normalHunting.hunt3.level).gte(f(10)) },
        reqDescription: "", reqDescriptionF: true,
        reqF: true, showLevel: 0,
      },
      upgrade4: {
        name: "Percentage Of Damage Added To Life", nameF: true, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true,
        req: function () { return f(IFight.normalHunting.hunt4.level).gte(f(10)) },
        reqDescription: "", reqDescriptionF: true,
        reqF: true, showLevel: 0,
      },
      upgrade5: {
        name: "Multiply Challenger First Reward By × ", nameF: true, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true,
        req: function () { return f(IFight.normalHunting.hunt5.level).gte(f(10)) },
        reqDescription: "", reqDescriptionF: true,
        reqF: true, showLevel: 0,
      },
    };
  }
}


class ShowableClass {
  constructor(options) {
    options = options || {}

    this.svg = options.svg || {
      ascensionCirclesScale: 0.3, ascensionCirclesScaleF: true,
    }

    this.init = options.init || true;

    this.showable = options.showable || {

      //Valutes

      universeValute: false, essenceValute: false,

      universalShardsBase: true,
      universalNodesBase: false,
      universalCoresBase: false,

      fireValute: false,
      waterValute: false,

      fp2_content2_pageSel: false, fp2_content3_pageSel: false,

      //Pages

      fp2_content2: true, fp2_content3: false,

      mainMenu: true, mainMenuExit: false,

      offSave: false,

      resetScreen: false, opaqueScreen2: false, opaqueScreen3: false,



      fp2_content2_1_container: false, fp2_content2_6_container: false, fp2_content2_7_container: false, fp2_content2_11_container: false, fp2_content2_4_container: false, fp2_content2_10_container: false, fp2_content2_8_container: false, fp2_content1_8: false, fp2_content2_12_container: false, fp2_content2_13_container: false, fp2_content2_14_container: false, fp2_content2_15_container: false, fp2_content2_16_container: false, fp2_content2_17_container: false, fp2_content2_18_container: false, fp2_content2_19_container: false, fp2_content2_20_container: false,

      fp2_content2_1: true, fp2_content2_4: true, fp2_content2_5: true, fp2_content2_6: true, fp2_achievements: false, fp2_content2_7: true, fp2_content2_8: true, fp2_content2_10: true, fp2_content2_11: true, fp2_content2_12: true, fp2_content2_13: true, fp2_content2_14: true, fp2_content2_15: true, fp2_content2_16: true, fp2_content2_17: true, fp2_content2_18: true, fp2_content2_19: true, fp2_content2_20: true,

      options: false, achievements: false, content2_1: false, content2_4: false, content2_6: false, content2_7: false, content2_8: false, content2_10: false, content2_11: false, content2_12: false, content2_13: false, content2_14: false, content2_15: false, content2_16: false, content2_17: false, content2_18: false, content2_19: false, content2_20: false,

      fp3_content1_1: false, fp3_content1_2: false, fp3_content1_4: false, fp3_content1_8: false,

      //mainMenuDirectionArrow
      mainMenuDirectionArrow1: false,
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

      content1_7_m1: false, content1_7_m2: false, content1_7_m3: false,

      //Automation

      fp3_content1_8_auto1: false,
      fp3_content1_8_auto2: false,
      fp3_content1_8_auto3: false,
      fp3_content1_8_auto4: false,
      fp3_content1_8_auto5: false,
      fp3_content1_8_auto6: false,
      fp3_content1_8_auto7: false,
      fp3_content1_8_auto8: false,
      fp3_content1_8_auto9: false,
      fp3_content1_8_auto10: false,
      fp3_content1_8_auto11: false,
      fp3_content1_8_auto12: false,
      fp3_content1_8_auto13: false,
      fp3_content1_8_auto14: false,


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

      //fireTree

      content2_17_valutes_content: true,
      content2_17_valutes_valute1: false,
      content2_17_valutes_valute2: false,
      content2_17_valutes_valute3: false,
      content2_17_valutes_valute4: false,

      content2_17_zone1: false,
      content2_17_zone2: false,
      content2_17_zone3: false,

      content2_17_node1: false,
      content2_17_node2: false,
      content2_17_node3: false,
      content2_17_node4: false,
      content2_17_node5: false,
      content2_17_node6: false,
      content2_17_node7: false,
      content2_17_node8: false,
      content2_17_node9: false,
      content2_17_node10: false,

      content2_17_node11: false,
      content2_17_node12: false,
      content2_17_node13: false,
      content2_17_node14: false,
      content2_17_node15: false,
      content2_17_node16: false,
      content2_17_node17: false,
      content2_17_node18: false,
      content2_17_node19: false,
      content2_17_node20: false,
      content2_17_node21: false,
      content2_17_node22: false,
      content2_17_node23: false,
      content2_17_node24: false,
      content2_17_node25: false,
      content2_17_node26: false,

      //heat
      content1_17_node29_m1: false,
      content1_17_node29_m2: false,
      content1_17_node29_m3: false,
      content1_17_node29_m4: false,
      content1_17_node29_m5: false,
      content1_17_node29_m6: false,
      content1_17_node29_m7: false,


      content2_17_node27: false, content2_17_node27_button: true,
      content2_17_node28: false,
      content2_17_node29: false,

      //Press
      content2_17_node30: false, content2_17_node30_button: false,
      content2_17_node31: false,
      content2_17_node32: false,
      content2_17_node33: false,

      //mult press
      content2_17_node34: false, content2_17_node34_button: false,
      content2_17_node35: false,
      content2_17_node36: false,
      content2_17_node37: false,

      content2_17_node38: false,

      content2_17_node39: false,
      content2_17_node40: false,
      content2_17_node41: false,
      content2_17_node42: false,
      content2_17_node43: false,
      content2_17_node44: false,

      content2_17_node45: false,
      content2_17_node46: false,
      content2_17_node47: false,
      content2_17_node48: false,
      content2_17_node49: false,

      //gear

      content2_17_node50: false, content2_17_node50_button: false,
      content2_17_node51: false,
      content2_17_node52: false,
      content2_17_node53: false,
      content2_17_node54: false, content2_17_node54_button: false,
      content2_17_node55: false,
      content2_17_node56: false,
      content2_17_node57: false,

      //m6
      content2_17_node58: false,
      content2_17_node59: false,
      content2_17_node60: false,
      content2_17_node61: false,
      content2_17_node62: false,
      content2_17_node63: false,
      content2_17_node64: false,


      //WATER

      content2_19_zone1: false,
      content2_19_zone2: false,
      content2_19_zone3: false,

      //potion menu
      content2_19_tutorial: false,
      content2_19_potionDelete: false,
      content2_19_potionSel: false,
      content2_19_grid1: false,
      content2_19_potionEquip: false,
      content2_19_potionUpgrade: false,

      content2_19_potionEquip_1: false,
      content2_19_potionEquip_2: false,
      content2_19_potionEquip_3: false,
      content2_19_potionEquip_4: false,


      //potions

      content2_19_potions_potion1: false,
      content2_19_potions_potion2: false,
      content2_19_potions_potion3: false,
      content2_19_potions_potion4: false,
      content2_19_potions_potion5: false,
      content2_19_potions_potion6: false,
      content2_19_potions_potion7: false,
      content2_19_potions_potion8: false,
      content2_19_potions_potion9: false,
      content2_19_potions_potion10: false,
      content2_19_potions_potion11: false,
      content2_19_potions_potion12: false,
      content2_19_potions_potion13: false,
      content2_19_potions_potion14: false,

      //source

      content2_19_content2_source1: false,
      content2_19_content2_source2: false,
      content2_19_content2_source3: false,
      content2_19_content2_source4: false,
      content2_19_content2_source5: false,
      content2_19_content2_source6: false,

      //potionUpgrades

      content2_19_circle1: false,
      content2_19_circle2: false,
      content2_19_circle3: false,

      content2_19_potionUpgrade_selector_content1: true,
      content2_19_potionUpgrade_selector_content2: false,
      content2_19_potionUpgrade_selector_content3: false,


      content2_19_potionUpgrade_selector_button1: false,
      content2_19_potionUpgrade_selector_button2: false,
      content2_19_potionUpgrade_selector_button3: false,

      content2_19_potion_info: false,

      content2_19_valutes_content: true,
      content2_19_valutes_valute1: false,
      content2_19_valutes_valute2: false,
      content2_19_valutes_valute3: false,
      content2_19_valutes_valute4: false,
      content2_19_valutes_valute5: false,
      content2_19_valutes_valute6: false,
      content2_19_valutes_valute7: false,


      content2_19_node1: false,
      content2_19_node2: false,
      content2_19_node3: false,
      content2_19_node4: false,
      content2_19_node5: false,
      content2_19_node6: false, content2_19_node6_button: true,
      content2_19_node7: false,
      content2_19_node8: false,
      content2_19_node9: false,
      content2_19_node10: false, content2_19_node10_button: true,
      content2_19_node11: false,
      content2_19_node12: false,
      content2_19_node13: false,
      content2_19_node14: false, content2_19_node14_button: true,
      content2_19_node15: false,
      content2_19_node16: false,
      content2_19_node17: false,
      content2_19_node18: false, content2_19_node18_button: true,
      content2_19_node19: false,
      content2_19_node20: false,
      content2_19_node21: false,
      content2_19_node22: false, content2_19_node22_button: true,
      content2_19_node23: false,
      content2_19_node24: false,
      content2_19_node25: false,
      content2_19_node26: false, content2_19_node26_button: true,
      content2_19_node27: false,
      content2_19_node28: false,
      content2_19_node29: false,

      content2_19_node30: false,
      content2_19_node31: false,
      content2_19_node32: false,
      content2_19_node33: false,

      content2_19_node34: false,
      content2_19_node35: false,
      content2_19_node36: false,
      content2_19_node37: false,
      content2_19_node38: false, content2_19_node38_button: true,

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

class Progress {
  constructor(options) {
    options = options || {}
    this.actualProgress = options.actualProgress || 1;

    this.progress = options.progress || {

    }
  }
}

class ProgressIn {
  constructor(options) {
    options = options || {}

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
    this.universalShardsProdBase = options.universalShardsProdBase || 0;


    this.universalNodes = options.universalNodes || 0;
    this.universalNodesProd = options.universalNodesProd || 0;
    this.universalNodesProdBase = options.universalNodesProdBase || 0;


    this.universalCores = options.universalCores || 0;
    this.universalCoresProd = options.universalCoresProd || 0;
    this.universalCoresProdBase = options.universalCoresProdBase || 0;


    this.challengers = options.challengers || {
      universalChallenger: {
        name: "", damage: 0, life: 0, leftLife: 0, title: "", level: 1, maxLevel: 0,
      }
    };

    this.descriptionF = true

    this.universalChallengerRewards = options.universalChallengerRewards || {
      reward1: {
        level: 0,
      },
    };

    this.universalChallengerChallenges = options.universalChallengerChallenges || {
      c1: {
        active: false, level: 0, maxLevel: 0,
      },
      c2: {
        active: false, level: 0, maxLevel: 0,
      },
    };

    this.universalChallengerChallengesRewards = options.universalChallengerChallengesRewards || {
      c1: {
        level: 0,
      },
      c2: {
        level: 0,
      },
    };
  }
}

class UniversalChallengerIn {
  constructor(options) {
    options = options || {}

    this.universalShards = options.universalShards || 0;
    this.universalShardsProd = options.universalShardsProd || 0;
    this.universalShardsProdBase = options.universalShardsProdBase || 0;


    this.universalNodes = options.universalNodes || 0;
    this.universalNodesProd = options.universalNodesProd || 0;
    this.universalNodesProdBase = options.universalNodesProdBase || 0;


    this.universalCores = options.universalCores || 0;
    this.universalCoresProd = options.universalCoresProd || 0;
    this.universalCoresProdBase = options.universalCoresProdBase || 0;


    this.challengers = options.challengers || {
      universalChallenger: {
      }
    };

    this.descriptionF = true

    this.universalChallengerRewards = options.universalChallengerRewards || {
      reward1: {
        name: "Universal Shards/s: ", nameF: true, effect: 0
      },
    };

    this.universalChallengerChallenges = options.universalChallengerChallenges || {
      c1: {
        name: "<div>CHALLENGE: DISABLE HUNTING</div>", nameF: true,
        description: "",
      },
      c2: {
        name: "<div>DISABLE ENERGY</div>", nameF: true,
        description: "",
      },
    };

    this.universalChallengerChallengesRewards = options.universalChallengerChallengesRewards || {
      c1: {
        name: "<div>Universal Nodes</div>", nameF: true, effect: 0
      },
      c2: {
        name: "<div>Universal Cores</div>", nameF: true, effect: 0
      },
    };
  }
}



//SAVING

function createClassInstance(type) {
  if (type == null) {
    IShowableClass = new ShowableClass();

    IGameData = new GameData();

    data.animation = Vue.reactive(new Animation())
    IAnimation = data.animation

    IPermanent = new Permanent();
    IPermanentIn = new PermanentIn();

    data.training = Vue.reactive(new Training())
    ITraining = data.training

    data.trainingIn = Vue.reactive(new TrainingIn())
    ITrainingIn = data.trainingIn

    IFight = new Fight();
    IFightIn = new FightIn();


    ICanCall = new CanCall();

    ISelUpgrade = new SelUpgrade();

    IProgress = new Progress();
    IProgressIn = new ProgressIn();


    data.universal = Vue.reactive(new Universal())
    IUniversal = data.universal

    data.universalIn = Vue.reactive(new UniversalIn())
    IUniversalIn = data.universalIn

    IUniversalChallenger = new UniversalChallenger();
    IUniversalChallengerIn = new UniversalChallengerIn();
  }

  if (type == 1) {
    IShowableClass = new ShowableClass();

    IGameData = new GameData();

    ITraining = new Training();
    ITrainingIn = new TrainingIn();

    IFight = new Fight();

    ICanCall = new CanCall();

    ISelUpgrade = new SelUpgrade();
  }
}

function createSaveData(type) {
  if (type == null) {
    saveData = {
      IShowableClass: IShowableClass,
      IGameData: IGameData,
      IPermanent: IPermanent,
      ITraining: ITraining,
      IFight: IFight,
      ICanCall: ICanCall,
      ISelUpgrade: ISelUpgrade,

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

      if (obj1[key + "F"]) { }

      else if (obj1.hasOwnProperty(key + "R")) {
        obj1[key] = obj2[key];
        continue;
      }

      else if (obj2[key] instanceof Object && obj1[key] instanceof Object) {
        obj1[key] = deepMerge(obj1[key], obj2[key]);
      } else {
        obj1[key] = obj2[key];
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

  //copy
  var inputElement = document.getElementById("Save");
  inputElement.value = encryptedData;

  inputElement.select();
  inputElement.setSelectionRange(0, 999999999999999); // For mobile devices

  navigator.clipboard.writeText(inputElement.value);

  // Alert the copied text
  alert("Copied the Save, paste it in a safe location to import it safely next time");
}

function importSave() {
  var encryptedData = document.getElementById("Save").value;

  if (encryptedData != "") {
    resetSave()
    IShowableClass.init = true;
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
    IShowableClass.init = true;
  }
}

function offImportSave() {
  if (localStorage.getItem("GameSaveOff") !== null) {
    resetSave();
    IShowableClass.init = true;
    const savedGameData = JSON.parse(localStorage.getItem("GameSaveOff"));

    try {
      saveGameData();
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
  localStorage.getItem("GameSave")
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
    offSaveGameData()
    freeTick = false
  } else {
    // Importa i dati quando l'utente ritorna alla pagina
    if (localStorage.getItem("GameSaveOff") !== null) {
      offImportSave();
    }
    freeTick = false
  }
});

//COSE DA FARE/AGGIUNTE

const elementCache = new Map();

function update(id, content) {
  let element = elementCache.get(id);

  if (!element) {
    element = document.getElementById(id);
    if (!element) return;
    elementCache.set(id, element);
  }

  if (element.innerHTML !== content) {
    element.innerHTML = content;
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
  unlockShow("powerValute", false)
  unlockShow("universeValute", false)
  unlockShow("essenceValute", false)
  unlockShow("universalShardsBase", false)
  unlockShow("universalNodesBase", false)
  unlockShow("universalCoresBase", false)
  unlockShow("fireValute", false)
  unlockShow("waterValute", false)


  if (checkShow("fp2_content2")) {
    unlockShow("powerValute", true)
    unlockShow("universeValute", true)
    if (IProgressIn.progress.p2Check() || f(IUniversal.universe).gte(2)) {
      unlockShow("essenceValute", true)
    }
    if (f(IUniversalChallenger.universalShards).gt(f(0))) {
      unlockShow("universalShardsBase", true)
    }
    if (f(IUniversalChallenger.universalNodes).gt(f(0)) || f(IUniversalChallenger.universalChallengerChallenges.c1.level).gt(f(0))) {
      unlockShow("universalNodesBase", true)
    }

    if (f(IUniversalChallenger.universalCores).gt(f(0)) || f(IUniversalChallenger.universalChallengerChallenges.c2.level).gt(f(0))) {
      unlockShow("universalCoresBase", true)
    }
  }

  if (checkShow("fp2_content3")) {
    unlockShow("universeValute", true)
    if (f(IUniversalChallenger.universalCores).gt(f(0))) {
      unlockShow("universalCoresBase", true)
    }
    unlockShow("fireValute", true)

    if (checkShow("fp2_content2_19_container")) {
      unlockShow("waterValute", true)
    }
  }

  update("powerValute", `<div><div>Power</div><div class="boldBlackBorder">${format(IGameData.power, 1)}</span></div>`)
  update("universeValute", `<div><div>Universe</div><div class="boldBlackBorder">${format(IUniversal.universe, 0)}</div></div>`)


  update("essenceValute", `<div><div>Essence</div><div class="boldBlackBorder">${format(IGameData.essence)}</div><div class="boldBlackBorder">${format(sec(IGameData.essenceProd))}/s</div></div>`)

  update("universalShardsBase", `<div>Univ. Shards</div><div class="boldBlackBorder">${format(IUniversalChallenger.universalShards)}</div><div class="boldBlackBorder">${format(IUniversalChallenger.universalShardsProd)}/s</div>`)
  update("universalNodesBase", `<div>Univ. Nodes</div><div class="boldBlackBorder">${format(IUniversalChallenger.universalNodes)}</div><div class="boldBlackBorder">${format(IUniversalChallenger.universalNodesProd)}/s</div>`)
  update("universalCoresBase", `<div>Univ. Cores</div><div class="boldBlackBorder">${format(IUniversalChallenger.universalCores)}</div><div class="boldBlackBorder">${format(IUniversalChallenger.universalCoresProd)}/s</div>`)

  update("fireValute", `<div><div>Fire</div><div class="boldBlackBorder">${format(IUniversal.fire)}</div><div class="boldBlackBorder">${format(sec(IUniversal.fireProd))}/s</div></div>`)
  update("waterValute", `<div><div>Water</div><div class="boldBlackBorder fontSize09">${format(IUniversal.water)}/${format(IUniversal.waterMax)}</div><div class="boldBlackBorder">${format(sec(IUniversal.waterProd))}/s</div></div>`)

}

function buy(priceIdentity, price, objectToUpdate, propertyToUpdate, effect, type) {

  var priceId = priceIdentity.priceIdentity
  var pri = f(price.price)

  if (type == "uni") {
    if (f(IUniversal[priceId]).gte(f(pri))) {
      // Modifica il valore della proprietà specificata in base al tipo di effetto

      if (typeof effect == "boolean") {
        objectToUpdate[propertyToUpdate] = effect ? 1 : 0;  // Aggiorna la proprietà con un valore booleano
      } else {
        if (f(effect) instanceof Decimal) {
          objectToUpdate[propertyToUpdate] = f(objectToUpdate[propertyToUpdate]).add(f(effect));  // Aggiorna la proprietà specificata (ad esempio: 'level', 'count', ecc.)
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
        objectToUpdate[propertyToUpdate] = effect ? 1 : 0;  // Aggiorna la proprietà con un valore booleano
      } else {
        if (f(effect) instanceof Decimal) {
          objectToUpdate[propertyToUpdate] = f(objectToUpdate[propertyToUpdate]).add(f(effect));  // Aggiorna la proprietà specificata (ad esempio: 'level', 'count', ecc.)
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
        objectToUpdate[propertyToUpdate] = effect ? 1 : 0;  // Aggiorna la proprietà con un valore booleano
      } else {
        if (f(effect) instanceof Decimal) {
          objectToUpdate[propertyToUpdate] = f(objectToUpdate[propertyToUpdate]).add(f(effect));  // Aggiorna la proprietà specificata (ad esempio: 'level', 'count', ecc.)
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
        objectToUpdate[propertyToUpdate] = effect ? 1 : 0;  // Aggiorna la proprietà con un valore booleano
      } else {
        if (f(effect) instanceof Decimal) {
          objectToUpdate[propertyToUpdate] = f(objectToUpdate[propertyToUpdate]).add(f(effect));  // Aggiorna la proprietà specificata (ad esempio: 'level', 'count', ecc.)
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
        objectToUpdate[propertyToUpdate] = f(objectToUpdate[propertyToUpdate]).add(f(effect));  // Aggiorna la proprietà specificata (ad esempio: 'level', 'count', ecc.)
      }

      if (typeof effect == "boolean") {
        objectToUpdate[propertyToUpdate] = effect ? 1 : 0;  // Aggiorna la proprietà con un valore booleano
      }

      valuesSetter();
      return true;
    } else {
      return false;
    }
  }

  if (type == "UniNoUpdate") {
    if (f(IUniversal[priceId]).gte(f(pri))) {
      IUniversal[priceId] = f(IUniversal[priceId]).minus(f(pri));
      valuesSetter();
      return true;
    } else {
      return false;
    }
  }

  if (f(IGameData[priceId]).gte(f(pri))) {
    // Modifica il valore della proprietà specificata in base al tipo di effetto
    if (f(effect) instanceof Decimal) {
      objectToUpdate[propertyToUpdate] = f(objectToUpdate[propertyToUpdate]).add(f(effect));  // Aggiorna la proprietà specificata (ad esempio: 'level', 'count', ecc.)
    }

    if (typeof effect == "boolean") {
      objectToUpdate[propertyToUpdate] = effect ? 1 : 0;  // Aggiorna la proprietà con un valore booleano
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

function checkBuyMultiValutes(iter, type) {

  for (let x in iter) {
    var sel = iter[x]

    if (!checkBuy(sel.priceIdentity, sel.price, sel.type)) {
      return false
    }
  }
  return true
}

function buyMultiValutes(iter, type) {

  for (let x in iter) {
    var sel = iter[x]
    if (!buy(sel, sel, null, null, null, type)) {
      return false
    }
  }
  return true
}

function emptyLoadout(loadout) {
  let sel = IUniversal.energyLoadout[loadout]

  for (let x in IUniversal.energyUpgrades) {
    if (!(f(sel[x]).equals(f(0)))) {
      return false
    }
  }
  return true
}

function energyLoadout(action, loadout) {
  let sel = IUniversal.energyLoadout[loadout]

  if (action == "load" && !emptyLoadout(loadout)) {
    for (let x in IUniversal.energyUpgrades) {
      IUniversal.energyUpgrades[x].level = f(sel[x])
    }
    IUniversal.energyLoadoutSel = loadout
    IUniversal.ascensionPointMax = f(IUniversal.universe).minus(f(1))
    IUniversal.ascensionPoint = f(sel.ascensionPoints).add((f(IUniversal.ascensionPointMax).minus(f(sel.maximumAscensionPoints))))
  }

  if (action == "save") {
    for (let x in IUniversal.energyUpgrades) {
      sel[x] = f(IUniversal.energyUpgrades[x].level)
    }

    sel.maximumAscensionPoints = f(IUniversal.ascensionPointMax)
    sel.ascensionPoints = f(IUniversal.ascensionPointMax).minus(f(IUniversal.ascensionPointMax).minus(f(IUniversal.ascensionPoint)))
  }
}

function visualProgress() {

  var locator = IProgress.actualProgress;

  var checkMetod = `p${locator}Check`

  if (IProgressIn.progress[checkMetod] != null) {

    if (IProgressIn.progress[checkMetod]() == true) {

      IProgress.actualProgress += 1
    }

    update("progressInfo", `<div>[${IProgressIn.progress["p" + locator + "Progress"]()}]    ${IProgressIn.progress["p" + locator]}</div>`)
  } else {
    locator = IProgress.actualProgress - 1;
    IProgress.actualProgress = IProgress.actualProgress - 1

    checkMetod = `p${locator}Check`
    update("progressInfo", `<div>[${IProgressIn.progress["p" + locator + "Progress"]()}]    ${IProgressIn.progress["p" + locator]}</div>`)
  }
}

function visualAutomation() {
  //TRAINING

  update("fp3_content1_8_auto1_title", `<span class="boldBlackBorder">TRAINING</span>`)
  update("fp3_content1_8_auto1_1", `Maximum active Trainings: ${format(f(ISelUpgrade.group.group1.maxNum), 0)}`)

  if (f(IUniversal.automation.automation1.level).equals(f(IUniversalIn.automation.automation1.maxLevel))) {
    update("fp3_content1_8_auto1_b1", `<div class="noClick">MAX</div>`)
    document.getElementById(`fp3_content1_8_auto1_b1`).style.backgroundColor = "#004526"

  } else {
    update("fp3_content1_8_auto1_b1", `<div class="noClick">UPGRADE<div>
                                     <div class="noClick">Universal Shards: ${format(f(IUniversalIn.automation.automation1.price))}</div>`)

    if (checkBuy(IUniversalIn.automation.automation1.priceIdentity, IUniversalIn.automation.automation1.price, "uniChallenger")) {
      document.getElementById(`fp3_content1_8_auto1_b1`).style.backgroundColor = "#004526"
    } else {
      document.getElementById(`fp3_content1_8_auto1_b1`).style.backgroundColor = "#660000"
    }
  }

  //HUNTING
  update("fp3_content1_8_auto2_title", `<span class="boldBlackBorder">HUNTING</span>`)
  update("fp3_content1_8_auto2_1", `Autobuy Hunts (Doesnt consume Essence)`)

  if (IUniversal.automation.automation2.unlocked) {
    if (IUniversal.automation.automation2.active) {
      document.getElementById(`fp3_content1_8_auto2_b1`).style.backgroundColor = "#004526"
      update("fp3_content1_8_auto2_b1", `<div class="noClick">ON</div>`)
    } else {
      document.getElementById(`fp3_content1_8_auto2_b1`).style.backgroundColor = "#660000"
      update("fp3_content1_8_auto2_b1", `<div class="noClick">OFF</div>`)
    }
  } else {
    update("fp3_content1_8_auto2_b1", `<div class="noClick">UPGRADE<div>
                                     <div class="noClick">Universal Shards: ${format(f(IUniversalIn.automation.automation2.price))}</div>`)

    if (checkBuy(IUniversalIn.automation.automation2.priceIdentity, IUniversalIn.automation.automation2.price, "uniChallenger")) {
      document.getElementById(`fp3_content1_8_auto2_b1`).style.backgroundColor = "#004526"
    } else {
      document.getElementById(`fp3_content1_8_auto2_b1`).style.backgroundColor = "#660000"
    }
  }

  update("fp3_content1_8_auto3_1", `Autobuy hunting upgrades (doesnt consume Essence)`)

  if (IUniversal.automation.automation3.unlocked) {
    if (IUniversal.automation.automation3.active) {
      document.getElementById(`fp3_content1_8_auto3_b1`).style.backgroundColor = "#004526"
      update("fp3_content1_8_auto3_b1", `<div class="noClick">ON</div>`)
    } else {
      document.getElementById(`fp3_content1_8_auto3_b1`).style.backgroundColor = "#660000"
      update("fp3_content1_8_auto3_b1", `<div class="noClick">OFF</div>`)
    }
  } else {
    update("fp3_content1_8_auto3_b1", `<div class="noClick">UPGRADE<div>
                                     <div class="noClick">Universal Shards: ${format(f(IUniversalIn.automation.automation3.price))}</div>`)

    if (checkBuy(IUniversalIn.automation.automation3.priceIdentity, IUniversalIn.automation.automation3.price, "uniChallenger")) {
      document.getElementById(`fp3_content1_8_auto3_b1`).style.backgroundColor = "#004526"
    } else {
      document.getElementById(`fp3_content1_8_auto3_b1`).style.backgroundColor = "#660000"
    }
  }

  //CHALLENGER

  update("fp3_content1_8_auto4_title", `<span class="boldBlackBorder">CHALLENGER</span>`)
  update("fp3_content1_8_auto4_1", `<div class="centerDiv">Auto challenge Challenger</div>
                                    <div class="centerDiv">(Only if your damage and life is highter than the challenger's)</div>`)

  if (IUniversal.automation.automation4.unlocked) {
    if (IUniversal.automation.automation4.active) {
      document.getElementById(`fp3_content1_8_auto4_b1`).style.backgroundColor = "#004526"
      update("fp3_content1_8_auto4_b1", `<div class="noClick">ON</div>`)
    } else {
      document.getElementById(`fp3_content1_8_auto4_b1`).style.backgroundColor = "#660000"
      update("fp3_content1_8_auto4_b1", `<div class="noClick">OFF</div>`)
    }
  } else {
    update("fp3_content1_8_auto4_b1", `<div class="noClick">UPGRADE<div>
                                     <div class="noClick">Universal Shards: ${format(f(IUniversalIn.automation.automation4.price))}</div>`)

    if (checkBuy(IUniversalIn.automation.automation4.priceIdentity, IUniversalIn.automation.automation4.price, "uniChallenger")) {
      document.getElementById(`fp3_content1_8_auto4_b1`).style.backgroundColor = "#004526"
    } else {
      document.getElementById(`fp3_content1_8_auto4_b1`).style.backgroundColor = "#660000"
    }
  }

  //UNIVERSAL CHALLENGER

  update("fp3_content1_8_auto6_title", `<span class="boldBlackBorder">UNIVERSAL CHALLENGER</span>`)
  update("fp3_content1_8_auto6_1", `<div class="centerDiv">When you fight Universal Challenger, start closer to your maximum Universal Challenger </div>`)

  if (IUniversal.automation.automation6.active) {
    document.getElementById(`fp3_content1_8_auto6_b1`).style.backgroundColor = "#004526"
    update("fp3_content1_8_auto6_b1", `<div class="noClick">ON</div>`)
  } else {
    document.getElementById(`fp3_content1_8_auto6_b1`).style.backgroundColor = "#660000"
    update("fp3_content1_8_auto6_b1", `<div class="noClick">OFF</div>`)
  }

  if (f(IUniversal.automation.automation6.level).equals(f(IUniversalIn.automation.automation6.maxLevel))) {
    update("fp3_content1_8_auto6_b1", `<div class="noClick">MAX</div>`)
    document.getElementById(`fp3_content1_8_auto6_b1`).style.backgroundColor = "#004526"
  } else {
    update("fp3_content1_8_auto6_b1", `<div class="noClick">UPGRADE<div>
                                     <div class="noClick">Universal Shards: ${format(f(IUniversalIn.automation.automation6.price))}</div>`)

    if (checkBuy(IUniversalIn.automation.automation6.priceIdentity, IUniversalIn.automation.automation5.price, "uniChallenger")) {
      document.getElementById(`fp3_content1_8_auto6_b1`).style.backgroundColor = "#004526"
    } else {
      document.getElementById(`fp3_content1_8_auto6_b1`).style.backgroundColor = "#660000"
    }
  }

  update("fp3_content1_8_auto6_b2", `<div class="noClick"><</div>`)
  update("fp3_content1_8_auto6_b3", `<div class="noClick">></div>`)

  var op = `option${IUniversal.automation.automation6.selOption}`
  update("fp3_content1_8_auto6_2", `<div class="centerDiv">${IUniversalIn.automation.automation6[op]}</div>`)


  //ASCENSION

  update("fp3_content1_8_auto5_title", `<span class="boldBlackBorder">ASCENSION</span>`)
  update("fp3_content1_8_auto5_1", `<div class="centerDiv">Auto Ascend</div>
                                    <div class="centerDiv">(Doesnt Reset Anything)</div>
                                    <div class="centerDiv">You Can Ascend Without Resetting, Permanently</div>`)

  if (IUniversal.automation.automation5.unlocked) {
    if (IUniversal.automation.automation5.active) {
      document.getElementById(`fp3_content1_8_auto5_b1`).style.backgroundColor = "#004526"
      update("fp3_content1_8_auto5_b1", `<div class="noClick">ON</div>`)
    } else {
      document.getElementById(`fp3_content1_8_auto5_b1`).style.backgroundColor = "#660000"
      update("fp3_content1_8_auto5_b1", `<div class="noClick">OFF</div>`)
    }
  } else {
    update("fp3_content1_8_auto5_b1", `<div class="noClick">UPGRADE<div>
                                     <div class="noClick">Universal Shards: ${format(f(IUniversalIn.automation.automation5.price))}</div>`)

    if (checkBuy(IUniversalIn.automation.automation5.priceIdentity, IUniversalIn.automation.automation5.price, "uniChallenger")) {
      document.getElementById(`fp3_content1_8_auto5_b1`).style.backgroundColor = "#004526"
    } else {
      document.getElementById(`fp3_content1_8_auto5_b1`).style.backgroundColor = "#660000"
    }
  }

  //ATTRIBUTES

  update("fp3_content1_8_auto7_title", `<span class="boldBlackBorder">ATTRIBUTES</span>`)

  //CRITICAL
  update("fp3_content1_8_auto7_1", `Autobuy critical (Doesnt consume Universal Shards)`)

  if (IUniversal.automation.automation7.unlocked) {
    if (IUniversal.automation.automation7.active) {
      document.getElementById(`fp3_content1_8_auto7_b1`).style.backgroundColor = "#004526"
      update("fp3_content1_8_auto7_b1", `<div class="noClick">ON</div>`)
    } else {
      document.getElementById(`fp3_content1_8_auto7_b1`).style.backgroundColor = "#660000"
      update("fp3_content1_8_auto7_b1", `<div class="noClick">OFF</div>`)
    }
  } else {
    update("fp3_content1_8_auto7_b1", `<div class="noClick">UPGRADE<div>
                                     <div class="noClick">Universal Shards: ${format(f(IUniversalIn.automation.automation7.price))}</div>`)

    if (checkBuy(IUniversalIn.automation.automation7.priceIdentity, IUniversalIn.automation.automation7.price, "uniChallenger")) {
      document.getElementById(`fp3_content1_8_auto7_b1`).style.backgroundColor = "#004526"
    } else {
      document.getElementById(`fp3_content1_8_auto7_b1`).style.backgroundColor = "#660000"
    }
  }


  //LIFE REGENERATION

  update("fp3_content1_8_auto8_1", `Autobuy life regeneration (Doesnt consume Universal Shards)`)

  if (IUniversal.automation.automation8.unlocked) {
    if (IUniversal.automation.automation8.active) {
      document.getElementById(`fp3_content1_8_auto8_b1`).style.backgroundColor = "#004526"
      update("fp3_content1_8_auto8_b1", `<div class="noClick">ON</div>`)
    } else {
      document.getElementById(`fp3_content1_8_auto8_b1`).style.backgroundColor = "#660000"
      update("fp3_content1_8_auto8_b1", `<div class="noClick">OFF</div>`)
    }
  } else {
    update("fp3_content1_8_auto8_b1", `<div class="noClick">UPGRADE<div>
                                     <div class="noClick">Universal Shards: ${format(f(IUniversalIn.automation.automation8.price))}</div>`)

    if (checkBuy(IUniversalIn.automation.automation8.priceIdentity, IUniversalIn.automation.automation8.price, "uniChallenger")) {
      document.getElementById(`fp3_content1_8_auto8_b1`).style.backgroundColor = "#004526"
    } else {
      document.getElementById(`fp3_content1_8_auto8_b1`).style.backgroundColor = "#660000"
    }
  }

  //DEFENCE PENETRATION

  update("fp3_content1_8_auto9_1", `Autobuy defence penetration (Doesnt consume Universal Nodes)`)

  if (IUniversal.automation.automation9.unlocked) {
    if (IUniversal.automation.automation9.active) {
      document.getElementById(`fp3_content1_8_auto9_b1`).style.backgroundColor = "#004526"
      update("fp3_content1_8_auto9_b1", `<div class="noClick">ON</div>`)
    } else {
      document.getElementById(`fp3_content1_8_auto9_b1`).style.backgroundColor = "#660000"
      update("fp3_content1_8_auto9_b1", `<div class="noClick">OFF</div>`)
    }
  } else {
    update("fp3_content1_8_auto9_b1", `<div class="noClick">UPGRADE<div>
                                     <div class="noClick">Universal Shards: ${format(f(IUniversalIn.automation.automation9.price))}</div>`)

    if (checkBuy(IUniversalIn.automation.automation9.priceIdentity, IUniversalIn.automation.automation9.price, "uniChallenger")) {
      document.getElementById(`fp3_content1_8_auto9_b1`).style.backgroundColor = "#004526"
    } else {
      document.getElementById(`fp3_content1_8_auto9_b1`).style.backgroundColor = "#660000"
    }
  }

  //DEFENCE

  update("fp3_content1_8_auto10_1", `Autobuy defence (Doesnt consume Universal Nodes)`)

  if (IUniversal.automation.automation10.unlocked) {
    if (IUniversal.automation.automation10.active) {
      document.getElementById(`fp3_content1_8_auto10_b1`).style.backgroundColor = "#004526"
      update("fp3_content1_8_auto10_b1", `<div class="noClick">ON</div>`)
    } else {
      document.getElementById(`fp3_content1_8_auto10_b1`).style.backgroundColor = "#660000"
      update("fp3_content1_8_auto10_b1", `<div class="noClick">OFF</div>`)
    }
  } else {
    update("fp3_content1_8_auto10_b1", `<div class="noClick">UPGRADE<div>
                                     <div class="noClick">Universal Shards: ${format(f(IUniversalIn.automation.automation10.price))}</div>`)

    if (checkBuy(IUniversalIn.automation.automation10.priceIdentity, IUniversalIn.automation.automation10.price, "uniChallenger")) {
      document.getElementById(`fp3_content1_8_auto10_b1`).style.backgroundColor = "#004526"
    } else {
      document.getElementById(`fp3_content1_8_auto10_b1`).style.backgroundColor = "#660000"
    }
  }

  //LIFE STEAL

  update("fp3_content1_8_auto11_1", `Autobuy life steal (Doesnt consume Universal Cores)`)

  if (IUniversal.automation.automation11.unlocked) {
    if (IUniversal.automation.automation11.active) {
      document.getElementById(`fp3_content1_8_auto11_b1`).style.backgroundColor = "#004526"
      update("fp3_content1_8_auto11_b1", `<div class="noClick">ON</div>`)
    } else {
      document.getElementById(`fp3_content1_8_auto11_b1`).style.backgroundColor = "#660000"
      update("fp3_content1_8_auto11_b1", `<div class="noClick">OFF</div>`)
    }
  } else {
    update("fp3_content1_8_auto11_b1", `<div class="noClick">UPGRADE<div>
                                     <div class="noClick">Universal Shards: ${format(f(IUniversalIn.automation.automation11.price))}</div>`)

    if (checkBuy(IUniversalIn.automation.automation11.priceIdentity, IUniversalIn.automation.automation11.price, "uniChallenger")) {
      document.getElementById(`fp3_content1_8_auto11_b1`).style.backgroundColor = "#004526"
    } else {
      document.getElementById(`fp3_content1_8_auto11_b1`).style.backgroundColor = "#660000"
    }
  }

  //SHIELD

  update("fp3_content1_8_auto12_1", `Autobuy shield (Doesnt consume Universal Cores)`)

  if (IUniversal.automation.automation12.unlocked) {
    if (IUniversal.automation.automation12.active) {
      document.getElementById(`fp3_content1_8_auto12_b1`).style.backgroundColor = "#004526"
      update("fp3_content1_8_auto12_b1", `<div class="noClick">ON</div>`)
    } else {
      document.getElementById(`fp3_content1_8_auto12_b1`).style.backgroundColor = "#660000"
      update("fp3_content1_8_auto12_b1", `<div class="noClick">OFF</div>`)
    }
  } else {
    update("fp3_content1_8_auto12_b1", `<div class="noClick">UPGRADE<div>
                                     <div class="noClick">Universal Shards: ${format(f(IUniversalIn.automation.automation12.price))}</div>`)

    if (checkBuy(IUniversalIn.automation.automation12.priceIdentity, IUniversalIn.automation.automation12.price, "uniChallenger")) {
      document.getElementById(`fp3_content1_8_auto12_b1`).style.backgroundColor = "#004526"
    } else {
      document.getElementById(`fp3_content1_8_auto12_b1`).style.backgroundColor = "#660000"
    }
  }

  //HUNTING EVOLUTION
  update("fp3_content1_8_auto13_title", `<span class="boldBlackBorder">HUNTING EVOLUTION</span>`)
  update("fp3_content1_8_auto13_1", `Autobuy hunting evolutions (Doesnt consume Universal Shards, Nodes, Cores)`)

  if (IUniversal.automation.automation13.unlocked) {
    if (IUniversal.automation.automation13.active) {
      document.getElementById(`fp3_content1_8_auto13_b1`).style.backgroundColor = "#004526"
      update("fp3_content1_8_auto13_b1", `<div class="noClick">ON</div>`)
    } else {
      document.getElementById(`fp3_content1_8_auto13_b1`).style.backgroundColor = "#660000"
      update("fp3_content1_8_auto13_b1", `<div class="noClick">OFF</div>`)
    }
  } else {
    update("fp3_content1_8_auto13_b1", `<div class="noClick">UPGRADE<div>
                                     <div class="noClick">Universal Shards: ${format(f(IUniversalIn.automation.automation13.price))}</div>`)

    if (checkBuy(IUniversalIn.automation.automation13.priceIdentity, IUniversalIn.automation.automation13.price, "uniChallenger")) {
      document.getElementById(`fp3_content1_8_auto13_b1`).style.backgroundColor = "#004526"
    } else {
      document.getElementById(`fp3_content1_8_auto13_b1`).style.backgroundColor = "#660000"
    }
  }

  //FIRE

  update("fp3_content1_8_auto14_title", `<span class="boldBlackBorder">FIRE</span>`)
  update("fp3_content1_8_auto14_1", `Get fire Size automatically`)

  if (IUniversal.automation.automation14.unlocked) {
    if (IUniversal.automation.automation14.active) {
      document.getElementById(`fp3_content1_8_auto14_b1`).style.backgroundColor = "#004526"
      update("fp3_content1_8_auto14_b1", `<div class="noClick">ON</div>`)
    } else {
      document.getElementById(`fp3_content1_8_auto14_b1`).style.backgroundColor = "#660000"
      update("fp3_content1_8_auto14_b1", `<div class="noClick">OFF</div>`)
    }
  } else {
    update("fp3_content1_8_auto14_b1", `<div class="noClick">UPGRADE<div>
                                     <div class="noClick">Universal Shards: ${format(f(IUniversalIn.automation.automation14.price))}</div>`)

    if (checkBuy(IUniversalIn.automation.automation14.priceIdentity, IUniversalIn.automation.automation14.price, "uniChallenger")) {
      document.getElementById(`fp3_content1_8_auto14_b1`).style.backgroundColor = "#004526"
    } else {
      document.getElementById(`fp3_content1_8_auto14_b1`).style.backgroundColor = "#660000"
    }
  }
}
//VALUTE

function fullSetter(type) {
  if (!waiting || type == "off") {
    valuesSetter()
    valuesSetter()
    valuesSetterDinamic(type)
  }
}


function valuesSetter(type) {

  //Assign Group

  //group1
  var num = 0;

  if (ITraining.base.base1.active) { num += 1 }
  if (ITraining.base.base2.active) { num += 1 }
  if (ITraining.base.base3.active) { num += 1 }
  if (ITraining.base.base4.active) { num += 1 }

  if (f(num).gt(f(ISelUpgrade.group.group1.maxNum))) { num = ISelUpgrade.group.group1.maxNum }

  ISelUpgrade.group.group1.num = num

  //group2
  var num = 0;

  if (IUniversal.fireTree.node41.active) { num += 1 }
  if (IUniversal.fireTree.node42.active) { num += 1 }
  if (IUniversal.fireTree.node43.active) { num += 1 }
  if (IUniversal.fireTree.node44.active) { num += 1 }

  if (f(num).gt(f(ISelUpgrade.group.group2.maxNum))) { num = ISelUpgrade.group.group2.maxNum }

  ISelUpgrade.group.group2.num = num

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
  var base1_2 = IFightIn.challengerRewards.reward1.effect

  if (f(ITraining.base.base3.tot).gte(f(1))) {
    var base1_3 = ITraining.base.base3.tot;
  }
  else {
    base1_3 = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade1.active) {
    var base1_4 = f(IUniversalIn.energyUpgrades.upgrade1.effect);
  }
  else {
    base1_4 = f(0)
  }

  if (IUniversal.energyUpgrades.upgrade3.active) {
    var base1_5 = f(IUniversalIn.energyUpgrades.upgrade3.effect);
  }
  else {
    base1_5 = f(1)
  }

  if (IUniversal.attributes.attributeBonus3.active) {
    var base1_6 = f(IUniversalIn.attributes.attributeBonus3.effect)
  } else {
    var base1_6 = f(1)
  }

  if (IUniversalIn.potionEffects.effect1.activeValue) {
    var base1_7 = f(IUniversalIn.potionEffects.effect1.activeValue)
  } else {
    var base1_7 = f(1)
  }

  ITrainingIn.base.base1.prod = (f(0.2).mul(f(base1_2)).add(f(base1_4))).mul(f(base1_3)).mul(f(base1_5)).mul(f(base1_6)).mul(f(base1_7));
  ITraining.base.base1.level = f(ITraining.base.base1.level);
  ITrainingIn.base.base1.description = `<span class="boldBlackBorder">${format(f(ITraining.base.base1.tot), 2)}</span>`


  //life training
  var base2_2 = IFightIn.challengerRewards.reward1.effect

  if (f(ITraining.base.base3.tot).gte(f(1))) {
    var base1_4 = ITraining.base.base3.tot;
  }
  else {
    ITraining.base.base3.tot = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade6.active) {
    var base1_5 = IUniversalIn.energyUpgrades.upgrade6.effect;
  }
  else {
    base1_5 = f(0)
  }

  if (IUniversal.energyUpgrades.upgrade7.active) {
    var lifeTraining6 = IUniversalIn.energyUpgrades.upgrade7.effect;
  }
  else {
    lifeTraining6 = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade8.active) {
    var lifeTraining7 = IUniversalIn.energyUpgrades.upgrade8.effect;
  }
  else {
    lifeTraining7 = f(1)
  }

  if (IUniversal.attributes.attributeBonus3.active) {
    var lifeTraining8 = f(IUniversalIn.attributes.attributeBonus3.effect)
  } else {
    var lifeTraining8 = f(1)
  }

  if (IUniversalIn.potionEffects.effect2.activeValue) {
    var lifeTraining9 = f(IUniversalIn.potionEffects.effect2.activeValue)
  } else {
    var lifeTraining9 = f(1)
  }

  ITrainingIn.base.base2.prod = (f(1).mul(f(base2_2)).add(f(base1_5))).mul(f(base1_4)).mul(f(lifeTraining6)).mul(f(lifeTraining7)).mul(f(lifeTraining8)).mul(f(lifeTraining9));
  ITraining.base.base2.level = f(ITraining.base.base2.level);
  ITrainingIn.base.base2.description = `<span class="boldBlackBorder">${format(f(ITraining.base.base2.tot), 2)}</span>`


  //Will training

  var base3_1 = IFightIn.challengerRewards.reward2.effect

  if (IUniversal.attributes.attributeBonus4.active) {
    var base3_2 = f(IUniversalIn.attributes.attributeBonus4.effect)
  } else {
    var base3_2 = f(1)
  }

  if (IUniversalIn.potionEffects.effect9.activeValue) {
    var base3_3 = f(IUniversalIn.potionEffects.effect9.activeValue)
  } else {
    var base3_3 = f(1)
  }


  ITrainingIn.base.base3.prod = f(0.01).mul(f(base3_1)).mul(f(base3_2)).mul(f(base3_3))
  ITraining.base.base3.level = f(ITraining.base.base3.level);
  ITrainingIn.base.base3.description = `Physical Training ×<span class="boldBlackBorder">${format(f(ITraining.base.base3.tot), 2)}</span>`

  //Insight training

  var base4_1 = IFightIn.challengerRewards.reward2.effect

  if (IUniversal.attributes.attributeBonus4.active) {
    var base4_2 = f(IUniversalIn.attributes.attributeBonus4.effect)
  } else {
    var base4_2 = f(1)
  }

  if (IUniversalIn.potionEffects.effect10.activeValue) {
    var base4_3 = f(IUniversalIn.potionEffects.effect10.activeValue)
  } else {
    var base4_3 = f(1)
  }

  ITrainingIn.base.base4.prod = f(0.01).mul((base4_1)).mul(f(base4_2)).mul(f(base4_3));
  ITraining.base.base4.level = f(ITraining.base.base4.level);
  ITrainingIn.base.base4.description = `Essence/s ×<span class="boldBlackBorder">${format(f(ITraining.base.base4.tot), 2)}</span>`


  //leftLife


  if (!IFight.youStats.onFight1) {
    IFight.youStats.leftLife = f(IFight.youStats.life)
    IFight.onFightStats.fightMulti1 = f(1)

  }

  if (!IFight.youStats.onFight2) {
    IFight.youStats.leftLife2 = f(IFight.youStats.life)
    IFight.onFightStats.fightMulti2 = f(1)

  }

  //CHALLENGER

  //BASE CHALLENGER

  //name

  IFightIn.challengers.baseChallenger.name = "Challenger"

  //damage

  var cDamage1 = f(IFight.challengers.baseChallenger.level)

  var cDamage2 = cDamage1.dividedBy(5).floor()

  if (IUniversal.energyUpgrades.upgrade16.active) {
    var cDamage3 = IUniversalIn.energyUpgrades.upgrade16.effect;
  }
  else {
    cDamage3 = f(1)
  }

  var cDamage4 = cDamage1.dividedBy(10).floor()

  if (IUniversalIn.potionEffects.effect17.activeValue) {
    var cDamage5 = f(IUniversalIn.potionEffects.effect17.activeValue);
  }
  else {
    cDamage5 = f(1)
  }

  IFightIn.challengers.baseChallenger.damage = ((f(1).mul(((f(5).add(cDamage2).add(f(cDamage4))).pow((cDamage1).minus(f(1)))))).dividedBy(f(cDamage3).mul(f(cDamage5))))

  //life

  var cLife1 = f(IFight.challengers.baseChallenger.level)

  var cLife3 = cLife1.dividedBy(5).floor()

  if (IUniversal.energyUpgrades.upgrade17.active) {
    var cLife4 = IUniversalIn.energyUpgrades.upgrade17.effect;
  }
  else {
    cLife4 = f(1)
  }

  var cLife5 = cLife1.dividedBy(10).floor()

  if (IUniversalIn.potionEffects.effect18.activeValue) {
    var cLife6 = f(IUniversalIn.potionEffects.effect18.activeValue);
  }
  else {
    cLife6 = f(1)
  }

  IFightIn.challengers.baseChallenger.life = ((f(10).mul(((((f(5).add(f(cLife3)).add(f(cLife5))).pow(f(cLife1).minus(f(1)))))))).dividedBy(f(cLife4).mul(f(cLife6))))


  //leftLife

  if (!IFight.youStats.onFight1) {

    IFight.challengers.baseChallenger.leftLife = f(IFightIn.challengers.baseChallenger.life)
  }

  //Normal Challenger Max Level
  IFight.challengers.baseChallenger.level = f(IFight.challengers.baseChallenger.level)


  IFightIn.challengers.baseChallenger.maxLevel = f(9).add(f(IUniversal.universe))

  //challenger Rewards


  IFight.challengerRewards.reward1.level = f(IFight.challengerRewards.reward1.level)
  IFight.challengerRewards.reward2.level = f(IFight.challengerRewards.reward2.level)

  if (IFight.normalHuntingRewards.upgrade5.active) {
    var cReward = f(IFightIn.normalHuntingRewards.upgrade5.effect)
  } else {
    cReward = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade18.active) {
    var cReward2 = IUniversalIn.energyUpgrades.upgrade18.effect;
  }
  else {
    cReward2 = f(1)
  }

  IFightIn.challengerRewards.reward1.name = `Damage And Life Training ×<span class="boldBlackBorder">${format(f(IFightIn.challengerRewards.reward1.effect), 0)}</span>`
  IFightIn.challengerRewards.reward2.name = `Will And Insight Training ×<span class="boldBlackBorder">${format(f(IFightIn.challengerRewards.reward2.effect), 0)}</span>`

  IFightIn.challengerRewards.reward1.effect = (f(2).pow((f(IFight.challengerRewards.reward1.level)))).mul(f(cReward)).mul(f(cReward2))
  IFightIn.challengerRewards.reward2.effect = (f(2).pow((f(IFight.challengerRewards.reward2.level)))).mul(f(cReward)).mul(f(cReward2))
  //UNIVERSAL CHALLENGER

  //name

  IUniversalChallenger.challengers.universalChallenger.name = `Universal Challenger ${IUniversalChallenger.challengers.universalChallenger.level}`

  //level


  if (!IFight.youStats.onFight2) {
    IUniversalChallenger.challengers.universalChallenger.level = f(1)
  }


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

  if (IUniversal.energyUpgrades.upgrade19.active && !(IUniversalChallenger.universalChallengerChallenges.c2.active)) {
    var cDamage3 = IUniversalIn.energyUpgrades.upgrade19.effect;
  }
  else {
    cDamage3 = f(1)
  }

  if (IUniversalIn.potionEffects.effect19.activeValue) {
    var cDamage4 = f(IUniversalIn.potionEffects.effect19.activeValue);
  }
  else {
    cDamage4 = f(1)
  }


  IUniversalChallenger.challengers.universalChallenger.damage = ((f(7.2).add(cDamage2)).pow((cDamage1))).mul(f(cDamage3)).dividedBy(f(cDamage4))

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

  if (IUniversal.energyUpgrades.upgrade19.active && !(IUniversalChallenger.universalChallengerChallenges.c2.active)) {
    var cLife3 = IUniversalIn.energyUpgrades.upgrade19.effect;
  }
  else {
    cLife3 = f(1)
  }

  if (IUniversalIn.potionEffects.effect19.activeValue) {
    var cLife4 = f(IUniversalIn.potionEffects.effect19.activeValue);
  }
  else {
    cLife4 = f(1)
  }

  IUniversalChallenger.challengers.universalChallenger.life = ((f(7.2).add(cLife2)).pow((cLife1))).mul(f(cLife3)).dividedBy(f(cLife4))


  //leftLife

  if (!IFight.youStats.onFight2) {

    IUniversalChallenger.challengers.universalChallenger.leftLife = f(IUniversalChallenger.challengers.universalChallenger.life)
  }

  //Universal Challenger Max Level 

  //Universal challenger Rewards

  IUniversalChallengerIn.universalChallengerRewards.reward1.name = `<div>Maximum Universal Challenger <span class="boldBlackBorder">${IUniversalChallenger.challengers.universalChallenger.maxLevel}</span></div><div><span class="boldBlackBorder">${format(sec(IUniversalChallenger.universalShardsProdBase), 1)}/s</span> Universal Shards</div>`

  IUniversalChallenger.universalChallengerRewards.reward1.level = f(IUniversalChallenger.challengers.universalChallenger.maxLevel)

  if (IUniversal.energyUpgrades.upgrade20.active) {
    var reward1 = IUniversalIn.energyUpgrades.upgrade20.effect;
  }
  else {
    reward1 = f(1)
  }

  IUniversalChallengerIn.universalChallengerRewards.reward1.effect = ((((f(10).pow((f(IUniversalChallenger.universalChallengerRewards.reward1.level)))))).minus(f(1))).mul(f(reward1))


  //UNIVERSAL CHALLENGER CHALLENGES


  IUniversalChallengerIn.universalChallengerChallenges.c1.name = `<div>Disable Hunting</div>`

  IUniversalChallenger.universalChallengerChallengesRewards.c1.level = f(IUniversalChallenger.universalChallengerChallengesRewards.c1.level)

  IUniversalChallenger.universalChallengerChallenges.c1.maxLevel = f(IUniversalChallenger.universalChallengerChallenges.c1.maxLevel)



  IUniversalChallengerIn.universalChallengerChallenges.c2.name = `<div>Only Training, harder Universal Challenger</div>`


  IUniversalChallenger.universalChallengerChallengesRewards.c2.level = f(IUniversalChallenger.universalChallengerChallengesRewards.c2.level)

  IUniversalChallenger.universalChallengerChallenges.c2.maxLevel = f(IUniversalChallenger.universalChallengerChallenges.c2.maxLevel)



  //UNIVERSAL CHALLENGER CHALLENGES REWARDS

  var sel = IUniversalChallenger.universalChallengerChallengesRewards.c1
  var sel2 = IUniversalChallengerIn.universalChallengerChallengesRewards.c1

  sel2.name = `<div>Maximum Universal Challenger <span class="boldBlackBorder">${sel.level}</span></div><div><span class="boldBlackBorder">${format(f(IUniversalChallenger.universalNodesProdBase))}/s</span> Universal Nodes</div>`

  if (f(IUniversalChallenger.universalChallengerChallengesRewards.c1.level).gte(f(1))) {
    sel2.effect = ((f(5).pow((f(IUniversalChallenger.universalChallengerChallengesRewards.c1.level)))))
  } else {
    sel2.effect = f(0)
  }

  var sel = IUniversalChallenger.universalChallengerChallengesRewards.c2
  var sel2 = IUniversalChallengerIn.universalChallengerChallengesRewards.c2


  sel2.name = `<div>Maximum Universal Challenger <span class="boldBlackBorder">${sel.level}</span></div><div><span class="boldBlackBorder">${format(f(IUniversalChallenger.universalCoresProdBase))}/s</span> Universal Cores</div>`

  if (f(IUniversalChallenger.universalChallengerChallengesRewards.c2.level).gte(f(1))) {
    sel2.effect = ((f(10).pow((f(IUniversalChallenger.universalChallengerChallengesRewards.c2.level)))))
  } else {
    sel2.effect = f(0)
  }

  //hunting

  //Hunt 1

  var sel = IFight.normalHunting.hunt1;
  var sel2 = IFightIn.normalHunting.hunt1;

  sel.level = f(sel.level);

  IFightIn.normalHunting.hunt1.showLevel = f(sel.level)

  if (IUniversal.huntEvolution.b1.active1) {
    var extraEffect2 = f(IUniversalIn.huntEvolution.b1.effect1);
  } else {
    extraEffect2 = f(1);
  }

  if (IUniversalIn.potionEffects.effect12.activeValue) {
    var extraEffect3 = f(IUniversalIn.potionEffects.effect12.activeValue);
  } else {
    extraEffect3 = f(1);
  }


  if (sel.active) {
    sel2.effect = (f(sel.level)).mul(f(1.1).mul(f(1).add(f(0.10).mul(f(sel.level))))).mul(f(extraEffect2)).mul(f(extraEffect3));
  } else {
    sel2.effect = f(0);
  }

  if (IUniversal.huntEvolution.b1.active2) {
    var extraEffect1 = f(IUniversalIn.huntEvolution.b1.effect2);
  } else {
    extraEffect1 = f(1);
  }

  if (IUniversalIn.potionEffects.effect11.activeValue) {
    var extraEffect2 = f(IUniversalIn.potionEffects.effect11.activeValue);
  } else {
    extraEffect2 = f(1);
  }

  if (f(sel.level).equals(f(0))) {
    sel2.price = f(0);
  } else {
    sel2.price = ((f(10).pow(1)).mul(f(1.2).pow(f(sel.level))).dividedBy(f(extraEffect1))).dividedBy(f(extraEffect2));
  }

  sel2.req = function () {
    if (IFight.youStats.damage != "NaN") {
      return f(IFight.youStats.damage).gte(f(0))
    }
  }

  sel2.reqDescription = "Reach 1e3 Damage to unlock next";

  if (f(sel.level).greaterThan(f(0))) {
    sel.active = true;
  }

  if (sel2.req()) {
    sel.unlocked = true;
  }

  // Hunt 2
  var sel = IFight.normalHunting.hunt2;
  var sel2 = IFightIn.normalHunting.hunt2;


  if (IUniversal.energyUpgrades.upgrade15.active) {
    var extraEffect1 = f(IFight.normalHunting.hunt1.level).mul(IUniversalIn.energyUpgrades.upgrade15.effect);
  } else {
    extraEffect1 = f(0);
  }

  sel2.showLevel = f(sel.level).add(f(extraEffect1))

  if (IUniversal.huntEvolution.b2.active1) {
    var extraEffect2 = f(IUniversalIn.huntEvolution.b2.effect1);
  } else {
    extraEffect2 = f(1);
  }

  if (IUniversalIn.potionEffects.effect12.activeValue) {
    var extraEffect3 = f(IUniversalIn.potionEffects.effect12.activeValue);
  } else {
    extraEffect3 = f(1);
  }

  sel.level = f(sel.level);

  if (sel.active) {
    sel2.effect = f(20).mul(f(sel.level).add(f(extraEffect1))).mul(f(1).add(f(0.15).mul(f(sel.level).add(f(extraEffect1))))).mul(f(extraEffect2)).mul(f(extraEffect3));
  } else {
    sel2.effect = f(0);
  }

  if (IUniversal.huntEvolution.b2.active2) {
    var extraEffect1 = f(IUniversalIn.huntEvolution.b2.effect2);
  } else {
    extraEffect1 = f(1);
  }

  if (IUniversalIn.potionEffects.effect11.activeValue) {
    var extraEffect2 = f(IUniversalIn.potionEffects.effect11.activeValue);
  } else {
    extraEffect2 = f(1);
  }


  sel2.price = (f(1).mul(f(10).pow(3)).mul(f(1.3).pow(f(1).add(f(sel.level)))).dividedBy(f(extraEffect1))).dividedBy(f(extraEffect2));

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

  if (f(sel.level).greaterThan(f(0))) {
    sel.active = true;
  }

  if (sel2.req()) {
    sel.unlocked = true;
  }

  // Hunt 3
  var sel = IFight.normalHunting.hunt3;
  var sel2 = IFightIn.normalHunting.hunt3;


  sel.level = f(sel.level);

  if (IUniversal.energyUpgrades.upgrade15.active) {
    var extraEffect1 = f(IFight.normalHunting.hunt2.level).mul(IUniversalIn.energyUpgrades.upgrade15.effect);
  } else {
    extraEffect1 = f(0);
  }

  sel2.showLevel = f(sel.level).add(f(extraEffect1))

  if (IUniversal.huntEvolution.b3.active1) {
    var extraEffect2 = f(IUniversalIn.huntEvolution.b3.effect1);
  } else {
    extraEffect2 = f(1);
  }

  if (IUniversalIn.potionEffects.effect12.activeValue) {
    var extraEffect3 = f(IUniversalIn.potionEffects.effect12.activeValue);
  } else {
    extraEffect3 = f(1);
  }


  if (sel.active) {
    sel2.effect = f(400).mul(f(sel.level).add(f(extraEffect1))).mul(f(1).add(f(0.20).mul(f(sel.level).add(f(extraEffect1))))).mul(f(extraEffect2)).mul(f(extraEffect3));
  } else {
    sel2.effect = f(0);
  }

  if (IUniversal.huntEvolution.b3.active2) {
    var extraEffect1 = f(IUniversalIn.huntEvolution.b3.effect2);
  } else {
    extraEffect1 = f(1);
  }

  if (IUniversalIn.potionEffects.effect11.activeValue) {
    var extraEffect2 = f(IUniversalIn.potionEffects.effect11.activeValue);
  } else {
    extraEffect2 = f(1);
  }


  sel2.price = (f(2).mul(f(10).pow(4)).mul(f(1.4).pow(f(1).add(f(sel.level)))).dividedBy(f(extraEffect1))).dividedBy(f(extraEffect2));

  sel2.req = function () {
    if (IFight.youStats.damage != "NaN") {
      return f(IFight.youStats.damage).gte(f(10).pow(f(4)))
    }
  }

  sel2.reqDescription = `
  <div class="width100">
    <div><i>Why suddenly every knight wants to duel me? Werent Challengers enought?</i></div>
    <div>Reach 1e4 Damage to unlock Knight  (${format(f(IFight.youStats.damage), 1)} / 1e4)</div>
  </div>`;

  if (f(sel.level).greaterThan(f(0))) {
    sel.active = true;
  }

  if (sel2.req()) {
    sel.unlocked = true;
  }

  // Hunt 4
  var sel = IFight.normalHunting.hunt4;
  var sel2 = IFightIn.normalHunting.hunt4;


  sel.level = f(sel.level);

  if (IUniversal.energyUpgrades.upgrade15.active) {
    var extraEffect1 = f(IFight.normalHunting.hunt3.level).mul(IUniversalIn.energyUpgrades.upgrade15.effect);
  } else {
    extraEffect1 = f(0);
  }

  sel2.showLevel = f(sel.level).add(f(extraEffect1))

  if (IUniversal.huntEvolution.b4.active1) {
    var extraEffect2 = f(IUniversalIn.huntEvolution.b4.effect1);
  } else {
    extraEffect2 = f(1);
  }

  if (IUniversalIn.potionEffects.effect12.activeValue) {
    var extraEffect3 = f(IUniversalIn.potionEffects.effect12.activeValue);
  } else {
    extraEffect3 = f(1);
  }

  if (sel.active) {
    sel2.effect = f(8000).mul(f(sel.level).add(f(extraEffect1))).mul(f(1).add(f(0.25).mul(f(sel.level).add(f(extraEffect1))))).mul(f(extraEffect2)).mul(f(extraEffect3));
  } else {
    sel2.effect = f(0);
  }

  if (IUniversal.huntEvolution.b4.active2) {
    var extraEffect1 = f(IUniversalIn.huntEvolution.b4.effect2);
  } else {
    extraEffect1 = f(1);
  }

  if (IUniversalIn.potionEffects.effect11.activeValue) {
    var extraEffect2 = f(IUniversalIn.potionEffects.effect11.activeValue);
  } else {
    extraEffect2 = f(1);
  }

  sel2.price = (f(1).mul(f(10).pow(7)).mul(f(1.5).pow(f(1).add(f(sel.level)))).dividedBy(f(extraEffect1))).dividedBy(f(extraEffect2));

  sel2.req = function () {
    if (IFight.youStats.damage != "NaN") {
      return f(IFight.youStats.damage).gte(f(10).pow(f(5)))
    }
  }


  sel2.reqDescription = `
  <div class="width100">
    <div><i>Demons have been meeting me, they tell me im the chosen</i></div>
    <div>Reach 1e5 Damage to unlock Demon  (${format(f(IFight.youStats.damage), 1)} / 1e5)</div>
  </div>`;

  if (f(sel.level).greaterThan(f(0))) {
    sel.active = true;
  }

  if (sel2.req()) {
    sel.unlocked = true;
  }

  // Hunt 5
  var sel = IFight.normalHunting.hunt5;
  var sel2 = IFightIn.normalHunting.hunt5;

  sel.level = f(sel.level);

  var hunt1;
  if (IUniversal.energyUpgrades.upgrade13.active) {
    hunt1 = f(IUniversalIn.energyUpgrades.upgrade13.effect);
  } else {
    hunt1 = f(1);
  }

  if (IUniversal.energyUpgrades.upgrade15.active) {
    var extraEffect1 = f(IFight.normalHunting.hunt3.level).mul(IUniversalIn.energyUpgrades.upgrade15.effect);
  } else {
    extraEffect1 = f(0);
  }

  sel2.showLevel = f(sel.level).add(f(extraEffect1))

  if (IUniversal.huntEvolution.b5.active1) {
    var extraEffect2 = f(IUniversalIn.huntEvolution.b5.effect1);
  } else {
    extraEffect2 = f(1);
  }

  if (IUniversalIn.potionEffects.effect12.activeValue) {
    var extraEffect3 = f(IUniversalIn.potionEffects.effect12.activeValue);
  } else {
    extraEffect3 = f(1);
  }

  if (sel.active) {
    sel2.effect = f(160000).mul(f(sel.level).add(f(extraEffect1))).mul((f(1).add(f(0.30)).mul(f(sel.level).add(f(extraEffect1))))).mul(f(extraEffect2)).mul(f(hunt1)).mul(f(extraEffect3));
  } else {
    sel2.effect = f(0);
  }

  if (IUniversal.huntEvolution.b5.active2) {
    var extraEffect1 = f(IUniversalIn.huntEvolution.b5.effect2);
  } else {
    extraEffect1 = f(1);
  }

  if (IUniversalIn.potionEffects.effect11.activeValue) {
    var extraEffect2 = f(IUniversalIn.potionEffects.effect11.activeValue);
  } else {
    extraEffect2 = f(1);
  }

  sel2.price = (f(5).mul(f(10).pow(8)).mul(f(1.6).pow(f(1).add(f(sel.level)))).dividedBy(f(extraEffect1))).dividedBy(f(extraEffect2));

  sel2.req = function () {

    if (IFight.youStats.damage != "NaN") {
      return f(IFight.youStats.damage).gte(f(10).pow(f(6)))
    }
  }



  sel2.reqDescription = `
  <div class="width100">
    <div><i>Fortunately no wyvern knights, i've already dealt with the knights alone</i></div>
    <div>Reach 1e6 Damage to unlock Wyvern  (${format(f(IFight.youStats.damage), 1)} / 1e6)</div>
  </div>`;

  if (f(sel.level).greaterThan(f(0))) {
    sel.active = true;
  }

  if (sel2.req()) {
    sel.unlocked = true;
  }

  //huntingRewards

  //HUNT REWARD 1

  IFightIn.normalHuntingRewards.upgrade1.name = `Damage ×<span class="boldBlackBorder">${format(f(IFightIn.normalHuntingRewards.upgrade1.effect), 0)}</span>`

  IFight.normalHuntingRewards.upgrade1.level = f(IFight.normalHuntingRewards.upgrade1.level)

  if (IUniversal.energyUpgrades.upgrade14.active) {
    var extraLevel1 = f(Decimal.log10(f(IFight.normalHunting.hunt1.level).mul(f(IUniversalIn.energyUpgrades.upgrade14.effect)))).floor()
    if (f(extraLevel1).lt(f(0))) {
      extraLevel1 = f(0)
    }
  } else {
    extraLevel1 = f(0)
  }

  IFightIn.normalHuntingRewards.upgrade1.showLevel = f(IFight.normalHuntingRewards.upgrade1.level).add(f(extraLevel1))

  IFightIn.normalHuntingRewards.upgrade1.effect = f(2).pow(f(IFight.normalHuntingRewards.upgrade1.level).add(f(extraLevel1)))

  if (IUniversal.huntEvolution.b1.active3) {
    var extraEffect1 = f(IUniversalIn.huntEvolution.b1.effect3);
  } else {
    extraEffect1 = f(1);
  }

  if (IUniversalIn.potionEffects.effect13.activeValue) {
    var extraEffect2 = f(IUniversalIn.potionEffects.effect13.activeValue);
  } else {
    extraEffect2 = f(1);
  }

  IFightIn.normalHuntingRewards.upgrade1.price = ((f(10).mul(f(10).pow(f(IFight.normalHuntingRewards.upgrade1.level).add(f(1))))).dividedBy(f(extraEffect1))).dividedBy(f(extraEffect2))

  IFightIn.normalHuntingRewards.upgrade1.reqDescription = `
  <div class="width100">
    <div><i class="centerDiv">Slime cores when Ingested makes me stronger</i></div>
    <div class="centerDiv">Reach 10 ${IFightIn.normalHunting.hunt1.name}  (${format(f(IFight.normalHunting.hunt1.level), 0)} / 10)</div>
  </div>`;

  if (f(IFight.normalHuntingRewards.upgrade1.level).greaterThan(f(0))) {
    IFight.normalHuntingRewards.upgrade1.active = true;
  }


  //HUNT REWARD 2

  IFightIn.normalHuntingRewards.upgrade2.name = `Life ×<span class="boldBlackBorder">${format(f(IFightIn.normalHuntingRewards.upgrade2.effect), 0)}</span>`

  IFight.normalHuntingRewards.upgrade2.level = f(IFight.normalHuntingRewards.upgrade2.level)

  if (IUniversal.energyUpgrades.upgrade15.active) {
    var extraEffect1 = f(IFight.normalHunting.hunt1.level).mul(IUniversalIn.energyUpgrades.upgrade15.effect);
  } else {
    extraEffect1 = f(0);
  }

  if (IUniversal.energyUpgrades.upgrade14.active) {
    var extraLevel1 = f(Decimal.log10((f(IFight.normalHunting.hunt2.level).add(f(extraEffect1))).mul(f(IUniversalIn.energyUpgrades.upgrade14.effect)))).floor()
    if (f(extraLevel1).lt(f(0))) {
      extraLevel1 = f(0)
    }
  } else {
    extraLevel1 = f(0)
  }

  IFightIn.normalHuntingRewards.upgrade2.showLevel = f(IFight.normalHuntingRewards.upgrade2.level).add(f(extraLevel1))


  IFightIn.normalHuntingRewards.upgrade2.effect = f(5).pow(f(IFight.normalHuntingRewards.upgrade2.level).add(f(extraLevel1)))

  if (IUniversal.huntEvolution.b2.active3) {
    var extraEffect1 = f(IUniversalIn.huntEvolution.b2.effect3);
  } else {
    extraEffect1 = f(1);
  }

  if (IUniversalIn.potionEffects.effect13.activeValue) {
    var extraEffect2 = f(IUniversalIn.potionEffects.effect13.activeValue);
  } else {
    extraEffect2 = f(1);
  }


  IFightIn.normalHuntingRewards.upgrade2.price = ((f(200).mul(f(100).pow(f(IFight.normalHuntingRewards.upgrade2.level).add(f(1))))).dividedBy(f(extraEffect1))).dividedBy(f(extraEffect2))

  IFightIn.normalHuntingRewards.upgrade2.reqDescription = `
  <div class="width100">
    <div><i class="centerDiv">Understanding zombies life forms makes me able inflict curses on my enemies! Am i evil?</i></div>
    <div class="centerDiv">Reach 10 ${IFightIn.normalHunting.hunt2.name}  (${format(f(IFight.normalHunting.hunt2.level), 0)} / 10)</div>
  </div>`;


  if (f(IFight.normalHuntingRewards.upgrade2.level).greaterThan(f(0))) {
    IFight.normalHuntingRewards.upgrade2.active = true;
  }

  //HUNT REWARD 3

  IFightIn.normalHuntingRewards.upgrade3.name = `Slime multiplies Essence ×<span class="boldBlackBorder">${format(f(IFightIn.normalHuntingRewards.upgrade3.effect), 0)}</span>`

  IFight.normalHuntingRewards.upgrade3.level = f(IFight.normalHuntingRewards.upgrade3.level)

  if (IUniversal.energyUpgrades.upgrade15.active) {
    var extraEffect1 = f(IFight.normalHunting.hunt2.level).mul(IUniversalIn.energyUpgrades.upgrade15.effect);
  } else {
    extraEffect1 = f(0);
  }

  if (IUniversal.energyUpgrades.upgrade14.active) {
    var extraLevel1 = f(Decimal.log10((f(IFight.normalHunting.hunt3.level).add(f(extraEffect1))).mul(f(IUniversalIn.energyUpgrades.upgrade14.effect)))).floor()
    if (f(extraLevel1).lt(f(0))) {
      extraLevel1 = f(0)
    }
  } else {
    extraLevel1 = f(0)
  }

  IFightIn.normalHuntingRewards.upgrade3.showLevel = f(IFight.normalHuntingRewards.upgrade3.level).add(f(extraLevel1))


  IFightIn.normalHuntingRewards.upgrade3.effect = ((f(IFight.normalHuntingRewards.upgrade3.level).add(f(extraLevel1))).mul(f(1.3).pow(f(IFight.normalHunting.hunt1.level).div(f(10)))))

  if (IUniversal.huntEvolution.b3.active3) {
    var extraEffect1 = f(IUniversalIn.huntEvolution.b3.effect3);
  } else {
    extraEffect1 = f(1);
  }

  if (IUniversalIn.potionEffects.effect13.activeValue) {
    var extraEffect2 = f(IUniversalIn.potionEffects.effect13.activeValue);
  } else {
    extraEffect2 = f(1);
  }

  IFightIn.normalHuntingRewards.upgrade3.price = ((f(4000).mul(f(1000).pow(f(IFight.normalHuntingRewards.upgrade3.level).add(f(1))))).dividedBy(f(extraEffect1))).dividedBy(f(extraEffect2))

  IFightIn.normalHuntingRewards.upgrade3.reqDescription = `
  <div class="width100">
    <div><i class="centerDiv">Slime infused with blessings is an essence concentrator</i></div>
    <div class="centerDiv">Reach 10 ${IFightIn.normalHunting.hunt3.name}  (${format(f(IFight.normalHunting.hunt3.level), 0)} / 10)</div>
  </div>`;

  if (f(IFight.normalHuntingRewards.upgrade3.level).greaterThan(f(0))) {
    IFight.normalHuntingRewards.upgrade3.active = true;
  }

  //HUNT REWARD 4

  IFightIn.normalHuntingRewards.upgrade4.name = `Add <span class="boldBlackBorder">${format(f(IFightIn.normalHuntingRewards.upgrade4.effect).mul(f(100)), 0)}%</span> of Damage to Life`

  IFight.normalHuntingRewards.upgrade4.level = f(IFight.normalHuntingRewards.upgrade4.level)

  if (IUniversal.energyUpgrades.upgrade15.active) {
    var extraEffect1 = f(IFight.normalHunting.hunt3.level).mul(IUniversalIn.energyUpgrades.upgrade15.effect);
  } else {
    extraEffect1 = f(0);
  }

  if (IUniversal.energyUpgrades.upgrade14.active) {
    var extraLevel1 = f(Decimal.log10((f(IFight.normalHunting.hunt4.level).add(f(extraEffect1))).mul(f(IUniversalIn.energyUpgrades.upgrade14.effect)))).floor()
    if (f(extraLevel1).lt(f(0))) {
      extraLevel1 = f(0)
    }
  } else {
    extraLevel1 = f(0)
  }

  IFightIn.normalHuntingRewards.upgrade4.showLevel = f(IFight.normalHuntingRewards.upgrade4.level).add(f(extraLevel1))


  IFightIn.normalHuntingRewards.upgrade4.effect = f(IFight.normalHuntingRewards.upgrade4.level).add(f(extraLevel1))

  if (IUniversal.huntEvolution.b4.active4) {
    var extraEffect1 = f(IUniversalIn.huntEvolution.b4.effect3);
  } else {
    extraEffect1 = f(1);
  }

  if (IUniversalIn.potionEffects.effect13.activeValue) {
    var extraEffect2 = f(IUniversalIn.potionEffects.effect13.activeValue);
  } else {
    extraEffect2 = f(1);
  }

  IFightIn.normalHuntingRewards.upgrade4.price = ((f(80000).mul(f(10000).pow(f(IFight.normalHuntingRewards.upgrade4.level).add(f(1))))).dividedBy(f(extraEffect1))).dividedBy(f(extraEffect2))

  IFightIn.normalHuntingRewards.upgrade4.reqDescription = `
  <div class="width100">
    <i class="centerDiv">The stronger i am, the stronger i spite death</i></div>
    <div class="centerDiv">Reach 10 ${IFightIn.normalHunting.hunt4.name}  (${format(f(IFight.normalHunting.hunt4.level), 0)} / 10)</div>
  </div>`;

  if (f(IFight.normalHuntingRewards.upgrade4.level).greaterThan(f(0))) {
    IFight.normalHuntingRewards.upgrade4.active = true;
  }

  //HUNT REWARD 5

  IFightIn.normalHuntingRewards.upgrade5.name = `Challenger first reward ×<span class="boldBlackBorder">${format(f(IFightIn.normalHuntingRewards.upgrade5.effect), 0)}</span>`

  IFight.normalHuntingRewards.upgrade5.level = f(IFight.normalHuntingRewards.upgrade5.level)

  if (IUniversal.energyUpgrades.upgrade15.active) {
    var extraEffect1 = f(IFight.normalHunting.hunt4.level).mul(IUniversalIn.energyUpgrades.upgrade15.effect);

  } else {
    extraEffect1 = f(0);
  }

  if (IUniversal.energyUpgrades.upgrade14.active) {
    var extraLevel1 = f(Decimal.log10((f(IFight.normalHunting.hunt5.level).add(f(extraEffect1))).mul(f(IUniversalIn.energyUpgrades.upgrade14.effect)))).floor()
    if (f(extraLevel1).lt(f(0))) {
      extraLevel1 = f(0)
    }
  } else {
    extraLevel1 = f(0)
  }

  IFightIn.normalHuntingRewards.upgrade5.showLevel = f(IFight.normalHuntingRewards.upgrade5.level).add(f(extraLevel1))


  IFightIn.normalHuntingRewards.upgrade5.effect = f(1).add(f(0.1).mul(f(IFight.normalHuntingRewards.upgrade5.level).add(f(extraLevel1))).mul(f(IFight.challengers.baseChallenger.level)))

  if (IUniversal.huntEvolution.b5.active3) {
    var extraEffect1 = f(IUniversalIn.huntEvolution.b5.effect3);
  } else {
    extraEffect1 = f(1);
  }

  if (IUniversalIn.potionEffects.effect13.activeValue) {
    var extraEffect2 = f(IUniversalIn.potionEffects.effect13.activeValue);
  } else {
    extraEffect2 = f(1);
  }


  IFightIn.normalHuntingRewards.upgrade5.price = ((f(1600000).mul(f(100000).pow(f(IFight.normalHuntingRewards.upgrade5.level).add(f(1))))).dividedBy(f(extraEffect1))).dividedBy(f(extraEffect2))

  IFightIn.normalHuntingRewards.upgrade5.reqDescription = `
  <div class="width100">
    <i class="centerDiv">Draconic arts enchance my training... is the wyvern a dragon?</i></div>
    <div class="centerDiv">Reach 10 ${IFightIn.normalHunting.hunt5.name}  (${format(f(IFight.normalHunting.hunt5.level), 0)} / 10)</div></div>
  </div>`;


  if (f(IFight.normalHuntingRewards.upgrade5.level).greaterThan(f(0))) {
    IFight.normalHuntingRewards.upgrade5.active = true;
  }
  //Universe

  IUniversal.universe = f(IUniversal.universe)

  //Milestones

  IUniversalIn.milestones.m1.mReqDesc = `Universe 2`
  IUniversalIn.milestones.m1.mDesc = `Energy`

  IUniversalIn.milestones.m2.mReqDesc = `Universe 5`
  IUniversalIn.milestones.m2.mDesc = `Universal Challenger, Attributes, Automation`

  IUniversalIn.milestones.m3.mReqDesc = `Universe 40`
  IUniversalIn.milestones.m3.mDesc = `Sky Tab`


  //REQUISITES
  //Base

  ITrainingIn.reqDescription = `<div><i class="centerDiv">Push yourself beyond your limits, not only in flesh and bones strength resides</i><br>
  <div class="centerDiv">Unlock new training at 10 Power</div></div>`

  ITrainingIn.base.base3.reqDescription = `<div><i class="centerDiv">Push yourself beyond your limits, not only in flesh and bones strength resides</i><br>
  <div class="centerDiv">Unlock new training at 10 Power</div></div>`

  ITrainingIn.base.base4.reqDescription = `<div><i class="centerDiv">In this reality, the mind sees more than eyes can, is this world enough??</i><br>
  <div class="centerDiv">Unlock New Training At 10 Power</div></div>`;


  //ASCENSION UPGRADES

  if (IUniversal.energyUpgrades.upgrade23.active) {
    var priceDivider1 = f(IUniversalIn.energyUpgrades.upgrade23.effect)
  } else {
    priceDivider1 = f(1)
  }

  //POTENTIAL
  var sel = IUniversal.energyUpgrades.upgrade1
  var sel2 = IUniversalIn.energyUpgrades.upgrade1


  sel2.name = `<div>
      <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">1</div>
  Add <span class="boldBlackBorder">10/s</span> to Damage Training</div><div>×10 per LVL</div>`
  sel2.effectDesc = `+${format(f(sel2.effect), 0)}`
  sel.level = f(sel.level)
  if (f(sel.level).gte(f(1))) {
    sel2.effect = f(10).pow(f(sel.level))
  } else {
    sel2.effect = 0;
  }
  sel2.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  sel.showReq = true

  var sel = IUniversal.energyUpgrades.upgrade2
  var sel2 = IUniversalIn.energyUpgrades.upgrade2


  sel2.name = `      <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">2</div>
  Damage <span class="boldBlackBorder">×2</span> per LVL`
  sel2.effectDesc = `×${format(f(sel2.effect), 0)}`
  sel.level = f(sel.level)
  sel2.effect = f(2).pow(f(sel.level))
  sel2.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

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
  var sel2 = IUniversalIn.energyUpgrades.upgrade3


  sel2.name = `<div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">3</div>
  Damage Training <span class="boldBlackBorder">×5</span> per LVL`
  sel2.effectDesc = `×${format(f(sel2.effect), 0)}`
  sel.level = f(sel.level)
  sel2.effect = f(5).pow(f(sel.level))
  sel2.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

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
  var sel2 = IUniversalIn.energyUpgrades.upgrade4


  sel2.name = `<div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">4</div>
  <div>Damage <span class="boldBlackBorder">×</span></div> <div><span class="boldBlackBorder">log(Universe Time ×LVL)</span></div>`
  sel2.effectDesc = `×${format(f(sel2.effect), 0)}`
  sel.level = f(sel.level)
  if (f(IGameData.universeTime).gte(f(3)) && IGameData.universeTime != "NaN" && IGameData.universeTime != undefined) {
    sel2.effect = f(Decimal.log2(IGameData.universeTime)).mul(f(sel.level))
  } else {
    sel2.effect = f(1)
  }
  sel2.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

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
  var sel2 = IUniversalIn.energyUpgrades.upgrade5


  sel2.name = `<div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">5</div>
  Damage <span class="boldBlackBorder">^1.02</span> per LVL`
  sel2.effectDesc = `^${format(f(sel2.effect), 2)}`
  sel.level = f(sel.level)
  sel2.effect = f(1).add(f(0.02).mul(f(sel.level)))
  sel2.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

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
  var sel2 = IUniversalIn.energyUpgrades.upgrade6


  sel2.name = `<div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">6</div>
  <div>Add <span class="boldBlackBorder">10/s</span> to Life Training</div><div>×10 per LVL</div>`
  sel2.effectDesc = `+${format(f(sel2.effect), 0)}`
  sel.level = f(sel.level)
  if (f(sel.level).gte(f(1))) {
    sel2.effect = f(10).pow(f(sel.level))
  } else {
    sel2.effect = 0;
  }
  sel2.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  sel.showReq = true

  var sel = IUniversal.energyUpgrades.upgrade7
  var sel2 = IUniversalIn.energyUpgrades.upgrade7


  sel2.name = `<div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">7</div>
  <div>Life Training <span class="boldBlackBorder">×</span></div> <div><span class="boldBlackBorder">Universe×LVL</span></div>`
  sel2.effectDesc = `×${format(f(sel2.effect), 0)}`
  sel.level = f(sel.level)
  sel2.effect = f(IUniversal.universe).mul(f(sel.level))
  sel2.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

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
  var sel2 = IUniversalIn.energyUpgrades.upgrade8


  sel2.name = `<div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">8</div>
  Life Training <span class="boldBlackBorder">×2</span> per LVL`
  sel2.effectDesc = `×${format(f(sel2.effect), 0)}`
  sel.level = f(sel.level)
  sel2.effect = f(2).pow(f(sel.level))
  sel2.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

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
  var sel2 = IUniversalIn.energyUpgrades.upgrade9


  sel2.name = `<div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">9</div>
  Life <span class="boldBlackBorder">×5</span> per LVL`
  sel2.effectDesc = `×${format(f(sel2.effect), 0)}`
  sel.level = f(sel.level)
  sel2.effect = f(5).pow(f(sel.level))
  sel2.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

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
  var sel2 = IUniversalIn.energyUpgrades.upgrade10


  sel2.name = `<div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">10</div>
  Life <span class="boldBlackBorder">^1.02</span> per LVL`
  sel2.effectDesc = `^${format(f(sel2.effect), 2)}`
  sel.level = f(sel.level)
  sel2.effect = f(1).add(f(0.02).mul(f(sel.level)))
  sel2.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

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
  var sel2 = IUniversalIn.energyUpgrades.upgrade11


  sel2.name = `<div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">11</div>
  Essence/s <span class="boldBlackBorder">×5</span> per LVL`
  sel2.effectDesc = `×${format(f(sel2.effect), 0)}`
  sel.level = f(sel.level)
  sel2.effect = f(5).pow(f(sel.level))
  sel2.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  sel.showReq = true

  var sel = IUniversal.energyUpgrades.upgrade12
  var sel2 = IUniversalIn.energyUpgrades.upgrade12


  sel2.name = `<div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">12</div>
  Essence/s <span class="boldBlackBorder">×log(Total hunt levels ×LVL)</span>`
  sel2.effectDesc = `×${format(f(sel2.effect), 0)}`
  sel.level = f(sel.level)

  var tot = f(0)
  for (let i in IFight.normalHunting) {
    var s = IFight.normalHunting[i]

    tot = f(tot).add(f(s.level))
  }

  if (f(tot).gte(f(3))) {
    sel2.effect = f(Decimal.log2(tot)).mul(f(sel.level))
  } else {
    sel2.effect = f(1)
  }

  sel2.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

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
  var sel2 = IUniversalIn.energyUpgrades.upgrade13


  sel2.name = `<div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">13</div>
  Wyverns Essence/s <span class="boldBlackBorder">×log(Knights ×LVL)</span>`
  sel2.effectDesc = `×${format(f(sel2.effect), 0)}`
  sel.level = f(sel.level)
  if (f(IFight.normalHunting.hunt3.level).gte(2)) {
    sel2.effect = f(Decimal.log2(IFight.normalHunting.hunt3.level)).mul(f(sel.level))

  } else {
    sel2.effect = f(1)
  }
  sel2.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

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
  var sel2 = IUniversalIn.energyUpgrades.upgrade14


  sel2.name = `<div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">14</div>
  Each hunt grants a free matching upgrade: <span class="boldBlackBorder">log₁₀(Hunt ×LVL)</span>`
  sel2.effectDesc = ``
  sel.level = f(sel.level)
  sel2.effect = f(sel.level)
  sel2.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

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
  var sel2 = IUniversalIn.energyUpgrades.upgrade15


  sel2.name = `<div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">15</div>
  each Hunt gives <span class="boldBlackBorder">50% ×LVL</span> of its levels to next hunt`
  sel2.effectDesc = `${format(f(f(sel.level).mul(f(50))), 0)}%`
  sel.level = f(sel.level)
  sel2.effect = f(0.50).mul(f(sel.level))
  sel2.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

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
  var sel2 = IUniversalIn.energyUpgrades.upgrade16


  sel2.name = `<div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">16</div>
  Challenger Damage <span class="boldBlackBorder">/5</span> per LVL`
  sel2.effectDesc = `/${format(f(sel2.effect), 0)}`
  sel.level = f(sel.level)
  sel2.effect = f(5).pow(f(sel.level))
  sel2.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

  if (f(sel.level).gt(f(0))) {
    sel.active = true;
  } else {
    sel.active = false;
  }

  sel.showReq = true

  var sel = IUniversal.energyUpgrades.upgrade17
  var sel2 = IUniversalIn.energyUpgrades.upgrade17


  sel2.name = `<div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">17</div>
  Challenger Life <span class="boldBlackBorder">/5</span> per LVL`
  sel2.effectDesc = `/${format(f(sel2.effect), 0)}`
  sel.level = f(sel.level)
  sel2.effect = f(5).pow(f(sel.level))
  sel2.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

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
  var sel2 = IUniversalIn.energyUpgrades.upgrade18


  sel2.name = `<div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">18</div>
  Challenger Rewards <span class="boldBlackBorder">×2</span> per LVL`
  sel2.effectDesc = `×${format(f(sel2.effect), 0)}`
  sel.level = f(sel.level)
  sel2.effect = f(2).pow(f(sel.level))
  sel2.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

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
  var sel2 = IUniversalIn.energyUpgrades.upgrade19


  sel2.name = `<div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">19</div>
  Universal Challenger is <span class="boldBlackBorder">10</span> times weaker per LVL`
  sel2.effectDesc = `/${format(f(f(1).dividedBy(sel2.effect)), 0)}`
  sel.level = f(sel.level)
  sel2.effect = f(0.1).pow(f(sel.level))
  sel2.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

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
  var sel2 = IUniversalIn.energyUpgrades.upgrade20


  sel2.name = `<div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">20</div>
  Universal Shards <span class="boldBlackBorder">×2</span> per LVL`
  sel2.effectDesc = `×${format(f(sel2.effect), 0)}`
  sel.level = f(sel.level)
  sel2.effect = f(2).pow(f(sel.level))
  sel2.price = f(2).pow(f(sel.level)).mul(f(priceDivider1))

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
  var sel2 = IUniversalIn.energyUpgrades.upgrade21


  sel2.name = `<div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">21</div>
  <div>(Requires adjacent upgrades)</div>
  <div>Damage & Life <span class="boldBlackBorder">×log(Power ×LVL)</span></div>`
  sel2.effectDesc = `×${format(f(sel2.effect), 0)}`
  sel.level = f(sel.level)

  if (f(IGameData.power).gte(f(3))) {
    sel2.effect = f(Decimal.log2(IGameData.power)).mul(f(sel.level))
  } else {
    sel2.effect = f(1)
  }
  sel2.price = f(5).pow(f(sel.level).add(f(1)))

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
  var sel2 = IUniversalIn.energyUpgrades.upgrade22


  sel2.name = `<div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">22</div>
  <div>(Requires adjacent upgrades)</div>
  <div>U. Nodes & Cores</div>
              <div><span class="boldBlackBorder">×log(U. Shards ×LVL)</span></div>
              `
  sel2.effectDesc = `× ${format(f(sel2.effect), 0)}`
  sel.level = f(sel.level)
  sel2.effect = f(Decimal.log2(IUniversalChallenger.universalShards)).mul(f(sel.level))
  sel2.price = f(5).pow(f(sel.level).add(f(1)))

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
  var sel2 = IUniversalIn.energyUpgrades.upgrade23


  sel2.name = `<div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
      <div class="topRight absolute padding2 grey">23</div>
  <div>(Requires adjacent upgrades)</div>
  <div>Energy upgrades price <span class="boldBlackBorder">/2 ×LVL</span></div>
              <div>Except fusion upgrades </div>
`
  sel2.effectDesc = `/${format(f(sel2.effect), 2)}`
  sel.level = f(sel.level)
  sel2.effect = f(0.5).pow(f(sel.level))
  sel2.price = f(5).pow(f(sel.level).add(f(1)))

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

  //ASCENSION

  IUniversal.ascensionPointMax = f(IUniversal.universe).minus(f(1))

  //ATTRIBUTES

  if (f(IUniversalIn.attributes.attributeBonus1.effect).gte(f(1))) {
    IUniversal.attributes.attributeBonus1.active = true;
  } else {
    IUniversal.attributes.attributeBonus1.active = false;
    IUniversalIn.attributes.attributeBonus1.effect = f(1)
  }

  if (f(IUniversalIn.attributes.attributeBonus2.effect).gte(f(1))) {
    IUniversal.attributes.attributeBonus2.active = true;
  } else {
    IUniversal.attributes.attributeBonus2.active = false;
    IUniversalIn.attributes.attributeBonus2.effect = f(1)
  }

  if (f(IUniversalIn.attributes.attributeBonus3.effect).gte(f(1))) {
    IUniversal.attributes.attributeBonus3.active = true;
  } else {
    IUniversal.attributes.attributeBonus3.active = false;
    IUniversalIn.attributes.attributeBonus3.effect = f(1)
  }

  if (f(IUniversalIn.attributes.attributeBonus4.effect).gte(f(1))) {
    IUniversal.attributes.attributeBonus4.active = true;
  } else {
    IUniversal.attributes.attributeBonus4.active = false;
    IUniversalIn.attributes.attributeBonus4.effect = f(1)
  }

  if (f(IUniversalIn.attributes.attributeBonus5.effect).gte(f(1))) {
    IUniversal.attributes.attributeBonus5.active = true;
  } else {
    IUniversal.attributes.attributeBonus5.active = false;
    IUniversalIn.attributes.attributeBonus5.effect = f(1)
  }

  if (f(IUniversalIn.attributes.attributeBonus6.effect).gte(f(1))) {
    IUniversal.attributes.attributeBonus6.active = true;
  } else {
    IUniversal.attributes.attributeBonus6.active = false;
    IUniversalIn.attributes.attributeBonus6.effect = f(1)
  }

  IUniversalIn.attributes.attributeBonus1.name = `Universal Shards ×<span class="boldBlackBorder">${format(f(IUniversalIn.attributes.attributeBonus1.effect))}</span>`
  IUniversalIn.attributes.attributeBonus2.name = `Essence ×<span class="boldBlackBorder">${format(f(IUniversalIn.attributes.attributeBonus2.effect))}</span>`

  IUniversalIn.attributes.attributeBonus3.name = `Damage and Life Training ×<span class="boldBlackBorder">${format(f(IUniversalIn.attributes.attributeBonus3.effect))}</span>`
  IUniversalIn.attributes.attributeBonus4.name = `Will and Insight Training ×<span class="boldBlackBorder">${format(f(IUniversalIn.attributes.attributeBonus4.effect))}</span>`

  IUniversalIn.attributes.attributeBonus5.name = `Damage ×<span class="boldBlackBorder">${format(f(IUniversalIn.attributes.attributeBonus5.effect))}</span>`
  IUniversalIn.attributes.attributeBonus6.name = `Life ×<span class="boldBlackBorder">${format(f(IUniversalIn.attributes.attributeBonus6.effect))}</span>`

  //ATTRIBUTES UNLOCK


  if (IUniversal.attributes.attributesUnlock1.active) {
    IUniversalIn.attributes.attributesUnlock1.name = `<div class="boldBlackBorder">UNIVERSAL</div>
                                                  <div class="boldBlackBorder">CHALLENGER</div>
                                                  <div class="boldBlackBorder">CHALLENGES</div>
                                                  <div>UNLOCKED</div>`
  } else {
    IUniversalIn.attributes.attributesUnlock1.name = `<div class="boldBlackBorder">UNIVERSAL</div>
                                                  <div class="boldBlackBorder">CHALLENGER</div>
                                                  <div class="boldBlackBorder">CHALLENGES</div>
                                                  <div class="line"></div>
                                                  <div>50 Critical Points</div>
                                                  <div>100 Regeneration Points</div>`
  }

  IUniversalIn.attributes.attributesUnlock1.req = function () {
    return f(IUniversal.attributes.critPoints).gte(f(50))
      && f(IUniversal.attributes.regenerationPoints).gte(f(100))
  }


  if (IUniversal.attributes.attributesUnlock2.active) {
    IUniversalIn.attributes.attributesUnlock2.name = `<div class="boldBlackBorder">HUNTING</div>
                                                  <div class="boldBlackBorder">EVOLUTION</div>
                                                  <div class="">UNLOCKED</div>`
  } else {

    IUniversalIn.attributes.attributesUnlock2.name = `<div class="boldBlackBorder">HUNTING</div>
                                                  <div class="boldBlackBorder">EVOLUTION</div>
                                                  <div class="line"></div>
                                                  <div>50 Defence</div>
                                                  <div> Penetration Points</div>
                                                  <div>100 Defence Points</div>`
  }

  IUniversalIn.attributes.attributesUnlock2.req = function () {
    return f(IUniversal.attributes.defencePenetrationPoints).gte(f(50))
      && f(IUniversal.attributes.defencePoints).gte(f(100))
  }


  if (IUniversal.attributes.attributesUnlock3.active) {
    IUniversalIn.attributes.attributesUnlock3.name = `<div class="boldBlackBorder">ENERGY</div>
                                                  <div class="boldBlackBorder">FUSION</div>
                                                  <div class="">UNLOCKED</div>`
  } else {
    IUniversalIn.attributes.attributesUnlock3.name = `<div>UNLOCK ENERGY FUSION</div>
                                                  <div>50 Life Steal</div>
                                                  <div>50 Shield Points</div>`
  }

  IUniversalIn.attributes.attributesUnlock3.req = function () {
    return f(IUniversal.attributes.lifeStealPoints).gte(f(50))
      && f(IUniversal.attributes.shieldPoints).gte(f(50))
  }

  //CRIT
  //Crit Rate
  IUniversalIn.attributes.critRate.name = `Critical rate: <span class="boldBlackBorder">&nbsp${f(IUniversalIn.attributes.critRate.effect).mul(f(100))}%</span>`
  IUniversal.attributes.critRate.level = f(IUniversal.attributes.critRate.level)

  IUniversalIn.attributes.critRate.effect = f(0.1).mul(f(IUniversal.attributes.critRate.level))
  IUniversalIn.attributes.critRate.price = f(10).pow(f(IUniversal.attributes.critRate.level).add(f(2)))

  //Crit Damage
  IUniversalIn.attributes.critDamage.name = `Critical damage: <span class="boldBlackBorder">&nbsp${f(IUniversalIn.attributes.critDamage.effect).mul(f(100))}%</span>`
  IUniversal.attributes.critDamage.level = f(IUniversal.attributes.critDamage.level)

  IUniversalIn.attributes.critDamage.effect = f(1).add(f(0.1).mul(f(IUniversal.attributes.critDamage.level)))
  IUniversalIn.attributes.critDamage.price = f(25).pow(f(IUniversal.attributes.critDamage.level).add(f(1)))


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

  if (IUniversalIn.potionEffects.effect14.activeValue) {
    var points3 = f(IUniversalIn.potionEffects.effect14.activeValue);
  } else {
    points3 = f(1);
  }


  IUniversal.attributes.critPoints = f(points1).mul(f(points2)).mul(f(points3))
  IUniversalIn.attributes.critPointsName = `<span class="boldBlackBorder">${format(f(IUniversal.attributes.critPoints))}</span> Critical Points`


  //LIFE REGENERATION
  //life regeneration


  IUniversalIn.attributes.regeneration.name = `<span class="boldBlackBorder">&nbsp${format(f(IUniversal.attributes.regeneration.level))}</span> Essence`
  IUniversal.attributes.regeneration.level = f(IUniversal.attributes.regeneration.level)


  if (f(IUniversal.attributes.regeneration.level).gte(f(10))) {
    IUniversalIn.attributes.regeneration.effect = f(IUniversal.attributes.regeneration.level)
  } else {
    IUniversalIn.attributes.regeneration.effect = f(1)
  }

  IUniversalIn.attributes.regeneration.price = f(IUniversalIn.attributes.regeneration.price)

  if (f(IUniversal.attributes.maxRegeneration.level).gte(f(1))) {
    var points2 = f(IUniversal.attributes.maxRegeneration.level)
  } else {
    points2 = f(1)
  }

  if (IUniversalIn.potionEffects.effect14.activeValue) {
    var points3 = f(IUniversalIn.potionEffects.effect14.activeValue);
  } else {
    points3 = f(1);
  }


  IUniversal.attributes.regenerationPoints = f(Decimal.log(IUniversalIn.attributes.regeneration.effect, 10)).mul(f(points2)).mul(f(points3))
  IUniversalIn.attributes.regenerationPointsName = `<span class="boldBlackBorder">${format(f(IUniversal.attributes.regenerationPoints))}</span> Regeneration Points`

  //max life regeneration
  IUniversalIn.attributes.maxRegeneration.name = `Maximum life regeneration: <span class="boldBlackBorder">&nbsp${f(IUniversalIn.attributes.maxRegeneration.effect).mul(f(100))}</span>%`
  IUniversal.attributes.maxRegeneration.level = f(IUniversal.attributes.maxRegeneration.level)

  IUniversalIn.attributes.maxRegeneration.effect = f(0.1).mul(f(IUniversal.attributes.maxRegeneration.level))
  IUniversalIn.attributes.maxRegeneration.price = f(50).pow(f(IUniversal.attributes.maxRegeneration.level).add(f(1)))

  //DEFENCE PENETRATION
  //Defence Penetration
  IUniversalIn.attributes.defencePenetration.name = `<span class="boldBlackBorder">${format(f(IUniversal.attributes.defencePenetration.level))}</span> Damage and Life Training`
  IUniversal.attributes.defencePenetration.level = f(IUniversal.attributes.defencePenetration.level)

  if (f(IUniversal.attributes.defencePenetration.level).gte(f(10))) {
    IUniversalIn.attributes.defencePenetration.effect = f(IUniversal.attributes.defencePenetration.level)
  } else {
    IUniversalIn.attributes.defencePenetration.effect = f(1)
  }

  IUniversalIn.attributes.defencePenetration.price = f(IUniversalIn.attributes.defencePenetration.price)

  //Max Defence Penetration

  IUniversalIn.attributes.maxDefencePenetration.name = `Maximum defence penetration: <span class="boldBlackBorder">&nbsp${f(IUniversalIn.attributes.maxDefencePenetration.effect).mul(f(100))}</span>%`
  IUniversal.attributes.maxDefencePenetration.level = f(IUniversal.attributes.maxDefencePenetration.level)

  IUniversalIn.attributes.maxDefencePenetration.effect = f(0.1).mul(f(IUniversal.attributes.maxDefencePenetration.level))
  IUniversalIn.attributes.maxDefencePenetration.price = f(50).pow(f(IUniversal.attributes.maxDefencePenetration.level).add(f(1)))

  if (f(IUniversal.attributes.maxDefencePenetration.level).gte(f(1))) {
    var points2 = f(IUniversal.attributes.maxDefencePenetration.level)
  } else {
    points2 = f(1)
  }

  if (IUniversalIn.potionEffects.effect15.activeValue) {
    var points3 = f(IUniversalIn.potionEffects.effect15.activeValue);
  } else {
    points3 = f(1);
  }

  IUniversal.attributes.defencePenetrationPoints = f(Decimal.log(IUniversalIn.attributes.defencePenetration.effect, 10)).mul(f(points2)).mul(f(points3))
  IUniversalIn.attributes.defencePenetrationPointsName = `<span class="boldBlackBorder">${format(f(IUniversal.attributes.defencePenetrationPoints))}</span> Defence Penetration Points`

  //DEFENCE
  //Defence


  IUniversal.attributes.defence.level = f(IUniversal.attributes.defence.level)

  IUniversalIn.attributes.defence.odds = f(1).div(f(2).pow(f(IUniversal.attributes.defence.level).minus(f(10).times(f(IUniversal.attributes.defence.level).div(f(10)).floor()))));

  IUniversalIn.attributes.defence.price = f(250).mul(f(100).pow(f(IUniversal.attributes.defence.level).div(10).floor()))

  //Max Defence
  IUniversalIn.attributes.maxDefence.name = `Maximum defence: <span class="boldBlackBorder">&nbsp${f(IUniversalIn.attributes.maxDefence.effect).mul(f(100))}</span>%`
  IUniversal.attributes.maxDefence.level = f(IUniversal.attributes.maxDefence.level)

  IUniversalIn.attributes.maxDefence.effect = f(0.1).mul(f(IUniversal.attributes.maxDefence.level))
  IUniversalIn.attributes.maxDefence.price = f(25).pow(f(IUniversal.attributes.maxDefence.level).add(f(1)))

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

  if (IUniversalIn.potionEffects.effect15.activeValue) {
    var points3 = f(IUniversalIn.potionEffects.effect15.activeValue);
  } else {
    points3 = f(1);
  }


  IUniversal.attributes.defencePoints = f(points1).mul(f(points2)).mul(f(points3))
  IUniversalIn.attributes.defencePointsName = `<span class="boldBlackBorder">${format(f(IUniversal.attributes.defencePoints))}</span> Defence Points`


  //LIFE STEAL
  //Life Steal

  if (IUniversal.attributes.lifeSteal.active) {
    IUniversal.attributes.lifeSteal.level = f(IUniversal.attributes.lifeSteal.level).add(f(IUniversalChallenger.universalCoresProd))
  }

  if (f(IUniversal.attributes.lifeSteal.level).gte(f(10))) {
    IUniversalIn.attributes.shield.effect = f(Decimal.log(IUniversal.attributes.lifeSteal.level, 10))
    var points1 = f(Decimal.log(IUniversal.attributes.lifeSteal.level, 10))
  } else {
    IUniversalIn.attributes.shield.effect = f(1)
    points1 = f(1)
  }

  //Max Life Steal
  IUniversalIn.attributes.lifeStealMax.name = `Maximum life steal: <span class="boldBlackBorder">&nbsp${f(IUniversalIn.attributes.lifeStealMax.effect).mul(f(100))}</span>%`
  IUniversal.attributes.lifeStealMax.level = f(IUniversal.attributes.lifeStealMax.level)

  IUniversalIn.attributes.lifeStealMax.effect = f(0.1).mul(f(IUniversal.attributes.lifeStealMax.level))

  IUniversalIn.attributes.lifeStealMax.price = f(25).pow(f(IUniversal.attributes.lifeStealMax.level).add(f(1)))

  if (f(IUniversal.attributes.lifeStealMax.level).gte(f(1))) {

    var points2 = f(IUniversal.attributes.lifeStealMax.level)
  } else {
    points2 = f(1)
  }

  if (IUniversalIn.potionEffects.effect16.activeValue) {
    var points3 = f(IUniversalIn.potionEffects.effect16.activeValue);
  } else {
    points3 = f(1);
  }


  IUniversal.attributes.lifeStealPoints = f(points1).mul(f(points2)).mul(f(points3))
  IUniversalIn.attributes.lifeStealPointsName = `<span class="boldBlackBorder">${format(f(IUniversal.attributes.lifeStealPoints))}</span> Life Steal Points`

  //SHIELD

  //Shield
  IUniversalIn.attributes.shield.name = `<span class="boldBlackBorder">${format(f(IUniversal.attributes.shield.level))}</span> Universal Cores`
  IUniversal.attributes.shield.level = f(IUniversal.attributes.shield.level)

  if (f(IUniversal.attributes.shield.level).gte(f(10))) {
    IUniversalIn.attributes.shield.effect = f(Decimal.log(IUniversal.attributes.shield.level, 10))
    var points1 = f(Decimal.log(IUniversal.attributes.shield.level, 10))
  } else {
    IUniversalIn.attributes.shield.effect = f(1)
    points1 = f(1)
  }

  IUniversalIn.attributes.shield.price = f(IUniversalIn.attributes.shield.price)

  //Max Shield

  IUniversalIn.attributes.maxShield.name = `Maximum shield: <span class="boldBlackBorder">&nbsp${f(IUniversalIn.attributes.maxShield.effect).mul(f(100))}</span>%`
  IUniversal.attributes.maxShield.level = f(IUniversal.attributes.maxShield.level)

  IUniversalIn.attributes.maxShield.effect = f(0.1).mul(f(IUniversal.attributes.maxShield.level))
  IUniversalIn.attributes.maxShield.price = f(50).pow(f(IUniversal.attributes.maxShield.level).add(f(1)))

  if (f(IUniversal.attributes.shield.level).gte(f(1))) {
    var points2 = f(IUniversal.attributes.maxShield.level)
  } else {
    points2 = f(1)
  }

  if (IUniversalIn.potionEffects.effect16.activeValue) {
    var points3 = f(IUniversalIn.potionEffects.effect16.activeValue);
  } else {
    points3 = f(1);
  }

  IUniversal.attributes.shieldPoints = f(points1).mul(f(points2)).mul(f(points3))
  IUniversalIn.attributes.shieldPointsName = `<span class="boldBlackBorder">${format(f(IUniversal.attributes.shieldPoints))}</span> Shield Points`


  //ATTRIBUTES BONUS


  IUniversalIn.attributes.attributeBonus1.effect = f(IUniversal.attributes.critPoints).pow(f(1.5))
  IUniversalIn.attributes.attributeBonus2.effect = f(IUniversal.attributes.regenerationPoints).pow(f(1.5))
  IUniversalIn.attributes.attributeBonus3.effect = f(IUniversal.attributes.defencePoints).pow(f(1.5))
  IUniversalIn.attributes.attributeBonus4.effect = f(IUniversal.attributes.defencePenetrationPoints).pow(f(1.5))
  IUniversalIn.attributes.attributeBonus5.effect = f(IUniversal.attributes.lifeStealPoints).pow(f(1.5))
  IUniversalIn.attributes.attributeBonus6.effect = f(IUniversal.attributes.shieldPoints).pow(f(1.5))


  //HUNT EVOLUTION

  var globalEffect1 = f(1)

  if (IUniversal.huntEvolution.b1.active4) {
    globalEffect1 = f(globalEffect1).mul(f(IUniversalIn.huntEvolution.b1.effect4))
  }

  if (IUniversal.huntEvolution.b2.active4) {
    globalEffect1 = f(globalEffect1).mul(f(IUniversalIn.huntEvolution.b2.effect4))
  }

  if (IUniversal.huntEvolution.b3.active4) {
    globalEffect1 = f(globalEffect1).mul(f(IUniversalIn.huntEvolution.b3.effect4))
  }

  if (IUniversal.huntEvolution.b4.active4) {
    globalEffect1 = f(globalEffect1).mul(f(IUniversalIn.huntEvolution.b4.effect4))
  }

  if (IUniversal.huntEvolution.b5.active4) {
    globalEffect1 = f(globalEffect1).mul(f(IUniversalIn.huntEvolution.b5.effect4))
  }

  var sel = IUniversal.huntEvolution.b1
  var sel2 = IUniversalIn.huntEvolution.b1


  if (Math.floor(f(sel.level).add(f(3)) / 4) > 0) {
    var labelEffect1 = IUniversalIn.huntEvolutionLabels.effect1["level" + Math.floor(f(sel.level).add(f(3)) / 4)];
    sel2.description1 = `Essence/s ×<span class="boldBlackBorder">${format(f(sel2.effect1))}</span>`
    sel.active1 = true
  } else {
    labelEffect1 = ""
    sel2.description1 = ""
    sel.active1 = false
  }

  if (Math.floor(f(sel.level).add(f(2)) / 4) > 0) {
    var labelEffect2 = IUniversalIn.huntEvolutionLabels.effect2["level" + Math.floor(f(sel.level).add(f(2)) / 4)];
    sel2.description2 = `Price /<span class="boldBlackBorder">${format(f(sel2.effect2))}</span>`
    sel.active2 = true
  } else {
    labelEffect2 = ""
    sel2.description2 = ""
    sel.active2 = false
  }

  if (Math.floor(f(sel.level).add(f(1)) / 4) > 0) {
    var labelEffect3 = IUniversalIn.huntEvolutionLabels.effect3["level" + Math.floor(f(sel.level).add(f(1)) / 4)];
    sel2.description3 = `Associated effect Price /<span class="boldBlackBorder">${format(f(sel2.effect3))}</span>`
    sel.active3 = true
  } else {
    labelEffect3 = ""
    sel2.description3 = ""
    sel.active3 = false
  }

  if (Math.floor(f(sel.level).add(f(0)) / 4) > 0) {
    var labelEffect4 = IUniversalIn.huntEvolutionLabels.effect4["level" + Math.floor(f(sel.level).add(f(0)) / 4)];
    sel2.description4 = `Evolution upgrades ×<span class="boldBlackBorder">${format(f(sel2.effect4))}</span>`
    sel.active4 = true
  } else {
    labelEffect4 = ""
    sel2.description4 = ""
    sel.active4 = false
  }

  sel.level = f(sel.level)
  sel2.maxLevel = f(40)

  sel2.effect1 = f(5).pow(Math.floor(f(sel.level).add(f(3)) / 4)).mul(f(globalEffect1))
  sel2.effect2 = f(10).pow(Math.floor(f(sel.level).add(f(2)) / 4)).mul(f(globalEffect1))
  sel2.effect3 = f(10).pow(Math.floor(f(sel.level).add(f(1)) / 4)).mul(f(globalEffect1))
  sel2.effect4 = f(2).pow(Math.floor(f(sel.level).add(f(0)) / 4))

  sel2.price = f(f(10).pow(f(14))).mul(f(10).pow(f(sel.level)))

  if (f(sel.level).equals(f(sel2.maxLevel))) {
    update(`content2_6_huntEvolution_upgrades_b1`, `<div class="noClick">MAX</div>`)
  } else {
    update(`content2_6_huntEvolution_upgrades_b1`, `<div class="noClick">EVOLVE</div>
                                                  <div class="noClick"><span class="boldBlackBorder" class="noClick">${format(f(sel2.price))}</span> Universal Shards</div>`)
  }
  update("content2_6_huntEvolution_upgrades_u1_1", `<div>${labelEffect1}</div>
                                                    <div>${sel2.description1}</div>`)
  update("content2_6_huntEvolution_upgrades_u1_2", `<div>${labelEffect2}</div>
                                                    <div>${sel2.description2}</div>`)
  update("content2_6_huntEvolution_upgrades_u1_3", `<div>${labelEffect3}</div>
                                                    <div>${sel2.description3}</div>`)
  update("content2_6_huntEvolution_upgrades_u1_4", `<div>${labelEffect4}</div>
                                                    <div>${sel2.description4}</div>`)
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
  var sel2 = IUniversalIn.huntEvolution.b2


  if (Math.floor(f(sel.level).add(f(3)).dividedBy(f(4))) > 0) {
    var labelEffect1 = IUniversalIn.huntEvolutionLabels.effect1["level" + Math.floor(f(sel.level).add(f(3)).dividedBy(f(4)))];
    sel2.description1 = `Essence/s ×<span class="boldBlackBorder">${format(f(sel2.effect1))}</span>`

    sel.active1 = true

  } else {
    labelEffect1 = ""
    sel2.description1 = ""
    sel.active1 = false
  }

  if (Math.floor(f(sel.level).add(f(2)).dividedBy(f(4))) > 0) {
    var labelEffect2 = IUniversalIn.huntEvolutionLabels.effect2["level" + Math.floor(f(sel.level).add(f(2)).dividedBy(f(4)))];
    sel2.description2 = `Price /<span class="boldBlackBorder">${format(f(sel2.effect2))}</span>`

    sel.active2 = true
  } else {
    labelEffect2 = ""
    sel2.description2 = ""
    sel.active2 = false
  }

  if (Math.floor(f(sel.level).add(f(1)) / 4) > 0) {
    var labelEffect3 = IUniversalIn.huntEvolutionLabels.effect3["level" + Math.floor(f(sel.level).add(f(1)) / 4)];
    sel2.description3 = `Associated effect Price /<span class="boldBlackBorder">${format(f(sel2.effect3))}</span>`

    sel.active3 = true
  } else {
    labelEffect3 = ""
    sel2.description3 = ""
    sel.active3 = false
  }

  if (Math.floor(f(sel.level).add(f(0)) / 4) > 0) {
    var labelEffect4 = IUniversalIn.huntEvolutionLabels.effect4["level" + Math.floor(f(sel.level).add(f(0)) / 4)];
    sel2.description4 = ` Evolution upgrades ×<span class="boldBlackBorder">${format(f(sel2.effect4))}</span>`

    sel.active4 = true
  } else {
    labelEffect4 = ""
    sel2.description4 = ""
    sel.active4 = false
  }

  sel.level = f(sel.level)
  sel2.maxLevel = f(40)

  sel2.effect1 = f(5).pow(Math.floor(f(sel.level).add(f(3)) / 4)).mul(f(globalEffect1))
  sel2.effect2 = f(10).pow(Math.floor(f(sel.level).add(f(2)) / 4)).mul(f(globalEffect1))
  sel2.effect3 = f(10).pow(Math.floor(f(sel.level).add(f(1)) / 4)).mul(f(globalEffect1))
  sel2.effect4 = f(2).pow(Math.floor(f(sel.level).add(f(0)) / 4))

  sel2.price = f(f(10).pow(f(14))).mul(f(10).pow(f(sel.level)))

  if (f(sel.level).equals(f(sel2.maxLevel))) {
    update(`content2_6_huntEvolution_upgrades_b2`, `<div class="noClick">MAX</div>`)
  } else {
    update(`content2_6_huntEvolution_upgrades_b2`, `<div class="noClick">EVOLVE</div>
                                                  <div class="noClick"><span class="boldBlackBorder" class="noClick">${format(f(sel2.price))}</span> Universal Shards</div>`)
  }
  update("content2_6_huntEvolution_upgrades_u2_1", `<div>${labelEffect1}</div>
                                                    <div>${sel2.description1}</div>`)
  update("content2_6_huntEvolution_upgrades_u2_2", `<div>${labelEffect2}</div>
                                                    <div>${sel2.description2}</div>`)
  update("content2_6_huntEvolution_upgrades_u2_3", `<div>${labelEffect3}</div>
                                                    <div>${sel2.description3}</div>`)
  update("content2_6_huntEvolution_upgrades_u2_4", `<div>${labelEffect4}</div>
                                                    <div>${sel2.description4}</div>`)

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
  var sel2 = IUniversalIn.huntEvolution.b3


  if (Math.floor(f(sel.level).add(f(3)) / 4) > 0) {
    var labelEffect1 = IUniversalIn.huntEvolutionLabels.effect1["level" + Math.floor(f(sel.level).add(f(3)) / 4)];
    sel2.description1 = `Essence/s ×<span class="boldBlackBorder">${format(f(sel2.effect1))}</span>`
    sel.active1 = true
  } else {
    labelEffect1 = ""
    sel2.description1 = ""
    sel.active1 = false
  }

  if (Math.floor(f(sel.level).add(f(2)) / 4) > 0) {
    var labelEffect2 = IUniversalIn.huntEvolutionLabels.effect2["level" + Math.floor(f(sel.level).add(f(2)) / 4)];
    sel2.description2 = `Price /<span class="boldBlackBorder">${format(f(sel2.effect2))}</span>`
    sel.active2 = true
  } else {
    labelEffect2 = ""
    sel2.description2 = ""
    sel.active2 = false
  }

  if (Math.floor(f(sel.level).add(f(1)) / 4) > 0) {
    var labelEffect3 = IUniversalIn.huntEvolutionLabels.effect3["level" + Math.floor(f(sel.level).add(f(1)) / 4)];
    sel2.description3 = `Associated effect Price /<span class="boldBlackBorder">${format(f(sel2.effect3))}</span>`
    sel.active3 = true
  } else {
    labelEffect3 = ""
    sel2.description3 = ""
    sel.active3 = false
  }

  if (Math.floor(f(sel.level).add(f(0)) / 4) > 0) {
    var labelEffect4 = IUniversalIn.huntEvolutionLabels.effect4["level" + Math.floor(f(sel.level).add(f(0)) / 4)];
    sel2.description4 = `Evolution upgrades ×<span class="boldBlackBorder">${format(f(sel2.effect4))}</span>`
    sel.active4 = true
  } else {
    labelEffect4 = ""
    sel2.description4 = ""
    sel.active4 = false
  }

  sel.level = f(sel.level)
  sel2.maxLevel = f(40)

  sel2.effect1 = f(5).pow(Math.floor(f(sel.level).add(f(3)) / 4)).mul(f(globalEffect1))
  sel2.effect2 = f(10).pow(Math.floor(f(sel.level).add(f(2)) / 4)).mul(f(globalEffect1))
  sel2.effect3 = f(10).pow(Math.floor(f(sel.level).add(f(1)) / 4)).mul(f(globalEffect1))
  sel2.effect4 = f(2).pow(Math.floor(f(sel.level).add(f(0)) / 4))

  sel2.price = f(f(10).pow(f(7))).mul(f(10).pow(f(sel.level)))

  if (f(sel.level).equals(f(sel2.maxLevel))) {
    update(`content2_6_huntEvolution_upgrades_b3`, `<div class="noClick">MAX</div>`)
  } else {
    update(`content2_6_huntEvolution_upgrades_b3`, `<div class="noClick">EVOLVE</div>
                                                  <div class="noClick"><span class="boldBlackBorder" class="noClick">${format(f(sel2.price))}</span> Universal Nodes</div>`)
  }
  update("content2_6_huntEvolution_upgrades_u3_1", `<div>${labelEffect1}</div>
                                                    <div>${sel2.description1}</div>`)
  update("content2_6_huntEvolution_upgrades_u3_2", `<div>${labelEffect2}</div>
                                                    <div>${sel2.description2}</div>`)
  update("content2_6_huntEvolution_upgrades_u3_3", `<div>${labelEffect3}</div>
                                                    <div>${sel2.description3}</div>`)
  update("content2_6_huntEvolution_upgrades_u3_4", `<div>${labelEffect4}</div>
                                                    <div>${sel2.description4}</div>`)

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
  var sel2 = IUniversalIn.huntEvolution.b4


  if (Math.floor(f(sel.level).add(f(3)) / 4) > 0) {
    var labelEffect1 = IUniversalIn.huntEvolutionLabels.effect1["level" + Math.floor(f(sel.level).add(f(3)) / 4)];
    sel2.description1 = `Essence/s ×<span class="boldBlackBorder">${format(f(sel2.effect1))}</span>`
    sel.active1 = true
  } else {
    labelEffect1 = ""
    sel2.description1 = ""
    sel.active1 = false
  }

  if (Math.floor(f(sel.level).add(f(2)) / 4) > 0) {
    var labelEffect2 = IUniversalIn.huntEvolutionLabels.effect2["level" + Math.floor(f(sel.level).add(f(2)) / 4)];
    sel2.description2 = `Price /<span class="boldBlackBorder">${format(f(sel2.effect2))}</span>`
    sel.active2 = true
  } else {
    labelEffect2 = ""
    sel2.description2 = ""
    sel.active2 = false
  }

  if (Math.floor(f(sel.level).add(f(1)) / 4) > 0) {
    var labelEffect3 = IUniversalIn.huntEvolutionLabels.effect3["level" + Math.floor(f(sel.level).add(f(1)) / 4)];
    sel2.description3 = `Associated effect Price /<span class="boldBlackBorder">${format(f(sel2.effect3))}</span>`
    sel.active3 = true
  } else {
    labelEffect3 = ""
    sel2.description3 = ""
    sel.active3 = false
  }

  if (Math.floor(f(sel.level).add(f(0)) / 4) > 0) {
    var labelEffect4 = IUniversalIn.huntEvolutionLabels.effect4["level" + Math.floor(f(sel.level).add(f(0)) / 4)];
    sel2.description4 = `Evolution upgrades ×<span class="boldBlackBorder">${format(f(sel2.effect4))}</span>`
    sel.active4 = true
  } else {
    labelEffect4 = ""
    sel2.description4 = ""
    sel.active4 = false
  }

  sel.level = f(sel.level)
  sel2.maxLevel = f(40)

  sel2.effect1 = f(5).pow(Math.floor(f(sel.level).add(f(3)) / 4)).mul(f(globalEffect1))
  sel2.effect2 = f(10).pow(Math.floor(f(sel.level).add(f(2)) / 4)).mul(f(globalEffect1))
  sel2.effect3 = f(10).pow(Math.floor(f(sel.level).add(f(1)) / 4)).mul(f(globalEffect1))
  sel2.effect4 = f(2).pow(Math.floor(f(sel.level).add(f(0)) / 4))

  sel2.price = f(f(10).pow(f(7))).mul(f(10).pow(f(sel.level)))

  if (f(sel.level).equals(f(sel2.maxLevel))) {
    update(`content2_6_huntEvolution_upgrades_b4`, `<div class="noClick">MAX</div>`)
  } else {
    update(`content2_6_huntEvolution_upgrades_b4`, `<div class="noClick">EVOLVE</div>
                                                  <div class="noClick"><span class="boldBlackBorder" class="noClick">${format(f(sel2.price))}</span> Universal Nodes</div>`)
  }
  update("content2_6_huntEvolution_upgrades_u4_1", `<div>${labelEffect1}</div>
                                                    <div>${sel2.description1}</div>`)
  update("content2_6_huntEvolution_upgrades_u4_2", `<div>${labelEffect2}</div>
                                                    <div>${sel2.description2}</div>`)
  update("content2_6_huntEvolution_upgrades_u4_3", `<div>${labelEffect3}</div>
                                                    <div>${sel2.description3}</div>`)
  update("content2_6_huntEvolution_upgrades_u4_4", `<div>${labelEffect4}</div>
                                                    <div>${sel2.description4}</div>`)


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
  var sel2 = IUniversalIn.huntEvolution.b5


  if (Math.floor(f(sel.level).add(f(3)) / 4) > 0) {
    var labelEffect1 = IUniversalIn.huntEvolutionLabels.effect1["level" + Math.floor(f(sel.level).add(f(3)) / 4)];
    sel2.description1 = `Essence/s ×<span class="boldBlackBorder">${format(f(sel2.effect1))}</span>`
    sel.active1 = true
  } else {
    labelEffect1 = ""
    sel2.description1 = ""
    sel.active1 = false
  }

  if (Math.floor(f(sel.level).add(f(2)) / 4) > 0) {
    var labelEffect2 = IUniversalIn.huntEvolutionLabels.effect2["level" + Math.floor(f(sel.level).add(f(2)) / 4)];
    sel2.description2 = `Price /<span class="boldBlackBorder">${format(f(sel2.effect2))}</span>`
    sel.active2 = true
  } else {
    labelEffect2 = ""
    sel2.description2 = ""
    sel.active2 = false
  }

  if (Math.floor(f(sel.level).add(f(1)) / 4) > 0) {
    var labelEffect3 = IUniversalIn.huntEvolutionLabels.effect3["level" + Math.floor(f(sel.level).add(f(1)) / 4)];
    sel2.description3 = `Associated effect Price /<span class="boldBlackBorder">${format(f(sel2.effect3))}</span>`
    sel.active3 = true
  } else {
    labelEffect3 = ""
    sel2.description3 = ""
    sel.active3 = false
  }

  if (Math.floor(f(sel.level).add(f(0)) / 4) > 0) {
    var labelEffect4 = IUniversalIn.huntEvolutionLabels.effect4["level" + Math.floor(f(sel.level).add(f(0)) / 4)];
    sel2.description4 = `Evolution upgrades ×<span class="boldBlackBorder">${format(f(sel2.effect4))}</span>`
    sel.active4 = true
  } else {
    labelEffect4 = ""
    sel2.description4 = ""
    sel.active4 = false
  }

  sel.level = f(sel.level)
  sel2.maxLevel = f(40)

  sel2.effect1 = f(5).pow(Math.floor(f(sel.level).add(f(3)) / 4)).mul(f(globalEffect1))
  sel2.effect2 = f(10).pow(Math.floor(f(sel.level).add(f(2)) / 4)).mul(f(globalEffect1))
  sel2.effect3 = f(10).pow(Math.floor(f(sel.level).add(f(1)) / 4)).mul(f(globalEffect1))
  sel2.effect4 = f(2).pow(Math.floor(f(sel.level).add(f(0)) / 4))

  sel2.price = f(1000).mul(f(10).pow(f(sel.level)))

  if (f(sel.level).equals(f(sel2.maxLevel))) {
    update(`content2_6_huntEvolution_upgrades_b5`, `<div class="noClick">MAX</div>`)
  } else {
    update(`content2_6_huntEvolution_upgrades_b5`, `<div class="noClick">EVOLVE</div>
                                                  <div class="noClick"><span class="boldBlackBorder" class="noClick">${format(f(sel2.price))}</span> Universal Cores</div>`)
  }
  update("content2_6_huntEvolution_upgrades_u5_1", `<div>${labelEffect1}</div>
                                                    <div>${sel2.description1}</div>`)
  update("content2_6_huntEvolution_upgrades_u5_2", `<div>${labelEffect2}</div>
                                                    <div>${sel2.description2}</div>`)
  update("content2_6_huntEvolution_upgrades_u5_3", `<div>${labelEffect3}</div>
                                                    <div>${sel2.description3}</div>`)
  update("content2_6_huntEvolution_upgrades_u5_4", `<div>${labelEffect4}</div>
                                                    <div>${sel2.description4}</div>`)



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

  IUniversal.automation.automation1.level = f(IUniversal.automation.automation1.level)


  IUniversalIn.automation.automation1.maxLevel = f(3)

  ISelUpgrade.group.group1.maxNum = f(IUniversal.automation.automation1.level).add(f(1))

  IUniversalIn.automation.automation1.price = (f(10).pow(5)).pow(f(IUniversal.automation.automation1.level).add(f(1)))

  //AUTOMATION 2

  IUniversalIn.automation.automation2.price = (f(10).pow(f(7)))

  //AUTOMATION 3

  IUniversalIn.automation.automation3.price = (f(10).pow(f(11)))

  //AUTOMATION 4

  IUniversalIn.automation.automation4.price = (f(10).pow(f(15)))

  //AUTOMATION 5

  IUniversalIn.automation.automation5.price = (f(10).pow(f(23)))

  //Automation 6

  IUniversal.automation.automation6.level = f(IUniversal.automation.automation6.level)

  IUniversalIn.automation.automation6.maxLevel = f(3)

  IUniversalIn.automation.automation6.price = (f(10).pow(10)).pow(f(IUniversal.automation.automation6.level).add(f(1)))

  IUniversalIn.automation.automation6.option0 = "Fight from the start"

  IUniversalIn.automation.automation6.option1 = "Fight 20 Universal Challengers from the maximum"

  IUniversalIn.automation.automation6.option2 = "Fight 10 Universal Challengers from the maximum"

  IUniversalIn.automation.automation6.option3 = "Fight 5 Universal Challengers from the maximum"

  //Automation 7

  IUniversalIn.automation.automation7.price = (f(10).pow(f(40)))

  //Automation 8

  IUniversalIn.automation.automation8.price = (f(10).pow(f(45)))

  //Automation 9

  IUniversalIn.automation.automation9.price = (f(10).pow(f(60)))

  //Automation 10

  IUniversalIn.automation.automation10.price = (f(10).pow(f(65)))

  //Automation 11

  IUniversalIn.automation.automation11.price = (f(10).pow(f(80)))

  //Automation 12

  IUniversalIn.automation.automation12.price = (f(10).pow(f(85)))

  //Automation 13

  IUniversalIn.automation.automation13.price = (f(10).pow(f(70)))

  //Automation 14

  IUniversalIn.automation.automation14.price = (f(10).pow(f(90)))

  //LORE

  //note1
  IUniversalIn.lore.lore1 = "Welcome to your first universe\n" +
    "A barren realm, the weakest among the infinite worlds scattered across existence\n" +
    "There is only one path forward: grow stronger, by any means necessary\n" +
    "Train, little warrior… and in time, the Multiverse itself will kneel before you";

  //note2
  IUniversalIn.lore.lore2 = "Challengers, Creatures, just like you\n" +
    "Here, strength is the only measure of worth, and the only way to prove it is to win\n" +
    "A simple law of nature. No wealth, no luck, only raw Power\n" +
    "But if all that matters is to endlessly grasp for more Power…\n" +
    "What meaning remains in the struggle itself?";

  //note3
  IUniversalIn.lore.lore3 = "There are two absolute truths in this world: you win, or you die\n" +
    "But what truly happens when something dies?\n" +
    "Some claim its soul merges with yours, resonating in harmony\n" +
    "Others believe the fallen body grants its finest qualities\n" +
    "And there are those who say it is simply the reward of killing\n" +
    "A natural law written into existence itself\n" +
    "No one really knows the truth.\n" +
    "The only certainty is this: Essence flows from death, and Essence makes you stronger\n" +
    "And that alone is enough to satisfy everyone";

  //note4
  IUniversalIn.lore.lore4 = "You stand at the pinnacle of this universe\n" +
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
  IUniversalIn.lore.lore5 = "As your abilities refine, you begin to strike a roadblock\n" +
    "Raw strength can take you far, but not far enough. Talent must now emerge\n" +
    "Attributes, when properly honed, reveal their true essence, a formula for growth\n" +
    "Yet to awaken them, you must gather fragments of other Universal Climbers like yourself\n" +
    "Such power demands sacrifice. Are you ready to face how much further you still have to climb?";

  IUniversalIn.lore.lore6 = "Universal Cores, forged from the hearts of your challengers, fuse and resonate, shattering unseen barriers\n" +
    "A red rift tears open before you, emanating a heat you have never known\n" +
    "Pure, elemental fire\n" +
    "These flames cannot be touched, cannot be tamed. You can only feed them… and let them burn you anew\n" +
    "Elemental Universes, chaotic crucibles of creation and destruction, purer than any ordinary universe\n" +
    "You once reached for higher universes in the small pond you called ascension, but now a new paradigm unfolds before you\n" +
    "There is a raw, mysterious secret you have only glimpsed";

  IUniversalIn.lore.lore7 = "What is the universe?\n" +
    "The universe is made of energies, the more raw they are, and the more an universe contains them, the more likely for a better universe\n" +
    "Flames ravage the very fabric of worlds, and in this chaos, you need water to cleanse and restore\n" +
    "Looking back at your home, made of the simplest of energies, as big as a moon\n" +
    "A question comes up, how can stronger universes sustain life?\n" +
    "Shouldn't Chaos consume them all?\n" +
    "The answer is Water, Water Universes, a new type of universe you just discovered, seems to be the coolant of this chaotic energies, making them able to coexist with each other\n" +
    "Is it possible with Water to make my own universe possible to hold other energies?\n"
  //FIRE TREE
  //


  //HEAT TIMER

  if (IUniversal.fireTree.node42.active) {
    var heat1 = f(IUniversalIn.fireTree.node42.effect)
  } else {
    heat1 = f(0)
  }

  if (IUniversal.fireTree.node51.active) {
    var heat2 = f(IUniversalIn.fireTree.node51.effect)
  } else {
    heat2 = f(0)
  }

  IUniversal.heatTimer = f(10).add(f(heat1)).add(f(heat2))


  //NODE 1
  var sel = IUniversal.fireTree.node1
  var sel2 = IUniversalIn.fireTree.node1


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Fire Rift</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">1</div>
                  <div class="centerDiv padding2 fontSize09"><span class="boldBlackBorder">${format(f(sel2.effect), 0)}</span>&nbsp;Fire/s</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Universal Cores</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = f(100)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level).minus(f(1)))
  } else {
    sel2.effect = f(0)
  }


  sel2.price = (f(10).pow(f(15))).mul(f(10).pow(f(5).mul(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node1.priceIdentity, IUniversalIn.fireTree.node1.price, "uniChallenger")) { return true } }
  sel2.req = function () { return true }

  //NODE 2
  var sel = IUniversal.fireTree.node2
  var sel2 = IUniversalIn.fireTree.node2


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Woodcutter</div>
                  <div class="topRight absolute padding2 grey">2</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="centerDiv column fontSize09"><div><span class="boldBlackBorder">${format(f(IUniversal.woodProdBase), 0)}</span>&nbsp;Wood/s</div>
                  <div class="fontSize09"><span class="boldBlackBorder">${format(f(IUniversal.wood), 0)}</span>&nbsp;Wood ⇒ ×<span class="boldBlackBorder">${format(f(sel2.effect2), 1)}</span> Fire/s</div></div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire</div>`


  var extraLevel1 = f(IUniversalIn.fireTree.node13.effect)

  sel.level = f(sel.level)
  sel2.maxLevel = f(10).add(f(extraLevel1))

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level).minus(f(1)))
  } else {
    sel2.effect = f(0)
  }

  var effect1 = f(IUniversalIn.fireTree.node19.effect)


  if (f(sel2.effect).gt(f(0))) {
    sel2.effect2 = f(2).pow(f(Decimal.log10(f(IUniversal.wood).add(f(10))))).mul(f(effect1))
  } else {
    sel2.effect2 = f(1)
  }

  var price1 = f(IUniversalIn.fireTree.node16.effect)


  sel2.price = f(10).mul(f(2).pow(f(sel.level))).dividedBy(f(price1))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node2.priceIdentity, IUniversalIn.fireTree.node2.price, "uni")) { return true } }
  sel2.req = function () { return IUniversal.fireTree.node1.active }

  //NODE 3
  var sel = IUniversal.fireTree.node3
  var sel2 = IUniversalIn.fireTree.node3


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Miner</div>
                  <div class="topRight absolute padding2 grey">3</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="centerDiv column fontSize09"><div><span class="boldBlackBorder">${format(f(IUniversal.coalProdBase), 0)}</span>&nbsp;Coal/s</div>
                                                 <div><span class="boldBlackBorder">${format(f(IUniversal.coal), 0)}</span>&nbsp;Coal ⇒ ×<span class="boldBlackBorder">${format(f(sel2.effect2), 1)}</span> Fire/s</div></div>
                  
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire</div>`



  var extraLevel1 = f(IUniversalIn.fireTree.node14.effect)
  sel.level = f(sel.level)
  sel2.maxLevel = f(10).add(f(extraLevel1))

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level).minus(f(1)))
  } else {
    sel2.effect = f(0)
  }

  var effect1 = f(IUniversalIn.fireTree.node19.effect)


  if (f(sel2.effect).gt(f(0))) {
    sel2.effect2 = ((f(2).pow(f(Decimal.log10(f(IUniversal.coal).add(f(10)))))).pow(f(1.2))).mul(f(effect1))
  } else {
    sel2.effect2 = f(1)
  }

  var price1 = f(IUniversalIn.fireTree.node17.effect)

  sel2.price = f(f(10).pow(f(4))).mul(f(5).pow(f(sel.level))).dividedBy(f(price1))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node3.priceIdentity, IUniversalIn.fireTree.node3.price, "uni")) { return true } }
  sel2.req = function () { return IUniversal.fireTree.node2.active }

  //NODE 4
  var sel = IUniversal.fireTree.node4
  var sel2 = IUniversalIn.fireTree.node4


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Fire Warrior</div>
                  <div class="topRight absolute padding2 grey">4</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="centerDiv column fontSize09"><div><span class="boldBlackBorder">${format(f(IUniversal.magmaProdBase), 0)}</span>&nbsp;Magma/s</div>
                                                 <div><span class="boldBlackBorder">${format(f(IUniversal.magma), 0)}</span>&nbsp;Magma ⇒ ×<span class="boldBlackBorder">${format(f(sel2.effect2), 1)}</span> Fire/s</div></div>
                  
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire</div>`



  var extraLevel1 = f(IUniversalIn.fireTree.node15.effect)

  sel.level = f(sel.level)
  sel2.maxLevel = f(10).add(f(extraLevel1))

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level).minus(f(1)))
  } else {
    sel2.effect = f(0)
  }

  var effect1 = f(IUniversalIn.fireTree.node19.effect)

  if (f(sel2.effect).gt(f(0))) {
    sel2.effect2 = ((f(2).pow(f(Decimal.log10(f(IUniversal.magma).add(f(10)))))).pow(f(1.8))).mul(f(effect1))
  } else {
    sel2.effect2 = f(1)
  }

  var price1 = f(IUniversalIn.fireTree.node18.effect)


  sel2.price = f(f(10).pow(f(10))).mul(f(15).pow(f(sel.level))).dividedBy(f(price1))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node4.priceIdentity, IUniversalIn.fireTree.node4.price, "uni")) { return true } }
  sel2.req = function () { return IUniversal.fireTree.node3.active }

  //NODE 5
  var sel = IUniversal.fireTree.node5
  var sel2 = IUniversalIn.fireTree.node5


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Tree Cutter</div>
                  <div class="topRight absolute padding2 grey">5</div>
                  <div class="centerDiv padding1 column fontSize09"><div><span class="boldBlackBorder">${format(f(sel.level), 0)}</span>&nbsp;Wood sacrificed</div>
                                                 <div>Wood/s<span class="boldBlackBorder"> ×${format(f(sel2.effect), 1)}</span>&nbsp;</div>
                  
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">Sacrifice</div>
                <div class="centerDiv noClick">Wood</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.5).pow(f(Decimal.log10(f(sel.level).add(f(10)))))
  } else {
    sel2.effect = f(1)
  }

  sel2.price = (f(10).pow(f(15))).add(f(5).mul(sel.level).mul(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { return true }
  sel2.req = function () { return IUniversal.fireTree.node2.active }

  //NODE 6
  var sel = IUniversal.fireTree.node6
  var sel2 = IUniversalIn.fireTree.node6


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Bedrock Miner</div>
                  <div class="topRight absolute padding2 grey">6</div>
                  <div class="centerDiv padding1 column fontSize09"><div><span class="boldBlackBorder">${format(f(sel.level), 0)}</span>&nbsp;Coal sacrificed</div>
                                                 <div>Coal/s<span class="boldBlackBorder"> ×${format(f(sel2.effect), 1)}</span>&nbsp;</div>
                  
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">Sacrifice</div>
                <div class="centerDiv noClick">Coal</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.5).pow(f(Decimal.log10(f(sel.level).add(f(10)))))
  } else {
    sel2.effect = f(1)
  }

  sel2.price = (f(10).pow(f(15))).add(f(5).mul(sel.level).mul(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { return true }
  sel2.req = function () { return IUniversal.fireTree.node3.active }

  //NODE 7
  var sel = IUniversal.fireTree.node7
  var sel2 = IUniversalIn.fireTree.node7


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Magma Champion</div>
                  <div class="topRight absolute padding2 grey">7</div>
                  <div class="centerDiv padding1 column fontSize09"><div><span class="boldBlackBorder">${format(f(sel.level), 0)}</span>&nbsp;Magma sacrificed</div>
                                                 <div>Magma/s<span class="boldBlackBorder"> ×${format(f(sel2.effect), 1)}</span>&nbsp;</div>
                  
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">Sacrifice</div>
                <div class="centerDiv noClick">Magma</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.5).pow(f(Decimal.log10(f(sel.level).add(f(10)))))
  } else {
    sel2.effect = f(1)
  }

  sel2.price = (f(10).pow(f(15))).add(f(5).mul(sel.level).mul(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { return true }
  sel2.req = function () { return IUniversal.fireTree.node4.active }

  //NODE 8
  var sel = IUniversal.fireTree.node8
  var sel2 = IUniversalIn.fireTree.node8


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Forest Destroyer</div>
                 <div class="topRight absolute padding2 grey">8</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div><span class="boldBlackBorder padding2 fontSize09">×${format(f(sel2.effect), 0)}</span>&nbsp;Wood/s</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Heat</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = f(10)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  sel2.effect = f(5).pow(f(sel.level))
  sel2.price = (f(10).pow(f(15))).add(f(5).mul(sel.level).mul(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node8.priceIdentity, IUniversalIn.fireTree.node8.price, "uni")) { return true } }
  sel2.req = function () { return IUniversal.fireTree.node5.active && IUniversalIn.fireMilestones.m5.mCheck() }

  //NODE 9
  var sel = IUniversal.fireTree.node9
  var sel2 = IUniversalIn.fireTree.node9


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Mine Eater</div>
                 <div class="topRight absolute padding2 grey">9</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div><span class="boldBlackBorder padding2 fontSize09">×${format(f(sel2.effect), 0)}</span>&nbsp;Coal/s</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Heat</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(10)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  sel2.effect = f(5).pow(f(sel.level))
  sel2.price = (f(10).pow(f(15))).add(f(5).mul(sel.level).mul(f(sel.level)))


  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node9.priceIdentity, IUniversalIn.fireTree.node9.price, "uni")) { return true } }
  sel2.req = function () { return IUniversal.fireTree.node6.active && IUniversalIn.fireMilestones.m5.mCheck() }

  //NODE 10
  var sel = IUniversal.fireTree.node10
  var sel2 = IUniversalIn.fireTree.node10


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Fire Lord</div>
                 <div class="topRight absolute padding2 grey">10</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div><span class="boldBlackBorder padding2 fontSize09">×${format(f(sel2.effect), 0)}</span>&nbsp;Magma/s</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Heat</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = f(10)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  sel2.effect = f(5).pow(f(sel.level))
  sel2.price = (f(10).pow(f(15))).add(f(5).mul(sel.level).mul(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node10.priceIdentity, IUniversalIn.fireTree.node10.price, "uni")) { return true } }
  sel2.req = function () { return IUniversal.fireTree.node7.active && IUniversalIn.fireMilestones.m5.mCheck() }

  //NODE 11
  var sel = IUniversal.fireTree.node11
  var sel2 = IUniversalIn.fireTree.node11


  if (f(IUniversal.fire).gt(f(0))) {
    var tempEffect = IUniversal.fire
  } else {
    tempEffect = f(0)
  }

  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Size</div>
                 <div class="topRight absolute padding2 grey">11</div>
                 <div><span class="boldBlackBorder fontSize09">${format(f(tempEffect), 0)}</span>&nbsp;Fire ⇒ <span class="boldBlackBorder">${format(f(IUniversal.size), 0)} (+${format(f(sel2.effect))})</span>&nbsp;Size</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">Sacrifice Fire and all upgrades 2-7</div>`

  sel.level = f(0)
  sel2.maxLevel = Infinity

  if (f(tempEffect).gt(f(0))) {
    sel2.effect = f(2).pow(f(Decimal.ln(f(tempEffect).add(f(2)))).minus(f(1))).minus(f(1)).mul(f(IUniversalIn.fireTree.node38.effect))
    if (f(sel2.effect).lt(f(0))) {
      sel2.effect = f(0)
    }
  } else {
    sel2.effect = f(0)
  }

  sel2.price = (f(10).pow(f(15))).add(f(5).mul(sel.level).mul(f(sel.level)))

  if (f(IUniversal.size).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { return true }
  sel2.req = function () { return IUniversal.fireTree.node2.active }

  //NODE 12
  var sel = IUniversal.fireTree.node12
  var sel2 = IUniversalIn.fireTree.node12


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Dry Air</div>
                 <div class="topRight absolute padding2 grey">12</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Fire/s ×1.2 (<span class="boldBlackBorder">×${format(f(sel2.effect), 1)}</span>)</div>
                                                 
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Size</div>`


  var extraLevel1 = f(IUniversalIn.fireTree.node22.effect)
  sel.level = f(sel.level)
  sel2.maxLevel = f(100).add(f(extraLevel1))

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  sel2.effect = f(1.2).pow(f(sel.level))
  sel2.price = f(0.5).mul(f(10).pow(f(1))).mul(f(3).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node12.priceIdentity, IUniversalIn.fireTree.node12.price, "uni")) { return true } }
  sel2.req = function () { return IUniversal.fireTree.node11.active }

  //NODE 13
  var sel = IUniversal.fireTree.node13
  var sel2 = IUniversalIn.fireTree.node13


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Big Forest</div>
                 <div class="topRight absolute padding2 grey">13</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Woodcutter max level <span class="boldBlackBorder">+${format(f(sel2.effect), 0)}</span></div>
                                                 
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Size</div>`



  var extraLevel1 = f(IUniversalIn.fireTree.node22.effect)
  sel.level = f(sel.level)
  sel2.maxLevel = f(90).add(f(extraLevel1))

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(sel.level)
  } else {
    sel2.effect = f(0)
  }
  sel2.price = (f(5).mul(f(10).pow(f(1))).mul(f(5).pow(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node13.priceIdentity, IUniversalIn.fireTree.node13.price, "uni")) { return true } }
  sel2.req = function () { return IUniversal.fireTree.node12.active }

  //NODE 14
  var sel = IUniversal.fireTree.node14
  var sel2 = IUniversalIn.fireTree.node14


  if (f(IUniversal.coal).gt(f(0))) {
    var tempEffect = f(Decimal.log10(f(IUniversal.coal).add(f(10))))
  } else {
    tempEffect = f(1)
  }

  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Fuel Factory</div>
                 <div class="topRight absolute padding2 grey">14</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Miner max level <span class="boldBlackBorder">+${format(f(sel2.effect), 0)}</span></div>
                                                 
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Size</div>`


  var extraLevel1 = f(IUniversalIn.fireTree.node22.effect)

  sel.level = f(sel.level)
  sel2.maxLevel = f(90).add(f(extraLevel1))

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(sel.level)
  } else {
    sel2.effect = f(0)
  }
  sel2.price = (f(50).mul(f(10).pow(f(1))).mul(f(8).pow(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node14.priceIdentity, IUniversalIn.fireTree.node14.price, "uni")) { return true } }
  sel2.req = function () { return IUniversal.fireTree.node13.active }

  //NODE 15
  var sel = IUniversal.fireTree.node15
  var sel2 = IUniversalIn.fireTree.node15


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Magma Pools</div>
                 <div class="topRight absolute padding2 grey">15</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Fire Warrior max level <span class="boldBlackBorder">+${format(f(sel2.effect), 0)}</span></div>
                                                 
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Size</div>`


  var extraLevel1 = f(IUniversalIn.fireTree.node22.effect)

  sel.level = f(sel.level)
  sel2.maxLevel = f(90).add(f(extraLevel1))

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(sel.level)
  } else {
    sel2.effect = f(0)
  }
  sel2.price = (f(5000).mul(f(10).pow(f(1))).mul(f(30).pow(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node15.priceIdentity, IUniversalIn.fireTree.node15.price, "uni")) { return true } }
  sel2.req = function () { return IUniversal.fireTree.node14.active }

  //NODE 16
  var sel = IUniversal.fireTree.node16
  var sel2 = IUniversalIn.fireTree.node16


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Tree Farms</div>
                 <div class="topRight absolute padding2 grey">16</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Woodcutter price /2 (<span class="boldBlackBorder">/${format(f(sel2.effect), 0)}</span>)</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Size</div>`

  var extraLevel1 = f(IUniversalIn.fireTree.node22.effect)

  sel.level = f(sel.level)
  sel2.maxLevel = f(5).add(f(extraLevel1))

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }
  sel2.price = (f(5).mul(f(10).pow(f(1))).mul(f(10).pow(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node16.priceIdentity, IUniversalIn.fireTree.node16.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node12.active) }

  //NODE 17
  var sel = IUniversal.fireTree.node17
  var sel2 = IUniversalIn.fireTree.node17


  if (f(IUniversal.size).gt(f(0))) {
    var tempEffect = f(Decimal.log10(f(IUniversal.size).add(f(10))))
  } else {
    tempEffect = f(1)
  }

  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Quarries</div>
                 <div class="topRight absolute padding2 grey">17</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Miner price /2 (<span class="boldBlackBorder">/${format(f(sel2.effect), 0)}</span>)</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Size</div>`

  var extraLevel1 = f(IUniversalIn.fireTree.node22.effect)

  sel.level = f(sel.level)
  sel2.maxLevel = f(5).add(f(extraLevel1))

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }
  sel2.price = (f(50).mul(f(10).pow(f(1))).mul(f(12).pow(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node17.priceIdentity, IUniversalIn.fireTree.node17.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node16.active) }


  //NODE 18
  var sel = IUniversal.fireTree.node18
  var sel2 = IUniversalIn.fireTree.node18


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Fire Union</div>
                 <div class="topRight absolute padding2 grey">18</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Fire Warrior price /2 (<span class="boldBlackBorder">/${format(f(sel2.effect), 0)}</span>)</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Size</div>`

  var extraLevel1 = f(IUniversalIn.fireTree.node22.effect)

  sel.level = f(sel.level)
  sel2.maxLevel = f(5).add(f(extraLevel1))

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }
  sel2.price = (f(5000).mul(f(10).pow(f(1))).mul(f(30).pow(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node18.priceIdentity, IUniversalIn.fireTree.node18.price, "uni")) { return true } }
  sel2.req = function () { return IUniversal.fireTree.node17.active }


  //NODE 19
  var sel = IUniversal.fireTree.node19
  var sel2 = IUniversalIn.fireTree.node19


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Living Trees</div>
                 <div class="topRight absolute padding2 grey">19</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Woodcutter effect ×2 (<span class="boldBlackBorder">×${format(f(sel2.effect), 0)}</span>)</div>

                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Size</div>`

  var extraLevel1 = f(IUniversalIn.fireTree.node22.effect)

  sel.level = f(sel.level)
  sel2.maxLevel = f(5).add(f(extraLevel1))

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }
  sel2.price = (f(5).mul(f(10).pow(f(1))).mul(f(10).pow(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node19.priceIdentity, IUniversalIn.fireTree.node19.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node16.active) }

  //NODE 20
  var sel = IUniversal.fireTree.node20
  var sel2 = IUniversalIn.fireTree.node20


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Coal Planets</div>
                 <div class="topRight absolute padding2 grey">20</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Miner effect ×2 (<span class="boldBlackBorder">×${format(f(sel2.effect), 0)}</span>)</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Size</div>`


  var extraLevel1 = f(IUniversalIn.fireTree.node22.effect)

  sel.level = f(sel.level)
  sel2.maxLevel = f(5).add(f(extraLevel1))

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }
  sel2.price = (f(5000).mul(f(10).pow(f(1))).mul(f(12).pow(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node20.priceIdentity, IUniversalIn.fireTree.node20.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node17.active) }


  //NODE 21
  var sel = IUniversal.fireTree.node21
  var sel2 = IUniversalIn.fireTree.node21


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Liquid Fire</div>
                 <div class="topRight absolute padding2 grey">21</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Fire Warrior effect ×2 (<span class="boldBlackBorder">×${format(f(sel2.effect), 0)}</span>)</div>

                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Size</div>`


  var extraLevel1 = f(IUniversalIn.fireTree.node22.effect)


  sel.level = f(sel.level)
  sel2.maxLevel = f(5).add(f(extraLevel1))

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }
  sel2.price = (f(500000).mul(f(10).pow(f(1))).mul(f(30).pow(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node21.priceIdentity, IUniversalIn.fireTree.node21.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node18.active) }

  //NODE 22
  var sel = IUniversal.fireTree.node22
  var sel2 = IUniversalIn.fireTree.node22


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Fire Planet</div>
                 <div class="topRight absolute padding2 grey">22</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>upgrades 12-21 max level <span class="boldBlackBorder">+${format(f(sel2.effect), 0)}</span></div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Size</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = f(100)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(sel.level)
  } else {
    sel2.effect = f(0)
  }
  sel2.price = (f(500000).mul(f(10).pow(f(1))).mul(f(100).pow(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node22.priceIdentity, IUniversalIn.fireTree.node22.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node15.active && IUniversal.fireTree.node18.active) }

  //NODE 23
  var sel = IUniversal.fireTree.node23
  var sel2 = IUniversalIn.fireTree.node23


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Charcoal Empire</div>
                 <div class="topRight absolute padding2 grey">23</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Coal/s ×Wood (<span class="boldBlackBorder">×${format(f(sel2.effect), 0)}</span>) cumulative</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Size</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = f(5)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.2).pow(Decimal.log10(f(IUniversal.wood))).mul(f(sel.level))
  } else {
    sel2.effect = f(1)
  }
  sel2.price = (f(5000000000).mul(f(10).pow(f(1))).mul(f(1000000).pow(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node23.priceIdentity, IUniversalIn.fireTree.node23.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node22.active) }

  //NODE 24
  var sel = IUniversal.fireTree.node24
  var sel2 = IUniversalIn.fireTree.node24


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Core Feeder</div>
                 <div class="topRight absolute padding2 grey">24</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Magma/s ×Coal (<span class="boldBlackBorder">×${format(f(sel2.effect), 0)}</span>) cumulative</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Size</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(5)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.2).pow(Decimal.log10(f(IUniversal.coal))).mul(f(sel.level))
  } else {
    sel2.effect = f(1)
  }
  sel2.price = (f(50000000000000).mul(f(10).pow(f(1))).mul(f(10000000).pow(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node24.priceIdentity, IUniversalIn.fireTree.node24.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node23.active) }

  //NODE 25
  var sel = IUniversal.fireTree.node25
  var sel2 = IUniversalIn.fireTree.node25


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Fire Blood</div>
                 <div class="topRight absolute padding2 grey">25</div>
                                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>

                 <div class="centerDiv padding1 column fontSize09"><div>Damage x1.2 (<span class="boldBlackBorder">×${format(f(sel2.effect), 1)}</span>)</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Size</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }
  sel2.price = f(1).mul(f(10).pow(f(1))).mul(f(10).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node25.priceIdentity, IUniversalIn.fireTree.node25.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node11.active) }

  //NODE 26
  var sel = IUniversal.fireTree.node26
  var sel2 = IUniversalIn.fireTree.node26


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Magma Skin</div>
                 <div class="topRight absolute padding2 grey">26</div>
                                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Life x1.2 (<span class="boldBlackBorder">×${format(f(sel2.effect), 1)}</span>)</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Size</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }
  sel2.price = f(1).mul(f(10).pow(f(1))).mul(f(10).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node26.priceIdentity, IUniversalIn.fireTree.node26.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node11.active) }

  //NODE 27
  var sel = IUniversal.fireTree.node27
  var sel2 = IUniversalIn.fireTree.node27


  if (sel.active) {
    sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Universe Furnace</div>
                 <div class="topRight absolute padding2 grey">27</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Burn empty universes with Heat</div>
                                                        <div>Produce Fire Shards</div>
                                                        <div class="line"></div>
                                                        <div>Heat /${format(f(sel2.effect2), 2)} every ${format(f(IUniversal.heatTimer))} seconds</div>
                                                        <div class="centerDiv noClick boldBlackBorder">${format(f(f(IUniversal.heatTimer).minus(f(IUniversal.heatCurrentTimer))), 1)}s</div>
                                                        <div><span class="boldBlackBorder">${format(f(IUniversal.heat), 1)}</span> Heat</div>
                                                        <div></div>
                 </div>`
  } else {
    sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Universe Furnace</div>
                 <div class="topRight absolute padding2 grey">27</div>
                 <div class="centerDiv padding1 column"><div>Burn empty universes with Heat</div>
                 </div>`
  }
  if (sel.active) {
    unlockShow("content2_17_node27_button", false)
    sel2.button = ``
  } else {
    unlockShow("content2_17_node27_button", true)
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Size</div>`
  }

  sel.level = f(sel.level)
  sel2.maxLevel = f(1)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (sel.active) {
    sel2.effect = f(1.2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }

  if (sel.active) {
    sel2.effect2 = f(2).minus(f(IUniversalIn.fireTree.node53.effect))
  } else {
    sel2.effect2 = f(1)
  }
  sel2.price = f(f(10).pow(f(30)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node27.priceIdentity, IUniversalIn.fireTree.node27.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node11.active) }

  //NODE 28
  var sel = IUniversal.fireTree.node28
  var sel2 = IUniversalIn.fireTree.node28


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Manual Burner</div>
                 <div class="topRight absolute padding2 grey">28</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Heat <span class="boldBlackBorder">+${format(f(sel2.effect), 1)}</span></div>
                 </div>`

  if (!sel.activeTimer) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">Click</div>`

  } else {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">Wait ${format(f(f(sel.timer).minus(f(sel.currentTimer))), 1)}s</div>`

  }

  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  sel2.effect = f(1).mul(f(IUniversalIn.fireTree.node48.effect))

  sel2.price = f(0)
  sel.timer = f(2)
  sel.currentTimer = f(sel.currentTimer)



  if (sel2.req()) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node28.priceIdentity, IUniversalIn.fireTree.node28.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node27.active) }

  //NODE 29
  var sel = IUniversal.fireTree.node29
  var sel2 = IUniversalIn.fireTree.node29

  sel.level = f(sel.level)



  var req = f(5).mul(f(2).pow(f(f(sel.level))))

  if (f(IUniversal.heat).gte(f(req))) {
    sel.level = f(sel.level).add(f(1))
  }

  var name = `Burnt Universe ${sel.level}`

  const sizes = Object.values(IUniversalIn.node29Size);
  const selectedSize = sizes.filter(s => s.req <= sel.level).sort((a, b) => b.req - a.req)[0];
  var size = selectedSize ? `(${selectedSize.name})` : `(Unknown Size)`;

  var requirement = `Requires <span class="noClick boldBlackBorder">${format(f(IUniversal.heat))} / ${format(f(req))}</span> Heat`
  var eff = `<div><span class="noClick boldBlackBorder">${format(f(IUniversal.fireShards))}</span> Fire Shards</div>
  <div><span class="noClick boldBlackBorder">${format(sec(IUniversal.fireShardsProd))}</span>/s</div>`

  sel2.content = `
  <div class="top centerDivTopColumns">
    <div class="">${name}</div>
    <div class="">${size}</div>
    <div class="margin1">${eff}</div>
    <div class="margin1">${requirement}</div>
  </div>
`;


  var container = document.getElementById("svgUn");
  if (container && container.innerHTML != null) {
    container.innerHTML = svgConcentricBitNode(f(sel.level).add(f(1)))
  }

  var container = document.getElementById("containUn");
  if (container && container.innerHTML != null) {
    container.innerHTML = createSquareSvgString("rgba(221, 188, 0, 1)")
  }

  if (f(IUniversal.fireTree.node50.level).gt(0)) {

    var image = "images/gear1.png"

    if (f(IUniversal.fireTree.node52.level).gte(f(2))) {
      image = "images/gear2.png"
    }
    if (f(IUniversal.fireTree.node52.level).gte(f(4))) {
      image = "images/gear3.png"
    }
    if (f(IUniversal.fireTree.node52.level).gte(f(6))) {
      image = "images/gear4.png"
    }

    var container = document.getElementById("gearUn");
    if (IUniversal.fireTree.node50.animation == false) {
      if (container && container.innerHTML != null) {
        container.innerHTML = gearDivString(IUniversal.fireTree.node50.timer * 1000, image, "fastRotation");
      }
      IUniversal.fireTree.node50.animation = true;
    }
    else {
      if (container && container.innerHTML == "") {
        container.innerHTML = gearDivString(IUniversal.fireTree.node50.timer * 1000, image, "stop");
      }
    }
  }

  if (IUniversal.fireTree.node30.animation == false) {
    const container = document.querySelector("#svgAnimationContainer");
    container.innerHTML = ""; // svuota container

    if (f(IUniversal.fireTree.node30.level).gt(0)) {
      container.appendChild(pressSvg(90, 80, 10, 10, 0, IUniversal.fireTree.node30.timer * 1000, "images/press.png"));
    }
    if (f(IUniversal.fireTree.node33.level).gte(1)) {
      container.appendChild(pressSvg(90, 80, 30, 30, 0, IUniversal.fireTree.node30.timer * 1000, "images/press.png"));
    }
    if (f(IUniversal.fireTree.node33.level).gte(2)) {
      container.appendChild(pressSvg(90, 80, 70, 70, 0, IUniversal.fireTree.node30.timer * 1000, "images/press.png"));
    }
    if (f(IUniversal.fireTree.node33.level).gte(3)) {
      container.appendChild(pressSvg(90, 80, 90, 90, 0, IUniversal.fireTree.node30.timer * 1000, "images/press.png"));
    }

    IUniversal.fireTree.node30.animation = true;
  }

  if (f(IUniversal.fireTree.node30.level).equals(0)) {
    const container = document.querySelector("#svgAnimationContainer");
    container.innerHTML = "";
  }

  if (IUniversal.fireTree.node34.animation == false) {
    const container = document.querySelector("#svgAnimationContainer2");
    container.innerHTML = "";
    if (f(IUniversal.fireTree.node34.level).gte(0)) {
      container.appendChild(pressSvg(90, 80, 50, 50, 0, IUniversal.fireTree.node34.timer * 1000, "images/press2.png"));
    }
    IUniversal.fireTree.node34.animation = true;
  }

  if (f(IUniversal.fireTree.node34.level).equals(0)) {
    const container = document.querySelector("#svgAnimationContainer2");
    container.innerHTML = "";
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(5).pow(f(f(sel.level)).minus(f(1)))
  } else {
    sel2.effect = f(0)
  }

  if (sel2.req()) { sel.active = false }
  if (sel.active) { sel.unlocked = false }
  sel2.req = function () { return (IUniversal.fireTree.node27.active) }

  //NODE 29 MILESTONES

  IUniversalIn.fireMilestones.m1.mReqDesc = `Burnt Universe 15`
  IUniversalIn.fireMilestones.m1.mDesc = `New Heat upgrades (41-44)`

  IUniversalIn.fireMilestones.m2.mReqDesc = `Burnt Universe 25`
  IUniversalIn.fireMilestones.m2.mDesc = `New Fire upgrades (39-40)`

  IUniversalIn.fireMilestones.m3.mReqDesc = `Burnt Universe 30`
  IUniversalIn.fireMilestones.m3.mDesc = `New Size Upgrades (45-47)`

  IUniversalIn.fireMilestones.m4.mReqDesc = `Burnt Universe 35`
  IUniversalIn.fireMilestones.m4.mDesc = `Add Heat feature (50)`

  IUniversalIn.fireMilestones.m5.mReqDesc = `Burnt Universe 45`
  IUniversalIn.fireMilestones.m5.mDesc = `New Fire upgrades (58-60)`

  IUniversalIn.fireMilestones.m6.mReqDesc = `Burnt Universe 50`
  IUniversalIn.fireMilestones.m6.mDesc = `<div>New Stat upgrades (61-62)</div>
                                          <div>New Sky Feature</div>`

  IUniversalIn.fireMilestones.m7.mReqDesc = `Burnt Universe 55`
  IUniversalIn.fireMilestones.m7.mDesc = `New Heat upgrades (63-64)`

  //NODE 30
  var sel = IUniversal.fireTree.node30
  var sel2 = IUniversalIn.fireTree.node30

  if (sel.active) {
    sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Press</div>
                 <div class="topRight absolute padding2 grey">30</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Heat <span class="boldBlackBorder">+${format(f(sel2.effect))}</span> Every <span class="boldBlackBorder">${format(f(IUniversal.fireTree.node30.timer))}s</span></div>
                                                        <div class="line"></div>
                                                        <div class="noClick"><span class="boldBlackBorder">${format(f(f(sel.timer).minus(f(sel.currentTimer))), 1)}s</span>  delay</div>
                                                        <div></div>
                 </div>`
  } else {
    sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Press</div>
                 <div class="topRight absolute padding2 grey">30</div>
                 <div class="centerDiv padding1 column"><div>Produce Heat automatically</div>
                 </div>`
  }
  if (sel.active) {
    unlockShow("content2_17_node30_button", false)
    sel2.button = ``
  } else {
    unlockShow("content2_17_node30_button", true)
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`
  }

  sel.level = f(sel.level)
  sel2.maxLevel = f(1)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (sel.active) {
    sel2.effect = f(1).mul(f(IUniversalIn.fireTree.node31.effect)).mul(f(IUniversalIn.fireTree.node33.effect)).mul(f(IUniversalIn.fireTree.node34.effect2)).mul(f(IUniversalIn.fireTree.node41.effect)).mul(f(IUniversalIn.fireTree.node49.effect)).mul(f(IUniversalIn.fireTree.node50.effect2))
  } else {
    sel2.effect = f(0)
  }

  sel2.price = f(10)
  sel.timer = f(10).dividedBy(f(IUniversalIn.fireTree.node32.effect))
  sel.currentTimer = f(sel.currentTimer)

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node30.priceIdentity, IUniversalIn.fireTree.node30.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node27.active) }

  //NODE 31
  var sel = IUniversal.fireTree.node31
  var sel2 = IUniversalIn.fireTree.node31


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Heavy Metal</div>
                 <div class="topRight absolute padding2 grey">31</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Press Heat ×3 <span class="boldBlackBorder">(×${format(f(sel2.effect), 1)})</span></div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(10)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(3).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }

  sel2.price = f(f(10).pow(f(2))).mul(((f(25).pow(f(sel.level)))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node31.priceIdentity, IUniversalIn.fireTree.node31.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node30.active) }

  //NODE 32
  var sel = IUniversal.fireTree.node32
  var sel2 = IUniversalIn.fireTree.node32


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Faster Press</div>
                 <div class="topRight absolute padding2 grey">32</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Press delay /1.2 (<span class="boldBlackBorder">/${format(f(sel2.effect), 1)}</span>)</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(13)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }

  sel2.price = f(f(10).pow(f(3))).mul((f(25).pow(f(sel.level))).mul(f(1.2).pow(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node32.priceIdentity, IUniversalIn.fireTree.node32.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node31.active) }

  //NODE 33
  var sel = IUniversal.fireTree.node33
  var sel2 = IUniversalIn.fireTree.node33


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Press Row</div>
                 <div class="topRight absolute padding2 grey">33</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Press quantity <span class="boldBlackBorder">+${format(f(sel.level), 0)}</span></div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(3)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1).mul(f(sel.level).add(f(1)))
  } else {
    sel2.effect = f(1)
  }

  sel2.price = f(f(10).pow(f(4))).mul((f(25).pow(f(sel.level))).mul(f(1.2).pow(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node33.priceIdentity, IUniversalIn.fireTree.node33.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node32.active) }


  //NODE 34
  var sel = IUniversal.fireTree.node34
  var sel2 = IUniversalIn.fireTree.node34


  if (IUniversal.fireTree.node34.activeTimer) {
    var time2 = format(f(f(sel.timer2).minus(f(sel.currentTimer2))), 1)
  } else {
    time2 = f(0)
  }

  if (sel.active) {
    sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Gravity Press</div>
                 <div class="topRight absolute padding2 grey">34</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Press <span class="boldBlackBorder">×${format(f(sel2.effect))}</span> Every <span class="boldBlackBorder">${format(f(sel.timer))}s</span></div>
                                                        <div><span class="boldBlackBorder">${format(f(sel.timer2))}s</span> duration</div>
                                                        <div class="line"></div>
                                                        <div><span class="boldBlackBorder">${format(f(f(sel.timer).minus(f(sel.currentTimer))), 1)}s</span> delay</div>
                                                        <div><span class="boldBlackBorder">${format(f(time2), 1)}s</span> remaining</div>
                                                        <div>Press <span class="boldBlackBorder">×${format(f(sel2.effect2))}</span></div>
                                                        <div></div>
                 </div>`
  } else {
    sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Gravity Press</div>
                 <div class="topRight absolute padding2 grey">34</div>
                 <div class="centerDiv padding1 column"><div>Multiply Press periodically</div>
                 </div>`
  }
  if (sel.active) {
    unlockShow("content2_17_node34_button", false)
    sel2.button = ``
  } else {
    unlockShow("content2_17_node34_button", true)
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`
  }

  sel.level = f(sel.level)
  sel2.maxLevel = f(1)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (IUniversal.fireTree.node44.active) {
    var bonus1 = f(IUniversalIn.fireTree.node44.effect).mul(f(2))
  } else {
    bonus1 = f(1)
  }

  sel2.effect = f(2).mul(f(IUniversalIn.fireTree.node35.effect)).mul(f(bonus1)).mul(f(IUniversalIn.fireTree.node64.effect))

  if (IUniversal.fireTree.node34.activeTimer) {
    sel2.effect2 = f(sel2.effect)
  } else {
    sel2.effect2 = f(1)
  }

  sel2.price = f(f(10).pow(f(7)))

  if (IUniversal.fireTree.node44.active) {
    var timer1 = f(IUniversalIn.fireTree.node44.effect)
  } else {
    timer1 = f(1)
  }

  sel.timer = f(60).dividedBy(f(IUniversalIn.fireTree.node36.effect)).mul(f(timer1))
  sel.currentTimer = f(sel.currentTimer)

  if (f(sel.timer2).lt(f(sel.timer))) {
    sel.timer2 = f(10).mul(f(IUniversalIn.fireTree.node37.effect))
  } else {
    sel.timer2 = f(sel.timer)
  }
  sel.currentTimer2 = f(sel.currentTimer2)

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node34.priceIdentity, IUniversalIn.fireTree.node34.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node30.active) }

  //NODE 35
  var sel = IUniversal.fireTree.node35
  var sel2 = IUniversalIn.fireTree.node35


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Gravity Warp</div>
                 <div class="topRight absolute padding2 grey">35</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Gravity Press multi ×1.5 <span class="boldBlackBorder">(×${format(f(sel2.effect), 1)})</span></div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(6)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.5).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }

  sel2.price = f(f(10).pow(f(8))).mul((f(50).pow(f(sel.level))).mul(f(2).pow(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node35.priceIdentity, IUniversalIn.fireTree.node35.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node34.active) }

  //NODE 36
  var sel = IUniversal.fireTree.node36
  var sel2 = IUniversalIn.fireTree.node36


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Time Warp</div>
                 <div class="topRight absolute padding2 grey">36</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Gravity Press delay /1.1 (<span class="boldBlackBorder">/${format(f(sel2.effect), 1)}</span>)</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(10)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.1).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }

  sel2.price = f(f(10).pow(f(9))).mul((f(50).pow(f(sel.level))).mul(f(2).pow(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node36.priceIdentity, IUniversalIn.fireTree.node36.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node35.active) }

  //NODE 37
  var sel = IUniversal.fireTree.node37
  var sel2 = IUniversalIn.fireTree.node37


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Space Warp</div>
                 <div class="topRight absolute padding2 grey">37</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Gravity Press duration ×1.2 (<span class="boldBlackBorder">×${format(f(sel.level), 0)}</span>)</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(5)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }

  sel2.price = f(f(10).pow(f(10))).mul((f(50).pow(f(sel.level))).mul(f(2).pow(f(sel.level))))



  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node37.priceIdentity, IUniversalIn.fireTree.node37.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node36.active) }

  //NODE 38
  var sel = IUniversal.fireTree.node38
  var sel2 = IUniversalIn.fireTree.node38


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Catalyst</div>
                 <div class="topRight absolute padding2 grey">38</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Size ×1.5 (<span class="boldBlackBorder">×${format(f(sel2.effect), 1)}</span>)</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Heat</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(100)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.5).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }

  sel2.price = f(2).mul(f(2).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node38.priceIdentity, IUniversalIn.fireTree.node38.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node27.active) }

  //NODE 39
  var sel = IUniversal.fireTree.node39
  var sel2 = IUniversalIn.fireTree.node39


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Sun</div>
                 <div class="topRight absolute padding2 grey">39</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv column fontSize09"><div><span class="boldBlackBorder">${format(f(IUniversal.lightProdBase), 0)}</span>&nbsp;Light/s</div>
                                                 <div><span class="boldBlackBorder">${format(f(IUniversal.light), 0)}</span>&nbsp;Light ⇒ ×<span class="boldBlackBorder">${format(f(sel2.effect2), 1)}</span> Fire/s</div></div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire</div>`

  sel.level = f(sel.level)

  var extraLevel1 = f(IUniversalIn.fireTree.node45.effect)
  sel2.maxLevel = f(5).add(f(extraLevel1))

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(10).pow(f(sel.level).minus(f(1)))
  } else {
    sel2.effect = f(0)
  }

  var effect1 = f(IUniversalIn.fireTree.node47.effect)

  if (f(sel2.effect).gt(f(0))) {
    sel2.effect2 = ((f(2).pow(f(Decimal.log10(f(IUniversal.light).add(f(10)))))).pow(f(3))).mul(f(effect1))
  } else {
    sel2.effect2 = f(1)
  }

  var price1 = f(IUniversalIn.fireTree.node46.effect)

  sel2.price = (f(f(10).pow(f(40))).mul((f(10).pow(f(10))).pow(f(sel.level)))).dividedBy(f(price1))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node39.priceIdentity, IUniversalIn.fireTree.node39.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node27.active) && IUniversalIn.fireMilestones.m2.mCheck() }

  //NODE 40
  var sel = IUniversal.fireTree.node40
  var sel2 = IUniversalIn.fireTree.node40


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Quasar</div>
                  <div class="topRight absolute padding2 grey">40</div>
                  <div class="centerDiv padding1 column fontSize09"><div><span class="boldBlackBorder">${format(f(sel.level), 0)}</span>&nbsp;Light sacrificed</div>
                                                 <div>Fire Shards/s<span class="boldBlackBorder"> ×${format(f(sel2.effect), 1)}</span>&nbsp;</div>
                  
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">Sacrifice</div>
                <div class="centerDiv noClick">Light</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(3).pow(f(Decimal.log10(f(sel.level).add(f(10)))))
  } else {
    sel2.effect = f(1)
  }

  sel2.price = (f(10).pow(f(15))).add(f(5).mul(sel.level).mul(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { return true }
  sel2.req = function () { return (IUniversal.fireTree.node39.active) && IUniversalIn.fireMilestones.m2.mCheck() }

  //NODE 41
  var sel = IUniversal.fireTree.node41
  var sel2 = IUniversalIn.fireTree.node41


  sel.level = f(sel.level)
  sel2.maxLevel = f(10)

  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Press Surge</div>
                  <div class="topRight absolute padding2 grey">41</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>+10% (<span class="boldBlackBorder">${format(f(sel2.effect2).mul(f(100)))}%</span>) odds for Press x5</div>
                 <div>(next press Heat<span class="boldBlackBorder"> ×${format(f(sel2.effect), 1)}</span>)</div>
                  
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`


  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (sel.active) {
    sel2.button2 = `<div class="centerDiv noClick boldBlackBorder">ON</div>`
  }
  else {
    sel2.button2 = `<div class="centerDiv noClick boldBlackBorder">OFF</div>`
  }

  if (f(sel.level).gt(f(0)) && IUniversal.fireTree.node41.trigger) {
    sel2.effect = f(5)
  } else {
    sel2.effect = f(1)
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect2 = f(0.1).mul(f(sel.level))
  }

  sel2.price = f(10).pow(f(12)).mul((f(f(10).pow(f(2)))).pow(f(sel.level)))

  if (sel.active) { sel.unlocked = true }

  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node41.priceIdentity, IUniversalIn.fireTree.node41.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node33.active) && IUniversalIn.fireMilestones.m1.mCheck() }

  //NODE 42
  var sel = IUniversal.fireTree.node42
  var sel2 = IUniversalIn.fireTree.node42


  sel.level = f(sel.level)
  sel2.maxLevel = f(10)

  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Press Momentum</div>
                  <div class="topRight absolute padding2 grey">42</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>+1s (<span class="boldBlackBorder">${format(f(sel2.effect), 0)}s</span>) to Heat reduction delay</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`


  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (sel.active) {
    sel2.button2 = `<div class="centerDiv noClick boldBlackBorder">ON</div>`
  }
  else {
    sel2.button2 = `<div class="centerDiv noClick boldBlackBorder">OFF</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1).mul(f(sel.level))
  } else {
    sel2.effect = f(0)
  }

  sel2.price = f(10).pow(f(18)).mul((f(f(10).pow(f(1)))).pow(f(sel.level)))


  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node42.priceIdentity, IUniversalIn.fireTree.node42.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node33.active) && IUniversalIn.fireMilestones.m1.mCheck() }

  //NODE 43
  var sel = IUniversal.fireTree.node43
  var sel2 = IUniversalIn.fireTree.node43


  sel.level = f(sel.level)
  sel2.maxLevel = f(4)

  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Fire Singularity</div>
                  <div class="topRight absolute padding2 grey">43</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Fire Shards x2 (<span class="boldBlackBorder">×${format(f(sel2.effect))}</span>) when Gravity Press is active</div>

                  
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`


  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (sel.active) {
    sel2.button2 = `<div class="centerDiv noClick boldBlackBorder">ON</div>`
  }
  else {
    sel2.button2 = `<div class="centerDiv noClick boldBlackBorder">OFF</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }

  sel2.price = f(10).pow(f(12)).mul((f(f(10).pow(f(4)))).pow(f(sel.level)))


  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node43.priceIdentity, IUniversalIn.fireTree.node43.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node37.active) && IUniversalIn.fireMilestones.m1.mCheck() }

  //NODE 44
  var sel = IUniversal.fireTree.node44
  var sel2 = IUniversalIn.fireTree.node44


  sel.level = f(sel.level)
  sel2.maxLevel = f(1)

  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Relativity</div>
                  <div class="topRight absolute padding2 grey">44</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div><span class="boldBlackBorder">×${format(f(sel2.effect))}</span> Gravity Press delay</div>
                 <div class="centerDiv padding1 column fontSize09"><div><span class="boldBlackBorder">×${format(f(sel2.effect).mul(f(2)))}</span> Gravity Press multi</div>
                  
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`


  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (sel.active) {
    sel2.button2 = `<div class="centerDiv noClick boldBlackBorder">ON</div>`
  }
  else {
    sel2.button2 = `<div class="centerDiv noClick boldBlackBorder">OFF</div>`
  }


  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2)
  } else {
    sel2.effect = f(2)
  }

  sel2.price = f(10).pow(f(18)).mul((f(f(10).pow(f(3)))).pow(f(sel.level)))


  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node44.priceIdentity, IUniversalIn.fireTree.node44.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node37.active) && IUniversalIn.fireMilestones.m1.mCheck() }

  //NODE 45
  var sel = IUniversal.fireTree.node45
  var sel2 = IUniversalIn.fireTree.node45


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Local Bubble</div>
                 <div class="topRight absolute padding2 grey">45</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Sun max level <span class="boldBlackBorder">+${format(f(sel2.effect), 0)}</span></div>
                                                 
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Size</div>`



  sel.level = f(sel.level)
  sel2.maxLevel = f(90)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(sel.level)
  } else {
    sel2.effect = f(0)
  }
  sel2.price = ((f(10)).pow(f(55))).mul((f(10).pow(f(5))).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node45.priceIdentity, IUniversalIn.fireTree.node45.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node22.active) && IUniversalIn.fireMilestones.m3.mCheck() }

  //NODE 46
  var sel = IUniversal.fireTree.node46
  var sel2 = IUniversalIn.fireTree.node46


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Young Star</div>
                 <div class="topRight absolute padding2 grey">46</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Sun price /1e5 (<span class="boldBlackBorder">/${format(f(sel2.effect), 0)}</span>)</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Size</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(20)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = (f(10).pow(f(5))).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }
  sel2.price = ((f(10)).pow(f(50))).mul((f(10).pow(f(5))).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node46.priceIdentity, IUniversalIn.fireTree.node46.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node22.active) && IUniversalIn.fireMilestones.m3.mCheck() }

  //NODE 47
  var sel = IUniversal.fireTree.node47
  var sel2 = IUniversalIn.fireTree.node47


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Big Blue</div>
                 <div class="topRight absolute padding2 grey">47</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Sun effect ×2 (<span class="boldBlackBorder">×${format(f(sel2.effect), 0)}</span>)</div>

                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Size</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(20)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }
  sel2.price = ((f(10)).pow(f(55))).mul((f(10).pow(f(5))).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node47.priceIdentity, IUniversalIn.fireTree.node47.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node46.active) && IUniversalIn.fireMilestones.m3.mCheck() }

  //NODE 48
  var sel = IUniversal.fireTree.node48
  var sel2 = IUniversalIn.fireTree.node48


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Universal Labor</div>
                 <div class="topRight absolute padding2 grey">48</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Manual Burner ×1.5 (<span class="boldBlackBorder">×${format(f(sel2.effect), 1)}</span>)</div>

                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(10)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.5).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }
  sel2.price = (f(5).mul(f(10).pow(f(1))).mul(f(5).pow(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node48.priceIdentity, IUniversalIn.fireTree.node48.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node28.active) }

  //NODE 49
  var sel = IUniversal.fireTree.node49
  var sel2 = IUniversalIn.fireTree.node49


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Heaviest Metal</div>
                 <div class="topRight absolute padding2 grey">49</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Press Heat ×3 <span class="boldBlackBorder">(×${format(f(sel2.effect), 1)})</span></div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(10)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(3).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }

  sel2.price = f(f(10).pow(f(20))).mul(((f(100).pow(f(sel.level)))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node49.priceIdentity, IUniversalIn.fireTree.node49.price, "uni")) { return true } }
  sel2.req = function () { return f(IUniversal.fireTree.node31.level).gte(f(IUniversalIn.fireTree.node31.maxLevel)) }

  //NODE 50
  var sel = IUniversal.fireTree.node50
  var sel2 = IUniversalIn.fireTree.node50


  if (sel.active) {
    sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Gear</div>
                 <div class="topRight absolute padding2 grey">50</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Heat <span class="boldBlackBorder">×${format(f(sel2.effect), 2)}</span> every second</span></div>
                 <div class="centerDiv padding1 column fontSize09"><div>Resets when Universe Furnace reduces Heat (<span class="boldBlackBorder">${IUniversal.heatTimer}s</span>)</div>
                                                        <div class="line"></div>
                                                        <div class=""><span class="boldBlackBorder">${format(f(f(sel.timer).minus(f(sel.currentTimer))), 1)}s</span> remaining</div>
                                                        <div">Heat <span class="boldBlackBorder">×${format(f(f(sel2.effect2)), 1)}</span></div>
                                                        <div></div>
                 </div>`
  } else {
    sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Gear</div>
                 <div class="topRight absolute padding2 grey">50</div>
                 <div class="centerDiv padding1 column"><div>Multiply Heat automatically</div>
                 </div>`
  }

  if (sel.active) {
    unlockShow("content2_17_node50_button", false)
    sel2.button = ``
  } else {
    unlockShow("content2_17_node50_button", true)
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`
  }

  sel.level = f(sel.level)
  sel2.maxLevel = f(1)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (sel.active) {
    sel2.effect = f(1.15).add(f(IUniversalIn.fireTree.node52.effect)).add(f(IUniversalIn.fireTree.node63.effect))
  } else {
    sel2.effect = f(1)
  }

  if (sel.active) {
    sel2.effect2 = f(sel2.effect).pow(f(sel.currentTimer))
  } else {
    sel2.effect2 = f(1)
  }

  sel2.price = f(f(10).pow(f(28))).mul((f(10).pow(f(3))).pow(f(sel.level)))
  sel.timer = f(IUniversal.heatTimer)
  sel.currentTimer = f(sel.currentTimer)

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node50.priceIdentity, IUniversalIn.fireTree.node50.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node38.active) && IUniversalIn.fireMilestones.m4.mCheck() }

  //NODE 51
  var sel = IUniversal.fireTree.node51
  var sel2 = IUniversalIn.fireTree.node51


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Entropy Distorter</div>
                  <div class="topRight absolute padding2 grey">51</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>+1s (<span class="boldBlackBorder">${format(f(sel2.effect), 0)}s</span>) to Heat reduction delay</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(10)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (sel.active) {
    sel2.effect = f(1).mul(f(sel.level))
  } else {
    sel2.effect = f(0)
  }

  sel2.price = f(f(10).pow(f(30))).mul((f(10).pow(f(3))).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node51.priceIdentity, IUniversalIn.fireTree.node51.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node50.active) && IUniversalIn.fireMilestones.m4.mCheck() }

  //NODE 52
  var sel = IUniversal.fireTree.node52
  var sel2 = IUniversalIn.fireTree.node52


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Dents</div>
                 <div class="topRight absolute padding2 grey">52</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09">
                 <div>Gear effect +0.03 </div>
                 <div><span class="boldBlackBorder">(Gear effect: ${format(f(IUniversalIn.fireTree.node50.effect), 2)})</span></div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(10)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (sel.active) {
    sel2.effect = f(0.03).mul(f(sel.level))
  } else {
    sel2.effect = f(0)
  }

  sel2.price = f(f(10).pow(f(30))).mul((f(10).pow(f(3))).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node52.priceIdentity, IUniversalIn.fireTree.node52.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node50.active) && IUniversalIn.fireMilestones.m4.mCheck() }

  //NODE 53
  var sel = IUniversal.fireTree.node53
  var sel2 = IUniversalIn.fireTree.node53


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Vacum Chamber</div>
                 <div class="topRight absolute padding2 grey">53</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09">
                    <div>Heat reduction -0.05</div>
                    <div">(Heat reduction:<span class="boldBlackBorder"> /${format(f(IUniversalIn.fireTree.node27.effect2), 2)}</span>)</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(10)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (sel.active) {
    sel2.effect = f(0.05).mul(f(sel.level))
  } else {
    sel2.effect = f(0)
  }

  sel2.price = f(f(10).pow(f(32))).mul((f(10).pow(f(3))).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node53.priceIdentity, IUniversalIn.fireTree.node53.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node52.active) && IUniversalIn.fireMilestones.m4.mCheck() }

  //NODE 54
  var sel = IUniversal.fireTree.node54
  var sel2 = IUniversalIn.fireTree.node54


  if (sel.active) {
    sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Ash Dynamo</div>
                 <div class="topRight absolute padding2 grey">54</div>
                 <div class="centerDiv padding1 column fontSize09"><div>When Gear resets, add <span class="boldBlackBorder">${format(f(sel2.effect))}</span> Rotation</div>
                 <div class="centerDiv padding1 column fontSize09"><div><span class="boldBlackBorder">${format(f(IUniversal.rotation), 1)}</span> Rotations</div>
                 </div>`
  } else {
    sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Ash Dynamo</div>
                 <div class="topRight absolute padding2 grey">54</div>
                 <div class="centerDiv padding1 column"><div>Every time Gear resets, add rotation</div>
                 </div>`
  }

  if (sel.active) {
    unlockShow("content2_17_node54_button", false)
    sel2.button = ``
  } else {
    unlockShow("content2_17_node54_button", true)
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`
  }

  sel.level = f(sel.level)
  sel2.maxLevel = f(1)

  if (sel.active) {
    sel2.effect = f(1).mul(f(IUniversalIn.fireTree.node57.effect))
  } else {
    sel2.effect = f(0)
  }

  sel2.price = f(f(10).pow(f(34))).mul((f(10).pow(f(3))).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node54.priceIdentity, IUniversalIn.fireTree.node54.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node52.active) && IUniversalIn.fireMilestones.m4.mCheck() }

  //NODE 55
  var sel = IUniversal.fireTree.node55
  var sel2 = IUniversalIn.fireTree.node55


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Solar Flare</div>
                  <div class="topRight absolute padding2 grey">55</div>
                  <div class="centerDiv padding1 column fontSize09"><div><span class="boldBlackBorder">${format(f(sel.level), 0)}</span>&nbsp;Rotation sacrificed</div>
                                                 <div>Fire/s<span class="boldBlackBorder"> ×${format(f(sel2.effect), 1)}</span>&nbsp;</div>
                  
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">Sacrifice</div>
                <div class="centerDiv noClick">Rotation</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (sel.active) {
    sel2.effect = f(2).pow(f(Decimal.log2(f(sel.level).add(f(2)))))
  } else {
    sel2.effect = f(1)
  }

  sel2.price = f(f(10).pow(f(38))).mul((f(10).pow(f(3))).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { return true }
  sel2.req = function () { return (IUniversal.fireTree.node54.active) && IUniversalIn.fireMilestones.m4.mCheck() }

  //NODE 56
  var sel = IUniversal.fireTree.node56
  var sel2 = IUniversalIn.fireTree.node56


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Circular Extraction</div>
                 <div class="topRight absolute padding2 grey">56</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                                  <div class="centerDiv padding1 column fontSize09"><div>Fire Shards ×Rotation <span class="boldBlackBorder">(×${format(f(sel2.effect), 1)})</span></div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(10)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (sel.active) {
    sel2.effect = f(2).pow(f(Decimal.log2(f(IUniversal.rotation).add(f(2))))).mul(f(2).pow(f(sel.level)))
  } else {
    sel2.effect = f(1)
  }

  sel2.price = f(f(10).pow(f(38))).mul((f(10).pow(f(3))).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node56.priceIdentity, IUniversalIn.fireTree.node56.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node54.active) && IUniversalIn.fireMilestones.m4.mCheck() }

  //NODE 57
  var sel = IUniversal.fireTree.node57
  var sel2 = IUniversalIn.fireTree.node57


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Orbital Dynamic</div>
                 <div class="topRight absolute padding2 grey">57</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Rotation ×5 <span class="boldBlackBorder">(×${format(f(sel2.effect), 1)})</span></div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(10)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(5).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }

  sel2.price = f(f(10).pow(f(42))).mul((f(10).pow(f(3))).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node57.priceIdentity, IUniversalIn.fireTree.node57.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node56.active) && IUniversalIn.fireMilestones.m4.mCheck() }

  //NODE 58
  var sel = IUniversal.fireTree.node58
  var sel2 = IUniversalIn.fireTree.node58


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Forest Destroyer</div>
                 <div class="topRight absolute padding2 grey">58</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Sacrifice <span class="boldBlackBorder">${format(f(sel2.effect).mul(f(100)))}%</span> of Wood every second for free</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(10)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (sel.active) {
    sel2.effect = f(f(10).pow(f(sel.level).minus(f(1)))).dividedBy(f(100))
  } else {
    sel2.effect = f(0)
  }

  sel2.price = f(f(10).pow(f(105))).mul(((f(f(10).pow(f(10))).pow(f(sel.level)))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node58.priceIdentity, IUniversalIn.fireTree.node58.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node5.active) && IUniversalIn.fireMilestones.m5.mCheck() }

  //NODE 59
  var sel = IUniversal.fireTree.node59
  var sel2 = IUniversalIn.fireTree.node59


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Mine Eater</div>
                 <div class="topRight absolute padding2 grey">59</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Sacrifice <span class="boldBlackBorder">${format(f(sel2.effect).mul(f(100)))}%</span> of Coal every second for free</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(10)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (sel.active) {
    sel2.effect = f(f(10).pow(f(sel.level).minus(f(1)))).dividedBy(f(100))
  } else {
    sel2.effect = f(0)
  }

  sel2.price = f(f(10).pow(f(110))).mul(((f(f(10).pow(f(10))).pow(f(sel.level)))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node59.priceIdentity, IUniversalIn.fireTree.node59.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node6.active) && IUniversalIn.fireMilestones.m5.mCheck() }

  //NODE 60
  var sel = IUniversal.fireTree.node60
  var sel2 = IUniversalIn.fireTree.node60


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Fire Lord</div>
                 <div class="topRight absolute padding2 grey">60</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Sacrifice <span class="boldBlackBorder">${format(f(sel2.effect).mul(f(100)))}%</span> of Magma every second for free</div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(10)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (sel.active) {
    sel2.effect = f(f(10).pow(f(sel.level).minus(f(1)))).dividedBy(f(100))
  } else {
    sel2.effect = f(0)
  }

  sel2.price = f(f(10).pow(f(115))).mul(((f(f(10).pow(f(10))).pow(f(sel.level)))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node60.priceIdentity, IUniversalIn.fireTree.node60.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node7.active) && IUniversalIn.fireMilestones.m5.mCheck() }

  //NODE 61
  var sel = IUniversal.fireTree.node61
  var sel2 = IUniversalIn.fireTree.node61


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Universal Bonfire</div>
                 <div class="topRight absolute padding2 grey">61</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Universal Nodes ×2 <span class="boldBlackBorder">(×${format(f(sel2.effect), 1)})</span></div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Size</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }

  sel2.price = f(f(10).pow(f(100))).mul(f(10).pow(f(5)).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node61.priceIdentity, IUniversalIn.fireTree.node61.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node11.active) && IUniversalIn.fireMilestones.m6.mCheck() }

  //NODE 62
  var sel = IUniversal.fireTree.node62
  var sel2 = IUniversalIn.fireTree.node62


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Fire Black Holes</div>
                 <div class="topRight absolute padding2 grey">62</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Universal Cores ×2 <span class="boldBlackBorder">(×${format(f(sel2.effect), 1)})</span></div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Size</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }

  sel2.price = f(f(10).pow(f(100))).mul(f(10).pow(f(5)).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node62.priceIdentity, IUniversalIn.fireTree.node62.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node11.active) && IUniversalIn.fireMilestones.m6.mCheck() }

  //NODE 63
  var sel = IUniversal.fireTree.node63
  var sel2 = IUniversalIn.fireTree.node63


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Concentric Gears</div>
                 <div class="topRight absolute padding2 grey">63</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Gear effect +0.01 <span class="boldBlackBorder">(+${format(f(sel2.effect), 2)})</span></div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(100)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(0.01).mul(f(sel.level))
  } else {
    sel2.effect = f(0)
  }

  sel2.price = f(f(10).pow(f(61))).mul(f(10).pow(f(2)).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node63.priceIdentity, IUniversalIn.fireTree.node63.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node56.active) && IUniversalIn.fireMilestones.m7.mCheck() }

  //NODE 64
  var sel = IUniversal.fireTree.node64
  var sel2 = IUniversalIn.fireTree.node64


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                 <div class="centerDiv boldBlackBorder">Neutron Press</div>
                 <div class="topRight absolute padding2 grey">64</div>
                 <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                 <div class="centerDiv padding1 column fontSize09"><div>Gravity Press multi ×1.1 <span class="boldBlackBorder">(×${format(f(sel2.effect), 1)})</span></div>
                 </div>`

  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fire Shards</div>`

  sel.level = f(sel.level)
  sel2.maxLevel = f(100)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.1).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }

  sel2.price = f(f(10).pow(f(60))).mul(f(10).pow(f(2)).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.fireTree.node64.priceIdentity, IUniversalIn.fireTree.node64.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.fireTree.node35.active) && IUniversalIn.fireMilestones.m7.mCheck() }

  //Potion Types

  //WATER TREE


  //NODE 1
  var sel = IUniversal.waterTree.node1
  var sel2 = IUniversalIn.waterTree.node1


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Water Rift</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">1</div>
                  <div class="centerDiv padding2 fontSize09">×2 Water/s (<span class="boldBlackBorder">×${format(f(sel2.effect), 1)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Universal Cores</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = f(100)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).mul(f(2).pow(f(sel.level)))
  } else {
    sel2.effect = f(1)
  }


  sel2.price = (f(10).pow(f(40))).mul(f(10).pow(f(5).mul(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node1.priceIdentity, IUniversalIn.waterTree.node1.price, "uniChallenger")) { return true } }
  sel2.req = function () { return true }

  //NODE 2
  var sel = IUniversal.waterTree.node2
  var sel2 = IUniversalIn.waterTree.node2


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Water Sorcerers</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
                  <div class="topRight absolute padding2 grey">2</div>
                  <div class="centerDiv padding2 fontSize09">Water/s&nbsp<span class="boldBlackBorder">+${format(f(sel2.effect), 1)}</span>&nbsp;</div>
                 </div>`


  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Water</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.5).pow(f(sel.level))
  } else {
    sel2.effect = f(0)
  }

  if (sel.active) {
    sel2.price = (f(0.5).mul(f(10).pow(f(1)))).mul(f(2).pow(f(1).mul(f(sel.level))))
  } else {
    sel2.effect = f(0)
  }

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node2.priceIdentity, IUniversalIn.waterTree.node2.price, "uni")) { return true } }
  sel2.req = function () { return true }

  //NODE 3
  var sel = IUniversal.waterTree.node3
  var sel2 = IUniversalIn.waterTree.node3


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Water Density</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">3</div>
                  <div class="centerDiv padding2 fontSize09">Water Max +10 (<span class="boldBlackBorder">+${format(f(sel2.effect), 0)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Water</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = f(100)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(10).mul(f(sel.level))
  } else {
    sel2.effect = f(0)
  }


  sel2.price = (f(10).pow(f(1))).mul(f(2).pow(f(1).mul(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node3.priceIdentity, IUniversalIn.waterTree.node3.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node2.active) }

  //NODE 4
  var sel = IUniversal.waterTree.node4
  var sel2 = IUniversalIn.waterTree.node4


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Erosion</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
                  <div class="topRight absolute padding2 grey">4</div>
                  <div class="centerDiv padding2 fontSize09">Water Max ×2 (<span class="boldBlackBorder">×${format(f(sel2.effect), 0)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Water</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }


  sel2.price = (f(30).pow(f(1))).mul(f(3).pow(f(1).mul(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node4.priceIdentity, IUniversalIn.waterTree.node4.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node3.active) || (IUniversal.waterTree.node5.active) }

  //NODE 5
  var sel = IUniversal.waterTree.node5
  var sel2 = IUniversalIn.waterTree.node5


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Water Lich</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">5</div>
                  <div class="centerDiv padding2 fontSize09">Water/s ×2 (<span class="boldBlackBorder">×${format(f(sel2.effect), 0)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Water</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = f(100)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }


  sel2.price = (f(10).pow(f(3))).mul(f(10).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node5.priceIdentity, IUniversalIn.waterTree.node5.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node2.active) }

  //NODE 6
  var sel = IUniversal.waterTree.node6
  var sel2 = IUniversalIn.waterTree.node6

  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Erbs</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">6</div>
                  <div class="centerDiv padding2 fontSize09">Produce Erbs and Craft potions</div>
                 </div>`


  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Water</div>`

  if (f(sel.level).equals(f(sel2.maxLevel))) {
    unlockShow("content2_19_node6_button", false)

    sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Erbs</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">6</div>
                  <div class="centerDiv padding2 fontSize09">
                      <span class="boldBlackBorder">${format(f(IUniversal.erbs), 0)}/${format(f(IUniversal.erbsMax), 0)}</span>&nbsp;Erbs</div>
                  <div class="centerDiv padding1 column fontSize09"><div><span class="boldBlackBorder">${format(sec(f(IUniversal.erbsProd), 1))}</span> Erbs/s</div>
                 </div>
                <div class="line"></div>
                <div class="centerDiv padding1 column fontSize09">Training potions unlocked</div>`
  } else {
    unlockShow("content2_19_node6_button", true)

  }


  sel.level = f(sel.level)
  sel2.maxLevel = f(1)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  sel2.price = f(100)

  if (sel.active) {
    sel2.effect = f(0.1)
  } else {
    sel2.effect = f(0)
  }

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node6.priceIdentity, IUniversalIn.waterTree.node6.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node3.active) }

  //NODE 7
  var sel = IUniversal.waterTree.node7
  var sel2 = IUniversalIn.waterTree.node7


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Garden</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
                  <div class="topRight absolute padding2 grey">7</div>
                  <div class="centerDiv padding2 fontSize09">Erbs/s ×1.35 (<span class="boldBlackBorder">×${format(f(sel2.effect), 1)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Water</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = (f(1.35).pow(f(sel.level)))
  } else {
    sel2.effect = f(1)
  }


  sel2.price = (f(5).mul(f(10).pow(f(2)))).mul(f(3).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node7.priceIdentity, IUniversalIn.waterTree.node7.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node6.active) }

  //NODE 8
  var sel = IUniversal.waterTree.node8
  var sel2 = IUniversalIn.waterTree.node8


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Herbarium</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">8</div>
                  <div class="centerDiv padding2 fontSize09">Erbs Max +10 (<span class="boldBlackBorder">+${format(f(sel2.effect), 0)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Water</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = f(100)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(10).mul(f(sel.level))
  } else {
    sel2.effect = f(0)
  }


  sel2.price = (f(10).pow(f(3))).mul(f(5).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node8.priceIdentity, IUniversalIn.waterTree.node8.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node7.active) }

  //NODE 9
  var sel = IUniversal.waterTree.node9
  var sel2 = IUniversalIn.waterTree.node9


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Magic Lands</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
                  <div class="topRight absolute padding2 grey">9</div>
                  <div class="centerDiv padding2 fontSize09">Erbs Max ×2 (<span class="boldBlackBorder">×${format(f(sel2.effect), 0)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Water</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }

  sel2.price = (f(10).pow(f(4))).mul(f(20).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node9.priceIdentity, IUniversalIn.waterTree.node9.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node8.active) }

  //NODE 10
  var sel = IUniversal.waterTree.node10
  var sel2 = IUniversalIn.waterTree.node10

  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Fluid Fire</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">10</div>
                  <div class="centerDiv padding2 fontSize09">Produce Fluid Fire and Craft potions</div>
                 </div>`


  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Elixir</div>`

  if (f(sel.level).equals(f(sel2.maxLevel))) {
    unlockShow("content2_19_node10_button", false)

    sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Fluid Fire</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">10</div>
                  <div class="centerDiv padding2 fontSize09">
                      <span class="boldBlackBorder">${format(f(IUniversal.fluidFire), 0)}/${format(f(IUniversal.fluidFireMax), 0)}</span>&nbsp;Fluid Fire</div>
                  <div class="centerDiv padding1 column fontSize09"><div><span class="boldBlackBorder">${format(sec(f(IUniversal.fluidFireProd), 1))}</span> Fluid Fire/s</div>
                 </div>
                <div class="line"></div>
                <div class="centerDiv padding1 column fontSize09">Hunting potions unlocked</div>`
  } else {
    unlockShow("content2_19_node10_button", true)

  }


  sel.level = f(sel.level)
  sel2.maxLevel = f(1)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  sel2.price = f(20)

  if (sel.active) {
    sel2.effect = f(0.1)
  } else {
    sel2.effect = f(0)
  }

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node10.priceIdentity, IUniversalIn.waterTree.node10.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node6.active) }


  //NODE 11
  var sel = IUniversal.waterTree.node11
  var sel2 = IUniversalIn.waterTree.node11


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Diluted Flame</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
                  <div class="topRight absolute padding2 grey">11</div>
                  <div class="centerDiv padding2 fontSize09">Fluid Fire/s ×1.35 (<span class="boldBlackBorder">×${format(f(sel2.effect), 1)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Elixir</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.35).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }


  sel2.price = (f(10).pow(f(2))).mul(f(2).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node11.priceIdentity, IUniversalIn.waterTree.node11.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node10.active) }

  //NODE 12
  var sel = IUniversal.waterTree.node12
  var sel2 = IUniversalIn.waterTree.node12


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Eternal Flame</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">12</div>
                  <div class="centerDiv padding2 fontSize09">Fluid Fire Max +10 (<span class="boldBlackBorder">+${format(f(sel2.effect), 0)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Elixir</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = f(100)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(10).mul(f(sel.level))
  } else {
    sel2.effect = f(0)
  }


  sel2.price = (f(2).mul(f(10).pow(f(2)))).mul(f(5).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node12.priceIdentity, IUniversalIn.waterTree.node12.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node11.active) }

  //NODE 13
  var sel = IUniversal.waterTree.node13
  var sel2 = IUniversalIn.waterTree.node13


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Anti Evaporation</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
                  <div class="topRight absolute padding2 grey">13</div>
                  <div class="centerDiv padding2 fontSize09">Fluid Fire Max ×2 (<span class="boldBlackBorder">×${format(f(sel2.effect), 0)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Elixir</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }

  sel2.price = (f(4).mul(f(10).pow(f(2)))).mul(f(10).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node13.priceIdentity, IUniversalIn.waterTree.node13.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node12.active) }

  //NODE 14
  var sel = IUniversal.waterTree.node14
  var sel2 = IUniversalIn.waterTree.node14

  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Water Gem</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">14</div>
                  <div class="centerDiv padding2 fontSize09">Produce Water Gem and Craft potions</div>
                 </div>`


  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Ambrosia</div>`

  if (f(sel.level).equals(f(sel2.maxLevel))) {
    unlockShow("content2_19_node14_button", false)

    sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Water Gem</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">14</div>
                  <div class="centerDiv padding2 fontSize09">
                      <span class="boldBlackBorder">${format(f(IUniversal.waterGem), 0)}/${format(f(IUniversal.waterGemMax), 0)}</span>&nbsp;Water Gem</div>
                  <div class="centerDiv padding1 column fontSize09"><div><span class="boldBlackBorder">${format(sec(f(IUniversal.waterGemProd), 1))}</span> Water Gem/s</div>
                 </div>
                <div class="line"></div>
                <div class="centerDiv padding1 column fontSize09">Challenger potions unlocked</div>`
  } else {
    unlockShow("content2_19_node14_button", true)

  }


  sel.level = f(sel.level)
  sel2.maxLevel = f(1)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  sel2.price = f(20)

  if (sel.active) {
    sel2.effect = f(0.1)
  } else {
    sel2.effect = f(0)
  }

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node14.priceIdentity, IUniversalIn.waterTree.node14.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node10.active) }


  //NODE 15
  var sel = IUniversal.waterTree.node15
  var sel2 = IUniversalIn.waterTree.node15


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Perma Glacier</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
                  <div class="topRight absolute padding2 grey">15</div>
                  <div class="centerDiv padding2 fontSize09">Water Gem/s ×1.5 (<span class="boldBlackBorder">×${format(f(sel2.effect), 0)}</span>)&nbsp; </div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Ambrosia</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.5).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }


  sel2.price = (f(10).pow(f(2))).mul(f(2).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node15.priceIdentity, IUniversalIn.waterTree.node15.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node14.active) }

  //NODE 16
  var sel = IUniversal.waterTree.node16
  var sel2 = IUniversalIn.waterTree.node16


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Smaller Gem</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">16</div>
                  <div class="centerDiv padding2 fontSize09">Water Gem Max +10 (<span class="boldBlackBorder">+${format(f(sel2.effect), 0)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Ambrosia</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = f(100)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(10).mul(f(sel.level))
  } else {
    sel2.effect = f(0)
  }


  sel2.price = (f(2).mul(f(10).pow(f(2)))).mul(f(3).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node16.priceIdentity, IUniversalIn.waterTree.node16.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node15.active) }

  //NODE 17
  var sel = IUniversal.waterTree.node17
  var sel2 = IUniversalIn.waterTree.node17


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Gem Inclusion</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
                  <div class="topRight absolute padding2 grey">17</div>
                  <div class="centerDiv padding2 fontSize09">Water Gem Max ×2 (<span class="boldBlackBorder">×${format(f(sel2.effect), 0)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Ambrosia</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }


  sel2.price = (f(4).mul(f(10).pow(f(2)))).mul(f(5).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node17.priceIdentity, IUniversalIn.waterTree.node17.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node16.active) }

  //NODE 18
  var sel = IUniversal.waterTree.node18
  var sel2 = IUniversalIn.waterTree.node18

  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Pyrofrost</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">18</div>
                  <div class="centerDiv padding2 fontSize09">Produce Pyrofrost and Craft potions</div>
                 </div>`


  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Ambrosia</div>`

  if (f(sel.level).equals(f(sel2.maxLevel))) {
    unlockShow("content2_19_node18_button", false)

    sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Pyrofrost</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">18</div>
                  <div class="centerDiv padding2 fontSize09">
                      <span class="boldBlackBorder">${format(f(IUniversal.pyroFrost), 0)}/${format(f(IUniversal.pyroFrostMax), 0)}</span>&nbsp;Pyrofrost</div>
                  <div class="centerDiv padding1 column fontSize09"><div><span class="boldBlackBorder">${format(sec(f(IUniversal.pyroFrostProd), 1))}</span> Pyrofrost/s</div>
                 </div>
                <div class="line"></div>
                <div class="centerDiv padding1 column fontSize09">Challenger potions unlocked</div>`
  } else {
    unlockShow("content2_19_node18_button", true)

  }


  sel.level = f(sel.level)
  sel2.maxLevel = f(1)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  sel2.price = f(10).pow(f(4))

  if (sel.active) {
    sel2.effect = f(0.1)
  } else {
    sel2.effect = f(0)
  }

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node18.priceIdentity, IUniversalIn.waterTree.node18.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node14.active) }

  //NODE 19
  var sel = IUniversal.waterTree.node19
  var sel2 = IUniversalIn.waterTree.node19


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Ambivalent Cycle</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
                  <div class="topRight absolute padding2 grey">19</div>
                  <div class="centerDiv padding2 fontSize09">Pyrofrost/s ×2 (<span class="boldBlackBorder">×${format(f(sel2.effect), 0)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Erbs</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }


  sel2.price = (f(10).pow(f(6))).mul(f(10).pow(f(1).mul(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node19.priceIdentity, IUniversalIn.waterTree.node19.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node18.active) }

  //NODE 20
  var sel = IUniversal.waterTree.node20
  var sel2 = IUniversalIn.waterTree.node20


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Contrasting Growth</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">20</div>
                  <div class="centerDiv padding2 fontSize09">Pyrofrost Max +10 (<span class="boldBlackBorder">+${format(f(sel2.effect), 0)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fluid Fire</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = f(100)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(10).mul(f(sel.level))
  } else {
    sel2.effect = f(0)
  }


  sel2.price = (f(10).pow(f(5))).mul(f(10).pow(f(1).mul(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node20.priceIdentity, IUniversalIn.waterTree.node20.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node19.active) }

  //NODE 21
  var sel = IUniversal.waterTree.node21
  var sel2 = IUniversalIn.waterTree.node21


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Glacial Hell</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
                  <div class="topRight absolute padding2 grey">21</div>
                  <div class="centerDiv padding2 fontSize09">Pyrofrost Max ×2 (<span class="boldBlackBorder">×${format(f(sel2.effect), 0)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Water Gem</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }


  sel2.price = (f(10).pow(f(4))).mul(f(10).pow(f(1).mul(f(sel.level))))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node21.priceIdentity, IUniversalIn.waterTree.node21.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node20.active) }

  //NODE 22
  var sel = IUniversal.waterTree.node22
  var sel2 = IUniversalIn.waterTree.node22


  if (sel.active) {
    sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Purification</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">22</div>
                  <div class="centerDiv padding2 fontSize09">Water can be higher than Max, with lower Water/s</div>
                  <div class="centerDiv padding2 fontSize09">Water/s &nbsp;<span class="boldBlackBorder">/${format(f(1).dividedBy(f(f(sel2.effect))))}</span></div>
                 </div>`



    unlockShow("content2_19_node22_button", false)
    sel2.button = ``
  } else {
    unlockShow("content2_19_node22_button", true)
    sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Purification</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">22</div>
                  <div class="centerDiv padding2 fontSize09">Water can be higher than Max, with lower Water/s</div>
                 </div>`

    sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Water</div>`
  }

  sel.level = f(sel.level)
  sel2.maxLevel = f(1)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  var difference = f(IUniversal.water).dividedBy(f(IUniversal.waterMax))
  var calc = f(f(5).pow(f(Decimal.log10(f(difference)))))

  if (f(sel.level).gt(f(0))) {
    if (f(IUniversal.water).gte(f(IUniversal.waterMax))) {
      sel2.effect = f(1).dividedBy(calc)
    } else {
      sel2.effect = f(1)
    }
  } else {
    sel2.effect = f(1)
  }



  sel2.price = f(10).pow(f(4))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node22.priceIdentity, IUniversalIn.waterTree.node22.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node4.active) }

  //NODE 23
  var sel = IUniversal.waterTree.node23
  var sel2 = IUniversalIn.waterTree.node23


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Runic Container</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">23</div>
                  <div class="centerDiv padding2 fontSize09">Elixir Max +10 (<span class="boldBlackBorder">+${format(f(sel2.effect), 0)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Water</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = f(100)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(10).mul(f(sel.level))
  } else {
    sel2.effect = f(0)
  }


  sel2.price = (f(5).mul(f(10).pow(f(5)))).mul(f(2).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node23.priceIdentity, IUniversalIn.waterTree.node23.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node22.active) }

  //NODE 24
  var sel = IUniversal.waterTree.node24
  var sel2 = IUniversalIn.waterTree.node24


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Pure Magic</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
                  <div class="topRight absolute padding2 grey">24</div>
                  <div class="centerDiv padding2 fontSize09">Elixir Max ×2 (<span class="boldBlackBorder">×${format(f(sel2.effect), 0)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Water</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }


  sel2.price = (f(10).pow(f(6))).mul(f(4).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node24.priceIdentity, IUniversalIn.waterTree.node24.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node23.active) || (IUniversal.waterTree.node25.active) }

  //NODE 25
  var sel = IUniversal.waterTree.node25
  var sel2 = IUniversalIn.waterTree.node25


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Mage Tower</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
                  <div class="topRight absolute padding2 grey">25</div>
                  <div class="centerDiv padding2 fontSize09">Elixir/s&nbsp;<span class="boldBlackBorder">+${format(f(sel2.effect), 1)}</span></div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Water</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(0.4).mul(f(2.35).pow(f(sel.level)).minus(f(1)))
  } else {
    sel2.effect = f(0)
  }


  sel2.price = (f(10).pow(f(5))).mul(f(5).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node25.priceIdentity, IUniversalIn.waterTree.node25.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node22.active) }

  //NODE 26
  var sel = IUniversal.waterTree.node26
  var sel2 = IUniversalIn.waterTree.node26


  if (sel.active) {
    sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Unbound Elixir</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">26</div>
                  <div class="centerDiv padding2 fontSize09">Elixir can be higher than Max, with lower Elixir/s</div>
                  <div class="centerDiv padding2 fontSize09">Elixir/s &nbsp;<span class="boldBlackBorder">/${format(f(1).dividedBy(f(sel2.effect)))}</span></div>
                 </div>`



    unlockShow("content2_19_node26_button", false)
    sel2.button = ``
  } else {
    unlockShow("content2_19_node26_button", true)
    sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Unbound Elixir</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">26</div>
                  <div class="centerDiv padding2 fontSize09">Elixir can be higher than Max, with lower Elixir/s</div>
                 </div>`

    sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Elixir</div>`
  }

  sel.level = f(sel.level)
  sel2.maxLevel = f(1)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  var difference = f(IUniversal.elisir).dividedBy(f(IUniversal.elisirMax))
  var calc = f(f(5).pow(f(Decimal.log10(f(difference)))))

  if (f(sel.level).gt(f(0))) {
    if (f(IUniversal.elisir).gte(f(IUniversal.elisirMax))) {
      sel2.effect = f(1).dividedBy(calc)
    } else {
      sel2.effect = f(1)
    }
  } else {
    sel2.effect = f(1)
  }


  sel2.price = f(10).pow(f(4))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node26.priceIdentity, IUniversalIn.waterTree.node26.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node24.active) }


  //NODE 27
  var sel = IUniversal.waterTree.node27
  var sel2 = IUniversalIn.waterTree.node27


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Vessel</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">27</div>
                  <div class="centerDiv padding2 fontSize09">Ambrosia Max +10 (<span class="boldBlackBorder">+${format(f(sel2.effect), 0)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Elixir</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = f(100)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(10).mul(f(sel.level))
  } else {
    sel2.effect = f(0)
  }


  sel2.price = (f(5).mul(f(10).pow(f(5)))).mul(f(3).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node27.priceIdentity, IUniversalIn.waterTree.node27.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node26.active) }


  //NODE 28
  var sel = IUniversal.waterTree.node28
  var sel2 = IUniversalIn.waterTree.node28


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Mythril Flask</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
                  <div class="topRight absolute padding2 grey">28</div>
                  <div class="centerDiv padding2 fontSize09">Ambrosia Max ×2 (<span class="boldBlackBorder">×${format(f(sel2.effect), 0)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Elixir</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }


  sel2.price = (f(10).pow(f(7))).mul(f(4).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node28.priceIdentity, IUniversalIn.waterTree.node28.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node27.active) || (IUniversal.waterTree.node29.active) }


  //NODE 29
  var sel = IUniversal.waterTree.node29
  var sel2 = IUniversalIn.waterTree.node29


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Deverin's Gift</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}</div>
                  <div class="topRight absolute padding2 grey">29</div>
                  <div class="centerDiv padding2 fontSize09">Ambrosia/s&nbsp<span class="boldBlackBorder">+${format(f(sel2.effect), 1)}</span></div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Elixir</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = Infinity

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(0.1).mul(f(2).pow(f(sel.level)))
  } else {
    sel2.effect = f(0)
  }


  sel2.price = (f(10).pow(f(5))).mul(f(5).pow(f(sel.level)))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node29.priceIdentity, IUniversalIn.waterTree.node29.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node26.active) }

  //NODE 30
  var sel = IUniversal.waterTree.node30
  var sel2 = IUniversalIn.waterTree.node30


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">MagiTea</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">30</div>
                  <div class="centerDiv padding2 fontSize09">Water Max ×1.2 (<span class="boldBlackBorder">×${format(f(sel2.effect), 1)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Erbs</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = f(100)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }


  sel2.price = f(2).pow(f(sel.level))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node30.priceIdentity, IUniversalIn.waterTree.node30.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node6.active) }

  //NODE 31
  var sel = IUniversal.waterTree.node31
  var sel2 = IUniversalIn.waterTree.node31


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Forbidden Water</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">31</div>
                  <div class="centerDiv padding2 fontSize09">Water Max ×1.2 (<span class="boldBlackBorder">×${format(f(sel2.effect), 1)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Fluid Fire</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = f(100)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }


  sel2.price = f(2).pow(f(sel.level))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node31.priceIdentity, IUniversalIn.waterTree.node31.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node10.active) }

  //NODE 32
  var sel = IUniversal.waterTree.node32
  var sel2 = IUniversalIn.waterTree.node32


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Crystal Spring</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">32</div>
                  <div class="centerDiv padding2 fontSize09">Water Max ×1.2 (<span class="boldBlackBorder">×${format(f(sel2.effect), 1)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Water Gem</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = f(100)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }


  sel2.price = f(2).pow(f(sel.level))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node32.priceIdentity, IUniversalIn.waterTree.node32.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node14.active) }

  //NODE 33
  var sel = IUniversal.waterTree.node33
  var sel2 = IUniversalIn.waterTree.node33


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Concoction</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">33</div>
                  <div class="centerDiv padding2 fontSize09">Water Max ×1.2 (<span class="boldBlackBorder">×${format(f(sel2.effect), 1)}</span>)&nbsp;</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">PyroFrost</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = f(100)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }


  sel2.price = f(2).pow(f(sel.level))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node33.priceIdentity, IUniversalIn.waterTree.node33.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node18.active) }


  //NODE 34
  var sel = IUniversal.waterTree.node34
  var sel2 = IUniversalIn.waterTree.node34


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Alchemist Pot</div>
                  <div class="topRight absolute padding2 grey">34</div>
                  <div class="centerDiv padding2 fontSize09">Unlock Potion Source</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Water</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = f(1)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }


  sel2.price = f(10).pow(f(6))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node34.priceIdentity, IUniversalIn.waterTree.node34.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node22.active) }


  //NODE 35
  var sel = IUniversal.waterTree.node35
  var sel2 = IUniversalIn.waterTree.node35


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Arcane Distillation</div>
                  <div class="topRight absolute padding2 grey">35</div>
                  <div class="centerDiv padding2 fontSize09">Unlock Potion Fusion</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Elixir</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = f(1)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }


  sel2.price = f(10).pow(f(6))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node35.priceIdentity, IUniversalIn.waterTree.node35.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node24.active) }


  //NODE 36
  var sel = IUniversal.waterTree.node36
  var sel2 = IUniversalIn.waterTree.node36


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Runic Pot</div>
                  <div class="topRight absolute padding2 grey">36</div>
                  <div class="centerDiv padding2 fontSize09">Unlock new Potion Sources</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Elixir</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = f(1)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }


  sel2.price = f(10).pow(f(5))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node36.priceIdentity, IUniversalIn.waterTree.node36.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node24.active) }


  //NODE 37
  var sel = IUniversal.waterTree.node37
  var sel2 = IUniversalIn.waterTree.node37


  sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Heavens Pot</div>
                  <div class="topRight absolute padding2 grey">37</div>
                  <div class="centerDiv padding2 fontSize09">Unlock new Potion Sources</div>
                 </div>`



  sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Ambrosia</div>`


  sel.level = f(sel.level)
  sel2.maxLevel = f(1)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  if (f(sel.level).gt(f(0))) {
    sel2.effect = f(1.2).pow(f(sel.level))
  } else {
    sel2.effect = f(1)
  }


  sel2.price = f(10).pow(f(5))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node37.priceIdentity, IUniversalIn.waterTree.node37.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node28.active) }


  //NODE 38
  var sel = IUniversal.waterTree.node38
  var sel2 = IUniversalIn.waterTree.node38


  if (sel.active) {
    sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Everflowing Divinity</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">38</div>
                  <div class="centerDiv padding2 fontSize09">Ambrosia can be higher than Max, with lower Ambrosia/s</div>
                  <div class="centerDiv padding2 fontSize09">Ambrosia/s &nbsp;<span class="boldBlackBorder">/${format(f(1).dividedBy(f(sel2.effect)))}</span></div>
                 </div>`



    unlockShow("content2_19_node38_button", false)
    sel2.button = ``
  } else {
    unlockShow("content2_19_node38_button", true)
    sel2.content = `<div class="bDefaultStyle transparent centerDivColumns padding2">
                  <div class="centerDiv boldBlackBorder">Everflowing Divinity</div>
                  <div class="topLeft absolute padding2 grey">${format(f(sel.level), 0)}/${format(f(sel2.maxLevel), 0)}</div>
                  <div class="topRight absolute padding2 grey">38</div>
                  <div class="centerDiv padding2 fontSize09">Ambrosia can be higher than Max, with lower Ambrosia/s</div>
                 </div>`

    sel2.button = `<div class="centerDiv noClick boldBlackBorder">${format(f(sel2.price), 0)}</div>
                <div class="centerDiv noClick">Ambrosia</div>`
  }

  sel.level = f(sel.level)
  sel2.maxLevel = f(1)

  if (f(sel.level).gte(f(sel2.maxLevel))) {
    sel2.button = `<div class="centerDiv noClick boldBlackBorder">MAX</div>`
  }

  var difference = f(IUniversal.ambrosia).dividedBy(f(IUniversal.ambrosiaMax))
  var calc = f(f(5).pow(f(Decimal.log10(f(difference)))))

  if (f(sel.level).gt(f(0))) {
    if (f(IUniversal.ambrosia).gte(f(IUniversal.ambrosiaMax))) {
      sel2.effect = f(1).dividedBy(calc)
    } else {
      sel2.effect = f(1)
    }
  } else {
    sel2.effect = f(1)
  }


  sel2.price = f(10).pow(f(4))

  if (f(sel.level).gt(f(0))) { sel.active = true }
  if (sel.active) { sel.unlocked = true }
  sel2.checkBuy = function () { if (checkBuy(IUniversalIn.waterTree.node38.priceIdentity, IUniversalIn.waterTree.node38.price, "uni")) { return true } }
  sel2.req = function () { return (IUniversal.waterTree.node28.active) }

  //Potion Info

  //potion1

  var sel = IUniversalIn.potionInfo.potion1

  sel.prices.price1.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price2.priceFormula = function (tier, level, merges) { return 0 }
  sel.prices.price3.priceFormula = function (tier, level, merges) { return 0 }
  sel.prices.price4.priceFormula = function (tier, level, merges) { return 0 }

  sel.prices.price1.price = sel.prices.price1.priceFormula()
  sel.prices.price2.price = sel.prices.price2.priceFormula()
  sel.prices.price3.price = sel.prices.price3.priceFormula()
  sel.prices.price4.price = sel.prices.price4.priceFormula()

  //potion2
  var sel = IUniversalIn.potionInfo.potion2

  sel.prices.price1.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price2.priceFormula = function (tier, level, merges) { return 0 }
  sel.prices.price3.priceFormula = function (tier, level, merges) { return 0 }
  sel.prices.price4.priceFormula = function (tier, level, merges) { return 0 }

  sel.prices.price1.price = sel.prices.price1.priceFormula()
  sel.prices.price2.price = sel.prices.price2.priceFormula()
  sel.prices.price3.price = sel.prices.price3.priceFormula()
  sel.prices.price4.price = sel.prices.price4.priceFormula()

  //potion3
  var sel = IUniversalIn.potionInfo.potion3

  sel.prices.price1.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price2.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }

  sel.prices.price3.priceFormula = function (tier, level, merges) {
    let value = (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level)));
    return merges < 1 ? 0 : value;
  }

  sel.prices.price4.priceFormula = function (tier, level, merges) {
    let value = (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level)));
    return merges < 2 ? 0 : value;
  }

  sel.prices.price1.price = sel.prices.price1.priceFormula()
  sel.prices.price2.price = sel.prices.price2.priceFormula()
  sel.prices.price3.price = sel.prices.price3.priceFormula()
  sel.prices.price4.price = sel.prices.price4.priceFormula()

  //potion4
  var sel = IUniversalIn.potionInfo.potion4

  sel.prices.price1.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price2.priceFormula = function (tier, level, merges) { return 0 }
  sel.prices.price3.priceFormula = function (tier, level, merges) { return 0 }
  sel.prices.price4.priceFormula = function (tier, level, merges) { return 0 }

  sel.prices.price1.price = sel.prices.price1.priceFormula()
  sel.prices.price2.price = sel.prices.price2.priceFormula()
  sel.prices.price3.price = sel.prices.price3.priceFormula()
  sel.prices.price4.price = sel.prices.price4.priceFormula()

  //potion5
  var sel = IUniversalIn.potionInfo.potion5

  sel.prices.price1.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price2.priceFormula = function (tier, level, merges) { return 0 }
  sel.prices.price3.priceFormula = function (tier, level, merges) { return 0 }
  sel.prices.price4.priceFormula = function (tier, level, merges) { return 0 }

  sel.prices.price1.price = sel.prices.price1.priceFormula()
  sel.prices.price2.price = sel.prices.price2.priceFormula()
  sel.prices.price3.price = sel.prices.price3.priceFormula()
  sel.prices.price4.price = sel.prices.price4.priceFormula()

  //potion6

  var sel = IUniversalIn.potionInfo.potion6

  sel.prices.price1.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price2.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price3.priceFormula = function (tier, level, merges) { return 0 }
  sel.prices.price4.priceFormula = function (tier, level, merges) { return 0 }

  sel.prices.price1.price = sel.prices.price1.priceFormula()
  sel.prices.price2.price = sel.prices.price2.priceFormula()
  sel.prices.price3.price = sel.prices.price3.priceFormula()
  sel.prices.price4.price = sel.prices.price4.priceFormula()

  //potion7

  var sel = IUniversalIn.potionInfo.potion7

  sel.prices.price1.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price2.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price3.priceFormula = function (tier, level, merges) { return 0 }
  sel.prices.price4.priceFormula = function (tier, level, merges) { return 0 }

  sel.prices.price1.price = sel.prices.price1.priceFormula()
  sel.prices.price2.price = sel.prices.price2.priceFormula()
  sel.prices.price3.price = sel.prices.price3.priceFormula()
  sel.prices.price4.price = sel.prices.price4.priceFormula()

  //potion8

  var sel = IUniversalIn.potionInfo.potion8

  sel.prices.price1.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price2.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price3.priceFormula = function (tier, level, merges) { return 0 }
  sel.prices.price4.priceFormula = function (tier, level, merges) { return 0 }

  sel.prices.price1.price = sel.prices.price1.priceFormula()
  sel.prices.price2.price = sel.prices.price2.priceFormula()
  sel.prices.price3.price = sel.prices.price3.priceFormula()
  sel.prices.price4.price = sel.prices.price4.priceFormula()

  //potion9

  var sel = IUniversalIn.potionInfo.potion9

  sel.prices.price1.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price2.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price3.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price4.priceFormula = function (tier, level, merges) { return 0 }

  sel.prices.price1.price = sel.prices.price1.priceFormula()
  sel.prices.price2.price = sel.prices.price2.priceFormula()
  sel.prices.price3.price = sel.prices.price3.priceFormula()
  sel.prices.price4.price = sel.prices.price4.priceFormula()

  //potion10

  var sel = IUniversalIn.potionInfo.potion10

  sel.prices.price1.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price2.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price3.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price4.priceFormula = function (tier, level, merges) { return 0 }

  sel.prices.price1.price = sel.prices.price1.priceFormula()
  sel.prices.price2.price = sel.prices.price2.priceFormula()
  sel.prices.price3.price = sel.prices.price3.priceFormula()
  sel.prices.price4.price = sel.prices.price4.priceFormula()

  //potion11

  var sel = IUniversalIn.potionInfo.potion11

  sel.prices.price1.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price2.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price3.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price4.priceFormula = function (tier, level, merges) { return 0 }

  sel.prices.price1.price = sel.prices.price1.priceFormula()
  sel.prices.price2.price = sel.prices.price2.priceFormula()
  sel.prices.price3.price = sel.prices.price3.priceFormula()
  sel.prices.price4.price = sel.prices.price4.priceFormula()

  //potion12

  var sel = IUniversalIn.potionInfo.potion12

  sel.prices.price1.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price2.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price3.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price4.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }

  sel.prices.price1.price = sel.prices.price1.priceFormula()
  sel.prices.price2.price = sel.prices.price2.priceFormula()
  sel.prices.price3.price = sel.prices.price3.priceFormula()
  sel.prices.price4.price = sel.prices.price4.priceFormula()

  //potion13

  var sel = IUniversalIn.potionInfo.potion13

  sel.prices.price1.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price2.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price3.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price4.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }

  sel.prices.price1.price = sel.prices.price1.priceFormula()
  sel.prices.price2.price = sel.prices.price2.priceFormula()
  sel.prices.price3.price = sel.prices.price3.priceFormula()
  sel.prices.price4.price = sel.prices.price4.priceFormula()

  //potion14

  var sel = IUniversalIn.potionInfo.potion14

  sel.prices.price1.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price2.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price3.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }
  sel.prices.price4.priceFormula = function (tier, level, merges) { return (f(10).pow(f(tier))).mul((f(10).pow(f(merges)))).mul(f(2).pow(f(level))) }

  sel.prices.price1.price = sel.prices.price1.priceFormula()
  sel.prices.price2.price = sel.prices.price2.priceFormula()
  sel.prices.price3.price = sel.prices.price3.priceFormula()
  sel.prices.price4.price = sel.prices.price4.priceFormula()

  //Potions Effects

  potionSetter()

  potionInfoStatic()
  potionEquipmentStatic()

  //EFFECT 1
  var potionLevel = getPotionLevel("damage_training", "equipment")

  var effectLevel = getPotionEffectTier("damage_training", "equipment")

  IUniversalIn.potionEffects.effect1.valueFormula = function (potionLevel = 0, effectLevel = 1) { return (f(2).add(f(effectLevel).minus(f(1)))).pow(f(potionLevel).add(f(1))) }
  if (potionLevel == null && effectLevel == null) {
    IUniversalIn.potionEffects.effect1.activeValue = f(1)
  } else {
    IUniversalIn.potionEffects.effect1.activeValue = (f(2).add(f(effectLevel).minus(f(1)))).pow(f(potionLevel).add(f(1)))
  }
  IUniversalIn.potionEffects.effect1.value = IUniversalIn.potionEffects.effect1.valueFormula()

  IUniversalIn.potionEffects.effect1.contentFormula = function () { return `Damage Training <span class="boldBlackBorder">×${format(f(this.value))}</span> (${format(f(ITrainingIn.base.base1.prod))})` }
  IUniversalIn.potionEffects.effect1.content = `Damage Training <span class="boldBlackBorder">×${format(f(IUniversalIn.potionEffects.effect1.value))}</span> (${format(f(ITrainingIn.base.base1.prod))})`


  //EFFECT 2
  var potionLevel = getPotionLevel("life_training", "equipment")

  var effectLevel = getPotionEffectTier("life_training", "equipment")

  IUniversalIn.potionEffects.effect2.valueFormula = function (potionLevel = 0, effectLevel = 1) { return (f(2).add(f(effectLevel).minus(f(1)))).pow(f(potionLevel).add(f(1))) }
  if (potionLevel == null && effectLevel == null) {
    IUniversalIn.potionEffects.effect2.activeValue = f(1)
  } else {
    IUniversalIn.potionEffects.effect2.activeValue = (f(2).add(f(effectLevel).minus(f(1)))).pow(f(potionLevel).add(f(1)))
  }
  IUniversalIn.potionEffects.effect2.value = IUniversalIn.potionEffects.effect2.valueFormula()

  IUniversalIn.potionEffects.effect2.contentFormula = function () { return `Life Training <span class="boldBlackBorder">×${format(f(this.value))}</span> (${format(f(ITrainingIn.base.base2.prod))})` }
  IUniversalIn.potionEffects.effect2.content = `Life Training <span class="boldBlackBorder">×${format(f(IUniversalIn.potionEffects.effect2.value))}</span> (${format(f(ITrainingIn.base.base2.prod))})`


  //EFFECT 3
  var potionLevel = getMatchingPotionLevel(IUniversal.potionSource.item1.key, "source", "source")

  var effectLevel = getMatchingEffectTier(IUniversal.potionSource.item1.key, "source", "source")

  IUniversalIn.potionEffects.effect3.valueFormula = function (potionLevel = 0, effectLevel = 1) { return f(f(5).add(f(f(5).mul(f(effectLevel).minus(f(1)))))).pow(f(potionLevel).add(f(1))) }

  if (potionLevel == null && effectLevel == null) {
    IUniversalIn.potionEffects.effect3.activeValue = f(0)
  } else {
    IUniversalIn.potionEffects.effect3.activeValue = f(f(5).add(f(f(5).mul(f(effectLevel).minus(f(1)))))).pow(f(potionLevel).add(f(1)))
  }

  IUniversalIn.potionEffects.effect3.value = IUniversalIn.potionEffects.effect3.valueFormula()


  IUniversalIn.potionEffects.effect3.contentFormula = function () {
    return `<div>Place this potion in Source</div>
                                                                <span class="boldBlackBorder">${format(f(this.value))}</span> Accumulation/s`
  }
  IUniversalIn.potionEffects.effect3.content = `<span class="boldBlackBorder">${format(f(IUniversalIn.potionEffects.effect3.value))} Accumulation/s</span>`

  //EFFECT 4
  var potionLevel = getMatchingPotionLevel(IUniversal.potionSource.item2.key, "source", "source")

  var effectLevel = getMatchingEffectTier(IUniversal.potionSource.item2.key, "source", "source")

  IUniversalIn.potionEffects.effect4.valueFormula = function (potionLevel = 0, effectLevel = 1) { return f(f(5).add(f(f(5).mul(f(effectLevel).minus(f(1)))))).pow(f(potionLevel).add(f(1))) }
  if (potionLevel == null && effectLevel == null) {
    IUniversalIn.potionEffects.effect4.activeValue = f(0)
  } else {
    IUniversalIn.potionEffects.effect4.activeValue = f(f(5).add(f(f(5).mul(f(effectLevel).minus(f(1)))))).pow(f(potionLevel).add(f(1)))
  }
  IUniversalIn.potionEffects.effect4.value = IUniversalIn.potionEffects.effect4.valueFormula()

  IUniversalIn.potionEffects.effect4.contentFormula = function () { return `<span class="boldBlackBorder">${format(f(this.value))}</span> Accumulation/s` }
  IUniversalIn.potionEffects.effect4.content = `<span class="boldBlackBorder">${format(f(IUniversalIn.potionEffects.effect4.value))} Accumulation/s</span>`

  //EFFECT 5
  var potionLevel = getMatchingPotionLevel(IUniversal.potionSource.item3.key, "source", "source")

  var effectLevel = getMatchingEffectTier(IUniversal.potionSource.item3.key, "source", "source")

  IUniversalIn.potionEffects.effect5.valueFormula = function (potionLevel = 0, effectLevel = 1) { return f(f(5).add(f(f(5).mul(f(effectLevel).minus(f(1)))))).pow(f(potionLevel).add(f(1))) }
  if (potionLevel == null && effectLevel == null) {
    IUniversalIn.potionEffects.effect5.activeValue = f(0)
  } else {
    IUniversalIn.potionEffects.effect5.activeValue = f(f(5).add(f(f(5).mul(f(effectLevel).minus(f(1)))))).pow(f(potionLevel).add(f(1)))
  }
  IUniversalIn.potionEffects.effect5.value = IUniversalIn.potionEffects.effect5.valueFormula()

  IUniversalIn.potionEffects.effect5.contentFormula = function () { return `<span class="boldBlackBorder">${format(f(this.value))}</span> Accumulation/s` }
  IUniversalIn.potionEffects.effect5.content = `<span class="boldBlackBorder">${format(f(IUniversalIn.potionEffects.effect5.value))} Accumulation/s</span>`

  //EFFECT 6
  var potionLevel = getMatchingPotionLevel(IUniversal.potionSource.item4.key, "source", "source")

  var effectLevel = getMatchingEffectTier(IUniversal.potionSource.item4.key, "source", "source")

  IUniversalIn.potionEffects.effect6.valueFormula = function (potionLevel = 0, effectLevel = 1) { return f(f(5).add(f(f(5).mul(f(effectLevel).minus(f(1)))))).pow(f(potionLevel).add(f(1))) }
  if (potionLevel == null && effectLevel == null) {
    IUniversalIn.potionEffects.effect6.activeValue = f(0)
  } else {
    IUniversalIn.potionEffects.effect6.activeValue = f(f(5).add(f(f(5).mul(f(effectLevel).minus(f(1)))))).pow(f(potionLevel).add(f(1)))
  }
  IUniversalIn.potionEffects.effect6value = IUniversalIn.potionEffects.effect6.valueFormula()

  IUniversalIn.potionEffects.effect6.contentFormula = function () { return `<span class="boldBlackBorder">${format(f(this.value))}</span> Accumulation/s` }
  IUniversalIn.potionEffects.effect6.content = `<span class="boldBlackBorder">${format(f(IUniversalIn.potionEffects.effect6.value))} Accumulation/s</span>`

  //EFFECT 7
  var potionLevel = getMatchingPotionLevel(IUniversal.potionSource.item5.key, "source", "source")

  var effectLevel = getMatchingEffectTier(IUniversal.potionSource.item5.key, "source", "source")

  IUniversalIn.potionEffects.effect7.valueFormula = function (potionLevel = 0, effectLevel = 1) { return f(f(5).add(f(f(5).mul(f(effectLevel).minus(f(1)))))).pow(f(potionLevel).add(f(1))) }
  if (potionLevel == null && effectLevel == null) {
    IUniversalIn.potionEffects.effect7.activeValue = f(0)
  } else {
    IUniversalIn.potionEffects.effect7.activeValue = f(f(5).add(f(f(5).mul(f(effectLevel).minus(f(1)))))).pow(f(potionLevel).add(f(1)))
  }
  IUniversalIn.potionEffects.effect7.value = IUniversalIn.potionEffects.effect7.valueFormula()

  IUniversalIn.potionEffects.effect7.contentFormula = function () { return `<span class="boldBlackBorder">${format(f(this.value))}</span> Accumulation/s` }
  IUniversalIn.potionEffects.effect7.content = `<span class="boldBlackBorder">${format(f(IUniversalIn.potionEffects.effect7.value))} Accumulation/s</span>`

  //EFFECT 8
  var potionLevel = getMatchingPotionLevel(IUniversal.potionSource.item6.key, "source", "source")

  var effectLevel = getMatchingEffectTier(IUniversal.potionSource.item6.key, "source", "source")

  IUniversalIn.potionEffects.effect8.valueFormula = function (potionLevel = 0, effectLevel = 1) { return f(f(5).add(f(f(5).mul(f(effectLevel).minus(f(1)))))).pow(f(potionLevel).add(f(1))) }
  if (potionLevel == null && effectLevel == null) {
    IUniversalIn.potionEffects.effect8.activeValue = f(0)
  } else {
    IUniversalIn.potionEffects.effect8.activeValue = f(f(5).add(f(f(5).mul(f(effectLevel).minus(f(1)))))).pow(f(potionLevel).add(f(1)))
  }
  IUniversalIn.potionEffects.effect8.value = IUniversalIn.potionEffects.effect8.valueFormula()

  IUniversalIn.potionEffects.effect8.contentFormula = function () { return `<span class="boldBlackBorder">${format(f(this.value))}</span> Accumulation/s` }
  IUniversalIn.potionEffects.effect8.content = `<span class="boldBlackBorder">${format(f(IUniversalIn.potionEffects.effect8.value))} Accumulation/s</span>`

  //EFFECT 9
  var potionLevel = getPotionLevel("will_training", "equipment")

  var effectLevel = getPotionEffectTier("will_training", "equipment")

  IUniversalIn.potionEffects.effect9.valueFormula = function (potionLevel = 0, effectLevel = 1) { return (f(1.5).add(f(0.5).mul(f(effectLevel).minus(f(1))))).pow(f(potionLevel).add(f(1))) }
  if (potionLevel == null && effectLevel == null) {
    IUniversalIn.potionEffects.effect9.activeValue = f(1)
  } else {
    IUniversalIn.potionEffects.effect9.activeValue = (f(1.5).add(f(0.5).mul(f(effectLevel).minus(f(1))))).pow(f(potionLevel).add(f(1)))
  }
  IUniversalIn.potionEffects.effect9.value = IUniversalIn.potionEffects.effect9.valueFormula()

  IUniversalIn.potionEffects.effect9.contentFormula = function () { return `Will Training <span class="boldBlackBorder">×${format(f(this.value))}</span> (${format(f(ITrainingIn.base.base3.prod))})` }
  IUniversalIn.potionEffects.effect9.content = `Will Training <span class="boldBlackBorder">×${format(f(IUniversalIn.potionEffects.effect9.value))}</span> (${format(f(ITrainingIn.base.base3.prod))})`

  //EFFECT 10
  var potionLevel = getPotionLevel("insight_training", "equipment")

  var effectLevel = getPotionEffectTier("insight_training", "equipment")

  IUniversalIn.potionEffects.effect10.valueFormula = function (potionLevel = 0, effectLevel = 1) { return (f(1.5).add(f(0.5).mul(f(effectLevel).minus(f(1))))).pow(f(potionLevel).add(f(1))) }
  if (potionLevel == null && effectLevel == null) {
    IUniversalIn.potionEffects.effect10.activeValue = f(1)
  } else {
    IUniversalIn.potionEffects.effect10.activeValue = (f(1.5).add(f(0.5).mul(f(effectLevel).minus(f(1))))).pow(f(potionLevel).add(f(1)))
  }
  IUniversalIn.potionEffects.effect10.value = IUniversalIn.potionEffects.effect10.valueFormula()

  IUniversalIn.potionEffects.effect10.contentFormula = function () { return `Insight Training <span class="boldBlackBorder">×${format(f(this.value))}</span> (${format(f(ITrainingIn.base.base4.prod))})` }
  IUniversalIn.potionEffects.effect10.content = `Insight Training <span class="boldBlackBorder">×${format(f(IUniversalIn.potionEffects.effect10.value))}</span> (${format(f(ITrainingIn.base.base4.prod))})`

  //EFFECT 11
  var potionLevel = getPotionLevel("huntPrice_hunting", "equipment")

  var effectLevel = getPotionEffectTier("huntPrice_hunting", "equipment")

  IUniversalIn.potionEffects.effect11.valueFormula = function (potionLevel = 0, effectLevel = 1) { return (f(3).add(f(3).mul(f(effectLevel).minus(f(1))))).pow(f(potionLevel).add(f(1))) }
  if (potionLevel == null && effectLevel == null) {
    IUniversalIn.potionEffects.effect11.activeValue = f(1)
  } else {
    IUniversalIn.potionEffects.effect11.activeValue = (f(3).add(f(3).mul(f(effectLevel).minus(f(1))))).pow(f(potionLevel).add(f(1)))
  }
  IUniversalIn.potionEffects.effect11.value = IUniversalIn.potionEffects.effect11.valueFormula()

  IUniversalIn.potionEffects.effect11.contentFormula = function () { return `Hunts Price <span class="boldBlackBorder">/${format(f(this.value))}</span>` }
  IUniversalIn.potionEffects.effect11.content = `Hunts Price <span class="boldBlackBorder">/${format(f(IUniversalIn.potionEffects.effect11.value))}</span>`

  //EFFECT 12
  var potionLevel = getPotionLevel("huntEssence_hunting", "equipment")

  var effectLevel = getPotionEffectTier("huntEssence_hunting", "equipment")

  IUniversalIn.potionEffects.effect12.valueFormula = function (potionLevel = 0, effectLevel = 1) { return (f(3).add(f(3).mul(f(effectLevel).minus(f(1))))).pow(f(potionLevel).add(f(1))) }
  if (potionLevel == null && effectLevel == null) {
    IUniversalIn.potionEffects.effect12.activeValue = f(1)
  } else {
    IUniversalIn.potionEffects.effect12.activeValue = (f(3).add(f(3).mul(f(effectLevel).minus(f(1))))).pow(f(potionLevel).add(f(1)))
  }
  IUniversalIn.potionEffects.effect12.value = IUniversalIn.potionEffects.effect12.valueFormula()

  IUniversalIn.potionEffects.effect12.contentFormula = function () { return `Hunts Essence/s <span class="boldBlackBorder">×${format(f(this.value))}</span> (${format(f(IGameData.essenceProd))})` }
  IUniversalIn.potionEffects.effect12.content = `Hunts Essence/s <span class="boldBlackBorder">×${format(f(IUniversalIn.potionEffects.effect12.value))}</span> (${format(f(IGameData.essenceProd))})`

  //EFFECT 13
  var potionLevel = getPotionLevel("huntUpgradePrice_hunting", "equipment")

  var effectLevel = getPotionEffectTier("huntUpgradePrice_hunting", "equipment")

  IUniversalIn.potionEffects.effect13.valueFormula = function (potionLevel = 0, effectLevel = 1) { return (f(5).add(f(5).mul(f(effectLevel).minus(f(1))))).pow(f(potionLevel).add(f(1))) }
  if (potionLevel == null && effectLevel == null) {
    IUniversalIn.potionEffects.effect13.activeValue = f(1)
  } else {
    IUniversalIn.potionEffects.effect13.activeValue = (f(5).add(f(5).mul(f(effectLevel).minus(f(1))))).pow(f(potionLevel).add(f(1)))
  }
  IUniversalIn.potionEffects.effect13.value = IUniversalIn.potionEffects.effect13.valueFormula()

  IUniversalIn.potionEffects.effect13.contentFormula = function () { return `Hunt upgrades Price <span class="boldBlackBorder">/${format(f(this.value))}</span>` }
  IUniversalIn.potionEffects.effect13.content = `Hunt upgrades Price <span class="boldBlackBorder">/${format(f(IUniversalIn.potionEffects.effect13.value))}</span>`

  //EFFECT 14
  var potionLevel = getPotionLevel("criticalRegeneration_attributes", "equipment")

  var effectLevel = getPotionEffectTier("criticalRegeneration_attributes", "equipment")

  IUniversalIn.potionEffects.effect14.valueFormula = function (potionLevel = 0, effectLevel = 1) { return (f(4).add(f(4).mul(f(effectLevel).minus(f(1))))).pow(f(potionLevel).add(f(1))) }
  if (potionLevel == null && effectLevel == null) {
    IUniversalIn.potionEffects.effect14.activeValue = f(1)
  } else {
    IUniversalIn.potionEffects.effect14.activeValue = (f(4).add(f(4).mul(f(effectLevel).minus(f(1))))).pow(f(potionLevel).add(f(1)))
  }
  IUniversalIn.potionEffects.effect14.value = IUniversalIn.potionEffects.effect14.valueFormula()

  IUniversalIn.potionEffects.effect14.contentFormula = function () { return `Critical and Life Regeneration Points <span class="boldBlackBorder">×${format(f(this.value))}</span>` }
  IUniversalIn.potionEffects.effect14.content = `Critical and Life Regeneration points <span class="boldBlackBorder">×${format(f(IUniversalIn.potionEffects.effect14.value))}</span>`


  //EFFECT 15
  var potionLevel = getPotionLevel("defencePenDefence_attributes", "equipment")

  var effectLevel = getPotionEffectTier("defencePenDefence_attributes", "equipment")

  IUniversalIn.potionEffects.effect15.valueFormula = function (potionLevel = 0, effectLevel = 1) { return (f(4).add(f(4).mul(f(effectLevel).minus(f(1))))).pow(f(potionLevel).add(f(1))) }
  if (potionLevel == null && effectLevel == null) {
    IUniversalIn.potionEffects.effect15.activeValue = f(1)
  } else {
    IUniversalIn.potionEffects.effect15.activeValue = (f(4).add(f(4).mul(f(effectLevel).minus(f(1))))).pow(f(potionLevel).add(f(1)))
  }
  IUniversalIn.potionEffects.effect15.value = IUniversalIn.potionEffects.effect15.valueFormula()

  IUniversalIn.potionEffects.effect15.contentFormula = function () { return `Defence Penetration and Defence points <span class="boldBlackBorder">×${format(f(this.value))}</span>` }
  IUniversalIn.potionEffects.effect15.content = `Defence Penetration and Defence points <span class="boldBlackBorder">×${format(f(IUniversalIn.potionEffects.effect15.value))}</span>`


  //EFFECT 16
  var potionLevel = getPotionLevel("lifestealShield_attributes", "equipment")

  var effectLevel = getPotionEffectTier("lifestealShield_attributes", "equipment")

  IUniversalIn.potionEffects.effect16.valueFormula = function (potionLevel = 0, effectLevel = 1) { return (f(4).add(f(4).mul(f(effectLevel).minus(f(1))))).pow(f(potionLevel).add(f(1))) }
  if (potionLevel == null && effectLevel == null) {
    IUniversalIn.potionEffects.effect16.activeValue = f(1)
  } else {
    IUniversalIn.potionEffects.effect16.activeValue = (f(4).add(f(4).mul(f(effectLevel).minus(f(1))))).pow(f(potionLevel).add(f(1)))
  }
  IUniversalIn.potionEffects.effect16.value = IUniversalIn.potionEffects.effect16.valueFormula()

  IUniversalIn.potionEffects.effect16.contentFormula = function () { return `Life Steal and Shield points <span class="boldBlackBorder">×${format(f(this.value))}</span>` }
  IUniversalIn.potionEffects.effect16.content = `Life Steal and Shield points <span class="boldBlackBorder">×${format(f(IUniversalIn.potionEffects.effect16.value))}</span>`

  //EFFECT 17
  var potionLevel = getPotionLevel("challengerDamage_challenger", "equipment")

  var effectLevel = getPotionEffectTier("challengerDamage_challenger", "equipment")

  IUniversalIn.potionEffects.effect17.valueFormula = function (potionLevel = 0, effectLevel = 1) { return (f(5).add(f(5).mul(f(effectLevel).minus(f(1))))).pow(f(potionLevel).add(f(1))) }
  if (potionLevel == null && effectLevel == null) {
    IUniversalIn.potionEffects.effect17.activeValue = f(1)
  } else {
    IUniversalIn.potionEffects.effect17.activeValue = (f(5).add(f(5).mul(f(effectLevel).minus(f(1))))).pow(f(potionLevel).add(f(1)))
  }

  IUniversalIn.potionEffects.effect17.value = IUniversalIn.potionEffects.effect17.valueFormula()

  IUniversalIn.potionEffects.effect17.contentFormula = function () { return `Challenger Damage <span class="boldBlackBorder">/${format(f(this.value))}</span> (${format(f(IFightIn.challengers.baseChallenger.damage))})` }
  IUniversalIn.potionEffects.effect17.content = `Challenger Damage <span class="boldBlackBorder">/${format(f(IUniversalIn.potionEffects.effect17.value))}</span> (${format(f(IFightIn.challengers.baseChallenger.damage))})`
  //EFFECT 18
  var potionLevel = getPotionLevel("challengerLife_challenger", "equipment")

  var effectLevel = getPotionEffectTier("challengerLife_challenger", "equipment")

  IUniversalIn.potionEffects.effect18.valueFormula = function (potionLevel = 0, effectLevel = 1) { return (f(5).add(f(5).mul(f(effectLevel).minus(f(1))))).pow(f(potionLevel).add(f(1))) }
  if (potionLevel == null && effectLevel == null) {
    IUniversalIn.potionEffects.effect18.activeValue = f(1)
  } else {
    IUniversalIn.potionEffects.effect18.activeValue = (f(5).add(f(5).mul(f(effectLevel).minus(f(1))))).pow(f(potionLevel).add(f(1)))
  }
  IUniversalIn.potionEffects.effect18.value = IUniversalIn.potionEffects.effect18.valueFormula()

  IUniversalIn.potionEffects.effect18.contentFormula = function () { return `Challenger Life <span class="boldBlackBorder">/${format(f(this.value))}</span> (${format(f(IFightIn.challengers.baseChallenger.life))})` }
  IUniversalIn.potionEffects.effect18.content = `Challenger Life <span class="boldBlackBorder">/${format(f(IUniversalIn.potionEffects.effect18.value))}</span> (${format(f(IFightIn.challengers.baseChallenger.life))})`

  //EFFECT 19
  var potionLevel = getPotionLevel("universalChallenger_challenger", "equipment")

  var effectLevel = getPotionEffectTier("universalChallenger_challenger", "equipment")

  IUniversalIn.potionEffects.effect19.valueFormula = function (potionLevel = 0, effectLevel = 1) { return (f(5).add(f(5).mul(f(effectLevel).minus(f(1))))).pow(f(potionLevel).add(f(1))) }
  if (potionLevel == null && effectLevel == null) {
    IUniversalIn.potionEffects.effect19.activeValue = f(1)
  } else {
    IUniversalIn.potionEffects.effect19.activeValue = (f(5).add(f(5).mul(f(effectLevel).minus(f(1))))).pow(f(potionLevel).add(f(1)))
  }
  IUniversalIn.potionEffects.effect19.value = IUniversalIn.potionEffects.effect19.valueFormula()

  IUniversalIn.potionEffects.effect19.contentFormula = function () { return `Universal Challenger is <span class="boldBlackBorder">${format(f(this.value))}</span> times weaker` }
  IUniversalIn.potionEffects.effect19.content = `Universal Challenger is <span class="boldBlackBorder">×${format(f(IUniversalIn.potionEffects.effect19.value))} times weaker</span>`

  //POTION SOURCE

  //source1
  IUniversal.potionSource.item1.value1 = f(IUniversal.potionSource.item1.value1)
  if (f(IUniversal.potionSource.item1.value1).gt(f(0))) {
    IUniversalIn.potionSource.item1.value2 = (f(Decimal.log10(f(IUniversal.potionSource.item1.value1).add(f(10)))).minus(f(1))).pow(f(2))

    if (f(IUniversalIn.potionSource.item1.value2).lt(f(1))) {
      IUniversalIn.potionSource.item1.value2 = f(1)
    }
  } else {
    IUniversalIn.potionSource.item1.value2 = f(1)
  }
  IUniversalIn.potionSource.item1.content = `          <div class="square height30 width100 centerDiv column">
                                                          <div><span class="boldBlackBorder">${format(IUniversal.potionSource.item1.value1)}</span> Accumulation</div>
                                                          <div><span class="boldBlackBorder">${format(IUniversalIn.potionEffects.effect3.activeValue)}/s</span></div>
                                                       </div>
                                                       <div class="square height30 width100 centerDiv" >
                                                          <div>Water/s <span class="boldBlackBorder">×${format(IUniversalIn.potionSource.item1.value2, 2)}</span></div>
                                                       </div>`
  //source2

  IUniversal.potionSource.item2.value1 = f(IUniversal.potionSource.item2.value1)
  if (f(IUniversal.potionSource.item2.value1).gt(f(0))) {

    IUniversalIn.potionSource.item2.value2 = (f(Decimal.log10(f(IUniversal.potionSource.item2.value1).add(f(10)))).minus(f(1))).pow(f(2))

    if (f(IUniversalIn.potionSource.item2.value2).lt(f(1))) {
      IUniversalIn.potionSource.item2.value2 = f(1)
    }
  } else {
    IUniversalIn.potionSource.item2.value2 = f(1)

  }
  IUniversalIn.potionSource.item2.content = `          <div class="square height30 width100 centerDiv column">
                                                          <div><span class="boldBlackBorder">${format(IUniversal.potionSource.item2.value1)}</span> Accumulation</div>
                                                          <div><span class="boldBlackBorder">${format(IUniversalIn.potionEffects.effect4.activeValue)}/s</span></div>
                                                       </div>
                                                       <div class="square height30 width100 centerDiv" >
                                                          <div>Water Max <span class="boldBlackBorder">×${format(IUniversalIn.potionSource.item2.value2, 2)}</span></div>
                                                       </div>`
  //source3

  IUniversal.potionSource.item3.value1 = f(IUniversal.potionSource.item3.value1)
  if (f(IUniversal.potionSource.item3.value1).gt(f(0))) {
    IUniversalIn.potionSource.item3.value2 = ((f(Decimal.log10(f(IUniversal.potionSource.item3.value1).add(f(10)))).minus(f(1))).dividedBy(f(2))).pow(f(2))

    if (f(IUniversalIn.potionSource.item3.value2).lt(f(1))) {
      IUniversalIn.potionSource.item3.value2 = f(1)
    }
  } else {
    IUniversalIn.potionSource.item3.value2 = f(1)

  }
  IUniversalIn.potionSource.item3.content = `          <div class="square height30 width100 centerDiv column">
                                                          <div><span class="boldBlackBorder">${format(IUniversal.potionSource.item3.value1)}</span> Accumulation</div>
                                                          <div><span class="boldBlackBorder">${format(IUniversalIn.potionEffects.effect5.activeValue)}/s</span></div>
                                                       </div>
                                                       <div class="square height30 width100 centerDiv" >
                                                          <div>Elixir/s <span class="boldBlackBorder">×${format(IUniversalIn.potionSource.item3.value2, 2)}</span></div>
                                                       </div>`

  //source4

  IUniversal.potionSource.item4.value1 = f(IUniversal.potionSource.item4.value1)
  if (f(IUniversal.potionSource.item4.value1).gt(f(0))) {

    IUniversalIn.potionSource.item4.value2 = ((f(Decimal.log10(f(IUniversal.potionSource.item4.value1).add(f(10)))).minus(f(1))).dividedBy(f(2))).pow(f(2))

    if (f(IUniversalIn.potionSource.item4.value2).lt(f(1))) {
      IUniversalIn.potionSource.item4.value2 = f(1)
    }
  } else {
    IUniversalIn.potionSource.item4.value2 = f(1)

  }
  IUniversalIn.potionSource.item4.content = `          <div class="square height30 width100 centerDiv column">
                                                          <div><span class="boldBlackBorder">${format(IUniversal.potionSource.item4.value1)}</span> Accumulation</div>
                                                          <div><span class="boldBlackBorder">${format(IUniversalIn.potionEffects.effect6.activeValue)}/s</span></div>
                                                       </div>
                                                       <div class="square height30 width100 centerDiv" >
                                                          <div>Elixir Max <span class="boldBlackBorder">×${format(IUniversalIn.potionSource.item4.value2, 2)}</span></div>
                                                       </div>`

  //source5

  IUniversal.potionSource.item5.value1 = f(IUniversal.potionSource.item5.value1)
  if (f(IUniversal.potionSource.item5.value1).gt(f(0))) {

    IUniversalIn.potionSource.item5.value2 = ((f(Decimal.log10(f(IUniversal.potionSource.item5.value1).add(f(10)))).minus(f(1))).dividedBy(f(4))).pow(f(2))

    if (f(IUniversalIn.potionSource.item5.value2).lt(f(1))) {
      IUniversalIn.potionSource.item5.value2 = f(1)
    }
  } else {
    IUniversalIn.potionSource.item5.value2 = f(1)

  }
  IUniversalIn.potionSource.item5.content = `          <div class="square height30 width100 centerDiv column">
                                                          <div><span class="boldBlackBorder">${format(IUniversal.potionSource.item5.value1)}</span> Accumulation</div>
                                                          <div><span class="boldBlackBorder">${format(IUniversalIn.potionEffects.effect7.activeValue)}/s</span></div>
                                                       </div>
                                                       <div class="square height30 width100 centerDiv" >
                                                          <div>Ambrosia/s <span class="boldBlackBorder">×${format(IUniversalIn.potionSource.item5.value2, 2)}</span></div>
                                                       </div>`

  //source6

  IUniversal.potionSource.item6.value1 = f(IUniversal.potionSource.item6.value1)
  if (f(IUniversal.potionSource.item6.value1).gt(f(0))) {

    IUniversalIn.potionSource.item6.value2 = ((f(Decimal.log10(f(IUniversal.potionSource.item6.value1).add(f(10)))).minus(f(1))).dividedBy(f(4))).pow(f(2))

    if (f(IUniversalIn.potionSource.item6.value2).lt(f(1))) {
      IUniversalIn.potionSource.item6.value2 = f(1)
    }
  } else {
    IUniversalIn.potionSource.item6.value2 = f(1)
  }
  IUniversalIn.potionSource.item6.content = `          <div class="square height30 width100 centerDiv column">
                                                          <div><span class="boldBlackBorder">${format(IUniversal.potionSource.item6.value1)}</span> Accumulation</div>
                                                          <div><span class="boldBlackBorder">${format(IUniversalIn.potionEffects.effect8.activeValue)}/s</span></div>
                                                       </div>
                                                       <div class="square height30 width100 centerDiv" >
                                                          <div>Ambrosia Max <span class="boldBlackBorder">×${format(IUniversalIn.potionSource.item6.value2, 2)}</span></div>
                                                       </div>`
}

function getMatchingPotionLevel(keyId, effType, type) {
  if (type == "equipment") {

    if (IUniversal.inventoryStorage[keyId]) {
      for (let y in IUniversal.inventoryStorage[keyId].effects) {
        var obj = IUniversal.inventoryStorage[keyId]
        var sel2 = IUniversal.inventoryStorage[keyId].effects[y]

        if (sel2.type == effType) {
          return f(IUniversal.inventoryStorage[keyId].level)
        }
      }
    }

    return null
  }
  if (type == "source") {
    if (IUniversal.inventoryStorage[keyId]) {
      for (let y in IUniversal.inventoryStorage[keyId].effects) {
        var obj = IUniversal.inventoryStorage[keyId]
        var sel2 = IUniversal.inventoryStorage[keyId].effects[y]

        if (sel2.type == effType) {
          return f(IUniversal.inventoryStorage[keyId].level)
        }
      }
    }
    return null
  }
}

function getMatchingEffectTier(keyId, effType, type) {
  if (type == "equipment") {

    if (IUniversal.inventoryStorage[keyId]) {
      for (let y in IUniversal.inventoryStorage[keyId].effects) {
        var obj = IUniversal.inventoryStorage[keyId]
        var sel2 = IUniversal.inventoryStorage[keyId].effects[y]

        return f(sel2.level)
      }
    }
    return null
  }
  if (type == "source") {

    if (IUniversal.inventoryStorage[keyId]) {
      for (let y in IUniversal.inventoryStorage[keyId].effects) {
        var obj = IUniversal.inventoryStorage[keyId]
        var sel2 = IUniversal.inventoryStorage[keyId].effects[y]

        if (sel2.type == effType) {
          return f(sel2.level)
        }
      }
    }
    return null
  }
}

function getPotionLevel(effType, type) {
  if (type == "equipment") {

    for (let x in IUniversal.equipment) {
      var sel = IUniversal.equipment[x]

      if (IUniversal.inventoryStorage[sel.key]) {
        for (let y in IUniversal.inventoryStorage[sel.key].effects) {
          var obj = IUniversal.inventoryStorage[sel.key]
          var sel2 = IUniversal.inventoryStorage[sel.key].effects[y]

          if (sel2.type == effType) {
            return f(obj.level)
          }
        }
      }
    }
    return null
  }
  if (type == "source") {
    for (let x in IUniversal.potionSource) {
      var sel = IUniversal.potionSource[x]

      if (IUniversal.inventoryStorage[sel.key]) {
        for (let y in IUniversal.inventoryStorage[sel.key].effects) {
          var obj = IUniversal.inventoryStorage[sel.key]
          var sel2 = IUniversal.inventoryStorage[sel.key].effects[y]

          if (sel2.type == effType) {
            return f(sel.level)
          }
        }
      }
    }
    return null
  }
}

function getPotionEffectTier(effType, type) {
  if (type == "equipment") {
    for (let x in IUniversal.equipment) {
      var sel = IUniversal.equipment[x]

      if (IUniversal.inventoryStorage[sel.key]) {
        for (let y in IUniversal.inventoryStorage[sel.key].effects) {
          var obj = IUniversal.inventoryStorage[sel.key]
          var sel2 = IUniversal.inventoryStorage[sel.key].effects[y]

          if (sel2.type == effType) {
            return f(sel2.level)
          }
        }
      }
    }
    return null
  }
  if (type == "source") {
    for (let x in IUniversal.potionSource) {
      var sel = IUniversal.potionSource[x]

      if (IUniversal.inventoryStorage[sel.key]) {
        for (let y in IUniversal.inventoryStorage[sel.key].effects) {
          var obj = IUniversal.inventoryStorage[sel.key]
          var sel2 = IUniversal.inventoryStorage[sel.key].effects[y]

          if (sel2.type == effType) {
            return f(sel2.level)
          }
        }
      }
    }
    return null
  }
}



function valuesSetterDinamic(type) {

  //Damage Training

  if (ITraining.base.base1.active) {
    var damage1 = f(ITrainingIn.base.base1.prod)
  }
  else {
    damage1 = f(0)
  }


  ITraining.base.base1.tot = f(ITraining.base.base1.tot)
    .add((f(damage1))
      .mul(f(IGameData.tickSpeed))
    );

  if (f(ITraining.base.base1.tot).lt(f(0))) {
    ITraining.base.base1.tot = f(0)
  }
  //Life Training

  if (ITraining.base.base2.active) {
    var life1 = f(ITrainingIn.base.base2.prod)
  }
  else {
    life1 = f(0)
  }


  ITraining.base.base2.tot = f(ITraining.base.base2.tot)
    .add((f(life1))
      .mul(f(IGameData.tickSpeed))
    );

  if (f(ITraining.base.base2.tot).lt(f(0))) {
    ITraining.base.base2.tot = f(0)
  }

  //Will Training

  if (ITraining.base.base3.active) {
    var Will1 = f(ITrainingIn.base.base3.prod)
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

  if (f(ITraining.base.base3.tot).lt(f(0))) {
    ITraining.base.base3.tot = f(0)
  }

  //Insight Training

  if (ITraining.base.base4.active) {
    var Insight1 = f(ITrainingIn.base.base4.prod)
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

  if (f(ITraining.base.base4.tot).lt(f(0))) {
    ITraining.base.base4.tot = f(0)
  }
  //DAMAGE FINAL

  //damage



  var damage1 = ITraining.base.base1.tot

  if (IFight.normalHuntingRewards.upgrade1.active && type != "universalChallengerChallenge1" && f(IFightIn.normalHuntingRewards.upgrade1.effect) != "NaN") {
    var damage2 = f(IFightIn.normalHuntingRewards.upgrade1.effect)
  } else {
    damage2 = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade2.active && f(IUniversalIn.energyUpgrades.upgrade2.effect) != "NaN") {
    var damage3 = f(IUniversalIn.energyUpgrades.upgrade2.effect)
  } else {
    damage3 = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade4.active && f(IUniversalIn.energyUpgrades.upgrade4.effect) != "NaN") {
    var damage4 = f(IUniversalIn.energyUpgrades.upgrade4.effect)
  } else {
    damage4 = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade5.active && f(IUniversalIn.energyUpgrades.upgrade5.effect) != "NaN") {
    var damage5 = f(IUniversalIn.energyUpgrades.upgrade5.effect)
  } else {
    damage5 = f(1)
  }

  if (IUniversal.attributes.attributeBonus5.active && f(IUniversalIn.attributes.attributeBonus5.effect) != "NaN") {
    var damage6 = f(IUniversalIn.attributes.attributeBonus5.effect)
  } else {
    damage6 = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade21.active && f(IUniversalIn.energyUpgrades.upgrade21.effect) != "NaN") {
    var damage7 = f(IUniversalIn.energyUpgrades.upgrade21.effect)
  } else {
    damage7 = f(1)
  }

  if (IUniversal.fireTree.node25.active && f(IUniversalIn.fireTree.node25.effect) != "NaN") {
    var damage8 = f(IUniversalIn.fireTree.node25.effect)
  } else {
    damage8 = f(1)
  }

  IFight.youStats.damage = (f(damage1).mul(f(damage2)).mul(f(damage3)).mul(f(damage4).mul(f(damage6)).mul(f(damage7)).mul(f(damage8)))).pow(f(damage5))

  if (type == "universalChallengerChallenge2") {
    if (damage1 != null) {
      IFight.youStats.damage = f(damage1)
    } else {
      IFight.youStats.damage = f(0)
    }
  }

  if (f(IFight.youStats.damage).lt(f(0))) {
    IFight.youStats.damage = f(0)
  }

  //Life

  var life1 = ITraining.base.base2.tot


  if (IFight.normalHuntingRewards.upgrade4.active && type != "universalChallengerChallenge1") {
    var life2 = f(IFight.youStats.damage).mul(f(IFightIn.normalHuntingRewards.upgrade4.effect))
  } else {
    life2 = f(0)
  }

  if (IFight.normalHuntingRewards.upgrade2.active && type != "universalChallengerChallenge1") {
    var life4 = f(IFightIn.normalHuntingRewards.upgrade2.effect)
  } else {
    life4 = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade9.active) {
    var life5 = f(IUniversalIn.energyUpgrades.upgrade9.effect)
  } else {
    life5 = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade9.active) {
    var life6 = f(IUniversalIn.energyUpgrades.upgrade10.effect)
  } else {
    life6 = f(1)
  }

  if (IUniversal.attributes.attributeBonus6.active) {
    var life7 = f(IUniversalIn.attributes.attributeBonus6.effect)
  } else {
    life7 = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade21.active) {
    var life8 = f(IUniversalIn.energyUpgrades.upgrade21.effect)
  } else {
    life8 = f(1)
  }

  if (IUniversal.fireTree.node26.active && f(IUniversalIn.fireTree.node26.effect) != "NaN") {
    var life9 = f(IUniversalIn.fireTree.node26.effect)
  } else {
    life9 = f(1)
  }

  IFight.youStats.life = (f(life1)).mul(f(life4)).mul(f(life5).mul(f(life7)).mul(f(life8)).mul(f(life9))).pow(f(life6)).add(f(life2))
  if (type == "universalChallengerChallenge2") {
    IFight.youStats.life = f(life1)
  }

  if (f(IFight.youStats.life).lt(f(0))) {
    IFight.youStats.life = f(0)
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

  if (f(IGameData.power).lt(f(0))) {
    IGameData.power = f(0)
  }

  //Essence

  if (IFight.normalHunting.hunt1.active) {
    var essence1 = f(IFightIn.normalHunting.hunt1.effect);
  } else {
    essence1 = (f(0))
  }

  if (IFight.normalHunting.hunt2.active) {
    var essence2 = f(IFightIn.normalHunting.hunt2.effect);
  } else {
    essence2 = (f(0))
  }

  if (IFight.normalHunting.hunt3.active) {
    var essence3 = f(IFightIn.normalHunting.hunt3.effect);
  } else {
    essence3 = (f(0))
  }

  if (IFight.normalHunting.hunt4.active) {
    var essence4 = f(IFightIn.normalHunting.hunt4.effect);
  } else {
    essence4 = (f(0))
  }

  if (IFight.normalHunting.hunt5.active) {
    var essence5 = f(IFightIn.normalHunting.hunt5.effect);
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
    var essenceB = f(IFightIn.normalHuntingRewards.upgrade3.effect)
  } else {
    essenceB = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade11.active) {
    var essence6 = f(IUniversalIn.energyUpgrades.upgrade11.effect);
  } else {
    essence6 = (f(1))
  }

  if (IUniversal.energyUpgrades.upgrade12.active) {
    var essence7 = f(IUniversalIn.energyUpgrades.upgrade12.effect);
  } else {
    essence7 = (f(1))
  }

  if (IUniversal.attributes.attributeBonus2.active) {
    var essence8 = f(IUniversalIn.attributes.attributeBonus2.effect)
  } else {
    var essence8 = f(1)
  }

  IGameData.essenceProd = (essence1.add(essence2).add(essence3).add(essence4).add(essence5)).mul(f(IGameData.tickSpeed)).mul(f(essenceA)).mul(f(essenceB)).mul(f(essence6)).mul(f(essence7)).mul(f(essence8))
  IGameData.essence = f(IGameData.essence).add(IGameData.essenceProd)

  if (f(IGameData.essence).lt(f(0))) {
    IGameData.essence = f(0)
  }

  //Universal Shards
  var universalShards1 = f(IUniversalChallengerIn.universalChallengerRewards.reward1.effect)

  if (IUniversal.attributes.attributeBonus1.active) {
    var universalShards3 = f(IUniversalIn.attributes.attributeBonus1.effect)
  } else {
    var universalShards3 = f(1)
  }
  IUniversalChallenger.universalShardsProd = f(universalShards1).mul(f(IGameData.tickSpeed)).mul(universalShards3)

  IUniversalChallenger.universalShardsProdBase = f(universalShards1).mul(f(IGameData.tickSpeed))


  IUniversalChallenger.universalShards = f(IUniversalChallenger.universalShards).add(IUniversalChallenger.universalShardsProd)

  if (f(IUniversalChallenger.universalShards).lt(f(0))) {
    IUniversalChallenger.universalShards = f(0)
  }
  //Universal Nodes
  if (f(IUniversalChallenger.universalChallengerChallengesRewards.c1.level).gte(f(1))) {
    var universalNodes1 = f(IUniversalChallengerIn.universalChallengerChallengesRewards.c1.effect)
  } else {
    var universalNodes1 = f(0)
  }

  if (IUniversal.energyUpgrades.upgrade22.active) {
    var universalNodes2 = f(IUniversalIn.energyUpgrades.upgrade22.effect)
  } else {
    universalNodes2 = f(1)
  }

  if (IUniversal.fireTree.node61.active) {
    var universalNodes3 = f(IUniversalIn.fireTree.node61.effect)
  } else {
    universalNodes3 = f(1)
  }

  IUniversalChallenger.universalNodesProd = f(universalNodes1).mul(f(universalNodes2)).mul(f(universalNodes3)).mul(f(IGameData.tickSpeed))
  IUniversalChallenger.universalNodesProdBase = f(universalNodes1).mul(f(IGameData.tickSpeed))


  IUniversalChallenger.universalNodes = f(IUniversalChallenger.universalNodes).add(IUniversalChallenger.universalNodesProd)

  if (f(IUniversalChallenger.universalNodes).lt(f(0))) {
    IUniversalChallenger.universalNodes = f(0)
  }

  //Universal Cores
  if (f(IUniversalChallenger.universalChallengerChallengesRewards.c2.level).gte(f(1))) {
    var universalCores1 = f(IUniversalChallengerIn.universalChallengerChallengesRewards.c2.effect)
  } else {
    var universalCores1 = f(0)
  }

  if (IUniversal.attributes.lifeSteal.active) {
    var universalCores2 = f(0)
  } else {
    var universalCores2 = f(1)
  }

  if (IUniversal.energyUpgrades.upgrade22.active) {
    var universalCores3 = f(IUniversalIn.energyUpgrades.upgrade22.effect)
  } else {
    universalCores3 = f(1)
  }

  if (IUniversal.fireTree.node62.active) {
    var universalCores4 = f(IUniversalIn.fireTree.node62.effect)
  } else {
    universalCores4 = f(1)
  }

  IUniversalChallenger.universalCoresProd = f(universalCores1).mul(f(universalCores3)).mul(f(universalCores4)).mul(f(IGameData.tickSpeed))

  IUniversalChallenger.universalCoresProdBase = f(universalCores1).mul(f(IGameData.tickSpeed))

  var transit = f(IUniversalChallenger.universalCoresProd).mul(f(universalCores2))

  IUniversalChallenger.universalCores = f(IUniversalChallenger.universalCores).add(transit)


  if (f(IUniversalChallenger.universalCores).lt(f(0))) {
    IUniversalChallenger.universalCores = f(0)
  }
  //FIRE TREE

  //fire
  var fire1 = f(IUniversalIn.fireTree.node1.effect)
  var fire2 = f(IUniversalIn.fireTree.node2.effect2)
  var fire3 = f(IUniversalIn.fireTree.node3.effect2)
  var fire4 = f(IUniversalIn.fireTree.node4.effect2)
  var fire5 = f(IUniversalIn.fireTree.node12.effect)
  var fire6 = f(IUniversalIn.fireTree.node39.effect2)
  var fire7 = f(IUniversalIn.fireTree.node55.effect)


  IUniversal.fireProdBase = f(fire1).mul(f(fire2)).mul(f(fire3)).mul(f(fire4)).mul(f(fire5)).mul(f(fire6)).mul(f(fire7))
  IUniversal.fireProd = f(IUniversal.fireProdBase).mul(f(IGameData.tickSpeed))

  if (!f(IUniversal.fire).lt(f(0))) {
    IUniversal.fire = f(IUniversal.fire).add(f(IUniversal.fireProd))
  } else {
    IUniversal.fire = f(0)
  }

  //wood
  var wood1 = f(IUniversalIn.fireTree.node2.effect)
  var wood2 = f(IUniversalIn.fireTree.node5.effect)

  IUniversal.woodProdBase = f(wood1).mul(f(wood2))
  IUniversal.woodProd = f(IUniversal.woodProdBase).mul(f(IGameData.tickSpeed))

  if (!f(IUniversal.wood).lt(f(0))) {
    IUniversal.wood = f(IUniversal.wood).add(f(IUniversal.woodProd))
  } else {
    IUniversal.wood = f(0)
  }


  //coal
  var coal1 = f(IUniversalIn.fireTree.node3.effect)
  var coal2 = f(IUniversalIn.fireTree.node6.effect)
  var coal3 = f(IUniversalIn.fireTree.node23.effect)

  IUniversal.coalProdBase = f(coal1).mul(f(coal2)).mul(f(coal3))
  IUniversal.coalProd = f(IUniversal.coalProdBase).mul(f(IGameData.tickSpeed))

  if (!f(IUniversal.coal).lt(f(0))) {
    IUniversal.coal = f(IUniversal.coal).add(f(IUniversal.coalProd))
  } else {
    IUniversal.coal = f(0)
  }

  //magma
  var magma1 = f(IUniversalIn.fireTree.node4.effect)
  var magma2 = f(IUniversalIn.fireTree.node7.effect)
  var magma3 = f(IUniversalIn.fireTree.node24.effect)


  IUniversal.magmaProdBase = f(magma1).mul(f(magma2)).mul(f(magma3))
  IUniversal.magmaProd = f(IUniversal.magmaProdBase).mul(f(IGameData.tickSpeed))

  if (!f(IUniversal.magma).lt(f(0))) {
    IUniversal.magma = f(IUniversal.magma).add(f(IUniversal.magmaProd))
  } else {
    IUniversal.magma = f(0)
  }

  //light
  var light1 = f(IUniversalIn.fireTree.node39.effect)

  IUniversal.lightProdBase = f(light1)
  IUniversal.lightProd = f(IUniversal.lightProdBase).mul(f(IGameData.tickSpeed))

  if (!f(IUniversal.light).lt(f(0))) {
    IUniversal.light = f(IUniversal.light).add(f(IUniversal.lightProd))
  } else {
    IUniversal.light = f(0)
  }

  //heat

  if (f(IUniversal.heatCurrentTimer).gte(f(IUniversal.heatTimer))) {
    IUniversal.heat = f(IUniversal.heat).dividedBy(f(IUniversalIn.fireTree.node27.effect2))
    IUniversal.heatCurrentTimer = f(0)
    IUniversal.heatActiveTimer = false;
  }

  var heat1 = f(IUniversalIn.fireTree.node30.effect).mul(f(1).dividedBy(f(IUniversal.fireTree.node30.timer)))

  IUniversal.heatProd = f(heat1).mul(f(IGameData.baseTickSpeed))
  IUniversal.heat = f(IUniversal.heat)

  if (f(IUniversal.heat).lte(f(0.25))) {
    IUniversal.heat = f(0)
  }

  //fire Shards

  var fireShard1 = f(IUniversalIn.fireTree.node29.effect)
  var fireShard2 = f(IUniversalIn.fireTree.node40.effect)

  if (IUniversal.fireTree.node34.activeTimer && IUniversal.fireTree.node43.active) {
    var fireShard3 = f(IUniversalIn.fireTree.node43.effect)
  } else {
    fireShard3 = f(1)
  }

  var fireShard4 = f(IUniversalIn.fireTree.node56.effect)

  IUniversal.fireShardsProd = f(fireShard1).mul(f(fireShard2)).mul(f(fireShard3)).mul(f(fireShard4)).mul(f(IGameData.tickSpeed))
  IUniversal.fireShards = f(IUniversal.fireShards).add(f(IUniversal.fireShardsProd))

  if (f(IUniversal.fireShards).lt(f(0))) {
    IUniversal.fireShards = f(0)
  }

  //rotations

  var rotation1 = f(IUniversalIn.fireTree.node54.effect)

  if (type == "off") {
    IUniversal.rotationProd = (f(rotation1).mul(f(IGameData.tickSpeed))).dividedBy(f(IUniversal.fireTree.node50.timer))
  } else {
    IUniversal.rotationProd = f(0)
  }

  IUniversal.rotation = f(IUniversal.rotation).add(f(IUniversal.rotationProd))

  if (f(IUniversal.rotation).lt(f(0))) {
    IUniversal.rotation = f(0)
  }

  //fireTimers

  if (!IUniversal.heatActiveTimer && (IUniversal.fireTree.node27.active)) {
    IUniversal.heatCurrentTimer = f(IUniversal.heatCurrentTimer).add(f(1).mul(f(IGameData.baseTickSpeed)))
  } else {
    IUniversal.heatCurrentTimer = f(0)
  }

  if (IUniversal.fireTree.node28.activeTimer) {
    IUniversal.fireTree.node28.currentTimer = f(IUniversal.fireTree.node28.currentTimer).add(f(1).mul(f(IGameData.baseTickSpeed)))
  } else {
    IUniversal.fireTree.node28.currentTimer = f(0)
  }
  if (f(IUniversal.fireTree.node28.currentTimer).gte(f(IUniversal.fireTree.node28.timer))) {
    IUniversal.fireTree.node28.activeTimer = false;
  }

  if ((IUniversal.fireTree.node30.active)) {
    IUniversal.fireTree.node30.currentTimer = f(IUniversal.fireTree.node30.currentTimer).add(f(1).mul(f(IGameData.baseTickSpeed)))
  } else {
    IUniversal.fireTree.node30.currentTimer = f(0)
  }
  if (f(IUniversal.fireTree.node30.currentTimer).gte(f(IUniversal.fireTree.node30.timer))) {
    IUniversal.fireTree.node30.animation = false;

    IUniversal.heat = f(IUniversal.heat).add(f(IUniversalIn.fireTree.node30.effect))
    IUniversal.fireTree.node30.currentTimer = f(0)

    if (new Decimal(Math.random()).lte(f(IUniversalIn.fireTree.node41.effect2)) && IUniversal.fireTree.node41.active) {
      IUniversal.fireTree.node41.trigger = true
    } else {
      IUniversal.fireTree.node41.trigger = false
    }
  }

  if ((IUniversal.fireTree.node50.active)) {
    IUniversal.fireTree.node50.currentTimer = f(IUniversal.fireTree.node50.currentTimer).add(f(1).mul(f(IGameData.baseTickSpeed)))
  } else {
    IUniversal.fireTree.node50.currentTimer = f(0)
  }
  if (f(IUniversal.fireTree.node50.currentTimer).gte(f(IUniversal.fireTree.node50.timer))) {
    IUniversal.fireTree.node50.animation = false;
    IUniversal.fireTree.node50.currentTimer = f(0)

    if (IUniversal.fireTree.node54.active) {
      IUniversal.rotation = f(IUniversal.rotation).add(f(IUniversalIn.fireTree.node54.effect))
    }
  }

  //timer 1
  if ((IUniversal.fireTree.node34.active)) {
    IUniversal.fireTree.node34.currentTimer = f(IUniversal.fireTree.node34.currentTimer).add(f(1).mul(f(IGameData.baseTickSpeed)))
  } else {
    IUniversal.fireTree.node34.currentTimer = f(0)
  }
  if (f(IUniversal.fireTree.node34.currentTimer).gte(f(IUniversal.fireTree.node34.timer))) {
    IUniversal.fireTree.node34.animation = false;
    IUniversal.fireTree.node34.currentTimer = f(0)
    IUniversal.fireTree.node34.activeTimer = true;
  }


  //timer 2
  if (IUniversal.fireTree.node34.activeTimer) {
    IUniversal.fireTree.node34.currentTimer2 = f(IUniversal.fireTree.node34.currentTimer2).add(f(1).mul(f(IGameData.baseTickSpeed)))
  } else {
    IUniversal.fireTree.node34.currentTimer2 = f(0)
  }
  if (f(IUniversal.fireTree.node34.currentTimer2).gte(f(IUniversal.fireTree.node34.timer2))) {
    IUniversal.fireTree.node34.currentTimer2 = f(0)
    IUniversal.fireTree.node34.activeTimer = false;
  }

  //Wood Sacrifice
  var sacWood1 = f(IUniversalIn.fireTree.node58.effect)
  IUniversal.fireTree.node5.level = f(IUniversal.fireTree.node5.level).add(f(IUniversal.wood).mul(f(sacWood1)).mul(f(IGameData.tickSpeed)))

  if (f(IUniversal.fireTree.node5.level).lt(f(0))) {
    IUniversal.fireTree.node5.level = f(0)
  }

  //Coal Sacrifice
  var sacCoal1 = f(IUniversalIn.fireTree.node59.effect)
  IUniversal.fireTree.node6.level = f(IUniversal.fireTree.node6.level).add(f(IUniversal.coal).mul(f(sacCoal1)).mul(f(IGameData.tickSpeed)))

  if (f(IUniversal.fireTree.node6.level).lt(f(0))) {
    IUniversal.fireTree.node6.level = f(0)
  }

  //Magma Sacrifice
  var sacMagma1 = f(IUniversalIn.fireTree.node60.effect)
  IUniversal.fireTree.node7.level = f(IUniversal.fireTree.node7.level).add(f(IUniversal.magma).mul(f(sacMagma1)).mul(f(IGameData.tickSpeed)))

  if (f(IUniversal.fireTree.node7.level).lt(f(0))) {
    IUniversal.fireTree.node7.level = f(0)
  }

  //WATER

  IUniversal.waterTreeSize = f(IUniversal.waterTreeSize)

  //water Max

  var waterMax1 = f(IUniversalIn.waterTree.node3.effect)
  var waterMax2 = f(IUniversalIn.waterTree.node4.effect)
  var waterMax4 = f(IUniversalIn.waterTree.node30.effect)
  var waterMax5 = f(IUniversalIn.waterTree.node31.effect)
  var waterMax6 = f(IUniversalIn.waterTree.node32.effect)
  var waterMax7 = f(IUniversalIn.waterTree.node33.effect)
  var waterMax8 = f(IUniversalIn.potionSource.item2.value2)

  IUniversal.waterMax = (f(10).add(f(waterMax1))).mul(f(waterMax2)).mul(f(waterMax4)).mul(f(waterMax5)).mul(f(waterMax6)).mul(f(waterMax7)).mul(f(waterMax8))

  //water Prod

  var water2 = f(IUniversalIn.waterTree.node2.effect)
  var water3 = f(IUniversalIn.waterTree.node5.effect)
  var water4 = f(IUniversalIn.waterTree.node22.effect)
  var water5 = f(IUniversalIn.waterTree.node1.effect)
  var water6 = f(IUniversalIn.potionSource.item1.value2)

  IUniversal.waterProdBase = ((f(water2))).mul(f(water3)).mul(f(water4)).mul(f(water6)).mul(f(water5)).mul(f(IGameData.baseTickSpeed))
  IUniversal.waterProd = ((f(water2))).mul(f(water3)).mul(f(water4)).mul(f(water6)).mul(f(water5)).mul(f(IGameData.tickSpeed))

  //water

  if (f(IUniversal.water).lt(f(IUniversal.waterMax))) {
    IUniversal.water = f(IUniversal.water).add(f(IUniversal.waterProd))
  } else {

    if (IUniversal.waterTree.node22.active) {
      if (type == "off") {
        var tempWater = f(IUniversal.water).add(f(IUniversal.waterProd))
        var fractionWater = f(tempWater).dividedBy(f(IUniversal.waterMax))
        var tempWaterProd = f(IUniversal.waterProdBase).dividedBy(f(fractionWater))
        var tempWaterProdWithTime = f(tempWaterProd).mul(f(IGameData.tickSpeed))
        IUniversal.water = f(IUniversal.water).add(f(tempWaterProdWithTime))
      } else {
        IUniversal.waterProd = ((f(water2))).mul(f(water3)).mul(f(water4)).mul(f(water6)).mul(f(water5)).mul(f(IGameData.tickSpeed))
        IUniversal.water = f(IUniversal.water).add(f(IUniversal.waterProd))
      }
    } else {
      IUniversal.water = f(IUniversal.waterMax)
    }
  }

  if (f(IUniversal.water).lt(f(0))) {
    IUniversal.water = f(0)
  }

  //ELISIR

  //elisir Max

  var elisirMax1 = f(IUniversalIn.waterTree.node23.effect)
  var elisirMax2 = f(IUniversalIn.waterTree.node24.effect)
  var elisirMax3 = f(IUniversalIn.potionSource.item4.value2)

  IUniversal.elisirMax = (f(10).add(f(elisirMax1))).mul(f(elisirMax2)).mul(f(elisirMax3))

  //elisir Prod

  var elisir1 = f(IUniversalIn.waterTree.node25.effect)
  var elisir2 = f(IUniversalIn.potionSource.item3.value2)
  var elisir3 = f(IUniversalIn.waterTree.node26.effect)



  IUniversal.elisirProdBase = (f(elisir1).mul(f(elisir2)).mul(f(elisir3))).mul(f(IGameData.baseTickSpeed))
  IUniversal.elisirProd = (f(elisir1).mul(f(elisir2)).mul(f(elisir3))).mul(f(IGameData.tickSpeed))
  //elisir

  if (f(IUniversal.elisir).lt(f(IUniversal.elisirMax))) {
    IUniversal.elisir = f(IUniversal.elisir).add(f(IUniversal.elisirProd))
  } else {

    if (IUniversal.waterTree.node26.active) {
      if (type == "off") {
        var tempElisir = f(IUniversal.elisir).add(f(IUniversal.elisirProd))
        var fractionElisir = f(tempElisir).dividedBy(f(IUniversal.elisirMax))
        var tempElisirProd = f(IUniversal.elisirProdBase).dividedBy(f(fractionElisir))
        var tempElisirProdWithTime = f(tempElisirProd).mul(f(IGameData.tickSpeed))
        IUniversal.elisir = f(IUniversal.elisir).add(f(tempElisirProdWithTime))
      } else {
        IUniversal.elisirProd = (f(elisir1).mul(f(elisir2)).mul(f(elisir3))).mul(f(IGameData.tickSpeed))
        IUniversal.elisir = f(IUniversal.elisir).add(f(IUniversal.elisirProd))
      }
    } else {
      IUniversal.elisir = f(IUniversal.elisirMax)
    }
  }

  if (f(IUniversal.elisir).lt(f(0))) {
    IUniversal.elisir = f(0)
  }

  //AMBROSIA

  //ambrosia Max

  var ambrosiaMax1 = f(IUniversalIn.waterTree.node27.effect)
  var ambrosiaMax2 = f(IUniversalIn.waterTree.node28.effect)
  var ambrosiaMax3 = f(IUniversalIn.potionSource.item6.value2)


  IUniversal.ambrosiaMax = (f(10).add(f(ambrosiaMax1))).mul(f(ambrosiaMax2)).mul(f(ambrosiaMax3))

  //ambrosia Prod

  var ambrosia1 = f(IUniversalIn.waterTree.node29.effect)
  var ambrosia2 = f(IUniversalIn.potionSource.item5.value2)
  var ambrosia3 = f(IUniversalIn.waterTree.node38.effect)


  IUniversal.ambrosiaProdBase = (f(ambrosia1).mul(f(ambrosia2)).mul(f(ambrosia3))).mul(f(IGameData.baseTickSpeed))
  IUniversal.ambrosiaProd = (f(ambrosia1).mul(f(ambrosia2)).mul(f(ambrosia3))).mul(f(IGameData.tickSpeed))

  //ambrosia


  if (f(IUniversal.ambrosia).lt(f(IUniversal.ambrosiaMax))) {
    IUniversal.ambrosia = f(IUniversal.ambrosia).add(f(IUniversal.ambrosiaProd))
  } else {

    if (IUniversal.waterTree.node38.active) {
      if (type == "off") {
        var tempAmbrosia = f(IUniversal.ambrosia).add(f(IUniversal.ambrosiaProd))
        var fractionAmbrosia = f(tempAmbrosia).dividedBy(f(IUniversal.ambrosiaMax))
        var tempAmbrosiaProd = f(IUniversal.ambrosiaProdBase).dividedBy(f(fractionAmbrosia))
        var tempAmbrosiaProdWithTime = f(tempAmbrosiaProd).mul(f(IGameData.tickSpeed))
        IUniversal.ambrosia = f(IUniversal.ambrosia).add(f(tempAmbrosiaProdWithTime))
      } else {
        IUniversal.ambrosiaProd = (f(ambrosia1).mul(f(ambrosia2)).mul(f(ambrosia3))).mul(f(IGameData.tickSpeed))
        IUniversal.ambrosia = f(IUniversal.ambrosia).add(f(IUniversal.ambrosiaProd))
      }
    } else {
      IUniversal.ambrosia = f(IUniversal.ambrosiaMax)
    }
  }

  if (f(IUniversal.ambrosia).lt(f(0))) {
    IUniversal.ambrosia = f(0)
  }



  //ERBS

  //erbsMax

  var erbsMax1 = IUniversalIn.waterTree.node8.effect
  var erbsMax2 = IUniversalIn.waterTree.node9.effect


  IUniversal.erbsMax = (f(10).add(f(erbsMax1))).mul(f(erbsMax2))

  //erbsProd

  var erbs1 = IUniversalIn.waterTree.node6.effect
  var erbs2 = IUniversalIn.waterTree.node7.effect

  IUniversal.erbsProd = (f(erbs1).mul(f(erbs2))).mul(f(IGameData.tickSpeed))

  //erbs

  if (f(IUniversal.erbs).lt(f(IUniversal.erbsMax))) {
    IUniversal.erbs = f(IUniversal.erbs).add(f(IUniversal.erbsProd))
  } else {
    IUniversal.erbs = f(IUniversal.erbsMax)
  }

  if (f(IUniversal.erbs).lt(f(0))) {
    IUniversal.erbs = f(0)
  }

  //LIQUID FIRE

  //fluidFireMax
  var fluidFireMax1 = IUniversalIn.waterTree.node12.effect
  var fluidFireMax2 = IUniversalIn.waterTree.node13.effect


  IUniversal.fluidFireMax = (f(10).add(f(fluidFireMax1))).mul(f(fluidFireMax2))

  //fluidFireProd

  var fluidFire1 = IUniversalIn.waterTree.node10.effect
  var fluidFire2 = IUniversalIn.waterTree.node11.effect

  IUniversal.fluidFireProd = (f(fluidFire1).mul(f(fluidFire2))).mul(f(IGameData.tickSpeed))

  //FluidFire

  if (f(IUniversal.fluidFire).lt(f(IUniversal.fluidFireMax))) {
    IUniversal.fluidFire = f(IUniversal.fluidFire).add(f(IUniversal.fluidFireProd))
  } else {
    IUniversal.fluidFire = f(IUniversal.fluidFireMax)
  }

  if (f(IUniversal.fluidFire).lt(f(0))) {
    IUniversal.fluidFire = f(0)
  }

  //WATER GEM

  //water gem max
  var waterGemMax1 = IUniversalIn.waterTree.node16.effect
  var waterGemMax2 = IUniversalIn.waterTree.node17.effect


  IUniversal.waterGemMax = (f(10).add(f(waterGemMax1))).mul(f(waterGemMax2))

  //water gem prod

  var waterGem1 = IUniversalIn.waterTree.node14.effect
  var waterGem2 = IUniversalIn.waterTree.node15.effect

  IUniversal.waterGemProd = (f(waterGem1).mul(f(waterGem2))).mul(f(IGameData.tickSpeed))

  //water gem

  if (f(IUniversal.waterGem).lt(f(IUniversal.waterGemMax))) {
    IUniversal.waterGem = f(IUniversal.waterGem).add(f(IUniversal.waterGemProd))
  } else {
    IUniversal.waterGem = f(IUniversal.waterGemMax)
  }

  if (f(IUniversal.waterGem).lt(f(0))) {
    IUniversal.waterGem = f(0)
  }

  //PYROFROST

  //pyroFrost max
  var pyroFrostMax1 = IUniversalIn.waterTree.node20.effect
  var pyroFrostMax2 = IUniversalIn.waterTree.node21.effect


  IUniversal.pyroFrostMax = (f(10).add(f(pyroFrostMax1))).mul(f(pyroFrostMax2))

  //pyroFrost prod

  var pyroFrost1 = IUniversalIn.waterTree.node18.effect
  var pyroFrost2 = IUniversalIn.waterTree.node19.effect

  IUniversal.pyroFrostProd = (f(pyroFrost1).mul(f(pyroFrost2))).mul(f(IGameData.tickSpeed))

  //pyroFrost

  if (f(IUniversal.pyroFrost).lt(f(IUniversal.pyroFrostMax))) {
    IUniversal.pyroFrost = f(IUniversal.pyroFrost).add(f(IUniversal.pyroFrostProd))
  } else {
    IUniversal.pyroFrost = f(IUniversal.pyroFrostMax)
  }

  if (f(IUniversal.pyroFrost).lt(f(0))) {
    IUniversal.pyroFrost = f(0)
  }

  //POTION SOURCE

  //source1

  var prod = f(IUniversalIn.potionEffects.effect3.activeValue).mul(f(IGameData.tickSpeed))

  IUniversal.potionSource.item1.value1 = f(IUniversal.potionSource.item1.value1).add(prod)

  //source2

  var prod = f(IUniversalIn.potionEffects.effect4.activeValue).mul(f(IGameData.tickSpeed))

  IUniversal.potionSource.item2.value1 = f(IUniversal.potionSource.item2.value1).add(prod)

  //source3

  var prod = f(IUniversalIn.potionEffects.effect5.activeValue).mul(f(IGameData.tickSpeed))

  IUniversal.potionSource.item3.value1 = f(IUniversal.potionSource.item3.value1).add(prod)

  //source4

  var prod = f(IUniversalIn.potionEffects.effect6.activeValue).mul(f(IGameData.tickSpeed))

  IUniversal.potionSource.item4.value1 = f(IUniversal.potionSource.item4.value1).add(prod)

  //source5

  var prod = f(IUniversalIn.potionEffects.effect7.activeValue).mul(f(IGameData.tickSpeed))

  IUniversal.potionSource.item5.value1 = f(IUniversal.potionSource.item5.value1).add(prod)

  //source6

  var prod = f(IUniversalIn.potionEffects.effect8.activeValue).mul(f(IGameData.tickSpeed))

  IUniversal.potionSource.item6.value1 = f(IUniversal.potionSource.item6.value1).add(prod)

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

//note 6
document.getElementById("fp2_content2_18").onclick = function () {
  changePage("mainMenu", "content2_18")
}

//note 7
document.getElementById("fp2_content2_20").onclick = function () {
  changePage("mainMenu", "content2_20")
}

//Fire
document.getElementById("fp2_content2_17").onclick = function () {
  changePage("mainMenu", "content2_17")

  var element = document.getElementById("content2_17_scroll")

  element.scrollTop = element.scrollHeight / 5
  element.scrollLeft = element.scrollWidth / 11
}

//Water
document.getElementById("fp2_content2_19").onclick = function () {
  changePage("mainMenu", "content2_19")

  var element = document.getElementById("content2_19_scroll")

  element.scrollTop = element.scrollHeight / 20
  element.scrollLeft = element.scrollWidth / 3.2
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

document.getElementById("fp2_content2_pageSel").onclick = function () {
  changePage("page", "fp2_content2")
}

document.getElementById("fp2_content3_pageSel").onclick = function () {
  changePage("page", "fp2_content3")
}

//Bases

document.getElementById("base1Button").onclick = function () {
  assignGroup(ITrainingIn.base, ITraining.base, "base1")
}

document.getElementById("base2Button").onclick = function () {
  assignGroup(ITrainingIn.base, ITraining.base, "base2")
}

document.getElementById("base3Button").onclick = function () {
  assignGroup(ITrainingIn.base, ITraining.base, "base3")
}

document.getElementById("base4Button").onclick = function () {
  assignGroup(ITrainingIn.base, ITraining.base, "base4")
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
      buyMultiple(IUniversalIn.energyUpgrades.upgrade1, IUniversalIn.energyUpgrades.upgrade1, IUniversal.energyUpgrades.upgrade1, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade1, IUniversalIn.energyUpgrades.upgrade1)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade1, IUniversalIn.energyUpgrades.upgrade1, IUniversal.energyUpgrades.upgrade1, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade1, IUniversalIn.energyUpgrades.upgrade1)
    }
  }
}

document.getElementById("content2_7_upgrade2_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade2.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade2, IUniversalIn.energyUpgrades.upgrade2, IUniversal.energyUpgrades.upgrade2, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade2, IUniversalIn.energyUpgrades.upgrade2)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade2, IUniversalIn.energyUpgrades.upgrade2, IUniversal.energyUpgrades.upgrade2, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade2, IUniversalIn.energyUpgrades.upgrade2)
    }
  }
}

document.getElementById("content2_7_upgrade3_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade3.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade3, IUniversalIn.energyUpgrades.upgrade3, IUniversal.energyUpgrades.upgrade3, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade3, IUniversalIn.energyUpgrades.upgrade3)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade3, IUniversalIn.energyUpgrades.upgrade3, IUniversal.energyUpgrades.upgrade3, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade3, IUniversalIn.energyUpgrades.upgrade3)
    }
  }
}

document.getElementById("content2_7_upgrade4_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade4.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade4, IUniversalIn.energyUpgrades.upgrade4, IUniversal.energyUpgrades.upgrade4, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade4, IUniversalIn.energyUpgrades.upgrade4)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade4, IUniversalIn.energyUpgrades.upgrade4, IUniversal.energyUpgrades.upgrade4, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade4, IUniversalIn.energyUpgrades.upgrade4)
    }
  }
}

document.getElementById("content2_7_upgrade5_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade5.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade5, IUniversalIn.energyUpgrades.upgrade5, IUniversal.energyUpgrades.upgrade5, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade5, IUniversalIn.energyUpgrades.upgrade5)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade5, IUniversalIn.energyUpgrades.upgrade5, IUniversal.energyUpgrades.upgrade5, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade5, IUniversalIn.energyUpgrades.upgrade5)
    }
  }
}

document.getElementById("content2_7_upgrade6_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade6.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade6, IUniversalIn.energyUpgrades.upgrade6, IUniversal.energyUpgrades.upgrade6, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade6, IUniversalIn.energyUpgrades.upgrade6)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade6, IUniversalIn.energyUpgrades.upgrade6, IUniversal.energyUpgrades.upgrade6, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade6, IUniversalIn.energyUpgrades.upgrade6)
    }
  }
}

document.getElementById("content2_7_upgrade7_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade7.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade7, IUniversalIn.energyUpgrades.upgrade7, IUniversal.energyUpgrades.upgrade7, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade7, IUniversalIn.energyUpgrades.upgrade7)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade7, IUniversalIn.energyUpgrades.upgrade7, IUniversal.energyUpgrades.upgrade7, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade7, IUniversalIn.energyUpgrades.upgrade7)
    }
  }
}

document.getElementById("content2_7_upgrade8_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade8.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade8, IUniversalIn.energyUpgrades.upgrade8, IUniversal.energyUpgrades.upgrade8, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade8, IUniversalIn.energyUpgrades.upgrade8)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade8, IUniversalIn.energyUpgrades.upgrade8, IUniversal.energyUpgrades.upgrade8, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade8, IUniversalIn.energyUpgrades.upgrade8)
    }
  }
}

document.getElementById("content2_7_upgrade9_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade9.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade9, IUniversalIn.energyUpgrades.upgrade9, IUniversal.energyUpgrades.upgrade9, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade9, IUniversalIn.energyUpgrades.upgrade9)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade9, IUniversalIn.energyUpgrades.upgrade9, IUniversal.energyUpgrades.upgrade9, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade9, IUniversalIn.energyUpgrades.upgrade9)
    }
  }
}

document.getElementById("content2_7_upgrade10_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade10.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade10, IUniversalIn.energyUpgrades.upgrade10, IUniversal.energyUpgrades.upgrade10, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade10, IUniversalIn.energyUpgrades.upgrade10)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade10, IUniversalIn.energyUpgrades.upgrade10, IUniversal.energyUpgrades.upgrade10, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade10, IUniversalIn.energyUpgrades.upgrade10)
    }
  }
}

document.getElementById("content2_7_upgrade11_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade11.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade11, IUniversalIn.energyUpgrades.upgrade11, IUniversal.energyUpgrades.upgrade11, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade11, IUniversalIn.energyUpgrades.upgrade11)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade11, IUniversalIn.energyUpgrades.upgrade11, IUniversal.energyUpgrades.upgrade11, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade11, IUniversalIn.energyUpgrades.upgrade11)
    }
  }
}

document.getElementById("content2_7_upgrade12_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade12.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade12, IUniversalIn.energyUpgrades.upgrade12, IUniversal.energyUpgrades.upgrade12, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade12, IUniversalIn.energyUpgrades.upgrade12)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade12, IUniversalIn.energyUpgrades.upgrade12, IUniversal.energyUpgrades.upgrade12, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade12, IUniversalIn.energyUpgrades.upgrade12)
    }
  }
}

document.getElementById("content2_7_upgrade13_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade13.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade13, IUniversalIn.energyUpgrades.upgrade13, IUniversal.energyUpgrades.upgrade13, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade13, IUniversalIn.energyUpgrades.upgrade13)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade13, IUniversalIn.energyUpgrades.upgrade13, IUniversal.energyUpgrades.upgrade13, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade13, IUniversalIn.energyUpgrades.upgrade13)
    }
  }
}

document.getElementById("content2_7_upgrade14_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade14.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade14, IUniversalIn.energyUpgrades.upgrade14, IUniversal.energyUpgrades.upgrade14, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade14, IUniversalIn.energyUpgrades.upgrade14)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade14, IUniversalIn.energyUpgrades.upgrade14, IUniversal.energyUpgrades.upgrade14, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade14, IUniversalIn.energyUpgrades.upgrade14)
    }
  }
}

document.getElementById("content2_7_upgrade15_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade15.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade15, IUniversalIn.energyUpgrades.upgrade15, IUniversal.energyUpgrades.upgrade15, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade15, IUniversalIn.energyUpgrades.upgrade15)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade15, IUniversalIn.energyUpgrades.upgrade15, IUniversal.energyUpgrades.upgrade15, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade15, IUniversalIn.energyUpgrades.upgrade15)
    }
  }
}

document.getElementById("content2_7_upgrade16_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade16.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade16, IUniversalIn.energyUpgrades.upgrade16, IUniversal.energyUpgrades.upgrade16, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade16, IUniversalIn.energyUpgrades.upgrade16)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade16, IUniversalIn.energyUpgrades.upgrade16, IUniversal.energyUpgrades.upgrade16, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade16, IUniversalIn.energyUpgrades.upgrade16)
    }
  }
}

document.getElementById("content2_7_upgrade17_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade17.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade17, IUniversalIn.energyUpgrades.upgrade17, IUniversal.energyUpgrades.upgrade17, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade17, IUniversalIn.energyUpgrades.upgrade17)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade17, IUniversalIn.energyUpgrades.upgrade17, IUniversal.energyUpgrades.upgrade17, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade17, IUniversalIn.energyUpgrades.upgrade17)
    }
  }
}

document.getElementById("content2_7_upgrade18_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade18.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade18, IUniversalIn.energyUpgrades.upgrade18, IUniversal.energyUpgrades.upgrade18, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade18, IUniversalIn.energyUpgrades.upgrade18)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade18, IUniversalIn.energyUpgrades.upgrade18, IUniversal.energyUpgrades.upgrade18, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade18, IUniversalIn.energyUpgrades.upgrade18)
    }
  }
}

document.getElementById("content2_7_upgrade19_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade19.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade19, IUniversalIn.energyUpgrades.upgrade19, IUniversal.energyUpgrades.upgrade19, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade19, IUniversalIn.energyUpgrades.upgrade19)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade19, IUniversalIn.energyUpgrades.upgrade19, IUniversal.energyUpgrades.upgrade19, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade19, IUniversalIn.energyUpgrades.upgrade19)
    }
  }
}

document.getElementById("content2_7_upgrade20_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade20.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade20, IUniversalIn.energyUpgrades.upgrade20, IUniversal.energyUpgrades.upgrade20, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade20, IUniversalIn.energyUpgrades.upgrade20)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade20, IUniversalIn.energyUpgrades.upgrade20, IUniversal.energyUpgrades.upgrade20, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade20, IUniversalIn.energyUpgrades.upgrade20)
    }
  }
}

document.getElementById("content2_7_upgrade21_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade21.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade21, IUniversalIn.energyUpgrades.upgrade21, IUniversal.energyUpgrades.upgrade21, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade21, IUniversalIn.energyUpgrades.upgrade21)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade21, IUniversalIn.energyUpgrades.upgrade21, IUniversal.energyUpgrades.upgrade21, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade21, IUniversalIn.energyUpgrades.upgrade21)
    }
  }
}

document.getElementById("content2_7_upgrade22_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade22.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade22, IUniversalIn.energyUpgrades.upgrade22, IUniversal.energyUpgrades.upgrade22, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade22, IUniversalIn.energyUpgrades.upgrade22)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade22, IUniversalIn.energyUpgrades.upgrade22, IUniversal.energyUpgrades.upgrade22, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade22, IUniversalIn.energyUpgrades.upgrade22)
    }
  }
}

document.getElementById("content2_7_upgrade23_b1").onclick = function () {
  if (IUniversal.energyUpgrades.upgrade23.showReq) {
    if (IUniversal.energyMulti) {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade23, IUniversalIn.energyUpgrades.upgrade23, IUniversal.energyUpgrades.upgrade23, "level", 1, "uni", 2, IUniversal.energyUpgrades.upgrade23, IUniversalIn.energyUpgrades.upgrade23)
    } else {
      buyMultiple(IUniversalIn.energyUpgrades.upgrade23, IUniversalIn.energyUpgrades.upgrade23, IUniversal.energyUpgrades.upgrade23, "level", 1, "uni", 0, IUniversal.energyUpgrades.upgrade23, IUniversalIn.energyUpgrades.upgrade23)
    }
  }
}

//energyLoadout
document.getElementById("content2_7_l_loadout1_b1").onclick = function () {
  energyLoadout("load", "loadout1")
}

document.getElementById("content2_7_l_loadout1_b2").onclick = function () {
  energyLoadout("save", "loadout1")
}

document.getElementById("content2_7_l_loadout2_b1").onclick = function () {
  energyLoadout("load", "loadout2")
}

document.getElementById("content2_7_l_loadout2_b2").onclick = function () {
  energyLoadout("save", "loadout2")
}

document.getElementById("content2_7_l_loadout3_b1").onclick = function () {
  energyLoadout("load", "loadout3")
}

document.getElementById("content2_7_l_loadout3_b2").onclick = function () {
  energyLoadout("save", "loadout3")
}


//name loadout

document.getElementById("content2_7_l_loadout1").onmouseenter = function () {
  componentsLoadoutName("content2_7_l_loadout1", true, "loadout1");
}

document.getElementById("content2_7_l_loadout2").onmouseenter = function () {
  componentsLoadoutName("content2_7_l_loadout2", true, "loadout2");
}

document.getElementById("content2_7_l_loadout3").onmouseenter = function () {
  componentsLoadoutName("content2_7_l_loadout3", true, "loadout3");
}



document.getElementById("content2_7_l_loadout1").onmouseleave = function () {
  componentsLoadoutName("content2_7_l_loadout1", false, "loadout1");
}

document.getElementById("content2_7_l_loadout2").onmouseleave = function () {
  componentsLoadoutName("content2_7_l_loadout2", false, "loadout2");
}

document.getElementById("content2_7_l_loadout3").onmouseleave = function () {
  componentsLoadoutName("content2_7_l_loadout3", false, "loadout3");
}

function componentsLoadoutName(id, enter, type) {
  let sel = document.getElementById(id)
  if (enter == true) {
    sel.disabled = false;
    IUniversal.energyLoadout[type].name = sel.value
  }
  if (enter == false) {
    sel.disabled = true;
    IUniversal.energyLoadout[type].name = sel.value
  }
}

//Fight

document.getElementById("c2_4_VS").onclick = async function () {

  if (!(f(IFight.challengers.baseChallenger.level).gt(IFightIn.challengers.baseChallenger.maxLevel))) {
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
  try {
    // Se c'è già un combattimento, fermalo
    if (IFight.youStats.fightController2 && typeof IFight.youStats.fightController2.abort === "function") {
      IFight.youStats.fightController2.abort();
      IFight.youStats.fightController2 = null;
      return; // Esce se il combattimento è stato interrotto
    }

    if (!(IFight.youStats.onFight2)) {
      IUniversalChallenger.universalChallengerChallenges.c1.active = false
    } else {
      IUniversalChallenger.universalChallengerChallenges.c1.active = true
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

  try {
    // Se c'è già un combattimento, fermalo
    if (IFight.youStats.fightController2 && typeof IFight.youStats.fightController2.abort === "function") {
      IFight.youStats.fightController2.abort();
      IFight.youStats.fightController2 = null;
      return; // Esce se il combattimento è stato interrotto
    }

    if (!(IFight.youStats.onFight2)) {
      IUniversalChallenger.universalChallengerChallenges.c2.active = false
    } else {
      IUniversalChallenger.universalChallengerChallenges.c2.active = true
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
  if (IFightIn.normalHunting.hunt1.req()) {
    if (IFight.huntingMulti) {
      buyMultiple(IFightIn.normalHunting.hunt1, IFightIn.normalHunting.hunt1, IFight.normalHunting.hunt1, "level", 1, null, 2, IFight.normalHunting.hunt1, IFightIn.normalHunting.hunt1)
    } else {
      buyMultiple(IFightIn.normalHunting.hunt1, IFightIn.normalHunting.hunt1, IFight.normalHunting.hunt1, "level", 1, null, 0, IFight.normalHunting.hunt1, IFightIn.normalHunting.hunt1)
    }
  }
}

document.getElementById("content2_6_hunt2_button").onclick = function () {
  if (IFightIn.normalHunting.hunt2.req()) {
    if (IFight.huntingMulti) {
      buyMultiple(IFightIn.normalHunting.hunt2, IFightIn.normalHunting.hunt2, IFight.normalHunting.hunt2, "level", 1, null, 2, IFight.normalHunting.hunt2, IFightIn.normalHunting.hunt2)
    } else {
      buyMultiple(IFightIn.normalHunting.hunt2, IFightIn.normalHunting.hunt2, IFight.normalHunting.hunt2, "level", 1, null, 0, IFight.normalHunting.hunt2, IFightIn.normalHunting.hunt2)
    }
  }
}

document.getElementById("content2_6_hunt3_button").onclick = function () {
  if (IFightIn.normalHunting.hunt3.req()) {
    if (IFight.huntingMulti) {
      buyMultiple(IFightIn.normalHunting.hunt3, IFightIn.normalHunting.hunt3, IFight.normalHunting.hunt3, "level", 1, null, 2, IFight.normalHunting.hunt3, IFightIn.normalHunting.hunt3)
    } else {
      buyMultiple(IFightIn.normalHunting.hunt3, IFightIn.normalHunting.hunt3, IFight.normalHunting.hunt3, "level", 1, null, 0, IFight.normalHunting.hunt3, IFightIn.normalHunting.hunt3)
    }
  }
}

document.getElementById("content2_6_hunt4_button").onclick = function () {
  if (IFightIn.normalHunting.hunt4.req()) {
    if (IFight.huntingMulti) {
      buyMultiple(IFightIn.normalHunting.hunt4, IFightIn.normalHunting.hunt4, IFight.normalHunting.hunt4, "level", 1, null, 2, IFight.normalHunting.hunt4, IFightIn.normalHunting.hunt4)
    } else {
      buyMultiple(IFightIn.normalHunting.hunt4, IFightIn.normalHunting.hunt4, IFight.normalHunting.hunt4, "level", 1, null, 0, IFight.normalHunting.hunt4, IFightIn.normalHunting.hunt4)
    }
  }
}

document.getElementById("content2_6_hunt5_button").onclick = function () {
  if (IFightIn.normalHunting.hunt5.req()) {
    if (IFight.huntingMulti) {
      buyMultiple(IFightIn.normalHunting.hunt5, IFightIn.normalHunting.hunt5, IFight.normalHunting.hunt5, "level", 1, null, 2, IFight.normalHunting.hunt5, IFightIn.normalHunting.hunt5)
    } else {
      buyMultiple(IFightIn.normalHunting.hunt5, IFightIn.normalHunting.hunt5, IFight.normalHunting.hunt5, "level", 1, null, 0, IFight.normalHunting.hunt5, IFightIn.normalHunting.hunt5)
    }
  }
}

// HUNT REWARDS
document.getElementById("content2_6_upgrade1_button").onclick = function () {
  if (IFightIn.normalHuntingRewards.upgrade1.req()) {
    if (IFight.huntingMulti) {
      buyMultiple(IFightIn.normalHuntingRewards.upgrade1, IFightIn.normalHuntingRewards.upgrade1, IFight.normalHuntingRewards.upgrade1, "level", 1, null, 2, IFight.normalHuntingRewards.upgrade1, IFightIn.normalHuntingRewards.upgrade1)
    } else {
      buyMultiple(IFightIn.normalHuntingRewards.upgrade1, IFightIn.normalHuntingRewards.upgrade1, IFight.normalHuntingRewards.upgrade1, "level", 1, null, 0, IFight.normalHuntingRewards.upgrade1, IFightIn.normalHuntingRewards.upgrade1)
    }
  }
}

document.getElementById("content2_6_upgrade2_button").onclick = function () {
  if (IFightIn.normalHuntingRewards.upgrade2.req()) {
    if (IFight.huntingMulti) {
      buyMultiple(IFightIn.normalHuntingRewards.upgrade2, IFightIn.normalHuntingRewards.upgrade2, IFight.normalHuntingRewards.upgrade2, "level", 1, null, 2, IFight.normalHuntingRewards.upgrade2, IFightIn.normalHuntingRewards.upgrade2)
    } else {
      buyMultiple(IFightIn.normalHuntingRewards.upgrade2, IFightIn.normalHuntingRewards.upgrade2, IFight.normalHuntingRewards.upgrade2, "level", 1, null, 0, IFight.normalHuntingRewards.upgrade2, IFightIn.normalHuntingRewards.upgrade2)
    }
  }
}

document.getElementById("content2_6_upgrade3_button").onclick = function () {
  if (IFightIn.normalHuntingRewards.upgrade3.req()) {
    if (IFight.huntingMulti) {
      buyMultiple(IFightIn.normalHuntingRewards.upgrade3, IFightIn.normalHuntingRewards.upgrade3, IFight.normalHuntingRewards.upgrade3, "level", 1, null, 2, IFight.normalHuntingRewards.upgrade3, IFightIn.normalHuntingRewards.upgrade3)
    } else {
      buyMultiple(IFightIn.normalHuntingRewards.upgrade3, IFightIn.normalHuntingRewards.upgrade3, IFight.normalHuntingRewards.upgrade3, "level", 1, null, 0, IFight.normalHuntingRewards.upgrade3, IFightIn.normalHuntingRewards.upgrade3)
    }
  }
}

document.getElementById("content2_6_upgrade4_button").onclick = function () {
  if (IFightIn.normalHuntingRewards.upgrade4.req()) {
    if (IFight.huntingMulti) {
      buyMultiple(IFightIn.normalHuntingRewards.upgrade4, IFightIn.normalHuntingRewards.upgrade4, IFight.normalHuntingRewards.upgrade4, "level", 1, null, 2, IFight.normalHuntingRewards.upgrade4, IFightIn.normalHuntingRewards.upgrade4)
    } else {
      buyMultiple(IFightIn.normalHuntingRewards.upgrade4, IFightIn.normalHuntingRewards.upgrade4, IFight.normalHuntingRewards.upgrade4, "level", 1, null, 0, IFight.normalHuntingRewards.upgrade4, IFightIn.normalHuntingRewards.upgrade4)
    }
  }
}

document.getElementById("content2_6_upgrade5_button").onclick = function () {
  if (IFightIn.normalHuntingRewards.upgrade5.req()) {
    if (IFight.huntingMulti) {
      buyMultiple(IFightIn.normalHuntingRewards.upgrade5, IFightIn.normalHuntingRewards.upgrade5, IFight.normalHuntingRewards.upgrade5, "level", 1, null, 2, IFight.normalHuntingRewards.upgrade5, IFightIn.normalHuntingRewards.upgrade5)
    } else {
      buyMultiple(IFightIn.normalHuntingRewards.upgrade5, IFightIn.normalHuntingRewards.upgrade5, IFight.normalHuntingRewards.upgrade5, "level", 1, null, 0, IFight.normalHuntingRewards.upgrade5, IFightIn.normalHuntingRewards.upgrade5)
    }
  }
}

//Ascension
document.getElementById("content1_7_ascension_button").onclick = function () {

  if (!IUniversal.automation.automation5.active) {

    if (f(IFight.challengers.baseChallenger.level)
      .gte(f(IFightIn.challengers.baseChallenger.maxLevel))) {
      //keep training active-temporary
      var training1Status1 = ITraining.base.base1.active
      var training1Status2 = ITraining.base.base2.active

      var groupNum = ISelUpgrade.group.group1.num
      var groupNumLastsel = ISelUpgrade.group.group1.lastSel
      var groupNum2 = ISelUpgrade.group.group2.num
      var groupNumLastsel2 = ISelUpgrade.group.group2.lastSel

      partialResetSave(1)

      ISelUpgrade.group.group1.num = groupNum
      ISelUpgrade.group.group1.lastSel = groupNumLastsel
      ISelUpgrade.group.group2.num = groupNum2
      ISelUpgrade.group.group2.lastSel = groupNumLastsel2

      ITraining.base.base1.active = training1Status1
      ITraining.base.base2.active = training1Status2

      //universe
      IUniversal.universe = f(IUniversal.universe).add(f(1))

      //Ascension Points

      IUniversal.ascensionPointMax = f(IUniversal.ascensionPointMax).add(f(1))
      IUniversal.ascensionPoint = f(IUniversal.ascensionPoint).add(f(1))
      //page

      changePage("mainMenu", "fp2_content1_7")
      changePage("mainMenu", "content2_8")
    }
    return
  } else {
    if (f(IFight.challengers.baseChallenger.level)
      .gte(f(IFightIn.challengers.baseChallenger.maxLevel))) {
      partialResetSave(2)
      IUniversal.universe = f(IUniversal.universe).add(f(1))


      //Ascension Points

      IUniversal.ascensionPointMax = f(IUniversal.ascensionPointMax).add(f(1))
      IUniversal.ascensionPoint = f(IUniversal.ascensionPoint).add(f(1))
    }
    return
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
  IUniversal.attributes.critMulti = !IUniversal.attributes.critMulti;
}

document.getElementById("content2_11_grid_b1_cont_b1").onclick = function () {
  if (IUniversal.attributes.critMulti)
    buyMultiple(IUniversalIn.attributes.critRate, IUniversalIn.attributes.critRate, IUniversal.attributes.critRate, "level", 1, "uniChallenger", 2, IUniversal.attributes.critRate, IUniversalIn.attributes.critRate);
  else
    buyMultiple(IUniversalIn.attributes.critRate, IUniversalIn.attributes.critRate, IUniversal.attributes.critRate, "level", 1, "uniChallenger", 0, IUniversal.attributes.critRate, IUniversalIn.attributes.critRate);
}

document.getElementById("content2_11_grid_b1_cont_b2").onclick = function () {
  if (IUniversal.attributes.critMulti)
    buyMultiple(IUniversalIn.attributes.critDamage, IUniversalIn.attributes.critDamage, IUniversal.attributes.critDamage, "level", 1, "uniChallenger", 2, IUniversal.attributes.critDamage, IUniversalIn.attributes.critDamage);
  else
    buyMultiple(IUniversalIn.attributes.critDamage, IUniversalIn.attributes.critDamage, IUniversal.attributes.critDamage, "level", 1, "uniChallenger", 0, IUniversal.attributes.critDamage, IUniversalIn.attributes.critDamage);
}

document.getElementById("content2_11_grid_b2_cont_multi").onclick = function () {
  IUniversal.attributes.regenerationMulti = !IUniversal.attributes.regenerationMulti;
}

document.getElementById("content2_11_grid_b2_cont_1_b1").onclick = function () {
  IUniversal.attributes.regeneration.level = f(IUniversal.attributes.regeneration.level).add(f(IGameData.essence));
  IGameData.essence = f(0);
}

document.getElementById("content2_11_grid_b2_cont_b2").onclick = function () {
  if (IUniversal.attributes.regenerationMulti)
    buyMultiple(IUniversalIn.attributes.maxRegeneration, IUniversalIn.attributes.maxRegeneration, IUniversal.attributes.maxRegeneration, "level", 1, "uniChallenger", 2, IUniversal.attributes.maxRegeneration, IUniversalIn.attributes.maxRegeneration);
  else
    buyMultiple(IUniversalIn.attributes.maxRegeneration, IUniversalIn.attributes.maxRegeneration, IUniversal.attributes.maxRegeneration, "level", 1, "uniChallenger", 0, IUniversal.attributes.maxRegeneration, IUniversalIn.attributes.maxRegeneration);
}

document.getElementById("content2_11_grid_b5_cont_multi").onclick = function () {
  IUniversal.attributes.defenceMulti = !IUniversal.attributes.defenceMulti;
}

document.getElementById("content2_11_grid_b5_cont_1_b1").onclick = function () {
  if (IUniversal.attributes.defenceMulti) {
    var oddsBeaten = false;
    while (!oddsBeaten) {
      if (f(Math.random()).lte(f(IUniversalIn.attributes.defence.odds))) {
        buyMultiple(IUniversalIn.attributes.defence, IUniversalIn.attributes.defence, IUniversal.attributes.defence, "level", 1, "uniChallenger", 0, IUniversal.attributes.defence, IUniversalIn.attributes.defence);
        oddsBeaten = true;
      } else {
        buyMultiple(IUniversalIn.attributes.defence, IUniversalIn.attributes.defence, IUniversal.attributes.defence, "level", 0, "uniChallenger", 0, IUniversal.attributes.defence, IUniversalIn.attributes.defence);
      }
    }
  } else {
    if (f(Math.random()).lte(f(IUniversalIn.attributes.defence.odds)))
      buyMultiple(IUniversalIn.attributes.defence, IUniversalIn.attributes.defence, IUniversal.attributes.defence, "level", 1, "uniChallenger", 0, IUniversal.attributes.defence, IUniversalIn.attributes.defence);
    else
      buyMultiple(IUniversalIn.attributes.defence, IUniversalIn.attributes.defence, IUniversal.attributes.defence, "level", 0, "uniChallenger", 0, IUniversal.attributes.defence, IUniversalIn.attributes.defence);
  }
}

document.getElementById("content2_11_grid_b5_cont_b2").onclick = function () {
  if (IUniversal.attributes.defenceMulti)
    buyMultiple(IUniversalIn.attributes.maxDefence, IUniversalIn.attributes.maxDefence, IUniversal.attributes.maxDefence, "level", 1, "uniChallenger", 2, IUniversal.attributes.maxDefence, IUniversalIn.attributes.maxLevel);
  else
    buyMultiple(IUniversalIn.attributes.maxDefence, IUniversalIn.attributes.maxDefence, IUniversal.attributes.maxDefence, "level", 1, "uniChallenger", 0, IUniversal.attributes.maxDefence, IUniversalIn.attributes.maxLevel);
}

document.getElementById("content2_11_grid_b4_cont_multi").onclick = function () {
  IUniversal.attributes.defencePenetrationMulti = !IUniversal.attributes.defencePenetrationMulti;
}

document.getElementById("content2_11_grid_b4_cont_1_b1").onclick = function () {
  IUniversal.attributes.defencePenetration.level = f(IUniversal.attributes.defencePenetration.level).add(f(ITraining.base.base1.tot)).add(f(ITraining.base.base2.tot));
  ITraining.base.base1.tot = f(0);
  ITraining.base.base2.tot = f(0);
}

document.getElementById("content2_11_grid_b4_cont_b2").onclick = function () {
  if (IUniversal.attributes.defencePenetrationMulti)
    buyMultiple(IUniversalIn.attributes.maxDefencePenetration, IUniversalIn.attributes.maxDefencePenetration, IUniversal.attributes.maxDefencePenetration, "level", 1, "uniChallenger", 2, IUniversal.attributes.maxDefencePenetration, IUniversalIn.attributes.maxDefencePenetration);
  else
    buyMultiple(IUniversalIn.attributes.maxDefencePenetration, IUniversalIn.attributes.maxDefencePenetration, IUniversal.attributes.maxDefencePenetration, "level", 1, "uniChallenger", 0, IUniversal.attributes.maxDefencePenetration, IUniversalIn.attributes.maxDefencePenetration);
}

document.getElementById("content2_11_grid_b7_cont_multi").onclick = function () {
  IUniversal.attributes.lifeStealMulti = !IUniversal.attributes.lifeStealMulti;
}

document.getElementById("content2_11_grid_b7_cont_b1").onclick = function () {
  IUniversal.attributes.lifeSteal.active = !IUniversal.attributes.lifeSteal.active;
}

document.getElementById("content2_11_grid_b7_cont_b2").onclick = function () {
  if (IUniversal.attributes.lifeStealMulti)
    buyMultiple(IUniversalIn.attributes.lifeStealMax, IUniversalIn.attributes.lifeStealMax, IUniversal.attributes.lifeStealMax, "level", 1, "uniChallenger", 2, IUniversal.attributes.lifeStealMax, IUniversalIn.attributes.lifeStealMax);
  else
    buyMultiple(IUniversalIn.attributes.lifeStealMax, IUniversalIn.attributes.lifeStealMax, IUniversal.attributes.lifeStealMax, "level", 1, "uniChallenger", 0, IUniversal.attributes.lifeStealMax, IUniversalIn.attributes.lifeStealMax);
}

document.getElementById("content2_11_grid_b8_cont_multi").onclick = function () {
  IUniversal.attributes.shieldMulti = !IUniversal.attributes.shieldMulti;
}

document.getElementById("content2_11_grid_b8_cont_1_b1").onclick = function () {
  IUniversal.attributes.shield.level = f(IUniversal.attributes.shield.level).add(IUniversalChallenger.universalCores);
  IUniversalChallenger.universalCores = f(0);
}

document.getElementById("content2_11_grid_b8_cont_b2").onclick = function () {
  if (IUniversal.attributes.shieldMulti)
    buyMultiple(IUniversalIn.attributes.maxShield, IUniversalIn.attributes.maxShield, IUniversal.attributes.maxShield, "level", 1, "uniChallenger", 2, IUniversal.attributes.maxShield, IUniversalIn.attributes.maxShield);
  else
    buyMultiple(IUniversalIn.attributes.maxShield, IUniversalIn.attributes.maxShield, IUniversal.attributes.maxShield, "level", 1, "uniChallenger", 0, IUniversal.attributes.maxShield, IUniversalIn.attributes.maxShield);
}

//REQ ATTRIBUTES


document.getElementById("content2_11_grid_b3").onclick = function () {
  if (IUniversalIn.attributes.attributesUnlock1.req()) {
    IUniversal.attributes.attributesUnlock1.active = true;
  }
}

document.getElementById("content2_11_grid_b6").onclick = function () {
  if (IUniversalIn.attributes.attributesUnlock2.req()) {
    IUniversal.attributes.attributesUnlock2.active = true;
  }
}

document.getElementById("content2_11_grid_b9").onclick = function () {
  if (IUniversalIn.attributes.attributesUnlock3.req()) {
    IUniversal.attributes.attributesUnlock3.active = true;
  }
}

//HUNT EVOLUTION

document.getElementById("content2_6_huntEvolution_upgrades_b1").onclick = function () {
  if (f(IUniversal.huntEvolution.b1.level).lt(f(IUniversalIn.huntEvolution.b1.maxLevel))) {
    buyMultiple(IUniversalIn.huntEvolution.b1, IUniversalIn.huntEvolution.b1, IUniversal.huntEvolution.b1, "level", 1, "uniChallenger", 0, IUniversal.huntEvolution.b1, IUniversalIn.huntEvolution.b1);
  }
}

document.getElementById("content2_6_huntEvolution_upgrades_b2").onclick = function () {
  if (f(IUniversal.huntEvolution.b2.level).lt(f(IUniversalIn.huntEvolution.b2.maxLevel))) {
    buyMultiple(IUniversalIn.huntEvolution.b2, IUniversalIn.huntEvolution.b2, IUniversal.huntEvolution.b2, "level", 1, "uniChallenger", 0, IUniversal.huntEvolution.b2, IUniversalIn.huntEvolution.b2);
  }
}

document.getElementById("content2_6_huntEvolution_upgrades_b3").onclick = function () {
  if (f(IUniversal.huntEvolution.b3.level).lt(f(IUniversalIn.huntEvolution.b3.maxLevel))) {
    buyMultiple(IUniversalIn.huntEvolution.b3, IUniversalIn.huntEvolution.b3, IUniversal.huntEvolution.b3, "level", 1, "uniChallenger", 0, IUniversal.huntEvolution.b3, IUniversalIn.huntEvolution.b3);
  }
}

document.getElementById("content2_6_huntEvolution_upgrades_b4").onclick = function () {
  if (f(IUniversal.huntEvolution.b4.level).lt(f(IUniversalIn.huntEvolution.b4.maxLevel))) {
    buyMultiple(IUniversalIn.huntEvolution.b4, IUniversalIn.huntEvolution.b4, IUniversal.huntEvolution.b4, "level", 1, "uniChallenger", 0, IUniversal.huntEvolution.b4, IUniversalIn.huntEvolution.b4);
  }
}

document.getElementById("content2_6_huntEvolution_upgrades_b5").onclick = function () {
  if (f(IUniversal.huntEvolution.b5.level).lt(f(IUniversalIn.huntEvolution.b5.maxLevel))) {
    buyMultiple(IUniversalIn.huntEvolution.b5, IUniversalIn.huntEvolution.b5, IUniversal.huntEvolution.b5, "level", 1, "uniChallenger", 0, IUniversal.huntEvolution.b5, IUniversalIn.huntEvolution.b5);
  }
}

//AUTOMATION
document.getElementById("fp3_content1_8_auto1_b1").onclick = function () {
  if (f(IUniversal.automation.automation1.level).lt(f(IUniversalIn.automation.automation1.maxLevel))) {
    buyMultiple(IUniversalIn.automation.automation1, IUniversalIn.automation.automation1, IUniversal.automation.automation1, "level", 1, "uniChallenger", 0, IUniversal.automation.automation1, IUniversalIn.automation.automation1);
  }
}

document.getElementById("fp3_content1_8_auto2_b1").onclick = function () {
  if (!IUniversal.automation.automation2.unlocked) {
    buyMultiple(IUniversalIn.automation.automation2, IUniversalIn.automation.automation2, IUniversal.automation.automation2, "unlocked", true, "uniChallenger", 0, IUniversal.automation.automation2, IUniversalIn.automation.automation2);
  } else {
    IUniversal.automation.automation2.active = !IUniversal.automation.automation2.active;
  }
}

document.getElementById("fp3_content1_8_auto3_b1").onclick = function () {
  if (!IUniversal.automation.automation3.unlocked) {
    buyMultiple(IUniversalIn.automation.automation3, IUniversalIn.automation.automation3, IUniversal.automation.automation3, "unlocked", true, "uniChallenger", 0, IUniversal.automation.automation3, IUniversalIn.automation.automation3);
  } else {
    IUniversal.automation.automation3.active = !IUniversal.automation.automation3.active;
  }
}

document.getElementById("fp3_content1_8_auto4_b1").onclick = function () {
  if (!IUniversal.automation.automation4.unlocked) {
    buyMultiple(IUniversalIn.automation.automation4, IUniversalIn.automation.automation4, IUniversal.automation.automation4, "unlocked", true, "uniChallenger", 0, IUniversal.automation.automation4, IUniversalIn.automation.automation4);
  } else {
    IUniversal.automation.automation4.active = !IUniversal.automation.automation4.active;
  }
}

document.getElementById("fp3_content1_8_auto5_b1").onclick = function () {
  if (!IUniversal.automation.automation5.unlocked) {
    buyMultiple(IUniversalIn.automation.automation5, IUniversalIn.automation.automation5, IUniversal.automation.automation5, "unlocked", true, "uniChallenger", 0, IUniversal.automation.automation5, IUniversalIn.automation.automation5);
  } else {
    IUniversal.automation.automation5.active = !IUniversal.automation.automation5.active;
  }
}

document.getElementById("fp3_content1_8_auto6_b1").onclick = function () {
  if (f(IUniversal.automation.automation6.level).lt(f(IUniversalIn.automation.automation6.maxLevel))) {
    buyMultiple(IUniversalIn.automation.automation6, IUniversalIn.automation.automation6, IUniversal.automation.automation6, "level", 1, "uniChallenger", 0, IUniversal.automation.automation6, IUniversalIn.automation.automation6);
  }
}

document.getElementById("fp3_content1_8_auto6_b2").onclick = function () {
  if (f(IUniversal.automation.automation6.selOption).lt(1)) {
    IUniversal.automation.automation6.selOption = f(IUniversal.automation.automation6.level);
  } else {
    IUniversal.automation.automation6.selOption = f(IUniversal.automation.automation6.selOption).minus(f(1));
  }
}

document.getElementById("fp3_content1_8_auto6_b3").onclick = function () {
  if (f(IUniversal.automation.automation6.selOption).lt(IUniversal.automation.automation6.level)) {
    IUniversal.automation.automation6.selOption = f(IUniversal.automation.automation6.selOption).add(f(1));
  } else {
    IUniversal.automation.automation6.selOption = f(0);
  }
}

document.getElementById("fp3_content1_8_auto7_b1").onclick = function () {
  if (!IUniversal.automation.automation7.unlocked) {
    buyMultiple(IUniversalIn.automation.automation7, IUniversalIn.automation.automation7, IUniversal.automation.automation7, "unlocked", true, "uniChallenger", 0, IUniversal.automation.automation7, IUniversalIn.automation.automation7);
  } else {
    IUniversal.automation.automation7.active = !IUniversal.automation.automation7.active;
  }
}

document.getElementById("fp3_content1_8_auto8_b1").onclick = function () {
  if (!IUniversal.automation.automation8.unlocked) {
    buyMultiple(IUniversalIn.automation.automation8, IUniversalIn.automation.automation8, IUniversal.automation.automation8, "unlocked", true, "uniChallenger", 0, IUniversal.automation.automation8, IUniversalIn.automation.automation8);
  } else {
    IUniversal.automation.automation8.active = !IUniversal.automation.automation8.active;
  }
}

document.getElementById("fp3_content1_8_auto9_b1").onclick = function () {
  if (!IUniversal.automation.automation9.unlocked) {
    buyMultiple(IUniversalIn.automation.automation9, IUniversalIn.automation.automation9, IUniversal.automation.automation9, "unlocked", true, "uniChallenger", 0, IUniversal.automation.automation9, IUniversalIn.automation.automation9);
  } else {
    IUniversal.automation.automation9.active = !IUniversal.automation.automation9.active;
  }
}

document.getElementById("fp3_content1_8_auto10_b1").onclick = function () {
  if (!IUniversal.automation.automation10.unlocked) {
    buyMultiple(IUniversalIn.automation.automation10, IUniversalIn.automation.automation10, IUniversal.automation.automation10, "unlocked", true, "uniChallenger", 0, IUniversal.automation.automation10, IUniversalIn.automation.automation10);
  } else {
    IUniversal.automation.automation10.active = !IUniversal.automation.automation10.active;
  }
}

document.getElementById("fp3_content1_8_auto11_b1").onclick = function () {
  if (!IUniversal.automation.automation11.unlocked) {
    buyMultiple(IUniversalIn.automation.automation11, IUniversalIn.automation.automation11, IUniversal.automation.automation11, "unlocked", true, "uniChallenger", 0, IUniversal.automation.automation11, IUniversalIn.automation.automation11);
  } else {
    IUniversal.automation.automation11.active = !IUniversal.automation.automation11.active;
  }
}

document.getElementById("fp3_content1_8_auto12_b1").onclick = function () {
  if (!IUniversal.automation.automation12.unlocked) {
    buyMultiple(IUniversalIn.automation.automation12, IUniversalIn.automation.automation12, IUniversal.automation.automation12, "unlocked", true, "uniChallenger", 0, IUniversal.automation.automation12, IUniversalIn.automation.automation12);
  } else {
    IUniversal.automation.automation12.active = !IUniversal.automation.automation12.active;
  }
}

document.getElementById("fp3_content1_8_auto13_b1").onclick = function () {
  if (!IUniversal.automation.automation13.unlocked) {
    buyMultiple(IUniversalIn.automation.automation13, IUniversalIn.automation.automation13, IUniversal.automation.automation13, "unlocked", true, "uniChallenger", 0, IUniversal.automation.automation13, IUniversalIn.automation.automation13);
  } else {
    IUniversal.automation.automation13.active = !IUniversal.automation.automation13.active;
  }
}

document.getElementById("fp3_content1_8_auto14_b1").onclick = function () {
  if (!IUniversal.automation.automation14.unlocked) {
    buyMultiple(IUniversalIn.automation.automation14, IUniversalIn.automation.automation14, IUniversal.automation.automation14, "unlocked", true, "uniChallenger", 0, IUniversal.automation.automation14, IUniversalIn.automation.automation14);
  } else {
    IUniversal.automation.automation14.active = !IUniversal.automation.automation14.active;
  }
}

//notation

document.getElementById("optionsMisc_notation_b1").onclick = function () {
  if (f(IPermanent.notationCont).equals(f(IPermanent.maxNotationCont))) {
    IPermanent.notationCont = f(0)
  } else {
    IPermanent.notationCont = f(IPermanent.notationCont).add(f(1))
  }
}

//discord

document.getElementById("options_discord").onclick = function () {
  window.open("https://discord.gg/sVerm9fbhv", "_blank");
}


//fire Tree

document.getElementById("content2_17_buy").onclick = function () {
  if (f(IUniversal.buyFireTree).lt(f(IUniversal.maxBuyFireTree))) {
    IUniversal.buyFireTree = f(IUniversal.buyFireTree).add(f(1))
  } else {
    IUniversal.buyFireTree = f(0)
  }
}

document.getElementById("content2_17_node1_button").onclick = function () {
  if (f(IUniversal.fireTree.node1.level).lt(f(IUniversalIn.fireTree.node1.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node1, IUniversalIn.fireTree.node1, IUniversal.fireTree.node1, "level", 1, "uniChallenger", IUniversal.buyFireTree, IUniversal.fireTree.node1, IUniversalIn.fireTree.node1);
}

document.getElementById("content2_17_node2_button").onclick = function () {
  if (f(IUniversal.fireTree.node2.level).lt(f(IUniversalIn.fireTree.node2.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node2, IUniversalIn.fireTree.node2, IUniversal.fireTree.node2, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node2, IUniversalIn.fireTree.node2);
}

document.getElementById("content2_17_node3_button").onclick = function () {
  if (f(IUniversal.fireTree.node3.level).lt(f(IUniversalIn.fireTree.node3.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node3, IUniversalIn.fireTree.node3, IUniversal.fireTree.node3, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node3, IUniversalIn.fireTree.node3);
}

document.getElementById("content2_17_node4_button").onclick = function () {
  if (f(IUniversal.fireTree.node4.level).lt(f(IUniversalIn.fireTree.node4.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node4, IUniversalIn.fireTree.node4, IUniversal.fireTree.node4, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node4, IUniversalIn.fireTree.node4);
}

document.getElementById("content2_17_node5_button").onclick = function () {
  IUniversal.fireTree.node5.level = f(IUniversal.fireTree.node5.level).add(f(IUniversal.wood))
  IUniversal.wood = f(0)
}

document.getElementById("content2_17_node6_button").onclick = function () {
  IUniversal.fireTree.node6.level = f(IUniversal.fireTree.node6.level).add(f(IUniversal.coal))
  IUniversal.coal = f(0)
}

document.getElementById("content2_17_node7_button").onclick = function () {
  IUniversal.fireTree.node7.level = f(IUniversal.fireTree.node7.level).add(f(IUniversal.magma))
  IUniversal.magma = f(0)
}

document.getElementById("content2_17_node8_button").onclick = function () {
  if (f(IUniversal.fireTree.node8.level).lt(f(IUniversalIn.fireTree.node8.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node8, IUniversalIn.fireTree.node8, IUniversal.fireTree.node8, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node8, IUniversalIn.fireTree.node8);
}

document.getElementById("content2_17_node9_button").onclick = function () {
  if (f(IUniversal.fireTree.node9.level).lt(f(IUniversalIn.fireTree.node9.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node9, IUniversalIn.fireTree.node9, IUniversal.fireTree.node9, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node9, IUniversalIn.fireTree.node9);
}

document.getElementById("content2_17_node10_button").onclick = function () {
  if (f(IUniversal.fireTree.node10.level).lt(f(IUniversalIn.fireTree.node10.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node10, IUniversalIn.fireTree.node10, IUniversal.fireTree.node10, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node10, IUniversalIn.fireTree.node10);
}

document.getElementById("content2_17_node11_button").onclick = function () {

  IUniversal.fireTree.node2.level = f(0)
  IUniversal.fireTree.node3.level = f(0)
  IUniversal.fireTree.node4.level = f(0)
  IUniversal.fireTree.node5.level = f(0)
  IUniversal.fireTree.node6.level = f(0)
  IUniversal.fireTree.node7.level = f(0)

  IUniversal.wood = f(0)
  IUniversal.coal = f(0)
  IUniversal.magma = f(0)

  IUniversal.size = f(IUniversal.size).add(f(IUniversalIn.fireTree.node11.effect))
  IUniversal.fire = f(0)

}

document.getElementById("content2_17_node12_button").onclick = function () {
  if (f(IUniversal.fireTree.node12.level).lt(f(IUniversalIn.fireTree.node12.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node12, IUniversalIn.fireTree.node12, IUniversal.fireTree.node12, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node12, IUniversalIn.fireTree.node12);
}

document.getElementById("content2_17_node13_button").onclick = function () {
  if (f(IUniversal.fireTree.node13.level).lt(f(IUniversalIn.fireTree.node13.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node13, IUniversalIn.fireTree.node13, IUniversal.fireTree.node13, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node13, IUniversalIn.fireTree.node13);
}

document.getElementById("content2_17_node14_button").onclick = function () {
  if (f(IUniversal.fireTree.node14.level).lt(f(IUniversalIn.fireTree.node14.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node14, IUniversalIn.fireTree.node14, IUniversal.fireTree.node14, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node14, IUniversalIn.fireTree.node14);
}

document.getElementById("content2_17_node15_button").onclick = function () {
  if (f(IUniversal.fireTree.node15.level).lt(f(IUniversalIn.fireTree.node15.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node15, IUniversalIn.fireTree.node15, IUniversal.fireTree.node15, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node15, IUniversalIn.fireTree.node15);
}

document.getElementById("content2_17_node16_button").onclick = function () {
  if (f(IUniversal.fireTree.node16.level).lt(f(IUniversalIn.fireTree.node16.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node16, IUniversalIn.fireTree.node16, IUniversal.fireTree.node16, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node16, IUniversalIn.fireTree.node16);
}

document.getElementById("content2_17_node17_button").onclick = function () {
  if (f(IUniversal.fireTree.node17.level).lt(f(IUniversalIn.fireTree.node17.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node17, IUniversalIn.fireTree.node17, IUniversal.fireTree.node17, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node17, IUniversalIn.fireTree.node17);
}

document.getElementById("content2_17_node18_button").onclick = function () {
  if (f(IUniversal.fireTree.node18.level).lt(f(IUniversalIn.fireTree.node18.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node18, IUniversalIn.fireTree.node18, IUniversal.fireTree.node18, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node18, IUniversalIn.fireTree.node18);
}

document.getElementById("content2_17_node19_button").onclick = function () {
  if (f(IUniversal.fireTree.node19.level).lt(f(IUniversalIn.fireTree.node19.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node19, IUniversalIn.fireTree.node19, IUniversal.fireTree.node19, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node19, IUniversalIn.fireTree.node19);
}

document.getElementById("content2_17_node20_button").onclick = function () {
  if (f(IUniversal.fireTree.node20.level).lt(f(IUniversalIn.fireTree.node20.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node20, IUniversalIn.fireTree.node20, IUniversal.fireTree.node20, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node20, IUniversalIn.fireTree.node20);
}

document.getElementById("content2_17_node21_button").onclick = function () {
  if (f(IUniversal.fireTree.node21.level).lt(f(IUniversalIn.fireTree.node21.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node21, IUniversalIn.fireTree.node21, IUniversal.fireTree.node21, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node21, IUniversalIn.fireTree.node21);
}

document.getElementById("content2_17_node22_button").onclick = function () {
  if (f(IUniversal.fireTree.node22.level).lt(f(IUniversalIn.fireTree.node22.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node22, IUniversalIn.fireTree.node22, IUniversal.fireTree.node22, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node22, IUniversalIn.fireTree.node22);
}

document.getElementById("content2_17_node23_button").onclick = function () {
  if (f(IUniversal.fireTree.node23.level).lt(f(IUniversalIn.fireTree.node23.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node23, IUniversalIn.fireTree.node23, IUniversal.fireTree.node23, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node23, IUniversalIn.fireTree.node23);
}

document.getElementById("content2_17_node24_button").onclick = function () {
  if (f(IUniversal.fireTree.node24.level).lt(f(IUniversalIn.fireTree.node24.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node24, IUniversalIn.fireTree.node24, IUniversal.fireTree.node24, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node24, IUniversalIn.fireTree.node24);
}

document.getElementById("content2_17_node25_button").onclick = function () {
  if (f(IUniversal.fireTree.node25.level).lt(f(IUniversalIn.fireTree.node25.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node25, IUniversalIn.fireTree.node25, IUniversal.fireTree.node25, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node25, IUniversalIn.fireTree.node25);
}

document.getElementById("content2_17_node26_button").onclick = function () {
  if (f(IUniversal.fireTree.node26.level).lt(f(IUniversalIn.fireTree.node26.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node26, IUniversalIn.fireTree.node26, IUniversal.fireTree.node26, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node26, IUniversalIn.fireTree.node26);
}

document.getElementById("content2_17_node27_button").onclick = function () {
  if (f(IUniversal.fireTree.node27.level).lt(f(IUniversalIn.fireTree.node27.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node27, IUniversalIn.fireTree.node27, IUniversal.fireTree.node27, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node27, IUniversalIn.fireTree.node27);
}

document.getElementById("content2_17_node28_button").onclick = function () {
  if (!IUniversal.fireTree.node28.activeTimer) {
    IUniversal.fireTree.node28.activeTimer = true;
    IUniversal.heat = f(IUniversal.heat).add(f(IUniversalIn.fireTree.node28.effect));
  }
}

document.getElementById("content2_17_node30_button").onclick = function () {
  if (f(IUniversal.fireTree.node30.level).lt(f(IUniversalIn.fireTree.node30.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node30, IUniversalIn.fireTree.node30, IUniversal.fireTree.node30, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node30, IUniversalIn.fireTree.node30);
}

document.getElementById("content2_17_node31_button").onclick = function () {
  if (f(IUniversal.fireTree.node31.level).lt(f(IUniversalIn.fireTree.node31.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node31, IUniversalIn.fireTree.node31, IUniversal.fireTree.node31, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node31, IUniversalIn.fireTree.node31);
}

document.getElementById("content2_17_node32_button").onclick = function () {
  if (f(IUniversal.fireTree.node32.level).lt(f(IUniversalIn.fireTree.node32.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node32, IUniversalIn.fireTree.node32, IUniversal.fireTree.node32, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node32, IUniversalIn.fireTree.node32);
}

document.getElementById("content2_17_node33_button").onclick = function () {
  if (f(IUniversal.fireTree.node33.level).lt(f(IUniversalIn.fireTree.node33.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node33, IUniversalIn.fireTree.node33, IUniversal.fireTree.node33, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node33, IUniversalIn.fireTree.node33);
}

document.getElementById("content2_17_node34_button").onclick = function () {
  if (f(IUniversal.fireTree.node34.level).lt(f(IUniversalIn.fireTree.node34.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node34, IUniversalIn.fireTree.node34, IUniversal.fireTree.node34, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node34, IUniversalIn.fireTree.node34);
}

document.getElementById("content2_17_node35_button").onclick = function () {
  if (f(IUniversal.fireTree.node35.level).lt(f(IUniversalIn.fireTree.node35.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node35, IUniversalIn.fireTree.node35, IUniversal.fireTree.node35, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node35, IUniversalIn.fireTree.node35);
}

document.getElementById("content2_17_node36_button").onclick = function () {
  if (f(IUniversal.fireTree.node36.level).lt(f(IUniversalIn.fireTree.node36.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node36, IUniversalIn.fireTree.node36, IUniversal.fireTree.node36, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node36, IUniversalIn.fireTree.node36);
}

document.getElementById("content2_17_node37_button").onclick = function () {
  if (f(IUniversal.fireTree.node37.level).lt(f(IUniversalIn.fireTree.node37.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node37, IUniversalIn.fireTree.node37, IUniversal.fireTree.node37, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node37, IUniversalIn.fireTree.node37);
}

document.getElementById("content2_17_node38_button").onclick = function () {
  if (f(IUniversal.fireTree.node38.level).lt(f(IUniversalIn.fireTree.node38.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node38, IUniversalIn.fireTree.node38, IUniversal.fireTree.node38, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node38, IUniversalIn.fireTree.node38);
}

document.getElementById("content2_17_node39_button").onclick = function () {
  if (f(IUniversal.fireTree.node39.level).lt(f(IUniversalIn.fireTree.node39.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node39, IUniversalIn.fireTree.node39, IUniversal.fireTree.node39, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node39, IUniversalIn.fireTree.node39);
}

document.getElementById("content2_17_node40_button").onclick = function () {
  IUniversal.fireTree.node40.level = f(IUniversal.fireTree.node40.level).add(f(IUniversal.light))
  IUniversal.light = f(0)
}


document.getElementById("content2_17_node41_button").onclick = function () {
  if (f(IUniversal.fireTree.node41.level).lt(f(IUniversalIn.fireTree.node41.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node41, IUniversalIn.fireTree.node41, IUniversal.fireTree.node41, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node41, IUniversalIn.fireTree.node41);
}

document.getElementById("content2_17_node42_button").onclick = function () {
  if (f(IUniversal.fireTree.node42.level).lt(f(IUniversalIn.fireTree.node42.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node42, IUniversalIn.fireTree.node42, IUniversal.fireTree.node42, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node42, IUniversalIn.fireTree.node42);
}

document.getElementById("content2_17_node43_button").onclick = function () {
  if (f(IUniversal.fireTree.node43.level).lt(f(IUniversalIn.fireTree.node43.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node43, IUniversalIn.fireTree.node43, IUniversal.fireTree.node43, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node43, IUniversalIn.fireTree.node43);
}

document.getElementById("content2_17_node44_button").onclick = function () {
  if (f(IUniversal.fireTree.node44.level).lt(f(IUniversalIn.fireTree.node44.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node44, IUniversalIn.fireTree.node44, IUniversal.fireTree.node44, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node44, IUniversalIn.fireTree.node44);
}

document.getElementById("content2_17_node45_button").onclick = function () {
  if (f(IUniversal.fireTree.node45.level).lt(f(IUniversalIn.fireTree.node45.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node45, IUniversalIn.fireTree.node45, IUniversal.fireTree.node45, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node45, IUniversalIn.fireTree.node45);
}

document.getElementById("content2_17_node46_button").onclick = function () {
  if (f(IUniversal.fireTree.node46.level).lt(f(IUniversalIn.fireTree.node46.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node46, IUniversalIn.fireTree.node46, IUniversal.fireTree.node46, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node46, IUniversalIn.fireTree.node46);
}

document.getElementById("content2_17_node47_button").onclick = function () {
  if (f(IUniversal.fireTree.node47.level).lt(f(IUniversalIn.fireTree.node47.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node47, IUniversalIn.fireTree.node47, IUniversal.fireTree.node47, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node47, IUniversalIn.fireTree.node47);
}

document.getElementById("content2_17_node48_button").onclick = function () {
  if (f(IUniversal.fireTree.node48.level).lt(f(IUniversalIn.fireTree.node48.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node48, IUniversalIn.fireTree.node48, IUniversal.fireTree.node48, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node48, IUniversalIn.fireTree.node48);
}

document.getElementById("content2_17_node49_button").onclick = function () {
  if (f(IUniversal.fireTree.node49.level).lt(f(IUniversalIn.fireTree.node49.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node49, IUniversalIn.fireTree.node49, IUniversal.fireTree.node49, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node49, IUniversalIn.fireTree.node49);
}

document.getElementById("content2_17_node50_button").onclick = function () {
  if (f(IUniversal.fireTree.node50.level).lt(f(IUniversalIn.fireTree.node50.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node50, IUniversalIn.fireTree.node50, IUniversal.fireTree.node50, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node50, IUniversalIn.fireTree.node50);
}

document.getElementById("content2_17_node51_button").onclick = function () {
  if (f(IUniversal.fireTree.node51.level).lt(f(IUniversalIn.fireTree.node51.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node51, IUniversalIn.fireTree.node51, IUniversal.fireTree.node51, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node51, IUniversalIn.fireTree.node51);
}

document.getElementById("content2_17_node52_button").onclick = function () {
  if (f(IUniversal.fireTree.node52.level).lt(f(IUniversalIn.fireTree.node52.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node52, IUniversalIn.fireTree.node52, IUniversal.fireTree.node52, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node52, IUniversalIn.fireTree.node52);
}

document.getElementById("content2_17_node53_button").onclick = function () {
  if (f(IUniversal.fireTree.node53.level).lt(f(IUniversalIn.fireTree.node53.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node53, IUniversalIn.fireTree.node53, IUniversal.fireTree.node53, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node53, IUniversalIn.fireTree.node53);
}

document.getElementById("content2_17_node54_button").onclick = function () {
  if (f(IUniversal.fireTree.node54.level).lt(f(IUniversalIn.fireTree.node54.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node54, IUniversalIn.fireTree.node54, IUniversal.fireTree.node54, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node54, IUniversalIn.fireTree.node54);
}

document.getElementById("content2_17_node55_button").onclick = function () {
  IUniversal.fireTree.node55.level = f(IUniversal.fireTree.node55.level).add(f(IUniversal.rotation))
  IUniversal.rotation = f(0)
}

document.getElementById("content2_17_node56_button").onclick = function () {
  if (f(IUniversal.fireTree.node56.level).lt(f(IUniversalIn.fireTree.node56.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node56, IUniversalIn.fireTree.node56, IUniversal.fireTree.node56, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node56, IUniversalIn.fireTree.node56);
}

document.getElementById("content2_17_node57_button").onclick = function () {
  if (f(IUniversal.fireTree.node57.level).lt(f(IUniversalIn.fireTree.node57.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node57, IUniversalIn.fireTree.node57, IUniversal.fireTree.node57, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node57, IUniversalIn.fireTree.node57);
}

document.getElementById("content2_17_node58_button").onclick = function () {
  if (f(IUniversal.fireTree.node58.level).lt(f(IUniversalIn.fireTree.node58.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node58, IUniversalIn.fireTree.node58, IUniversal.fireTree.node58, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node58, IUniversalIn.fireTree.node58);
}

document.getElementById("content2_17_node59_button").onclick = function () {
  if (f(IUniversal.fireTree.node59.level).lt(f(IUniversalIn.fireTree.node59.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node59, IUniversalIn.fireTree.node59, IUniversal.fireTree.node59, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node59, IUniversalIn.fireTree.node59);
}

document.getElementById("content2_17_node60_button").onclick = function () {
  if (f(IUniversal.fireTree.node60.level).lt(f(IUniversalIn.fireTree.node60.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node60, IUniversalIn.fireTree.node60, IUniversal.fireTree.node60, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node60, IUniversalIn.fireTree.node60);
}

document.getElementById("content2_17_node61_button").onclick = function () {
  if (f(IUniversal.fireTree.node61.level).lt(f(IUniversalIn.fireTree.node61.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node61, IUniversalIn.fireTree.node61, IUniversal.fireTree.node61, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node61, IUniversalIn.fireTree.node61);
}

document.getElementById("content2_17_node62_button").onclick = function () {
  if (f(IUniversal.fireTree.node62.level).lt(f(IUniversalIn.fireTree.node62.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node62, IUniversalIn.fireTree.node62, IUniversal.fireTree.node62, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node62, IUniversalIn.fireTree.node62);
}

document.getElementById("content2_17_node63_button").onclick = function () {
  if (f(IUniversal.fireTree.node63.level).lt(f(IUniversalIn.fireTree.node63.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node63, IUniversalIn.fireTree.node63, IUniversal.fireTree.node63, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node63, IUniversalIn.fireTree.node63);
}

document.getElementById("content2_17_node64_button").onclick = function () {
  if (f(IUniversal.fireTree.node64.level).lt(f(IUniversalIn.fireTree.node64.maxLevel)))
    buyMultiple(IUniversalIn.fireTree.node64, IUniversalIn.fireTree.node64, IUniversal.fireTree.node64, "level", 1, "uni", IUniversal.buyFireTree, IUniversal.fireTree.node64, IUniversalIn.fireTree.node64);
}

document.getElementById("content2_17_node41_button2").onclick = function () {
  if (f(IUniversal.fireTree.node41.level).gt(f(0))) {
    assignGroup(IUniversalIn.fireTree, IUniversal.fireTree, "node41")
  }
}

document.getElementById("content2_17_node42_button2").onclick = function () {
  if (f(IUniversal.fireTree.node42.level).gt(f(0))) {
    assignGroup(IUniversalIn.fireTree, IUniversal.fireTree, "node42")
  }
}

document.getElementById("content2_17_node43_button2").onclick = function () {
  if (f(IUniversal.fireTree.node43.level).gt(f(0))) {
    assignGroup(IUniversalIn.fireTree, IUniversal.fireTree, "node43")
  }
}

document.getElementById("content2_17_node44_button2").onclick = function () {
  if (f(IUniversal.fireTree.node44.level).gt(f(0))) {
    assignGroup(IUniversalIn.fireTree, IUniversal.fireTree, "node44")
  }
}

document.getElementById("content2_17_valutes_button").onclick = function () {
  if (checkShow("content2_17_valutes_content")) {
    unlockShow("content2_17_valutes_content", false)
    update("content2_17_valutes_button", "<")
  } else {
    unlockShow("content2_17_valutes_content", true)
    update("content2_17_valutes_button", ">")
  }
}

document.getElementById("content2_17_resizeBig").onclick = function () {
  if (f(IUniversal.fireTreeSize).lte(f(1.5))) {
    IUniversal.fireTreeSize = f(IUniversal.fireTreeSize).add(f(0.1))
  }
}

document.getElementById("content2_17_resizeSmall").onclick = function () {
  if (f(IUniversal.fireTreeSize).gte(f(0.4))) {
    IUniversal.fireTreeSize = f(IUniversal.fireTreeSize).minus(f(0.1))
  }
}

//WATER

document.getElementById("content2_19_buy").onclick = function () {
  if (f(IUniversal.buyWaterTree).lt(f(IUniversal.maxBuyWaterTree))) {
    IUniversal.buyWaterTree = f(IUniversal.buyWaterTree).add(f(1))
  } else {
    IUniversal.buyWaterTree = f(0)
  }
}

document.getElementById("content2_19_valutes_button").onclick = function () {
  if (checkShow("content2_19_valutes_content")) {
    unlockShow("content2_19_valutes_content", false)
    update("content2_19_valutes_button", "<")
  } else {
    unlockShow("content2_19_valutes_content", true)
    update("content2_19_valutes_button", ">")
  }
}

document.getElementById("content2_19_node1_button").onclick = function () {
  if (f(IUniversal.waterTree.node1.level).lt(f(IUniversalIn.waterTree.node1.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node1, IUniversalIn.waterTree.node1, IUniversal.waterTree.node1, "level", 1, "uniChallenger", IUniversal.buyWaterTree, IUniversal.waterTree.node1, IUniversalIn.waterTree.node1);
}

document.getElementById("content2_19_node2_button").onclick = function () {
  if (f(IUniversal.waterTree.node2.level).lt(f(IUniversalIn.waterTree.node2.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node2, IUniversalIn.waterTree.node2, IUniversal.waterTree.node2, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node2, IUniversalIn.waterTree.node2);
}

document.getElementById("content2_19_node3_button").onclick = function () {
  if (f(IUniversal.waterTree.node3.level).lt(f(IUniversalIn.waterTree.node3.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node3, IUniversalIn.waterTree.node3, IUniversal.waterTree.node3, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node3, IUniversalIn.waterTree.node3);
}

document.getElementById("content2_19_node4_button").onclick = function () {
  if (f(IUniversal.waterTree.node4.level).lt(f(IUniversalIn.waterTree.node4.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node4, IUniversalIn.waterTree.node4, IUniversal.waterTree.node4, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node4, IUniversalIn.waterTree.node4);
}

document.getElementById("content2_19_node5_button").onclick = function () {
  if (f(IUniversal.waterTree.node5.level).lt(f(IUniversalIn.waterTree.node5.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node5, IUniversalIn.waterTree.node5, IUniversal.waterTree.node5, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node5, IUniversalIn.waterTree.node5);
}

document.getElementById("content2_19_node6_button").onclick = function () {
  if (f(IUniversal.waterTree.node6.level).lt(f(IUniversalIn.waterTree.node6.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node6, IUniversalIn.waterTree.node6, IUniversal.waterTree.node6, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node6, IUniversalIn.waterTree.node6);
}

document.getElementById("content2_19_node7_button").onclick = function () {
  if (f(IUniversal.waterTree.node7.level).lt(f(IUniversalIn.waterTree.node7.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node7, IUniversalIn.waterTree.node7, IUniversal.waterTree.node7, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node7, IUniversalIn.waterTree.node7);
}

document.getElementById("content2_19_node8_button").onclick = function () {
  if (f(IUniversal.waterTree.node8.level).lt(f(IUniversalIn.waterTree.node8.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node8, IUniversalIn.waterTree.node8, IUniversal.waterTree.node8, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node8, IUniversalIn.waterTree.node8);
}

document.getElementById("content2_19_node9_button").onclick = function () {
  if (f(IUniversal.waterTree.node9.level).lt(f(IUniversalIn.waterTree.node9.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node9, IUniversalIn.waterTree.node9, IUniversal.waterTree.node9, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node9, IUniversalIn.waterTree.node9);
}

document.getElementById("content2_19_node10_button").onclick = function () {
  if (f(IUniversal.waterTree.node10.level).lt(f(IUniversalIn.waterTree.node10.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node10, IUniversalIn.waterTree.node10, IUniversal.waterTree.node10, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node10, IUniversalIn.waterTree.node10);
}

document.getElementById("content2_19_node11_button").onclick = function () {
  if (f(IUniversal.waterTree.node11.level).lt(f(IUniversalIn.waterTree.node11.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node11, IUniversalIn.waterTree.node11, IUniversal.waterTree.node11, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node11, IUniversalIn.waterTree.node11);
}

document.getElementById("content2_19_node12_button").onclick = function () {
  if (f(IUniversal.waterTree.node12.level).lt(f(IUniversalIn.waterTree.node12.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node12, IUniversalIn.waterTree.node12, IUniversal.waterTree.node12, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node12, IUniversalIn.waterTree.node12);
}

document.getElementById("content2_19_node13_button").onclick = function () {
  if (f(IUniversal.waterTree.node13.level).lt(f(IUniversalIn.waterTree.node13.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node13, IUniversalIn.waterTree.node13, IUniversal.waterTree.node13, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node13, IUniversalIn.waterTree.node13);
}

document.getElementById("content2_19_node14_button").onclick = function () {
  if (f(IUniversal.waterTree.node14.level).lt(f(IUniversalIn.waterTree.node14.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node14, IUniversalIn.waterTree.node14, IUniversal.waterTree.node14, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node14, IUniversalIn.waterTree.node14);
}

document.getElementById("content2_19_node15_button").onclick = function () {
  if (f(IUniversal.waterTree.node15.level).lt(f(IUniversalIn.waterTree.node15.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node15, IUniversalIn.waterTree.node15, IUniversal.waterTree.node15, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node15, IUniversalIn.waterTree.node15);
}

document.getElementById("content2_19_node16_button").onclick = function () {
  if (f(IUniversal.waterTree.node16.level).lt(f(IUniversalIn.waterTree.node16.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node16, IUniversalIn.waterTree.node16, IUniversal.waterTree.node16, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node16, IUniversalIn.waterTree.node16);
}

document.getElementById("content2_19_node17_button").onclick = function () {
  if (f(IUniversal.waterTree.node17.level).lt(f(IUniversalIn.waterTree.node17.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node17, IUniversalIn.waterTree.node17, IUniversal.waterTree.node17, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node17, IUniversalIn.waterTree.node17);
}

document.getElementById("content2_19_node18_button").onclick = function () {
  if (f(IUniversal.waterTree.node18.level).lt(f(IUniversalIn.waterTree.node18.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node18, IUniversalIn.waterTree.node18, IUniversal.waterTree.node18, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node18, IUniversalIn.waterTree.node18);
}

document.getElementById("content2_19_node19_button").onclick = function () {
  if (f(IUniversal.waterTree.node19.level).lt(f(IUniversalIn.waterTree.node19.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node19, IUniversalIn.waterTree.node19, IUniversal.waterTree.node19, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node19, IUniversalIn.waterTree.node19);
}

document.getElementById("content2_19_node20_button").onclick = function () {
  if (f(IUniversal.waterTree.node20.level).lt(f(IUniversalIn.waterTree.node20.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node20, IUniversalIn.waterTree.node20, IUniversal.waterTree.node20, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node20, IUniversalIn.waterTree.node20);
}

document.getElementById("content2_19_node21_button").onclick = function () {
  if (f(IUniversal.waterTree.node21.level).lt(f(IUniversalIn.waterTree.node21.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node21, IUniversalIn.waterTree.node21, IUniversal.waterTree.node21, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node21, IUniversalIn.waterTree.node21);
}

document.getElementById("content2_19_node22_button").onclick = function () {
  if (f(IUniversal.waterTree.node22.level).lt(f(IUniversalIn.waterTree.node22.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node22, IUniversalIn.waterTree.node22, IUniversal.waterTree.node22, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node22, IUniversalIn.waterTree.node22);
}

document.getElementById("content2_19_node23_button").onclick = function () {
  if (f(IUniversal.waterTree.node23.level).lt(f(IUniversalIn.waterTree.node23.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node23, IUniversalIn.waterTree.node23, IUniversal.waterTree.node23, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node23, IUniversalIn.waterTree.node23);
}

document.getElementById("content2_19_node24_button").onclick = function () {
  if (f(IUniversal.waterTree.node24.level).lt(f(IUniversalIn.waterTree.node24.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node24, IUniversalIn.waterTree.node24, IUniversal.waterTree.node24, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node24, IUniversalIn.waterTree.node24);
}

document.getElementById("content2_19_node25_button").onclick = function () {
  if (f(IUniversal.waterTree.node25.level).lt(f(IUniversalIn.waterTree.node25.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node25, IUniversalIn.waterTree.node25, IUniversal.waterTree.node25, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node25, IUniversalIn.waterTree.node25);
}

document.getElementById("content2_19_node26_button").onclick = function () {
  if (f(IUniversal.waterTree.node26.level).lt(f(IUniversalIn.waterTree.node26.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node26, IUniversalIn.waterTree.node26, IUniversal.waterTree.node26, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node26, IUniversalIn.waterTree.node26);
}

document.getElementById("content2_19_node27_button").onclick = function () {
  if (f(IUniversal.waterTree.node27.level).lt(f(IUniversalIn.waterTree.node27.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node27, IUniversalIn.waterTree.node27, IUniversal.waterTree.node27, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node27, IUniversalIn.waterTree.node27);
}

document.getElementById("content2_19_node28_button").onclick = function () {
  if (f(IUniversal.waterTree.node28.level).lt(f(IUniversalIn.waterTree.node28.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node28, IUniversalIn.waterTree.node28, IUniversal.waterTree.node28, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node28, IUniversalIn.waterTree.node28);
}

document.getElementById("content2_19_node29_button").onclick = function () {
  if (f(IUniversal.waterTree.node29.level).lt(f(IUniversalIn.waterTree.node29.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node29, IUniversalIn.waterTree.node29, IUniversal.waterTree.node29, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node29, IUniversalIn.waterTree.node29);
}

document.getElementById("content2_19_node30_button").onclick = function () {
  if (f(IUniversal.waterTree.node30.level).lt(f(IUniversalIn.waterTree.node30.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node30, IUniversalIn.waterTree.node30, IUniversal.waterTree.node30, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node30, IUniversalIn.waterTree.node30);
}

document.getElementById("content2_19_node31_button").onclick = function () {
  if (f(IUniversal.waterTree.node31.level).lt(f(IUniversalIn.waterTree.node31.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node31, IUniversalIn.waterTree.node31, IUniversal.waterTree.node31, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node31, IUniversalIn.waterTree.node31);
}

document.getElementById("content2_19_node32_button").onclick = function () {
  if (f(IUniversal.waterTree.node32.level).lt(f(IUniversalIn.waterTree.node32.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node32, IUniversalIn.waterTree.node32, IUniversal.waterTree.node32, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node32, IUniversalIn.waterTree.node32);
}

document.getElementById("content2_19_node33_button").onclick = function () {
  if (f(IUniversal.waterTree.node33.level).lt(f(IUniversalIn.waterTree.node33.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node33, IUniversalIn.waterTree.node33, IUniversal.waterTree.node33, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node33, IUniversalIn.waterTree.node33);
}

document.getElementById("content2_19_node34_button").onclick = function () {
  if (f(IUniversal.waterTree.node34.level).lt(f(IUniversalIn.waterTree.node34.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node34, IUniversalIn.waterTree.node34, IUniversal.waterTree.node34, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node34, IUniversalIn.waterTree.node34);
}

document.getElementById("content2_19_node35_button").onclick = function () {
  if (f(IUniversal.waterTree.node35.level).lt(f(IUniversalIn.waterTree.node35.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node35, IUniversalIn.waterTree.node35, IUniversal.waterTree.node35, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node35, IUniversalIn.waterTree.node35);
}

document.getElementById("content2_19_node36_button").onclick = function () {
  if (f(IUniversal.waterTree.node36.level).lt(f(IUniversalIn.waterTree.node36.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node36, IUniversalIn.waterTree.node36, IUniversal.waterTree.node36, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node36, IUniversalIn.waterTree.node36);
}

document.getElementById("content2_19_node37_button").onclick = function () {
  if (f(IUniversal.waterTree.node37.level).lt(f(IUniversalIn.waterTree.node37.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node37, IUniversalIn.waterTree.node37, IUniversal.waterTree.node37, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node37, IUniversalIn.waterTree.node37);
}

document.getElementById("content2_19_node38_button").onclick = function () {
  if (f(IUniversal.waterTree.node38.level).lt(f(IUniversalIn.waterTree.node38.maxLevel)))
    buyMultiple(IUniversalIn.waterTree.node38, IUniversalIn.waterTree.node38, IUniversal.waterTree.node38, "level", 1, "uni", IUniversal.buyWaterTree, IUniversal.waterTree.node38, IUniversalIn.waterTree.node38);
}

//POTIONS

document.getElementById("content2_19_potions_potion1_button").onclick = function () {
  if (checkBuyMultiValutes(IUniversalIn.potionInfo.potion1.prices)) {
    if (buyMultiValutes(IUniversalIn.potionInfo.potion1.prices, "UniNoUpdate")) {

      craft("potion", "potion1")
    }
  }
}

document.getElementById("content2_19_potions_potion2_button").onclick = function () {
  if (checkBuyMultiValutes(IUniversalIn.potionInfo.potion2.prices)) {
    if (buyMultiValutes(IUniversalIn.potionInfo.potion2.prices, "UniNoUpdate")) {
      craft("potion", "potion2")
    }
  }
}

document.getElementById("content2_19_potions_potion3_button").onclick = function () {
  if (checkBuyMultiValutes(IUniversalIn.potionInfo.potion3.prices)) {
    if (buyMultiValutes(IUniversalIn.potionInfo.potion3.prices, "UniNoUpdate")) {
      craft("potion", "potion3")
    }
  }
}

document.getElementById("content2_19_potions_potion4_button").onclick = function () {
  if (checkBuyMultiValutes(IUniversalIn.potionInfo.potion4.prices)) {
    if (buyMultiValutes(IUniversalIn.potionInfo.potion4.prices, "UniNoUpdate")) {
      craft("potion", "potion4")
    }
  }
}

document.getElementById("content2_19_potions_potion5_button").onclick = function () {
  if (checkBuyMultiValutes(IUniversalIn.potionInfo.potion5.prices)) {
    if (buyMultiValutes(IUniversalIn.potionInfo.potion5.prices, "UniNoUpdate")) {
      craft("potion", "potion5")
    }
  }
}

document.getElementById("content2_19_potions_potion6_button").onclick = function () {
  if (checkBuyMultiValutes(IUniversalIn.potionInfo.potion6.prices)) {
    if (buyMultiValutes(IUniversalIn.potionInfo.potion6.prices, "UniNoUpdate")) {
      craft("potion", "potion6")
    }
  }
}

document.getElementById("content2_19_potions_potion7_button").onclick = function () {
  if (checkBuyMultiValutes(IUniversalIn.potionInfo.potion7.prices)) {
    if (buyMultiValutes(IUniversalIn.potionInfo.potion7.prices, "UniNoUpdate")) {
      craft("potion", "potion7")
    }
  }
}

document.getElementById("content2_19_potions_potion8_button").onclick = function () {
  if (checkBuyMultiValutes(IUniversalIn.potionInfo.potion8.prices)) {
    if (buyMultiValutes(IUniversalIn.potionInfo.potion8.prices, "UniNoUpdate")) {
      craft("potion", "potion8")
    }
  }
}


document.getElementById("content2_19_potions_potion9_button").onclick = function () {
  if (checkBuyMultiValutes(IUniversalIn.potionInfo.potion9.prices)) {
    if (buyMultiValutes(IUniversalIn.potionInfo.potion9.prices, "UniNoUpdate")) {
      craft("potion", "potion9")
    }
  }
}

document.getElementById("content2_19_potions_potion10_button").onclick = function () {
  if (checkBuyMultiValutes(IUniversalIn.potionInfo.potion10.prices)) {
    if (buyMultiValutes(IUniversalIn.potionInfo.potion10.prices, "UniNoUpdate")) {
      craft("potion", "potion10")
    }
  }
}

document.getElementById("content2_19_potions_potion11_button").onclick = function () {
  if (checkBuyMultiValutes(IUniversalIn.potionInfo.potion11.prices)) {
    if (buyMultiValutes(IUniversalIn.potionInfo.potion11.prices, "UniNoUpdate")) {
      craft("potion", "potion11")
    }
  }
}


document.getElementById("content2_19_potions_potion12_button").onclick = function () {
  if (checkBuyMultiValutes(IUniversalIn.potionInfo.potion12.prices)) {
    if (buyMultiValutes(IUniversalIn.potionInfo.potion12.prices, "UniNoUpdate")) {
      craft("potion", "potion12")
    }
  }
}

document.getElementById("content2_19_potions_potion13_button").onclick = function () {
  if (checkBuyMultiValutes(IUniversalIn.potionInfo.potion13.prices)) {
    if (buyMultiValutes(IUniversalIn.potionInfo.potion13.prices, "UniNoUpdate")) {
      craft("potion", "potion13")
    }
  }
}

document.getElementById("content2_19_potions_potion14_button").onclick = function () {
  if (checkBuyMultiValutes(IUniversalIn.potionInfo.potion14.prices)) {
    if (buyMultiValutes(IUniversalIn.potionInfo.potion14.prices, "UniNoUpdate")) {
      craft("potion", "potion14")
    }
  }
}
//potion Upgrade

//sel
document.getElementById("content2_19_potionUpgrade_selector_button1").onclick = function () {
  changePage("potionUpgrades", "content2_19_potionUpgrade_selector_content1")

}
document.getElementById("content2_19_potionUpgrade_selector_button2").onclick = function () {
  changePage("potionUpgrades", "content2_19_potionUpgrade_selector_content2")

}

document.getElementById("content2_19_potionUpgrade_selector_button3").onclick = function () {
  changePage("potionUpgrades", "content2_19_potionUpgrade_selector_content3")

}
//Upgrade

document.getElementById("content2_19_potionUpgrade_upgradeButton").onclick = function () {

  const { newPotion, newPotionIn } = potionUpgrade();

  potionSetter()

  if (IUniversal.potionUpgrade.item1.key) {
    if (f(newPotion.level).lte(f(newPotionIn.maxLevel))) {
      if (checkBuyMultiValutes(newPotionIn.prices)) {
        if (buyMultiValutes(newPotionIn.prices, "UniNoUpdate")) {
          IUniversal.inventoryStorage[IUniversal.potionUpgrade.item1.key] = newPotion
          IUniversalIn.inventoryStorage[IUniversal.potionUpgrade.item1.key] = newPotionIn
        }
      }
    }
  }
}

//Fusion

document.getElementById("content2_19_potionUpgrade_content3_button1").onclick = function () {

  //put cost of fusion

  const { newPotion, newPotionIn } = potionFusion();

  potionSetter()

  if (newPotion && newPotionIn) {
    if (checkBuyMultiValutes(newPotionIn.prices)) {
      if (buyMultiValutes(newPotionIn.prices, "UniNoUpdate")) {
        IUniversalIn.potionFusionVisual2 = potionVisual(newPotion, newPotionIn);
        IUniversal.inventoryStorage[IUniversal.potionFusion.item1.key] = newPotion
        IUniversalIn.inventoryStorage[IUniversal.potionFusion.item1.key] = newPotionIn

        deletePotion(IUniversal.potionFusion.item2.key)
      }
    }
  }
}
//water size

document.getElementById("content2_19_resizeBig").onclick = function () {
  if (f(IUniversal.WaterTreeSize).lte(f(1.5))) {
    IUniversal.WaterTreeSize = f(IUniversal.WaterTreeSize).add(f(0.1))
  }
}

document.getElementById("content2_19_resizeSmall").onclick = function () {
  if (f(IUniversal.WaterTreeSize).gte(f(0.4))) {
    IUniversal.WaterTreeSize = f(IUniversal.WaterTreeSize).minus(f(0.1))
  }
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

    fullSetter("off")

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
  var enemyDamage = f(IFightIn.challengers.baseChallenger.damage);

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

function svgFire(value) {
  // Usa Decimal.js per calcolare la dimensione
  if (f(Decimal.log10(f(value))).gt(f(90))) {
    var size1 = f(100)
  } else {
    if ((value).gt(f(0))) {
      size1 = Decimal.log10(f(value))
      size1 = f(size1).add(f(10))
    } else {
      size1 = f(10)
    }
  }

  // SVG a forma di stella a 4 punte (verticali più lunghe)
  const flame1 = `
<svg width="${size1}%" height="${size1}%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"
     style="position:absolute; bottom:0%; left:50%; transform: translate(-50%) rotate(-45deg); z-index:1;">
  <defs>
    <filter id="innerBlur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="atop"/>
    </filter>

    <radialGradient id="fireCore" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="yellow">
        <animate attributeName="stop-color" values="yellow;orange;red;yellow" dur="3s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" stop-color="darkred">
        <animate attributeName="stop-color" values="darkred;orangered;darkred" dur="3s" repeatCount="indefinite"/>
      </stop>
    </radialGradient>
  </defs>

  <g transform="rotate(-45, 50, 50)">
    <polygon
      points="55,25 
              60,41
              100,50 
              60,59
              55,75 
              40,59 
              0,50 
              40,41"
      fill="orange"
      stroke="orangered"
      stroke-width="3"
      filter="url(#innerBlur)"
    >
    </polygon>
  </g>
</svg>
`;
  return flame1;
}

function visualSvg(value) {

  const maxRadius = 100;
  const minRadius = 20;
  const minRadius2 = 40;

  const colorScale = [
    '#000000',
    '#191966ff',
    '#322e8aff',
    '#7931adff',
    '#3d81bdff',
    '#ff0040',
    '#ff6600',
    '#ffaa00',
    '#ffe066',
    '#ffffff'
  ];

  let radius = 20;
  let radius2 = 20;
  let radius3 = 20;

  let log10 = f(value).lte(f(0)) ? f(0) : f(value).log(f(10));

  log10 = f(log10)

  // base 100
  let log100 = log10.div(f(2));
  let isPowerOf100 = f(value).gt(f(0)) && log100.floor().eq(log100);

  // base 1000
  let log1000 = log10.div(f(3));
  let isPowerOf1000 = f(value).gt(f(0)) && log1000.floor().eq(log100);

  // base 10000
  let log10000 = log10.div(f(4));
  let isPowerOf10000 = f(value).gt(f(0)) && log10000.floor().eq(log10000);
  var scaleFactor = 0.8;

  // ---- Colore base ----
  let colorIndex = f(log10).div(2).floor().toNumber(); // log base 100 = log10 / 2

  if (colorIndex < 0) {
    colorIndex = 0;
  } else {
    if (f(value).lt(f(10).pow(f(2000)))) {
      // loop finché sotto 1e2000
      colorIndex = colorIndex % colorScale.length;
    } else {
      // sopra 1e2000 resta fisso all'ultimo colore
      if (colorIndex >= colorScale.length) {
        colorIndex = colorScale.length - 1;
      }
    }
  }

  // ---- Orb1 ----
  let colorIndex2 = f(log10).div(20).floor().toNumber();

  if (colorIndex2 < 0) {
    colorIndex2 = 0;
  } else {
    if (f(value).lt(f(10).pow(f(2000)))) {
      colorIndex2 = colorIndex2 % colorScale.length;
    } else {
      if (colorIndex2 >= colorScale.length) {
        colorIndex2 = colorScale.length - 1;
      }
    }
  }

  // ---- Orb2 ----
  let colorIndex3 = f(log10).div(200).floor().toNumber();

  if (colorIndex3 < 0) {
    colorIndex3 = 0;
  } else {
    if (f(value).lt(f(10).pow(f(2000)))) {
      colorIndex3 = colorIndex3 % colorScale.length;
    } else {
      if (colorIndex3 >= colorScale.length) {
        colorIndex3 = colorScale.length - 1;
      }
    }
  }

  const fillColor = colorScale[colorIndex];
  const fillColor2 = colorScale[colorIndex2];
  const fillColor3 = colorScale[colorIndex3];

  // radius 1
  if (isPowerOf100 || f(value).lte(f(2))) {
    radius = minRadius;
  } else {
    let lower = f(100).pow(f(log100.floor()));
    let upper = lower.mul(f(100));
    let scale = (f(value).sub(lower)).div((upper.sub(lower)));

    if (!(colorIndex >= colorScale.length - 1)) {
      radius = minRadius + (maxRadius - minRadius) * scale.toNumber() * scaleFactor;
    } else {
      radius = maxRadius * scaleFactor
    }
  }

  // radius 2
  if (isPowerOf1000 || f(value).lte(f(2))) {
    radius2 = minRadius2;
  } else {
    let lower = f(1000).pow(f(log1000.floor()));
    let upper = lower.mul(f(1000));
    let scale = f(value).sub(lower).div(upper.sub(lower));

    if (!(colorIndex2 >= colorScale.length - 1)) {
      radius2 = minRadius2 + (maxRadius - minRadius2) * scale.toNumber() * scaleFactor;
    } else {
      radius2 = maxRadius * scaleFactor
    }
  }

  let size = "0%";
  let size2 = "0%";
  let size3 = "0%";

  if (f(value).lte(f(10).pow(f(20)))) {
    size = "100%";
  }
  else if (f(value).lte(f(10).pow(f(200)))) {
    size = "50%";
    size2 = "100%";
    radius2 = f(maxRadius).mul(f(scaleFactor));
  }
  else if (f(value).lte(f(10).pow(f(2000)))) {
    size = "33%";
    size2 = "66%";
    size3 = "100%";
    radius3 = f(maxRadius).mul(f(scaleFactor));
  }

  if (f(value).gte(f(10).pow(f(2000)))) {
    size = "33%";
    size2 = "66%";
    size3 = "100%";
    radius3 = f(maxRadius).mul(f(scaleFactor));
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

  // Aura irregolare2
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

  // Aura irregolare3
  const auraPoints3 = [];
  const auraRadius3 = radius3 * 1.4;
  const segments3 = 40;
  for (let i = 0; i < segments3; i++) {
    const angle3 = (i / segments3) * 2 * Math.PI;
    const variation3 = (Math.random() - 0.5) * (radius3 * 0.4);
    const r = auraRadius3 + variation3;
    const x = 150 + r * Math.cos(angle3);
    const y = 150 + r * Math.sin(angle3);
    auraPoints3.push([x, y]);
  }
  const auraPath3 = auraPoints3.map((p, i) =>
    (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)
  ).join(" ") + " Z";

  let stroke1 = fillColor2 == "#ffffff" ? "#000000" : "#ffffff"

  let orb1 = "";
  if (f(value).gte(f(10).pow(f(20)))) {
    orb1 = `<svg width="${size2}" height="${size2}" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet"
       style="position:absolute; top:50%; left:50%; transform: translate(-50%, -50%); z-index:2;">
    <path d="${auraPath2}" fill="${fillColor2}" opacity="0.25" stroke="${stroke1}" stroke-width="2"/>
    <circle cx="150" cy="150" r="${radius2}" fill="${fillColor2}" 
            stroke="black" stroke-width="2"/>
  </svg>`;
  } else {
    orb1 = ""
  }

  let orb2 = "";
  if (f(value).gte(f(10).pow(f(200)))) {
    orb2 = `<svg width="${size3}" height="${size3}" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet"
       style="position:absolute; top:50%; left:50%; transform: translate(-50%, -50%); z-index:1;">
    <path d="${auraPath3}" fill="${fillColor3}" opacity="0.25" stroke="${stroke1}" stroke-width="2"/>
    <circle cx="150" cy="150" r="${radius3}" fill="${fillColor3}" 
            stroke="black" stroke-width="2"/>
  </svg>`;
  } else {
    orb2 = ""
  }

  var svg = `
  <div style="position: relative; width: 100%; height: 100%;">
  <!-- Sfera grande sotto -->
  <svg width="${size}" height="${size}" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet"
       style="position:absolute; top:50%; left:50%; transform: translate(-50%, -50%); z-index:3;">
<path d="${auraPath}" fill="${fillColor}" opacity="0.25" stroke="${stroke1}" stroke-width="2"/>
    <circle cx="150" cy="150" r="${radius}" fill="${fillColor}" 
            stroke="black" stroke-width="2"/>
  </svg>

  ${orb1}
  ${orb2}
</div>
  `;

  return svg
}


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

  if (checkShow("fp2_content2") || true) {
    document.getElementById("menu1").style.backgroundImage = `url("images/ground.png")`
    document.getElementById("menu1").style.zIndex = 3

    document.getElementById("menu2").style.backgroundImage = `url("images/mountain.png")`
    document.getElementById("menu2").style.zIndex = 2

    document.getElementById("menu3").style.backgroundImage = `url("images/sky gradient.png")`
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

    //ENERGY

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

  if (checkShow("fp2_content3") || true) {
    document.getElementById("menu4").style.backgroundImage = `url("images/second page1.png")`
    document.getElementById("menu4").style.zIndex = 1

    document.getElementById("fp2_content2_17_image").style.backgroundImage = `url("images/Fire Version1.png")`

    document.getElementById("fp2_content2_19_image").style.backgroundImage = `url("images/Water version1.png")`
    //notes

    document.getElementById("fp2_content2_18_image").style.backgroundImage = `url("images/note 6 version 1.png")`
    document.getElementById("fp2_content2_20_image").style.backgroundImage = `url("images/note 2 sky.png")`


  }
}

//VISUAL OPTIONS
function visualOptions() {
  update("optionsMisc_notation_b1", `<div class="noClick">${IPermanentIn.notation["notation" + IPermanent.notationCont]}</div>`)
}

//LORE

function visualLore() {
  update("content2_12_text", IUniversalIn.lore.lore1)
  update("content2_13_text", IUniversalIn.lore.lore2)
  update("content2_14_text", IUniversalIn.lore.lore3)
  update("content2_15_text", IUniversalIn.lore.lore4)
  update("content2_16_text", IUniversalIn.lore.lore5)
  update("content2_18_text", IUniversalIn.lore.lore6)
  update("content2_20_text", IUniversalIn.lore.lore7)

}

//VISUAL TRAINING

function visualTraining() {
  for (let x in ITraining.base) {
    var sel = ITraining.base[x]
    var sel2 = ITrainingIn.base[x]

    update(x + "_1", `<div>${sel2.name}</div>`)

    if (sel2.name == "Damage") {
      update(x + "_2", `<div>${sel2.description}  (${format(f(IFight.youStats.damage), 0)})</div>`)
    } else if (sel2.name == "Life") {
      update(x + "_2", `<div>${sel2.description}  (${format(f(IFight.youStats.life), 0)})</div>`)
    } else {
      update(x + "_2", `<div>${sel2.description}</div>`)
    }
    update(x + "_3", `<div>${format(sel2.prod, 2)}/s</div>`)

    if (x == "base3" || x == "base4") {

      if (sel2.req() == true || checkShow(x)) {
        update(x + "_1", `<div>${sel2.name}</div>`)
        update(x + "_2", `<div>${sel2.description}</div>`)
        update(x + "_3", `<div>${format(sel2.prod, 2)}/s</div>`)
        update("base34_req", "")
      } else {
        update("base34_req", sel2.reqDescription)
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

function visualChallenger(type) {
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

  //Base Challenger
  var challengerName = IFightIn.challengers.baseChallenger.name
  var challengerDamage = IFightIn.challengers.baseChallenger.damage
  var challengerLife = IFightIn.challengers.baseChallenger.life
  var challengerLeftLife = IFight.challengers.baseChallenger.leftLife
  var challengerTitle = IFightIn.challengers.baseChallenger.title
  var challengerLevel = IFight.challengers.baseChallenger.level

  update("c2_4_A_name", `YOU`)
  update("c2_4_A_damage", `<span class="boldBlackBorder">${format(f(YouDamage))}</span> Damage`)
  update("c2_4_A_life", `<span class="boldBlackBorder">${format(f(YouLife))}</span> Max Life`)
  update("c2_4_A_part3", `${format(f(LeftLife))}`)

  if (IFight.youStats.onFight1 == false) {
    if (f(IFight.challengers.baseChallenger.level).gt(f(IFightIn.challengers.baseChallenger.maxLevel))) {
      update("c2_4_VS", `<span class="boldBlackBorder noClick">MAX</span>`)
      document.getElementById("c2_4_VS").style.backgroundColor = "#1e8449"
    } else {
      update("c2_4_VS", `<span class="boldBlackBorder noClick">CHALLENGE</span>`)
      document.getElementById("c2_4_VS").style.backgroundColor = "#1e8449"
    }
  }
  else {
    update("c2_4_VS", `<span class="boldBlackBorder noClick">STOP</span>
                       <span class="noClick fontSize08 margin1">Increase fight speed every 5s</span>
                       <span class="noClick fontSize08 margin1">×${format(f(IFight.onFightStats.fightMulti1))} fight speed</span>`)
    document.getElementById("c2_4_VS").style.backgroundColor = "#972a2aff"
  }


  if (f(IFight.challengers.baseChallenger.level).gt(f(IFightIn.challengers.baseChallenger.maxLevel))) {
    update("c2_4_B_name", `<div class = "centerDiv">You are the Strongest in this Universe<div>`)
    update("c2_4_B_damage", ``)
    update("c2_4_B_life", ``)
    update("c2_4_B_part3", ``)
    unlockShow("c2_4_B_part1", false)
  } else {
    update("c2_4_B_name", `${challengerName} ${format(f(challengerLevel), 0)} ${challengerTitle}`)
    update("c2_4_B_damage", `<span class="boldBlackBorder">${format(f(challengerDamage))}</span> Damage`)
    update("c2_4_B_life", `<span class="boldBlackBorder">${format(f(challengerLife))}</span> Max Life`)
    update("c2_4_B_part3", `${format(f(challengerLeftLife))}`)
    unlockShow("c2_4_B_part1", true)
  }
  //REWARDS

  for (let x in IFight.challengerRewards) {

    var sel = IFight.challengerRewards[x]
    var sel2 = IFightIn.challengerRewards[x]

    update("c2_4_rewards_" + x, sel2.name)
  }

  if (checkShow("content2_4")) {
    if (!IFight.youStats.onFight1) {

      progressBar(IFight.youStats.leftLife, IFight.youStats.life, "c2_4_A_part2")
      progressBar(IFight.challengers.baseChallenger.leftLife, IFightIn.challengers.baseChallenger.life, "c2_4_B_part2")
    }
    else {
      progressBar(IFight.onFightStats.leftLife, IFight.onFightStats.life, "c2_4_A_part2")
      progressBar(IFight.challengers.baseChallenger.leftLife, IFightIn.challengers.baseChallenger.life, "c2_4_B_part2")
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
    var LeftLife = IFight.onFightStats.leftLife2
  }
  else {
    YouLife = IFight.youStats.life
    YouDamage = IFight.youStats.damage
    LeftLife = IFight.youStats.leftLife2
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
  update("c2_10_A_life", `<span class="boldBlackBorder">${format(f(YouLife))}</span> Max Life`)
  update("c2_10_A_part3", `${format(f(LeftLife))}`)

  if (IFight.youStats.fightController2 == null || IFight.youStats.fightController2 == false) {
    update("c2_10_VS", `<span class="boldBlackBorder noClick">CHALLENGE</span>`)
    document.getElementById("c2_10_VS").style.backgroundColor = "#1e8449"
  }
  else {
    update("c2_10_VS", `<span class="boldBlackBorder noClick">STOP</span>
                       <span class="noClick fontSize08 margin1">Increase fight speed every 5s</span>
                       <span class="noClick fontSize08 margin1">×${format(f(IFight.onFightStats.fightMulti2))} fight speed</span>`)
    document.getElementById("c2_10_VS").style.backgroundColor = "#972a2aff"
  }

  if ((!IFight.youStats.onFight2 && type == null) || IFight.youStats.onFight2 && type == "universalChallengerChallenge") {
    update("c2_10_B_name", `${challengerName}`)
    update("c2_10_B_damage", `<span class="boldBlackBorder">${format(f(challengerDamage))}</span> Damage`)
    update("c2_10_B_life", `<span class="boldBlackBorder">${format(f(challengerLife))}</span> Max Life`)
  }
  update("c2_10_B_part3", `${format(f(challengerLeftLife))}`)
  unlockShow("c2_10_B_part1", true)


  //REWARDS

  for (let x in IUniversalChallenger.universalChallengerRewards) {

    var sel = IUniversalChallenger.universalChallengerRewards[x]
    var sel2 = IUniversalChallengerIn.universalChallengerRewards[x]


    update("c2_10_rewards_" + x, sel2.name)
  }

  if (checkShow("content2_10")) {
    if (!IFight.youStats.onFight2) {

      progressBar(IFight.youStats.leftLife2, IFight.youStats.life, "c2_10_A_part2")
      progressBar(IUniversalChallenger.challengers.universalChallenger.leftLife, IUniversalChallenger.challengers.universalChallenger.life, "c2_10_B_part2")
    }
    else {
      progressBar(IFight.onFightStats.leftLife2, IFight.onFightStats.life, "c2_10_A_part2")
      progressBar(IUniversalChallenger.challengers.universalChallenger.leftLife, IUniversalChallenger.challengers.universalChallenger.life, "c2_10_B_part2")
    }
  }

  //CHALLENGER REWARDS

  for (let x in IUniversalChallenger.universalChallengerRewards) {
    var sel = IUniversalChallenger.universalChallengerRewards[x]
    var sel2 = IUniversalChallengerIn.universalChallengerRewards[x]


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
    var sel2 = IUniversalChallengerIn.universalChallengerChallenges[x]

    update(`c2_10_challenges_${x}_p1`, sel2.name)
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
    var sel2 = IUniversalChallengerIn.universalChallengerChallengesRewards[x]


    update(`c2_10_challenges_${x}_p3`, sel2.name)
  }
}

function visualHunting() {

  //funzione che mostra le cose di content2_6_hunt

  //se non e' stato sbloccato cambia tutto il div in un testo con il requisito.

  //se e' stato sbloccato mostra le informazioni

  for (let x in IFight.normalHunting) {
    var sel = IFight.normalHunting[x]
    var sel2 = IFightIn.normalHunting[x]

    if (sel2.req() == true || sel.unlocked) {
      unlockShow("content2_6_" + x + "_button", true)

      if (checkBuy(sel2.priceIdentity, sel2.price)) {
        document.getElementById("content2_6_" + x + "_button").style.backgroundColor = "#1e8449"
      } else {
        document.getElementById("content2_6_" + x + "_button").style.backgroundColor = "#972a2aff"
      }

      let showL = ""

      if (f(sel.level).equals(f(sel2.showLevel))) {
        showL = ""
      } else {
        showL = `(${format(f(sel2.showLevel))})`
      }

      update("content2_6_" + x + "_name", `<span class="boldBlackBorder">${format(sel.level, 0)} ${showL}</span><div>${sel2.name}</div>`)
      update("content2_6_" + x + "_effect", `<span class="boldBlackBorder column">${format(sel2.effect)}</span> Essence/s`)
      //applica pointer events:  pointer-events: none;

      if (IFight.huntingMulti) {
        var multiText = `Buy Max`
      } else {
        multiText = "Buy 1"
      }

      update("content2_6_" + x + "_req", ``)
      update("content2_6_" + x + "_upgrade", `
                                            <div><div class="boldBlackBorder">${format(sel2.price)}</div> <div>Essence</div></div>`)
    }
    else {
      unlockShow("content2_6_" + x + "_button", false)

      update("content2_6_" + x + "_name", ``)
      update("content2_6_" + x + "_req", `<div>${sel2.reqDescription}</div>`)
      update(`content2_6_` + x + `_effect`, "")
      //applica pointer events:  pointer-events: none;
      update(`content2_6_` + x + `_upgrade`, "")
    }
  }

  for (let x in IFight.normalHuntingRewards) {
    var sel = IFight.normalHuntingRewards[x]
    var sel2 = IFightIn.normalHuntingRewards[x]

    if (sel2.req() == true) {

      unlockShow("content2_6_" + x + "_button", true)

      if (checkBuy(sel2.priceIdentity, sel2.price)) {
        document.getElementById("content2_6_" + x + "_button").style.backgroundColor = "#1e8449"
      } else {
        document.getElementById("content2_6_" + x + "_button").style.backgroundColor = "#972a2aff"
      }

      let showL = ""

      if (f(sel.level).equals(f(sel2.showLevel))) {
        showL = ""
      } else {
        showL = `(${sel2.showLevel})`
      }

      update("content2_6_" + x + "_name", `<span class="boldBlackBorder">${format(sel.level, 0)} ${showL}</span> <div>${sel2.name}</div>`)

      if (IFight.huntingMulti) {
        var multiText = "Buy Max"
      } else {
        multiText = "Buy 1"
      }

      update("content2_6_" + x + "_req", ``)
      update(`content2_6_` + x + `_upgrade`, `
                                          <div ><div class="boldBlackBorder">${format(sel2.price)}</div> <div>Essence</div></div>`)
    }
    else {
      unlockShow("content2_6_" + x + "_button", false)


      update("content2_6_" + x + "_name", ``)
      update("content2_6_" + x + "_req", `<div>${sel2.reqDescription}</div>`)
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
    var sel2 = IUniversalIn.huntEvolution[x]

    if (checkBuy(sel2.priceIdentity, sel2.price, "uniChallenger")) {
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

  if (f(IFight.challengers.baseChallenger.level).eq(f(IFightIn.challengers.baseChallenger.maxLevel))) {
    update("content1_7_ascension_button_text",
      `Ascend To Universe ${f(IUniversal.universe).add(f(1))}`)
  } else {
    update("content1_7_ascension_button_text",

      `Ascension Requires Challenger ${f(IFight.challengers.baseChallenger.level).minus(f(1))} / ${f(IFightIn.challengers.baseChallenger.maxLevel).minus(f(1))}`)
  }

  //Milestones

  for (let x in IUniversal.milestones) {
    var sel = IUniversal.milestones[x]
    var sel2 = IUniversalIn.milestones[x]

    if (sel2.mCheck()) {
      unlockShow(`content1_7_${x}`, true)

      document.getElementById(`content1_7_${x}`).style.backgroundColor = "#004526"

      update(`content1_7_${x}`, `<div>${sel2.mReqDesc}</div>
                 <div>${sel2.mDesc}</div>`)
    } else {
      document.getElementById(`content1_7_${x}`).style.backgroundColor = "#660000"

      unlockShow(`content1_7_${x}`, true)

      update(`content1_7_${x}`, `<div>${sel2.mReqDesc}</div>
                   <div>${sel2.mDesc}</div>`)
    }
  }
}

function visualEnergy() {

  //RESPEC

  update("content2_7_b1_text", `<span class="boldBlackBorder">${IUniversal.ascensionPoint}</span>/<span class="boldBlackBorder">${IUniversal.ascensionPointMax}</span> Ascension Points`)

  //ASCENSION MULTI

  if (IUniversal.energyMulti) {
    update("content2_7_b2_sel", "BUY MAX")
  } else {
    update("content2_7_b2_sel", "BUY 1")
  }

  update("content2_7_b1_b", `RESPEC`)

  //nameloadout

  for (let x in IUniversal.energyLoadout) {
    var sel = document.getElementById("content2_7_l_" + x)
    if (sel.disabled) {
      sel.value = IUniversal.energyLoadout[x].name;
    }

    var sel2 = document.getElementById(`content2_7_l_${x}_b1`)
    if (x != IUniversal.energyLoadoutSel) {
      sel2.style.backgroundColor = ""
    } else if (x == IUniversal.energyLoadoutSel) {
      sel2.style.backgroundColor = "#004526"
      sel2.style.filter = "saturate(2)";
    }
  }

  //IMAGE

  document.getElementById("content2_7_grid_image").style.backgroundImage = `url("images/Energy Version 5.png")`

  //PULSANTI
  for (let i in IUniversal.energyUpgrades) {
    var sel = IUniversal.energyUpgrades[i]
    var sel2 = IUniversalIn.energyUpgrades[i]

    update(`content2_7_${i}_b2`, `
  <div class="relative">
    ${sel2.name}
  </div>
  
  <div class="line"></div>
  <div>
    <div>
      <span class="boldBlackBorder fontSize07">${sel2.effectDesc}</span>
    </div>
    <div class="line2"></div>
    <div>
      <span class="boldBlackBorder fontSize07">${sel2.price}</span> 
      <span class="fontSize07">Ascension Points</span>
    </div>
  </div>
`);

    if (sel.showReq) {
      if (checkBuy(sel2.priceIdentity, sel2.price, "uni")) {
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

function buyTrium(number) {
  if (f(number).equals(f(0))) {
    return "Buy 1"
  }
  if (f(number).equals(f(1))) {
    return "Buy 10"
  }
  if (f(number).equals(f(2))) {
    return "Buy Max"
  }
}

function visualTree() {

  //valutes

  if (f(IUniversal.fire).gt(f(0)) || checkShow("content2_17_valutes_valute1")) {
    unlockShow("content2_17_valutes_valute1", true)
    update("content2_17_valutes_valute1", `<div class="noClick"><div class="noClick">Fire</div><div class="boldBlackBorder noClick">${format(IUniversal.fire)}</div><div class="boldBlackBorder noClick">${format(sec(IUniversal.fireProd))}/s</div></div>`)
  }
  if (f(IUniversal.size).gt(f(0)) || checkShow("content2_17_valutes_valute2")) {
    unlockShow("content2_17_valutes_valute2", true)
    update("content2_17_valutes_valute2", `<div class="noClick"><div class="noClick">Size</div><div class="boldBlackBorder noClick">${format(f(IUniversal.size))}</div><div class="boldBlackBorder noClick">${format(sec(IUniversal.sizeProd))}/s</div></div>`)
  }
  if (f(IUniversal.heat).gt(f(0)) || checkShow("content2_17_valutes_valute3")) {
    unlockShow("content2_17_valutes_valute3", true)
    update("content2_17_valutes_valute3", `<div class="noClick"><div class="noClick">Heat</div><div class="boldBlackBorder noClick">${format(f(IUniversal.heat))}</div><div class="boldBlackBorder noClick">${format(sec(IUniversal.heatProd))}/s</div></div>`)
  }
  if (f(IUniversal.fireShards).gt(f(0)) || checkShow("content2_17_valutes_valute4")) {
    unlockShow("content2_17_valutes_valute4", true)
    update("content2_17_valutes_valute4", `<div class="noClick"><div class="noClick">Fire Shards</div><div class="boldBlackBorder noClick">${format(f(IUniversal.fireShards))}</div><div class="boldBlackBorder noClick">${format(sec(IUniversal.fireShardsProd))}/s</div></div>`)
  }

  //size

  var sel = document.getElementById("content2_17_size")

  sel.style.transform = `scale(${IUniversal.fireTreeSize})`

  //buttons

  var buyMax = buyTrium(IUniversal.buyFireTree)

  update("content2_17_buy", `<div class="noClick">${buyMax}</div>`)

  for (let x in IUniversal.fireTree) {
    let sel = IUniversal.fireTree[x]
    let sel2 = IUniversalIn.fireTree[x]

    if (document.getElementById(`content2_17_${x}_content`) != null) {
      update(`content2_17_${x}_content`, sel2.content);
    }

    if (document.getElementById(`content2_17_${x}_button`) != null) {
      update(`content2_17_${x}_button`, sel2.button);

      if (sel2.checkBuy()) {
        document.getElementById(`content2_17_${x}_button`).style.backgroundColor = "#004526"

      } else {
        document.getElementById(`content2_17_${x}_button`).style.backgroundColor = "#660000"
      }
      if (sel2.maxLevel != Infinity || sel2.maxLevel != null) {

        if (f(sel.level).gte(f(sel2.maxLevel))) {
          document.getElementById(`content2_17_${x}_button`).style.backgroundColor = "#36454f"
        }
      }
    }

    if (document.getElementById(`content2_17_${x}_button2`) != null) {
      update(`content2_17_${x}_button2`, sel2.button2);
      if (sel.active) {
        document.getElementById(`content2_17_${x}_button2`).style.backgroundColor = "#004526"

      } else {
        document.getElementById(`content2_17_${x}_button2`).style.backgroundColor = "#660000"
      }
    }

  }

  //node 29 milestones

  for (let x in IUniversal.fireMilestones) {
    var sel = IUniversal.fireMilestones[x]
    var sel2 = IUniversalIn.fireMilestones[x]

    if (sel2.mCheck()) {

      unlockShow(`content1_17_node29_${x}`, true)

      document.getElementById(`content1_17_node29_${x}`).style.backgroundColor = "#004526"

      update(`content1_17_node29_${x}`, `<div>${sel2.mReqDesc}</div>
                 <div>${sel2.mDesc}</div>`)
    } else {
      document.getElementById(`content1_17_node29_${x}`).style.backgroundColor = "#660000"
      unlockShow(`content1_17_node29_${x}`, true)

      update(`content1_17_node29_${x}`, `<div>${sel2.mReqDesc}</div>
                   <div>${sel2.mDesc}</div>`)
    }
  }
}

function visualWaterTree() {

  //size
  var sel = document.getElementById("content2_19_size")

  sel.style.transform = `scale(${IUniversal.WaterTreeSize})`


  //valutes

  if (f(IUniversal.water).gt(f(0)) || checkShow("content2_19_valutes_valute1")) {
    unlockShow("content2_19_valutes_valute1", true)
    update("content2_19_valutes_valute1", `<div class="noClick"><div class="noClick">Water</div><div class="boldBlackBorder noClick fontSize09">${format(IUniversal.water, 0)}/${format(IUniversal.waterMax, 0)}</div><div class="boldBlackBorder noClick">${format(sec(IUniversal.waterProd))}/s</div></div>`)
  }
  if (f(IUniversal.elisir).gt(f(0)) || checkShow("content2_19_valutes_valute2")) {
    unlockShow("content2_19_valutes_valute2", true)
    update("content2_19_valutes_valute2", `<div class="noClick"><div class="noClick">Elixir</div><div class="boldBlackBorder noClick fontSize09">${format(IUniversal.elisir, 0)}/${format(IUniversal.elisirMax, 0)}</div><div class="boldBlackBorder noClick">${format(sec(IUniversal.elisirProd))}/s</div></div>`)
  }
  if (f(IUniversal.ambrosia).gt(f(0)) || checkShow("content2_19_valutes_valute3")) {
    unlockShow("content2_19_valutes_valute3", true)
    update("content2_19_valutes_valute3", `<div class="noClick"><div class="noClick">Ambrosia</div><div class="boldBlackBorder noClick fontSize09">${format(IUniversal.ambrosia, 0)}/${format(IUniversal.ambrosiaMax, 0)}</div><div class="boldBlackBorder noClick">${format(sec(IUniversal.ambrosiaProd))}/s</div></div>`)
  }
  if (f(IUniversal.erbs).gt(f(0)) || checkShow("content2_19_valutes_valute4")) {
    unlockShow("content2_19_valutes_valute4", true)
    update("content2_19_valutes_valute4", `<div class="noClick"><div class="noClick">Erbs</div><div class="boldBlackBorder noClick fontSize09">${format(IUniversal.erbs, 0)}/${format(IUniversal.erbsMax, 0)}</div><div class="boldBlackBorder noClick">${format(sec(IUniversal.erbsProd))}/s</div></div>`)
  }
  if (f(IUniversal.fluidFire).gt(f(0)) || checkShow("content2_19_valutes_valute5")) {
    unlockShow("content2_19_valutes_valute5", true)
    update("content2_19_valutes_valute5", `<div class="noClick"><div class="noClick">Fluid Fire</div><div class="boldBlackBorder noClick fontSize09">${format(IUniversal.fluidFire, 0)}/${format(IUniversal.fluidFireMax, 0)}</div><div class="boldBlackBorder noClick">${format(sec(IUniversal.fluidFireProd))}/s</div></div>`)
  }
  if (f(IUniversal.waterGem).gt(f(0)) || checkShow("content2_19_valutes_valute6")) {
    unlockShow("content2_19_valutes_valute6", true)
    update("content2_19_valutes_valute6", `<div class="noClick"><div class="noClick">Water Gem</div><div class="boldBlackBorder noClick fontSize09">${format(IUniversal.waterGem, 0)}/${format(IUniversal.waterGemMax, 0)}</div><div class="boldBlackBorder noClick">${format(sec(IUniversal.waterGemProd))}/s</div></div>`)
  }
  if (f(IUniversal.pyroFrost).gt(f(0)) || checkShow("content2_19_valutes_valute7")) {
    unlockShow("content2_19_valutes_valute7", true)
    update("content2_19_valutes_valute7", `<div class="noClick"><div class="noClick">Pyrofrost</div><div class="boldBlackBorder noClick fontSize09">${format(IUniversal.pyroFrost, 0)}/${format(IUniversal.pyroFrostMax, 0)}</div><div class="boldBlackBorder noClick">${format(sec(IUniversal.pyroFrostProd))}/s</div></div>`)
  }


  //Pools

  //Water
  var sel = document.getElementById("content2_19_circle1_fill");

  var fill = f(IUniversal.water).dividedBy(f(IUniversal.waterMax)).mul(f(100));

  sel.style.background = `linear-gradient(to top, #2ee3ff ${fill}%, #14656b ${fill - 10}%)`;

  //Elisir
  var sel = document.getElementById("content2_19_circle2_fill");

  var fill = f(IUniversal.elisir).dividedBy(f(IUniversal.elisirMax)).mul(f(100));

  sel.style.background = `linear-gradient(to top, #bd2effff ${fill}%, #4b146bff ${fill - 10}%)`;

  //ambrosia

  var sel = document.getElementById("content2_19_circle3_fill");

  var fill = f(IUniversal.ambrosia).dividedBy(f(IUniversal.ambrosiaMax)).mul(f(100));

  sel.style.background = `linear-gradient(to top, #ffce2eff ${fill}%, #6b5414ff ${fill - 10}%)`;

  //buttons

  var buyMax = buyTrium(IUniversal.buyWaterTree)

  update("content2_19_buy", `<div class="noClick">${buyMax}</div>`)

  for (let x in IUniversal.waterTree) {
    let sel = IUniversal.waterTree[x]
    let sel2 = IUniversalIn.waterTree[x]

    if (document.getElementById(`content2_19_${x}_content`) != null) {
      update(`content2_19_${x}_content`, sel2.content);
    }

    if (document.getElementById(`content2_19_${x}_button`) != null) {
      update(`content2_19_${x}_button`, sel2.button);
      if (sel2.checkBuy()) {
        document.getElementById(`content2_19_${x}_button`).style.backgroundColor = "#004526"

      } else {
        document.getElementById(`content2_19_${x}_button`).style.backgroundColor = "#660000"
      }
      if (sel2.maxLevel != Infinity || sel2.maxLevel != null) {

        if (f(sel.level).gte(f(sel2.maxLevel))) {
          document.getElementById(`content2_19_${x}_button`).style.backgroundColor = "#36454f"
        }
      }
    }

    if (document.getElementById(`content2_19_${x}_button2`) != null) {
      update(`content2_19_${x}_button2`, sel2.button2);
      if (sel.active) {
        document.getElementById(`content2_19_${x}_button2`).style.backgroundColor = "#004526"

      } else {
        document.getElementById(`content2_19_${x}_button2`).style.backgroundColor = "#660000"
      }
    }

  }

  //potion Upgrade

  //potion fusion


  if (IUniversalIn.inventoryStorage[IUniversal.potionFusion.item1.key]) {
    IUniversalIn.potionFusionVisual1 = IUniversalIn.inventoryStorage[IUniversal.potionFusion.item1.key].content2
  } else {
    IUniversalIn.potionFusionVisual1 = ""
  }

  var { newPotion, newPotionIn } = potionFusion();

  if (newPotion && newPotionIn) {
    IUniversalIn.potionFusionVisual2 = potionVisual(newPotion, newPotionIn);
  } else {
    IUniversalIn.potionFusionVisual2 = ""
  }

  if (IUniversalIn.inventoryStorage[IUniversal.potionFusion.item2.key]) {
    IUniversalIn.potionFusionVisual3 = IUniversalIn.inventoryStorage[IUniversal.potionFusion.item2.key].content2
  } else {
    IUniversalIn.potionFusionVisual3 = ""
  }

  //potionUpgrade

  var { newPotion, newPotionIn } = potionUpgrade();

  if (newPotion && newPotionIn && f(newPotion.level).lte(f(newPotionIn.maxLevel))) {
    IUniversalIn.potionUpgradeVisual1 = potionVisual(newPotion, newPotionIn);
  } else {
    if (IUniversalIn.inventoryStorage[IUniversal.potionUpgrade.item1.key]) {
      IUniversalIn.potionUpgradeVisual1 = IUniversalIn.inventoryStorage[IUniversal.potionUpgrade.item1.key].content2
    } else {
      IUniversalIn.potionUpgradeVisual1 = ""
    }
  }
}

function upgradePotion(element, level, merges) {
  element.level = level
  element.merges = merges
}


function visualInventoryWater() {

  const gridContainer = document.getElementById("content2_19_grid1");

  addElement("void");

  const styles = getComputedStyle(gridContainer);

  const numColumns = styles.gridTemplateColumns.trim().split(/\s+/).length;
  const numRows = styles.gridTemplateRows.trim().split(/\s+/).length;

  for (let y = 1; y <= numRows; y++) {
    for (let x = 1; x <= numColumns; x++) {

      const cellKey = `c${y}r${x}`
      addObjectToSpace(y, x, cellKey, "potion_inventory")

    }
  }

  for (let x in IUniversal.equipment) {
    addObjectToSpace(null, null, x, "potion_equipment")
  }

  for (let x in IUniversal.potionUpgrade) {
    addObjectToSpace(null, null, x, "potion_upgrade")
  }

  for (let x in IUniversal.potionDelete) {
    addObjectToSpace(null, null, x, "potion_delete")
  }

  for (let x in IUniversal.potionSource) {
    addObjectToSpace(null, null, x, "potion_source")
  }

  for (let x in IUniversal.potionFusion) {
    addObjectToSpace(null, null, x, "potion_fusion")
  }

  if (IUniversal.selPotion != null && IUniversal.selPotion != undefined && IUniversal.selPotion != "" && IUniversalIn.inventoryStorage[IUniversal.selPotion]) {
    update("content2_19_potion_info", IUniversalIn.inventoryStorage[IUniversal.selPotion].content2)
  } else {
    update("content2_19_potion_info", "")
  }

}

function returnPotionEquipStatus(element) {
  var letters = ""
  for (let x in IUniversal.equipment) {
    var sel = IUniversal.equipment[x]
    if (element == sel.key) {
      letters += "E"
    }
  }

  for (let x in IUniversal.potionSource) {
    var sel = IUniversal.potionSource[x]
    if (element == sel.key) {
      letters += "S"
    }
  }

  for (let x in IUniversal.potionUpgrade) {
    var sel = IUniversal.potionUpgrade[x]
    if (element == sel.key) {
      letters += "U"
    }
  }

  for (let x in IUniversal.potionFusion) {
    var sel = IUniversal.potionFusion[x]
    if (element == sel.key) {
      letters += "F"
    }
  }

  if (letters == "") {
    return ""
  } else {
    return `<div class="bottomLeft absolute padding2 boldBlackBorder">${letters}</div>`
  }
}

function addObjectToSpace(row, col, key, space) {

  if (space == "potion_inventory") {
    const gridContainer = document.getElementById("content2_19_grid1");
    const existing = document.getElementById(`content2_19_grid1_${col}${row}`);

    if (existing) {
      if (IUniversal.inventory[key].key != null || IUniversal.inventory[key].key != undefined && IUniversalIn.inventoryStorage[IUniversal.inventory[key].key]) {
        var element = IUniversalIn.inventoryStorage[IUniversal.inventory[key].key].content
      } else {
        element = null
      }

      existing.textContent = ""
      update(`content2_19_grid1_${col}${row}`, element)

      if (IUniversal.inventory[key].key == null) {
        existing.setAttribute("draggable", "false");
      } else {
        existing.setAttribute("draggable", "true");
      }
      return;
    }


    const div = document.createElement('div');
    div.id = `content2_19_grid1_${col}${row}`;
    div.className = "item";
    div.classList.add("defaultStyle");
    div.classList.add("roundedEdges");
    div.classList.add("backgroundBlue2");
    div.classList.add("width100");
    div.classList.add("height100");


    div.style.gridColumnStart = col;
    div.style.gridRowStart = row;

    // Wrap the text in a span and disable pointer events
    const label = document.createElement('span');

    label.textContent = ""
    label.style.pointerEvents = 'none';  // 👈 Makes the text not interfere with drag/drop
    div.appendChild(label);

    var stringKey = `'${key}'`

    draggableSet(div, `IUniversal.inventory[${stringKey}]`, `IUniversal.inventory[${stringKey}]`, "inventory")

    gridContainer.appendChild(div);
  }

  if (space == "potion_equipment") {
    const gridContainer = document.getElementById(`content2_19_potion_${key}`);
    const existing = document.getElementById(`content2_19_potion_${key}_div`);

    if (existing) {
      if (IUniversal.equipment[key].key && IUniversalIn.inventoryStorage[IUniversal.equipment[key].key]) {
        var element = IUniversalIn.inventoryStorage[IUniversal.equipment[key].key].content
      } else {
        element = null
      }


      existing.textContent = ""
      update(`content2_19_potion_${key}_div`, element)

      if (IUniversal.equipment[key].key == null) {
        existing.setAttribute("draggable", "false");
      } else {
        existing.setAttribute("draggable", "true");
      }
      return;
    }

    const div = document.createElement('div');
    div.id = `content2_19_potion_${key}_div`;
    div.className = "item";
    div.classList.add("defaultStyle");
    div.classList.add("centerDiv");
    div.classList.add("red");
    div.classList.add("width100");
    div.classList.add("height100");
    div.classList.add("roundedEdges");
    div.classList.add("backgroundImage");


    div.style.backgroundImage = `url(${IUniversalIn.potionImages[IUniversalIn.equipment[key].type].image})`;

    const label = document.createElement('span');

    label.textContent = IUniversal.equipment[key].key
    label.style.pointerEvents = 'none';
    div.appendChild(label);

    var stringKey = `'${key}'`

    draggableSet(div, `IUniversal.equipment[${stringKey}]`, `IUniversalIn.equipment[${stringKey}]`, "equipmentPotion")

    gridContainer.appendChild(div);

  }

  if (space == "potion_upgrade") {
    const gridContainer = document.getElementById(`content2_19_potionUpgrade_${key}`);
    const existing = document.getElementById(`content2_19_potionUpgrade_${key}_div`);

    if (existing) {
      if (IUniversal.potionUpgrade[key].key) {
        var element = IUniversalIn.inventoryStorage[IUniversal.potionUpgrade[key].key].content
      } else {
        element = ""
      }

      existing.textContent = ""
      update(`content2_19_potionUpgrade_${key}_div`, element)

      if (IUniversal.potionUpgrade[key].key == null) {
        existing.setAttribute("draggable", "false");
      } else {
        existing.setAttribute("draggable", "true");
      }
      return;
    }

    const div = document.createElement('div');
    div.id = `content2_19_potionUpgrade_${key}_div`;
    div.className = "item";
    div.classList.add("defaultStyle");
    div.classList.add("centerDiv");
    div.classList.add("red");
    div.classList.add("width100");
    div.classList.add("height100");
    div.classList.add("roundedEdges");


    const label = document.createElement('span');

    label.textContent = IUniversal.potionUpgrade[key].key
    label.style.pointerEvents = 'none';
    div.appendChild(label);

    var stringKey = `'${key}'`

    draggableSet(div, `IUniversal.potionUpgrade[${stringKey}]`, `IUniversalIn.potionUpgrade[${stringKey}]`, "volatile")

    gridContainer.appendChild(div);


  }

  if (space == "potion_delete") {
    const existing = document.getElementById(`content2_19_potionDelete_div`);


    if (existing) {

      existing.textContent = "DELETE"
      existing.setAttribute("draggable", "false");

      return;
    }



    var cont = document.getElementById("content2_19_potionDelete")

    const div = document.createElement('div');
    div.id = `content2_19_potionDelete_div`;
    div.className = "item";
    div.classList.add("defaultStyle");
    div.classList.add("centerDiv");

    div.classList.add("roundedEdges");



    div.style.gridColumnStart = col;
    div.style.gridRowStart = row;

    // Wrap the text in a span and disable pointer events
    const label = document.createElement('span');

    label.textContent = ""
    label.style.pointerEvents = 'none';  // 👈 Makes the text not interfere with drag/drop
    div.appendChild(label);

    var stringKey = `'${key}'`

    draggableSet(div, `IUniversal.potionDelete[${stringKey}]`, `IUniversal.potionDelete[${stringKey}]`, "delete")

    cont.appendChild(div);
  }

  if (space == "potion_source") {

    const gridContainer = document.getElementById(`content2_19_potionUpgrade_content2_${key}`);
    if (gridContainer) {
      const existing = document.getElementById(`content2_19_potionUpgrade_content2_${key}_div`);
      if (existing) {
        if (IUniversal.potionSource[key].key != null || IUniversal.potionSource[key].key != undefined && IUniversalIn.inventoryStorage[IUniversal.potionSource[key].key]) {
          var element = IUniversalIn.inventoryStorage[IUniversal.potionSource[key].key].content
        } else {
          element = null
        }

        existing.textContent = ""
        update(`content2_19_potionUpgrade_content2_${key}_div`, element)

        if (IUniversal.potionSource[key].key == null) {
          existing.setAttribute("draggable", "false");
        } else {
          existing.setAttribute("draggable", "true");
        }
        return;
      }

      const div = document.createElement('div');
      div.id = `content2_19_potionUpgrade_content2_${key}_div`;
      div.className = "item";
      div.classList.add("defaultStyle");
      div.classList.add("centerDiv");
      div.classList.add("red");
      div.classList.add("width100");
      div.classList.add("height100");
      div.classList.add("roundedEdges");
      div.classList.add("backgroundImage");

      div.style.backgroundImage = `url(${IUniversalIn.potionImages[IUniversalIn.potionSource[key].type].image})`;


      div.style.gridColumnStart = col;
      div.style.gridRowStart = row;

      // Wrap the text in a span and disable pointer events
      const label = document.createElement('span');

      label.textContent = ""
      label.style.pointerEvents = 'none';  // 👈 Makes the text not interfere with drag/drop
      div.appendChild(label);

      var stringKey = `'${key}'`

      draggableSet(div, `IUniversal.potionSource[${stringKey}]`, `IUniversalIn.potionSource[${stringKey}]`, "potionSource")

      gridContainer.appendChild(div);
    }
  }

  if (space == "potion_fusion") {
    const gridContainer = document.getElementById(`content2_19_potionUpgrade_content3_${key}`);
    const existing = document.getElementById(`content2_19_potionUpgrade_content3_${key}_div`);

    if (existing) {
      if (IUniversal.potionFusion[key].key) {
        var element = IUniversalIn.inventoryStorage[IUniversal.potionFusion[key].key].content
      } else {
        element = ""
      }

      existing.textContent = ""
      update(`content2_19_potionUpgrade_content3_${key}_div`, element)

      var item1 = document.getElementById(`content2_19_potionUpgrade_content3_item2_div`);
      if (IUniversal.potionFusion.item1.key && !IUniversal.potionFusion.item2.key) {
        item1.style.backgroundImage = `url(${IUniversalIn.potionImages[IUniversalIn.inventoryStorage[IUniversal.potionFusion.item1.key].type].image})`;
      } else {
        item1.style.backgroundImage = "";
      }

      var item2 = document.getElementById(`content2_19_potionUpgrade_content3_item1_div`);
      if (IUniversal.potionFusion.item2.key && !IUniversal.potionFusion.item1.key) {
        item2.style.backgroundImage = `url(${IUniversalIn.potionImages[IUniversalIn.inventoryStorage[IUniversal.potionFusion.item2.key].type].image})`;
      } else {
        item2.style.backgroundImage = "";
      }

      if (IUniversal.potionFusion[key].key == null) {
        existing.setAttribute("draggable", "false");
      } else {
        existing.setAttribute("draggable", "true");
      }
      return;
    }

    const div = document.createElement('div');
    div.id = `content2_19_potionUpgrade_content3_${key}_div`;
    div.className = "item";
    div.classList.add("defaultStyle");
    div.classList.add("centerDiv");
    div.classList.add("red");
    div.classList.add("width100");
    div.classList.add("height100");
    div.classList.add("roundedEdges");
    div.classList.add("backgroundImage");


    const label = document.createElement('span');

    label.textContent = IUniversal.potionFusion[key].key
    label.style.pointerEvents = 'none';
    div.appendChild(label);

    var stringKey = `'${key}'`

    draggableSet(div, `IUniversal.potionFusion[${stringKey}]`, `IUniversalIn.potionFusion[${stringKey}]`, "potionFusion")

    gridContainer.appendChild(div);

  }
}

function visualAttributes() {

  update("content2_11_grid_b1", `<div class="noClick"><span class="boldBlackBorder">${IUniversalIn.attributesLabels.crit.name}</span></div>`)
  update("content2_11_grid_b2", `<div class="noClick"><span class="boldBlackBorder">${IUniversalIn.attributesLabels.lifeRegeneration.name}</span></div>`)
  update("content2_11_grid_b4", `<div class="noClick"><span class="boldBlackBorder">${IUniversalIn.attributesLabels.defencePenetration.name}</span></div>`)
  update("content2_11_grid_b5", `<div class="noClick"><span class="boldBlackBorder">${IUniversalIn.attributesLabels.defence.name}</span></div>`)
  update("content2_11_grid_b7", `<div class="noClick"><span class="boldBlackBorder">${IUniversalIn.attributesLabels.lifeSteal.name}</span></div>`)
  update("content2_11_grid_b8", `<div class="noClick"><span class="boldBlackBorder">${IUniversalIn.attributesLabels.shield.name}</span></div>`)

  update("content2_11_grid_c1", `<div class="noClick">${IUniversalIn.attributes.critPointsName}</div><div class="noClick">${IUniversalIn.attributes.attributeBonus1.name}</div>`)
  update("content2_11_grid_c2", `<div class="noClick">${IUniversalIn.attributes.regenerationPointsName}</div><div class="noClick">${IUniversalIn.attributes.attributeBonus2.name}</div>`)
  update("content2_11_grid_c4", `<div class="noClick">${IUniversalIn.attributes.defencePenetrationPointsName}</div><div class="noClick">${IUniversalIn.attributes.attributeBonus4.name}</div>`)
  update("content2_11_grid_c5", `<div class="noClick">${IUniversalIn.attributes.defencePointsName}</div><div class="noClick">${IUniversalIn.attributes.attributeBonus3.name}</div>`)
  update("content2_11_grid_c7", `<div class="noClick">${IUniversalIn.attributes.lifeStealPointsName}</div><div class="noClick">${IUniversalIn.attributes.attributeBonus5.name}</div>`)
  update("content2_11_grid_c8", `<div class="noClick">${IUniversalIn.attributes.shieldPointsName}</div><div class="noClick">${IUniversalIn.attributes.attributeBonus6.name}</div>`)

  //IMAGE

  //ATTRIBUTES UNLOCK

  update("content2_11_grid_b3", `<div class="noClick">${IUniversalIn.attributes.attributesUnlock1.name}</div>`)
  update("content2_11_grid_b6", `<div class="noClick">${IUniversalIn.attributes.attributesUnlock2.name}</div>`)
  update("content2_11_grid_b9", `<div class="noClick">${IUniversalIn.attributes.attributesUnlock3.name}</div>`)

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

  if (IUniversalIn.attributes.attributesUnlock1.req()) {
    document.getElementById(`content2_11_grid_b3`).style.backgroundColor = "#004526"
  } else {
    document.getElementById(`content2_11_grid_b3`).style.backgroundColor = "#660000"
  }

  if (IUniversalIn.attributes.attributesUnlock2.req()) {
    document.getElementById(`content2_11_grid_b6`).style.backgroundColor = "#004526"
  } else {
    document.getElementById(`content2_11_grid_b6`).style.backgroundColor = "#660000"
  }

  if (IUniversalIn.attributes.attributesUnlock3.req()) {
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

  update("content2_11_grid_b1_cont_1_1", `<div class="centerDiv">${format(f(IUniversal.attributes.critRate.level), 0)} ${IUniversalIn.attributes.critRate.name}</div>`)


  update("content2_11_grid_b1_cont_b1", `
                                         <div><span class="boldBlackBorder">${format(f(IUniversalIn.attributes.critRate.price), 0)}</span> Universal Shards</div>`)



  update("content2_11_grid_b1_cont_2_1", `<div class="centerDiv">${format(f(IUniversal.attributes.critDamage.level), 0)} ${IUniversalIn.attributes.critDamage.name}</div>`)

  update("content2_11_grid_b1_cont_b2", `
                                         <div><span class="boldBlackBorder">${format(f(IUniversalIn.attributes.critDamage.price), 0)}</span> Universal Shards</div>`)

  update("content2_11_grid_b1_cont_critPoints", `<div>${format(f(IUniversal.attributes.critPoints))} Critical Points</div>`)

  if (checkBuy(IUniversalIn.attributes.critRate.priceIdentity, IUniversalIn.attributes.critRate.price, "uniChallenger")) {
    document.getElementById("content2_11_grid_b1_cont_b1").style.backgroundColor = "#1e8449"
  } else {
    document.getElementById("content2_11_grid_b1_cont_b1").style.backgroundColor = "#972a2aff"
  }

  if (checkBuy(IUniversalIn.attributes.critDamage.priceIdentity, IUniversalIn.attributes.critDamage.price, "uniChallenger")) {
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

  update("content2_11_grid_b2_cont_1_d2", `${IUniversalIn.attributes.regeneration.name}`)


  update("content2_11_grid_b2_cont_2_1", `<div class="centerDiv">${format(f(IUniversal.attributes.maxRegeneration.level), 0)} ${IUniversalIn.attributes.maxRegeneration.name}</div>`)


  update("content2_11_grid_b2_cont_b2", `
                                         <div><span class="boldBlackBorder">${format(f(IUniversalIn.attributes.maxRegeneration.price), 0)}</span> Universal Shards</div>`)

  update("content2_11_grid_b2_cont_regenerationPoints", `<div>${format(f(IUniversal.attributes.regenerationPoints))} Regeneration Points</div>`)

  if (checkBuy(IUniversalIn.attributes.maxRegeneration.priceIdentity, IUniversalIn.attributes.maxRegeneration.price, "uniChallenger")) {
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

  update("content2_11_grid_b4_cont_1_d2", `${IUniversalIn.attributes.defencePenetration.name}`)



  update("content2_11_grid_b4_cont_2_1", `<div class="centerDiv">${format(f(IUniversal.attributes.maxDefencePenetration.level), 0)} ${IUniversalIn.attributes.maxDefencePenetration.name}</div>`)

  update("content2_11_grid_b4_cont_b2", `
                                         <div><span class="boldBlackBorder">${format(f(IUniversalIn.attributes.maxDefencePenetration.price), 0)}</span> Universal Nodes</div>`)

  update("content2_11_grid_b4_cont_defencePenetrationPoints", `<div>${format(f(IUniversal.attributes.defencePenetrationPoints))} Defence Penetration Points</div>`)

  if (checkBuy(IUniversalIn.attributes.maxDefencePenetration.priceIdentity, IUniversalIn.attributes.maxDefencePenetration.price, "uniChallenger")) {
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

  update("content2_11_grid_b5_cont_1_d1", `<div class="centerDiv">Bet&nbsp <span class="boldBlackBorder">${format(f(IUniversalIn.attributes.defence.price))}</span>&nbspUniversal Nodes To Level Up Defence</div>
                                           <div class="centerDiv">Odds&nbsp<span class="boldBlackBorder">${format(f(IUniversalIn.attributes.defence.odds).mul(f(100)))}</span>%`)
  update("content2_11_grid_b5_cont_1_b1_text", `<div>${multiText}</div><div>BET</div>`)

  update("content2_11_grid_b5_cont_1_d2", `<span class="boldBlackBorder">${format(f(IUniversal.attributes.defence.level), 0)}</span> Defence`)



  update("content2_11_grid_b5_cont_2_1", `<div class="centerDiv">${format(f(IUniversal.attributes.maxDefence.level), 0)} ${IUniversalIn.attributes.maxDefence.name}</div>`)

  update("content2_11_grid_b5_cont_b2", `
                                         <div><span class="boldBlackBorder">${format(f(IUniversalIn.attributes.maxDefence.price), 0)}</span> Universal Nodes</div>`)

  update("content2_11_grid_b5_cont_defencePoints", `<div>${format(f(IUniversal.attributes.defencePoints))} Defence Points</div>`)

  if (checkBuy(IUniversalIn.attributes.defence.priceIdentity, IUniversalIn.attributes.defence.price, "uniChallenger")) {
    document.getElementById("content2_11_grid_b5_cont_1_b1_text").style.backgroundColor = "#1e8449"
  } else {
    document.getElementById("content2_11_grid_b5_cont_1_b1_text").style.backgroundColor = "#972a2aff"
  }

  if (checkBuy(IUniversalIn.attributes.maxDefence.priceIdentity, IUniversalIn.attributes.maxDefence.price, "uniChallenger")) {
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
    update("content2_11_grid_b7_cont_b1", `<div class="noClick">ON</div>`)
    document.getElementById(`content2_11_grid_b7_cont_b1`).style.backgroundColor = "#004526"
  } else {
    update("content2_11_grid_b7_cont_b1", `<div class="noClick">OFF</div>`)
    document.getElementById(`content2_11_grid_b7_cont_b1`).style.backgroundColor = "#660000"
  }

  update("content2_11_grid_b7_cont_1_2", `Life Steal: <span class="boldBlackBorder">${format(f(IUniversal.attributes.lifeSteal.level))}</span>`)


  update("content2_11_grid_b7_cont_2_1", `<div class="centerDiv">${format(f(IUniversal.attributes.lifeStealMax.level), 0)} ${IUniversalIn.attributes.lifeStealMax.name}</div>`)

  update("content2_11_grid_b7_cont_b2", `
                                         <div><span class="boldBlackBorder">${format(f(IUniversalIn.attributes.lifeStealMax.price), 0)}</span> Universal Cores</div>`)

  update("content2_11_grid_b7_cont_lifeStealPoints", `<div>${format(f(IUniversal.attributes.lifeStealPoints))} Life Steal Points</div>`)

  if (checkBuy(IUniversalIn.attributes.lifeStealMax.priceIdentity, IUniversalIn.attributes.lifeStealMax.price, "uniChallenger")) {
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

  update("content2_11_grid_b8_cont_1_d2", `${IUniversalIn.attributes.shield.name}`)



  update("content2_11_grid_b8_cont_2_1", `<div class="centerDiv">${format(f(IUniversal.attributes.maxShield.level), 0)} ${IUniversalIn.attributes.maxShield.name}</div>`)

  update("content2_11_grid_b8_cont_b2", `
                                         <div><span class="boldBlackBorder">${format(f(IUniversalIn.attributes.maxShield.price), 0)}</span> Universal Cores</div>`)

  update("content2_11_grid_b8_cont_defencePenetrationPoints", `${IUniversalIn.attributes.shieldPointsName}`)


  if (checkBuy(IUniversalIn.attributes.maxShield.priceIdentity, IUniversalIn.attributes.maxShield.price, "uniChallenger")) {
    document.getElementById("content2_11_grid_b8_cont_b2").style.backgroundColor = "#1e8449"
  } else {
    document.getElementById("content2_11_grid_b8_cont_b2").style.backgroundColor = "#972a2aff"
  }
}

//VISUAL LOOP

function setUniversalChallengerLevelAutomation(type) {

  if (type == "universalChallenger") {
    if (f(IUniversal.automation.automation6.selOption).equals(f(0))) {
      IUniversalChallenger.challengers.universalChallenger.level = f(1)
      return
    }

    if (f(IUniversal.automation.automation6.selOption).equals(f(1))) {
      IUniversalChallenger.challengers.universalChallenger.level = f(IUniversalChallenger.challengers.universalChallenger.maxLevel).minus(f(20))
      if (f(IUniversalChallenger.challengers.universalChallenger.level).lt(f(1))) {
        IUniversalChallenger.challengers.universalChallenger.level = f(1)
      }
      return
    }

    if (f(IUniversal.automation.automation6.selOption).equals(f(2))) {
      IUniversalChallenger.challengers.universalChallenger.level = f(IUniversalChallenger.challengers.universalChallenger.maxLevel).minus(f(10))
      if (f(IUniversalChallenger.challengers.universalChallenger.level).lt(f(1))) {
        IUniversalChallenger.challengers.universalChallenger.level = f(1)
      }
      return
    }

    if (f(IUniversal.automation.automation6.selOption).equals(f(3))) {
      IUniversalChallenger.challengers.universalChallenger.level = f(IUniversalChallenger.challengers.universalChallenger.maxLevel).minus(f(5))
      if (f(IUniversalChallenger.challengers.universalChallenger.level).lt(f(1))) {
        IUniversalChallenger.challengers.universalChallenger.level = f(1)
      }
      return
    }
  }

  if (type == "universalChallengerChallenge1") {
    if (f(IUniversal.automation.automation6.selOption).equals(f(0))) {
      IUniversalChallenger.challengers.universalChallenger.level = f(1)
      return
    }

    if (f(IUniversal.automation.automation6.selOption).equals(f(1))) {
      IUniversalChallenger.challengers.universalChallenger.level = f(IUniversalChallenger.universalChallengerChallenges.c1.maxLevel).minus(f(20))
      if (f(IUniversalChallenger.challengers.universalChallenger.level).lt(f(1))) {
        IUniversalChallenger.challengers.universalChallenger.level = f(1)
      }
      return
    }

    if (f(IUniversal.automation.automation6.selOption).equals(f(2))) {
      IUniversalChallenger.challengers.universalChallenger.level = f(IUniversalChallenger.universalChallengerChallenges.c1.maxLevel).minus(f(10))
      if (f(IUniversalChallenger.challengers.universalChallenger.level).lt(f(1))) {
        IUniversalChallenger.challengers.universalChallenger.level = f(1)
      }
      return
    }

    if (f(IUniversal.automation.automation6.selOption).equals(f(3))) {
      IUniversalChallenger.challengers.universalChallenger.level = f(IUniversalChallenger.universalChallengerChallenges.c1.maxLevel).minus(f(5))
      if (f(IUniversalChallenger.challengers.universalChallenger.level).lt(f(1))) {
        IUniversalChallenger.challengers.universalChallenger.level = f(1)
      }
      return

    }
  }

  if (type == "universalChallengerChallenge2") {
    if (f(IUniversal.automation.automation6.selOption).equals(f(0))) {
      IUniversalChallenger.challengers.universalChallenger.level = f(1)
      return
    }

    if (f(IUniversal.automation.automation6.selOption).equals(f(1))) {
      IUniversalChallenger.challengers.universalChallenger.level = f(IUniversalChallenger.universalChallengerChallenges.c2.maxLevel).minus(f(20))
      if (f(IUniversalChallenger.challengers.universalChallenger.level).lt(f(1))) {
        IUniversalChallenger.challengers.universalChallenger.level = f(1)
      }
      return
    }

    if (f(IUniversal.automation.automation6.selOption).equals(f(2))) {
      IUniversalChallenger.challengers.universalChallenger.level = f(IUniversalChallenger.universalChallengerChallenges.c2.maxLevel).minus(f(10))
      if (f(IUniversalChallenger.challengers.universalChallenger.level).lt(f(1))) {
        IUniversalChallenger.challengers.universalChallenger.level = f(1)
      }
      return
    }

    if (f(IUniversal.automation.automation6.selOption).equals(f(3))) {
      IUniversalChallenger.challengers.universalChallenger.level = f(IUniversalChallenger.universalChallengerChallenges.c2.maxLevel).minus(f(5))
      if (f(IUniversalChallenger.challengers.universalChallenger.level).lt(f(1))) {
        IUniversalChallenger.challengers.universalChallenger.level = f(1)
      }
      return
    }
  }

}

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

    var fightMultiCont = 0
    IFight.onFightStats.fightMulti1 = f(1)

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

        if (fightMultiCont >= (5000 / delay)) {
          IFight.onFightStats.fightMulti1 = f(IFight.onFightStats.fightMulti1).mul(f(2))
          fightMultiCont = 0
        } else {
          fightMultiCont = fightMultiCont + 1;
        }

        IFight.youStats.leftLife = IFight.onFightStats.leftLife;

        //danno tuo
        var playerDamage = f(IFight.onFightStats.damage).mul(f(tickSpeed)).mul(f(delay).dividedBy(f(50))).mul(f(IFight.onFightStats.fightMulti1));
        //danno nemico
        var enemyDamage = f(IFightIn.challengers.baseChallenger.damage).mul(f(tickSpeed)).mul(f(delay).dividedBy(f(50))).mul(f(IFight.onFightStats.fightMulti1));

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
              await sleep(1000);
              flashFight("baseChallengerR")
              IFight.youStats.onFight1 = false;
              return
            }

            rewardSet("base")
            visualChallenger()
            flashFight("baseChallengerW")
            await sleep(1000);
            flashFight("baseChallengerR")
            IFight.youStats.onFight1 = false;

            return;
          } else {
            visualChallenger()
            flashFight("baseChallengerL")
            await sleep(1000);
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
            await sleep(1000);
            flashFight("baseChallengerR")
            IFight.youStats.onFight1 = false;
            return
          }

          rewardSet("base")
          visualChallenger()
          flashFight("baseChallengerW")
          await sleep(1000);
          flashFight("baseChallengerR")
          IFight.youStats.onFight1 = false;

          return;
        }

        if (f(IFight.onFightStats.leftLife).lessThan(f(0))) {
          visualChallenger()
          flashFight("baseChallengerL")
          await sleep(1000);
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
      setUniversalChallengerLevelAutomation("universalChallenger")
    };

    if (signal?.aborted) {
      IFight.youStats.onFight2 = false;
      setUniversalChallengerLevelAutomation("universalChallenger")
      return;
    }

    signal?.addEventListener("abort", abortHandler2);

    IFight.youStats.onFight2 = true;

    setUniversalChallengerLevelAutomation("universalChallenger")

    try {
      while (IFight.youStats.onFight2) {

        valuesSetter();
        IFight.onFightStats.life = IFight.youStats.life;
        IFight.onFightStats.leftLife2 = IFight.youStats.leftLife2;
        IFight.onFightStats.damage = IFight.youStats.damage;

        IUniversalChallenger.challengers.universalChallenger.leftLife = IUniversalChallenger.challengers.universalChallenger.life;

        var fightMultiCont = 0
        IFight.onFightStats.fightMulti2 = f(1)

        visualChallenger("universalChallengerChallenge")
        await sleep(1000);
        if (f(IUniversalChallenger.challengers.universalChallenger.leftLife).greaterThan(0) && f(IFight.onFightStats.leftLife2).greaterThan(0)) {
          while (f(IUniversalChallenger.challengers.universalChallenger.leftLife).greaterThan(0) && f(IFight.onFightStats.leftLife2).greaterThan(0)) {

            if (signal?.aborted) {
              IFight.youStats.onFight2 = false;
              return;
            }
            await sleep(delay);

            if (fightMultiCont >= (5000 / delay)) {
              IFight.onFightStats.fightMulti2 = f(IFight.onFightStats.fightMulti2).mul(f(2))
              fightMultiCont = 0
            } else {
              fightMultiCont = fightMultiCont + 1;
            }


            IFight.youStats.leftLife2 = IFight.onFightStats.leftLife2;

            const playerDamage = f(IFight.onFightStats.damage).mul(f(tickSpeed)).mul(f(delay).dividedBy(50)).mul(f(IFight.onFightStats.fightMulti2));
            const enemyDamage = f(IUniversalChallenger.challengers.universalChallenger.damage).mul(f(tickSpeed)).mul(f(delay).dividedBy(50)).mul(f(IFight.onFightStats.fightMulti2));

            IUniversalChallenger.challengers.universalChallenger.leftLife = f(IUniversalChallenger.challengers.universalChallenger.leftLife).minus(playerDamage);
            IFight.onFightStats.leftLife2 = f(IFight.onFightStats.leftLife2).minus(enemyDamage);

            if (f(IFight.onFightStats.leftLife2).lt(f(0)) && f(IUniversalChallenger.challengers.universalChallenger.leftLife).lt(f(0))) {
              if (f(IFight.onFightStats.leftLife2).gte(f(IUniversalChallenger.challengers.universalChallenger.leftLife))) {
                rewardSet("universalBase");
                valuesSetter();
                visualChallenger();
                flashFight("universalChallengerW")
                await sleep(1000);
                break; // Passa al round successivo
              } else {

                rewardSet("lostUniversalBase");
                IFight.youStats.onFight2 = false;
                valuesSetter();
                visualChallenger();
                flashFight("universalChallengerL")
                await sleep(1000);
                flashFight("universalChallengerR")
                return;
              }
            }

            if (f(IUniversalChallenger.challengers.universalChallenger.leftLife).lessThanOrEqualTo(0)) {
              rewardSet("universalBase");
              valuesSetter();
              visualChallenger();
              flashFight("universalChallengerW")
              await sleep(1000);
              flashFight("universalChallengerR")
              break; // Passa al round successivo
            }

            if (f(IFight.onFightStats.leftLife2).lessThanOrEqualTo(0)) {
              rewardSet("lostUniversalBase");
              IFight.youStats.onFight2 = false;
              valuesSetter();
              visualChallenger();
              flashFight("universalChallengerL")
              await sleep(1000);
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
      setUniversalChallengerLevelAutomation("universalChallenger")
    };

    if (signal?.aborted) {
      IFight.youStats.onFight2 = false;
      setUniversalChallengerLevelAutomation("universalChallenger")
      return;
    }

    signal?.addEventListener("abort", abortHandler2);

    IFight.youStats.onFight2 = true;

    setUniversalChallengerLevelAutomation("universalChallengerChallenge1")

    try {
      while (IFight.youStats.onFight2) {
        // Resetta le vite per un nuovo round

        valuesSetterDinamic("universalChallengerChallenge1")
        IFight.onFightStats.life = IFight.youStats.life;
        IFight.onFightStats.leftLife2 = IFight.onFightStats.life;
        IFight.onFightStats.damage = IFight.youStats.damage;
        valuesSetter();

        var fightMultiCont = 0
        IFight.onFightStats.fightMulti2 = f(1)


        IFight.youStats.leftLife2 = IFight.onFightStats.leftLife2

        IUniversalChallenger.challengers.universalChallenger.leftLife = IUniversalChallenger.challengers.universalChallenger.life;

        visualChallenger("universalChallengerChallenge")
        IUniversalChallenger.challengers.universalChallenger.leftLife = IUniversalChallenger.challengers.universalChallenger.life;
        await sleep(1000);
        if (f(IUniversalChallenger.challengers.universalChallenger.leftLife).greaterThan(0) && f(IFight.onFightStats.leftLife2).greaterThan(0)) {
          while (f(IUniversalChallenger.challengers.universalChallenger.leftLife).greaterThan(0) && f(IFight.onFightStats.leftLife2).greaterThan(0)) {
            if (signal?.aborted) {
              IFight.youStats.onFight2 = false;
              return;
            }
            await sleep(delay);

            if (fightMultiCont >= (5000 / delay)) {
              IFight.onFightStats.fightMulti2 = f(IFight.onFightStats.fightMulti2).mul(f(2))
              fightMultiCont = 0
            } else {
              fightMultiCont = fightMultiCont + 1;
            }

            const playerDamage = f(IFight.onFightStats.damage).mul(f(tickSpeed)).mul(f(delay).dividedBy(50)).mul(f(IFight.onFightStats.fightMulti2));
            const enemyDamage = f(IUniversalChallenger.challengers.universalChallenger.damage).mul(f(tickSpeed)).mul(f(delay).dividedBy(50)).mul(f(IFight.onFightStats.fightMulti2));

            IUniversalChallenger.challengers.universalChallenger.leftLife = f(IUniversalChallenger.challengers.universalChallenger.leftLife).minus(playerDamage);
            IFight.onFightStats.leftLife2 = f(IFight.onFightStats.leftLife2).minus(enemyDamage);

            if (f(IFight.onFightStats.leftLife2).lt(f(0)) && f(IUniversalChallenger.challengers.universalChallenger.leftLife).lt(f(0))) {
              if (f(IFight.onFightStats.leftLife2).gte(f(IUniversalChallenger.challengers.universalChallenger.leftLife))) {
                rewardSet("universalChallenge1Win");
                valuesSetter();
                visualChallenger();
                flashFight("universalChallengerW")
                await sleep(1000);
                flashFight("universalChallengerR")
                break; // Passa al round successivo
              } else {
                rewardSet("universalChallenge1Lost");

                IFight.youStats.onFight2 = false;
                IUniversalChallenger.universalChallengerChallenges.c1.active = false
                valuesSetter();
                visualChallenger();
                flashFight("universalChallengerL")
                await sleep(1000);
                flashFight("universalChallengerR")
                return;
              }
            }

            if (f(IUniversalChallenger.challengers.universalChallenger.leftLife).lessThanOrEqualTo(0)) {
              rewardSet("universalChallenge1Win");
              valuesSetter();
              visualChallenger();
              flashFight("universalChallengerW")
              await sleep(1000);
              flashFight("universalChallengerR")
              break; // Passa al round successivo
            }

            if (f(IFight.onFightStats.leftLife2).lessThanOrEqualTo(0)) {
              rewardSet("universalChallenge1Lost");
              IFight.youStats.onFight2 = false;
              IUniversalChallenger.universalChallengerChallenges.c1.active = false;
              valuesSetter();
              visualChallenger()
              flashFight("universalChallengerL")
              await sleep(1000);
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
      setUniversalChallengerLevelAutomation("universalChallenger")
    };

    if (signal?.aborted) {
      IFight.youStats.onFight2 = false;
      setUniversalChallengerLevelAutomation("universalChallenger")
      return;
    }

    signal?.addEventListener("abort", abortHandler2);

    IFight.youStats.onFight2 = true;

    setUniversalChallengerLevelAutomation("universalChallengerChallenge2")


    try {
      while (IFight.youStats.onFight2) {
        // Resetta le vite per un nuovo round
        valuesSetterDinamic("universalChallengerChallenge2")

        IFight.onFightStats.life = IFight.youStats.life;
        IFight.onFightStats.leftLife2 = IFight.onFightStats.life;
        IFight.onFightStats.damage = IFight.youStats.damage;
        IFight.youStats.leftLife2 = IFight.onFightStats.leftLife2

        valuesSetter("universalChallengerChallenge2")

        IUniversalChallenger.challengers.universalChallenger.leftLife = IUniversalChallenger.challengers.universalChallenger.life;

        var fightMultiCont = 0
        IFight.onFightStats.fightMulti2 = f(1)

        visualChallenger("universalChallengerChallenge")

        await sleep(1000);
        if (f(IUniversalChallenger.challengers.universalChallenger.leftLife).greaterThan(0) && f(IFight.onFightStats.leftLife2).greaterThan(0)) {
          while (f(IUniversalChallenger.challengers.universalChallenger.leftLife).greaterThan(0) && f(IFight.onFightStats.leftLife2).greaterThan(0)) {
            if (signal?.aborted) {
              IFight.youStats.onFight2 = false;
              return;
            }
            await sleep(delay);

            if (fightMultiCont >= (5000 / delay)) {
              IFight.onFightStats.fightMulti2 = f(IFight.onFightStats.fightMulti2).mul(f(2))
              fightMultiCont = 0
            } else {
              fightMultiCont = fightMultiCont + 1;
            }

            const playerDamage = f(IFight.onFightStats.damage).mul(f(tickSpeed)).mul(f(delay).dividedBy(50)).mul(f(IFight.onFightStats.fightMulti2));
            const enemyDamage = f(IUniversalChallenger.challengers.universalChallenger.damage).mul(f(tickSpeed)).mul(f(delay).dividedBy(50)).mul(f(IFight.onFightStats.fightMulti2));

            let damage1 = f(IFight.onFightStats.damage)
            let damage2 = f(IUniversalChallenger.challengers.universalChallenger.damage)

            IUniversalChallenger.challengers.universalChallenger.leftLife = f(IUniversalChallenger.challengers.universalChallenger.leftLife).minus(playerDamage);
            IFight.onFightStats.leftLife2 = f(IFight.onFightStats.leftLife2).minus(enemyDamage);


            if (f(IFight.onFightStats.leftLife2).lt(f(0)) && f(IUniversalChallenger.challengers.universalChallenger.leftLife).lt(f(0))) {
              if (f(IFight.onFightStats.leftLife2).gte(f(IUniversalChallenger.challengers.universalChallenger.leftLife))) {
                rewardSet("universalChallenge2Win");
                valuesSetter();
                visualChallenger();
                flashFight("universalChallengerW")
                await sleep(1000);
                flashFight("universalChallengerR")
                break; // Passa al round successivo
              } else {
                rewardSet("universalChallenge2Lost");
                IFight.youStats.onFight2 = false;
                IUniversalChallenger.universalChallengerChallenges.c2.active = false
                valuesSetter();
                visualChallenger()
                flashFight("universalChallengerL")
                await sleep(1000);
                flashFight("universalChallengerR")
                return;
              }
            }

            if (f(IUniversalChallenger.challengers.universalChallenger.leftLife).lessThanOrEqualTo(0)) {
              rewardSet("universalChallenge2Win");
              valuesSetter();
              visualChallenger();
              flashFight("universalChallengerW")
              await sleep(1000);
              flashFight("universalChallengerR")
              break; // Passa al round successivo
            }

            if (f(IFight.onFightStats.leftLife2).lessThanOrEqualTo(0)) {
              rewardSet("universalChallenge2Lost");
              IFight.youStats.onFight2 = false;
              IUniversalChallenger.universalChallengerChallenges.c2.active = false;
              valuesSetter();
              visualChallenger()
              flashFight("universalChallengerL")
              await sleep(1000);
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
    } else {

    }

    IUniversalChallenger.universalChallengerRewards.reward1.level = f(IUniversalChallenger.challengers.universalChallenger.level).minus(f(1))
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
  }
}



async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function format(number, type, formatType = IPermanentIn.notation["notation" + IPermanent.notationCont]) {
  if (number != null) {
    // Se il formato richiesto è "scientific" (notazione scientifica)
    if (formatType === 'Scientific') {
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
        return Number(number).toExponential(type || 1);

      }
    }

    // Se il formato richiesto è "letters" (notazione con lettere)
    if (formatType === 'Letters') {

      if (typeof number === 'object' && number.exponent != undefined) {
        if (number.exponent < 2) {
          if (type != null) {
            return (number.toNumber()).toFixed(type);
          }
          return (number.toNumber()).toFixed(1);
        }

        if (number.exponent >= 3) {
          const units = ["", "U", "D", "T", "Qa", "Qt", "Sx", "Sp", "O", "No"];
          const tens = ["", "Dc", "Vg", "Tg", "Qd", "Qi", "Sg", "St", "Og", "Nn"];
          const hundreds = ["", "Ce", "Dn", "Tc", "Qe", "Qu", "Sc", "Si", "Oe", "Ne"];
          const smallUnits = ["k", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No"];

          // numero reale
          let realNumber = number.toNumber();

          // esponente base 10
          let exp = Math.floor(Math.log10(realNumber));

          // numeri piccoli < 1e36
          let conv = Math.floor(exp / 3) - 1;

          // calcola num come frazione della potenza di 1000 corretta
          let num = realNumber / Math.pow(10, (conv + 1) * 3);

          let formatted = "";

          if (conv < 10) {
            formatted = `${num.toFixed(1)}${smallUnits[conv]}`;
          } else {
            // numeri grandi, usa centinaia/decine/unità
            let h = Math.floor(conv / 100);
            let t = Math.floor((conv % 100) / 10);
            let u = conv % 10;
            formatted = `${num.toFixed(1)}${units[u]}${tens[t]}${hundreds[h]}`;
          }

          return formatted;
        }

        return number.toNumber().toFixed(1);
      } else {

        return number.toExponential(type || 1);
      }
    }

    if (formatType === 'Letters and Scientific') {

      if (typeof number === 'object' && number.exponent != undefined) {
        if (number.exponent < 2) {
          if (type != null) {
            return (number.toNumber()).toFixed(type);
          }
          return (number.toNumber()).toFixed(1);
        }

        if (number.exponent >= 3) {

          const units = ["", "U", "D", "T", "Qa", "Qt", "Sx", "Sp", "O", "No"];
          const tens = ["", "Dc", "Vg", "Tg", "Qd", "Qi", "Sg", "St", "Og", "Nn"];
          const hundreds = ["", "Ce", "Dn", "Tc", "Qe", "Qu", "Sc", "Si", "Oe", "Ne"];

          // Scala per numeri sotto 1e10 (K, M, B, T, ...)
          const smallUnits = ["k", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No"];

          let exp = Math.floor(Math.log10(number.toNumber()));
          let conv = Math.floor(exp / 3) - 1;

          let formatted = ""

          if (conv < 10) {

            // Se il numero è minore di 1000, usa il numero normale
            if (exp < 3) return number.toNumber().toFixed(type || 1);

            // Calcola il numero da mostrare dividendo per la potenza di 1000 corretta
            let num = number.toNumber() / Math.pow(10, (conv + 1) * 3);

            formatted = `${num.toFixed(1)}${smallUnits[conv]}`;

          } else {
            let num = number.mantissa;
            num = num.toFixed(2);

            formatted = num + "e" + number.exponent;
          }

          return formatted
        }

        return number.toNumber().toFixed(1);
      } else {

        return Number(number).toExponential(type || 1);
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
    unlockShow("universeValute", true);
    unlockShow("essenceValute", false);

    unlockShow("universalShardsBase", false);
    unlockShow("universalNodesBase", false);
    unlockShow("universalCoresBase", false);

    enableDragScroll("content2_17_scroll")
    enableDragScroll("content2_19_scroll")


    unlockShow("fireValute", false);

    IShowableClass.init = false;

  }
  //Valutes
  if (IProgressIn.progress.p2Check() || f(IUniversal.universe).gte(2)) {
    unlockShow("essenceValute", true)
  }

  if (f(IUniversalChallenger.universalShards).gt(f(0))) {
    unlockShow("universalShardsBase", true)
  }
  if (f(IUniversalChallenger.universalNodes).gt(f(0))) {
    unlockShow("universalNodesBase", true)
  }

  if (f(IUniversalChallenger.universalCores).gt(f(0))) {
    unlockShow("universalCoresBase", true)
  }

  //TABS MOUNTAIN

  unlockShow("fp2_content2_1_container", true)
  unlockShow("fp2_content2_12_container", true)

  unlockShow("fp2_content2_pageSel", true)

  if (IProgressIn.progress.p1Check() == true || f(IUniversal.universe).gte(f(2))) {
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

  if (IProgressIn.progress.p1Check() == true || f(IUniversal.universe).gte(f(2))) {
    if (IProgressIn.progress.p2Check() == true || f(IUniversal.universe).gte(f(2))) {
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

  if (IProgressIn.progress.p2Check() == true || f(IUniversal.universe).gte(f(2))) {
    if (IProgressIn.progress.p3Check() == true || f(IUniversal.universe).gte(f(2))) {
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

  if (IProgressIn.progress.p3Check() == true || f(IUniversal.universe).gte(f(2))) {
    if (IUniversalIn.milestones.m1.mCheck()) {
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

  if (IUniversalIn.milestones.m1.mCheck()) {
    if (IUniversalIn.milestones.m2.mCheck()) {
      if (IUniversalIn.milestones.m3.mCheck()) {
        unlockShow("fp2_content3_pageSel", true)
        document.getElementById("fp2_content3_pageSel").style.opacity = "1";  // attivo 1, disattivo 0.5
        update("fp2_content3_pageSel", "Sky")
        document.getElementById("fp2_content3_pageSel").style.pointerEvents = "auto";
      } else {
        unlockShow("fp2_content3_pageSel", true)
        document.getElementById("fp2_content3_pageSel").style.opacity = "0.5";  // attivo 1, disattivo 0.5
        update("fp2_content3_pageSel", "Reach Universe 40")
        document.getElementById("fp2_content3_pageSel").style.pointerEvents = "none";
      }
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
    unlockShow("fp2_content3_pageSel", false)


  }

  //TABS SKY
  unlockShow("fp2_content2_17_container", true)
  unlockShow("fp2_content2_18_container", true)

  if (IUniversalIn.fireMilestones.m6.mCheck()) {
    document.getElementById("fp2_content2_19_image").style.opacity = "1";  // attivo 1, disattivo 0.5
    document.getElementById("fp2_content2_19").style.pointerEvents = "auto";

    document.getElementById("fp2_content2_20_image").style.opacity = "1";  // attivo 1, disattivo 0.5
    document.getElementById("fp2_content2_20").style.pointerEvents = "auto";
    unlockShow("fp2_content2_19_container", true)
    unlockShow("fp2_content2_20_container", true)
  } else {

    document.getElementById("fp2_content2_19_image").style.opacity = "0.5";  // attivo 1, disattivo 0.5
    document.getElementById("fp2_content2_19").style.pointerEvents = "none";

    document.getElementById("fp2_content2_20_image").style.opacity = "0.5";  // attivo 1, disattivo 0.5
    document.getElementById("fp2_content2_20").style.pointerEvents = "none";
    unlockShow("fp2_content2_19_container", true)
    unlockShow("fp2_content2_20_container", true)
  }

  //PROGRESS BARS
  //CHALLENGER

  //Bases

  unlockShow("base1", true)
  unlockShow("base2", true)

  if (ITrainingIn.base.base3.req()) {
    unlockShow("base3", true)
  }

  if (ITrainingIn.base.base4.req()) {
    unlockShow("base4", true)
  }

  //hunting

  unlockShow("content2_6_upgrade2", false)
  unlockShow("content2_6_upgrade3", false)
  unlockShow("content2_6_upgrade4", false)
  unlockShow("content2_6_upgrade5", false)


  if (IFightIn.normalHunting.hunt1.req() == true) {
    unlockShow("content2_6_hunt1", true)
  }

  if (IFightIn.normalHunting.hunt2.req() == true || IFightIn.normalHunting.hunt1.req() == true) {
    unlockShow("content2_6_hunt2", true)
  }

  if (IFightIn.normalHunting.hunt3.req() == true || IFightIn.normalHunting.hunt2.req() == true) {
    unlockShow("content2_6_hunt3", true)
  }

  if (IFightIn.normalHunting.hunt4.req() == true || IFightIn.normalHunting.hunt3.req() == true) {
    unlockShow("content2_6_hunt4", true)
  }

  if (IFightIn.normalHunting.hunt5.req() == true || IFightIn.normalHunting.hunt4.req() == true) {
    unlockShow("content2_6_hunt5", true)
  }

  if (IUniversal.attributes.attributesUnlock2.active) {
    unlockShow("content2_6_huntEvolution", true)
  } else {
    unlockShow("content2_6_huntEvolution", false)
  }

  //huntingRewards

  unlockShow("content2_6_upgrade1", true)

  if (IFightIn.normalHuntingRewards.upgrade1.req() == true) {
    unlockShow("content2_6_upgrade2", true)
  }

  if (IFightIn.normalHuntingRewards.upgrade2.req() == true) {
    unlockShow("content2_6_upgrade3", true)
  }

  if (IFightIn.normalHuntingRewards.upgrade3.req() == true) {
    unlockShow("content2_6_upgrade4", true)
  }

  if (IFightIn.normalHuntingRewards.upgrade4.req() == true) {
    unlockShow("content2_6_upgrade5", true)
  }

  //energy

  if (IUniversal.energyUpgrades.upgrade1.showReq || IUniversal.energyUpgrades.upgrade1.unlocked) {
    unlockShow("content2_7_upgrade1_b1", true)
    IUniversal.energyUpgrades.upgrade1.unlocked = true
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade2.showReq || IUniversal.energyUpgrades.upgrade2.unlocked) {
    unlockShow("content2_7_upgrade2_b1", true)
    IUniversal.energyUpgrades.upgrade2.unlocked = true
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade3.showReq || IUniversal.energyUpgrades.upgrade3.unlocked) {
    unlockShow("content2_7_upgrade3_b1", true)
    IUniversal.energyUpgrades.upgrade3.unlocked = true
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade4.showReq || IUniversal.energyUpgrades.upgrade4.unlocked) {
    unlockShow("content2_7_upgrade4_b1", true)
    IUniversal.energyUpgrades.upgrade4.unlocked = true
  } else {

  }
  if (IUniversal.energyUpgrades.upgrade5.showReq || IUniversal.energyUpgrades.upgrade5.unlocked) {
    unlockShow("content2_7_upgrade5_b1", true)
    IUniversal.energyUpgrades.upgrade5.unlocked = true
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade6.showReq || IUniversal.energyUpgrades.upgrade6.unlocked) {
    unlockShow("content2_7_upgrade6_b1", true)
    IUniversal.energyUpgrades.upgrade6.unlocked = true
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade7.showReq || IUniversal.energyUpgrades.upgrade7.unlocked) {
    unlockShow("content2_7_upgrade7_b1", true)
    IUniversal.energyUpgrades.upgrade7.unlocked = true
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade8.showReq || IUniversal.energyUpgrades.upgrade8.unlocked) {
    unlockShow("content2_7_upgrade8_b1", true)
    IUniversal.energyUpgrades.upgrade8.unlocked = true
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade9.showReq || IUniversal.energyUpgrades.upgrade9.unlocked) {
    unlockShow("content2_7_upgrade9_b1", true)
    IUniversal.energyUpgrades.upgrade9.unlocked = true
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade10.showReq || IUniversal.energyUpgrades.upgrade10.unlocked) {
    unlockShow("content2_7_upgrade10_b1", true)
    IUniversal.energyUpgrades.upgrade10.unlocked = true
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade11.showReq || IUniversal.energyUpgrades.upgrade11.unlocked) {
    unlockShow("content2_7_upgrade11_b1", true)
    IUniversal.energyUpgrades.upgrade11.unlocked = true
  } else {

  }


  if (IUniversal.energyUpgrades.upgrade12.showReq || IUniversal.energyUpgrades.upgrade12.unlocked) {
    unlockShow("content2_7_upgrade12_b1", true)
    IUniversal.energyUpgrades.upgrade12.unlocked = true
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade13.showReq || IUniversal.energyUpgrades.upgrade13.unlocked) {
    unlockShow("content2_7_upgrade13_b1", true)
    IUniversal.energyUpgrades.upgrade13.unlocked = true
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade14.showReq || IUniversal.energyUpgrades.upgrade14.unlocked) {
    unlockShow("content2_7_upgrade14_b1", true)
    IUniversal.energyUpgrades.upgrade14.unlocked = true
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade15.showReq || IUniversal.energyUpgrades.upgrade15.unlocked) {
    unlockShow("content2_7_upgrade15_b1", true)
    IUniversal.energyUpgrades.upgrade15.unlocked = true
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade16.showReq || IUniversal.energyUpgrades.upgrade16.unlocked) {
    unlockShow("content2_7_upgrade16_b1", true)
    IUniversal.energyUpgrades.upgrade16.unlocked = true
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade17.showReq || IUniversal.energyUpgrades.upgrade17.unlocked) {
    unlockShow("content2_7_upgrade17_b1", true)
    IUniversal.energyUpgrades.upgrade17.unlocked = true
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade18.showReq || IUniversal.energyUpgrades.upgrade18.unlocked) {
    unlockShow("content2_7_upgrade18_b1", true)
    IUniversal.energyUpgrades.upgrade18.unlocked = true
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade19.showReq || IUniversal.energyUpgrades.upgrade19.unlocked) {
    unlockShow("content2_7_upgrade19_b1", true)
    IUniversal.energyUpgrades.upgrade19.unlocked = true
  } else {

  }

  if (IUniversal.energyUpgrades.upgrade20.showReq || IUniversal.energyUpgrades.upgrade20.unlocked) {
    unlockShow("content2_7_upgrade20_b1", true)
    IUniversal.energyUpgrades.upgrade20.unlocked = true
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

  //automation

  unlockShow("fp3_content1_8_auto1", true)
  unlockShow("fp3_content1_8_auto2", true)

  unlockShow("fp3_content1_8_auto3", true)

  unlockShow("fp3_content1_8_auto4", true)
  unlockShow("fp3_content1_8_auto5", true)
  unlockShow("fp3_content1_8_auto6", true)

  unlockShow("fp3_content1_8_auto7", true)
  unlockShow("fp3_content1_8_auto8", true)

  if (IUniversal.attributes.attributesUnlock1.active) {
    unlockShow("fp3_content1_8_auto9", true)
    unlockShow("fp3_content1_8_auto10", true)
  }

  if (IUniversal.attributes.attributesUnlock2.active) {
    unlockShow("fp3_content1_8_auto11", true)
    unlockShow("fp3_content1_8_auto12", true)
  }

  if (checkShow("content2_6_huntEvolution")) {
    unlockShow("fp3_content1_8_auto13", true)
  }

  if (IUniversal.fireTree.node11.unlocked) {
    unlockShow("fp3_content1_8_auto14", true)
  }

  //Fire tree
  if (IUniversal.fireTree.node2.unlocked) {
    unlockShow("content2_17_zone1", true)
  } else {
    unlockShow("content2_17_zone1", false)
  }

  if (IUniversal.fireTree.node11.unlocked) {
    unlockShow("content2_17_zone2", true)
  } else {
    unlockShow("content2_17_zone2", false)
  }


  if (IUniversal.fireTree.node27.unlocked) {
    unlockShow("content2_17_zone3", true)
  } else {
    unlockShow("content2_17_zone3", false)
  }



  if (IUniversalIn.fireTree.node1.req() || IUniversal.fireTree.node1.unlocked) {
    unlockShow("content2_17_node1", true)
  } else {
    unlockShow("content2_17_node1", false)
  }

  if (IUniversalIn.fireTree.node2.req() || IUniversal.fireTree.node2.unlocked) {
    unlockShow("content2_17_node2", true)
  } else {
    unlockShow("content2_17_node2", false)
  }

  if (IUniversalIn.fireTree.node3.req() || IUniversal.fireTree.node3.unlocked) {
    unlockShow("content2_17_node3", true)
  } else {
    unlockShow("content2_17_node3", false)
  }

  if (IUniversalIn.fireTree.node4.req() || IUniversal.fireTree.node4.unlocked) {
    unlockShow("content2_17_node4", true)
  } else {
    unlockShow("content2_17_node4", false)
  }

  if (IUniversalIn.fireTree.node5.req() || IUniversal.fireTree.node5.unlocked) {
    unlockShow("content2_17_node5", true)
  } else {
    unlockShow("content2_17_node5", false)
  }

  if (IUniversalIn.fireTree.node6.req() || IUniversal.fireTree.node6.unlocked) {
    unlockShow("content2_17_node6", true)
  } else {
    unlockShow("content2_17_node6", false)
  }

  if (IUniversalIn.fireTree.node7.req() || IUniversal.fireTree.node7.unlocked) {
    unlockShow("content2_17_node7", true)
  } else {
    unlockShow("content2_17_node7", false)
  }

  if (IUniversalIn.fireTree.node8.req() || IUniversal.fireTree.node8.unlocked) {
    unlockShow("content2_17_node8", true)
  } else {
    unlockShow("content2_17_node8", false)
  }

  if (IUniversalIn.fireTree.node9.req() || IUniversal.fireTree.node9.unlocked) {
    unlockShow("content2_17_node9", true)
  } else {
    unlockShow("content2_17_node9", false)
  }

  if (IUniversalIn.fireTree.node10.req() || IUniversal.fireTree.node10.unlocked) {
    unlockShow("content2_17_node10", true)
  } else {
    unlockShow("content2_17_node10", false)
  }

  if (IUniversalIn.fireTree.node11.req() || IUniversal.fireTree.node11.unlocked) {
    unlockShow("content2_17_node11", true)
  } else {
    unlockShow("content2_17_node11", false)
  }

  if (IUniversalIn.fireTree.node12.req() || IUniversal.fireTree.node12.unlocked) {
    unlockShow("content2_17_node12", true)
  } else {
    unlockShow("content2_17_node12", false)
  }

  if (IUniversalIn.fireTree.node13.req() || IUniversal.fireTree.node13.unlocked) {
    unlockShow("content2_17_node13", true)
  } else {
    unlockShow("content2_17_node13", false)
  }

  if (IUniversalIn.fireTree.node14.req() || IUniversal.fireTree.node14.unlocked) {
    unlockShow("content2_17_node14", true)
  } else {
    unlockShow("content2_17_node14", false)
  }

  if (IUniversalIn.fireTree.node15.req() || IUniversal.fireTree.node15.unlocked) {
    unlockShow("content2_17_node15", true)
  } else {
    unlockShow("content2_17_node15", false)
  }

  if (IUniversalIn.fireTree.node16.req() || IUniversal.fireTree.node16.unlocked) {
    unlockShow("content2_17_node16", true)
  } else {
    unlockShow("content2_17_node16", false)
  }

  if (IUniversalIn.fireTree.node17.req() || IUniversal.fireTree.node17.unlocked) {
    unlockShow("content2_17_node17", true)
  } else {
    unlockShow("content2_17_node17", false)
  }

  if (IUniversalIn.fireTree.node18.req() || IUniversal.fireTree.node18.unlocked) {
    unlockShow("content2_17_node18", true)
  } else {
    unlockShow("content2_17_node18", false)
  }

  if (IUniversalIn.fireTree.node19.req() || IUniversal.fireTree.node19.unlocked) {
    unlockShow("content2_17_node19", true)
  } else {
    unlockShow("content2_17_node19", false)
  }

  if (IUniversalIn.fireTree.node20.req() || IUniversal.fireTree.node20.unlocked) {
    unlockShow("content2_17_node20", true)
  } else {
    unlockShow("content2_17_node20", false)
  }

  if (IUniversalIn.fireTree.node21.req() || IUniversal.fireTree.node21.unlocked) {
    unlockShow("content2_17_node21", true)
  } else {
    unlockShow("content2_17_node21", false)
  }

  if (IUniversalIn.fireTree.node22.req() || IUniversal.fireTree.node22.unlocked) {
    unlockShow("content2_17_node22", true)
  } else {
    unlockShow("content2_17_node22", false)
  }


  if (IUniversalIn.fireTree.node23.req() || IUniversal.fireTree.node23.unlocked) {
    unlockShow("content2_17_node23", true)
  } else {
    unlockShow("content2_17_node23", false)
  }

  if (IUniversalIn.fireTree.node24.req() || IUniversal.fireTree.node24.unlocked) {
    unlockShow("content2_17_node24", true)
  } else {
    unlockShow("content2_17_node24", false)
  }

  if (IUniversalIn.fireTree.node25.req() || IUniversal.fireTree.node25.unlocked) {
    unlockShow("content2_17_node25", true)
  } else {
    unlockShow("content2_17_node25", false)
  }

  if (IUniversalIn.fireTree.node26.req() || IUniversal.fireTree.node26.unlocked) {
    unlockShow("content2_17_node26", true)
  } else {
    unlockShow("content2_17_node26", false)
  }

  if (IUniversalIn.fireTree.node27.req() || IUniversal.fireTree.node27.unlocked) {
    unlockShow("content2_17_node27", true)
  } else {
    unlockShow("content2_17_node27", false)
  }

  if (IUniversalIn.fireTree.node28.req() || IUniversal.fireTree.node28.unlocked) {
    unlockShow("content2_17_node28", true)
  } else {
    unlockShow("content2_17_node28", false)
  }

  if (IUniversalIn.fireTree.node29.req() || IUniversal.fireTree.node29.active) {
    unlockShow("content2_17_node29", true)
  } else {
    unlockShow("content2_17_node29", false)
  }

  if (IUniversalIn.fireTree.node30.req() || IUniversal.fireTree.node30.active) {
    unlockShow("content2_17_node30", true)
  } else {
    unlockShow("content2_17_node30", false)
  }


  if (IUniversalIn.fireTree.node31.req() || IUniversal.fireTree.node31.active) {
    unlockShow("content2_17_node31", true)
  } else {
    unlockShow("content2_17_node31", false)
  }


  if (IUniversalIn.fireTree.node32.req() || IUniversal.fireTree.node32.active) {
    unlockShow("content2_17_node32", true)
  } else {
    unlockShow("content2_17_node32", false)
  }


  if (IUniversalIn.fireTree.node33.req() || IUniversal.fireTree.node33.active) {
    unlockShow("content2_17_node33", true)
  } else {
    unlockShow("content2_17_node33", false)
  }

  if (IUniversalIn.fireTree.node34.req() || IUniversal.fireTree.node34.active) {
    unlockShow("content2_17_node34", true)
  } else {
    unlockShow("content2_17_node34", false)
  }

  if (IUniversalIn.fireTree.node35.req() || IUniversal.fireTree.node35.active) {
    unlockShow("content2_17_node35", true)
  } else {
    unlockShow("content2_17_node35", false)
  }

  if (IUniversalIn.fireTree.node36.req() || IUniversal.fireTree.node36.active) {
    unlockShow("content2_17_node36", true)
  } else {
    unlockShow("content2_17_node36", false)
  }

  if (IUniversalIn.fireTree.node37.req() || IUniversal.fireTree.node37.active) {
    unlockShow("content2_17_node37", true)
  } else {
    unlockShow("content2_17_node37", false)
  }

  if (IUniversalIn.fireTree.node38.req() || IUniversal.fireTree.node38.active) {
    unlockShow("content2_17_node38", true)
  } else {
    unlockShow("content2_17_node38", false)
  }

  if (IUniversalIn.fireTree.node39.req() || IUniversal.fireTree.node39.active) {
    unlockShow("content2_17_node39", true)
  } else {
    unlockShow("content2_17_node39", false)
  }

  if (IUniversalIn.fireTree.node40.req() || IUniversal.fireTree.node40.active) {
    unlockShow("content2_17_node40", true)
  } else {
    unlockShow("content2_17_node40", false)
  }

  if (IUniversalIn.fireTree.node41.req() || IUniversal.fireTree.node41.active) {
    unlockShow("content2_17_node41", true)
  } else {
    unlockShow("content2_17_node41", false)
  }

  if (IUniversalIn.fireTree.node42.req() || IUniversal.fireTree.node42.active) {
    unlockShow("content2_17_node42", true)
  } else {
    unlockShow("content2_17_node42", false)
  }

  if (IUniversalIn.fireTree.node43.req() || IUniversal.fireTree.node43.active) {
    unlockShow("content2_17_node43", true)
  } else {
    unlockShow("content2_17_node43", false)
  }

  if (IUniversalIn.fireTree.node44.req() || IUniversal.fireTree.node44.active) {
    unlockShow("content2_17_node44", true)
  } else {
    unlockShow("content2_17_node44", false)
  }

  if (IUniversalIn.fireTree.node45.req() || IUniversal.fireTree.node45.active) {
    unlockShow("content2_17_node45", true)
  } else {
    unlockShow("content2_17_node45", false)
  }

  if (IUniversalIn.fireTree.node46.req() || IUniversal.fireTree.node46.active) {
    unlockShow("content2_17_node46", true)
  } else {
    unlockShow("content2_17_node46", false)
  }

  if (IUniversalIn.fireTree.node47.req() || IUniversal.fireTree.node47.active) {
    unlockShow("content2_17_node47", true)
  } else {
    unlockShow("content2_17_node47", false)
  }

  if (IUniversalIn.fireTree.node48.req() || IUniversal.fireTree.node48.active) {
    unlockShow("content2_17_node48", true)
  } else {
    unlockShow("content2_17_node48", false)
  }

  if (IUniversalIn.fireTree.node49.req() || IUniversal.fireTree.node49.active) {
    unlockShow("content2_17_node49", true)
  } else {
    unlockShow("content2_17_node49", false)
  }

  if (IUniversalIn.fireTree.node50.req() || IUniversal.fireTree.node50.active) {
    unlockShow("content2_17_node50", true)
  } else {
    unlockShow("content2_17_node50", false)
  }

  if (IUniversalIn.fireTree.node51.req() || IUniversal.fireTree.node51.active) {
    unlockShow("content2_17_node51", true)
  } else {
    unlockShow("content2_17_node51", false)
  }

  if (IUniversalIn.fireTree.node52.req() || IUniversal.fireTree.node52.active) {
    unlockShow("content2_17_node52", true)
  } else {
    unlockShow("content2_17_node52", false)
  }

  if (IUniversalIn.fireTree.node53.req() || IUniversal.fireTree.node53.active) {
    unlockShow("content2_17_node53", true)
  } else {
    unlockShow("content2_17_node53", false)
  }

  if (IUniversalIn.fireTree.node54.req() || IUniversal.fireTree.node54.active) {
    unlockShow("content2_17_node54", true)
  } else {
    unlockShow("content2_17_node54", false)
  }

  if (IUniversalIn.fireTree.node55.req() || IUniversal.fireTree.node55.active) {
    unlockShow("content2_17_node55", true)
  } else {
    unlockShow("content2_17_node55", false)
  }

  if (IUniversalIn.fireTree.node56.req() || IUniversal.fireTree.node56.active) {
    unlockShow("content2_17_node56", true)
  } else {
    unlockShow("content2_17_node56", false)
  }

  if (IUniversalIn.fireTree.node57.req() || IUniversal.fireTree.node57.active) {
    unlockShow("content2_17_node57", true)
  } else {
    unlockShow("content2_17_node57", false)
  }

  if (IUniversalIn.fireTree.node58.req() || IUniversal.fireTree.node58.active) {
    unlockShow("content2_17_node58", true)
  } else {
    unlockShow("content2_17_node58", false)
  }

  if (IUniversalIn.fireTree.node59.req() || IUniversal.fireTree.node59.active) {
    unlockShow("content2_17_node59", true)
  } else {
    unlockShow("content2_17_node59", false)
  }

  if (IUniversalIn.fireTree.node60.req() || IUniversal.fireTree.node60.active) {
    unlockShow("content2_17_node60", true)
  } else {
    unlockShow("content2_17_node60", false)
  }

  if (IUniversalIn.fireTree.node61.req() || IUniversal.fireTree.node61.active) {
    unlockShow("content2_17_node61", true)
  } else {
    unlockShow("content2_17_node61", false)
  }

  if (IUniversalIn.fireTree.node62.req() || IUniversal.fireTree.node62.active) {
    unlockShow("content2_17_node62", true)
  } else {
    unlockShow("content2_17_node62", false)
  }

  if (IUniversalIn.fireTree.node63.req() || IUniversal.fireTree.node63.active) {
    unlockShow("content2_17_node63", true)
  } else {
    unlockShow("content2_17_node63", false)
  }

  if (IUniversalIn.fireTree.node64.req() || IUniversal.fireTree.node64.active) {
    unlockShow("content2_17_node64", true)
  } else {
    unlockShow("content2_17_node64", false)
  }

  //WATER

  if (IUniversal.waterTree.node2.unlocked) {
    unlockShow("content2_19_zone1", true)
  } else {
    unlockShow("content2_19_zone1", false)
  }

  if (IUniversal.waterTree.node6.unlocked) {
    unlockShow("content2_19_zone2", true)
  } else {
    unlockShow("content2_19_zone2", false)
  }


  if (IUniversal.waterTree.node6.unlocked) {
    unlockShow("content2_19_zone3", true)
  } else {
    unlockShow("content2_19_zone3", false)
  }


  if (IUniversalIn.waterTree.node1.req() || IUniversal.waterTree.node1.unlocked) {
    unlockShow("content2_19_node1", true)
  } else {
    unlockShow("content2_19_node1", false)
  }

  if (IUniversalIn.waterTree.node2.req() || IUniversal.waterTree.node2.unlocked) {
    unlockShow("content2_19_node2", true)
    unlockShow("content2_19_circle1", true)
  } else {
    unlockShow("content2_19_node2", false)
    unlockShow("content2_19_circle1", false)

  }

  if (IUniversalIn.waterTree.node3.req() || IUniversal.waterTree.node3.unlocked) {
    unlockShow("content2_19_node3", true)
  } else {
    unlockShow("content2_19_node3", false)
  }

  if (IUniversalIn.waterTree.node4.req() || IUniversal.waterTree.node4.unlocked) {
    unlockShow("content2_19_node4", true)
  } else {
    unlockShow("content2_19_node4", false)
  }

  if (IUniversalIn.waterTree.node5.req() || IUniversal.waterTree.node5.unlocked) {
    unlockShow("content2_19_node5", true)
  } else {
    unlockShow("content2_19_node5", false)
  }

  if (IUniversalIn.waterTree.node6.req() || IUniversal.waterTree.node6.unlocked) {
    unlockShow("content2_19_node6", true)
  } else {
    unlockShow("content2_19_node6", false)
  }

  if (IUniversalIn.waterTree.node7.req() || IUniversal.waterTree.node7.unlocked) {
    unlockShow("content2_19_node7", true)
  } else {
    unlockShow("content2_19_node7", false)
  }

  if (IUniversalIn.waterTree.node8.req() || IUniversal.waterTree.node8.unlocked) {
    unlockShow("content2_19_node8", true)
  } else {
    unlockShow("content2_19_node8", false)
  }

  if (IUniversalIn.waterTree.node9.req() || IUniversal.waterTree.node9.unlocked) {
    unlockShow("content2_19_node9", true)
  } else {
    unlockShow("content2_19_node9", false)
  }

  if (IUniversalIn.waterTree.node10.req() || IUniversal.waterTree.node10.unlocked) {
    unlockShow("content2_19_node10", true)
  } else {
    unlockShow("content2_19_node10", false)
  }

  if (IUniversalIn.waterTree.node11.req() || IUniversal.waterTree.node11.unlocked) {
    unlockShow("content2_19_node11", true)
  } else {
    unlockShow("content2_19_node11", false)
  }

  if (IUniversalIn.waterTree.node12.req() || IUniversal.waterTree.node12.unlocked) {
    unlockShow("content2_19_node12", true)
  } else {
    unlockShow("content2_19_node12", false)
  }

  if (IUniversalIn.waterTree.node13.req() || IUniversal.waterTree.node13.unlocked) {
    unlockShow("content2_19_node13", true)
  } else {
    unlockShow("content2_19_node13", false)
  }

  if (IUniversalIn.waterTree.node14.req() || IUniversal.waterTree.node14.unlocked) {
    unlockShow("content2_19_node14", true)
  } else {
    unlockShow("content2_19_node14", false)
  }

  if (IUniversalIn.waterTree.node15.req() || IUniversal.waterTree.node15.unlocked) {
    unlockShow("content2_19_node15", true)
  } else {
    unlockShow("content2_19_node15", false)
  }

  if (IUniversalIn.waterTree.node16.req() || IUniversal.waterTree.node16.unlocked) {
    unlockShow("content2_19_node16", true)
  } else {
    unlockShow("content2_19_node16", false)
  }

  if (IUniversalIn.waterTree.node17.req() || IUniversal.waterTree.node17.unlocked) {
    unlockShow("content2_19_node17", true)
  } else {
    unlockShow("content2_19_node17", false)
  }

  if (IUniversalIn.waterTree.node18.req() || IUniversal.waterTree.node18.unlocked) {
    unlockShow("content2_19_node18", true)
  } else {
    unlockShow("content2_19_node18", false)
  }

  if (IUniversalIn.waterTree.node19.req() || IUniversal.waterTree.node19.unlocked) {
    unlockShow("content2_19_node19", true)
  } else {
    unlockShow("content2_19_node19", false)
  }

  if (IUniversalIn.waterTree.node20.req() || IUniversal.waterTree.node20.unlocked) {
    unlockShow("content2_19_node20", true)
  } else {
    unlockShow("content2_19_node20", false)
  }

  if (IUniversalIn.waterTree.node21.req() || IUniversal.waterTree.node21.unlocked) {
    unlockShow("content2_19_node21", true)
  } else {
    unlockShow("content2_19_node21", false)
  }

  if (IUniversalIn.waterTree.node22.req() || IUniversal.waterTree.node22.unlocked) {
    unlockShow("content2_19_node22", true)
  } else {
    unlockShow("content2_19_node22", false)
  }

  if (IUniversalIn.waterTree.node23.req() || IUniversal.waterTree.node23.unlocked) {
    unlockShow("content2_19_node23", true)
  } else {
    unlockShow("content2_19_node23", false)
  }

  if (IUniversalIn.waterTree.node24.req() || IUniversal.waterTree.node24.unlocked) {
    unlockShow("content2_19_node24", true)
  } else {
    unlockShow("content2_19_node24", false)
  }

  if (IUniversalIn.waterTree.node25.req() || IUniversal.waterTree.node25.unlocked) {
    unlockShow("content2_19_node25", true)
    unlockShow("content2_19_circle2", true)

  } else {
    unlockShow("content2_19_node25", false)
    unlockShow("content2_19_circle2", false)

  }

  if (IUniversalIn.waterTree.node26.req() || IUniversal.waterTree.node26.unlocked) {
    unlockShow("content2_19_node26", true)
  } else {
    unlockShow("content2_19_node26", false)
  }

  if (IUniversalIn.waterTree.node27.req() || IUniversal.waterTree.node27.unlocked) {
    unlockShow("content2_19_node27", true)
  } else {
    unlockShow("content2_19_node27", false)
  }

  if (IUniversalIn.waterTree.node28.req() || IUniversal.waterTree.node28.unlocked) {
    unlockShow("content2_19_node28", true)
  } else {
    unlockShow("content2_19_node28", false)
  }

  if (IUniversalIn.waterTree.node29.req() || IUniversal.waterTree.node29.unlocked) {
    unlockShow("content2_19_node29", true)
    unlockShow("content2_19_circle3", true)

  } else {
    unlockShow("content2_19_node29", false)
    unlockShow("content2_19_circle3", false)

  }

  if (IUniversalIn.waterTree.node30.req() || IUniversal.waterTree.node30.unlocked) {
    unlockShow("content2_19_node30", true)

  } else {
    unlockShow("content2_19_node30", false)

  }

  if (IUniversalIn.waterTree.node31.req() || IUniversal.waterTree.node31.unlocked) {
    unlockShow("content2_19_node31", true)
  } else {
    unlockShow("content2_19_node31", false)
  }

  if (IUniversalIn.waterTree.node32.req() || IUniversal.waterTree.node32.unlocked) {
    unlockShow("content2_19_node32", true)
  } else {
    unlockShow("content2_19_node32", false)
  }

  if (IUniversalIn.waterTree.node33.req() || IUniversal.waterTree.node33.unlocked) {
    unlockShow("content2_19_node33", true)
  } else {
    unlockShow("content2_19_node33", false)
  }


  if (IUniversalIn.waterTree.node34.req() || IUniversal.waterTree.node34.unlocked) {
    unlockShow("content2_19_node34", true)
  } else {
    unlockShow("content2_19_node34", false)
  }

  if (IUniversalIn.waterTree.node35.req() || IUniversal.waterTree.node35.unlocked) {
    unlockShow("content2_19_node35", true)
  } else {
    unlockShow("content2_19_node35", false)
  }

  if (IUniversalIn.waterTree.node36.req() || IUniversal.waterTree.node36.unlocked) {
    unlockShow("content2_19_node36", true)
  } else {
    unlockShow("content2_19_node36", false)
  }

  if (IUniversalIn.waterTree.node37.req() || IUniversal.waterTree.node37.unlocked) {
    unlockShow("content2_19_node37", true)
  } else {
    unlockShow("content2_19_node37", false)
  }

  if (IUniversalIn.waterTree.node38.req() || IUniversal.waterTree.node38.unlocked) {
    unlockShow("content2_19_node38", true)
  } else {
    unlockShow("content2_19_node38", false)
  }


  //potionMenu

  //IUniversal.waterTutorial = f(0)

  if (IUniversal.waterTree.node6.unlocked) {
    unlockShow("content2_19_potionSel", true)
    unlockShow("content2_19_tutorial", true)
  } else {
    unlockShow("content2_19_potionSel", false)
    unlockShow("content2_19_tutorial", false)
  }

  if (f(IUniversal.waterTutorial).gte(f(1))) {
    unlockShow("content2_19_potionEquip", true)
    unlockShow("content2_19_grid1", true)
    unlockShow("content2_19_potionDelete", true)
  } else {
    unlockShow("content2_19_potionEquip", false)
    unlockShow("content2_19_grid1", false)
    unlockShow("content2_19_potionDelete", false)
  }

  if (f(IUniversal.waterTutorial).gte(f(2))) {
    unlockShow("content2_19_potionUpgrade", true)
  } else {
    unlockShow("content2_19_potionUpgrade", false)
  }

  //potion menu options


  unlockShow("content2_19_potionUpgrade_selector_button1", true)

  if (IUniversal.waterTree.node34.unlocked) {
    unlockShow("content2_19_potionUpgrade_selector_button2", true)
    unlockShow("content2_19_potions_potion3", true)

    unlockShow("content2_19_content2_source1", true)
    unlockShow("content2_19_content2_source2", true)
  } else {
    unlockShow("content2_19_potionUpgrade_selector_button2", false)
    unlockShow("content2_19_potions_potion3", false)

    unlockShow("content2_19_content2_source1", false)
    unlockShow("content2_19_content2_source2", false)
  }

  if (IUniversal.waterTree.node35.unlocked) {
    unlockShow("content2_19_potionUpgrade_selector_button3", true)
  } else {
    unlockShow("content2_19_potionUpgrade_selector_button3", false)
  }

  if (IUniversal.waterTree.node36.unlocked) {
    unlockShow("content2_19_content2_source3", true)
    unlockShow("content2_19_content2_source4", true)
  } else {
    unlockShow("content2_19_content2_source3", false)
    unlockShow("content2_19_content2_source4", false)
  }

  if (IUniversal.waterTree.node37.unlocked) {
    unlockShow("content2_19_content2_source5", true)
    unlockShow("content2_19_content2_source6", true)
  } else {
    unlockShow("content2_19_content2_source5", false)
    unlockShow("content2_19_content2_source6", false)
  }

  //potions

  if (IUniversal.waterTree.node6.unlocked) {
    unlockShow("content2_19_potions_potion1", true)
    unlockShow("content2_19_potions_potion2", true)
    unlockShow("content2_19_potions_potion4", true)
    unlockShow("content2_19_potions_potion5", true)
    unlockShow("content2_19_potionEquip_1", true)
  } else {
    unlockShow("content2_19_potions_potion1", false)
    unlockShow("content2_19_potions_potion2", false)
    unlockShow("content2_19_potions_potion4", false)
    unlockShow("content2_19_potions_potion5", false)
    unlockShow("content2_19_potionEquip_1", false)

  }


  if (IUniversal.waterTree.node10.unlocked) {
    unlockShow("content2_19_potions_potion6", true)
    unlockShow("content2_19_potions_potion7", true)
    unlockShow("content2_19_potions_potion8", true)
    unlockShow("content2_19_potionEquip_2", true)

  } else {
    unlockShow("content2_19_potions_potion6", false)
    unlockShow("content2_19_potions_potion7", false)
    unlockShow("content2_19_potions_potion8", false)
    unlockShow("content2_19_potionEquip_2", false)

  }

  if (IUniversal.waterTree.node18.unlocked) {
    unlockShow("content2_19_potions_potion12", true)
    unlockShow("content2_19_potions_potion13", true)
    unlockShow("content2_19_potions_potion14", true)
    unlockShow("content2_19_potionEquip_4", true)

  } else {
    unlockShow("content2_19_potions_potion12", false)
    unlockShow("content2_19_potions_potion13", false)
    unlockShow("content2_19_potions_potion14", false)
    unlockShow("content2_19_potionEquip_4", false)

  }


  if (IUniversal.waterTree.node14.unlocked) {
    unlockShow("content2_19_potions_potion9", true)
    unlockShow("content2_19_potions_potion10", true)
    unlockShow("content2_19_potions_potion11", true)
    unlockShow("content2_19_potionEquip_3", true)

  } else {
    unlockShow("content2_19_potions_potion9", false)
    unlockShow("content2_19_potions_potion10", false)
    unlockShow("content2_19_potions_potion11", false)
    unlockShow("content2_19_potionEquip_3", false)

  }
}

const lineCache = new Map();

function initLine(id, divAId, divBId, svg, color = "#ff1313ff", width = 6) {
  if (lineCache.has(id)) return; // già creata

  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("stroke", color);
  line.setAttribute("stroke-width", width);
  line.setAttribute("pointer-events", "none");
  svg.appendChild(line);

  lineCache.set(id, { line, divAId, divBId });
}

function updateLine(id, rects) {
  const entry = lineCache.get(id);
  if (!entry) return;

  const rectA = rects[entry.divAId];
  const rectB = rects[entry.divBId];
  if (!rectA || !rectB) return;

  const x1 = rectA.left + rectA.width / 2;
  const y1 = rectA.top + rectA.height / 2;
  const x2 = rectB.left + rectB.width / 2;
  const y2 = rectB.top + rectB.height / 2;

  entry.line.setAttribute("x1", x1);
  entry.line.setAttribute("y1", y1);
  entry.line.setAttribute("x2", x2);
  entry.line.setAttribute("y2", y2);
}

function fireLines() {
  const svg = document.getElementById("content2_17_lineLayer");
  if (!svg) return;

  const parent = svg.parentElement;
  const parentRect = parent.getBoundingClientRect();
  const scrollLeft = parent.scrollLeft || 0;
  const scrollTop = parent.scrollTop || 0;

  const computedStyle = window.getComputedStyle(parent);
  const transform = computedStyle.transform;

  let scaleX = 1, scaleY = 1;
  if (transform && transform !== 'none') {
    const match = transform.match(/matrix\(([^)]+)\)/);
    if (match) {
      const values = match[1].split(',').map(Number);
      scaleX = values[0]; // m11
      scaleY = values[3]; // m22
    }
  }

  const rects = {};
  const allNodes = document.querySelectorAll("[id^='content2_17_node']");
  allNodes.forEach(el => {
    if (checkShow(el.id)) {
      const rect = el.getBoundingClientRect();
      rects[el.id] = {
        top: (rect.top - parentRect.top + scrollTop) / scaleY,
        left: (rect.left - parentRect.left + scrollLeft) / scaleX,
        width: rect.width / scaleX,
        height: rect.height / scaleY
      };
    } else {
      rects[el.id] = null;
    }
  });

  svg.style.position = 'absolute';
  svg.style.top = '0';
  svg.style.left = '0';

  svg.setAttribute("width", parent.scrollWidth);
  svg.setAttribute("height", parent.scrollHeight);


  const connections = [
    // left branch
    ["fireLine1", "content2_17_node1", "content2_17_node2"],
    ["fireLine2", "content2_17_node2", "content2_17_node3"],
    ["fireLine3", "content2_17_node3", "content2_17_node4"],
    ["fireLine4", "content2_17_node2", "content2_17_node5"],
    ["fireLine5", "content2_17_node5", "content2_17_node8"],
    ["fireLine6", "content2_17_node3", "content2_17_node6"],
    ["fireLine7", "content2_17_node6", "content2_17_node9"],
    ["fireLine8", "content2_17_node4", "content2_17_node7"],
    ["fireLine9", "content2_17_node7", "content2_17_node10"],

    // right branch
    ["fireLine10", "content2_17_node2", "content2_17_node11"],
    ["fireLine11", "content2_17_node11", "content2_17_node12"],
    ["fireLine12", "content2_17_node11", "content2_17_node25", "#1313ffff"],
    ["fireLine13", "content2_17_node11", "content2_17_node26", "#1313ffff"],
    ["fireLine14", "content2_17_node12", "content2_17_node13"],
    ["fireLine15", "content2_17_node12", "content2_17_node16"],
    ["fireLine16", "content2_17_node13", "content2_17_node14"],
    ["fireLine17", "content2_17_node14", "content2_17_node15"],
    ["fireLine18", "content2_17_node16", "content2_17_node17"],
    ["fireLine19", "content2_17_node17", "content2_17_node18"],
    ["fireLine20", "content2_17_node16", "content2_17_node19"],
    ["fireLine21", "content2_17_node17", "content2_17_node20"],
    ["fireLine22", "content2_17_node18", "content2_17_node21"],
    ["fireLine23", "content2_17_node15", "content2_17_node22"],
    ["fireLine24", "content2_17_node18", "content2_17_node22"],
    ["fireLine25", "content2_17_node22", "content2_17_node23"],
    ["fireLine26", "content2_17_node23", "content2_17_node24"],

    // HEAT
    ["fireLine27", "content2_17_node11", "content2_17_node27"],
    ["fireLine28", "content2_17_node27", "content2_17_node28"],
    ["fireLine29", "content2_17_node28", "content2_17_node48"],
    ["fireLine30", "content2_17_node27", "content2_17_node38"],
    ["fireLine31", "content2_17_node28", "content2_17_node30"],
    ["fireLine32", "content2_17_node30", "content2_17_node31"],
    ["fireLine33", "content2_17_node31", "content2_17_node32"],
    ["fireLine34", "content2_17_node31", "content2_17_node49"],
    ["fireLine35", "content2_17_node32", "content2_17_node33"],

    // mult
    ["fireLine36", "content2_17_node30", "content2_17_node34"],
    ["fireLine37", "content2_17_node34", "content2_17_node35"],
    ["fireLine38", "content2_17_node35", "content2_17_node36"],
    ["fireLine39", "content2_17_node36", "content2_17_node37"],

    // m2
    ["fireLine40", "content2_17_node4", "content2_17_node39"],
    ["fireLine41", "content2_17_node39", "content2_17_node40"],
    ["fireLine42", "content2_17_node33", "content2_17_node41"],
    ["fireLine43", "content2_17_node33", "content2_17_node42"],
    ["fireLine44", "content2_17_node37", "content2_17_node43"],
    ["fireLine45", "content2_17_node37", "content2_17_node44"],

    // m4
    ["fireLine46", "content2_17_node22", "content2_17_node45"],
    ["fireLine47", "content2_17_node22", "content2_17_node46"],
    ["fireLine48", "content2_17_node46", "content2_17_node47"],

    // m5
    ["fireLine49", "content2_17_node38", "content2_17_node50"],
    ["fireLine50", "content2_17_node50", "content2_17_node51"],
    ["fireLine51", "content2_17_node50", "content2_17_node52"],
    ["fireLine52", "content2_17_node52", "content2_17_node53"],
    ["fireLine53", "content2_17_node52", "content2_17_node54"],
    ["fireLine54", "content2_17_node54", "content2_17_node55"],
    ["fireLine55", "content2_17_node54", "content2_17_node56"],
    ["fireLine56", "content2_17_node56", "content2_17_node57"],

    // m6
    ["fireLine57", "content2_17_node5", "content2_17_node58"],
    ["fireLine58", "content2_17_node6", "content2_17_node59"],
    ["fireLine59", "content2_17_node7", "content2_17_node60"],
    ["fireLine60", "content2_17_node11", "content2_17_node61", "#1313ffff"],
    ["fireLine61", "content2_17_node11", "content2_17_node62", "#1313ffff"],

    // m7
    ["fireLine62", "content2_17_node56", "content2_17_node63"],
    ["fireLine63", "content2_17_node35", "content2_17_node64"],
  ];

  connections.forEach(([id, a, b, color]) => {
    if (rects[a] && rects[b]) {
      initLine(id, a, b, svg, color || "#ff1313ff");
      updateLine(id, rects, parentRect, scrollLeft, scrollTop);
    }
  });
}

function waterLines() {
  const svg = document.getElementById("content2_19_lineLayer");
  if (!svg) return;

  const parent = svg.parentElement;
  const parentRect = parent.getBoundingClientRect();
  const scrollLeft = parent.scrollLeft || 0;
  const scrollTop = parent.scrollTop || 0;

  const computedStyle = window.getComputedStyle(parent);
  const transform = computedStyle.transform;

  let scaleX = 1, scaleY = 1;
  if (transform && transform !== 'none') {
    const match = transform.match(/matrix\(([^)]+)\)/);
    if (match) {
      const values = match[1].split(',').map(Number);
      scaleX = values[0]; // m11
      scaleY = values[3]; // m22
    }
  }

  const rects = {};
  const allNodes = document.querySelectorAll("[id^='content2_19_node']");
  allNodes.forEach(el => {
    if (checkShow(el.id)) {
      const rect = el.getBoundingClientRect();
      rects[el.id] = {
        top: (rect.top - parentRect.top + scrollTop) / scaleY,
        left: (rect.left - parentRect.left + scrollLeft) / scaleX,
        width: rect.width / scaleX,
        height: rect.height / scaleY
      };
    } else {
      rects[el.id] = null;
    }
  });

  svg.style.position = 'absolute';
  svg.style.top = '0';
  svg.style.left = '0';

  svg.setAttribute("width", parent.scrollWidth);
  svg.setAttribute("height", parent.scrollHeight);


  const connections = [
    // water pool and erbs
    ["waterLine1", "content2_19_node1", "content2_19_node2"],
    ["waterLine2", "content2_19_node2", "content2_19_node3"],
    ["waterLine3", "content2_19_node2", "content2_19_node5"],
    ["waterLine4", "content2_19_node3", "content2_19_node4"],
    ["waterLine5", "content2_19_node5", "content2_19_node4"],
    ["waterLine6", "content2_19_node3", "content2_19_node6"],
    ["waterLine7", "content2_19_node6", "content2_19_node7"],
    ["waterLine8", "content2_19_node7", "content2_19_node8"],
    ["waterLine9", "content2_19_node8", "content2_19_node9"],

    ["waterLine10", "content2_19_node4", "content2_19_node22"],
    ["waterLine11", "content2_19_node22", "content2_19_node23"],
    ["waterLine12", "content2_19_node22", "content2_19_node25"],
    ["waterLine13", "content2_19_node23", "content2_19_node24"],
    ["waterLine14", "content2_19_node24", "content2_19_node25"],

    ["waterLine15", "content2_19_node24", "content2_19_node26"],
    ["waterLine16", "content2_19_node26", "content2_19_node27"],
    ["waterLine17", "content2_19_node27", "content2_19_node28"],
    ["waterLine18", "content2_19_node26", "content2_19_node29"],
    ["waterLine19", "content2_19_node28", "content2_19_node29"],

    ["waterLine20", "content2_19_node6", "content2_19_node10"],
    ["waterLine21", "content2_19_node10", "content2_19_node11"],
    ["waterLine22", "content2_19_node11", "content2_19_node12"],
    ["waterLine23", "content2_19_node12", "content2_19_node13"],


    ["waterLine24", "content2_19_node10", "content2_19_node14"],
    ["waterLine25", "content2_19_node14", "content2_19_node15"],
    ["waterLine26", "content2_19_node15", "content2_19_node16"],
    ["waterLine27", "content2_19_node16", "content2_19_node17"],

    ["waterLine28", "content2_19_node14", "content2_19_node18"],
    ["waterLine29", "content2_19_node18", "content2_19_node19"],
    ["waterLine30", "content2_19_node19", "content2_19_node20"],
    ["waterLine31", "content2_19_node20", "content2_19_node21"],

    ["waterLine32", "content2_19_node2", "content2_19_node30"],
    ["waterLine33", "content2_19_node3", "content2_19_node30"],
    ["waterLine34", "content2_19_node2", "content2_19_node31"],
    ["waterLine35", "content2_19_node5", "content2_19_node31"],
    ["waterLine36", "content2_19_node3", "content2_19_node32"],
    ["waterLine37", "content2_19_node4", "content2_19_node32"],
    ["waterLine38", "content2_19_node4", "content2_19_node33"],
    ["waterLine39", "content2_19_node5", "content2_19_node33"],

    ["waterLine40", "content2_19_node22", "content2_19_node34"],
    ["waterLine41", "content2_19_node24", "content2_19_node35"],
    ["waterLine42", "content2_19_node24", "content2_19_node36"],
    ["waterLine43", "content2_19_node28", "content2_19_node37"],
    ["waterLine44", "content2_19_node28", "content2_19_node38"],

  ];


  connections.forEach(([id, a, b, color]) => {
    if (rects[a] && rects[b]) {
      initLine(id, a, b, svg, color || "#1313ffff");
      updateLine(id, rects, parentRect, scrollLeft, scrollTop);
    }
  });
}

function changePage(type, page) {

  const hideElements = (ids) => ids.forEach(id => unlockShow(id, false));
  const showElements = (ids) => ids.forEach(id => unlockShow(id, true));

  if (type === "mainMenu") {
    // Nasconde tutto
    hideElements([
      "content2_1", "content2_2", "fcontent2_3", "content2_4", "content2_5", "content2_6", "content2_7", "content2_8", "content2_10", "content2_11", "content2_12", "content2_13", "content2_14", "content2_15", "content2_16", "content2_17", "content2_18", "content2_19", "content2_20",
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

  if (type === "potionUpgrades") {
    // Nasconde tutto
    hideElements([
      "content2_19_potionUpgrade_selector_content1", "content2_19_potionUpgrade_selector_content2", "content2_19_potionUpgrade_selector_content3",
    ]);

    unlockShow(page, true)
  }

  if (type === "page") {
    // Nasconde tutto
    hideElements([
      "fp2_content2", "fp2_content3",
    ]);

    unlockShow(page, true)
  }

}

async function visualLoopFunction() {

  unlockShow("mainMenuDirectionArrow1", false)

  if (checkShow("content2_4") || checkShow("content2_10")) {
    visualChallenger()
    menuDirectionArrow("content2_4")
  }

  if (checkShow("content2_6")) {
    visualHunting()
    menuDirectionArrow("content2_6")
  }

  if (checkShow("content2_11")) {
    visualAttributes()

    menuDirectionArrow("content2_11_cont")
  }

  if (waiting == false) {
    manualVisualLoop();
    visualValute();
  }

  if (checkShow("content2_1")) {
    visualTraining()
    menuDirectionArrow("content2_1")
  }

  if (checkShow("content2_8")) {
    visualUniversal()
    ascensionRings('content2_8', IUniversal.universe, IShowableClass.svg.ascensionCirclesScale, 1, 0.5);
  }

  if (checkShow("content2_7")) {
    visualEnergy()
    menuDirectionArrow("content2_7")
  }

  if (checkShow("options")) {
    visualOptions()
  }

  visualMenu()

  if (checkShow("content2_10")) {
    menuDirectionArrow("content2_10")
  }

  if (checkShow("fp3_content1_8")) {
    visualAutomation()
    menuDirectionArrow("fp3_content1_8")
  }

  if (checkShow("content2_17")) {
    visualTree()
    menuDirectionArrow("content2_17")
    fireLines()
  }

  if (checkShow("content2_19")) {

    visualWaterTree()
    waterLines()
  }

  update("content2_17_svg1", svgFire(f(IUniversal.fire)))
  visualLore()

  //visualProgress()
  visualInventoryWater()

}

function svgLoad() {
  //svg

  IAnimation.powerSphere.sphere1 = visualSvg(f(IFight.youStats.life).mul(f(IFight.youStats.damage)));

  if (f(IFight.challengers.baseChallenger.level).lte(f(f(IFightIn.challengers.baseChallenger.maxLevel)))) {
    IAnimation.powerSphere.sphere2 = visualSvg(f(IFightIn.challengers.baseChallenger.damage).mul(f(IFightIn.challengers.baseChallenger.life)));
  } else {
    IAnimation.powerSphere.sphere2 = ""
  }

  IAnimation.powerSphere.sphere3 = visualSvg(f(IUniversalChallenger.challengers.universalChallenger.damage).mul(f(IUniversalChallenger.challengers.universalChallenger.life)));

  //spheres
}

function svgConcentricBitNode(value, viewSize = 100) {
  const SVG_NS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(SVG_NS, "svg");

  svg.setAttribute("xmlns", SVG_NS);
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.setAttribute("viewBox", `0 0 ${viewSize} ${viewSize}`);
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svg.style.display = "block";

  const cx = viewSize / 2;
  const cy = viewSize / 2;
  const radius = viewSize * 0.45;

  const baseCircle = document.createElementNS(SVG_NS, "circle");
  baseCircle.setAttribute("cx", cx);
  baseCircle.setAttribute("cy", cy);
  baseCircle.setAttribute("r", radius);
  baseCircle.setAttribute("fill", "#000");
  svg.appendChild(baseCircle);

  const maxBit = Math.min(10, Math.floor(Math.log2(value)) + 1);

  for (let bit = 0; bit < maxBit; bit++) {
    if ((value >> bit) & 1) {
      const r = radius * 0.1 + (bit / 10) * radius * 0.8;
      let element;

      if (bit % 2 === 0) {
        element = document.createElementNS(SVG_NS, "circle");
        element.setAttribute("cx", cx);
        element.setAttribute("cy", cy);
        element.setAttribute("r", r);
      } else {
        element = document.createElementNS(SVG_NS, "path");
        const points = 60;
        let d = "";
        for (let i = 0; i <= points; i++) {
          const angle = (i / points) * 2 * Math.PI;
          const radiusOffset = Math.sin(i * 3 + bit) * (r * 0.05);
          const x = cx + (r + radiusOffset) * Math.cos(angle);
          const y = cy + (r + radiusOffset) * Math.sin(angle);
          d += i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
        }
        d += " Z";
        element.setAttribute("d", d);
      }

      element.setAttribute("fill", "none");
      const hue = 200 + bit * 15;
      element.setAttribute("stroke", `hsl(${hue % 360}, 80%, 70%)`);
      element.setAttribute("stroke-width", "1.5");
      svg.appendChild(element);
    }
  }

  // Ecco la modifica: serializzo l'SVG in stringa per innerHTML
  return new XMLSerializer().serializeToString(svg);
}

function createSquareSvg(color = "#6cf", strokeWidth = 4, viewSize = 100) {
  const SVG_NS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("xmlns", SVG_NS);
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.setAttribute("viewBox", `0 0 ${viewSize} ${viewSize}`);
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

  const size = viewSize - strokeWidth * 2;

  // Quadrato esterno con angoli smussati
  const rectOuter = document.createElementNS(SVG_NS, "rect");
  rectOuter.setAttribute("x", strokeWidth);
  rectOuter.setAttribute("y", strokeWidth);
  rectOuter.setAttribute("width", size);
  rectOuter.setAttribute("height", size);
  rectOuter.setAttribute("rx", strokeWidth * 1.2); // angoli smussati
  rectOuter.setAttribute("ry", strokeWidth * 1.2);
  rectOuter.setAttribute("fill", "none");
  rectOuter.setAttribute("stroke", color);
  rectOuter.setAttribute("stroke-width", strokeWidth);

  // Bordo interno più sottile → effetto “doppio bordo”
  const rectInner = document.createElementNS(SVG_NS, "rect");
  rectInner.setAttribute("x", strokeWidth * 2);
  rectInner.setAttribute("y", strokeWidth * 2);
  rectInner.setAttribute("width", size - strokeWidth * 2);
  rectInner.setAttribute("height", size - strokeWidth * 2);
  rectInner.setAttribute("rx", strokeWidth);
  rectInner.setAttribute("ry", strokeWidth);
  rectInner.setAttribute("fill", "none");
  rectInner.setAttribute("stroke", color);
  rectInner.setAttribute("stroke-width", strokeWidth / 2);

  svg.appendChild(rectOuter);
  svg.appendChild(rectInner);

  return svg;
}

function svgConcentricString(value, viewSize = 200) {
  const node = svgConcentricBitNode(value, viewSize);
  return new XMLSerializer().serializeToString(node);
}

function createSquareSvgString(color = "#6cf", strokeWidth = 4, viewSize = 200) {
  const node = createSquareSvg(color, strokeWidth, viewSize);
  return new XMLSerializer().serializeToString(node);
}

function pressSvg(startX, finishX, startY, finishY, rotation = 0, delay = 1000, image) {
  const SVG_NS = "http://www.w3.org/2000/svg";
  const XLINK_NS = "http://www.w3.org/1999/xlink";

  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("preserveAspectRatio", "none");
  svg.style.position = "absolute";
  svg.style.top = "0";
  svg.style.left = "0";
  svg.style.zIndex = -1;

  // sfondo trasparente
  const background = document.createElementNS(SVG_NS, "rect");
  background.setAttribute("x", 0);
  background.setAttribute("y", 0);
  background.setAttribute("width", 100);
  background.setAttribute("height", 100);
  background.setAttribute("fill", "transparent");
  svg.appendChild(background);

  const width = 20;
  const height = 20;
  const img = document.createElementNS(SVG_NS, "image");
  img.setAttribute("x", -10);
  img.setAttribute("y", 0);
  img.setAttribute("width", width);
  img.setAttribute("height", height);
  img.setAttributeNS(XLINK_NS, "href", image);
  svg.appendChild(img);

  const heightPos = height / 2;

  img.animate([
    { transform: `translate(${startX}%, ${startY - heightPos}%) rotate(${rotation}deg)` },
    { transform: `translate(${finishX}%, ${finishY - heightPos}%) rotate(${rotation}deg)` }
  ], {
    duration: delay * 0.02,
    easing: "linear",
    fill: "forwards"
  });

  img.animate([
    { transform: `translate(${finishX}%, ${finishY - heightPos}%) rotate(${rotation}deg)` },
    { transform: `translate(${startX}%, ${startY - heightPos}%) rotate(${rotation}deg)` }
  ], {
    duration: delay * 0.98,
    delay: delay * 0.1,
    easing: "linear",
    fill: "forwards"
  });

  return svg; // ritorna nodo SVG
}

function gearDivString(duration = 1000, image = "images/gear4.png", type) {
  if (type == "stop") {
    return `
    <div class="" style="
    width: 100%;
    height: 100%;
      background-image: url('${image}');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      z-index: 2;
    "></div>
  `;
  }
  if (type == "fastRotation") {
    return `
  <div style="
    width: 100%;
    height: 100%;
    background-image: url('${image}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    animation: spinFast ${duration}ms cubic-bezier(0.0, 0.0, 1.0, 1.0) infinite;
    z-index: 2;
  "></div>
`;
  }


}

function stringToNode(str) {
  const temp = document.createElement("div");
  temp.innerHTML = str.trim();
  return temp.firstChild;
}

var SaveGameLoop = window.setInterval(function () {
  saveGameData();

}, 500);

function mainGameLoop() {
  visualLoopFunction()

  requestAnimationFrame(mainGameLoop)
}


var noSincLoop = window.setInterval(function () {

  idleTimeChecker()
  fullSetter()
  saveGameData();
  svgLoad();      // aggiorna il menu

  if (freeTick) {
    automation()
    document.getElementById("gameCurtain").style.display = "none"
  }
  if (!freeTick) {
    document.getElementById("gameCurtain").style.display = ""
  }

  freeTick = true

  IGameData.universeTime = f(IGameData.universeTime).add(0.050)

}, 50)


function idleTimeChecker() {

  if (IGameData.lastTick != null) {
    var diff = Date.now() - IGameData.lastTick
  } else {
    diff = f(0)
  }

  let diffSec = diff / 1000;

  if (diffSec > IGameData.offProgressLimit) {
    diffSec = IGameData.offProgressLimit;
  }
  if (diffSec < 2) {
    diffSec = 1;
  }
  if (diffSec >= 2) {
    offProgress(diffSec);
  }

  IGameData.lastTick = Date.now()
}

function manualVisualLoop() {
  loopShow();
}

function buyMultiple(priceIdentity, price, objectToUpdate, propertyToUpdate, effect, type, multiple, level, maxLevel) {
  // definisco il limite massimo in base a multiple
  let limit;
  if (multiple == 0) limit = 1;
  else if (multiple == 1) limit = 10;
  else limit = Infinity; // multiple === "2"

  let count = 1;

  while (buy(priceIdentity, price, objectToUpdate, propertyToUpdate, effect, type) && count < limit) {
    valuesSetter()

    var lev = level.level
    var maxLev = maxLevel.maxLevel
    if (maxLev != undefined) {
      if (f(lev).gte(f(maxLev))) {
        return;
      }
    }
    count++;
  }
}

//AUTOMATION

function assignGroup(objIn, obj, element) {
  var sel = obj[element]
  var selIn = objIn[element]

  var selGroup = ISelUpgrade.group[selIn.group]

  if (sel.active) {
    sel.active = false
  }
  else {
    if (f(selGroup.num).lt(f(selGroup.maxNum))) {
      sel.active = true
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

function addElement(type, key) {

  if (type == "void") {
    const gridContainer = document.getElementById("content2_19_grid1");
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
            drag: "inventory",
          };

          return true;
        }
      }
    }
  }

  if (type == "potion") {

    // Controlla se l'oggetto è già nell'inventario
    for (let pos in IUniversal.inventory) {
      const item = IUniversal.inventory[pos];

      if (item.key === key) {
        return false; // Oggetto già presente
      }
    }

    const gridContainer = document.getElementById("content2_19_grid1");
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
            amount: 1,
            drag: "inventory",
          };

          return true;
        }
      }
    }
  }

  return false;
}

function waterTutorial(number) {
  if (f(number).gt(f(IUniversal.waterTutorial))) {
    IUniversal.waterTutorial = number
  }
}

function craft(type, object) {
  waterTutorial(1)
  if (type == "potion") {

    var sel = IUniversalIn.potionInfo[object]

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

    // Assegnazione dell'oggetto craftato all'inventario
    IUniversal.inventoryStorage[keyName] = {
      id: sel.id,
      merges: sel.merges,
      level: sel.level,

      effects: sel.effects,
    };

    IUniversalIn.inventoryStorage[keyName] = {
      type: sel.type,
      name: sel.name,
      maxLevel: sel.maxLevel,
      content: "",
      content2: "",
      priceTier: sel.priceTier,
      prices: sel.prices,
      image: sel.image,
    };

    addElement("potion", keyName)
  }
}

function potionInfoStatic() {
  for (let x in IUniversalIn.potionInfo) {
    var sel = IUniversalIn.potionInfo[x]

    //level

    sel.maxLevel = f(10).add(f(sel.merges).mul(f(5)))

    var selName = sel.name;
    //price
    for (let Obj in sel.prices) {
      if (sel) {
        if (sel.prices) {

          var selPrice = sel.prices[Obj]

          selPrice.price = selPrice.priceFormula(selPrice.tier, sel.level, sel.merges);
        }
      }
    }

    //priceText
    var priceText = "";

    var priceText = "<div class='price-grid'>"; // Avvia la griglia

    for (let Obj in sel.prices) {
      var selPrice = sel.prices[Obj];
      var priceValue = selPrice.priceFormula(selPrice.tier, sel.level, sel.merges);
      var priceIdentity = selPrice.priceIdentity;

      var c = checkBuy(selPrice.priceIdentity, selPrice.priceFormula(selPrice.tier, sel.level, sel.merges), selPrice.type) ? "green" : "red";

      var priId = ""
      if (priceIdentity == "erbs") { priId = "Erbs" }
      if (priceIdentity == "fluidFire") { priId = "Fluid Fire" }
      if (priceIdentity == "waterGem") { priId = "Water Gem" }
      if (priceIdentity == "pyroFrost") { priId = "Pyrofrost" }


      // Aggiungi ogni prezzo come un "item" nella griglia
      if (f(priceValue).gt(f(0))) {
        priceText += `<div class="${c} price-item roundedEdges"><span class="boldBlackBorder">${format(f(priceValue), 0)}</span> ${priId}</div>`;
      }
    }

    priceText += "</div>"; // Chiudi la griglia

    var effectText = "";
    //effectsText
    for (let Obj in sel.effects) {
      var sel3 = sel.effects[Obj]
      var type = sel3.type;

      let found = null;

      for (let key in IUniversalIn.potionEffects) {
        if (IUniversalIn.potionEffects[key].type == type) {
          found = IUniversalIn.potionEffects[key];
          break;
        }
      }

      if (found) {
        effectText += `<div>Tier ${sel3.level}/${sel3.maxLevel}</div>
                       <div>${found.contentFormula()}</div>`;
      }
    }

    sel.content = `<div class="relative height100 width100  defaultStyle">
                        <div class="row height50">
                          <div class="height100 width40 backgroundImage" style="background-image: url('${sel.image}');">
                            <div class="topLeft">${sel.level}</div>
                          </div>
                          <div class="height100 width60 fontSize08 columns ">${effectText}</div>
                        </div>
                        <div class=" line"></div>
                        <div class=" height50 width100 column">${priceText}</div>

                      </div>`;

    sel.content2 = `
  <div class="relative height100 width100 bDefaultButtonSkin roundedEdges backgroundBlue1 ">
    <div class="backgroundBlue2 height20 width100 roundedEdges backgroundBlue2 relative">
      <div class=" absolute padding2 center fontSize09">${sel.name}</div>
      <div class=" left absolute padding2 grey centerTop">${sel.level}/${sel.maxLevel}</div>
      <div class=" right absolute padding2 grey centerTop">T${sel.merges}</div>
    </div>
    <div class="height50 width100 row ">
      <div class="height100 square backgroundImage" style="background-image: url('${sel.image}');">
      </div>
      <div class="height100 width100 fontSize08 columns margin1 overflowY">${effectText}</div>
    </div>
    
    <div class="height30 width100 column roundedEdges">${priceText}</div>
  </div>
`;

    sel.button2 = "CRAFT"
  }
}

function potionEquipmentStatic() {
  for (let x in IUniversal.equipment) {
    var sel = IUniversal.equipment[x]
    var selIn = IUniversalIn.equipment[x]

    var selId = sel.key
    var selInId = selIn.key

    var effectText = ""

    if (selId != null) {

      var potion = IUniversal.inventoryStorage[selId]

      for (let Obj in potion.effects) {
        var sel3 = potion.effects[Obj]
        var type = sel3.type;

        let found = null;

        for (let key in IUniversalIn.potionEffects) {
          if (IUniversalIn.potionEffects[key].type == type) {
            sel3.value = IUniversalIn.potionEffects[key].valueFormula(potion.level, sel3.level)
            sel3.contentFormula = IUniversalIn.potionEffects[key].contentFormula

            found = IUniversalIn.potionEffects[key];
            break;
          }
        }

        if (found) {
          effectText += `<div>Tier ${sel3.level}/${sel3.maxLevel}</div>
          <div class="padding2">${sel3.contentFormula()}</div>
          <div>&nbsp;</div>`;
        }
      }

    }
    selIn.content = `<div>${effectText}</div>`

  }
}

function potionSetter() {
  for (let x in IUniversal.inventoryStorage) {

    var sel = IUniversal.inventoryStorage[x];
    var selId = sel.id

    var selIn = IUniversalIn.potionInfo[selId];

    if (!IUniversalIn.inventoryStorage[x]) {
      IUniversalIn.inventoryStorage[x] = {
        type: deepClone(selIn.type),
        name: deepClone(selIn.name),
        content: deepClone(selIn.content),
        content2: deepClone(selIn.content2),
        priceTier: deepClone(selIn.priceTier),
        prices: deepClone(selIn.prices),
        image: deepClone(selIn.image),
      };
    }

    var sel2 = IUniversalIn.inventoryStorage[x];



    sel2.maxLevel = f(10).add(f(sel.merges).mul(f(5)))

    var selName = selIn.name;

    //price
    if (sel2) {
      if (sel2.prices) {
        for (let Obj in sel2.prices) {

          var selPrice = sel2.prices[Obj]

          selPrice.price = selPrice.priceFormula(selPrice.tier, sel.level, sel.merges);
        }
      }
    }

    //priceText
    var priceText = "";

    var priceText = "<div class='price-grid'>"; // Avvia la griglia

    if (sel2) {
      if (sel2.prices) {
        for (let Obj in sel2.prices) {
          var selPrice = sel2.prices[Obj];

          var priceValue = selPrice.priceFormula(selPrice.tier, sel.level, sel.merges);
          var priceIdentity = selPrice.priceIdentity;

          var c = checkBuy(selPrice.priceIdentity, selPrice.priceFormula(selPrice.tier, sel.level, sel.merges), selPrice.type) ? "green" : "red";

          var priId = ""
          if (priceIdentity == "erbs") { priId = "Erbs" }
          if (priceIdentity == "fluidFire") { priId = "Fluid Fire" }
          if (priceIdentity == "waterGem") { priId = "Water Gem" }
          if (priceIdentity == "pyroFrost") { priId = "Pyrofrost" }



          // Aggiungi ogni prezzo come un "item" nella griglia
          if (f(priceValue).gt(f(0))) {
            priceText += `<div class="${c} price-item roundedEdges"><span class="boldBlackBorder">${format(f(priceValue), 0)}</span> ${priId}</div>`;
          }
        }
      }
    }

    var effectText = "";

    //potion effects
    for (let Obj in sel.effects) {
      var sel4 = sel.effects[Obj]
      var type = sel4.type;

      let found = null;

      for (let key in IUniversalIn.potionEffects) {
        if (IUniversalIn.potionEffects[key].type == type) {

          sel4.value = IUniversalIn.potionEffects[key].valueFormula(sel.level, sel4.level)
          sel4.contentFormula = IUniversalIn.potionEffects[key].contentFormula


          found = IUniversalIn.potionEffects[key];
          break;
        }
      }

      if (found) {
        effectText += `<div>Tier ${sel4.level}/${sel4.maxLevel}</div>
                       <div>${sel4.contentFormula()}</div>`;
      }
    }

    var equipStatus = returnPotionEquipStatus(x)

    sel2.content = `<div class="relative height100 width100 backgroundTransparent backgroundImage margin2 noClick" style="background-image: url('${sel2.image}')">
                      <div class="topLeft absolute padding2 grey">${sel.level}/${sel2.maxLevel}</div>
                      <div class="topRight absolute padding2 grey">T${sel.merges}</div>
                      ${equipStatus}
                    </div>`;

    sel2.content2 = `
  <div class="relative height100 width100 bDefaultButtonSkin roundedEdges backgroundBlue1 ">
    <div class="backgroundBlue2 height20 width100 roundedEdges backgroundBlue2 relative">
      <div class=" absolute padding2 center">${sel2.name}</div>
      <div class=" left absolute padding2 grey centerTop">${sel.level}/${sel2.maxLevel}</div>
      <div class=" right absolute padding2 grey centerTop">T${sel.merges}</div>
    </div>
    <div class="height50 width100 row ">
      <div class="height100 square backgroundImage" style="background-image: url('${sel2.image}');">
      </div>
      <div class="height100 width100 fontSize08 columns margin1 overflowY">${effectText}</div>
    </div>
    
    <div class="height30 width100 column roundedEdges">${priceText}</div>
  </div>
`;
  }
}

function deepClone(obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;
  if (typeof obj === "function") return obj;
  if (hash.has(obj)) return hash.get(obj); // previene riferimenti circolari

  let clone = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
  hash.set(obj, clone);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], hash);
    }
  }

  return clone;
}

function potionUpgrade() {
  var potion1 = IUniversal.inventoryStorage[IUniversal.potionUpgrade.item1.key]
  var potion1In = IUniversalIn.inventoryStorage[IUniversal.potionUpgrade.item1.key]

  //reset new potion level

  if (potion1) {

    var newPotion = deepClone(potion1);

    var newPotionIn = deepClone(potion1In);

    newPotion.level = f(potion1.level).add(f(1))

    newPotion.maxLevel = f(10).add(f(f(newPotion.merges)).mul(f(5)))

    //price

    for (let Obj in newPotionIn.prices) {

      var selPrice = newPotionIn.prices[Obj]
      selPrice.price = selPrice.priceFormula(selPrice.tier, newPotion.level, newPotion.merges);

    }

    //price

    for (let x in potion1.prices) {
      var sel1 = potion1.prices[x]

      if (f(sel1.tier).gt(sel2.tier)) {
        sel2.tier = sel1.tier
      } else {
        sel1.tier = sel2.tier
      }
    }

    return {
      newPotion: newPotion,
      newPotionIn: newPotionIn
    };
  } else {
    return {
      newPotion: null,
      newPotionIn: null
    };
  }
}

function potionFusion() {
  var potion1 = IUniversal.inventoryStorage[IUniversal.potionFusion.item1.key]
  var potion2 = IUniversal.inventoryStorage[IUniversal.potionFusion.item2.key]

  var potion1In = IUniversalIn.inventoryStorage[IUniversal.potionFusion.item1.key]
  var potion2In = IUniversalIn.inventoryStorage[IUniversal.potionFusion.item2.key]

  //reset new potion level

  if (potion1 && potion2) {

    var newPotion = deepClone(potion1);
    var newPotionIn = deepClone(potion1In);

    var assistPotion = deepClone(potion2);
    var assistPotionIn = deepClone(potion2In);

    newPotion.level = f(0)

    newPotion.maxLevel = f(10).add(f(f(newPotion.merges).add(f(1))).mul(f(5)))

    //collect all the potion2 effects
    var potionEffects = []

    for (let x in potion2.effects) {
      var sel = potion2.effects[x]
      potionEffects.push(sel)
    }

    //cycle all potions collected, add the level to potion1 effects if they match, add them if they dont match.
    //every time you add levels of an effect, increment merges by that level, when you add a potion, add its level to merges.

    for (let x in potionEffects) {
      var sel = potionEffects[x]
      var selIn = potionEffects[x]
      var found = false;

      for (let y in newPotion.effects) {
        var sel2 = newPotion.effects[y]

        if (sel.type == sel2.type) {
          if (f(sel2.level).add(f(sel.level)).lte(f(sel.maxLevel))) {
            sel2.level = f(sel2.level).add(f(sel.level))
            newPotion.merges = f(newPotion.merges).add(f(sel.level))
            found = true;
          } else {
            newPotion.merges = f(newPotion.merges).add(f(sel.level))
            found = true;
          }
        }
      }
      if (found == false) {
        newPotion.effects["effect" + (Object.keys(newPotion.effects).length + 1)] = sel;
        newPotion.merges = f(newPotion.merges).add(f(sel.level))
      }
    }

    //price
    if (potion1In) {
      if (potion1In.prices) {
        for (let x in potion1In.prices) {
          var sel1 = newPotionIn.prices[x]
          var sel2 = assistPotionIn.prices[x]

          if (f(sel1.tier).gt(sel2.tier)) {
            sel2.tier = sel1.tier
          } else {
            sel1.tier = sel2.tier
          }
        }
      }
    }

    if (potion1In) {
      if (potion1In.prices) {
        for (let Obj in newPotionIn.prices) {

          var selPrice = newPotionIn.prices[Obj]
          selPrice.price = selPrice.priceFormula(selPrice.tier, newPotion.level, newPotion.merges);

        }
      }
    }


    return {
      newPotion: newPotion,
      newPotionIn: newPotionIn
    };
  } else {
    return {
      newPotion: null,
      newPotionIn: null
    };
  }
}

function potionVisual(element, elementIn) {
  var sel = element

  var selId = element.id

  var selIn = elementIn

  var selName = selIn.name;
  //price

  for (let Obj in selIn.prices) {

    var selPrice = selIn.prices[Obj]

    selPrice.price = selPrice.priceFormula(selPrice.tier, sel.level, sel.merges);

  }


  //priceText
  var priceText = "";

  var priceText = "<div class='price-grid'>"; // Avvia la griglia

  for (let Obj in selIn.prices) {
    var selPrice = selIn.prices[Obj];

    var priceValue = selPrice.price;
    var priceIdentity = selPrice.priceIdentity;

    var c = checkBuy(selPrice.priceIdentity, selPrice.price, selPrice.type) ? "green" : "red";

    var priId = ""
    if (priceIdentity == "erbs") { priId = "Erbs" }
    if (priceIdentity == "fluidFire") { priId = "Fluid Fire" }
    if (priceIdentity == "waterGem") { priId = "Water Gem" }
    if (priceIdentity == "pyroFrost") { priId = "Pyrofrost" }



    // Aggiungi ogni prezzo come un "item" nella griglia
    if (f(priceValue).gt(f(0))) {
      priceText += `<div class="${c} price-item roundedEdges"><span class="boldBlackBorder">${format(f(priceValue), 0)}</span> ${priId}</div>`;
    }
  }

  var effectText = "";

  //potion effects
  for (let Obj in sel.effects) {
    var sel4 = sel.effects[Obj]
    var type = sel4.type;

    let found = null;

    for (let key in IUniversalIn.potionEffects) {
      if (IUniversalIn.potionEffects[key].type == type) {
        sel4.value = IUniversalIn.potionEffects[key].valueFormula(sel.level, sel4.level)
        sel4.contentFormula = IUniversalIn.potionEffects[key].contentFormula

        found = IUniversalIn.potionEffects[key];
        break;
      }
    }

    if (found) {
      effectText += `<div>Tier ${sel4.level}/${sel4.maxLevel}</div>
      <div>${sel4.contentFormula()}</div>`;
    }
  }

  var selContent = `
  <div class="relative height100 width100 bDefaultButtonSkin roundedEdges backgroundBlue1 ">
    <div class="backgroundBlue2 height20 width100 roundedEdges backgroundBlue2 relative">
      <div class=" absolute padding2 center">${selIn.name}</div>
      <div class=" left absolute padding2 grey centerTop">${sel.level}/${sel.maxLevel}</div>
      <div class=" right absolute padding2 grey centerTop">T${sel.merges}</div>
    </div>
    <div class="height50 width100 row ">
      <div class="height100 square backgroundImage" style="background-image: url('${selIn.image}');">
      </div>
      <div class="height100 width100 fontSize08 columns margin1 overflowY">${effectText}</div>
    </div>
    
    <div class="height30 width100 column roundedEdges">${priceText}</div>
  </div>
`;

  var selContent2 = `<div class="relative height100 width100">
                        <div class="row height50">
                          <div class="height100 width40 backgroundImage" style="background-image: url('${selIn.image}');"></div>
                          <div class="height100 width60 fontSize08 centerDivColumns ">${effectText}</div>
                        </div>
                        <div class=" line"></div>
                        <div class=" height50 width100 column">${priceText}</div>

                      </div>`;

  return selContent
}

function clearInventory() {
  for (let x in IUniversal.inventoryStorage) {
    delete IUniversal.inventoryStorage[x];
  }

  for (let x in IUniversal.inventory) {
    delete IUniversal.inventory[x];
  }
}

function draggableSet(item, key, keyIn, type) {

  item.classList.add("drag");
  item.setAttribute("draggable", "true");

  item.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text/plain", key); // salva la chiave trascinata
    e.dataTransfer.effectAllowed = "move";
  });

  item.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  item.addEventListener("mouseenter", function (e) {
    var selectedKey = eval(key).key;

    if (!IUniversal.lockSelPotion) {
      IUniversal.selPotion = selectedKey || null;
      if (IUniversal.selPotion != null) {
        unlockShow("content2_19_potion_info", true);
      } else {
        unlockShow("content2_19_potion_info", false);

      }
    }
  });

  item.addEventListener("mouseleave", function (e) {
    var selectedKey = eval(key).key;

    if (!IUniversal.lockSelPotion) {
      IUniversal.selPotion = null;
      unlockShow("content2_19_potion_info", false);
    }
  });

  item.addEventListener("click", function (e) {
    e.preventDefault();
    var selectedKey = eval(key).key;

    IUniversal.lockSelPotion = !IUniversal.lockSelPotion

    IUniversal.selPotion = selectedKey || null;
  });

  if (type == "inventory") {
    item.addEventListener("drop", function (e) {
      e.preventDefault();

      var dragged = e.dataTransfer.getData("text/plain");
      var target = key;
      var targetIn = keyIn;

      var draggedKeyString = dragged + ".key"
      var targetKeyString = target + ".key"

      var draggedDrag = eval(dragged + ".drag")
      var targetDrag = eval(target + ".drag")

      var draggedKey = eval(dragged).key;
      var targetKey = eval(target).key;

      if (draggedDrag == "inventory") {


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

        return
      }

      if (draggedDrag == "equipment") {

        eval(`${draggedKeyString} = null`);

        return
      }

    });
  }

  if (type == "equipmentPotion") {
    item.addEventListener("drop", function (e) {
      e.preventDefault();

      var dragged = e.dataTransfer.getData("text/plain");
      var target = key;
      var targetIn = keyIn;

      var draggedKeyString = dragged + ".key"
      var targetKeyString = target + ".key"

      var draggedDrag = eval(dragged + ".drag")
      var targetDrag = eval(targetIn + ".drag")

      var draggedKey = eval(dragged).key;
      var targetKey = eval(target).key;

      if (!(IUniversalIn.inventoryStorage[draggedKey].type == eval(targetIn).type)) {
        return
      }

      if (draggedDrag == "equipment") {
        return
      }

      waterTutorial(2)

      if (draggedKey == null || draggedKey == undefined) {
        eval(`${draggedKeyString} = '${draggedKey}'`);
        eval(`${targetKeyString} = '${draggedKey}'`);
      } else if (targetKey == null || targetKey == undefined) {
        eval(`${targetKeyString} = '${draggedKey}'`);
        eval(`${draggedKeyString} = '${draggedKey}'`);
      } else {
        eval(`${targetKeyString} = '${draggedKey}'`);
        eval(`${draggedKeyString} = '${draggedKey}'`);

      }

    });

    item.addEventListener("click", function (e) {
      e.preventDefault();
      var selectedKey = eval(key).key;

      IUniversal.selPotion = selectedKey || null;
    });
  }

  if (type == "potionSource") {
    item.addEventListener("drop", function (e) {
      e.preventDefault();

      var dragged = e.dataTransfer.getData("text/plain");
      var target = key;
      var targetIn = keyIn;

      var draggedKeyString = dragged + ".key"
      var targetKeyString = target + ".key"

      var draggedDrag = eval(dragged + ".drag")
      var targetDrag = eval(targetIn + ".drag")

      var draggedKey = eval(dragged).key;
      var targetKey = eval(target).key;

      if (!(IUniversalIn.inventoryStorage[draggedKey].type == eval(targetIn).type)) {
        return
      }

      if (draggedDrag == "equipment") {
        return
      }

      for (let x in IUniversal.potionSource) {
        var sel = IUniversal.potionSource[x]
        if (draggedKey == sel.key) {
          return
        }
      }

      if (draggedKey == null || draggedKey == undefined) {
        eval(`${draggedKeyString} = '${draggedKey}'`);
        eval(`${targetKeyString} = '${draggedKey}'`);
      } else if (targetKey == null || targetKey == undefined) {
        eval(`${targetKeyString} = '${draggedKey}'`);
        eval(`${draggedKeyString} = '${draggedKey}'`);
      } else {
        eval(`${targetKeyString} = '${draggedKey}'`);
        eval(`${draggedKeyString} = '${draggedKey}'`);

      }

    });

    item.addEventListener("click", function (e) {
      e.preventDefault();
      var selectedKey = eval(key).key;

      IUniversal.selPotion = selectedKey || null;
    });
  }

  if (type == "volatile") {
    item.addEventListener("drop", function (e) {
      e.preventDefault();

      var dragged = e.dataTransfer.getData("text/plain");
      var target = key;
      var targetIn = keyIn;

      var draggedKeyString = dragged + ".key"
      var targetKeyString = target + ".key"

      var draggedDrag = eval(dragged + ".drag")
      var targetDrag = eval(targetIn + ".drag")

      var draggedKey = eval(dragged).key;
      var targetKey = eval(target).key;

      if (draggedDrag == "equipment") {
        return
      }

      if (draggedKey == null || draggedKey == undefined) {
        eval(`${draggedKeyString} = '${draggedKey}'`);
        eval(`${targetKeyString} = '${draggedKey}'`);
      } else if (targetKey == null || targetKey == undefined) {
        eval(`${targetKeyString} = '${draggedKey}'`);
        eval(`${draggedKeyString} = '${draggedKey}'`);
      } else {
        eval(`${targetKeyString} = '${draggedKey}'`);
        eval(`${draggedKeyString} = '${draggedKey}'`);

      }

    });

    item.addEventListener("click", function (e) {
      e.preventDefault();
      var selectedKey = eval(key).key;

      IUniversal.selPotion = selectedKey || null;
    });
  }

  if (type == "potionFusion") {
    item.addEventListener("drop", function (e) {
      e.preventDefault();

      var dragged = e.dataTransfer.getData("text/plain");
      var target = key;
      var targetIn = keyIn;

      var draggedKeyString = dragged + ".key"
      var targetKeyString = target + ".key"

      var draggedDrag = eval(dragged + ".drag")
      var targetDrag = eval(targetIn + ".drag")

      var draggedKey = eval(dragged).key;
      var targetKey = eval(target).key;

      if (draggedDrag == "equipment") {
        return
      }

      if (target == "IUniversal.potionFusion['item1']") {
        //if they are the same potion, return
        if (IUniversal.potionFusion['item2'].key == draggedKey) {
          return
        }

        //if they arent the same potion type, return
        if (IUniversal.inventoryStorage[IUniversal.potionFusion['item2'].key]) {
          if (IUniversalIn.inventoryStorage[draggedKey].type != IUniversalIn.inventoryStorage[IUniversal.potionFusion['item2'].key].type) {
            return
          }
        }
      }

      if (target == "IUniversal.potionFusion['item2']") {
        if (IUniversal.potionFusion['item1'].key == draggedKey) {
          return
        }

        if (IUniversal.inventoryStorage[IUniversal.potionFusion['item1'].key]) {

          if (IUniversalIn.inventoryStorage[draggedKey].type != IUniversalIn.inventoryStorage[IUniversal.potionFusion['item1'].key].type) {
            return
          }
        }
      }

      if (draggedKey == null || draggedKey == undefined) {
        eval(`${draggedKeyString} = '${draggedKey}'`);
        eval(`${targetKeyString} = '${draggedKey}'`);
      } else if (targetKey == null || targetKey == undefined) {
        eval(`${targetKeyString} = '${draggedKey}'`);
        eval(`${draggedKeyString} = '${draggedKey}'`);
      } else {
        eval(`${targetKeyString} = '${draggedKey}'`);
        eval(`${draggedKeyString} = '${draggedKey}'`);

      }

    });

    item.addEventListener("click", function (e) {
      e.preventDefault();
      var selectedKey = eval(key).key;

      IUniversal.selPotion = selectedKey || null;
    });
  }

  if (type == "delete") {
    item.addEventListener("drop", function (e) {
      e.preventDefault();

      var dragged = e.dataTransfer.getData("text/plain");

      var draggedKey = eval(dragged).key;

      deletePotion(draggedKey)
    });
  }

  if (type == "default") {
    item.addEventListener("drop", function (e) {
      e.preventDefault();

      var dragged = e.dataTransfer.getData("text/plain");
      var target = key;

      var draggedKey = eval(dragged).key;
      var targetKey = eval(target).key;

      var draggedKeyString = dragged + ".key"
      var targetKeyString = target + ".key"

      var draggedDrag = eval(dragged + ".drag")
      var targetDrag = eval(targetIn + ".drag")

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
}

function deletePotion(element) {
  //inventoryStorage
  delete IUniversal.inventoryStorage[element];

  //inventory
  for (let x in IUniversal.inventory) {
    var sel = IUniversal.inventory[x]

    if (sel.key == element) {
      sel.key = null
    }
  }

  //equipment
  for (let x in IUniversal.equipment) {
    var sel = IUniversal.equipment[x]

    if (sel.key == element) {
      sel.key = null
    }
  }

  //upgrade
  for (let x in IUniversal.potionUpgrade) {
    var sel = IUniversal.potionUpgrade[x]

    if (sel.key == element) {
      sel.key = null
    }
  }

  //source
  for (let x in IUniversal.potionSource) {
    var sel = IUniversal.potionSource[x]

    if (sel.key == element) {
      sel.key = null
    }
  }

  //fusion
  for (let x in IUniversal.potionFusion) {
    var sel = IUniversal.potionFusion[x]

    if (sel.key == element) {
      sel.key = null
    }
  }
}

//AUTOMATION

function automation() {
  if (IUniversal.automation.automation2.active) {
    buyMultiple(IFightIn.normalHunting.hunt1, IFightIn.normalHunting.hunt1, IFight.normalHunting.hunt1, "level", 1, "free", null, IFight.normalHunting.hunt1, IFightIn.normalHunting.hunt1);
    buyMultiple(IFightIn.normalHunting.hunt2, IFightIn.normalHunting.hunt2, IFight.normalHunting.hunt2, "level", 1, "free", null, IFight.normalHunting.hunt2, IFightIn.normalHunting.hunt2);
    buyMultiple(IFightIn.normalHunting.hunt3, IFightIn.normalHunting.hunt3, IFight.normalHunting.hunt3, "level", 1, "free", null, IFight.normalHunting.hunt3, IFightIn.normalHunting.hunt3);
    buyMultiple(IFightIn.normalHunting.hunt4, IFightIn.normalHunting.hunt4, IFight.normalHunting.hunt4, "level", 1, "free", null, IFight.normalHunting.hunt4, IFightIn.normalHunting.hunt4);
    buyMultiple(IFightIn.normalHunting.hunt5, IFightIn.normalHunting.hunt5, IFight.normalHunting.hunt5, "level", 1, "free", null, IFight.normalHunting.hunt5, IFightIn.normalHunting.hunt5);
  }

  if (IUniversal.automation.automation3.active) {
    buyMultiple(IFightIn.normalHuntingRewards.upgrade1, IFightIn.normalHuntingRewards.upgrade1, IFight.normalHuntingRewards.upgrade1, "level", 1, "free", null, IFight.normalHuntingRewards.upgrade1, IFightIn.normalHuntingRewards.upgrade1);
    buyMultiple(IFightIn.normalHuntingRewards.upgrade2, IFightIn.normalHuntingRewards.upgrade2, IFight.normalHuntingRewards.upgrade2, "level", 1, "free", null, IFight.normalHuntingRewards.upgrade2, IFightIn.normalHuntingRewards.upgrade2);
    buyMultiple(IFightIn.normalHuntingRewards.upgrade3, IFightIn.normalHuntingRewards.upgrade3, IFight.normalHuntingRewards.upgrade3, "level", 1, "free", null, IFight.normalHuntingRewards.upgrade3, IFightIn.normalHuntingRewards.upgrade3);
    buyMultiple(IFightIn.normalHuntingRewards.upgrade4, IFightIn.normalHuntingRewards.upgrade4, IFight.normalHuntingRewards.upgrade4, "level", 1, "free", null, IFight.normalHuntingRewards.upgrade4, IFightIn.normalHuntingRewards.upgrade4);
    buyMultiple(IFightIn.normalHuntingRewards.upgrade5, IFightIn.normalHuntingRewards.upgrade5, IFight.normalHuntingRewards.upgrade5, "level", 1, "free", null, IFight.normalHuntingRewards.upgrade5, IFightIn.normalHuntingRewards.upgrade5);
  }


  if (IUniversal.automation.automation4.active) {
    if (!IFight.youStats.onFight1) {
      if (f(IFight.youStats.damage).gt(f(IFightIn.challengers.baseChallenger.damage)) && f(IFight.youStats.life).gt(f(IFightIn.challengers.baseChallenger.life))) {
        document.getElementById("c2_4_VS").click();
      }
    }
  }
  if (IUniversal.automation.automation5.active) {
    document.getElementById("content1_7_ascension_button").onclick();
  }

  // CRIT
  if (IUniversal.automation.automation7.active) {
    buyMultiple(IUniversalIn.attributes.critRate, IUniversalIn.attributes.critRate, IUniversal.attributes.critRate, "level", 1, "uniChallengerFree", null, IUniversal.attributes.critRate, IUniversalIn.attributes.critRate);
    buyMultiple(IUniversalIn.attributes.critDamage, IUniversalIn.attributes.critDamage, IUniversal.attributes.critDamage, "level", 1, "uniChallengerFree", null, IUniversal.attributes.critDamage, IUniversalIn.attributes.critDamage);
  }

  // LIFE REGENERATION
  if (IUniversal.automation.automation8.active) {
    IUniversal.attributes.regeneration.level = f(IUniversal.attributes.regeneration.level).add(f(IGameData.essence));
    buyMultiple(IUniversalIn.attributes.maxRegeneration, IUniversalIn.attributes.maxRegeneration, IUniversal.attributes.maxRegeneration, "level", 1, "uniChallengerFree", null, IUniversal.attributes.maxRegeneration, IUniversalIn.attributes.maxRegeneration);
  }

  // DEFENCE PENETRATION
  if (IUniversal.automation.automation9.active) {
    IUniversal.attributes.defencePenetration.level = f(IUniversal.attributes.defencePenetration.level).add(f(ITraining.base.base1.tot)).add(f(ITraining.base.base2.tot));
    buyMultiple(IUniversalIn.attributes.maxDefencePenetration, IUniversalIn.attributes.maxDefencePenetration, IUniversal.attributes.maxDefencePenetration, "level", 1, "uniChallengerFree", null, IUniversal.attributes.maxDefencePenetration, IUniversalIn.attributes.maxDefencePenetration);
  }

  // DEFENCE
  if (IUniversal.automation.automation10.active) {
    buyMultiple(IUniversalIn.attributes.defence, IUniversalIn.attributes.defence, IUniversal.attributes.defence, "level", 1, "uniChallengerFree", null, IUniversal.attributes.defence, IUniversalIn.attributes.defence);
    buyMultiple(IUniversalIn.attributes.maxDefence, IUniversalIn.attributes.maxDefence, IUniversal.attributes.maxDefence, "level", 1, "uniChallengerFree", null, IUniversal.attributes.maxDefence, IUniversalIn.attributes.maxDefence);
  }

  // LIFE STEAL
  if (IUniversal.automation.automation11.active) {
    IUniversal.attributes.lifeSteal.level = f(IUniversal.attributes.lifeSteal.level).add(IUniversalChallenger.universalCoresProd);
    buyMultiple(IUniversalIn.attributes.lifeStealMax, IUniversalIn.attributes.lifeStealMax, IUniversal.attributes.lifeStealMax, "level", 1, "uniChallengerFree", null, IUniversal.attributes.lifeStealMax, IUniversalIn.attributes.lifeStealMax);
  }

  // SHIELD
  if (IUniversal.automation.automation12.active) {
    IUniversal.attributes.shield.level = f(IUniversal.attributes.shield.level).add(IUniversalChallenger.universalCores);
    buyMultiple(IUniversalIn.attributes.maxShield, IUniversalIn.attributes.maxShield, IUniversal.attributes.maxShield, "level", 1, "uniChallengerFree", null, IUniversal.attributes.maxShield, IUniversalIn.attributes.maxShield);
  }

  // HUNT EVOLUTION
  if (IUniversal.automation.automation13.active) {
    if (f(IUniversal.huntEvolution.b1.level).lt(f(IUniversalIn.huntEvolution.b1.maxLevel))) {
      buyMultiple(IUniversalIn.huntEvolution.b1, IUniversalIn.huntEvolution.b1, IUniversal.huntEvolution.b1, "level", 1, "uniChallengerFree", null, IUniversal.huntEvolution.b1, IUniversalIn.huntEvolution.b1);
    }
    if (f(IUniversal.huntEvolution.b2.level).lt(f(IUniversalIn.huntEvolution.b2.maxLevel))) {
      buyMultiple(IUniversalIn.huntEvolution.b2, IUniversalIn.huntEvolution.b2, IUniversal.huntEvolution.b2, "level", 1, "uniChallengerFree", null, IUniversal.huntEvolution.b2, IUniversalIn.huntEvolution.b2);
    }
    if (f(IUniversal.huntEvolution.b3.level).lt(f(IUniversalIn.huntEvolution.b3.maxLevel))) {
      buyMultiple(IUniversalIn.huntEvolution.b3, IUniversalIn.huntEvolution.b3, IUniversal.huntEvolution.b3, "level", 1, "uniChallengerFree", null, IUniversal.huntEvolution.b3, IUniversalIn.huntEvolution.b3);
    }
    if (f(IUniversal.huntEvolution.b4.level).lt(f(IUniversalIn.huntEvolution.b4.maxLevel))) {
      buyMultiple(IUniversalIn.huntEvolution.b4, IUniversalIn.huntEvolution.b4, IUniversal.huntEvolution.b4, "level", 1, "uniChallengerFree", null, IUniversal.huntEvolution.b4, IUniversalIn.huntEvolution.b4);
    }
    if (f(IUniversal.huntEvolution.b5.level).lt(f(IUniversalIn.huntEvolution.b5.maxLevel))) {
      buyMultiple(IUniversalIn.huntEvolution.b5, IUniversalIn.huntEvolution.b5, IUniversal.huntEvolution.b5, "level", 1, "uniChallengerFree", null, IUniversal.huntEvolution.b5, IUniversalIn.huntEvolution.b5);
    }
  }

  //FIRE
  if (IUniversal.automation.automation14.active) {
    IUniversal.size = f(IUniversal.size).add(f(IUniversalIn.fireTree.node11.effect).mul(f(IGameData.tickSpeed)))
  }
}

function menuDirectionArrow(page) {

  var element = document.getElementById(page)

  if (element.scrollHeight > element.clientHeight) {

    var margin = f(element.clientHeight).minus(f(element.scrollTop))
    var totalPage = f(element.scrollHeight).minus(f(element.clientHeight))

    unlockShow("mainMenuDirectionArrow1", false)

    //clientHeight - scrollTop = clientHeight
    if ((f(element.clientHeight).minus(f(element.scrollTop))).equals(f(element.clientHeight))) {
      unlockShow("mainMenuDirectionArrow1", true)
      document.getElementById("mainMenuDirectionArrow1").style.transform = 'rotate(0deg)';
    }

    //scrollTop != 0 && scrollTop != totalPage - 1
    if (!(f(element.scrollTop).equals(f(0))) && !(f(element.scrollTop).equals(f(totalPage)))) {
      unlockShow("mainMenuDirectionArrow1", true)
      document.getElementById("mainMenuDirectionArrow1").style.transform = 'rotate(0deg)';
    }

    //scrollTop = totalPage - 1
    if (f(element.scrollTop).equals(f(totalPage))) {
      unlockShow("mainMenuDirectionArrow1", true)
      document.getElementById("mainMenuDirectionArrow1").style.transform = 'rotate(180deg)';
    }
  }
}

function devTool1() {
  ITraining.base.base1.tot = f(ITraining.base.base1.tot).add(1e20)
  ITraining.base.base2.tot = f(ITraining.base.base1.tot).add(1e20)
}

function makeLine(divAId, divBId, lineLayerId, color = "#ff1313ff", width = 6) {
  const elA = document.getElementById(divAId);
  const elB = document.getElementById(divBId);
  const svg = document.getElementById(lineLayerId);

  if (!elA || !elB || !svg) {
    console.error("ID non valido:", divAId, divBId, lineLayerId);
    return;
  }

  const parent = svg.parentElement;
  const parentRect = parent.getBoundingClientRect();
  const scrollLeft = parent.scrollLeft || 0;
  const scrollTop = parent.scrollTop || 0;

  const rectA = elA.getBoundingClientRect();
  const rectB = elB.getBoundingClientRect();

  const x1 = (rectA.left - parentRect.left + scrollLeft) + rectA.width / 2;
  const y1 = (rectA.top - parentRect.top + scrollTop) + rectA.height / 2;
  const x2 = (rectB.left - parentRect.left + scrollLeft) + rectB.width / 2;
  const y2 = (rectB.top - parentRect.top + scrollTop) + rectB.height / 2;

  svg.style.position = 'absolute';
  svg.style.top = '0';
  svg.style.left = '0';
  svg.setAttribute("width", parent.scrollWidth);
  svg.setAttribute("height", parent.scrollHeight);

  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", color);
  line.setAttribute("stroke-width", width);
  line.setAttribute("pointer-events", "none");

  svg.appendChild(line);
}

function clearLines(lineLayerId) {
  const svg = document.getElementById(lineLayerId);
  if (svg) svg.innerHTML = "";
}

function enableDragScroll(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error("Container non trovato:", containerId);
    return;
  }

  let isDown = false;
  let startX, startY;
  let scrollLeft, scrollTop;

  container.style.cursor = 'grab';

  container.addEventListener('mousedown', (e) => {
    const isDraggable = e.target.hasAttribute('draggable') && e.target.getAttribute('draggable') === 'true';
    if (isDraggable) {
      return;
    }

    isDown = true;
    container.style.cursor = 'grabbing';
    startX = e.pageX - container.offsetLeft;
    startY = e.pageY - container.offsetTop;
    scrollLeft = container.scrollLeft;
    scrollTop = container.scrollTop;
    e.preventDefault();
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.style.cursor = 'grab';
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
    container.style.cursor = 'grab';
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const y = e.pageY - container.offsetTop;
    const walkX = x - startX;
    const walkY = y - startY;
    container.scrollLeft = scrollLeft - walkX;
    container.scrollTop = scrollTop - walkY;
  });
}
