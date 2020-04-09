import { sum } from '@/typescript-test/1_simple/sum'


describe('Sum function', ()=>{
  test('should return sum of two values', () => {

    expect(sum(2, 4)).toBe(6)
    expect(sum(2, 4)).toEqual(6)

  })

  test('relation to other values.', () => {

    expect(sum(22, 32)).toBeGreaterThan(5)
    expect(sum(22, 32)).toBeGreaterThanOrEqual(50)
    expect(sum(22, 32)).toBeLessThan(99)
    expect(sum(22, 32)).toBeLessThanOrEqual(99)

  })

  test('two float values', () => {
    expect(sum(0.2, 0.1)).toBeCloseTo(0.3)
  })
})


