const car1 = {
    brand:'Audi',
    model:'A8',
    year: 2018,
}
const car2 = {
    brend:'Volksvagen',
    model:'Passat',
    ovner: 'Oliver',
}
const car3 = {...car1, ...car2};
console.log(car3);