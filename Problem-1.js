class Calculator {
  constructor(a, b, operator) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.operator = operator.toLowerCase();
  }

  calculate() {
    switch (this.operator) {
      case "add":
        return this.a + this.b;
      case "subtract":
        return this.a - this.b;
      case "multiply":
        return this.a * this.b;
      case "divide":
        if (this.b == 0) return "Number can't be divided by zero";
        return this.a / this.b;
      default:
        return "Check Operator";
    }
  }
}

const a = 10;
const b = 0;
const operator = "divid";

const calc = new Calculator(a, b, operator);
console.log(calc.calculate());
