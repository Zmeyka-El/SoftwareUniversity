function solve(flowers, numFlawers, budget) {
    numFlawers = Number(numFlawers);
    budget = Number(budget);
    let price = 0;
   
    switch (flowers) {

        case 'Roses':
            price = numFlawers * 5;
            if (numFlawers > 80) {
                price = price - (price * 0.1);
            }
            break;
        case 'Dahlias':
            price = numFlawers * 3.80;
            if (numFlawers > 90) {
                price = price - (price * 0.15);
            }
            break;
        case 'Tulips':
            price = numFlawers * 2.80;
            if (numFlawers > 80) {
                price = price - (price * 0.15);
            }
            break;
        case 'Narcissus':
            price = numFlawers * 3;
            if (numFlawers < 120) {
                price = price * 1.15;
            }
            break;
        case 'Gladiolus':
            price = numFlawers * 2.50;
            if (numFlawers < 80) {
                price = price * 1.20;
            }
            break;

    }
    if (price <= budget) {
        console.log(`Hey, you have a great garden with ${numFlawers} ${flowers} and ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`)
    }

}
solve("Roses",
    "55",
    "250"),
    solve("Tulips",
        "88",
        "260"),
    solve("Narcissus",
        119,
        360),
    solve('Gladiolus',
        '80',
        '250')










