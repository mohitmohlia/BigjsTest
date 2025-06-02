import Big from "big.js";
import transactions from "../transactions.json";
import * as readline from "readline";

interface Transaction {
  date_transacted: string;
  date_posted: string;
  amount: number;
  description: string;
  currency: string;
}

function calculate(
  transactions: Transaction[],
  initialBalance?: number,
  bankBalance?: number
) {
  console.log("Transactions:", transactions.length);
  let total = new Big(initialBalance ?? 0);

  for (const transaction of transactions) {
    total = total.plus(transaction.amount);
    console.log(total.toNumber());
  }
  console.log("Total Cleared balance :", total.toNumber());

  if (bankBalance) {
    console.log("******************************");
    console.log("                             ");
    console.log("                             ");
    console.log("Bank Balance :", bankBalance);
    console.log("******************************");
    console.log("                             ");
    console.log("                             ");
    console.log("******************************");
    console.log("variance Difference :", total.minus(bankBalance).toNumber());
    console.log("                             ");
    console.log("                             ");
  }
}

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask for initial number
rl.question("Enter initial number (default 0): ", (initialNumber) => {
  const initialBalance = initialNumber ? parseFloat(initialNumber) : undefined;

  // Ask for bank balance
  rl.question("Enter bank balance (default 0): ", (bankBalance) => {
    const bankBalanceNum = bankBalance ? parseFloat(bankBalance) : undefined;

    // Calculate with the provided values
    calculate(transactions.transactions, initialBalance, bankBalanceNum);

    // Close readline interface
    rl.close();
  });
});
