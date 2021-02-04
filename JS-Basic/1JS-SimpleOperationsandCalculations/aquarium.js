function fishTank(length, width, height, presentage) {
 let volume = Number(length) * Number(width) * Number(height);
 let liters = volume * 0.001;
 let percent = presentage * 0.01;
 
console.log(liters * (1 - percent));
}
fishTank("85",
"75",
"47",
"17");
fishTank("105",
"77",
"89",
"18.5")

