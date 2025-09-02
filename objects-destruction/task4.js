const users = [
  { name: "John", age: 30, nationality: 'American' },
  { name: "Jane", age: 25, nationality: 'Brazilian' },
  { name: "Mike", age: 40, nationality: 'Swede' }
];
for(const person of users) {
    const {name, age, nationality} = person;
    console.log(`${name} is ${age} years old, ${nationality} by nationality`);
}