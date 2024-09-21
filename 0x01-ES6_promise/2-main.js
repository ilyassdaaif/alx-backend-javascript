import handleResponseFromAPI from './2-then.js';

const promise = Promise.resolve();
handleResponseFromAPI(promise);

const promiseReject = Promise.reject();
handleResponseFromAPI(promiseReject);
