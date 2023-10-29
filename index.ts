import * as inquirer from "inquirer";
import chalk from "chalk";

//calculator operators

enum Operator 
{
    ADD = "add",
    SUBTRACT = "subtraction",
    MULTIPLY = "multiplication",
    DIVIDE = "division",

}

const prompt = inquirer.createPromptModule()
function validateNumber(input: string): boolean | string
{    if (isNaN(parseFloat(input)))
    {
        return "please enter a valid number"
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
    
    
    
    
    
])
   const num1 =  parseFloat(input.num1);
   const num2 = parseFloat(input.num2);
   const selectedOperator = input.operator as Operator;
   let result: number;

   if (selectedOperator === Operator.ADD)
   {
    result = num1 + num2;
    console.log(chalk.green.bgBlack(`result is: ${result}`));
   } else if (selectedOperator === Operator.SUBTRACT)
   {
    result = num1 - num2;
    console.log(chalk.blue.bgWhiteBright(`result is: ${result}`));
   } else if (selectedOperator === Operator.DIVIDE)
   {
    result = num1 / num2;
    console.log(chalk.redBright.bgYellowBright(`result is: ${result}`));
   }  else if (selectedOperator === Operator.MULTIPLY)
   {
    result = num1 * num2;
    console.log(chalk.yellow.bgBlackBright(`result is: ${result}`));
   }



}
main()