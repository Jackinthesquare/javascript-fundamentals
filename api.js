// create a function called request
/*let div = document.getElementById('container')
let data;

const request = () => {
    fetch('https://raw.githubusercontent.com/Jackinthesquare/javascript-fundamentals/main/user.json')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        div.innerText = data.user.email;
        return data.user.email
    })
    return 'done with function'
}

// Async Await
const request2 = async () => {
    let req = await fetch('https://raw.githubusercontent.com/Jackinthesquare/javascript-fundamentals/main/user.json')
    let res = await req.json()
    data = res
    console.log("RESPONSE 2",res)
    // return res (don't need because we set the global variable data to res)
}

request2()


/*Fetch returns a promise object:
In order to operate on the promise returned by fetch,
you need to wait until the promise resolve*/


// .then will only execute AFTER 'promise' object is fulfilled!!!



/*const newh2 = document.createElement("h2")
newh2.textContent = ('New User')
document.body.appendChild(newh2)

const newTest = async () => {
    //console.log('running')
    let req = await fetch('https://raw.githubusercontent.com/Jackinthesquare/javascript-fundamentals/main/user.json')
    let res = await req.json()
    for (const key in res.user){
        console.log(res.user[key])
        const newUser = document.createElement("h3");
        newUser.setAttribute('class','user-name')
        newUser.innerHTML = res.user[key]
        newh2.appendChild(newUser)
    }




    
}

newTest()*/





































// let div = document.getElementById('container')

// const request = async () => {
//     let req = await fetch('https://raw.githubusercontent.com/rmdashrfv/javascript-fundamentals/main/mock_data.json')
//     let res = await req.json()
//     console.log('Response',res)
//     res.forEach((element) => {
//         let img = document.createElement('img')
//         img.setAttribute('src', element.photo)
//         let button = document.createElement('button')
//         button.innerText = `Rent Build ${element.id}`
//         let h3 = document.createElement('h3')
//         h3.innerText = element.company_name
//         let h4 = document.createElement('h4')
//         h4.innerText = `Vacancies: ${element.vacancies}`

//         button.addEventListener('click',() => {
//             let updatedVacancies = element.vacancies
//             if (updatedVacancies <= 0) return alert('NO MORE VACANCIES!');
//             h4.innerText = `Vacancies: ${--element.vacancies}`
//         })
        
//         div.append(h3, h4, button, img)
//         // div.appendChild(img)
//         // div.appendChild(button)
//         // div.appendChild(h3)
//     })
// }
// request()


