// events in js
// in js events can be checked in multiple ways
// one way to do it is to use 'onclick' attribute on html element
// but this is not a good practice
// another way is to get the element using getElementById and then use onclick attribute on it
// but this is also trobulesome in the long run
// so a better way to check for event is to use addEventListener
// 
// to use addEventListener you still have to get the element
// and then on that element you have to add addeventlistener
// 
// in addEventListener you have to add the event using strings
// it can either be 'click', 'hover', 'keyup' etc
// the event is passed as the first argument, the second argument is the function that should run when event is called
// there is also a third parameter which can either be true or false
// by default it is false, but as of now we will discuss only the first two arguments
// 
// another approach is to use attachEvent() it is an out of date function
// another was using jquery which is also no longer used by anyone
// 
// when we use addEventListener to a element we get a event obj
// when we console log the event, passes as an arg to the function that we have called as the second arg
// after consoling you will find a lot of detail which you can go through
// 
// what we have to know about event: type, timestamp, defaultPrevented, target, toElement, srcElement, currentTarget, clientX, clientY, screenX, screenY, altkey, ctrlkey, shiftkey, keyCode
// 
// eventPropogation, third argument.
// eventProgation has 2 context, event bubbling, and event capturing
// bubble move from inside to outside, in capturing we move from outside to inside
// if the argument is true then it is capturing else it is bubbling
// if we have two element one inside the other and both have id and addeventlistner on it
// when we click on the on the element on the inside the one containing it will also execute something
// to prevent this bubbling from happening we use eventPropagation method on the inside element
// this method stops the event outside from executing and only runs the one on the inside
// 
// if we want to ensure that first our outside method is called and then inside method then we set the third argument as true for both
// this sets the event capturing to true 
// 
// 
// if we call e.stopProgation() method then bubbling does not occur
// 
// e.preventDefault() 
// 
// 
// 