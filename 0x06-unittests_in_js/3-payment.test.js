const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  let utilsStub;

  beforeEach(function() {
    utilsStub = sinon.stub(Utils, 'calculateNumber');
  });

  afterEach(function() {
    utilsStub.restore();
  });

  it('should call Utils.calculateNumber with the right arguments', function() {
    utilsStub.returns(120);
    sendPaymentRequestToApi(100, 20);

    expect(utilsStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(console.log.calledWithExactly('The total is: 120')).to.be.true;
  });
});
