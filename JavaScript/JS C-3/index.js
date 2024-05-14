// console.log("Welcome");

// let firstName = 'Daya';


// let lastName = new String('Sagar');

// let message =
// `
// Hello ${lastName},

// Thanks for this opportunity.

// Best Regards,
// Daya Sagar
// `;

// console.log(message);

// let words = message.split(' ');
// console.log(words);

//Dates Foramt
// let date = new Date();
// let date2 = new Date('june 20 2000 12:30');
// let date3 = new Date(1999, 0, 6, 7);

// date3.setFullYear('1995');
// date3.setMonth(2);

// console.log(date3);



// Arrays
// let nums  = [1,2,3,4,5];
// console.log(nums);

// nums.push(6);
// console.log(nums);

// nums.unshift(0);
// console.log(nums);

// nums.splice(1,0,'a', 'b', 'c');
// console.log(nums);


//Searching in Array
// console.log(nums.indexOf(4));

// if(nums.indexOf(0) != -1){
//     console.log('Present');
// }
// else{
//     console.log('Not Present');
// }

// console.log(nums.includes(5));


// console.log(nums.indexOf(1));


//Object Array
// let courses = [
//     {No: 1, Name: 'Daya'},
//     {No: 2, Name: 'Sagar'}
// ]
// console.log(courses);
// console.log(typeof courses);

//Finding element from array object by callback function
// let course = courses.find(function(course){
//     return course.Name == 'Sagar';
// });

// Arrow function
// let course = courses.find(course => course.Name === 'Sagar');

// console.log(course);


//Removing Element from array
//End = pop()
//Begining = shift()
//Middle = splice()

// let numbers = [1,2,3,4,5,6];
// let numbers2 = numbers;
// //End
// numbers.pop();
// //Begining
// numbers.shift();
// //Middle
// numbers.splice(2,1);
// //Emptying
// // numbers = [];

// // numbers.length = 0;
// numbers.splice(0 , numbers.length);

// console.log(numbers2)
// console.log(numbers);


// //Combining of two array
// let first = [1,2,3,4,5];
// let second = [6,7,8,9,10];


// // Concat Method
// // let third = first.concat(second);
// // Spread Method
// let third = [...first,.1,'false', ...second,.2,'true']
// console.log(third);
// let copy = [...third];
// console.log(copy);

// //Slicing of array                                                
// let sliced = third.slice(6);
// console.log(sliced);


// var my_object = {
//     0: 'zero',
//     1: 'one',
//     2: 'two',
//     3: 'three',
//     4: 'four'
//    };
   
//    var sliced = Array.prototype.slice.call(my_object, 4);
//    console.log(sliced);


// //Iterating an array
// let arr = [1,2,3,4,5,6,7,8,9,10];

// for(let value of arr){
//     console.log(value);
// };


////for each(callback function)
// arr.forEach(number => console.log(number * 2));
                 
// //Joining of array
// let numbers = [1,2,3,4,5];

// let joined = numbers.join('+');
// console.log(joined);



//Splitng of array
// let message = 'This Is My First Message';

// let parts = message.split(' ');

// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);


// //Sorting of array 
// let nums = ['a',100,1,5,6,3,0,9,2,7];

// let sorted = nums.sort();
// console.log(sorted);

// sorted.reverse();
// console.log(sorted);


// //Sorting of Object array 
// let students = [
//     {RN: 1 , Name : 'Daya', Sec: 'S14'},
//     {RN: 2 , Name : 'Sagar', Sec: 'S7'}
// ]

// students.sort(function(sorted){
//     console.log(sorted);
// })

//Filtering of array
// let numbers = [1,0,-1,-3,2,5];

// let filtered = numbers.filter(value => value >= 1);

// console.log(filtered);

//Mapping of array
// let students = [1,2,3,4,5,6];

// let maped = students.map( maped => 'Student_no.:' + maped);

// console.log(maped);


let numbers = [-1,2,3,0,-2];
// let filtered = numbers.filter(value => value >= 0);
// console.log(filtered);

// let items = filtered.map(function(num){
//     return {value : num};
// });

// let items = filtered.map(num => {value : num})
// console.log(items);


//Chaining
let chain =

numbers.filter(value => value >= 0)

.map(function(num){
 return {value : num};
});
+
console.log(chain);


















