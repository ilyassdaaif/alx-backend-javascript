const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index page', () => {
    it('should return status code 200', (done) => {
        request('http://localhost:7865', (error, response, body) => {
            if (error) {
                console.error('Error occurred:', error);
                done(error); // Pass the error to the done function
                return;
            }
            expect(response).to.exist; // Ensure response is not undefined
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return the correct message', (done) => {
        request('http://localhost:7865', (error, response, body) => {
            if (error) {
                console.error('Error occurred:', error);
                done(error);
                return;
            }
            expect(response).to.exist; // Ensure response is not undefined
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});