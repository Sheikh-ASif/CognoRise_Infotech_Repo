const apiKey = '13431f201abbd7e8d9821d17'
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amount = document.getElementById('amount');
const convertButton = document.getElementById('convert');
const convertedAmount = document.getElementById('convertedAmount');

async function getCurrencies() {
    const response = await fetch(apiURL);
    const data = await response.json();
    const currencies = Object.keys(data.conversion_rates);
    populateSelects(currencies);
}

function populateSelects(currencies) {
    currencies.forEach(currency => {
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');
        option1.value = option2.value = currency;
        option1.textContent = option2.textContent = currency;
        fromCurrency.appendChild(option1);
        toCurrency.appendChild(option2);
    });
    fromCurrency.value = 'USD';
    toCurrency.value = 'EUR';
}

async function convertCurrency() {
    const amountValue = amount.value;
    const fromValue = fromCurrency.value;
    const toValue = toCurrency.value;

    if (amountValue === '' || isNaN(amountValue)) {
        alert('Please enter a valid amount');
        return;
    }

    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromValue}/${toValue}/${amountValue}`);
    const data = await response.json();

    if (data.result === 'success') {
        convertedAmount.textContent = `${data.conversion_result.toFixed(2)} ${toValue}`;
    } else {
        alert('Error fetching conversion rate');
    }
}

convertButton.addEventListener('click', convertCurrency);
document.addEventListener('DOMContentLoaded', getCurrencies);
