let switchFrm = document.querySelector('#switch-frm')
let switchF1 = document.querySelector('#switch-f1')
let switchF2 = document.querySelector('#switch-f2')
let switchCircle = document.querySelectorAll('.switch-circle')
let switchBtn = document.querySelectorAll('.switch-btn')
let regFrm = document.querySelector('#register-form')
let logFrm = document.querySelector('#login-form')
let allButtons = document.querySelectorAll('.submit')

let getButtons = (e) => e.preventDefault()

let changeForm = () =>{
    switchFrm.classList.add('is-gx')
    setTimeout(() => switchFrm.classList.remove('is-gx'), 1500)

    switchFrm.classList.toggle('is-txr')
    switchCircle[0].classList.toggle('is-txr')
    switchCircle[1].classList.toggle('is-txr')

    switchF1.classList.toggle('is-hidden')
    switchF2.classList.toggle('is-hidden')
    regFrm.classList.toggle('is-txl')
    logFrm.classList.toggle('is-txl')
    logFrm.classList.toggle('is-z200')
}

let mainF = () =>{
    allButtons.forEach(btn => btn.addEventListener('click', getButtons))
    switchBtn.forEach(btn => btn.addEventListener('click', changeForm))
}

const darkModeToggle = document.getElementById('darkmode-toggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});

window.addEventListener('load', mainF)
