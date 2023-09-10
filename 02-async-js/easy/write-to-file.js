let fs = require('fs');

fs.writeFile('random-file.txt', 'Hello to the new world.', (err) => {
  if(err) 
    throw err;

  console.log('Updated!');  
});

