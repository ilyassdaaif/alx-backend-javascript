const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Import the express app

describe('Index page', () => {
  const url = 'http://localhost:7865/';

  it('Correct status code?', (done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});