// task 1


let printNumbers = (from, to) => {

  let num = from

  let timerId = setInterval(function() {
    alert(num);
    if (num == to) {
      clearInterval(timerId);
    }
    num++;
  }, 1000);
} 


printNumbers(1, 8)



function printNumbers2(from, to) {
  let num = from;

  setTimeout( step = () => {
    alert(num);
    if (num < to) {
      setTimeout(step, 1000);
    }
    num++;
  }, 1000);
}


printNumbers2(1, 8)

//task 2

// сначала цикл, потом alert покажет 100000000



