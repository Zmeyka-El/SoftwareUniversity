function solve(input) {
    let n = Number(input[0]);
    let num = 0;
    let minNum = Number.MAX_SAFE_INTEGER
    for (let i = 1; i < input.length; i++) {
        num = Number(input[i]);

        if (minNum > num) {
            minNum = num;

        }

    }
    console.log(minNum);
}