const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should spy on the add function', () => {
        const JamesBond = sinon.spy(Utils, 'calculateNumber')

        sendPaymentRequestToApi(100, 20)
        sinon.assert.calledWith(JamesBond, 'SUM', 100, 20)
        sinon.assert.calledOnce(JamesBond)
        JamesBond.restore()
    })
})
