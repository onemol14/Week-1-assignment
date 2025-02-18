/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const map = new Map();


  for(let transaction of transactions) {
    const value = map.get(transaction.category) || 0;
    map.set(transaction.category, value + transaction.price);
  }

  const resultArray = [];

  for(const [key, value] of map) {
    resultArray.push({category: key, totalSpent: value});
  }

  return resultArray;
}

module.exports = calculateTotalSpentByCategory;
