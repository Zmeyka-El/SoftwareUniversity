function solve(startYear, endYear) {
    startYear = Number(startYear);
    endYear = Number(endYear);

    for (let i = startYear; i <= endYear; i++) {
        if (i % 4 === 0) {
            console.log(i);
        }

    }


}

