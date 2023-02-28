//task 1

let user = {
  name: "John",
  years: 30
};


let {name, years: age, isAdmin = false} = user


alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false


// task 2


let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

let topSalary = (salaries) => {
  let maxsalaries = 0;
  let HappyName = null;

  for(let [name, salary] of Object.entries(salaries)) {
    if (maxsalaries < salary) {
      maxsalaries = salary;
      HappyName = name;
    }
  }

  return HappyName;
}

alert(topSalary(salaries))

