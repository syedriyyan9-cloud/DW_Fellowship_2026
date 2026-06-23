// memory is of 2 types
// stack and heap

// primitive uses stack, non primitive uses heap memory
// using stack memory means getting copy of the original value
// using heap memory means getting reference to the original value

let my_youtube_name = "asdfasdfasdf"
// this would be stored inside stack memory

let another_name = my_youtube_name
// another_name store value of my_youtube_name

another_name = "something else"
// now another_name would contain newer value

// when we assigned my_youtube_name to another_name
// we actually had a copy of the first variable stored inside another_name variable

let user_one =
{
    email : "user@google.com",
    upi: "user@ybl",
}
// the user_one would be stored inside the heap memory
// the variable name was saved inside the stack memory but its value was stored inside heap memory

let user_two = user_one
// now user_two references to user_one
// any changes made to user_two would make changes to user_one

user_two.email = "riyyan@gmail.com"
console.log(user_one.email)
console.log(user_two.email)
// the value of email would be changed to newer value that was assigned using user_two variable
