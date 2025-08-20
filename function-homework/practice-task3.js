const grades = [75, 92, 80, 65, 45, 88, 95, 55, 70, 60];
let countUnsatisfactory = 0;
let countSatisfactory = 0;
let countWell = 0;
let countVerywell = 0;
let countExcellent = 0;
for(let i = 0; i < grades.length; i++) {
    const Currentgrade = grades[i];
    if(Currentgrade <= 60) {
        console.log(`${Currentgrade}: Fall exam`);
        countUnsatisfactory ++;
    }
    else if(grades[i] <= 70) {
        console.log(`${Currentgrade}: Satisfactory`);
        countSatisfactory ++;
    }
    else if(Currentgrade <= 80) {
        console.log(`${Currentgrade}: Well`);
        countWell ++;
    }
    else if(Currentgrade <= 90) {
        console.log(`${Currentgrade}: Very well`);
        countVerywell ++;
    }
    else {
        console.log(`${Currentgrade}: Ecxellent`);
        countExcellent ++;
        }
}
console.log(grades.length)
console.log(`${countUnsatisfactory}; ${countSatisfactory}; ${countWell}; ${countVerywell}; ${countExcellent}`);