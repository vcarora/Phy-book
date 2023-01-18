// Higher order function returning an other function
// const higherOrder = n => {
//     const doSomething = m => {
//       const doWhatEver = t => {
//         return 2 * n + 3 * m + t
//       }
//       return doWhatEver
//     }
//     return doSomething
//   }
//   console.log(higherOrder(2)(3)(10))

  // Let us access the arguments object
function sumAllNums() {
  arguments += arguments
 console.log(arguments)
}

sumAllNums(1,2)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

//console.log(a)
var a  = 10
console.log(a)
function varDemo(){
 a = 14
  console.log(a)}
varDemo()
console.log(a)
let b =11 
console.log(b)
function letDemo(){
   b = 15
  console.log(b)
}
letDemo()
console.log(b)
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  isMarried: true
}
console.log(person)
console.log(Object.entries(person))
console.log(person.hasOwnProperty('skills'))
const dog = {
  age : 10,
  barkProperty : function(){
    return "woof woof"
  } 
}
console.log(dog.barkProperty)
  let js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript.lastIndexOf('a'))
console.log(charsInJavaScript.splice(2,3))
console.log(charsInJavaScript)
charsInJavaScript.push('as')

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]
console.log(charsInJavaScript.includes('as'))
console.log(charsInJavaScript.join('-> '))
console.log(charsInJavaScript.sort())

// higher order function 
// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2
}
// function that takes other function as a callback
function cube(call, n) {
  return call(2) * n
}
console.log(cube(callback, 4))
// let number = prompt('Enter number', 'number goes here')
// console.log(number)
// const agree = confirm('Are you sure you like to delete? ')
// console.log(agree) // result will be true or false based on what you click on the dialog box
const now = new Date()
console.log(now.getHours()) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)