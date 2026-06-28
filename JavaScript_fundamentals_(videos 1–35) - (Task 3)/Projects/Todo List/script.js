let input = document.querySelector('.input')
let button = document.querySelector('.addtask')
button.addEventListener('click', (e) => 
    {
    // console.log(input.value)
        if (input.value)
        {
            let task = String(input.value)
            task = task.replaceAll(' ', '-')

            let parent_div = document.querySelector('.tasks')
            let new_div = document.createElement('div')

            let new_task = document.createElement('p')
            new_task.appendChild(document.createTextNode(`${task}`))

            parent_div.appendChild(new_div)
            new_div.appendChild(new_task)

            let remove = document.createElement('button')
            remove.appendChild(document.createTextNode('Remove Task'))
            new_div.appendChild(remove)

            let complete = document.createElement('button')
            complete.appendChild(document.createTextNode('Completed'))
            new_div.appendChild(complete)

            remove.addEventListener('click', () => new_div.remove())
    
            complete.addEventListener('click', () => 
            {
                new_task.style.color = 'green'
                new_task.innerText = `Completed: ${task}`
                complete.style.display = 'none'
                new_div.style.borderColor = "green"
            })
        }
    else
        {
            alert("cannot add an empty task")
        }
        
    })
