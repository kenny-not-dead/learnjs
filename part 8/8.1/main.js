// task 1

// true, null, undefined

// task 2

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__ : head,
};

let bed = {
  __proto__ :table,
  sheet: 1,
  pillow: 2
};

let pockets = {
  __proto__ :bed,
  money: 2000
};

// head.glasses получить быстрее, так как сначала поиск будет внутри head, но мой ответ не сошелся с ответом на сайте =) видимо был не прав =)

//task 3

// свойство full при вызове rabbit.eat() получит rabbit?

//task 4

// мы пушим в массив, который находится в hamster, поэтому lazy при вызове stomach начинает искать в hamster значение. Нужно убрать пуш. 