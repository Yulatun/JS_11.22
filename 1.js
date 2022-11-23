let operator;
let number;
let number2;

function pressOperator(value) {
  if (operator !== undefined && number !== undefined && number2 !== undefined) {
    if (operator === '+') {
      number = Number(number) + Number(number2);
      number = Math.floor(number * 100000000) / 100000000;
      number2 = undefined;
      operator = value;
    } else if (operator === '-') {
      number = Number(number) - Number(number2);
      number = Math.floor(number * 100000000) / 100000000;
      number2 = undefined;
      operator = value;
    } else if (operator === 'x') {
      number = Number(number) * Number(number2);
      number = Math.floor(number * 100000000) / 100000000;
      number2 = undefined;
      operator = value;
    } else if (operator === '÷') {
      if (Number(number2) === 0) {
        alert(`you cannot divide by 0`);
        number = '';
        operator = undefined;
        number = undefined;
        number2 = undefined;
      } else {
        number = Number(number) / Number(number2);
        number = Math.floor(number * 100000000) / 100000000;
        number2 = undefined;
        operator = value;
      }
    }
    onDisplay(number);
  } else if (
    operator === undefined &&
    number !== undefined &&
    number2 === undefined
  ) {
    operator = value;
    onDisplay(number);
  } else if (
    operator !== undefined &&
    number !== undefined &&
    number2 === undefined
  ) {
    operator = value;
    onDisplay(number);
  } else {
  }
}
function onDisplay(value) {
  document.getElementById('result').value = value;
}

function pressDigit(value) {
  if (operator === undefined && number === undefined && number2 === undefined) {
    number = value;
    onDisplay(number);
  } else if (
    operator === undefined &&
    number !== undefined &&
    number2 === undefined
  ) {
    number = number + value;
    onDisplay(number);
  } else if (
    operator !== undefined &&
    number !== undefined &&
    number2 === undefined
  ) {
    number2 = value;
    onDisplay(number2);
  } else if (
    operator !== undefined &&
    number !== undefined &&
    number2 !== undefined
  ) {
    number2 = number2 + value;
    onDisplay(number2);
  }
}

function pressDot() {
  if (operator === undefined && number !== undefined && number2 === undefined) {
    if (!number.includes('.')) {
      number = number + '.';
      onDisplay(number);
    }
  } else if (
    operator !== undefined &&
    number !== undefined &&
    number2 !== undefined
  ) {
    if (!number2.includes('.')) {
      number2 = number2 + '.';
      onDisplay(number2);
    }
  } else if (
    operator !== undefined &&
    number !== undefined &&
    number2 === undefined
  ) {
    number = '0.';
    onDisplay(number);
  }
}

function pressEqual() {
  if (operator !== undefined && number !== undefined && number2 !== undefined) {
    if (operator === '+') {
      number = Number(number) + Number(number2);
      number = Math.floor(number * 100000000) / 100000000;
    } else if (operator === '-') {
      number = Number(number) - Number(number2);
      number = Math.floor(number * 100000000) / 100000000;
    } else if (operator === 'x') {
      number = Number(number) * Number(number2);
      number = Math.floor(number * 100000000) / 100000000;
    } else if (operator === '÷') {
      if (Number(number2) === 0) {
        alert(`you cannot divide by 0`);
        number = '';
      } else {
        number = Number(number) / Number(number2);
        number = Math.floor(number * 100000000) / 100000000;
      }
    }
    onDisplay(number);
  } else if (
    operator !== undefined &&
    number !== undefined &&
    number2 === undefined
  ) {
    number2 = number;
    if (operator === '+') {
      number = Number(number) + Number(number2);
      number = Math.floor(number * 100000000) / 100000000;
    } else if (operator === '-') {
      number = Number(number) - Number(number2);
      number = Math.floor(number * 100000000) / 100000000;
    } else if (operator === 'x') {
      number = Number(number) * Number(number2);
      number = Math.floor(number * 100000000) / 100000000;
    } else if (operator === '÷') {
      if (Number(number2) === 0) {
        alert(`you cannot divide by 0`);
        number = '';
      } else {
        number = Number(number) / Number(number2);
        number = Math.floor(number * 100000000) / 100000000;
      }
    }
    onDisplay(number);
  } else if (
    operator === undefined &&
    number !== undefined &&
    number2 === undefined
  ) {
    number = number;
  }
  operator = undefined;
  number = undefined;
  number2 = undefined;
}

function pressToOpposite() {
  if (operator === undefined && number !== undefined && number2 === undefined) {
    if (number === '0' || number === '00') {
    } else {
      number = '-' + number;
      onDisplay(number);
    }
  } else if (
    operator !== undefined &&
    number !== undefined &&
    number2 !== undefined
  ) {
    number2 = '-' + number2;
    onDisplay(number2);
  }
}

function clearScreen() {
  operator = undefined;
  number = undefined;
  number2 = undefined;
  document.getElementById('result').value = '';
}

function Del() {
  if (operator === undefined && number !== undefined && number2 === undefined) {
    number = number.slice(0, -1);
    onDisplay(number);
  } else if (
    operator !== undefined &&
    number !== undefined &&
    number2 !== undefined
  ) {
    number2 = number2.slice(0, -1);
    onDisplay(number2);
  } 
}
