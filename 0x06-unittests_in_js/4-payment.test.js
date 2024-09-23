const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumber;
  let consoleLogSpy;

  beforeEach(() => {
    // Create a stub for Utils.calculateNumber
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Create a spy for console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and spy after each test
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should stub Utils.calculateNumber and verify console.log', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify that the stub is being called with correct arguments
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });
});