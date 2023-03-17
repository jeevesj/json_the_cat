const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback('cats lost.', null);
    } else {
      const breed = data[0];
      callback(null, breed.description);
    }
  });
};

module.exports = { fetchBreedDescription };