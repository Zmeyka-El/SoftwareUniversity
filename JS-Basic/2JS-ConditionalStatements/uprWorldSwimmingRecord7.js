function solve(record, distace, secmet) {
record = Number(record);
distace = Number(distace);
secmet = Number(secmet);

let ivoSwim = distace * secmet;
let resistanceSec = parseInt(distace / 15) * 12.5;
let ivoRecord = ivoSwim + resistanceSec;
if (ivoRecord < record) {
    console.log(`Yes, he succeeded! The new world record is ${ivoRecord.toFixed(2)} seconds.`);
} else if (ivoRecord >= record){
    console.log(`No, he failed! He was ${(ivoRecord - record).toFixed(2)} seconds slower.`);
}

}
solve("10464",
"1500",
"20"),
solve("55555.67",
"3017",
"5.03")








