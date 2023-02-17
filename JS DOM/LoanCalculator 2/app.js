// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults)
;

// calculate results
function calculateResults(e){
    console.log('solving......');

    // UI Variables
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');

    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('total-interest');

    // principal is the amount and parsefloat turns it to decimal
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) /100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;


    // compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest)/(x-1);

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(3);
            // to fixed sets the number of decimals you want
        totalPayment.value = (monthly * calculatedPayments).toFixed(3);
        totalInterest.value = ((monthly * calculatedPayments) - principal.toFixed(2));

    } else {
        console.log('Please check your numbers');

    }

    e.preventDefault(); 
}