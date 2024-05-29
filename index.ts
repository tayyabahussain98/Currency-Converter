#! /usr/bin/env node

import inquirer from "inquirer"

const currency: any = {
    USD: 1,             // Base Currency
    EUR: 0.92,
    GBP: 0.78,
    INR: 83.27,
    PKR: 278,
    AUD: 1.50,
    SAR: 3.75
}

let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "AUD", "SAR"]
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "AUD", "SAR"]
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number"
    }
])

let fromAmount = currency[user_answer.from]     //(Dynamic Approch) ExchangeRate
let toAmount = currency[user_answer.to]         // ExchangeRate
let amount = user_answer.amount

// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);

let baseAmount = amount / fromAmount        // USD Base Currency
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);