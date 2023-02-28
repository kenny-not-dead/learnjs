// Это мой ответ
let ask = (question) => {
  let result = confirm (question);
  result ? 
  alert("Вы согласились."):
  alert("Вы отменили выполнение.");
}

// Это ответ от learn js

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);

// Пологаю мой отет короче.