function solve(days, typeRoom, evaluation) {
    days = Number(days);

    let price = 0;
    let nights = days - 1;
    switch (typeRoom) {
        case 'room for one person':
            price = nights * 18.00;
            break;
        case 'president apartment':
            price = nights * 35.00;
            if (days < 10) {
                price = price * 0.9;
            } else if (days > 15) {
                price = price * 0.8;
            } else {
                price = price * 0.85;
            }
            break;
        default:
            price = nights * 25.00;
            if (days < 10) {
                price = price * 0.7;
            } else if (days > 15) {
                price = price / 2;
            } else {
                price = price * 0.65;
            }
            break;
    }
    if (evaluation === 'positive') {
        price = price * 1.25;
    } else {
        price = price * 0.9;
    }

    console.log(price.toFixed(2))

}
solve("14",
    "apartment",
    "positive"),
solve("30",
"president apartment",
"negative")

solve("12",
"room for one person",
"positive"),

solve("2",
"apartment",
"positive")
