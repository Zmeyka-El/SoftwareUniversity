function solve(input) {
input = Number(input);
if (input < 100) {
    console.log('Less than 100');
} else if (input <= 200) {
    console.log('Between 100 and 200');
} else {
    console.log('Greater than 200');
}


}
solve('95');
solve('120');
solve('210')
