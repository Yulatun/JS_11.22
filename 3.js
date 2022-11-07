function createIterable(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number' || num1 >= num2) {
    throw new Error();
  }
  const newObject = {};
  newObject[Symbol.iterator] = function () {
    let n = num1;
    done = false;
    return {
      next() {
        n = num1;
        num1 += 1;
        if (n > num2) {
          done = true;
        }
        return { value: n, done: done };
      },
    };
  };
  return newObject;
}
