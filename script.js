let ms = document.querySelector('.ms') 
let num_ms = 0 
let s = document.querySelector('.s') 
let num_s = 0 
let m = document.querySelector('.m') 
let num_m = 0 
let start = new Date() 
let start_btm = document.querySelector('#start') 
let y 

function timer() {
    if (num_ms < 10) {
        ms.innerHTML = '00' + (num_ms - parseInt(num_ms / 1000) * 1000) 
    } else if (num_ms < 100) {
        ms.innerHTML = '0' + (num_ms - parseInt(num_ms / 1000) * 1000) 
    } else if (num_ms < 1000) {
        ms.innerHTML = num_ms - parseInt(num_ms / 1000) * 1000 
    } else if (num_ms > 1001) {
        ms.innerHTML = num_ms - parseInt(num_ms / 1000) * 1000 
        num_s = parseInt(num_ms / 1000) 
    }

    if (num_s < 10) {
        s.innerHTML = '0' + (num_s - parseInt(num_s / 60) * 60) 
    } else if (num_s > 10) {
        s.innerHTML =
            num_s - parseInt(num_s / 60) * 60 < 10 ?
            '0' + (num_s - parseInt(num_s / 60) * 60) :
            num_s - parseInt(num_s / 60) * 60 
    }

    if (num_s >= 60) {
        num_m = parseInt(num_s / 60) 
    }

    if (num_m < 10) {
        m.innerHTML = '0' + num_m 
    } else if (num_m < 60) {
        m.innerHTML = num_m 
    } else if (num_m == 60) {
        num_m = 0 
    }

    num_ms = new Date().getTime() - start.getTime() 
}

start_btm.addEventListener('click', function () {
    clearInterval(y) 
    start = new Date() 
    y = setInterval(timer, 1) 
}) 

let stop_btm = document.querySelector('#stop') 
let result = document.querySelector('#result')
stop_btm.addEventListener('click', function () {
    clearInterval(y) 
    result.innerHTML += `<p> ${+(m.textContent)} : ${+(s.textContent) - parseInt(+(s.textContent)/ 60) * 60} :  ${+(ms.textContent) - parseInt(+(ms.textContent) / 1000) * 1000} </p> `
    num_m=0
    num_s=0
    num_ms=0
   
}) 