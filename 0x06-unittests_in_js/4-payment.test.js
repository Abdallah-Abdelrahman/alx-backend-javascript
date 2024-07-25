const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    it('should spy on the add function', () => {
        const stubtub = sinon.stub(Utils, 'calculateNumber')
        stubtub.returns(10)
        const JB = sinon.spy(console, 'log')

        sendPaymentRequestToApi(100, 20)
        sinon.assert.calledWith(stubtub, 'SUM', 100, 20)
        sinon.assert.calledWith(JB, 'The total is: 10');
        stubtub.restore()
        JB.restore()
    })
})
