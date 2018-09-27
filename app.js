function getRevenue(yearlyValue, percent, years, capitalizationPeriodInMonths){
    let monthsPassed = 0;
    if(!capitalizationPeriodInMonths) capitalizationPeriodInMonths = 12;

    let revenue = 0;
    let tax = 0.19;
    for(let i = 0; i < years; i++){
        monthsPassed += 12;
        revenue += yearlyValue;
        for(let j = 0; j < Math.floor(monthsPassed/capitalizationPeriodInMonths); j++){
            addedValue = revenue * (percent/100);
            addedValue /= monthsPassed/capitalizationPeriodInMonths; // Divide by Capitalization Period
            addedValue = addedValue - addedValue*tax;
            revenue += addedValue;
        }
        monthsPassed = monthsPassed + monthsPassed%capitalizationPeriodInMonths - 12; // Add months since last capitalization AND Reset year
    }
    return revenue.toFixed(2);
}
// Unit tests
console.assert(getRevenue(1000, 5, 1, 12) == 1040.50, "Test 1 failed. " + getRevenue(1000, 5, 1, 12));
console.assert(getRevenue(1000, 5, 2, 12) == 2123.14, "Test 2 failed. " + getRevenue(1000, 5, 2, 12));
console.assert(getRevenue(1000, 5, 1, 6) == 1040.91, "Test 3 failed. " + getRevenue(1000, 5, 1, 6));
//


const value = document.getElementById("money");
const percent = document.getElementById("percent");
const years = document.getElementById("period");
const capitalization = document.getElementById("capitalization");

const button = document.getElementById("submitButton");

const result = document.getElementById("result");

button.addEventListener("click", ()=>{
    console.log(value.value, percent.value, years.value, capitalization.value);
    let revenue = getRevenue(Number(value.value), Number(percent.value), Number(years.value), Number(capitalization.value))
    result.innerText = `Wynik: ${revenue} zł`;
})