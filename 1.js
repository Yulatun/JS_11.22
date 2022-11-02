let checkNumber1 = + prompt('enter 1st number');
let checkNumber2 = + prompt('enter 2nd number');

let sumOfNumbers = checkNumber1 + checkNumber2;
let productOfNumbers = checkNumber1 * checkNumber2;
let powOfNumbers = Math.pow(checkNumber1, checkNumber2);

  console.log(typeof checkNumber1);
  console.log(typeof checkNumber2);

if (
  !isNaN(checkNumber1) &&
  !isNaN(checkNumber2)
) {
  console.log(`First number:   ${checkNumber1}`);
  console.log(`Second number: ${checkNumber2}`);
  console.log(`Sum:  ${sumOfNumbers}`);
  console.log(`Product: ${productOfNumbers}`);
  console.log(`Power:  ${powOfNumbers}`);
} else {
  console.log('Incorrect input!');
}

