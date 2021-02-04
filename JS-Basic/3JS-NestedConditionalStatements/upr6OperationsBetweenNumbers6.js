function solve(N1, N2, operator) {
    N1 = Number(N1);
    N2 = Number(N2);
    result = 0;
    num = 0;
    switch (operator) {
        case '+':
            result = N1 + N2;
            if (result % 2 === 0) {
                num = 'even';
            } else {
                num = 'odd';
            }
            break;
        case '-':
            result = N1 - N2;
            if (result % 2 === 0) {
                num = 'even';
            } else {
                num = 'odd';
            }
            break;
        case '*':
            result = N1 * N2;
            if (result % 2 === 0) {
                num = 'even';
            } else {
                num = 'odd';
            }
            break;
        case '/':
            result = N1 / N2;
            break;
        case '%':
            result = N1 % N2;
            break;       
    }

    if (operator === '+' || operator === '-' || operator === '*') {
        console.log(`${N1} ${operator} ${N2} = ${result} - ${num}`);
    } else if (operator === '/' && N2 !== 0) {
        console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
    } else if (operator === '%' && N2 !== 0) {
        console.log(`${N1} % ${N2} = ${result}`);
    } else {
        console.log(`Cannot divide ${N1} by zero`);
    }
}
solve("10",
    "12",
    "+"),
solve("10",
"1",
"-"),
solve("7",
"3",
"*"),
solve("123",
    "12",
    "/"),
solve("10",
"3",
"%"),
solve("112",
"0",
"/"),
solve("10",
"0",
"%")
