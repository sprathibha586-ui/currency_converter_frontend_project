const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");

const convertButton = document.getElementById("convert");
const resetButton = document.getElementById("reset");
const swapButton = document.getElementById("swap");

const result = document.getElementById("result");

const rates = {
    USD: 1,
    INR: 83,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 150
};

let results = JSON.parse(localStorage.getItem("results")) || [];

function displayResults() {

    result.innerHTML = "";

    results.forEach(function(conversion) {

        const resultItem = document.createElement("p");

        resultItem.textContent = conversion;

        result.appendChild(resultItem);
    });
}


convertButton.addEventListener("click", function() {

    const value = Number(amount.value);


    if (amount.value.trim() === "") {

        result.textContent = "Please enter an amount.";

        return;
    }


  
    if (value <= 0) {

        result.textContent =
            "Please enter a valid amount greater than 0.";

        return;
    }


    const from = fromCurrency.value;
    const to = toCurrency.value;


  
    const convertedAmount =
        value * (rates[to] / rates[from]);


    const conversionResult =
        `${value} ${from} = ${convertedAmount.toFixed(2)} ${to}`;



    results.push(conversionResult);


    localStorage.setItem("results", JSON.stringify(results));


    displayResults();


    localStorage.setItem("amount", amount.value);
    localStorage.setItem("fromCurrency", from);
    localStorage.setItem("toCurrency", to);
});



swapButton.addEventListener("click", function() {

    const temporary = fromCurrency.value;

    fromCurrency.value = toCurrency.value;

    toCurrency.value = temporary;


    localStorage.setItem(
        "fromCurrency",
        fromCurrency.value
    );

    localStorage.setItem(
        "toCurrency",
        toCurrency.value
    );
});


resetButton.addEventListener("click", function() {

    amount.value = "";

    fromCurrency.value = "USD";

    toCurrency.value = "INR";

    result.innerHTML = "";


   
    localStorage.removeItem("amount");

    localStorage.removeItem("fromCurrency");

    localStorage.removeItem("toCurrency");

    localStorage.removeItem("results");


    results = [];
});


const savedAmount = localStorage.getItem("amount");

if (savedAmount) {

    amount.value = savedAmount;
}


const savedFromCurrency =
    localStorage.getItem("fromCurrency");

if (savedFromCurrency) {

    fromCurrency.value = savedFromCurrency;
}



const savedToCurrency =
    localStorage.getItem("toCurrency");

if (savedToCurrency) {

    toCurrency.value = savedToCurrency;
}

displayResults();
