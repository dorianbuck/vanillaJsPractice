const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
  const result = num1 + num2;
  alert('The result is ' + result);
}

add(18, 219);

currentResult = (currentResult + 9) * 3;

let calculationDescription = `( + ${defaultResult} + 7) (0+13)`;
let errorMessage = "An error" + "occured";
outputResult(currentResult, calculationDescription);
