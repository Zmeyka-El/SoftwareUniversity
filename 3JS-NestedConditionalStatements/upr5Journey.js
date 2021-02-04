function solve(budget, season,) {
budget = Number(budget);
let money = 0;
let destination = '';
let place = '';

if (budget <= 100) {
    destination = 'Bulgaria';
    if(season === 'summer') {
        money = budget * 0.30;
        place = 'Camp';
    } else if(season === 'winter') {
        money = budget * 0.70;
        place = 'Hotel';
    }
} else if(budget <= 1000) {
    destination = 'Balkans';
    if(season === 'summer') {
        money = budget * 0.40;
        place = 'Camp';
    } else if(season === 'winter') {
        money = budget * 0.80;
        place = 'Hotel';
    }
} else if(budget > 1000) {
    destination = 'Europe';
    money = budget * 0.90;
    place = 'Hotel';
}
console.log(`Somewhere in ${destination}`);
console.log(`${place} - ${money.toFixed(2)}`);

}
solve("50", "summer"),
solve("75", 'winter'),
solve("312", "summer"),
solve("678.53", "winter"),
solve("1500", 'summer')


