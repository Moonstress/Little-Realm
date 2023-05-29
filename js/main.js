/*-----------QUOTATION--------*/
// This is a quotation system for a custom pacifier

// CLASSES: The pacifier has a price according to its level of decoration, the tier of the base pacifier, the amount of addons, the difficulty of the centerpiece, and the individual difficulty of all the extra add-ons
class Pacifier {
   constructor(level, tier, addons, addonsPrice, centerDif, addonsDifTotal) {
     this.level = level;
     this.tier = tier;
     this.addons = addons;
     this.addonsPrice = addonsPrice;
     this.centerDif = centerDif;
     this.addonsDifTotal = addonsDifTotal;
   }
 }
 
 // Function to create the Pacifier object
 function createPacifier() {
   let level = getPacifierLevel();
   let tier = getTierPrice();
   let addons = getAddonsCount();
   let addonsPrice = calculateAddonsPrice();
   let centerDif = getCenterPrice();
 
   return new Pacifier(level, tier, addons, addonsPrice, centerDif);
 }
 
 // Function to get the pacifier decoration level
 function getPacifierLevel() {
   let decoLevel = document.getElementById("decoLevel");
   let decoLevelPrice = decoLevel.options[decoLevel.selectedIndex].value;
   return decoLevelPrice;
 }
 
 // Function to get the additional price of the pacifier base color
 function getTierPrice() {
   let paciColor = document.getElementById("paciColor");
   let paciColorPrice = paciColor.options[paciColor.selectedIndex].value;
   return paciColorPrice;
 }
 
 // Function to get the additional price of the centerpiece difficulty
 function getCenterPrice() {
   let centerDif = document.getElementById("centerDif");
   let centerDifPrice = centerDif.options[centerDif.selectedIndex].value;
   return centerDifPrice;
 }
 
 // Function to get the number of selected add-ons
 function getAddonsCount() {
   let addonsCount = 0;
   if (document.getElementById("addons0").checked) {
     addonsCount = 0;
   } else if (document.getElementById("addons1").checked) {
     addonsCount = 1;
   } else if (document.getElementById("addons2").checked) {
     addonsCount = 2;
   } else if (document.getElementById("addons3").checked) {
     addonsCount = 3;
   } else if (document.getElementById("addons4").checked) {
     addonsCount = 4;
   }
   return addonsCount;
 }
 
 // Function to calculate the price of the add-ons
 function calculateAddonsPrice() {
   let level = getPacifierLevel();
   let addonsCount = getAddonsCount();
   let addonsPrice =
     (level === "25" || level === "30") ? addonsCount * 2 :
     (level === "37" && addonsCount >= 2 && addonsCount <= 4) ? 2 :
     (level === "45" && addonsCount >= 3 && addonsCount <= 4) ? 2 : 0;
 
   return addonsPrice;
 }
 
 // Function to calculate the total price
function calculateTotalPrice() {
   let paci = createPacifier();
   let levelPrice = parseFloat(paci.level);
   let tierPrice = parseFloat(paci.tier);
   let centerPrice = parseFloat(paci.centerDif);
   let addonsPrice = parseFloat(paci.addonsPrice);
   let totalPrice = levelPrice + tierPrice + centerPrice + addonsPrice;
 
   // Update the input fields with the calculated values
   document.getElementById("decorationBaseLevel").value = `You selected the Base Level of Decoration ${levelPrice} with a value base of $${levelPrice} USD`;
   document.getElementById("pacifierTier").value = `You selected a Tier ${tierPrice} pacifier color which adds ${tierPrice} USD to the Final Price`;
   document.getElementById("centerDescription").value = document.getElementById("pacifierDescription").value;
   document.getElementById("numAddOns").value = `You have selected ${paci.addons} Add ons, which have an extra cost of ${addonsPrice} USD for this Base Level of Decoration`;
   document.getElementById("difficultyPrice").value = `The extra cost for the difficulty of the pieces is ${centerPrice} USD`;
   document.getElementById("totalPrice").value = `The Final Price for this Custom Pacifier is ${totalPrice} USD`;
 }
 
 // Event listener for calculate button click
 document.getElementById("calculateButton").addEventListener("click", function(event) {
   event.preventDefault(); // Prevent page refresh
 
   if (calculateAddonsPrice() === 0) {
     alert("Please select at least one add-on.");
     return; // Prevent execution if no add-ons are selected
   }
 
   calculateTotalPrice();
 });
 

 
 // Function to save the quotation in local storage
 function saveQuotation() {
   const newKey = prompt("Enter the new key name for the quotation:");
   if (newKey) {
     const quotations = JSON.parse(localStorage.getItem("quotations")) || {};
     const paci = createPacifier();
     quotations[newKey] = paci;
     localStorage.setItem("quotations", JSON.stringify(quotations));
     console.log("Quotation saved with key:", newKey);
   }
 }
 
 // Event listener for save button click
 document.getElementById("saveButton").addEventListener("click", function(event) {
   event.preventDefault(); // Prevent page refresh
   saveQuotation();
 });
 
 // Function to clear the local storage
 function clearLocalStorage() {
   localStorage.removeItem("quotations");
   
 }
 
 // Event listener for clear button click
 document.getElementById("clearButton").addEventListener("click", function(event) {
   event.preventDefault(); // Prevent page refresh
   clearLocalStorage();
 });
 