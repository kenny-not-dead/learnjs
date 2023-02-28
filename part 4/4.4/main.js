/*
task 1

Будет какая-то то хрень, потому что This не сможет обратиться к вышестоящему name, его просто нет.
*/

//task 2

let a
let b 

let calculator = {
  result: undefined,
  read() {
    getNumber()
    this.a = a
    this.b = b
  },

  sum() {
    getNumber()
    return (a+b)
  },

mul() {
    getNumber()
    return (a*b)
  }
}

getNumber = () => {
    a = +prompt("a?", '')
    b = +prompt("b?", '')
}

/*  Оставил из задачи для возможности вызова копи-паст
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

//task 3

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this
    },
    down() {
      this.step--;
      return this
    },
    showStep: function() {
      alert( this.step );
      return this
    }
  };

  ladder.up().up().down().showStep().down().showStep();

  // пришлось посмотреть ответ, так как я не понял почему просто return не сработало нормально