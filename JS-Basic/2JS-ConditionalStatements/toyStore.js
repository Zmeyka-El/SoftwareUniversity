function solve(priceTrip, puzzles, dolls, bears, minions, trucks) {
    priceTrip = Number(priceTrip);
    puzzles = Number(puzzles);
    dolls = Number(dolls);
    bears = Number(bears);
    minions = Number(minions);
    trucks = Number(trucks);

let pricepuzzles = puzzles * 2.60;
let pricedolls = dolls * 3;
let pricebears = bears * 4.10;
let priceminions = minions * 8.20;
let pricetrucks = trucks * 2;

let numToys = puzzles + dolls + bears + minions + trucks;
let totalesum = pricepuzzles + pricedolls + pricebears + priceminions + pricetrucks;

if (numToys >= 50){
    let discount = totalesum * 0.25;
    totalesum = totalesum - discount;
  
}
let rent = totalesum * 0.1; 
totalesum = totalesum - rent;
   
if (totalesum >= priceTrip) {
        shtestane = totalesum - priceTrip;
        console.log(`Yes! ${shtestane.toFixed(2)} lv left.`)
    } else {
        let pariNema = priceTrip - totalesum;
        console.log(`Not enough money! ${pariNema.toFixed(2)} lv needed.`)
    }
    
} 


solve("40.8", "20", "25", "30", "50", "10"),
solve("320", "8", "2", "5", "5", "1")