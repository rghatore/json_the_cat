const request = require('request');

const searchBreed = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${searchBreed}`, 'utf=8', (err, response, body) => {
  if (err) {
    throw new Error(err);
  }
  // console.log(response.statusCode);
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  if (data.length === 0) {
    console.log('Breed not found!');
    return;
  }
  console.log(data[0].description);
});