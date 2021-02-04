function solve(type, rows, colums) {

    rows = Number(rows);
    colums = Number(colums);
    let income = 0;
    if (type === 'Premiere') {
        income = rows * colums * 12.00;

    }
    else if (type === 'Normal') {
        income = rows * colums * 7.50;

    } else if (type === 'Discount') {
        income = rows * colums * 5.00;

    }
    console.log(`${income.toFixed(2)} leva`)
}

solve("Premiere",
    "10",
    "12"),
    solve("Normal",
        "21",
        "13"),
    solve("Discount",
        "12",
        "30")

