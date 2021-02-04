function solve(time, day) {
    time = Number(time);
    if ((time >= 10) && (time < 18) && day) {

        switch (day) {
            case 'Monday':
            case 'Tuesday':
            case 'Wednesday':
            case 'Thursday':
            case 'Friday':
            case 'Saturday':
                console.log('open');
                break;
            case 'Sunday':
                console.log('closed');
                break;
        }
    } else {
        console.log('closed');
    }
}

solve("11",
"Monday"),

solve("19",
"Friday"),

solve("11",
"Sunday")