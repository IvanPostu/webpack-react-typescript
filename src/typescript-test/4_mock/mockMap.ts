export function map(array: [], callback: CallableFunction) {
  const result: Array<CallableFunction> = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }

  return result;
}
