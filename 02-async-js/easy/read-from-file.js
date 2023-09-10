let fs = require('fs');

let sum = 0;

fs.readFile('random-file.txt', 'utf-8', (err, data) => {
  console.log(data);
});

for(let i = 1; i < 1000000000; i++) {
  sum += i;
}

console.log(sum);


