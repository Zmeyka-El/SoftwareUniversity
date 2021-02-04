function solve(input) {
input = Number(input);
if ((input >= -100) && (input <= 100) && input != 0) {
    console.log('Yes');
} else {
    console.log('No')
}


}
solve("-100"),
solve("0"),
solve("100"),
solve