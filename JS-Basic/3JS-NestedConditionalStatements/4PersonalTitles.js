function solve(age, sex) {
    age = Number(age);
    if (sex === 'f') {
        if (age < 16) {
            console.log('Miss');
        }
        else if (age >= 16) {
            console.log('Ms.');
        }
    }
    else if (sex === 'm') {
        if (age < 16) {
            console.log('Master');
        }
        else if (age >= 16) {
            console.log('Mr.');
        }

    }

}
solve("12", "f"),

    solve("17", "m"),

    solve("25", "f"),

    solve("13.5", "m")
