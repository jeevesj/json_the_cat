const request = require('request');

const search = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${search}`, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  
  const data = JSON.parse(body);
  data.forEach((breed) => {

    const breedDescription = breed.description; // Accessing the 'description' property
  
    console.log(`Description: ${breedDescription}\n`);

  });
});

