let sumOfEvenNumbers = 0;
for(let i = 0; i <= 50; i++) {
    if(i % 2 == 0) {
        sumOfEvenNumbers += i;
    }
}
console.log(`Сума всіх парних чисел від 1 до 50 дорівнює: ${sumOfEvenNumbers}`);