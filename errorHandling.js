console.log("******* Example-1 ******************");
let a; // a variable is not yet intialised and if you are accessing then you will reach to 'undefined block'
// a=10; // since in js unless and untill it is not initialised with the value will not come to know what type of datatype its is

console.log("type of a :",typeof a);
if(a===undefined)
{
    console.log('Yes!!! This is undefined');
    
}
else
{
    console.log('This is defined variable');    
}

console.log("******* Example-2 ******************");
try{
    // throw new Error("Error thrown");// way of throwing customised error instead calling add() function
    console.log("Line Before error/exception is triggered");
    add();// not yet defined or declared finction hence error will trigger
    console.log("Line after error/exception is triggered"); // will not execute this line if "error is trigger in just previous line"
}
catch(error)
{
    // new throw
    console.log(error);//ReferenceError: add is not defined
    console.log(error.message); //add is not defined
    console.log(error.name); //ReferenceError
    console.log("error!!! Caught error , Invoked catch blok due to exception");
    // console.log(error.stack);
}
finally{
    console.log("Finally!!! this will execute irrespective of whether error is caught or not.");
}