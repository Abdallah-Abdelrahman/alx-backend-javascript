const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe('calculateNumber', () => {
    it('SUM', () => {
        assert.equal(calculateNumber('SUM', 1.3, 0), 1);
        assert.equal(calculateNumber('SUM', 0, 1.2), 1);
        assert.equal(calculateNumber('SUM', 1.3, 1.3), 2);
        assert.equal(calculateNumber('SUM', 1.7, 1.2), 3);
        assert.equal(calculateNumber('SUM', 1.3, 1.8), 3);
        assert.equal(calculateNumber('SUM', 1.6, 1.8), 4);
    })
    it('SUBTRACT', () => {
        assert.equal(calculateNumber('SUBTRACT', 1.3, 0), 1);
        assert.equal(calculateNumber('SUBTRACT', 0, 1.2), -1);
        assert.equal(calculateNumber('SUBTRACT', 1.3, 1.3), 0);
        assert.equal(calculateNumber('SUBTRACT', 1.7, 1.2), 1);
        assert.equal(calculateNumber('SUBTRACT', 1.3, 1.8), -1);
        assert.equal(calculateNumber('SUBTRACT', 1.6, 1.8), 0);
    })
    it('DIVIDE', () => {
        assert.equal(calculateNumber('DIVIDE', 1.3, 0), "Error");
        assert.equal(calculateNumber('DIVIDE', 0, 0), "Error");
        assert.equal(calculateNumber('DIVIDE', 0, 0.2), "Error");
        assert.equal(calculateNumber('DIVIDE', 0, 1.2), 0);
        assert.equal(calculateNumber('DIVIDE', 1.3, 1.3), 1);
        assert.equal(calculateNumber('DIVIDE', 1.7, 1.2), 2);
        assert.equal(calculateNumber('DIVIDE', 1.3, 1.8), 0.5);
        assert.equal(calculateNumber('DIVIDE', 1.6, 1.8), 1);
    })
})
