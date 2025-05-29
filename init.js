import { Big } from "big.js";

import transactions from "./transactions.json";

console.log(transactions);

// Example of using Big.js for precise decimal calculations
const num1 = new Big("0.1");
const num2 = new Big("0.2");

// Addition
const sum = num1.plus(num2);
console.log("0.1 + 0.2 =", sum.toString()); // Should print 0.3

// Multiplication
const product = num1.times(num2);
console.log("0.1 * 0.2 =", product.toString()); // Should print 0.02

// Division
const division = num1.div(num2);
console.log("0.1 / 0.2 =", division.toString()); // Should print 0.5

// Comparison
const isGreater = num1.gt(num2);
console.log("Is 0.1 greater than 0.2?", isGreater); // Should print false
