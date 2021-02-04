function solve(sity, sales) {
    sales = Number(sales);
    let commission = 0;

    if (sales >= 0 && sales <= 500) {
        if (sity === 'Sofia') {
            commission = sales * 0.05;
        } else if (sity === 'Varna') {
            commission = sales * 0.045;
        } else if (sity === 'Plovdiv') {
            commission = sales * 0.055;
        }
    } else if (sales > 500 && sales <= 1000) {
        if (sity === 'Sofia') {
            commission = sales * 0.07;
        } else if (sity === 'Varna') {
            commission = sales * 0.075;
        } else if (sity === 'Plovdiv') {
            commission = sales * 0.08;
        }
    } else if (sales > 1000 && sales <= 10000) {
        if (sity === 'Sofia') {
            commission = sales * 0.08;
        } else if (sity === 'Varna') {
            commission = sales * 0.10;
        } else if (sity === 'Plovdiv') {
            commission = sales * 0.12;
        }
    } else if (sales > 10000) {
        if (sity === 'Sofia') {
            commission = sales * 0.12;
        } else if (sity === 'Varna') {
            commission = sales * 0.13;
        } else if (sity === 'Plovdiv') {
            commission = sales * 0.145;
        }
    }
    if (commission > 0) {
        console.log(commission.toFixed(2));
    } else {
        console.log('error');
    }
}


solve("Sofia",
    "1500"),
    solve("Plovdiv",
        "499.99"),
    solve("Varna",
        "3874.50"),
    solve("Kaspichan",
        "-50"),
    solve('Varna',
        '350824'),
    solve('Plovdiv',
        '10000.01'),
    solve('Sofia', '10005')