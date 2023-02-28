/*
task 1

Объект может быть равен объекту только если ссылка идёт на один и тот же объект
Вероятно функция должна возвращать уже созданный ранее объект

*/

let test = {}

function A() { return test }
function B() { return test }

let a = new A();
let b = new B();


alert( a == b );


//task 2

// Подумал, что я предыдущую задачу неверно понял, но вернулся в условия, тут прописали что prompt должно быть только в read, а там нет. Я подумал что для каждой функции свой вызов.


function Calculator() {
  this.read = function read() {
    a = +prompt("a?", '')
    b = +prompt("b?", '')
    this.a = a
    this.b = b
  };

  this.sum = function sum() {
    return this.a + this.b
  };

  this.mul = function mul() {
    return this.a*this.b
  }

}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


//task 3

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function read() {
    this.value = +prompt("a?", '') + this.value
  };
}

let accumulator = new Accumulator(1); 

accumulator.read()
accumulator.read()

alert(accumulator.value)