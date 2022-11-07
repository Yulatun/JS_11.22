function makeDeepCopy(obj) {
  if (typeof obj !== 'object') {
    throw new Error();
  } else {
    let value;
    let key;
    let copiedObject;
    copiedObject = Array.isArray(obj) ? [] : {};
    for (key in obj) {
      value = obj[key];
      if (typeof value === 'object') {
        copiedObject[key] = makeDeepCopy(value);
      } else {
        copiedObject[key] = value;
      }
    }
    return copiedObject;
  }
}
