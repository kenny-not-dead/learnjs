//task 1


let date1 = new Date(2012, 01, 20, 3, 12);

alert(date1)


//task 2

let date2 = new Date(2012, 0, 3);  // 3 января 2012 года


let getWeekDay = (date) => {
  let day = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']

  return day[date.getDay()]
} 

alert( getWeekDay(date2) )


//task 3

let date3 = new Date(2012, 0, 3);  // 3 января 2012 года

let getLocalDay = (date) => {
  let x = date.getDay() 
  if (x == 0) {
    x = 7
  } return x
}


alert( getLocalDay(date3) );  


//task 4

let getDateAgo = (date, days) => {
  let newDate = new Date(date);

  newDate.setDate(date.getDate() - days);
  return newDate.getDate();
}

let date4 = new Date(2015, 0, 2);

alert( getDateAgo(date4, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date4, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date4, 365) ); // 2, (2 Jan 2014)  


//task 5

let  getLastDayOfMonth = (year, month) => {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

alert( getLastDayOfMonth(2012, 0) ); // 31
alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2013, 1) ); // 28



//task 6

let getSecondsToday = () => {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let result = now - today; 
  return Math.round(result / 1000); 
}

alert( getSecondsToday() );

//task 7

let getSecondsToTomorrow = () => {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() +1);
  let result = tomorrow - now;
  return Math.round(result / 1000); 
} 


alert(getSecondsToTomorrow())

//task 8

let formatDate = (date) => {
  let result = new Date() - date; 

  if (result < 1000) { 
    return 'прямо сейчас';
  }

  let sec = Math.floor(result / 1000); 

  if (sec < 60) {
    return sec + ' сек. назад';
  }

  let min = Math.floor(result / 60000);

  if (min < 60) {
    return min + ' мин. назад';
  }


  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2));

  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

alert( formatDate(new Date(new Date - 1)) ); 
alert( formatDate(new Date(new Date - 30 * 1000)) );
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); 
alert( formatDate(new Date(new Date - 86400 * 1000)) );