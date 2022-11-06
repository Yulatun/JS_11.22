const symbols = prompt('enter less than 3 symbols');
const number = parseFloat(prompt('enter a number'));

const stringToReturn = ((symbols + ' ').repeat(number) + '\n').repeat(number);

if (symbols.length <= 3 && symbols.length > 0 && 0 < number && number <= 10) {
  console.log(stringToReturn);
} else {
  console.log('Incorrect input!');
}
