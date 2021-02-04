function solve(budget, season, fishermen) {
    budget = Number(budget);
    fishermen = Number(fishermen);
    let price = 0;

    switch (season) {
        case 'Spring':
            price = 3000;
            break;
        case 'Summer':
            price = 4200;
            break;
        case 'Autumn':
            price = 4200;
            break;
        case 'Winter':
            price = 2600;
            break;
    }
    if (fishermen <= 6) {
        price = price - (price * 0.10);
    } else if (fishermen >= 7 && fishermen <= 11) {
        price = price - (price * 0.15);
    } else if (fishermen >= 12) {
        price = price - (price * 0.25);
    }
    if (fishermen % 2 === 0 && season !== 'Autumn') {
        price = price * 0.95;
    }
    let totalPrice = Math.abs(budget - price).toFixed(2)
    if (price <= budget) {
        console.log(`Yes! You have ${totalPrice} leva left.`)
    } else {
        console.log(`Not enough money! You need ${totalPrice} leva.`)
    }
}
solve("3000",
    "Summer",
    "11"),

solve("3600",
"Autumn",
"6"),
solve(2000,
    "Winter",
    13)    