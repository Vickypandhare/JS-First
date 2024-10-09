// Primitives
//7 types:- String ,Number ,null ,Boolean, undefined, Symbol, bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);\

const bigNumber = 9859023475894n



// referece(Non Primitives)
// Array, Objects, Functions

const Heroes = ["Goku", "Luffy", "Naruto"]

let myObj = {
    Name: "Vicky",
    Age: 23
}
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3