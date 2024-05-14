console.log("Hello");

// let num = prompt("Enter a number");


// //for loop
// for(let i = 1 ; i <= num; i++){
//     console.log("Daya Sagar" + i);
// }

// let sum = 0;
// for(let i = 1;i <= num; i++){
//     sum = sum + i;
// }
// console.log(sum);

// //while loop
// let i = 1;
// while(i <= num){
//     console.log(i);
//     i++;
// }

// //do-while loop
// let a = 1;
// do{
//     console.log("a = ", a)
//     a++;
// }while(a <= 0);


// //for-of loop
// let str = "Javascript";
// let size = 0;
// for(let i of str){ //Used to iterate on string and array
//     console.log("i =", i)
//     size++;
// }
// console.log("size of string =", size);


// //for-in loop
// let student = {
//     name: "Daya",
//     rollno: 10,
//     marks: "7.8 Cgpa",
//     course: "Information Technology",
//     isPass: true
// }
// for(let key in student){ // Used to iterate on objects
//     console.log("Key =", key , "Value =", student[key]);
// }


//Practice Question 1
//To print even number
// for(let i = 0; i <= 100; i++){
//     if(i % 2 == 0){
//         console.log("Even =",i);
//     }
//     else{
//         console.log("Odd =", i);
//     }
// }


// //Practice Question 2
// //Guess right number game
// let guess = prompt("Enter Number");
// let num = 10;
// for(; guess != num; ){
//     guess = prompt("Try again!")
// }
// console.log("Correct! congratulation you entered a rigth number.")

// console.log("Loop has ended!")


//Strings in javascript
// let str = "Daya";
// let str2 = 'Sagar';

// console.log(str.length);
// console.log(str2[4],str2[0]);


// // Template Literals
// let obj = {
//     item: "pen",
//     price: 20,
// }

// let output = `The price of a ${obj.item} is ${obj.price} rupees`;
// console.log(output);
// console.log("The price of a", obj.item, "is" , obj.price, "rupees");


// let specialStirng = `This is a template literal.`
// console.log(typeof specialStirng)

// //Escape character
// console.log("How are you?\nI am fine!");
// console.log("Whats going on buddy\tNothing buddy");

// //Stirng method in JS , Strings in JS are immutable
// let strupper = "         How are you?\nI am fine!       ";
// let strlower = "Whats going on buddy\nNothing buddy!";

// console.log(strupper.toUpperCase());
// console.log(strlower.toLowerCase());
// console.log(strupper.trim());

// let str = "Hello Javascript";
// let str2 = "Web devlopment";
// console.log(str.concat(str2));
// console.log("I am learning "+str + str2);
// console.log(str.slice(1,9)); //ello jav
// console.log(str.replace("Javascript","Webdev"));
// str = "I love Javascript";
// console.log(str.charAt(0));


//Practice Question 1
let name = prompt("Enter Your Name");
let start = "@";
let end = name.length;
console.log(start+name+end);































