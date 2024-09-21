import getFullResponseFromAPI from './1-promise.js';

getFullResponseFromAPI(true)
  .then(response => console.log(response))
  .catch(error => console.log(error));

getFullResponseFromAPI(false)
  .then(response => console.log(response))
  .catch(error => console.log(error));
