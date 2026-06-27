// there are situations where you do not know how may parameters would be passed into a function

function calculate_cart_price(num1)
{
    return num1
}

console.log(calculate_cart_price(2))

// if we pass multiple arguments to a function in our function then we would only get the first one returned to us

// to solve the problem of more args than parameters we use ... operator
// the rest operator packs all the args and return it to use in a pack (array)
function calculate_cart_price(...num1)
{
    return num1
}

console.log(calculate_cart_price(2,3,4,55))

// how to pass rest operator to a function.
// we can also use use it with normal parameters example val1,  val2 then rest operator num1

let user =
{
    username : "Riyyan",
    price : 199
}

function handle_object(any_obj)
{
    console.log(`Username is ${any_obj.username} and price is ${any_obj.price}`)
}

handle_object(user)
// handle_object()  // results in an error

// if we change the key of any pair in object then we would get it undefined in console when we print it
// to solve this problem we check type safety.
// type safety is done using if else

// we can also directly write an obj as an arg 
handle_object({username : "sam", price : 199})

let my_new_array = [200,400,100]
function return_second_value(get_array)
{
    return get_array[2]
}

// array can also be written as an arg
console.log(return_second_value(my_new_array))



