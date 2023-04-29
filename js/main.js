/*-----------QUOTATION--------*/

class Pacifier {
   constructor(level, tier, addons,) {
      this.level = level;
      this.tier = tier;
      this.addons = addons;
   }
}

//ALERT
function alertUnselected() {
   while (!document.getElementById('addons0').checked && !document.getElementById('addons1').checked && !document.getElementById('addons2').checked && !document.getElementById('addons3').checked && !document.getElementById('addons4').checked) {
      window.alert("You have not selected any Add ons number");
      window.setTimeout(hideFieldMessages, 5000);
   }
}

//DECO LEVEL 
function  decoLevelPrice ()  {
   let decoLevel = document.getElementById("decoLevel");
   let decoLevelPrice = decoLevel.options[decoLevel.selectedIndex].value;
   return decoLevelPrice;
}

decoLevelPrice = decoLevelPrice();

//TIER PRICE
function calculateTierPrice() {
   let paciColor = document.getElementById("paciColor");
   let paciColorPrice = paciColor.options[paciColor.selectedIndex].value;
   return paciColorPrice;
}

let TierPrice = calculateTierPrice();

//ADD ONS DIFFICULTY
let addonsDif = document.getElementsByClassName("addons");
console.log(addonsDif.length);

function calculatePrice() {
   
   let decoAddonValue = 0;
   let addon1True = document.getElementById('addons1').checked;
   let addon2True = document.getElementById('addons2').checked;
   let addon3True = document.getElementById('addons3').checked;
   let addon4True = document.getElementById('addons4').checked;

   if ((decoLevelPrice == 25 || decoLevelPrice == 30) && addon1True == true) {
      decoAddonValue = 2;      
   }
   else if ((decoLevelPrice == 25 || decoLevelPrice == 30) && addon2True == true) {
      decoAddonValue = 4;      

   } else if ((decoLevelPrice == 25 || decoLevelPrice == 30) && addon3True == true) {
      decoAddonValue = 6;   

   }else if ((decoLevelPrice == 25 || decoLevelPrice == 30) && addon4True == true) {
      decoAddonValue = 8;      

   } else if (decoLevelPrice == 37 && addon2True == true) {
      decoAddonValue = 2;      

   } else if (decoLevelPrice == 37 && addon3True == true) {
      decoAddonValue = 4;  

   } else if (decoLevelPrice == 37 && addon5True == true) {
      decoAddonValue = 4;   

   } else if (decoLevelPrice == 45 && addon3True == true) {
      decoAddonValue = 2;   

   } else if (decoLevelPrice == 45 && addon4True == true) {
      decoAddonValue = 4;    

   } 

   let decoValue = decoAddonValue;
   let paci = new Pacifier(decoLevelPrice, TierPrice, decoValue);

   let finalPrice = parseFloat(decoLevelPrice) + parseFloat(TierPrice)
      + parseFloat(decoValue);
   alert(finalPrice);
   console.log(paci);
}

/*document.getElementById("result").innerHTML == finalPrice;*/

