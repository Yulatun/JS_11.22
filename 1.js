const checkNumber1 = Number(prompt('enter 1st number'));
const checkNumber2 = Number(prompt('enter 2nd number'));

const sumOfNumbers = checkNumber1 + checkNumber2;
const productOfNumbers = checkNumber1 * checkNumber2;
const powOfNumbers = Math.pow(checkNumber1, checkNumber2);

if (!isNaN(checkNumber1) && !isNaN(checkNumber2)) {
  console.log(`First number:   ${checkNumber1}`);
  console.log(`Second number: ${checkNumber2}`);
  console.log(`Sum:  ${sumOfNumbers}`);
  console.log(`Product: ${productOfNumbers}`);
  console.log(`Power:  ${powOfNumbers}`);
} else {
  console.log('Incorrect input!');
}
