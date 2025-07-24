let person1Name = "Joel";
let person2Name = "Samanda";
let greetingConcantenation = ("Hello, " + person1Name + ' and ' + person2Name + "!" );
console.log("Greeting through concantenation: ", greetingConcantenation);

//Template literals
let greetingTemplateLiteral = `Hello, ${person1Name} and ${person2Name}!`;
console.log('Greeting through TemplateLiteral:', greetingTemplateLiteral);