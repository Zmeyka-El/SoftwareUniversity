function solve(input) {
    let words = 1;
    for (let i = 0; i < input.length; i++) {
        let symbols = input[i];

        if (symbols === ' ') {
            words++
        }
    }
    //or
    //let words = input.split(' ').length;

    if (words > 10) {
        console.log(`The message is too long to be send! Has ${words} words.`);
    } else {
        console.log(`The message was send successfully!`);
    }

}
