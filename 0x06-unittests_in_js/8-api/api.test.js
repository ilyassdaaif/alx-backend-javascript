const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const API_URL = 'http://localhost:7865';

  it('Correct status code?', (done) => {
    request.get(API_URL, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get(API_URL, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other: Content-Type is text/html?', (done) => {
    request.get(API_URL, (error, response, body) => {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });

  it('Other: Response time is less than 500ms?', (done) => {
    const startTime = Date.now();
    request.get(API_URL, (error, response, body) => {
      const endTime = Date.now();
      expect(endTime - startTime).to.be.below(500);
      done();
    });
  });
});