class Lodash {
  compact(array: Array<any>): Array<any> {
    return array.filter((item) => !!item);
  }

  groupBy(array: Array<any>, prop: any) {
    return array.reduce((acc, item) => {
      const key = typeof prop === 'function' ? prop(item) : item[prop];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});
  }
}

export { Lodash };
