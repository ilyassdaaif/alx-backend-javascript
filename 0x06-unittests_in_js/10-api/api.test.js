const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('API integration tests', () => {
  let server;
  const port = 7865;

  before((done) => {
    server = app.listen(port, () => {
      console.log(`API available on localhost port ${port}`);
      done();
    });
  });

  after((done) => {
    if (server) {
      server.close(() => {
        done();
      });
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

  describe('GET /available_payments', () => {
    it('should return correct payment methods object', (done) => {
      request.get(`http://localhost:${port}/available_payments`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        const payments = JSON.parse(body);
        expect(payments).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('should welcome the user', (done) => {
      const options = {
        url: `http://localhost:${port}/login`,
        method: 'POST',
        json: { userName: 'Betty' }
      };
      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });
});