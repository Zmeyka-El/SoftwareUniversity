function solve(days, confectioners, cakes, waffles, pancakes) {
let priceCakes = Number(cakes) * 45;
let priceWaffels = Number(waffles) * 5.80;
let pricePancakes = Number(pancakes) * 3.20;
let sumDay = (priceCakes + priceWaffels + pricePancakes) * confectioners;
let sumCampaign = sumDay * days;


console.log(sumCampaign - (sumCampaign / 8));

}
solve("23",
"8",
"14",
"30",
"16");
solve("131",
"5",
"9",
"33",
"46")

