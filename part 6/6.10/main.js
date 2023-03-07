//task 1

// null


//task 2

// bind привязал Васю, поэтому так и будет Вася


//task 3

// я ответил не правильно, думал что 5 так и будет. Честно говоря так и не понял почему undefined, т.к. мы вроде как сделали bind после test = 5

//task 4

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//task 5


function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user5 = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user.login.bind(user5, true), user5.login.bind(user, false));