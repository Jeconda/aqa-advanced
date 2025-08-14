const sales = [150, 220, 80, 500, 310, 190, 450, 75];
let countHighSales = 0;
let countLowSales = 0;
let totalSum = 0;
for ( let i = 0; i < sales.length; i++) {
    const CurrentSale = sales[i];
    totalSum += sales[i];
    if(CurrentSale <= 200) {
        countLowSales ++;
    }
    else {}
    if(CurrentSale >= 300) {
        countHighSales ++;
    }
    else {}
}
const averageSales = (totalSum / sales.length);
console.log(`${totalSum}; ${countHighSales}; ${countLowSales}; ${averageSales.toFixed(2)}`);
console.log();
const numbers = [13, 22, 5, 8, 17, 30, 42, 19, 21];
let evenCount = 0;
let oddCount = 0;
for (let j = 0; j < numbers.length; j ++) {
    let currentNumber = numbers[j];
    if (currentNumber % 2 === 0) {
        evenCount ++;
    }
    else if(currentNumber % 2 != 0) {
        oddCount ++;
    }
}
console.log(`Загальна кількість чисел: ${numbers.length}`);
console.log(`Кількість парних чисел: ${evenCount}`);
console.log(`Кількість непарних чисел: ${oddCount}`);
