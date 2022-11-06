function selectFromInterval(arr, firstNumber, secondNumber) {
  let result = [];
  if (!Array.isArray(arr) || arr.some((el) => typeof el !== 'number')) {
    throw new Error('please, pass the array of numbers as the first argument');
  }

  if (firstNumber <= secondNumber) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= firstNumber && arr[i] <= secondNumber) {
        result.push(arr[i]);
      }
    }
    return result;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= secondNumber && arr[i] <= firstNumber) {
        result.push(arr[i]);
      }
    }
    return result;
  }
}
