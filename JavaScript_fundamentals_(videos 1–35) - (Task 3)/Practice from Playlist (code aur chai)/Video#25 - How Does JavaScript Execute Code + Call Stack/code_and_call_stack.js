// how does code execute in js
// execution context is divided into 2 parts
// 
// js execution context means how js would run or execute the file
// it is done in 2 phases
//
// first is global execution context is created, it is reffered to 'this' variable
// 
// in browser the this refers to window obj
// this is all executed in a thread, js is single threaded
// 
// second is function execution context
// 
// sometimes there is another execution context called eval
// 
// first phase is memory creation phase - sometimes called creation phase - only allocates memory for all your identifiers and functions
// second phase is execution phase.
// 
// files runs like this -> first global execution phase is put inside this variable 
// then memory phase takes place and every variable, funtion, class is allocated space
// this is called first cycle, the next cyycle is execution phase;
// in execution phase variables are given values, when a function is invoked then another context is created, which holds a new execution context with variable environment and execution thread
// when ever a function is invoked the new context would repeat memory phase and execution phase in its new environment.
// after a function returns a value or completes it goal its context is deleted.
// if the same function is invoked again then again a new variable environment would be created with memory and execution phase.
// 
// what are call stacks?
// 
// first we have global execution context that takes space on the stack
// then a function takes memory on that global execution contet and if it calls another function then that  function is built upon the previous stack memory occupying more stack memory.
// 
// stack follows a lifo last in first out arrangement
// 
// 
// 
// 
// 
// 
// 