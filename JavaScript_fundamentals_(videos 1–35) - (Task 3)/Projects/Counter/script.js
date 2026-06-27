
let inc_btn = document.querySelector('.incrementbtn')
inc_btn.addEventListener('click', (e) => {
    // console.log(e)
    let count = document.querySelector('.count')
    let number = Number(count.innerText)
    count.innerText = ++number
})

let reset_btn = document.querySelector('.resetbtn')
reset_btn.addEventListener('click', (e) => {
    let count = document.querySelector('.count')
    count.innerText = 0
})