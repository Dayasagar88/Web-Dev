//Function in JS 
// function myFunction(msg, msg2){
//     console.log(msg, msg2);
// }

// myFunction("Hello");
// myFunction(1+2+3, "Sagar");
// myFunction(true);


// function sum (a,b){
//     //Local variable = a,b -> scope
//     return a + b;
// }

// let res = sum(10,29);
// console.log(res)


// function multi(inputs){
//     return inputs;
// }
// let res2 = multi(2*3*4);
//  console.log(res2)

// //Arrow function
// const arrowSum = (a,b) => {
//     console.log(a+b);
// };

// arrowSum(10,10);
 
// const arrowMulti = (a,b) => {
//     return a * b;
// }

// let res3 = arrowMulti(2,5);
// console.log(res3);

// function findVowels(string){

//     let vowels = "AaEeOoIiUu";
//     let count = 0;
//     for(let i = 0; i < string.length; i++){
        
//         for(let j = 0; j < vowels.length; j++){
//             if(vowels[j] === string[i]){
//                 count = count + 1;
//             }
//         }
//     }
//     return count;
// }

// let res = findVowels("JavaScript");
// console.log(res);


// //Arrow Function
// const countVowels = (string) => {

//     let vowels = "AaEeOoIiUu";
//     let count = 0;
//     for(let i = 0; i < string.length; i++){
        
//         for(let j = 0; j < vowels.length; j++){
//             if(vowels[j] === string[i]){
//                 count = count + 1;
//             }
//         }
//     }
//     return count;
// }


// //function to display vowels
// const showVowels = (string) => {

//     let vowels = "AaEeOoIiUu";
//     let displayVowels = [];
//     for(let i = 0; i < string.length; i++){
        
//         for(let j = 0; j < vowels.length; j++){
//             if(vowels[j] === string[i]){
//                 displayVowels.push(string[i]);
//             }
//         }
//     }
//     return displayVowels;
// }


//ForEach function -> Higher order function
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let cities = ["delhi", "pune", "gujrat", "goa"]
// arr.forEach(function printVal(val){
//     console.log(val);
// })

// cities.forEach((val, index, arr) => {
//     console.log(val.toUpperCase(), index, arr);
// })

// let square = [];
// let calSqr = (val) => {
//     let sqr = val * val;
//     square.push(sqr);
// }
// arr.forEach(calSqr);
// console.log(square);




// //Map Method
// let newArr = arr.map((val) => {
//     return val*val;
// })
// console.log(newArr);


// //filter Method
// let filterArr = arr.filter((val) => {
//     return val%2 === 0;
// })
// console.log(filterArr);


// //Reduce Method
// let num = [2,4,6,10,7,8,9]; 

// let grtVal = num.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// })
// console.log(grtVal);


// //Practice Question 1
// let arrMarks = [90,92,84,67,94,99];

// let filterMarks = arrMarks.filter((marks) => {
//     return marks > 90;
// })
// console.log(filterMarks);


//Practice Question 2
let number = prompt("Enter a Number");

let numArr = [];
for(let i = 1; i <= number; i++){
    numArr.push(i);
}
console.log(numArr);

let sum = numArr.reduce((prev,curr) => {
    return prev + curr;
})

let product = numArr.reduce((prev,curr) => {
    return prev * curr;
})

console.log("Product of Array is ", product);
console.log("Sum of Array is ", sum);












