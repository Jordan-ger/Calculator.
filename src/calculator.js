import readlineSync from 'readline-sync';

const calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = parseFloat(readlineSync.question('Enter the first number: '));
    this.b = parseFloat(readlineSync.question('Enter the second number: '));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

export default calculator;
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

export { add, multiply };

