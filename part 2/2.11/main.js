
// Аналогично, пишу в один файл.

// task 1 

alert( null || 2 || undefined ); // 2

// task 2

alert( alert(1) || 2 || alert(3) ); // в первом alert 1, во втором alert 2

// task 3

alert( 1 && null && 2 ); // null 

// task 4

alert( alert(1) && alert(2) ); // в первом случае 1, далее основной alert выведет underfined

// task 5

alert( null || 2 && 3 || 4 ); // 3


// task 6

let age

if (age >= 14 && age <= 90)

// task 7

if (!(ageTask7 >= 14 && ageTask7 <=90)) {
  alert ('Возраст меньше 14 или больше 90')
} // вообще как то сложно читается на мой взгляд из-за этого !

if (ageTask7 < 14 || ageTask7 > 90){
  alert ('Возраст меньше 14 или больше 90')
}

// task 8

if (-1 || 0) alert( 'first' ); // выполнится
if (-1 && 0) alert( 'second' ); // не выполнится  
if (null || -1 && 1) alert( 'third' ); // выполнится


// task 9 

let login  = prompt ('Кто там?', '') 

if (login == 'Админ') {
  password = prompt('Пароль', '')
      if (password == "Я Главный") {
        alert('Здравствуйте')
      } else if (password == '' || password==null) {
        alert('Отменено')
      } else {
        alert('Неверный пароль')
      }
} else if (login == '' || login==null) {
  alert('Отменено')
} else {
  alert('Я Вас не знаю')
}