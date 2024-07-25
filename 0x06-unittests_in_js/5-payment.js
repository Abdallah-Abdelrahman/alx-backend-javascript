const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const val = Utils.calculateNumber('SUM', totalAmount, totalShipping)
    console.log(`The total is: ${val}`)
}

module.exports = sendPaymentRequestToApi;
