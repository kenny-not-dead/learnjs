// Так как задач 5, тоже решил прописать в один файл.

//task 1


if ("0") {
    alert( 'Привет' );
  } // выведетися, так как строка будет true

//task 2

let answer = prompt('Какое «официальное» название JavaScript?', '');

if (answer == 'ECMAScript') {
  alert('Верно!');
} else {
  alert('Не знаете? ECMAScript!');
}


//task 3

let task3 = prompt('Введите число', '');

if (task3 > 0) {
    alert('1');
  } else if (task3 < 0) {
    alert('-1');
  } else if (task3 == 0) {
    alert('0')
  }

  //task 4

let result;

result = (a + b < 4) ? 'Мало' : 'Много';
  
 //task 5

let message;

message = (login == 'Сотрудник') ? message = 'Привет' 
        : (login == 'Директор') ? message = 'Здравствуйте'
        : (login == '') ? message = 'Нет логина' 
        : message = ''

