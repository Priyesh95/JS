//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Storage types
// Stack(primitive data type) Heap(Non primitive data types)

let emailOne = "test@gmail.com"

let emailTwo = emailOne

console.log(emailOne) // "test@gmail.com"
console.log(emailTwo) // "test@gmail.com"

emailTwo = "newTest@gmail.com"

console.log(emailOne) // "test@gmail.com"
console.log(emailTwo) // "newTest@gmail.com"


let userOne = {
  email : "test@gmail.com"
  id : "123"
}

let userTwo = userOne;

console.log(userOne.email) // "test@gmail.com"
console.log(userTwo.email) // "test@gmail.com"

usertwo.email = "newTest@gmail.com"


console.log(userOne.email) // "test@gmail.com"
console.log(userTwo.email) // "newTest@gmail.com"

