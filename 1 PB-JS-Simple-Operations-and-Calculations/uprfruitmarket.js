function solve(pricestrawberries, kgBanan, kgOrange, kgRaspber, kgBerries) {

let priceRaspberies = pricestrawberries / 2;
let priceOranges = priceRaspberies - (priceRaspberies * 0.40);
let priceBananas = priceRaspberies - (priceRaspberies * 0.80);
let raspber = Number(kgRaspber) * priceRaspberies;
let orange = Number(kgOrange) * priceOranges;
let bananas = Number(kgBanan) * priceBananas;
let strawberries = Number(kgBerries) * pricestrawberries;
let sum = raspber + orange + bananas + strawberries;
console.log(sum.toFixed(2));

}
solve("48",
"10",
"3.3",
"6.5",
"1.7");
solve("63.5",
"3.57",
"6.35",
"8.15",
"2.5")
