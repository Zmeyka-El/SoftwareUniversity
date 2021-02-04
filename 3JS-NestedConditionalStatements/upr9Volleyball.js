function solve(year, holidaysP, holidaysHome) {
    holidaysP = Number(holidaysP);
    holidaysHome = Number(holidaysHome)
let weekendsSofia = 48 - holidaysHome;
let gameSofia = weekendsSofia * 3.0 / 4;
let holidaysGameSofia = holidaysP * 2.0 / 3;
let totaleGame = gameSofia + holidaysHome + holidaysGameSofia;
let leapGame = 0;
if (year === 'leap') {
    leapGame = totaleGame + (totaleGame * 0.15);
    console.log(Math.floor(leapGame));
} else {
console.log(Math.floor(totaleGame));
}


}
solve("leap",
"5",
"2"),
solve("normal",
"3",
"2")
solve("leap",
"2",
"3"),
solve("normal",
"11",
"6"),
solve("leap",
"0",
"1"),
solve("normal",
"6",
"13")