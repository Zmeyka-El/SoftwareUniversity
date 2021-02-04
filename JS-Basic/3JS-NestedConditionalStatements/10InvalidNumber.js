function solve(input) {
    input = Number(input);
    let valid = ((input >= 100) && (input <= 200) && (input = 0));
    
    if (input !== valid) {
        console.log('invalid')
    }
    
}

solve("75"),
    solve("-1"),
    solve("150"),
    solve("100"),
    solve("220"),
    solve("200"),
    solve("199"),
    solve("0")