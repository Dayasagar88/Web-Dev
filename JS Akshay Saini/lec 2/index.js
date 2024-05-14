//What is callback function in javascript
//Passing a function in another function 

// setTimeout(function (){
//     console.log("Timer");
// }, 5000)

// function a(b){
//     console.log("a called");
//     b();

// }
// a(function b(){
//     console.log("b called");
// });


// function attachEventListner(){
//     let count = 0;
//     document.getElementById("clickme").addEventListener("click", function abc(){
//     console.log("Clicked!", ++count);
// })
// }
// attachEventListner();

//Inline Caching
// function printUserName(user){
//     return `Hello ${user.firstName} ${user.lastName}`
// }

// const userName = {
//     firstName : "Daya",
//     lastName : "Sagar"
// }

// printUserName(userName);
// printUserName(userName);
// printUserName(userName);
// printUserName(userName);
// printUserName(userName);
// printUserName(userName);
// printUserName(userName);
// printUserName(userName);
// printUserName(userName);
// printUserName(userName);
// printUserName(userName);
// printUserName(userName);




console.log("Start");

function x(){
    console.log("x called");
}
setTimeout(x,1000);

console.log('End');































































