// task 1

// 4, так как скопировалась ссылка на объект

//task 2

let styles = ['Джаз', 'Блюз',]

styles.push('Рок-н-ролл')

styles[Math.floor((styles.length - 1) / 2)] = "Классика"

styles.shift()
//alert(styles)

styles.unshift("Рэп", "Регги")

//task 3

// вернётся весь массив: a, b, function() {alert( this )}

// task 4

let arr = []
let sum = 0

let sumInput = () => {
    let a = prompt("Введите число?", '0');
    if (a == '' || a == null || !isFinite(a)) { 
        for (i=0; i<arr.length; i++) {
        sum += arr[i]
        }  } 
        else {
        arr.push(+a)
        sumInput()
       } return sum
    }

alert(sumInput())


//task 5

let getMaxSubSum = (arr) => {
    let maxSum = 0; 
  
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let y = i; y < arr.length; y++) {
        sumFixedStart += arr[y];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
  }

  // P.s. лютая дичь. Тяжело
  