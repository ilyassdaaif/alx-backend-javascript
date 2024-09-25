const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({data: 'Successful response from the API'});
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should not resolve when success if false', (done) => {
    getPaymentTokenFromAPI(false)
      .then((result) => {
        // If we get here, the promise resolved when it shouldn't have
        done(new Error('Promise resolved when it should not have'));
      })
      .catch(() => {
        // If we get here, the promise was rejected, which is not the expected behavior
        done(new Error('Promise was rejected when it should have done nothing'));
      });
    
      // We expect the function to do nothing, so we'll call done() after a short delay
      setTimeout(done, 100);
  });
});