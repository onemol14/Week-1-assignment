let fs = require('fs');

async function removeExtraSpaces() {

  let getContent = new Promise((resolve, reject) => {
    fs.readFile('random-file.txt', 'utf-8', (err, data) => {
        if(err) {
          reject(err);
        }

        resolve(data);
    });
  });

  let fileContent = await getContent;
  
  let fileContentArray = fileContent.split(' ');
  fileContentArray = fileContentArray.filter((token) => token !== '');

  let result = fileContentArray.join(' ');
  
  fs.writeFile('random-file.txt', result, (err) => {
    if(err) {
      throw err;
    }
  });  


}

removeExtraSpaces();