function solve(input) {
    
    let salary = Number(input[1]);

    for (let n = 2; n < input.length; n++) {
        let page = input[n];

        switch (page) {

            case 'Facebook':
                salary -= 150;
                break;
            case 'Instagram':
                salary -= 100;
                break;
            case 'Reddit':
                salary -= 50;
                break;
        }
        if (salary <= 0) {
            break;
        }

    }
    if (salary <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(Math.floor(salary));
    }

}