const quoteCalc = require('./quoteCalc')

test('QouteCalc Correct Test', () => {
    const result = quoteCalc(3000, 3)
    expect(result.yearly_prem).toBe(90)
    expect(result.monthly_prem).toBe(7.5)
})

test('Wrong Risk Rateing Test', () => {
    const result = quoteCalc(3000, 6)
    expect(result).toHaveProperty('error')
})

test('Wrong Car Value Test', () => {
    const result = quoteCalc('3000', 3)
    expect(result).toHaveProperty('error')
})

test('Negative Car Value Test', () => {
    const result = quoteCalc(-3000, 3)
    expect(result).toHaveProperty('error')
})

test('Testing Risk Boundry', () => {
    const result = quoteCalc(3000, 5)
    expect(result.yearly_prem).toBe(150)
    expect(result.monthly_prem).toBe(12.5)
})




















