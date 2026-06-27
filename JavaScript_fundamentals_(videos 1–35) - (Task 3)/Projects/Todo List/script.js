let input = document.querySelector('.input')
let button = document.querySelector('.addtask')
button.addEventListener('click', (e) => {
    // console.log(input.value)
    if (input.value){
        let task = String(input.value)
        task = task.replaceAll(' ', '-')
        let new_div = document.createElement('div')
        new_div.className = task
        let new_task = document.createElement('p')
        new_task.appendChild(document.createTextNode(`${task}`))
        let body = document.body
        body.appendChild(new_div)
        new_div.appendChild(new_task)
        let remove = document.createElement('button')
        remove.appendChild(document.createTextNode('Remove Task'))
        new_div.appendChild(remove)
        remove.addEventListener('click', () => {
            let remove_task = document.querySelector(`.${task}`)
            remove_task.remove()
        })
    }
    else{
        alert("cannot add an empty task")
    }
})