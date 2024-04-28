#!/usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 12345;
const answer = await inquirer.prompt({
  name: "pin",
  message: " please enter your pin",
  type: "number",
});

if (answer.pin === myPin) {
  console.log("correct pin");
  const operationAns = await inquirer.prompt({
    name: "action",
    message: "please select option",
    type: "list",
    choices: ["check balance", "withdraw", "deposit" , "package cash"],
  });

  if (operationAns.action === "withdraw") {
    let amountAns = await inquirer.prompt({
      name: "amount",
      message: "please enter amount",
      type: "number",
    });
    myBalance -= amountAns.amount;
    if (amountAns.amount > myBalance) {
      console.log("you can only withdraw below your balance");
    } else {
      console.log("your remaining balance is", myBalance);
    }
  }
  if (operationAns.action === "check balance") {
    console.log("your balance is", myBalance);
  }

  if (operationAns.action === "deposit") {
    let amountAns = await inquirer.prompt({
      name: "amount",
      message: "how much amount do you want to deposit",
      type: "number",
    });
    myBalance += amountAns.amount;
    console.log("your balance is", myBalance);
  }
if(operationAns.action === "package cash"){let pack = await inquirer.prompt({name: "cash", type: "list" , message: "how much", 
choices: ["100", "500", "1000" , "5000"]
});
myBalance -= pack.cash;
if (pack.cash <= myBalance){console.log("your remaining balance is ", myBalance);
} else {console.log("you don't have enough balance to package cash")}


 }


} else {
  console.log("incorrect pin");
}
