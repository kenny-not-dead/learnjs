//task 1

// покажет 0 и 1, переменная count живет только внутри этих функций, при отработке первой, вторая не изменяется.

//task 2

// будет работать, покажет 1, 2 и 1. 

//task 3

// чтобы работало функцию надо вызывать внутри if, т.к. снаружи к ней нет доступа.

// task 4

let sum = (a) => {
  return sum2 = (b) => {
    return a + b
  }
}

// task 5


let arr = [1, 2, 3, 4, 5, 6, 7];

let inBetween = (a, b) => {
  return filter = (f) => {
    return f >= a && f <= b
  }
  }

let inArray = (values) => {
  return filter = (f) => {
      return values.includes(f);
  }
}

//alert( arr.filter(inArray([1, 2, 10])) ); 

//alert( arr.filter(inBetween(3, 6)) );


// task 6


let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

let byField = (fieldName) => {
      return ((a,b) => a[fieldName] > b[fieldName] ? 1: -1)
  }

users.sort(byField('name'));
//users.forEach(user => alert(user.name))

users.sort(byField('age'));
//users.forEach(user => alert(user.name))

// Условие в задаче вообще непонятное, и еще очень долго пытался записать через a.fieldName, так как по идее приходило все норм через консоль

//task 7

function makeArmy() {
  let shooters = [];

  for(let i=0; i < 10; i++) {
    let shooter = function() { 
      alert( i )
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0]()
army[5]()

// Вот что я действительно не понял, почему в for без let не работает код.