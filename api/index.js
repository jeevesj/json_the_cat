const { fetchBreedDescription } = require('./breedFetcher');

const search = process.argv.slice(2);
const breedName = search.join(' ');

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});