const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('API tests', () => {
  let server;

  before((done) => {
    server = app.listen(7865, () => {
      console.log('API available on localhost port 7865');
      done();
    });
  });

  after((done) => {
    server.close(done);
  });

  describe('GET /', () => {
    it('should return correct status code and message', (done) => {
      request.get('http://localhost:7865', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/:id', () => {
    it('should return correct message when id is a number', (done) => {
      request.get('http://localhost:7865/cart/12', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return 404 when id is not a number', (done) => {
      request.get('http://localhost:7865/cart/hello', (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});