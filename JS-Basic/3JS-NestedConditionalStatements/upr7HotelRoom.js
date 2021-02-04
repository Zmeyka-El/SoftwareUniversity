function solve(month, nights) {
    nights = Number(nights);
    let priceApartment = 0;
    let priceStudio = 0;
    if (month === 'May' || month === 'October') {

        priceStudio = 50 * nights;
        priceApartment = 65 * nights;
        if (nights > 7 && nights <= 14) {
            priceStudio = priceStudio * 0.95;
        } else if (nights > 14) {
            priceStudio = priceStudio * 0.70;
        }
    } else if (month === 'June' || month === 'September') {

        priceStudio = 75.20 * nights;
        priceApartment = 68.70 * nights;
        if (nights > 14) {
            priceStudio = priceStudio * 0.80;
        }
    } else if (month === 'July' || month === 'August') {
        priceStudio = 76 * nights;
        priceApartment = 77 * nights;

    }
    if (nights > 14) {
        priceApartment = priceApartment * 0.90;
    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}
solve("October",
    "15"),
    solve("June",
        "14"),
    solve("August",
        "20")