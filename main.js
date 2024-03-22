#! /usr/ bin/env node
import inquirer from "inquirer";
// printing a Welcome message 
console.log("\n\tWELLCOME TO \`NABILA\` CLI simple calculator");
// ASKING QUESTION FROM USERS THROUGH  INQUIRER
let answers = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter second Number", type: "number", name: "secondNumber" },
    {
        message: "select one operator to perform Operator",
        type: "list",
        name: "operator",
        choices: ["Adition", "Subtraction", "Multiplication", "Division"],
    },
]);
// console.log(answers);
// condition statment if/else
if (answers.answers === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtractions") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Invalid Input");
}
