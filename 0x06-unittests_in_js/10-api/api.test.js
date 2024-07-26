const { expect } = require('chai')
const request = require('request')

describe('server test', () => {
    it('tests the server', (done) => {
        request.get('http://localhost:7865', (err, res, body) => {
            expect(res.statusCode).to.equal(200)
            expect(body).to.equal('Welcome to the payment system')
            done()
        })
    })
    it('tests the server pos', (done) => {
        request.get('http://localhost:7865/cart/12', (err, res, body) => {
            expect(res.statusCode).to.equal(200)
            expect(body).to.equal('Payment methods for cart 12')
            done()
        })
    })
    it('tests the server neg', (done) => {
        request.get('http://localhost:7865/cart/wrong', (err, res, body) => {
            expect(res.statusCode).to.equal(404)
            done()
        })
    })
    it('tests available_payments', (done) => {
        request.get('http://localhost:7865/available_payments', (err, res, body) => {
            expect(res.statusCode).to.equal(200)
            expect(JSON.parse(body)).to.deep.equal({
                payment_methods: {
                  credit_cards: true,
                  paypal: false
                }
              })
            done()
        })
    })
    it('tests login', (done) => {
        request.post({url:'http://localhost:7865/login', json:{"userName": "Betty"}}, (err, res, body) => {
            expect(res.statusCode).to.equal(200)
            expect(body).to.equal('Welcome Betty')
            done()
        })
    })
})
