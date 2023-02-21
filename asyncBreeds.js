const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data");
    // ISSUE: Returing from *inner* callback function, not breedDetailsFromFile
    if (!error) callback(data);
  })
}

//Change 1: Moved the console.log into a new function:
const printOutCatBreed = function(breed) {
  console.log('Return value', breed);
}

// Change 2: now passing 2 arguments into breedDetailsFromFile: breed string and callback function
breedDetailsFromFile('Bombay', printOutCatBreed);