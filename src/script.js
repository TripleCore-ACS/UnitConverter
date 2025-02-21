const convert = (event) => {

    event.preventDefault();

    const resultElement = document.getElementById("resultElement");

      const inputValue = parseFloat(document.getElementById("userInput").value);
      const unit = document.getElementById("unit").value;

      if (isNaN(inputValue) || inputValue <= 0) {
        resultElement.innerHTML = "Bitte gib eine gültige Zahl ein.";
        return;
      }

      let result = 0;
      let resultString = "";


      if (unit === "milesToKm") {
        result = inputValue * 1.60934;
        resultString = `${inputValue} Meilen entsprechen ${result.toFixed(2)} Kilometern.`;
      } else {
        result = inputValue / 1.60934;
        resultString = `${inputValue} Kilometer entsprechen ${result.toFixed(2)} Meilen.`;
      };

      resultElement.innerHTML = resultString;
};