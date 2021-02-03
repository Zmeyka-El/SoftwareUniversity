function solve(input) {
    input = Number(input);
    if (input <= 10) {
        console.log('slow');
    } else if (input <= 50) {
        console.log('average');
     } else if (input <= 150) {
        console.log('fast');
    } else if (input <= 1000) {
        console.log('ultra fast');
    } else {
        console.log('extremely fast');
    }


}
solve("8"),
solve("49.5"),
solve("126"),
solve("160"),
solve("3500")
