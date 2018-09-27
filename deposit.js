export default class Deposit{
    constructor (amount, percent, capitalizationPeriodInYears){
        this.amount = amount;
        this.percent = percent;
        // this.capitalization = capitalizationPeriodInYears
    }
    getRevenue = function(yearlyValue, years){
        let revenue = 0;
       for(let i = 0; i < years; i++){
           revenue += this.amount + this.amount * this.percent
           revenue+= yearlyValue;
       }
    }
}