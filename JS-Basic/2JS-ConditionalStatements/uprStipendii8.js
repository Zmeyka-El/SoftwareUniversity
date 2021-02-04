function solve(income, uspex, zaplata) {
        income = Number(income);
        uspex = Number(uspex);
        zaplata = Number(zaplata);
        let socStipendia = 0;
        let uspexStipendia = 0;
        if (income < zaplata && uspex > 4.50) {
                socStipendia = zaplata * 0.35;
        }
        if (uspex >= 5.50) {
                uspexStipendia = uspex * 25;
        }
        if (uspexStipendia === 0 && socStipendia === 0) {
                console.log('You cannot get a scholarship!');
        } else if (socStipendia > uspexStipendia) {
                console.log(`You get a Social scholarship ${Math.floor(socStipendia)} BGN`);
        } else {
                console.log(`You get a scholarship for excellent results ${Math.floor(uspexStipendia)} BGN`);
        }
}
solve("480.00",
        "4.60",
        "450.00"),
        solve("300.00",
                "5.65",
                "420.00")


