//task 1

let sumSalaries =(salaries) => {
    let sum = 0
    for (let salary of Object.values(salaries)) {
      sum += salary
    }
    return sum
} 



let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
alert( sumSalaries(salaries) );

  //task 2

  let count = (obj) => {
   return Object.keys(obj).length
  }

  let user = {
    name: 'John',
    age: 30
  };

  alert( count(user) )


  // Серьезно такая задача? то есть до этого можно сидеть было минут 30 над каждой мучать, а тут за 10 секунд можно было?