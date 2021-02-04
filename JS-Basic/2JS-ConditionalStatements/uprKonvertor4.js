function solve(num, input, output) {
num = Number(num);

if (input === "mm") {
    num = num / 1000;
} else if(input === "cm") {
    num = num / 100;
}

if (output === "mm") {
    num = num * 1000;
} else if(output === "cm") {
    num = num * 100;
}
console.log(num.toFixed(3));

}
solve("12", "mm", "m"),
solve("150", "m", "cm"),
solve("45", "cm", "mm")