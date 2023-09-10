/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
  console.log('hello-world');

  const start = new Date();

  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then((values) => {
    console.log(values);
    const end = new Date();
    console.log(end-start);
  });

}

calculateTime();