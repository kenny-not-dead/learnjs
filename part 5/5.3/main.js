//task 1

let ucFirst = (str) => {
    a = str.length
    return str[0].toUpperCase() + str.slice(1)
}


//task 2

let checkSpam = (str) => {
    str = str.toLowerCase()
    return str.includes('viagra') || str.includes('xxx');

}


//task 3
 
let truncate = (str, maxlength) => {
    if (str.length > maxlength) {
       return str.slice(0, maxlength) + '...'
    }
}

//task 4

let extractCurrencyValue = (str) => {
    return +str.slice(1);
  }
