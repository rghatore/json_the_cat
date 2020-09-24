const request = require('request');

// const breedName = process.argv.slice(2); // DO NOT SLICE = what if there are more entries? array!

const fetchBreedDescription = (breedName, callback) => {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, 'utf=8', (err, response, body) => {
    if (err) {
      throw new Error(err);
    }
    // console.log(response.statusCode);
    const data = JSON.parse(body);

    if (data.length === 0 || !data[0].description) {
      callback('Breed not found!', null);
    } else {
      const description = data[0].description;
      callback(null, description);
    }
  });
};

module.exports = { fetchBreedDescription };
