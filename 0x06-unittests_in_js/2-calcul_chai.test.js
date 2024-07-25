const { expect } = require("chai");
const calculateNumber = require("./2-calcul_chai.js");

describe('calculateNumber', () => {
    it('SUM', () => {
        expect(calculateNumber('SUM', 1.3, 0)).to.equal(1);
        expect(calculateNumber('SUM', 0, 1.2)).to.equal(1);
        expect(calculateNumber('SUM', 1.3, 1.3)).to.equal(2);
        expect(calculateNumber('SUM', 1.7, 1.2)).to.equal(3);
        expect(calculateNumber('SUM', 1.3, 1.8)).to.equal(3);
        expect(calculateNumber('SUM', 1.6, 1.8)).to.equal(4);
    })
    it('SUBTRACT', () => {
        expect(calculateNumber('SUBTRACT', 1.3, 0)).to.equal(1);
        expect(calculateNumber('SUBTRACT', 0, 1.2)).to.equal(-1);
        expect(calculateNumber('SUBTRACT', 1.3, 1.3)).to.equal(0);
        expect(calculateNumber('SUBTRACT', 1.7, 1.2)).to.equal(1);
        expect(calculateNumber('SUBTRACT', 1.3, 1.8)).to.equal(-1);
        expect(calculateNumber('SUBTRACT', 1.6, 1.8)).to.equal(0);
    })
    it('DIVIDE', () => {
        expect(calculateNumber('DIVIDE', 1.3, 0)).to.equal("Error");
        expect(calculateNumber('DIVIDE', 0, 0)).to.equal("Error");
        expect(calculateNumber('DIVIDE', 0, 0.2)).to.equal("Error");
        expect(calculateNumber('DIVIDE', 0, 1.2)).to.equal(0);
        expect(calculateNumber('DIVIDE', 1.3, 1.3)).to.equal(1);
        expect(calculateNumber('DIVIDE', 1.7, 1.2)).to.equal(2);
        expect(calculateNumber('DIVIDE', 1.3, 1.8)).to.equal(0.5);
        expect(calculateNumber('DIVIDE', 1.6, 1.8)).to.equal(1);
    })
})

