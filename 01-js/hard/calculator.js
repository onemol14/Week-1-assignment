/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/


class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {

    try {
      if(number === 0) {
        throw "divide by zero error";
      }
    } catch {
      return err;
    }

    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  /* 
    1. remove spaces from input
    2. convert infix to postfix notation 
    3. evaluate postfix notation
  */ 

  precedence(token) {
    if(token === '(') {
      return 0; 
    }
    if(token === '+' || token === '-') {
      return 1;
    }
    if (token === '*' || token === '/') {
      return 2;
    }
  }

  performOperation(a, b, op) {
    switch(op) {
      case '+': return a+b;
      case '-': return a-b;
      case '*': return a*b;
      case '/': {
        if(b === 0) {
          throw new Error("divide by zero error");
        }
        return a/b;
      }
    }
  }

  isNumOrDecimal(token) {
    const regex = /^[0-9.]$/;
    return regex.test(token);
  }

  isOperator(token) {
    const regex = /[()+\-*/]/;    
    return regex.test(token);
  }

  isValidSequence(expression) {
    for(let token of expression) {
      if(!this.isNumOrDecimal(token) && !this.isOperator(token) && token !== ' ') {
        return false;
      }
    }
    return true;
  }

  validateParantheses(expression) {
    let count = 0;

    for(let token of expression) {
      if(token === '(') {
        count++;
      } else if(token === ')') {
        count--;
      }

      if(count < 0) {
        return false;
      }
    }

    return count == 0;
  }

  getCleanExpression(expression) {
    let tokens = [];

    for(let i = 0; i < expression.length; i++) {

      if(expression[i] === ' ') {
        continue;
      } else if(this.isOperator(expression[i])) {
        tokens.push(expression[i]);
      } else {
        let temp = [];

        while(i < expression.length && this.isNumOrDecimal(expression[i])) {
          temp.push(expression[i]);
          i++;
        }

        i--;

        let tempStr = temp.join('');

        tokens.push(tempStr);
      }
    }

    return tokens;
  }


  calculate(expression) {
    expression = expression.toLowerCase();
    // let tokens = expressionArray.filter((ch) => ch !== ' ');

    if(!this.isValidSequence(expression)) {
      throw new Error("invalid expression");
    }

    if(!this.validateParantheses(expression)) {
      throw new Error("invalid parantheses");
    }

    let tokens = this.getCleanExpression(expression);
    
    let operandStack = [];
    let operatorStack = []; 

    let i = 0;

    for(i = 0; i < tokens.length; i++) {
      if(!isNaN(tokens[i])) {
        operandStack.push(Number(tokens[i]));
      } else if(tokens[i] === '(') {
        operatorStack.push('(');
      } else if(tokens[i] === ')') {
        while(operatorStack.length > 0 && operatorStack[operatorStack.length-1] !== '(') {
          let b = operandStack.pop();
          let a = operandStack.pop();
          let op = operatorStack.pop();
          let num = this.performOperation(a, b, op);
          operandStack.push(num);
        }

        operatorStack.pop();
      } else if(this.precedence(tokens[i]) < this.precedence(operatorStack[operatorStack.length-1])) {

        while(operatorStack.length > 0 && 
          this.precedence(tokens[i]) < this.precedence(operatorStack[operatorStack.length-1])) {
          let b = operandStack.pop();
          let a = operandStack.pop();
          let op = operatorStack.pop();
          let num = this.performOperation(a, b, op);
          operandStack.push(num);
        }

        operatorStack.push(tokens[i]);
      } else {
        operatorStack.push(tokens[i]);
      }
    }


    while(operatorStack.length > 0) {
      let b = operandStack.pop();
      let a = operandStack.pop();
      let op = operatorStack.pop();
      let num = this.performOperation(a, b, op);
      operandStack.push(num);
    }

    this.result = operandStack[operandStack.length-1];
  }
}

module.exports = Calculator;
