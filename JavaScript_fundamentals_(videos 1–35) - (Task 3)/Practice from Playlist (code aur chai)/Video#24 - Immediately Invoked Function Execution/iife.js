// a function that we want to immediately execute when we write the functin

(function chai()
{
    // named IIFE
    console.log(`db connected`)
})();
// function is immediately invoked

// IIFE using arrow functions, unnamed IIFE
( (name) => {console.log(`db.connected ${name}`)})('riyyan');


// syntax (function definition) followed by an empty () and a ';'
// sometimes there is a problem caused by the pollution in global scope
// so to avoid problems caused by global scope we used IIFE









