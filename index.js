console.log('JavaScript is running!')
let score = 100

/*let email = prompt('What is your email?')

let h1 = document.createElement('h1')
h1.innerText = email
document.body.appendChild(h1)*/

let input = document.querySelector('#input')
let h1 = document.getElementById('h1')
input.addEventListener('keyup', () => {
    console.log(input.value)
    h1.innerText = `Creating ${input.value}`
})
