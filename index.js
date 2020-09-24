const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2]; // going straight to the array element

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

// console.log('Step One!')
