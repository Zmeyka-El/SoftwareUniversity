function solve(examHours, examMins, arrivalHours, arrivalMins) {
    examHours = Number(examHours);
    examMins = Number(examMins);
    arrivalHours = Number(arrivalHours);
    arrivalMins = Number(arrivalMins);

    let totalExamMins = examHours * 60 + examMins;
    let totalArrivalMins = arrivalHours * 60 + arrivalMins;
    let time = totalExamMins - totalArrivalMins;
    if (time < 0) {
        console.log('Late');
        time = Math.abs(time);
        if (time < 60) {
            console.log(`${time} minutes after the start`);
        } else {
            let minutes = time % 60;
            let hours = Math.floor(time / 60);
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            }
        }
    } else if (time > 30) {
        console.log('Early');
        if (time < 60) {
            console.log(`${time} minutes before the start`);
        } else {
            let minutes = time % 60;
            let hours = Math.floor(time / 60);
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }

    } else {
        console.log('On time');
        if (time > 0) {
            console.log(`${time} minutes before the start`);
        }
    }


}
solve("9",
    "30",
    "9",
    "50"),

    solve("9",
        "00",
        "8",
        "30"),

    solve("16",
        "00",
        "15",
        "00"),

    solve("9",
        "00",
        "10",
        "30"),
    solve
solve("14",
    "00",
    "13",
    "55"),
    solve("11",
        "30",
        "8",
        "12"),
    solve("10",
        "00",
        "10",
        "00"),
    solve("11",
        "30",
        "10",
        "55"),
    solve("11",
        "30",
        "12",
        "29")


