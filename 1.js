Array.prototype.customFilter = function (callback, obj = {}) {
  if (
    typeof callback === 'function' &&
    typeof obj === 'object' &&
    obj !== null
  ) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
      const result = callback.call(obj, this[i], i, this);
      if (result) {
        newArr.push(this[i]);
      }
    }
    return newArr;
  } else {
    throw Error();
  }
};
