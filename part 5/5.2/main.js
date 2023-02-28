//task 1


getNumber = () => {
    a = +prompt("a?", '')
    b = +prompt("b?", '')
    return a + b
}

//alert(getNumber())

/*
P.s.
Не понимаю о каких "подвоных камнях" они пишут в задании,
 так как фактически это же писали в 4.4 "+" перед Prompt уже писали
*/ 

//task 2

//alert( Math.round(6.35 * 10) / 10 );

// потеря точности

//task 3

let readNumber = () => {
    let a = prompt("Введите число?", '') 
    if ( !isFinite(a)) {
        readNumber()  
    } else if ( a === '') {
        a = null  
    }

   a == null? alert (a) : alert(+a)
}

// readNumber()

// task 4

// Вероятно такое может быть из-за потери точности, хотя если бы не задача, никогда бы не подумал, что такое возможно

// task 5


let a  
let random = (min, max) => {
    a = Math.random() * max 
    let b = Math.floor(a)
    if (b < min) {
        random(min, max)
    }
}

random (10, 20)

alert(a)

/* P.s. я дико извиняюсь, но решение из ответа на сайте какая-то 
лютая дичь, я не понимаю зачем там что-то умножать и вычетать, чтобы не выводить
больше max то на него надо тупо умножить, ну и проверить чтобы было больше
чем min. В общем сорян, но работает, и достаточно быстро, решение которого
я не понимаю, я решил не писать.
*/

// task 6

let b 
let randomInteger = (min, max) => {
     b = Math.floor(Math.random() * (max+1)) 
     if (b < min) {
        randomInteger(min, max) 
    }
} 

randomInteger(10, 12)

alert(b)

// p.s. ну округление я выполнил еще выше =)






