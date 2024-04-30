#! /usr/bin/env node

//                          "SIMPLE CALCULATOR"
//========================================================================

import chalk = require('chalk');          //Import chalk

import inquire from "inquirer";           //Import Inquirer
const answer = await inquire.prompt([
  {
    message: `Enter First Number :`,
    type: `number`,
    name: `firstNumber`,
  },
  {
    message: `Enter Second Number :`,
    type: `number`,
    name: `secondNumber`,
  },
  {
    message: `Select one of the operators to perform action`,
    type: `list`,
    name: `operator`,
    choices: [
      `Addition`,
      `Subtraction`,
      `Multiplication`,
      `Division`,
      `Modulo`,
    ],
  },
]);
//                      Addition
if (answer.operator === `Addition`) {
  console.log(chalk.green(`Your answer is :`) +" "+ chalk.blue(`${answer.firstNumber + answer.secondNumber}`));
//                      Subtraction
} else if (answer.operator === `Subtraction`) {
  console.log(chalk.green(`Your answer is :`) +" "+ chalk.blue(`${answer.firstNumber - answer.secondNumber}`));

  //                      Multiplication
} else if (answer.operator === `Multiplication`) {
  console.log(chalk.green(`Your answer is :`) +" "+ chalk.blue(`${answer.firstNumber * answer.secondNumber}`));

  //                      Division
} else if (answer.operator === `Division`) {
  console.log(chalk.green(`Your answer is :`) +" "+ chalk.blue(`${answer.firstNumber / answer.secondNumber}`));

  //                      Modulus
} else if (answer.operator === `Modulo`) {
  console.log(chalk.green(`Your answer is :`) +" "+ chalk.blue(`${answer.firstNumber % answer.secondNumber}`));
}
  