//task 1
let i = 3;

while (i) {
  alert( i-- );
} // 1, выполняет до тех пор пока while != 0

//task 2

//2.1 - 1,2,3,4 
//2.2 - 1,2,3,4,5


//task 3

//3.1 - 0,1,2,3,4
//3.2 - 0,1,2,3,4


//task 4

for (i=2; i<=10; i++) {
  if (i % 2 == 0) {
    alert (i)
  }
}

//task 5
let z = 0
while(z < 3) {
  alert( `number ${z}!` )
  z--
}

//task 6

let num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

//task 7

let n = 10;

nextPrime:
  for (i=2; i<=n; i++){
    for(y=2; y<i; y++) {
      if (i % y == 0 ) continue nextPrime
      alert (i)
    }
  }


