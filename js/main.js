/*-----------QUOTATION--------*/
// This is a quotation system for a custom pacifier

// CLASSES: The pacifier has a price according to its level of decoration, the tier of the base pacifier, the amount of addons, the difficulty of the centerpiece, and the individual difficulty of all the extra add-ons
class Pacifier {
  constructor(levelName, levelPrice, tiername, tierprice, addons, addonsPrice, centerDif, addonsDifTotal) {
    this.levelName = levelName;
    this.levelPrice = levelPrice;
    this.tiername = tiername;
    this.tierprice = tierprice;
    this.addons = addons;
    this.addonsPrice = addonsPrice;
    this.centerDif = centerDif;
    this.addonsDifTotal = addonsDifTotal;
  }
}

// Function to create the Pacifier object
function createPacifier() {
  let levelName = getPacifierLevel();
  let levelPrice = getPacifierLevelPrice();
  let tiername = getTierName();
  let tierprice = getTierPrice();
  let addons = getAddonsCount();
  let addonsPrice = calculateAddonsPrice(); // Corrected function name
  let centerDif = getCenterPrice();
  let addonsDifTotal = calculateAddonsDifficultyPrice();

  return new Pacifier(levelName, levelPrice, tiername, tierprice, addons, addonsPrice, centerDif, addonsDifTotal);
}


function getPacifierLevel() {
  let selecteddecoLevel = document.getElementById("decoLevel");
  let decoLevel = selecteddecoLevel.options[selecteddecoLevel.selectedIndex].text;
  return decoLevel;
}

// Function to get the pacifier decoration level price
function getPacifierLevelPrice() { // Corrected function name
  let selecteddecoLevel = document.getElementById("decoLevel");
  let decoLevelPrice = selecteddecoLevel.options[selecteddecoLevel.selectedIndex].value;
  return decoLevelPrice;
}

// Function to get the name of the color tier
function getTierName() {
  let tier = document.getElementById("paciColor");
  let paciColorTier = tier.options[tier.selectedIndex].text;
  return paciColorTier;
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
  let addonsCount = undefined;
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
  let addonsCount = getAddonsCount(); // Get the number of selected add-ons
  let pacifierLevel = getPacifierLevel(); // Get the pacifier level

  let addonsPrice = 0;

  if (pacifierLevel === "Simple" || pacifierLevel === "Normal") {
    addonsPrice = addonsCount * 2; // $2 USD per each extra add-on
  } else if (pacifierLevel === "Premium") {
    addonsPrice = (addonsCount > 0 ? (addonsCount - 1) : 0) * 2; // $2 USD per each extra add-on, the first add-on is free
  } else if (pacifierLevel === "Deluxe") {
    addonsPrice = (addonsCount > 1 ? (addonsCount - 2) : 0) * 2; // $2 USD per each extra add-on, the first two add-ons are free
  }

  return addonsPrice;
}


// Function to calculate the difficulty of the add-ons price
function calculateAddonsDifficultyPrice() {
  let addonDifficultyValues = [0, 0, 0, 0]; // Initialize an array to store the difficulty values

  for (let i = 1; i <= 4; i++) {
    const selectElement = document.getElementById(`addon${i}Dif`);
    const selectedOption = selectElement.value;

    if (selectedOption !== "" && selectedOption !== null && !isNaN(parseFloat(selectedOption))) {
      addonDifficultyValues[i - 1] = parseFloat(selectedOption);
    }
  }

  const addonsDifficultyPrice = addonDifficultyValues.reduce((acc, value) => acc + value, 0);
  return addonsDifficultyPrice;
}

// Function to calculate the total price
function calculateTotalPrice() {
  let paci = createPacifier();
  let levelName = paci.levelName;
  let levelPrice = parseFloat(paci.levelPrice);
  let tierName = paci.tiername;
  let tierPrice = parseFloat(paci.tierprice);
  let centerPrice = parseFloat(paci.centerDif);
  let addonsPrice = parseFloat(paci.addonsPrice);
  let addonsDifficultyPrice = parseFloat(paci.addonsDifTotal);
  let totalPrice = levelPrice + tierPrice + centerPrice + addonsPrice + addonsDifficultyPrice;

  // Update the input fields with the calculated values
  document.getElementById("decorationBaseLevel").value = `You selected the Base Level of Decoration ${levelName} with a value base of $${levelPrice} USD`;
  document.getElementById("pacifierTier").value = `You selected a Tier ${tierName} pacifier color which adds ${tierPrice} USD to the Final Price`;
  document.getElementById("centerDescription").value = document.getElementById("pacifierDescription").value;
  document.getElementById("numAddOns").value = `You have selected ${paci.addons} Add-ons, which have an extra cost of ${addonsPrice} USD for this Base Level of Decoration`;
  document.getElementById("difficultyPrice").value = `The extra cost for the difficulty of the centerpiece is ${centerPrice} USD`;
  document.getElementById("difficultyAddonsPrice").value = `The extra cost for the difficulty of the add-ons is ${addonsDifficultyPrice} USD`;
  document.getElementById("totalPrice").value = `The Final Price for this Custom Pacifier is ${totalPrice} USD`;

}

// Event listener for calculate button click
document.getElementById("calculateButton").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent page refresh

  if (getAddonsCount() === undefined) {
    swal("Please select at least one add-on.");
    return; // Prevent execution if no add-ons are selected
  }
  swal({
    text: "Quotation Successful",
    icon: "success",
    buttons: false,
    timer: 1200,
  });
  setTimeout(() => {
    calculateTotalPrice();
  }, 1500);

});


// Function to save the quotation in local storage
function saveQuotation() {
  let newKey = null;

  swal({
    content: {
      element: "input",
      attributes: {
        placeholder: "Please insert a Name for this Pacifier Quotation",
      },
    },
  }).then(function (value) {
    newKey = value;

    if (newKey) {
      const quotations = JSON.parse(localStorage.getItem("quotations")) || {};
      const paci = createPacifier();
      quotations[newKey] = paci;
      localStorage.setItem("quotations", JSON.stringify(quotations));
      swal({
        text: "Quotation Saved Successfully",
        icon: "success",
        buttons: false,
        timer: 1300,
      });
    }
  });
}


// Event listener for save button click
document.getElementById("saveButton").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent page refresh
  saveQuotation();
});

// Function to clear the local storage
function clearLocalStorage() {
  localStorage.removeItem("quotations");

}

// Event listener for clear button click
document.getElementById("clearButton").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent page refresh
  clearLocalStorage();

  swal({
    text: "Quotations Deleted",
    icon: "success",
    buttons: false,
    timer: 1500,
  });
});


/**
 * Fetches custom data and renders it in the respective product details elements.
 */
async function getCustoms() {
  let url = '../customs.json';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderCustoms() {
  let customs = await getCustoms();

  for (let i = 0; i < customs.length; i++) {
    const custom = customs[i];
    let htmlSegment = `<h4>${custom.name}</h4>
    <ul>
      <li>Border Decoration: ${custom.border}</li>
      <li>Shield Decoration: ${custom.shield}</li>
      <li>Handle Decoration: ${custom.handle}</li>
      <li>Back Handle Decoration: ${custom.backhandle}</li>
      <li>Clay Centerpiece: ${custom.centerpiece}</li>
      <li>Clay Add Ons: ${custom.addons}</li>
      <li>Clay Charm: ${custom.charm}</li>
      <li>Glitter: ${custom.glitter}</li>
      <li>Wording: ${custom.wording}</li>
    </ul>
    <div class="product-bottom-details">
                            <div class="product-price">${custom.price}</div>`;

    const productDetails = document.querySelector(`#product-details${i + 1}`);
    productDetails.innerHTML = htmlSegment;
  }
}

renderCustoms();
