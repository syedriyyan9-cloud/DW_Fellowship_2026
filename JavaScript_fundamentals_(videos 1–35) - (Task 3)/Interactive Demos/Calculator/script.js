const input = document.querySelector('.input')
const num1 = document.querySelector('.one')
const num2 = document.querySelector('.two')
const num3 = document.querySelector('.three')
const num4 = document.querySelector('.four')
const num5 = document.querySelector('.five')
const num6 = document.querySelector('.six')
const num7 = document.querySelector('.seven')
const num8 = document.querySelector('.eight')
const num9 = document.querySelector('.nine')
const num0 = document.querySelector('.zero')
const equal = document.querySelector('.equal')
const add = document.querySelector('.add')
const subtract = document.querySelector('.sub')
const multiply = document.querySelector('.mul')
const divide = document.querySelector('.div')
let value = 0
let operation = 0


num1.addEventListener('click', () => {
    value = 1
    input.value += String(value)
    console.log(input.value)
})

num2.addEventListener('click', () => {
    value = 2
    input.value += String(value)
    console.log(input.value)
})
num3.addEventListener('click', () => {
    value = 3
    input.value += String(value)
    console.log(input.value)
})
num4.addEventListener('click', () => {
    value = 4
    input.value += String(value)
    console.log(input.value)
})
num5.addEventListener('click', () => {
    value = 5
    input.value += String(value)
    console.log(input.value)
})
num6.addEventListener('click', () => {
    value = 6
    input.value += String(value)
    console.log(input.value)
})
num7.addEventListener('click', () => {
    value = 7
    input.value += String(value)
    console.log(input.value)
})
num8.addEventListener('click', () => {
    value = 8
    input.value += String(value)
    console.log(input.value)
})
num9.addEventListener('click', () => {
    value = 9
    input.value += String(value)
    console.log(input.value)
})
num0.addEventListener('click', () => {
    value = 0
    input.value += String(value)
    // value = input.value
    console.log(input.value)
})
add.addEventListener('click', () => {
    operation = '+'
    input.value += String(` ${operation} `)
})
multiply.addEventListener('click', () => {
    operation = 'x'
    input.value += String(` ${operation} `)
})
subtract.addEventListener('click', () => {
    operation = '-'
    input.value += String(` ${operation} `)
})
divide.addEventListener('click', () => {
    operation = '/'
    input.value += String(` ${operation} `)
})
equal.addEventListener('click', () => {
    let number = input.value
    let value1 = 0
    let value2 = 0
    let op1 = 0
    for(let i = 0; i < number.length; i++)
    {
        if (number[i] === '+' || op1 === '+' )
        {
            op1 = '+'
            ++i
            for(let j = i+1; j < number.length; j++)
                {
                    value2 += number[j]
                }
            break
        }
        else if(number[i] === '-' || op1 === '-')
        {
            op1 = '-'
            ++i
            for(let j = i+1; j < number.length; j++)
                {
                    value2 += number[j]
                }
            break
        }
        else if(number[i] === 'x' || op1 === 'x')
        {
            op1 = 'x'
            ++i
            for(let j = i+1; j < number.length; j++)
                {
                    value2 += number[j]
                }
            break
        }
        else if(number[i] === '/' || op1 === '/')
        {
            op1 = '/'
            ++i
            for(let j = i+1; j < number.length; j++)
                {
                    value2 += number[j]
                }
            break
        }
    value1 += number[i]
    }
    if (op1 === '+')
    {
        value1 = Number(value1)
        value2 = Number(value2)
        let result = value1 + value2
        console.log(result)
        input.value = result
    }
    else if (op1 === '-')
    {
        value1 = Number(value1)
        value2 = Number(value2)
        let result = value1 - value2
        console.log(result)
        input.value = result
    }
    else if (op1 === 'x')
    {
        value1 = Number(value1)
        value2 = Number(value2)
        let result = value1 * value2
        console.log(result)
        input.value = result
    }
    else if (op1 === '/')
    {
        value1 = Number(value1)
        value2 = Number(value2)
        let result = value1 / value2
        console.log(result)
        input.value = result
    }

})