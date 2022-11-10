function createDebounceFunction(callback, sec) {
  if (
    typeof callback !== 'function' ||
    typeof sec !== 'number' ||
    sec < 0 ||
    isNaN(sec) ||
    sec === Infinity
  ) {
    throw Error();
  } else {
    let timeoutID;
    const delayFunction = () => {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
      timeoutID = setTimeout(() => {
        timeoutID = undefined;
        callback();
      }, sec);
    };

    return delayFunction;
  }
}
