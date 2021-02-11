function solve(years, pricePe, priceToy) {
    years = Number(years);
    pricePe = Number(pricePe);
    priceToy = Number(priceToy);
    let money = 0;
    let moneyC = 0;
    let toyC = 0;
    
    for (let age = 1; age <= years; age++) {
        if (age % 2 === 0) {
            moneyC++;
            money += moneyC * 10;
        } else {
            toyC++;
        }
    }
    money -= moneyC //* 1;
    let totMoney = money + toyC * priceToy;
    if (totMoney >= pricePe) {
        let pariIma = totMoney - pricePe;
        console.log(`Yes! ${pariIma.toFixed(2)}`);
    } else {
        let pariNema = pricePe - totMoney;
        console.log(`No! ${pariNema.toFixed(2)}`);
    }

}
