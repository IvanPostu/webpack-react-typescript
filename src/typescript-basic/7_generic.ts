const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5, 55, 3, 2, 1, 2, 2, 33]
const arrayOfStrings: Array<string> = ['hello', 'my', 'dear', 'friend']

function reverse<T>(array: T[]): T[] {
  return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)


//=====================================



