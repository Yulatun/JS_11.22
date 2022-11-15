class Calculator {
  constructor(numFirst, numSecond) {
    this.num1 = numFirst;
    this.num2 = numSecond;
  }

  getSum = () => {
    return this.num1 + this.num2;
  };
  setX = (newNum1) => {
    if (
      typeof newNum1 !== 'number' ||
      newNum1 === Infinity ||
      newNum1 === -Infinity ||
      isNaN(newNum1)
    ) {
      throw Error();
    } else {
      this.num1 = newNum1;
    }
  };
  setY = (newNum2) => {
    if (
      typeof newNum2 !== 'number' ||
      newNum2 === Infinity ||
      newNum2 === -Infinity ||
      isNaN(newNum2)
    ) {
      throw Error();
    } else {
      this.num2 = newNum2;
    }
  };
  getMul = () => {
    return this.num1 * newNum1;
  };
  getSub = () => {
    return this.num1 - newNum1;
  };
  getDiv = () => {
    if (this.num2 <= 0) {
      throw Error();
    } else {
      return this.num1 / this.num2;
    }
  };
}
