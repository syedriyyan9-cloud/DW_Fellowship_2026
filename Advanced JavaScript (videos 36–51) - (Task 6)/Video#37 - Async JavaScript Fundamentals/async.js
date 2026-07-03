// Asyc code in js
// 
// JS is synchronous and single threaded
// synchronous means that code executes line by line in a specific direction
// single threaded means everythings uses single thread
// JS engine is always found in run time environment
// this is all about default JS
// 
// each operations waits for the last one to continue before executing
// we have a call stack and memory heap
// 
// two types of code are written in JS:
// blocking code and non blocking code
// blocking code blocks the flow of program - read file sync
// non blocking code does not block execution - read file async
// 
// nothing is good or best all depends on use cases
// 
// JS engine is a stand alone engine that executes JS
// Web API is found on web browser
// if it is a web api then you would get DOM API 
// Node cannot get you Web API
// Task Queue makes JS fast
//
//
// set time out sets delay time for the functions completion
// set time out then give register callback the function and time after which the function should be executed.
// register callback is used to register the function given to it that it should execute after a set amount of time.
// register callback enters function to the task queue
// we have a task queue, the task queue is a queue that adds all the callback functoins back to the stack
// 
// in JS there is an addition of a few new APIs
// fetch() is one of them, it uses promises
// in fetch() whatever tasks you give have high priority in its own task queue