let salary = Number (prompt("Введіть розмір вашої зарплати"))
console.log(salary)
const more = salary * 0.15
console.log(more)
const less = (salary + more) * 0.1; 
console.log(less)
const shop = 190
const result = salary + more - less - shop
console.log(result)
alert("Чувак грошей є:" + result)