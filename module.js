/* 
    Functions

    1. Functions allow us to bundle together a lot of functionality
    and then easily call it all at once by name (the function name)

    2. Function allow to specify exactly WHEN we want to call 
    this functionality.

    3. the different syntaxes change the lexical meaning of the keyword 'this'

*/


/*let myName = prompt('Enter your name')
let month = prompt('What month were you born?')
let food = prompt('What is your favorite food?')

console.log('My name is', myName)
console.log('I was born in', month)
console.log('My favorite food is', food)*/

/*function quiz() {
    let myName = prompt('Enter your name')
    let month = prompt('What month were you born?')
    let food = prompt('What is your favorite food?')
    
    console.log('My name is', myName)
    console.log('I was born in', month)
    console.log('My favorite food is', food)
}*/

const quiz = () => {
    let myName = prompt('Enter your name')
    let month = prompt('What month were you born?')
    let food = prompt('What is your favorite food?')
    
    console.log('My name is', myName)
    console.log('I was born in', month)
    console.log('My favorite food is', food)
}

const print = () => {
    console.log('I love to print text!')
}

/*const functionA = () => {
    console.log('FUNCTION A HAS BEEN CALLED!')
    functionB()
}

const functionB = () => {
    console.log('FUNCTION B HAS BEEN CALLED')
}

we can define functions with other functions not declared yet
 because we are defining it, not invoking. If invoking before declaration,
 then it will not work*/

 const functionA = (f) => {
    console.log('FUNCTION A HAS BEEN CALLED!')
    f()
}

const functionB = () => {
    console.log('FUNCTION B HAS BEEN CALLED')
}

const functionC = () => {
    console.log('FUNCTION C HAS BEEN CALLED')
}





const greet= (person) => {
    console.log("Hello", person)
}

const blender = (string) => {
    return string.split('')
}

const square = (num, message) => {
    console.log('Message!', message)
    return num * num
}