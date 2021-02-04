function solve(frut, day, num) {
    num = Number(num);
   
    let price = 0;

        if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
        switch (frut) {
            case 'banana':
                price = 2.50;
                break;
            case 'apple':
                price = 1.20;
                break;
            case 'orange':
                price = 0.85;
                break;
            case 'grapefruit':
                price = 1.45;
                break;
            case 'kiwi':
                price = 2.70;
                break;
            case 'pineapple':
                price = 5.50;
                break;
            case 'grapes':
                price = 3.85;
                break;

        }

} else if (day === 'Saturday' || day === 'Sunday') {
        switch (frut) {
            case 'banana':
                price = 2.70;
                break;
            case 'apple':
                price = 1.25;
                break;
            case 'orange':
                price = 0.90;
                break;
            case 'grapefruit':
                price = 1.60;
                break;
            case 'kiwi':
                price = 3.00;
                break;
            case 'pineapple':
                price = 5.60;
                break;
            case 'grapes':
                price = 4.20;
                break;

        }

    }
    if ((price * num) > 0) {
        console.log((price * num).toFixed(2));
    } else {
        console.log('error')
    }


}
solve("apple",
    "Tuesday",
    "2")
solve("orange",
    "Sunday",
    "3")
solve("kiwi",
    "Monday",
    "2.5"),
    solve("grapes",
        "Saturday",
        "0.5"),
    solve("tomato",
        "Monday",
        "0.5")

solve('water',
    'Nineday',
    '1.5'),
    solve('apple',
        'Workday',
        '2')