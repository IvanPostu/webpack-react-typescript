


const promise = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(2)
  }, 2000)
})

function dummy1(): void {
  promise.then(data => {
    console.log(data.toFixed())
  })
}


//===============================================================

function mergeObjects<T extends object, R extends object>(a: T, b: R) {
  return Object.assign({}, a, b)
}

const merged = mergeObjects({ name: 'John' }, { age: 999 })
const merged1 = mergeObjects({ firstname: 'John' }, { weight: 999 })

//===============================================================

interface ILength {
  length: number
}

function withCount<T extends ILength>(value: T): { value: T, count: string } {
  return {
    value,
    count: `value = ${value.length} =))`
  }
}

//console.log(withCount([1, 2, 3, 4, 5, 55, 54, 3, 33]))// array length
//console.log(withCount('hello')) //string length 

//===============================================================

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key]
}

const person = {
  name: 'Rick',
  age: 99
}
//console.log(getObjectValue(person, 'name')) //Rick
//console.log(getObjectValue(person, 'age')) //99



function aaa(str: string): void {
  console.log(str)
}


export function test(): void {
  aaa('2222')
}