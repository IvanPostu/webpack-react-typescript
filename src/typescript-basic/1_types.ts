const isFetching: boolean = true

const int: number = 44
const float: number = 44.2232
const num: number = 3e10

const message: string = 'Hello'

const numberArray1: number[] = [1, 2, 3, 4, 5, 6]
const numberArray2: Array<number> = [1, 2, 3, 4, 5, 6]

//Tuple
const contact: [string, number] = ['Name', 1234]

//Any
let variable: any = 42
variable = 'New string'
variable = []

function sayMyName(name: string): void {
  console.log(name)
}

function infinite(): never {
  while (true) {

  }
}

//Type
type Login = string
const login: Login = 'admin'

type ID = string | number
const id1 = 22
const id2 = 'abcde'

type SomeType = string | null | undefined













