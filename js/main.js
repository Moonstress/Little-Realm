/*-----------QUOTATION--------*/
//This is a quotation system for a custom pacifier

//CLASES: The pacifier has a price according to its level of decoration, the tier of the base pacifier, the ammount of addons, the difficulty of the centerpiece and the individual difficulty of all the extra add ons
class Pacifier {
   constructor(level, tier, addons, addonsPrice, centerDif, addonsDifTotal) {
      this.level = level;
      this.tier = tier;
      this.addons = addons;
      this.addonsPrice = addonsPrice;
      this.centerDif = centerDif;
      this.addonsDifTotal = this.addonsDifTotal;
   }
}

const addonsDif = [];

const paci = new Pacifier("0");

//FUNCIONES AUXILIARES
//ALERT

function alertUnselected() {
   while (!document.getElementById('addons0').checked && !document.getElementById('addons1').checked && !document.getElementById('addons2').checked && !document.getElementById('addons3').checked && !document.getElementById('addons4').checked ) {            
      window.alert("You have not selected any Add ons number")
      setTimeout(() => {
         
      }, timeout);
      
        
         }
}

//PACI LEVEL PRICE: It calculates the level price depending on the complexity of the decoration level
function calculatePaciLevel() {
   let decoLevel = document.getElementById("decoLevel");
   let decoLevelPrice = decoLevel.options[decoLevel.selectedIndex].value;
   paci.level = decoLevelPrice;
   return paci.level;

}

//TIER PRICE: This adds an extra price if the base color of the pacifier is from a higher tier than 1
function calculateTierPrice() {
   let paciColor = document.getElementById("paciColor");
   let paciColorPrice = paciColor.options[paciColor.selectedIndex].value;
   paci.tier = paciColorPrice;
   return paci.tier;
}

//CENTER DIFFICULTY: This adds an extra price if the difficulty of the handmade centerpiece for the pacifier is more higher than usual
function calculateCenterDif() {
   let centerDif = document.getElementById("centerDif");
   let centerDifPrice = centerDif.options[centerDif.selectedIndex].value;
   paci.centerDif = centerDifPrice;
   return paci.centerDif;
}

//CALCULATE ADD ONS: This calculate how many extra add ons, usually clay pieces the pacifier has

function calculateAddons() {
   if (document.getElementById('addons1').checked === true) {
      paci.addons = 1;
   } else if (document.getElementById('addons2').checked === true) {
      paci.addons = 2;
   } else if (document.getElementById('addons3').checked === true) {
      paci.addons = 3;
   } else if (document.getElementById('addons4').checked === true) {
      paci.addons = 4;
   }
   return paci.addons;
}

//CALCULATE ADDONS DISCOUNT: This calculates the discount, depending on the pacifier decoration level, since for some levels, a number of add ons is free

function calculateaddonsPrice() {
   if ((paci.level == 25 || paci.level == 30) && paci.addons == 1) {
      paci.addonsPrice = 2;
   } else if ((paci.level == 25 || paci.level == 30) && paci.addons == 2) {
      paci.addonsPrice = 4;
   } else if ((paci.level == 25 || paci.level == 30) && paci.addons == 3) {
      paci.addonsPrice = 6;
   } else if ((paci.level == 25 || paci.level == 30) && paci.addons == 4) {
      paci.addonsPrice = 8;
   } else if (paci.level == 37 && paci.addons == 2) {
      paci.addonsPrice = 2;
   } else if (paci.level == 37 && paci.addons == 3) {
      paci.addonsPrice = 4;
   } else if (paci.level == 37 && paci.addons == 4) {
      paci.addonsPrice = 6;
   } else if (paci.level == 45 && paci.addons == 3) {
      paci.addonsPrice = 2;
   } else if (paci.level == 45 && paci.addons == 4) {
      paci.addonsPrice = 4;
   }
   return paci.calculateaddonsPrice;
}

//Calculate Extra Addons Difficulty: This gets the class for getting the selected value on the function calculateAddonsDifficulty()
let addonsDif1 = document.getElementsByClassName("addons1");
let addonsDif2 = document.getElementsByClassName("addons2");
let addonsDif3 = document.getElementsByClassName("addons3");
let addonsDif4 = document.getElementsByClassName("addons4");

//This function calculates the value of the difficulty of each of the four options of Addons
function calculateAddonsDifficulty(addon) {
   for (let i = 0; i < addon.length; i++) {
      if (addon[i].selected == true) {
         let addonPrice = addon[i].value
         return addonPrice;
      }
   }
}

// Set Addons Prices: This set the Addons prices, depending on their difficulty
function setAddonsDif() {
   addonsDif[0] = calculateAddonsDifficulty(addonsDif1);
   addonsDif[1] = calculateAddonsDifficulty(addonsDif2);
   addonsDif[2] = calculateAddonsDifficulty(addonsDif3);
   addonsDif[3] = calculateAddonsDifficulty(addonsDif4);
}

//This function sums all the extra price of the difficulties to add into our paci object
function sum() {
   let sum = 0;
   addonsDif.forEach(num => {
      return sum += parseFloat(num);
      
   })   
   let addonsDifTotal = parseFloat(sum);
   paci.addonsDifTotal = addonsDifTotal;
}

function printPaci() {
   calculatePaciLevel();
   calculateTierPrice();
   calculateCenterDif();
   calculateAddons();
   setAddonsDif();
   sum();
   calculateaddonsPrice(paci.addons);
   console.log(paci);

}

function calculatePrice() {
 let finalPrice = parseInt(paci.level) + parseFloat(paci.tier) + parseFloat(paci.centerDif) + parseInt(paci.addonsPrice) + parseFloat(paci.addonsDifTotal);
  alert(finalPrice);
}

/*document.getElementById("result").innerHTML == finalPrice;*/

