// Finding Elements
const div = document.getElementById('container')
console.log('Div is', div)

const paragraphs = document.getElementsByTagName('p')
console.log('Para', paragraphs)

const boxes = document.getElementsByClassName('box')
console.log('Boxes', boxes)

// Changing Elements
div.innerHTML = '<h1>Container</h1>'
// versus // div.innerText = '<h1>Container</h1>'
div.id = 'container2'

Array.from(boxes).forEach((box) => {
    box.style.height = '50px'
    box.style.width = '50px'
    box.style.backgroundColor = 'red'
    box.style.margin = '5px'
})

let h1 = document.createElement('h1')
h1.innerText = 'Newly created element'
// h1.id = 'h1'
document.body.append(h1)
//document.body.removeChild(h1)

let h2 = document.createElement('h2')
h2.innerText = 'Newly replaced element'
document.body.replaceChild(h2,h1)

h2.addEventListener('mouseover', () => {
    h2.style.border = '1px solid red'
})