function solve(input) {
input = Number(input);
let bonus = 0.0;
if (input <= 100) {
    bonus = 5;
} else if (input > 1000) {
bonus = input * 0.1;
} else {
bonus = input * 0.2;
} 
if (input % 2 === 0) {
bonus = bonus + 1;
} else if (input % 10 === 5) {
    bonus = bonus + 2;
}
console.log(bonus);
console.log(input + bonus);  //bonusPoints
 }
solve("20"),
solve("175"),
solve("2703"),
solve("15875")