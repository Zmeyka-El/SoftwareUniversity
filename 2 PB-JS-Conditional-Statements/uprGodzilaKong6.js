function solve(budget, extars, dressPrice) {
budget = Number(budget);
extars = Number(extars);
dressPrice = Number(dressPrice);

    let decor = budget * 0.10;
    let dressExtarPrice = extars * dressPrice;
      
    if (extars > 150) {
        let discount = dressExtarPrice * 0.10;
    dressExtarPrice = dressExtarPrice - discount;
    }
    let movieBudget = decor + dressExtarPrice;
 if (movieBudget <= budget) {
    let action = budget - movieBudget;
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${action.toFixed(2)} leva left.`);
 } else {
    nemaPari = movieBudget - budget; 
    console.log(`Not enough money!`);
     console.log(`Wingard needs ${nemaPari.toFixed(2)} leva more.`);
 }

}
solve("20000",
"120",
"55.5"),
solve("15437.62",
"186",
"57.99"),
solve("9587.88",
"222",
"55.68")


