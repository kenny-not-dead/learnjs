//task 1

//ver1

let sumToV1 = (n) => {
    let result = 0
    for(i = 1; i <= n; i++) {
        result += i
    } return result  
}   

 alert(sumToV1(4))


// ver 2
let sumToV2 = (n) => {
    if (n == 1) {
        return n
    } else {
        return n + sumToV2 (n-1)
    }
}

alert (sumToV2(4))

// ver 3

let sumToV3 = (n) => {
    return n * (n + 1) / 2;
}   

alert (sumToV3(4))


/* Ответы на P.s.

1. Вариант 3 будет самый быстрый, так как посчитает все за один цикл, далее будет for и на последнем месте рекурсия

2. При вызове sumTo(100000) через рекурсию выдал ошибку, значит нет, нельзя

p.s. лично я долго мучался с вариантом №1, потом за 5 секунд сделал второй вариант и только потом реализовал первый. Третий стырий формулу в википедии.

*/

// task 2

let factorial = (n) => {
    if (n == 1) {
        return n
    } else {
        return n * factorial(n-1)
    }
}

alert(factorial(5))


// p.s. не сложно

//task 3

let fib = (n) => {

    let a = 1
    let b = 1
    for(i=3; i <= n; i++) {
        let result = a + b
        a = b
        b = result
    } return b
} 

alert(fib(7))

// p.s. заметно тяжелее, тяжело было понять что надо i начинать с 3

//task 4
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };


  
let printList = (list) => {
    for (i=0; i < list.value; i++){
      alert(list.value)
      list = list.next
    } 
  }

printList(list)
// из-за значения null падает ошибка после вывода всех значений, ниже код работает если закоментить этот...решил не прописывать if

let printList2 = (list) => {
    alert(list.value)
    if (list.next) {
      printList2(list.next)
    }
  }
  
printList2(list);


//task 5

let printReverseList = (list) => {
    if (list.next) {
      printReverseList(list.next)
    }
    alert(list.value)
  }
  
  printReverseList(list)

  let printReverseList2 = (list) => {
    let arr = []
    let tmp = list
  
    while (tmp) {
      arr.push(tmp.value)
      tmp = tmp.next
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      alert( arr[i] )
    }
  }
  
  printReverseList2(list)

  // очень тяжеловато, приходится подсматривать.