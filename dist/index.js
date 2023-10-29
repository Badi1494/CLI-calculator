import * as inquirer from "inquirer";
import chalk from "chalk";
//calculator operators
var Operator;
(function (Operator) {
    Operator["ADD"] = "add";
    Operator["SUBTRACT"] = "subtraction";
    Operator["MULTIPLY"] = "multiplication";
    Operator["DIVIDE"] = "division";
})(Operator || (Operator = {}));
const prompt = inquirer.createPromptModule();
function validateNumber(input) {
    if (isNaN(parseFloat(input))) {
        return "please enter a valid number";
    }
    return true;
}
async function main() {
    const input = await prompt([
        {
            type: "input",
            name: "num1",
            message: "please enter a first number",
            validate: validateNumber,
        },
        {
            type: "list",
            name: "operator",
            message: "select operator:",
            choices: Object.values(Operator)
        },
        {
            type: "input",
            name: "num2",
            message: "please enter a second number",
            validate: validateNumber,
        }
    ]);
    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    const selectedOperator = input.operator;
    let result;
    if (selectedOperator === Operator.ADD) {
        result = num1 + num2;
        console.log(chalk.green.bgBlack(`result is: ${result}`));
    }
    else if (selectedOperator === Operator.SUBTRACT) {
        result = num1 - num2;
        console.log(chalk.blue.bgWhiteBright(`result is: ${result}`));
    }
    else if (selectedOperator === Operator.DIVIDE) {
        result = num1 / num2;
        console.log(chalk.redBright.bgYellowBright(`result is: ${result}`));
    }
    else if (selectedOperator === Operator.MULTIPLY) {
        result = num1 * num2;
        console.log(chalk.yellow.bgBlackBright(`result is: ${result}`));
    }
}
main();
