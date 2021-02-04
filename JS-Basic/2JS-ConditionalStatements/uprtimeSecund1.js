function solve(first, secound, tyrd) {
time = Number(first) + Number(secound) + Number(tyrd);
let min = Math.floor(time / 60);
let seconds = time % 60;

if (seconds < 10) {
    console.log(`${min}:0${seconds}`);
}else {
    console.log(`${min}:${seconds}`);
}


}
solve("35", "45", "44"),
solve("22", "7", "34"),
solve("50", "50", "49"),
solve("14", "12", "10")