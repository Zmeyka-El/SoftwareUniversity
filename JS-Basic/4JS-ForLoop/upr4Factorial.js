function solve(input) {
    input = Number(input);
    let fac = 1;
    for (let i = 1; i <= input; i++) {
        fac *= i;
    }
    console.log(fac);

}