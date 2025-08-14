import chalk from 'chalk';
const averageGrade = 90;
if(averageGrade < 60) {console.log(chalk.red.bold('Незадовільно'));}
else if(averageGrade <= 70) {console.log(chalk.red.bold('Задовільно'));}
else if(averageGrade <= 80) {console.log(chalk.yellow.bold('Добре'));}
else if(averageGrade <= 90) {console.log(chalk.green.bold('Дуже добре'));}
else {console.log(chalk.green.bold('Відмінно'))};