const request = require('request');
const { expect } = require('chai');
const { createServer } = require('./api');

describe('API tests', () => {
  let server;
  const port = 7866; // Using a different port

  before((done) => {
    server = createServer(port);
    server.once('listening', done);
  });

  after((done) => {
    if (server && server.listening) {
      server.close(done);
    } else {
      done();
    }
  });

  describe('GET /', () => {
    it('should return correct status code and message', (done) => {
      request.get(`http://localhost:${port}`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/:id', () => {
    it('should return correct message when id is a number', (done) => {
      request.get(`http://localhost:${port}/cart/12`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return 404 when id is not a number', (done) => {
      request.get(`http://localhost:${port}/cart/hello`, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});