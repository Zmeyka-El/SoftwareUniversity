function solve(fuel, litersCost, numArounds) {
    fuel = Number(fuel);
    litersCost = Number(litersCost);
    numArounds = Number(numArounds);

    let TourBreak = 0;
    for (i = 1; i <= numArounds; i++) {
        fuel = fuel - litersCost;
        
        if (i === 1) {
            litersCost -= 0.1;
        }
        if (fuel <= 0) {
            break;
        } 

        TourBreak++;
    }
if (fuel <= 0) {
    console.log(`You are out of fuel in round ${TourBreak}!`);
} else {
    console.log(`Congrats! You won the race!`);
}

}