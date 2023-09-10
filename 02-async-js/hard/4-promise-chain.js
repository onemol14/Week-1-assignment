/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("function resolved after one second.");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("function resolved after two seconds.");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("function resolved after three seconds.");
  }, 3000);
  });
}

function calculateTime() {  
  const start = new Date();

  waitOneSecond().then((value) => {
    console.log(value);
    return waitTwoSecond();
  }).then((value) => {
    console.log(value);
    return waitThreeSecond();
  }).then((value) => {
    console.log(value);
    const end = new Date();
    console.log(end-start);
  });

}

calculateTime();