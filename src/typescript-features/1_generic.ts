


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


//===============================================================

class Collection<T extends number | string | boolean> {

  private _items: T[]

  constructor(items: T[]) {
    this._items = items
  }

  add(item: T) {
    this._items.push(item)
  }

  get items(): T[] {
    return this._items
  }

  remove(item: T) { //not work for object type
    this._items = this._items.filter(i => i !== item)
  }

}

const strings = new Collection<string>(['hello', 'my', 'friend'])
const numbers = new Collection<number>([1, 2, 3, 33])

//===============================================================

interface Car {
  model: string
  year: number
}

function createAndValidate(model: string, year: number): Car {
  const car: Partial<Car> = {}

  if (model.length > 3) {
    car.model = model
  }

  if (year > 2000) {
    car.year = year
  }

  return car as Car
}

//===============================================================

const cars: Readonly<Array<string>> = ['Ford', 'Audi']
// cars.push('Lada') //error

const ford: Readonly<Car> = {
  model: 'Ford',
  year: 2000
}

// ford.model = 'Ferrari' //error

//===============================================================
