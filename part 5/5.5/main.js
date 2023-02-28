// task 1

let camelize = (str) => {
  let arr = str.split('-');
  for (i=1; i<arr.length; i++) {
      str =  arr[i]
      arr[i] = str[0].toUpperCase() + str.slice(1);
    }    
    arr = arr.join('')
   // alert(arr)
  }
  camelize("background-color")


//task 2


let oldArr = [5, 3, 8, 1];

let filterRange = (arr, a, b) => {
  return arr.filter(item => (a <= item && item <= b));
}
let filtered = filterRange(oldArr, 1, 4);

//alert(filtered)

//task 3 

let filterRangeInPlace = (arr, a, b) => {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i]  > b) {
      arr.splice(i, 1)
    }
  }

}

let arr = [5, 3, 8, 1]

filterRangeInPlace(arr, 1, 4)
//alert( arr )


//task 4


let arr4 = [5, 2, 1, -10, 8]

arr4.sort((a, b) => b - a)

//alert( arr4 )

//task 5

let copySorted = (arr) => {
  return arr.slice().sort()
}

let arr5 = ["HTML", "JavaScript", "CSS"]

let sorted = copySorted(arr5)

//alert( sorted );


//task 6

let calc = new Calculator;

function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

//alert( calc.calculate("3 + 7") ); 

// P.s. Лютая дичь, ну честно я подсматриваю уже... я читать вроде читаю все понимаю, а написать так сразу жесть какая-то..я один такой ?!

//task 7
/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map (i => i.name)

alert( names )
*/
//p.s.тут халява хоть

//task 8

/*
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map( i => ({ 
    fullName: `${i.name} ${i.surname}`,
    id: `${i.id}`
  })  
)


// task 9


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr9 = [ vasya, petya, masha ]

let sortByAge = (users) => {
  users.sort((a, b) => a.age > b.age ? 1 : -1)
}

sortByAge(arr9)



//task 10

let shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
let arr10 = [1, 2, 3];

shuffle(arr10)
alert(arr10)


//task 11

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr11 = [ vasya, petya, masha ];

let getAverageAge = (users) => {
    let age = []
    let sum = 0
    for (i=0; i<users.length; i++) {
      age.push(users[i].age)
    }
    for (y=0; y<age.length; y++) {
      sum += age[y]
    } 
    return sum/arr11.length

} 

alert(getAverageAge(arr11))
//p.s. ну эта тоже достаточно не сложно



//task 12
let result = []

let unique = (arr) => {
  for(i=0; i<arr.length; i++) { 
    for (y=i+1; y<arr.length; y++) {
      if(arr[i] === arr[y]) {
        if(!result.includes(arr[i])){
              result.push(arr[i])
        }
      }
    }
  }
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

unique(strings)

alert( result )

// Я дико извиняюсь, но это было в Вашем тестовом, не мог удержаться и не скопировать

*/

//task13
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];


let groupById = (arr13)  => {
  return arr13.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}



let usersById = groupById(users);

