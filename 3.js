function createIterable(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number' && num1 <= num2) {
    let array = [];
    while (num1 <= num2) {
      array.push(num1);
      num1++;
    }
    return array;
  } else {
    throw new Error('error');
  }
}

const iterable = createIterable(1, 4);
