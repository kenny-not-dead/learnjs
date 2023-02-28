//task 1

// отличий нет, так как в любом случае мы или отработаем в if или перейдем далее.

//task 2

 checkAge = (age) => age > 18 ? true : confirm('Родители разрешили?')

 checkAge = (age) => age > 18 || confirm('Родители разрешили?')

 // p.s. я дико извиняюсь, что функцию написал не как в ответе в учебнике, так как для меня более привлекательны стрелочные.

 // task 3

 min = (a, b) => {
  if (a > b) {
    return b 
    } else {
      return a 
    }
 }

 // task 4

let pow = (x, n) => {
  let result 
  result = x**n

  alert (result)
 }

let x = prompt("x?", '');
let n = prompt("n?", '');


if ( n > 0) {
  pow (x,n)
} else {
  alert ('степень должна быть больше 0')
}