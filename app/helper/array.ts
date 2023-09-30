class ArrayHelper {
  static countOccurances<T>(array: T[], func: (element: T) => boolean): number {
    const occurances = array.reduce((acc, cur) => {
      if (func(cur)) return ++acc;
      return acc;
    }, 0);
    return occurances;
  }
}

export { ArrayHelper };
