const { inchToCm, cmToInch } = require('../converters.js');

describe('Converters test', () => {
    it('Inch to cm', () => {
        expect(inchToCm(1)).toBe(2.54);
    });
    it('Cm to inch', () => {
        expect(cmToInch(2.54)).toBe(1);
    });
});
