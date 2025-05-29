import Big from "big.js";
import transactions from "../transactions.json";

interface Transaction {
  date_transacted: string;
  date_posted: string;
  amount: number;
  description: string;
  currency: string;
}

interface Transactions {
  transactions: Transaction[];
}

function calculate(transactions: Transaction[]) {
  let total = new Big(0);
  for (const transaction of transactions) {
    total = total.plus(transaction.amount);
  }
  console.log("Total:", total.toString());
}

calculate(transactions.transactions);
