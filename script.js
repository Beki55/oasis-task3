// Selecting DOM Elements
const temperatureInput = document.getElementById("temperatureInput");
const unitSelector = document.getElementById("unitSelector");
const convertBtn = document.getElementById("convertBtn");
const resultDisplay = document.getElementById("resultDisplay");

// Conversion Logic
function convertTemperature() {
  const inputValue = parseFloat(temperatureInput.value);
  const selectedUnit = unitSelector.value;

  if (isNaN(inputValue)) {
    resultDisplay.textContent = "Please enter a valid number.";
    return;
  }

  let result = "";

  switch (selectedUnit) {
    case "celsius":
      result = `Fahrenheit: ${(inputValue * 9) / 5 + 32} °F, Kelvin: ${
        inputValue + 273.15
      } K`;
      break;
    case "fahrenheit":
      result = `Celsius: ${((inputValue - 32) * 5) / 9} °C, Kelvin: ${
        ((inputValue - 32) * 5) / 9 + 273.15
      } K`;
      break;
    case "kelvin":
      result = `Celsius: ${inputValue - 273.15} °C, Fahrenheit: ${
        ((inputValue - 273.15) * 9) / 5 + 32
      } °F`;
      break;
  }

  resultDisplay.textContent = result;
}

// Event Listener
convertBtn.addEventListener("click", convertTemperature);
