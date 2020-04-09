import {Lodash} from '@/typescript-test/2_sync/sync'

let _:Lodash = new Lodash()

describe('Lodash compact', ()=>{

  let array: Array<any> = []

  beforeEach(()=>{
    array = [0, 1, null, '', undefined, 22, 'aaa']
  })

  test('should be defined', ()=>{
    expect(_.compact).toBeDefined()
  })

  test('should remove falsy values from array', ()=>{
    const result: Array<any> = [1, 22, 'aaa']
    expect(_.compact(array)).toEqual(result)
  })

  test('should NOT contain falsy values', ()=>{
    expect(_.compact(array)).not.toContain(null)
    expect(_.compact(array)).not.toContain(undefined)
    expect(_.compact(array)).not.toContain(0)
    expect(_.compact(array)).not.toContain('')
  })

})


describe('Lodash: groupBy', ()=>{
  test('should be defined', () => {
    expect(_.groupBy).toBeDefined()
    expect(_.groupBy).not.toBeUndefined()
  })

  test('should group array items by Math.floor', ()=>{
    const array: Array<number> = [2.2, 2.4, 4.2, 3.1]
    const result = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1]
    }

    const testresult = _.groupBy(array, Math.floor)
    expect(testresult).toEqual(result)
  })

  test('should group array items by length', () => {
    const array: Array<string> = ['one', 'two', 'three']
    const result: object = {
      5: ['three'],
      3: ['one', 'two']
    }

    expect(_.groupBy(array, 'length')).toEqual(result)
  })

  test('should NOT return array', () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
  })

})