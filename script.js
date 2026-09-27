const amount=document.getElementById("amount");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const convertButton = document.getElementById("convert");
const resetButton = document.getElementById("reset");
const swapButton=document.getElementById("swap");
const result=document.getElementById("result");

const rates = {
    USD: 1,
    INR: 83,
    EUR:0.92,
    GBP:0.79,
    JPY: 150

};
convertButton.addEventListener("click", function(){
    const value = Number(amount.value);
    if (amount.value.trim()===""){
        result.textContent="Please enter an amount.";
        return;
    }
    if(value<=0) {
        result.textContent = "Please enter a valid amount greater than 0.";
        return;
    }
    const from=fromCurrency.value;
    const to = toCurrency.value;
    const convertedAmount = value*(rates[to]/rates[from]);

    result.textContent= `${value} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
});

swapButton.addEventListener("click", function() {
    const temporary = fromCurrency.value;
    toCurrency.value=temporary;
    result.textContent="";
});
resetButton.addEventListener("click", function(){
    amount.value="";
    fromCurrency.value="USD";
    toCurrenncy.value="INR";
    result.textContent="";
});