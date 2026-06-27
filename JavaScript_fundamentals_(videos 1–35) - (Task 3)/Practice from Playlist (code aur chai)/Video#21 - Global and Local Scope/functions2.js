// variables are declared using let, const and var

// let a = 10
// const b = 20
// var c = 30

// no problem in console loggin the variables yet
// if they were working fine why use let or const or var, just use one?

// the problem starts with  scope {}
// when {} are used with functions or if else it would mean scope
// when {} are used with objs they are actaully obj declarations

if (true)
{
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a)   // does not work outside of scope
// console.log(b)   // does not work outside of scope
console.log(c)      // does work outside of scope

// the problem arises when we use same variable names using vars
// the values would be changed for most programmer if the used the same name with vars
// even if we declare 'c' without any keyword the same issue presist

// anything inside {} is considered block scope
// anything outside {} is considered global scope

// if we have a variable with same name in both global scope and block scope
// then if we console the variable ouutside the block scope we get the value of global scope variabe
// if we console the varaibles insdie the block scope then we get the value of block scope variable
// this saves us from a lot of programming bugs

// example
let d = 100
if(true)
{
    let d = 300
    console.log(d)
}

console.log(d)


