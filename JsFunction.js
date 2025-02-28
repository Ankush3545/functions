//=>Java Script function is a block of code designed to perform a particular task
// javaScript function is executed when it invokes (calls it)

function myfunct(p1,p2){
    return p1*p2
}
myfunct(10,5);

let result=myfunct(10,5);
console.log(result);

// syntax====
//function functionName(parameter1,parameter2,parameter3){
// }

// parameters are written inside the paranthesis
// function Argument=>are the values received by the functions when calls

function functMulti(m1,m2){
    return m1*m2;
}
let resMulti=functMulti(50,5);
console.log(resMulti);

// with the help of function we can write codes that can be used many times
//==>() parenthesis invokes the function

//==>Example to convert Fahrenheite to celsius
function toCelsius(fahrenheite){
    return (5/9)*(fahrenheite-32);
}
let valCelcuis=toCelsius(70);
console.log(valCelcuis);

//==>Arrow function()
// syntax:
/*
let ArrwFunct=()=>{

}
*/

