// console.log("Chaliye Suru Karte Hai");

//Object Creation

// let rec = {
//     lenght : 1,
//     width : 2,

//     draw: function(){
//         console.log('Draw Rectangle')
//     }
// };


// //Factory function
// function createRec(length , width){

//     return rec = {
//         length,
//         width,
    
//         draw(){
//             console.log('Draw Rectangle');
//         }
//     };
// }

// let recObj1 = createRec(2 , 4);
// console.log(recObj1);

// let recObj2 = createRec(5 , 10);
// console.log(recObj2);

// let recObj3 = createRec(3 , 6);
// console.log(recObj3);


//Constructor Function -> Pascal Notation -> First Letter Of Every Word Should Be Capital. e.g - NumberOfStudent

// function Square(side1 , side2){

//     this.side1 = side1;
//     this.side2 = side2;

//     this.draw = function(){
//         console.log('Drawing');
//     }
// }

// let SquareObject1 = new Square(4 ,  4);
// console.log(SquareObject1);

// let SquareObject2 = new Square(3 ,  3);
// console.log(SquareObject2);

// let SquareObject3 = new Square(5 ,  5);
// console.log(SquareObject3); 

// SquareObject3.color = 'Yellow';
// console.log(SquareObject3);

// delete SquareObject3.color;
// console.log(SquareObject3);


//Object creation using Square1(Internal Functionality Of Constructor Function)
// let Square1 = new Function(
// 'side1', 'side2' ,

// ` this.side1 = side1;
// this.side2 = side2;

// this.draw = function(){
//     console.log('Drawing');
//  } `
// );

// let Sqr = new Square1(3, 3);
// console.log(Sqr);

//Primitive Type Mai Hamesha Copy banti Hai
// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);


//Reference Type Ke Mai Hamesha Address Pass Hota hai
// let p = {
//     value : 10,
// };
// let q = p;

// p.value++;

// console.log(p.value);
// console.log(q.value);


// let a = 10;

// function increament(a){
//     a++;
//     return a;
// }

// let inc = increament(a);
// console.log(inc);

// console.log(a);


// let a = {
//     value:10,
// };

// function increament(a){
//     a.value++;
// }

// increament(a);
// console.log(a.value);



// let rectangle = {
//     height:2,
//     width:4
// };
//for in loop (Only Works on Objects)
// for(let key in rectangle){
//     //key are reflected through key variable
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }


//for of loop (Only Works on Iterables)
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }


//To Find That The Property Exist In Object Or Not.
// if('width' in rectangle){
//     console.log('Present');
// }
// else{
//     console.log('Absent');
// }


//Cloning Of Object
// 1. Iteration Method
// 2. Assign Method
// 3. Spread Method

// (1)
// let real = {
//     a:10,
//     b:11,
//     c:12
// };
// let copy = {};

// for(let key in real){
//     copy[key] = real[key];
// }
// console.log(copy);
// real.a++;
// console.log(real);
// console.log(copy);


// (2)
// let real = {
//     a:10,
//     b:11,
//     c:12
// };
// let real_2 = {
//     value: 20,
// };//Multiple Object To Copy

// let copy = Object.assign({}, real, real_2);
// console.log(copy);

// real.a++;
// console.log(copy);


// (3)
let real = {
    a:10,
    b:11,
    c:12
};

let copy = {...real};
console.log(copy);

real.a++;
console.log(copy);












