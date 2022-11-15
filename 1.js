function concatStrings(string, separator) {
  if (typeof separator !== 'string') {
    separator = '';
  }
  if (typeof string !== 'string') {
    return '';
  } else {
    return function func(string2) {
      if (typeof string2 !== 'string') {
        if (string2 === undefined) {
          return string + separator;
        } else {
          return function stub(string3) {
            return string3 !== undefined ? stub : string + separator;
          };
        }
      } else {
        return concatStrings(string + separator + string2, separator);
      }
    };
  }
}