/*-----------QUOTATION--------*/

function calculatePrice() {

   while (!document.getElementById('addons0').checked && !document.getElementById('addons1').checked && !document.getElementById('addons2').checked && !document.getElementById('addons3').checked && !document.getElementById('addons4').checked) {
      window.alert("You have not selected any Add ons number");
      window.setTimeout(hideFieldMessages, 5000);

   }

   let paciColor = document.getElementById("paciColor");
   let paciColorPrice = paciColor.options[paciColor.selectedIndex].value;

    
   let decoLevel = document.getElementById("decoLevel");
   let decoLevelPrice = decoLevel.options[decoLevel.selectedIndex].value;

   
   /*if (decoLevelValue == "simple" ) {
       decoLevelPrice = 25;    

   } else if (decoLevelValue == "normal") {
      decoLevelPrice = 30;
   }
   else if (decoLevelValue == "premium") {
      decoLevelPrice = 35;
   }

   else if (decoLevelValue == "deluxe") {
      decoLevelPrice = 40;
   }*/

   let finalPrice = parseFloat(decoLevelPrice) + parseFloat(paciColorPrice);
   alert (finalPrice);
   /*document.getElementById("result").innerHTML == finalPrice;*/

}