console.log('Kya Haal Bhailog');
// //Function in JavaScript

// run();//This is Hoisting

// //function declaration
// function run(){
//     console.log('running');
// }


// //Named Function Assignment
// let stand = function walk(){
//     console.log('Walking');
// }

// //Anonymous function assignment
// let stand2 = function(){
//     console.log('Walking2');
// }

// stand();//Cnanot be declared above function assignment

// let jump = stand;

// stand2();

// let x = 1;
// x = 'a';
// console.log()

// function minus(a , b){
//     return a - b;
// }


//dynamic function
// function sum (){
//     let total = 0;
//     for(let value of arguments){
//         total += value;
//     }
//     return total;
// }

// console.log(minus(3, 1.22));
// console.log(minus());
// console.log(3);
// console.log(minus(4,2,3,5,7,8));

// let ans = sum(1,2,3,4,5,6,);
// console.log(ans);


//Rest Operator
// function sum(...args){
//     console.log(args);
// }
// sum(1,2,3,4,5,6,7,8,9);



// //Defaut Parameter
// function interest(p,r = 7,y = 10){
//     return (p*r*y)/100;
// }

// console.log(interest(936));


// //GETTER SETTER
// let person = {
//     fName : 'Daya',
//     lName : 'Sagar',

//     get fullName(){
//         return `${person.fName} ${person.lName}`;
//     },

//     set fullName(value){
//         if(typeof value !== String){
//             throw new Error("You have not sent a string in fullName");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }    
// }

// console.log(person);

// function fullName(){
//     return `${person.fName} ${person.lName}`
// }

// Try and Catch
// try{
//     person.fullName = 'Rahul Kumar';
//     console.log(person.fullName);
// }
// catch (e){
//     alert(e);
// }


// console.log(person.fullName);



// function number(){
//     var a = 3;
// }
// console.log(a)


// if(true){
//     var ab = 1;
// }
                                          
// if(true){
//     var ab = 2;
// }

let arr = [-1,-2,-3,-4,-5]
// let total = 0;
// for(let value of arr){
//     total = total + value;
// }

// console.log(total);

let total = arr.reduce((total , value) => total + value,5);

console.log(total);



  































































































































































