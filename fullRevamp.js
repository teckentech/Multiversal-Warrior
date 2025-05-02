

var IShowableClass;
var IGameData;
var ITraining
var IFight;
var ICanCall;
var ISelUpgrade;
var ICanvas;
var IProgress;

var IUniversal;

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

    this.offProgressLimit = options.offProgressLimit || 21600;
    this.lastTick = options.lastTick || Date.now();
    this.tickSpeedOff = options.tickSpeedOff || 0;
    //tickspeed mult temp
    this.tickSpeedMult = options.tickSpeedMult || 0.05;
    this.tickSpeed = options.tickSpeed || 1;
  }
}

class Universal {
  constructor(options){
    options = options || {}

    this.universe = options.universe || 1;

    this.milestones = options.milestones || {
      m1:{
        mCheck: function() {return f(IUniversal.universe).gte(2)},
        mReqDesc: "",
        mDesc: "",
      },

      m2:{
        mCheck: function() {return f(IUniversal.universe).gte(5)},
        mReqDesc: "",
        mDesc: "",
      }
    }

    this.energy = options.energy || {
      totalEnergy:{
        name: "", nameF: true, 
        level: 0, maxLevel: 0,
        tot: 0,
        description: "", descriptionF: true,
        effect: 0,
        active: false,
      },
      
      baseEnergy:{
        name: "", nameF: true, 
        level: 1, maxLevel: 0,
        tot: 0, maxTot: 0,
        prod: 0,
        description: "", descriptionF: true,
        effect: 0, weak: 0,
        group: "group2", groupF: true,
        active: false,
      }
    }
  }
}

class Training {
  constructor(options) {
    options = options || {}

    this.title = options.title || ""
    this.titleF = true;

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
        description: "Damage & Life Training ×", descriptionF: true,
        req: function () {return f(IGameData.power).gte(f(10))}, reqF: true,
        reqDescription: "Unlock New Training At 10 Power", reqDescriptionF: true,
      },

      base4: {
        name: "Insight", nameF: true, tot: 0, prod: 0, level: 1, price: 0, priceIdentity: "", group: "group1", groupF: true, active: false,
        description: "Essence/s ×", descriptionF: true,
        req: function () {return f(IGameData.power).gte(f(10))}, reqF: true,
        reqDescription: "Unlock New Training At 10 Power", reqDescriptionF: true,
      },
    }
  }
}

class Fight {
  constructor(options) {
    options = options || {};

    this.youStats = options.youStats || {
      onFight: false,
      fightController: "",
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
        req: function () { return f(IFight.youStats.damage).gte(f(0)) },
        reqDescription: "", reqDescriptionF: true,
        reqF: true,
      },
      hunt2: {
        name: "Zombie", nameF: true, level: 0, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true, active: false,
        req: function () { return f(IFight.youStats.damage).gte(f(10).pow(3)) },
        reqDescription: "", reqDescriptionF: true,
      },
      hunt3: {
        name: "Knight", nameF: true, level: 0, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true, active: false,
        req: function () { return f(IFight.youStats.damage).gte(f(10).pow(4)) },
        reqDescription: "", reqDescriptionF: true,
        reqF: true,
      },
      hunt4: {
        name: "Demon", nameF: true, level: 0, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true, active: false,
        req: function () { return f(IFight.youStats.damage).gte(f(10).pow(5)) },
        reqDescription: "", reqDescriptionF: true,
        reqF: true,
      },
      hunt5: {
        name: "Wyvern", nameF: true, level: 0, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true, active: false,
        req: function () { return f(IFight.youStats.damage).gte(f(10).pow(6)) },
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
        name: "Challenger Life /", nameF: true, level: 0, effect: 0, price: 0, priceIdentity: "essence", priceIdentityF: true,
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

    this.flashIntervals = options.flashIntervals || {

    }

    this.flashState = options.flashState || {

    };

    this.init = options.init || true;

    this.currentPage = options.currentPage || "fp2_content1_1",

      this.showable = options.showable || {

        //Valutes

        essenceValute: false,

        //Pages

        offSave: false,

        resetScreen: false, opaqueScreen2: false,

        options: false, frontPage: true, achievements: false, content2_1: true, content2_2: false, content2_3: false, content2_4: false, content2_5: false, content2_6: false,  content2_7: false,

        fp2_content1_1: false, fp2_content1_2: false, fp2_content1_3: false, fp2_content1_4: false, fp2_content1_5: false, fp2_content1_6: false, fp2_content1_7: false,

        fp2_content2_1: true, fp2_content2_2: false, fp2_content2_3: false, fp2_content2_4: false, fp2_content2_5: false, fp2_content2_6: false, fp2_content2_7: false,

        fp3_content1_1: true, fp3_content1_2: false, fp3_content1_3: false, fp3_content1_4: false, fp3_content1_5: false, fp3_content1_6: false, fp3_content1_7: false,

        //Challenger

        c2_4_B_part1: true, c2_4_VS: true,

        //challenger rewards

        c2_4_rewards_reward1: false, c2_4_rewards_reward2: false,

        //Hunting
        content2_6_hunt1_button: false, content2_6_hunt2_button: false, content2_6_hunt3_button: false,  content2_6_hunt4_button: false,  content2_6_hunt5_button: false, 
        content2_6_hunt1: false, content2_6_hunt2: false, content2_6_hunt3: false, content2_6_hunt4: false, content2_6_hunt5: false,

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
        num: 0, maxNum: 1, lastSel: "", maxNumF: true
      },
      group2: {
        num: 0, maxNum: 1, lastSel: "", maxNumF: true
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
      p1: "Reach 50 Life to unlock Fight: Challengers", p1Check: function () { return progressBar(ITraining.base.base2.tot, 50, "progressBarFp4") },
      p1Progress: function () { return progressBarInfo(ITraining.base.base2.tot, 50, "progressBarFp4") },
      p1F: true, p1CheckF: true,

      p2: "Defeat Challenger 2 to unlock Fight: Hunting", p2Check: function () { return progressBar(IFight.challengers.baseChallenger.level, 3, "progressBarFp4") },
      p2Progress: function () { return progressBarInfo(IFight.challengers.baseChallenger.level, 4, "progressBarFp4") },
      p2F: true, p2CheckF: true,

      p3: "Defeat Challenger 10 to unlock Ascension", p3Check: function () { return progressBar(IFight.challengers.baseChallenger.level, 11, "progressBarFp4") },
      p3Progress: function () { return progressBarInfo(IFight.challengers.baseChallenger.level, 11, "progressBarFp4") },
      p3F: true, p4CheckF: true,

      p4: "Reach Universe 5 To Unlock Universal Challenger And Guild", p4Check: function () { return progressBar(IFight.challengers.baseChallenger.level, 11, "progressBarFp4") },
      p4Progress: function () { return progressBarInfo(IUniversal.universe, 5, "progressBarFp4") },
      p4F: true, p4CheckF: true,
    }
  }
}

//SAVING

function createClassInstance(type) {

  if(type == null){
  IShowableClass = new ShowableClass();
  IGameData = new GameData();
  ITraining = new Training();
  IFight = new Fight();
  ICanCall = new CanCall();
  ISelUpgrade = new SelUpgrade();
  ICanvas = new Canvas();

  IProgress = new Progress();
  IUniversal = new Universal();
  }

  if(type == 1){
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
  if(type == null){
  saveData = {
    IShowableClass: IShowableClass,
    IGameData: IGameData,
    ITraining: ITraining,
    IFight: IFight,
    ICanCall: ICanCall,
    ISelUpgrade: ISelUpgrade,
    ICanvas: ICanvas,

    IProgress: IProgress,
    IUniversal: IUniversal
  };
  }

  if(type == 1){
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

function partialResetSave(type){
  createClassInstance(type)
  createSaveData(type)

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

function offImportSave() {
  IShowableClass.init = true;
  resetSave()
  if (localStorage.getItem("GameSaveOff") !== null) {

    var encryptedData = JSON.parse(localStorage.getItem("GameSaveOff"));
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
  //resetCanvas()
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
    if (localStorage.getItem("GameSave") !== null) {
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

  if(f(IUniversal.universe).gte(f(2))){
    var UniversalText = `, UNIVERSE ${IUniversal.universe}`
  }else{
    UniversalText = ""
  }
  update("powerValute", `POWER ${format(IGameData.power, 1)}${UniversalText}`)

  update("essenceBase", `${format(IGameData.essence)} Essence`)
  update("essenceProd", `+${format(sec(IGameData.essenceProd))}/s`)

}

function buy(item, propertyToUpdate, priceIdentity, price, effect) {

  if (f(IGameData[priceIdentity]).gte(f(price))) {
    // Modifica il valore della proprietà specificata in base al tipo di effetto
    if (f(effect) instanceof Decimal) {
      item[propertyToUpdate] = f(item[propertyToUpdate]).add(f(effect));  // Aggiorna la proprietà specificata (ad esempio: 'level', 'count', ecc.)
    }

    if (typeof effect == "boolean") {
      item[propertyToUpdate] = effect ? 1 : 0;  // Aggiorna la proprietà con un valore booleano
    }

    // Dopo l'acquisto, riduci le risorse del giocatore
    IGameData[priceIdentity] = f(IGameData[priceIdentity]).minus(f(price));
    valuesSetter();
    return true;
  } else {
    return false;
  }
}

function checkBuy(priceIdentity, price) {
  if (f(IGameData[priceIdentity]).gte(f(price))) {
    return true;
  } else {
    return false;
  }
}

function visualProgress() {

  var locator = IProgress.actualProgress;

  var checkMetod = `p${locator}Check`

  if(IProgress.progress[checkMetod] != null){

    if (IProgress.progress[checkMetod]() == true) {

      IProgress.actualProgress += 1
    }

    update("progressInfo", `<div>[${IProgress.progress["p" + locator + "Progress"]()}]    ${IProgress.progress["p" + locator]}</div>`)
  }else{
     locator = IProgress.actualProgress - 1;
     IProgress.actualProgress = IProgress.actualProgress -1

     checkMetod = `p${locator}Check`
    update("progressInfo", `<div>[${IProgress.progress["p" + locator + "Progress"]()}]    ${IProgress.progress["p" + locator]}</div>`)
  }
}

//VALUTE

function fullSetter() {
  valuesSetter()
  valuesSetterDinamic()
}


function valuesSetter() {

  //global 

  var global1 = f(IGameData.tickSpeedMult);

  //tickSpeed

  if(!waiting){
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

  ITraining.base.base1.prod = f(0.2).mul(f(base1_2)).mul(f(base1_3));
  ITraining.base.base1.level = f(ITraining.base.base1.level);


  //life training
  var base2_2 = IFight.challengerRewards.reward1.effect

  if (f(ITraining.base.base3.tot).gte(f(1))) {
    var base1_4 = ITraining.base.base3.tot;
  }
  else {
    base1_4 = f(1)
  }

  ITraining.base.base2.prod = f(1).mul(f(base2_2)).mul(f(base1_4));
  ITraining.base.base2.level = f(ITraining.base.base2.level);

  //Will training

  var base3_1 = IFight.challengerRewards.reward2.effect

  ITraining.base.base3.prod = f(0.01).mul(f(base3_1));
  ITraining.base.base3.level = f(ITraining.base.base3.level);

  //Insight training

  var base4_1 = IFight.challengerRewards.reward2.effect

  ITraining.base.base4.prod = f(0.01).mul((base4_1));
  ITraining.base.base4.level = f(ITraining.base.base4.level);

  //leftLife

  if (!IFight.youStats.onFight) {

    IFight.youStats.leftLife = f(IFight.youStats.life)
  }

  //CHALLENGER

  //BASE CHALLENGER

  //name

    IFight.challengers.baseChallenger.name = "Challenger"

  //damage

  var cDamage1 = f(IFight.challengers.baseChallenger.level)

  var cDamage2 = cDamage1.dividedBy(10).floor()

  IFight.challengers.baseChallenger.damage = f(5).pow((cDamage1).add(cDamage2))

  //life

  var cLife1 = IFight.challengers.baseChallenger.level

  if (IFight.normalHuntingRewards.upgrade2.active) {
    var cLife2 = f(IFight.normalHuntingRewards.upgrade2.effect)
  } else {
    cLife2 = f(1)
  }

  var cLife3 = cDamage1.dividedBy(10).floor()

  IFight.challengers.baseChallenger.life = (f(5).pow(f(cLife1).add(f(cLife3)))).mul(f(10).div(f(cLife2)))


  //leftLife

  if (!IFight.youStats.onFight) {

    IFight.challengers.baseChallenger.leftLife = f(IFight.challengers.baseChallenger.life)
  }

  //Normal Challenger Max Level 

  IFight.challengers.baseChallenger.maxLevel = f(10).add((f(1)).mul(f(IUniversal.universe)))


  //challenger Rewards


  IFight.challengerRewards.reward1.level = f(IFight.challengerRewards.reward1.level)
  IFight.challengerRewards.reward2.level = f(IFight.challengerRewards.reward2.level)

  if (IFight.normalHuntingRewards.upgrade5.active) {
    var cReward = f(IFight.normalHuntingRewards.upgrade5.effect)
  } else {
    cReward = f(1)
  }

  IFight.challengerRewards.reward1.effect = (f(2).pow((f(IFight.challengerRewards.reward1.level)))).mul(f(cReward))
  IFight.challengerRewards.reward2.effect = (f(2).pow((f(IFight.challengerRewards.reward2.level)))).mul(f(cReward))


  //hunting

  //Hunt 1
  IFight.normalHunting.hunt1.level = f(IFight.normalHunting.hunt1.level)
  if (IFight.normalHunting.hunt1.active) {
    IFight.normalHunting.hunt1.effect = f(IFight.normalHunting.hunt1.level).mul(f(1.1).mul(f(1).add(f(0.10).mul(f(IFight.normalHunting.hunt1.level)))))
  } else {
    IFight.normalHunting.hunt1.effect = f(0)
  }
  
  if (IFight.normalHunting.hunt1.level == 0) {
    IFight.normalHunting.hunt1.price = f(0)
  } else {
    IFight.normalHunting.hunt1.price = (f(10).pow(1)).mul(f(1.2).pow(f(IFight.normalHunting.hunt1.level)))
  }

  IFight.normalHunting.hunt1.reqDescription = "Reach 1e3 Damage to Unlock Next"

  if (f(IFight.normalHunting.hunt1.level).greaterThan(f(0))) {
    IFight.normalHunting.hunt1.active = true;
  }

  //Hunt 2
  IFight.normalHunting.hunt2.level = f(IFight.normalHunting.hunt2.level)
  if (IFight.normalHunting.hunt2.active) {
    IFight.normalHunting.hunt2.effect = f(20).mul(f(IFight.normalHunting.hunt2.level).mul(f(1).add(f(0.15).mul(f(IFight.normalHunting.hunt2.level)))))
  } else {
    IFight.normalHunting.hunt2.effect = f(0)
  }


  IFight.normalHunting.hunt2.price = (f(1).mul(f(10).pow(3))).mul(f(1.3).pow(f(1).add(f(IFight.normalHunting.hunt2.level))))
  

  IFight.normalHunting.hunt2.reqDescription = `<div><i class="centerDiv">Here Magic Doesnt Really Work, Is This Considered A Species?</i><br>
  <div class="centerDiv">Reach 1000 Damage to Unlock Zombie  (${format(f(IFight.youStats.damage), 1)} / 1000)</div></div>`
  
  if (f(IFight.normalHunting.hunt2.level).greaterThan(f(0))) {
    IFight.normalHunting.hunt2.active = true;
  }

  //Hunt 3
  IFight.normalHunting.hunt3.level = f(IFight.normalHunting.hunt3.level)
  if (IFight.normalHunting.hunt3.active) {
    IFight.normalHunting.hunt3.effect = f(400).mul(f(IFight.normalHunting.hunt3.level).mul(f(1).add(f(0.20).mul(f(IFight.normalHunting.hunt3.level)))))
  } else {
    IFight.normalHunting.hunt3.effect = f(0)
  }

  IFight.normalHunting.hunt3.price = (f(2).mul(f(10).pow(4))).mul(f(1.4).pow(f(1).add(f(IFight.normalHunting.hunt3.level))))

  IFight.normalHunting.hunt3.reqDescription = `<div><i class="centerDiv">Why Suddenly Every Knight Wants To Duel Me? Werent Challengers Enought?</i><br>
  <div class="centerDiv">Reach 1e4 Damage to Unlock Knight  (${format(f(IFight.youStats.damage), 1)} / 1e4)</div></div>`

  if (f(IFight.normalHunting.hunt3.level).greaterThan(f(0))) {
    IFight.normalHunting.hunt3.active = true;
  }

  //Hunt 4
  IFight.normalHunting.hunt4.level = f(IFight.normalHunting.hunt4.level)

  if (IFight.normalHunting.hunt4.active) {
    IFight.normalHunting.hunt4.effect = f(8000).mul(f(IFight.normalHunting.hunt4.level).mul(f(1).add(f(0.25).mul(f(IFight.normalHunting.hunt4.level)))))
  } else {
    IFight.normalHunting.hunt4.effect = f(0)
  }

  IFight.normalHunting.hunt4.price = (f(1).mul(f(10).pow(7))).mul(f(1.5).pow(f(1).add(f(IFight.normalHunting.hunt4.level))))
  

  IFight.normalHunting.hunt4.reqDescription = `<div><i class="centerDiv">Many Demons Have Been Coming Out Of Portals, They All Tell Me Im The Chosen One</i><br>
  <div class="centerDiv">Reach 1e5 Damage to Unlock Demon  (${format(f(IFight.youStats.damage), 1)} / 1e5)</div></div>`

  if (f(IFight.normalHunting.hunt4.level).greaterThan(f(0))) {
    IFight.normalHunting.hunt4.active = true;
  }

  //Hunt 5
  IFight.normalHunting.hunt5.level = f(IFight.normalHunting.hunt5.level)

  if (IFight.normalHunting.hunt5.active) {
    IFight.normalHunting.hunt5.effect = f(160000).mul(f(IFight.normalHunting.hunt5.level).mul(f(1).add(f(0.30).mul(f(IFight.normalHunting.hunt5.level)))))
  } else {
    IFight.normalHunting.hunt5.effect = f(0)
  }

  IFight.normalHunting.hunt5.price = (f(5).mul(f(10).pow(8))).mul(f(1.6).pow(f(1).add(f(IFight.normalHunting.hunt5.level))))
  

  IFight.normalHunting.hunt5.reqDescription = `<div><i class="centerDiv">Fortunately No Wyvern Knights, I've Already Deal With The Knights Alone</i><br>
  <div class="centerDiv">Reach 1e6 Damage to Unlock Wyvern  (${format(f(IFight.youStats.damage), 1)} / 1e6)</div></div>`

  if (f(IFight.normalHunting.hunt5.level).greaterThan(f(0))) {
    IFight.normalHunting.hunt5.active = true;
  }

  //huntingRewards

  IFight.normalHuntingRewards.upgrade1.name = `Damage × ${IFight.normalHuntingRewards.upgrade1.effect}`

  IFight.normalHuntingRewards.upgrade1.level = f(IFight.normalHuntingRewards.upgrade1.level)
  IFight.normalHuntingRewards.upgrade1.effect = f(2).pow(f(IFight.normalHuntingRewards.upgrade1.level))
  IFight.normalHuntingRewards.upgrade1.price = (f(10).mul(f(10).pow(f(IFight.normalHuntingRewards.upgrade1.level).add(f(1)))))

  IFight.normalHuntingRewards.upgrade1.reqDescription = `<div><i class="centerDiv">Slime Cores When Ingested Makes Me Stronger</i><br>
  <div class="centerDiv">Reach 10 ${IFight.normalHunting.hunt1.name}  (${format(f(IFight.normalHunting.hunt1.level), 0)} / 10)</div></div>`

  if (f(IFight.normalHuntingRewards.upgrade1.level).greaterThan(f(0))) {
    IFight.normalHuntingRewards.upgrade1.active = true;
  }

  IFight.normalHuntingRewards.upgrade2.name = `Challenger Life / ${IFight.normalHuntingRewards.upgrade2.effect}`

  IFight.normalHuntingRewards.upgrade2.level = f(IFight.normalHuntingRewards.upgrade2.level)
  IFight.normalHuntingRewards.upgrade2.effect = f(5).pow(f(IFight.normalHuntingRewards.upgrade2.level))
  IFight.normalHuntingRewards.upgrade2.price = (f(200).mul(f(100).pow(f(IFight.normalHuntingRewards.upgrade2.level).add(f(1)))))

  IFight.normalHuntingRewards.upgrade2.reqDescription = `<div><i class="centerDiv">Understanding Zombies Life Forms Makes Me Able Inflict Curses On My Enemies! Am I Evil?</i><br>
  <div class="centerDiv">Reach 10 ${IFight.normalHunting.hunt2.name}  (${format(f(IFight.normalHunting.hunt2.level), 0)} / 10)</div></div>`

  if (f(IFight.normalHuntingRewards.upgrade2.level).greaterThan(f(0))) {
    IFight.normalHuntingRewards.upgrade2.active = true;
  }

  IFight.normalHuntingRewards.upgrade3.name = `Slime Multiplies Essence By × ${format(f(IFight.normalHuntingRewards.upgrade3.effect))}`

  IFight.normalHuntingRewards.upgrade3.level = f(IFight.normalHuntingRewards.upgrade3.level)
  IFight.normalHuntingRewards.upgrade3.effect = (f(IFight.normalHuntingRewards.upgrade3.level).mul(f(1.3).pow(f(IFight.normalHunting.hunt1.level).div(f(10)))))
  IFight.normalHuntingRewards.upgrade3.price = (f(4000).mul(f(1000).pow(f(IFight.normalHuntingRewards.upgrade3.level).add(f(1)))))
  
  IFight.normalHuntingRewards.upgrade3.reqDescription = `<div><i class="centerDiv">Slime Goo Infused With Knights Blessings Is An Essence Concentrator</i><br>
  <div class="centerDiv">Reach 10 ${IFight.normalHunting.hunt3.name}  (${format(f(IFight.normalHunting.hunt3.level), 0)} / 10)</div></div>`

  if (f(IFight.normalHuntingRewards.upgrade3.level).greaterThan(f(0))) {
    IFight.normalHuntingRewards.upgrade3.active = true;
  }

  IFight.normalHuntingRewards.upgrade4.name = `Add ${IFight.normalHuntingRewards.upgrade4.effect}% Of Damage To Life`
  
  IFight.normalHuntingRewards.upgrade4.level = f(IFight.normalHuntingRewards.upgrade4.level)
  IFight.normalHuntingRewards.upgrade4.effect = f(1).mul(f(IFight.normalHuntingRewards.upgrade4.level))
  IFight.normalHuntingRewards.upgrade4.price = (f(80000).mul(f(10000).pow(f(IFight.normalHuntingRewards.upgrade4.level).add(f(1)))))
  
  IFight.normalHuntingRewards.upgrade4.reqDescription = `<div><i class="centerDiv">The Stronger I Am, The Stronger I Spite Death</i><br>
  <div class="centerDiv">Reach 10 ${IFight.normalHunting.hunt4.name}  (${format(f(IFight.normalHunting.hunt4.level), 0)} / 10)</div></div>`

  if (f(IFight.normalHuntingRewards.upgrade4.level).greaterThan(f(0))) {
    IFight.normalHuntingRewards.upgrade4.active = true;
  }

  IFight.normalHuntingRewards.upgrade5.name = `Multiply Challenger First Reward By ×  ${IFight.normalHuntingRewards.upgrade5.effect}`

  IFight.normalHuntingRewards.upgrade5.level = f(IFight.normalHuntingRewards.upgrade5.level)
  IFight.normalHuntingRewards.upgrade5.effect = f(1).add(f(0.1).mul(f(IFight.normalHuntingRewards.upgrade5.level)).mul(f(IFight.challengers.baseChallenger.level)))
  IFight.normalHuntingRewards.upgrade5.price = (f(1600000).mul(f(100000).pow(f(IFight.normalHuntingRewards.upgrade5.level).add(f(1)))))

  IFight.normalHuntingRewards.upgrade5.reqDescription = `<div><i class="centerDiv">Draconic Arts Enchance My Training... Is The Wyvern A Dragon?</i><br>
  <div class="centerDiv">Reach 10 ${IFight.normalHunting.hunt5.name}  (${format(f(IFight.normalHunting.hunt5.level), 0)} / 10)</div></div>`

  if (f(IFight.normalHuntingRewards.upgrade5.level).greaterThan(f(0))) {
    IFight.normalHuntingRewards.upgrade5.active = true;
  }


  //Universe

  IUniversal.universe = f(IUniversal.universe)

  //Milestones

  IUniversal.milestones.m1.mReqDesc = `Universe 2`
  IUniversal.milestones.m1.mDesc = `Power: Energy `

  IUniversal.milestones.m2.mReqDesc = `Universe 5`
  IUniversal.milestones.m2.mDesc = `Challenger: Universal Challenger, Guild`


  //REQUISITES
  //Base

  ITraining.base.base3.reqDescription = `<div><i class="centerDiv">Push Yourself Beyond Your Limits, Not Only In Flesh And Bones Strength Resides</i><br>
  <div class="centerDiv">Unlock New Training At 10 Power</div></div>`

  ITraining.base.base4.reqDescription = `<div><i class="centerDiv">In This Reality, The Mind Sees More Than Eyes Can, Is This World Enough?</i><br>
  <div class="centerDiv">Unlock New Training At 10 Power</div></div>`;

  //Energy

  //totalEnergy
  var sel = IUniversal.energy.totalEnergy

  IUniversal.energy.totalEnergy.name = "Total Energy"
  IUniversal.energy.totalEnergy.tot = f(IUniversal.energy.totalEnergy.tot)

  IUniversal.energy.totalEnergy.level = f(IUniversal.energy.baseEnergy.level)
  IUniversal.energy.totalEnergy.maxLevel = f(IUniversal.universe).minus(f(1))

if(f(IUniversal.energy.baseEnergy.tot).gte(f(1))){
  IUniversal.energy.totalEnergy.effect = f(IUniversal.energy.totalEnergy.tot)
                                          .mul(f(IUniversal.energy.baseEnergy.tot)
                                          .div(f(IUniversal.energy.baseEnergy.weak)))
}else[
  IUniversal.energy.totalEnergy.effect = f(IUniversal.energy.totalEnergy.tot).mul(f(1))
]
  IUniversal.energy.totalEnergy.description = "Damage And Life × " + format(sel.effect, 0)

  //baseEnergy
  var sel = IUniversal.energy.baseEnergy

  IUniversal.energy.baseEnergy.name = `Energy ${f(IUniversal.energy.baseEnergy.level)} / ${f(IUniversal.energy.baseEnergy.maxLevel)}`
  IUniversal.energy.baseEnergy.tot = f(IUniversal.energy.baseEnergy.tot)
  IUniversal.energy.baseEnergy.maxTot = f(100)
  IUniversal.energy.baseEnergy.prod = f(1)

  IUniversal.energy.baseEnergy.level = f(IUniversal.energy.baseEnergy.level)
  IUniversal.energy.baseEnergy.maxLevel = f(IUniversal.universe).minus(f(1))

  IUniversal.energy.baseEnergy.effect = f(IUniversal.energy.baseEnergy.tot)
  IUniversal.energy.baseEnergy.weak = f(1.5).pow(f(IUniversal.energy.baseEnergy.level).minus(f(1)))
  IUniversal.energy.baseEnergy.description = `Damage And Life × ${format(sel.effect, 0)} / ${format(sel.maxTot, 0)}`

  //Levelup Energy
  if(f(IUniversal.energy.baseEnergy.tot).gte(IUniversal.energy.baseEnergy.maxTot)){
    if(!(f(IUniversal.energy.baseEnergy.level).gte(IUniversal.energy.baseEnergy.maxLevel))){

      IUniversal.energy.totalEnergy.tot = f(IUniversal.energy.totalEnergy.tot).mul(IUniversal.energy.baseEnergy.maxTot)
      
      IUniversal.energy.baseEnergy.level = f(IUniversal.energy.baseEnergy.level).add(f(1))

      IUniversal.energy.baseEnergy.tot = f(0)
    }
  }
}

function valuesSetterDinamic() {

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
      if(f(ITraining.base.base3.tot).gte(f(1))){
        var Will1 = f(ITraining.base.base3.prod)
      }else{
         Will1 = f(1)
      }
    }
    else {
      Will1 = f(0)
    }

    ITraining.base.base3.tot = f(ITraining.base.base3.tot)
    .add((f(Will1))
      .mul(f(IGameData.tickSpeed))
    );

    //Insight Training

    if (ITraining.base.base4.active) {
      if(f(ITraining.base.base4.tot).gte(f(1))){
        var Insight1 = f(ITraining.base.base4.prod)
      }else{
        Insight1 = f(1)
      }
    }
    else {
      Insight1 = f(0)
    }

    ITraining.base.base4.tot = f(ITraining.base.base4.tot)
    .add((f(Insight1))
      .mul(f(IGameData.tickSpeed))
    );
  //DAMAGE FINAL

  //damage

  var damage1 = ITraining.base.base1.tot

  if (IFight.normalHuntingRewards.upgrade1.active) {
    var damage2 = f(IFight.normalHuntingRewards.upgrade1.effect)
  } else {
    damage2 = f(1)
  }

  if (  f(IUniversal.energy.totalEnergy.effect).gte(1)) {
    var damage3 = f(IUniversal.energy.totalEnergy.effect)
  } else {
    damage3 = f(1)
  }

  IFight.youStats.damage = (f(damage1).mul(f(damage2))).mul(damage3)

  //Life

  var life1 = ITraining.base.base2.tot

  if (IFight.normalHuntingRewards.upgrade4.active) {
    var life2 = (f(IFight.youStats.damage).div(100)).mul(f(IFight.normalHuntingRewards.upgrade4.effect))
  } else {
    life2 = f(0)
  }

  if (  f(IUniversal.energy.totalEnergy.effect).gte(1)) {
    var life3 = f(IUniversal.energy.totalEnergy.effect)
  } else {
    life3 = f(1)
  }

  IFight.youStats.life = (f(life1).add(f(life2))).mul(f(life3))

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

  if((IUniversal.energy.totalEnergy.tot).gte(f(10))){
    var power5 = Decimal.log10(f(IUniversal.energy.totalEnergy.effect))
  }else{
    power5 = f(1)
  }


  IGameData.power = f(1).mul(f(power1)).mul(f(power2)).mul(f(power3)).mul(f(power4)).mul(f(power5))

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

  IGameData.essenceProd = (essence1.add(essence2).add(essence3).add(essence4).add(essence5)).mul(f(IGameData.tickSpeed)).mul(f(essenceA)).mul(f(essenceB))
  IGameData.essence = f(IGameData.essence).add(IGameData.essenceProd)

//TotalEnergy

if(f(IUniversal.energy.totalEnergy.tot).gte(1)){
}else{
  IUniversal.energy.totalEnergy.tot = f(1)
}

//BaseEnergy

if (IUniversal.energy.baseEnergy.active && 
  f(IUniversal.energy.baseEnergy.maxTot).gte(IUniversal.energy.baseEnergy.tot)
) {
  var baseEnergy1 = f(IUniversal.energy.baseEnergy.prod)
}
else {
  baseEnergy1 = f(0)
}

IUniversal.energy.baseEnergy.tot = f(IUniversal.energy.baseEnergy.tot)
.add(f(baseEnergy1)
  .mul(f(IGameData.tickSpeed))
);

}

//VALUES SETTER FIXED

//BUY ZONE

//categories

//Power
document.getElementById("fp2_content1_1").onclick = function () {
  changePage("fp2_content1", "fp2_content1_1")
}

//Crafting
document.getElementById("fp2_content1_2").onclick = function () {
  changePage("fp2_content1", "fp2_content1_2")
}

//Fight
document.getElementById("fp2_content1_3").onclick = function () {
  changePage("fp2_content1", "fp2_content1_3")
}

//Guild
document.getElementById("fp2_content1_4").onclick = function () {
  changePage("fp2_content1", "fp2_content1_4")
}

//options
document.getElementById("fp2_content1_5").onclick = function () {
  changePage("fp2_content1", "fp2_content1_5")
}

document.getElementById("fp2_content1_6").onclick = function () {
  changePage("fp2_content1", "fp2_content1_6")
}

document.getElementById("fp2_content1_7").onclick = function () {
  changePage("fp2_content1", "fp2_content1_7")
}

//sub categories:

//Power
document.getElementById("fp2_content2_1").onclick = function () {
  changePage("fp3_content1_1", "content2_1")
}

//Energy
document.getElementById("fp2_content2_7").onclick = function () {
  changePage("fp3_content1_1", "content2_7")
}

//Equipment
document.getElementById("fp2_content2_2").onclick = function () {
  changePage("fp3_content1_2", "content2_2")
}

//Essences
document.getElementById("fp2_content2_3").onclick = function () {
  changePage("fp3_content1_2", "content2_3")
}

//Challengers
document.getElementById("fp2_content2_4").onclick = function () {
  changePage("fp3_content1_3", "content2_4")
}

//Hunting
document.getElementById("fp2_content2_6").onclick = function () {
  changePage("fp3_content1_3", "content2_6")
}

//Guild Tower
document.getElementById("fp2_content2_5").onclick = function () {
  changePage("fp3_content1_4", "content2_5")
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


//Energy

document.getElementById("content2_7_energyButton").onclick = function () {
  assignGroup(IUniversal.energy, "baseEnergy")
}
//Fight

document.getElementById("c2_4_VS").onclick = async function () {

  if(!(f(IFight.challengers.baseChallenger.level).gt(IFight.challengers.baseChallenger.maxLevel))){
  try {
    // Se c'è già un combattimento, fermalo
    if (IFight.youStats.fightController && typeof IFight.youStats.fightController.abort === "function") {
      IFight.youStats.fightController.abort();
      IFight.youStats.fightController = null;
      return; // Esce se il combattimento è stato interrotto
    }

    // Inizia un nuovo combattimento
    IFight.youStats.fightController = new AbortController();
    const signal = IFight.youStats.fightController.signal;

    // Aspetta che il combattimento finisca
    await fight("baseChallenger", IFight.challengers.baseChallenger, signal);

    // Resetta il controller solo se il combattimento è completato senza interruzione
    if (!signal.aborted) {
      IFight.youStats.fightController = null;
    }

  } catch (error) {
    console.error("Errore durante il combattimento:", error);
    // Gestione errori in caso di problemi con la funzione `fight`
    IFight.youStats.fightController = null; // Assicurati che il controller venga resettato
  }
}
};

//hunting

//Multi

document.getElementById("content2_6_menu_button").onclick = function () {
  if(IFight.huntingMulti){
    IFight.huntingMulti = false
  }
  else{
    IFight.huntingMulti = true
  }
}

//Hunt

document.getElementById("content2_6_hunt1_button").onclick = function () {
  if(IFight.huntingMulti){
    buyMultiple(IFight.normalHunting.hunt1, "level", 1)

  }else{
    buy(IFight.normalHunting.hunt1, "level", IFight.normalHunting.hunt1.priceIdentity, IFight.normalHunting.hunt1.price, 1)

  }
}

document.getElementById("content2_6_hunt2_button").onclick = function () {
  if(IFight.huntingMulti){
    buyMultiple(IFight.normalHunting.hunt2, "level", 1)

  }else{
    buy(IFight.normalHunting.hunt2, "level", IFight.normalHunting.hunt2.priceIdentity, IFight.normalHunting.hunt2.price, 1)

  }
}

document.getElementById("content2_6_hunt3_button").onclick = function () {
  if(IFight.huntingMulti){
    buyMultiple(IFight.normalHunting.hunt3, "level", 1)

  }else{
    buy(IFight.normalHunting.hunt3, "level", IFight.normalHunting.hunt3.priceIdentity, IFight.normalHunting.hunt3.price, 1)

  }
}

document.getElementById("content2_6_hunt4_button").onclick = function () {
  if(IFight.huntingMulti){
    buyMultiple(IFight.normalHunting.hunt4, "level", 1)

  }else{
    buy(IFight.normalHunting.hunt4, "level", IFight.normalHunting.hunt4.priceIdentity, IFight.normalHunting.hunt4.price, 1)

  }
}

document.getElementById("content2_6_hunt5_button").onclick = function () {
  if(IFight.huntingMulti){
    buyMultiple(IFight.normalHunting.hunt5, "level", 1)

  }else{
    buy(IFight.normalHunting.hunt5, "level", IFight.normalHunting.hunt5.priceIdentity, IFight.normalHunting.hunt5.price, 1)

  }
}

//huntingRewards

document.getElementById("content2_6_upgrade1_button").onclick = function () {
  if(IFight.huntingMulti){
    buyMultiple(IFight.normalHuntingRewards.upgrade1, "level", 1)

  }else{
    buy(IFight.normalHuntingRewards.upgrade1, "level", IFight.normalHuntingRewards.upgrade1.priceIdentity, f(IFight.normalHuntingRewards.upgrade1.price), 1)

  }
}

document.getElementById("content2_6_upgrade2_button").onclick = function () {
  if(IFight.huntingMulti){
    buyMultiple(IFight.normalHuntingRewards.upgrade2, "level", 1)

  }else{
    buy(IFight.normalHuntingRewards.upgrade2, "level", IFight.normalHuntingRewards.upgrade2.priceIdentity, f(IFight.normalHuntingRewards.upgrade2.price), 1)

  }
}

document.getElementById("content2_6_upgrade3_button").onclick = function () {
  if(IFight.huntingMulti){
    buyMultiple(IFight.normalHuntingRewards.upgrade3, "level", 1)

  }else{
    buy(IFight.normalHuntingRewards.upgrade3, "level", IFight.normalHuntingRewards.upgrade3.priceIdentity, f(IFight.normalHuntingRewards.upgrade3.price), 1)

  }
}

document.getElementById("content2_6_upgrade4_button").onclick = function () {
  if(IFight.huntingMulti){
    buyMultiple(IFight.normalHuntingRewards.upgrade4, "level", 1)

  }else{
    buy(IFight.normalHuntingRewards.upgrade4, "level", IFight.normalHuntingRewards.upgrade4.priceIdentity, f(IFight.normalHuntingRewards.upgrade4.price), 1)

  }
}

document.getElementById("content2_6_upgrade5_button").onclick = function () {
  if(IFight.huntingMulti){
    buyMultiple(IFight.normalHuntingRewards.upgrade5, "level", 1)

  }else{
    buy(IFight.normalHuntingRewards.upgrade5, "level", IFight.normalHuntingRewards.upgrade5.priceIdentity, f(IFight.normalHuntingRewards.upgrade5.price), 1)

  }
}

//Ascension
document.getElementById("content1_7_ascension_button").onclick = function () {

  if((f((IFight.challengers.baseChallenger.level)).minus(f(1))).eq(f(IFight.challengers.baseChallenger.maxLevel))){
    partialResetSave(1)

    IUniversal.universe = f(IUniversal.universe).add(f(1))

    //Energy

    IUniversal.energy.totalEnergy.tot = f(0)
    IUniversal.energy.baseEnergy.tot = f(0)
    IUniversal.energy.baseEnergy.level = f(1)

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

  if (minimum.toNumber() < leftTime && IFight.youStats.onFight) {
    if (calcYou < calcChallenger) {

      leftTime -= minimum

      IFight.youStats.fightController = new AbortController();
      IFight.youStats.fightController.abort();

      await fight("baseChallengerPass", null);
    }
    else {
      IFight.youStats.onFight = false;
      return
    }
  }
}

//FUNCTIONAL FUNCTIONS

//VISUAL TRAINING

function visualTraining() {
  for (let x in ITraining.base) {
    var sel = ITraining.base[x]

    update(x + "_1", `<div>${sel.name}</div>`)
    update(x + "_2", `<div>${format(sel.tot)}</div>`)
    update(x + "_3", `<div>${format(sel.prod)} /s</div>`)

    if(x == "base3" || x == "base4"){

      if(sel.req() == true){
      update(x + "_1", `<div>${sel.name}</div>`)
      update(x + "_2", `<div>${sel.description} ${format(sel.tot, 2)}</div>`)
      update(x + "_3", `<div>${format(sel.prod, 2)} /s</div>`)

      update(x + "_req", ``)
      }
      else{
        update(x + "_req", `<div>${sel.reqDescription}</div>`) 
      }
    }

    let state = ""

    if (sel.active) {
      state = "STOP"
      document.getElementById(x + "Button").style.backgroundColor = "#660000"
    }
    else {
      state = "TRAIN"
      document.getElementById(x + "Button").style.backgroundColor = "#004526"
    }

    update(x + "Button", `<div>${state}</div>`)
  }
}

function visualChallenger() {
  //you
  if (IFight.youStats.onFight) {
    var YouLife = IFight.onFightStats.life
    var YouDamage = IFight.onFightStats.damage
  }
  else {
    YouLife = IFight.youStats.life
    YouDamage = IFight.youStats.damage
  }
  var LeftLife = IFight.youStats.leftLife

  var YouTitle = ITraining.title

  //Base Challenger
  var challengerName = IFight.challengers.baseChallenger.name
  var challengerDamage = IFight.challengers.baseChallenger.damage
  var challengerLife = IFight.challengers.baseChallenger.life
  var challengerLeftLife = IFight.challengers.baseChallenger.leftLife
  var challengerTitle = IFight.challengers.baseChallenger.title
  var challengerLevel = IFight.challengers.baseChallenger.level

  update("c2_4_A_name", `YOU`)
  update("c2_4_A_damage", `Damage: ${format(f(YouDamage))}`)
  update("c2_4_A_life", `Total Life: ${format(f(YouLife))}`)
  update("c2_4_A_part3", `${format(f(LeftLife))}`)

  if (IFight.youStats.onFight == false) {
    if(f(IFight.challengers.baseChallenger.level).gt(f(IFight.challengers.baseChallenger.maxLevel))){
      update("c2_4_VS", "MAX")
    }else{
      update("c2_4_VS", "CHALLENGE")
    }
  }
  else {
    update("c2_4_VS", "STOP")
  }


  if(f(IFight.challengers.baseChallenger.level).gt(f(IFight.challengers.baseChallenger.maxLevel))){
    update("c2_4_B_name", `<div class = "centerDiv">You Are The Strongest In This Universe<div>`)
    update("c2_4_B_damage", ``)
    update("c2_4_B_life", ``)
    update("c2_4_B_part3", ``)
    unlockShow("c2_4_B_part1", false)
  }else{
    update("c2_4_B_name", `${challengerName} ${format(f(challengerLevel), 0)} ${challengerTitle}`)
    update("c2_4_B_damage", `Damage: ${format(f(challengerDamage))}`)
    update("c2_4_B_life", `Total Life: ${format(f(challengerLife))}`)
    update("c2_4_B_part3", `${format(f(challengerLeftLife))}`)
    unlockShow("c2_4_B_part1", true)
  }
  //REWARDS

  for (let x in IFight.challengerRewards) {

    var sel = IFight.challengerRewards[x]
    update("c2_4_rewards_" + x, sel.name + format(f(sel.effect), 0))
  }

  if (checkShow("content2_4")) {
    if (!IFight.youStats.onFight) {

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
}

function visualHunting() {

  //funzione che mostra le cose di content2_6_hunt

  //se non e' stato sbloccato cambia tutto il div in un testo con il requisito.

  //se e' stato sbloccato mostra le informazioni

  for (let x in IFight.normalHunting) {
    var sel = IFight.normalHunting[x]

    if (sel.req() == true) {
      unlockShow("content2_6_" + x + "_button", true)

      if(checkBuy(sel.priceIdentity, sel.price)){
      document.getElementById("content2_6_" + x + "_button").style.backgroundColor = "#004526"
      }else{
      document.getElementById("content2_6_" + x + "_button").style.backgroundColor = "#660000"
      }

      update("content2_6_" + x + "_name", `${format(sel.level, 0)} | ${sel.name}`)
      update("content2_6_" + x + "_effect", "Essence/s: " + format(sel.effect))
      //applica pointer events:  pointer-events: none;

      if(IFight.huntingMulti){
        var multiText = `Buy Max`
      }else{
        multiText = "Buy 1"
      }

      update("content2_6_" + x + "_upgrade", `<div>${multiText}</div>
                                            <div>Essence: ${format(sel.price)}</div>`)
    }
    else {
      unlockShow("content2_6_" + x + "_button", false)

      update("content2_6_" + x + "_name", `<div class = "centerDiv2">${sel.reqDescription}</div>`)
      update(`content2_6_` + x + `_effect`, "")
      //applica pointer events:  pointer-events: none;
      update(`content2_6_` + x + `_upgrade`, "")
    }
  }

  for (let x in IFight.normalHuntingRewards) {
    var sel = IFight.normalHuntingRewards[x]

    if (sel.req() == true) {

      unlockShow("content2_6_" + x + "_button", true)

      if(checkBuy(sel.priceIdentity, sel.price)){
        document.getElementById("content2_6_" + x + "_button").style.backgroundColor = "#004526"
        }else{
        document.getElementById("content2_6_" + x + "_button").style.backgroundColor = "#660000"
        }

      update("content2_6_" + x + "_name", `${format(sel.level, 0)} | ${sel.name}`)

      if(IFight.huntingMulti){
        var multiText = "Buy Max"
      }else{
        multiText = "Buy 1"
      }

      update(`content2_6_` + x + `_upgrade`, `<div>${multiText}</div>
                                          <div>Essence: ${format(sel.price)}</div>`)
    }
    else {
      unlockShow("content2_6_" + x + "_button", false)
      
      update("content2_6_" + x + "_name", `<div class = "centerDiv2">${sel.reqDescription}</div>`)
      //applica pointer events:  pointer-events: none;
      update(`content2_6_` + x + `_upgrade`, "")
    }
  }

  //Hunting Menu

  update("content2_6_menu_buy", "BUY: ")

  if(IFight.huntingMulti){
    update("content2_6_menu_sel", "MAX")
  }else{
    update("content2_6_menu_sel", "1")
  }
}

function visualUniversal(){

  if(f(IFight.challengers.baseChallenger.level).minus(f(1)).eq(f(IFight.challengers.baseChallenger.maxLevel))){
    update("content1_7_ascension_button_text", `Ascend To Universe ${f(IUniversal.universe).add(f(1))}`)
  }else{
    update("content1_7_ascension_button_text", `Ascension Requires Challenger ${f(IFight.challengers.baseChallenger.level).minus(1)} / ${f(IFight.challengers.baseChallenger.maxLevel)}`)
  }

  //Milestones

  var check = false
  for(let x in IUniversal.milestones){
    var sel = IUniversal.milestones[x]

    if(sel.mCheck()){

      check = true;

      unlockShow(`content1_7_${x}`, true)

      document.getElementById(`content1_7_${x}`).style.backgroundColor = "#004526"

      update(`content1_7_${x}`, `<div>${sel.mReqDesc}</div>
                 <div>${sel.mDesc}</div>`)
    }else{
      document.getElementById(`content1_7_${x}`).style.backgroundColor = "#660000"
      if(check){
        unlockShow(`content1_7_${x}`, true)

        update(`content1_7_${x}`, `<div>${sel.mReqDesc}</div>
                   <div>${sel.mDesc}</div>`)
      }else{
        unlockShow(`content1_7_${x}`, false)
      }
    }
  }
}

function visualEnergy(){

  update("content2_7_energies_description", `<div><i>Every Energy Multiplies The Previous Energy </i><br>
                                            Total Energy Effect Is Divided By ${IUniversal.energy.baseEnergy.weak}</div>`
  )

  var sel = IUniversal.energy.totalEnergy;

  update("content2_7_energyTot_1", `${sel.name}`)
  update("content2_7_energyTot_2", `${sel.description}`)
  update("content2_7_energyTot_3", ``)

  var sel = IUniversal.energy.baseEnergy;

  update("content2_7_energy_1", `${sel.name}`)
  update("content2_7_energy_2", `${sel.description}`)
  update("content2_7_energy_3", `${format(sel.prod)} /s`)

  let state = ""

  if (sel.active) {
    state = "STOP"
    document.getElementById("content2_7_energyButton").style.backgroundColor = "#660000"
  }
  else {
    state = "TRAIN"
    document.getElementById("content2_7_energyButton").style.backgroundColor = "#004526"
  }

  update("content2_7_energyButton", `<div>${state}</div>`)

}

//VISUAL LOOP

async function fight(type, enemy, signal) {
  var tickSpeed = IGameData.tickSpeed;

  // Se il segnale è già stato abortito, interrompi subito
  if (signal?.aborted) {

    IFight.youStats.onFight = false;
    return;
  }

  if (type == "baseChallengerPass") {
    IFight.youStats.onFight = false;

    const level = f(IFight.challengers.baseChallenger.level)
    if (level.dividedBy(10).floor().times(10).eq(level)) {
      rewardSet("finalBase")
      return
    }

    rewardSet("base")

    return;
  }

  if (IFight.youStats.onFight || type !== "baseChallenger" || enemy == null) {

    IFight.youStats.onFight = false;
    return; // Evita di ricreare un AbortController inutilmente
  }

  IFight.youStats.onFight = true;

  IFight.onFightStats.life = IFight.youStats.life;
  IFight.onFightStats.leftLife = IFight.youStats.leftLife;
  IFight.onFightStats.damage = IFight.youStats.damage;

  // Ascoltatore per l'abort che ferma il combattimento immediatamente
  const abortHandler = () => {
    IFight.youStats.onFight = false;
  };

  signal?.addEventListener("abort", abortHandler);

  try {
    while (f(enemy.leftLife).greaterThan(f(0)) && f(IFight.onFightStats.leftLife).greaterThan(f(0))) {
      // Controllo ad ogni iterazione se il segnale è stato abortito
      if (signal?.aborted) {
        break;
      }

      IFight.youStats.leftLife = IFight.onFightStats.leftLife;

      var playerDamage = f(IFight.onFightStats.damage).mul(f(tickSpeed));
      var enemyDamage = f(IFight.challengers.baseChallenger.damage).mul(f(tickSpeed));

      IFight.challengers.baseChallenger.leftLife = f(IFight.challengers.baseChallenger.leftLife).minus(f(playerDamage));
      IFight.onFightStats.leftLife = f(IFight.onFightStats.leftLife).minus(f(enemyDamage));

      if (f(IFight.challengers.baseChallenger.leftLife).lessThan(f(0))) {
        IFight.youStats.onFight = false;

        const level = f(IFight.challengers.baseChallenger.level)
        if (level.dividedBy(10).floor().times(10).eq(level)) {
          rewardSet("finalBase")
          return
        }
        
        rewardSet("base")

        return;
      }

      if (f(IFight.onFightStats.leftLife).lessThan(f(0))) {

        IFight.youStats.onFight = false;
        return;
      }

      await sleep(50);
    }

    if (f(IFight.challengers.baseChallenger.leftLife).lessThan(f(0))) {
      IFight.youStats.onFight = false;

      const level = f(IFight.challengers.baseChallenger.level)
      if (level.dividedBy(10).floor().times(10).eq(level)) {
        rewardSet("finalBase")
        return
      }

      rewardSet("base")
      
      return;
    }

    if (f(IFight.onFightStats.leftLife).lessThan(f(0))) {

      IFight.youStats.onFight = false;
      return;
    }

  } finally {
    // Rimuovi il listener per evitare memory leak
    signal?.removeEventListener("abort", abortHandler);
  }

    IFight.youStats.onFight = false;
  valuesSetter();
}

function rewardSet(type){
  if(type == "base"){
    IFight.challengers.baseChallenger.level = f(IFight.challengers.baseChallenger.level).add(f(1));
    IFight.challengerRewards.reward1.level = f(IFight.challengerRewards.reward1.level).add(f(1));
  }
  if(type == "finalBase"){

    IFight.challengers.baseChallenger.level = f(IFight.challengers.baseChallenger.level).add(f(1));
    
    IFight.challengerRewards.reward1.level = f(IFight.challengerRewards.reward1.level).add(f(1));
    IFight.challengerRewards.reward2.level = f(IFight.challengerRewards.reward2.level).add(f(1));
  }
}



async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function format(number, type) {
  if (number != null) {

    if (number.exponent < 3) {

      if (type != null) {
        return (number.toNumber()).toFixed(type);
      }

      return (number.toNumber()).toFixed(1);
    }

    if (number.exponent >= 4) {

      var num = number.mantissa

      num = num.toFixed(0)

      return num + "e" + number.exponent;
    }

    return number.toNumber().toFixed(1);
  }
  return number
}

function f(number) {
  if (isNaN(number)) {

    throw new Error(number  + ' Il valore passato non è un numero valido.');
  }

  return new Decimal(number);  // Converte in un oggetto Decimal
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
      }
      document.getElementById(a).style.display = "none";
    }
    if (value == true) {
      document.getElementById(a).style.display = "";
    }
  }

  //initial

  if (IShowableClass.init) {

    unlockShow("fp2_content1_1", true);
    unlockShow("fp2_content1_5", true);
    unlockShow("fp2_content1_6", true);

    unlockShow("power", true);
    unlockShow("essenceValute", false);
    unlockShow("options", true);
    unlockShow("achievements", true);

    IShowableClass.init = false;
  }
  //Valutes
  if(IProgress.progress.p2Check() || f(IUniversal.universe).gte(2)){
    unlockShow("essenceValute", true)
  }

  //Tabs

  if (IShowableClass.currentPage == "fp2_content1_1") {
    unlockShow("fp2_content2_1", true)

    if(f(IUniversal.universe).gte(f(2))){
      unlockShow("fp2_content2_7", true)
    }
  }

  if (IShowableClass.currentPage == "fp2_content1_2") {
    unlockShow("fp2_content2_2", true)
    unlockShow("fp2_content2_3", true)
  }

  if (IProgress.progress.p1Check() == true || f(IUniversal.universe).gte(f(2))) {
    unlockShow("fp2_content1_3", true)
  }

  if (IShowableClass.currentPage == "fp2_content1_3") {
    if (IProgress.progress.p1Check() == true || f(IUniversal.universe).gte(f(2))) {
      unlockShow("fp2_content2_4", true)
    }

    if (IProgress.progress.p2Check() == true || f(IUniversal.universe).gte(f(2))) {
      unlockShow("fp2_content2_6", true)
    }
  }

  if (IShowableClass.currentPage == "fp2_content1_4") {
    unlockShow("fp2_content2_5", true)
  }

  if (IProgress.progress.p3Check() == true || f(IUniversal.universe).gte(f(2))) {
    unlockShow("fp2_content1_7", true)
  }

  //PROGRESS BARS
  //CHALLENGER

  //Bases

  unlockShow("base1", true)
  unlockShow("base2", true)
  
  if(ITraining.base.base3.req()){
    unlockShow("base3", true)
  }

  if(ITraining.base.base4.req()){
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
}

function changePage(type, page) {
  if (type == "fp2_content1") {
    unlockShow("fp2_content2_1", false)
    unlockShow("fp2_content2_2", false)
    unlockShow("fp2_content2_3", false)
    unlockShow("fp2_content2_4", false)
    unlockShow("fp2_content2_5", false)
    unlockShow("fp2_content2_6", false)
    unlockShow("fp2_content2_7", false)

    unlockShow("fp3_content1_1", false)
    unlockShow("fp3_content1_2", false)
    unlockShow("fp3_content1_3", false)
    unlockShow("fp3_content1_4", false)
    unlockShow("fp3_content1_5", false)
    unlockShow("fp3_content1_6", false)
    unlockShow("fp3_content1_7", false)

    if (page == "fp2_content1_1") {
      unlockShow("fp3_content1_1", true)

      IShowableClass.currentPage = "fp2_content1_1";

      //Training
      unlockShow("fp2_content2_1", true)

      //Energy
      if (IUniversal.milestones.m1.mCheck() == true) {
        unlockShow("fp2_content2_7", true)
      }
    }

    if (page == "fp2_content1_2") {
      unlockShow("fp3_content1_2", true)

      IShowableClass.currentPage = "fp2_content1_2";

      unlockShow("fp2_content2_2", true)
      unlockShow("fp2_content2_3", true)
    }

    if (page == "fp2_content1_3") {
      unlockShow("fp3_content1_3", true)

      IShowableClass.currentPage = "fp2_content1_3";

      if (IProgress.progress.p1Check() == true) {
        unlockShow("fp2_content2_4", true)
      }

      if (IProgress.progress.p2Check() == true) {
        unlockShow("fp2_content2_6", true)
      }
    }

    if (page == "fp2_content1_4") {
      unlockShow("fp3_content1_4", true)

      IShowableClass.currentPage = "fp2_content1_4";

      unlockShow("fp2_content2_5", true)
    }

    if (page == "fp2_content1_5") {
      unlockShow("fp3_content1_5", true)

      IShowableClass.currentPage = "fp2_content1_5";
    }

    if (page == "fp2_content1_6") {
      unlockShow("fp3_content1_6", true)

      IShowableClass.currentPage = "fp2_content1_6";
    }

    if (page == "fp2_content1_7") {
      unlockShow("fp3_content1_7", true)

      IShowableClass.currentPage = "fp2_content1_7";
    }
  }


  if (type == "fp3_content1_1") {
    unlockShow("content2_1", false)
    unlockShow("content2_7", false)

    unlockShow(page, true)
  }

  if (type == "fp3_content1_2") {
    unlockShow("content2_2", false)
    unlockShow("content2_3", false)

    unlockShow(page, true)
  }

  if (type == "fp3_content1_3") {

    unlockShow("content2_4", false)
    unlockShow("content2_6", false)

    unlockShow(page, true)
  }

  if (type == "fp3_content1_4") {
    unlockShow("content2_5", false)

    unlockShow(page, true)
  }

  if (type == "options") {

    unlockShow("resetScreen", false)
    unlockShow("opaqueScreen2", false)

    if (page != "out") {
      unlockShow("opaqueScreen2", true)
      unlockShow(page, true)
    }
  }
}

function visualLoopFunction() {

  if (checkShow("content2_4")) {
    visualChallenger()
  }

  if (checkShow("content2_6")) {
    visualHunting()
  }
  

  if (waiting == false) {
    manualVisualLoop();
    visualValute();
  }

  if (checkShow("fp3_content1_1")) {
    visualTraining()
  }

  if(checkShow("fp3_content1_7")){
    visualUniversal()
  }

  if(checkShow("content2_7")){
    visualEnergy()
  }

  visualProgress()

}


var SaveGameLoop = window.setInterval(function () {
  saveGameData();
}, 1000);


var mainGameLoop = window.setInterval(function () {

  //CanvasLines("screenCanvas");
  idleTimeChecker()
  fullSetter()
  visualLoopFunction()
  saveGameData();

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

function buyMultiple(item, propertyToUpdate, effect) {

  while (buy(item, propertyToUpdate, item.priceIdentity, item.price, effect)) {

    if(item.maxLevel != undefined){
    if (f(item.level).gt(f(item.maxLevel))) {
      return
    }
  }
  }
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
    var confronter = f(value).div(f(limit))

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