function calculator(operator, a, b) {
  switch (operator) {
    case '+':
      return a + b;

    case '-':
      return a - b;

    case '/':
      return a / b;

    case '*':
      return a * b;
  }
}

export default calculator;
