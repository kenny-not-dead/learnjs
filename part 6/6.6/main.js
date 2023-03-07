//task 1

function makeCounter() {
  let count = 0;

  function counter() {
    return count++
  }

  counter.set = value => count = value

  counter.decrease = () => count--

  return counter
}

let counter = makeCounter();


alert( counter() ); // 0
alert( counter() ); // 1

counter.set(10); // установить новое значение счётчика

alert( counter() ); // 10

counter.decrease(); // уменьшить значение счётчика на 1

alert( counter() ); // 10 (вместо 11)


// task 2

function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15


// P.s. Лютая дичь...что-то я в этой жизни не понимаю видимо