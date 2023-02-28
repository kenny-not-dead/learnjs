// task 1

let user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name

// task 2

let test = {}

isEmpty = (obj) => {
    for (let key in obj) {
       return false
    } return true
}

// task 3 
// Все что внутри объекта можем изменить, фактически не можем изменить только сам тип
/*p.s. распространный вопрос на собесах отличия let и const,
после которого следует вопрос, а можно ли изменить объект?*/


//task 4
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let result = 0

let summ = (obj) => {
    for (let key in obj) {
        result += obj[key]
     } 
}

summ(salaries)

console.log(result)

//task 5

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

let multiplyNumeric = (obj) => {
    for (let key in obj) {
       if (typeof obj[key] == 'number') {
        obj[key] *= 2
            }
        }
    }

multiplyNumeric(menu)

console.log(menu)

// p.s. долго задержлся на проверке number, т.к. сравнивал не со строкой
