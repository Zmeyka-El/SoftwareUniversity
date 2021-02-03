function solve(hours, min) {
 hours = Number(hours);
 min = Number(min);

 let minutes = min + 15;
 if (minutes > 59) {
    hours = hours + 1;
} 
if (minutes > 59) {
    minutes === 0;
}
if (hours > 23) {
    hours = 0;
}
let time = minutes % 60;
if (time < 10) {
console.log(`${hours}:0${time}`);
} else{
    console.log(`${hours}:${time}`);
}

}
solve("1", "46");
solve("0", "01")
solve("23", "59")
solve("11", "08")
solve("12", "49")