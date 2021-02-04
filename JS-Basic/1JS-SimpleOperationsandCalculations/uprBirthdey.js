function solve(input) {
let cake = Number(input)*0.20;
let drinks = cake - (Number(cake)*0.45);
let animator = Number(input) / 3;

console.log(Number(input) + cake + drinks + animator);

}
solve("2250"),
solve("3720")