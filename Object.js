// const person = {
//     name: 'John',
//     age: 30,
//     occupation: 'Developer'
// };

// const keys = Object.keys(person);
// keys.forEach(key => {
//     console.log(`${key}: ${person[key]}`);
// });


// const laptop = {
//     brand: 'Apple',
//     model: 'MacBook Air',
//     year: 2021
// };

// Object.values(laptop).forEach(value => {
//     console.log(value);
// });

const Student = {

    stuname : "prudhvi",
    stunum: 567,
    stucourse: 'cypress',
}

console.log(Student)
console.log(Student.stuname)
console.log(Student.stunum)
console.log(Student.stucourse)

Student["place"] = "Hyderabad"

console.log(Student)

Student["stunum"] = 4567


console.log(Student)