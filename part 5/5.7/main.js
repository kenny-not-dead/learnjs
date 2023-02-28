// task 1


let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
  return Array.from(new Set(arr));
}

alert( unique(values) )

/* Тоже тяжко идёт, пришлось подсмотреть ответ, я делад как в обучении,
let set = new Set(), потом for пробегался по массиву и add каждый...
потом получается надо было пробегаться заново чтобы выводить
понял то что слишком громоздко.

 */

// task 2

function aclean(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );


//task 3
// добавить
let keys = Array.from(map.keys());