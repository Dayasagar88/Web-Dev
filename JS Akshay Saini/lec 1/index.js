// console.log("Hoisting in JS.");

// var x = 7;
// function getName(){
//     console.log("Nameste Javascript!");
// }

// getName();
// console.log(x);
// console.log(getName);

// var x = 1;
// a();
// b();
// console.log(x);
        
// function a(){
//     var x = 100;
//     console.log(x);
// }
// function b(){
//     var x = 200;
//     console.log(x);
// }

// var a = 6;
// function b (){
//     var x = 10;
// }

// console.log(window.a);
// console.log(a);
// console.log(b.x); 


// var b = 20/;
// function a(){
//     var b = 10
//     c();
//     function c() {
//         var d = 20;
//         // var b = 20;
//         console.log(b);
        
//         p();
//         function p(){
//             var q = 30;
//             console.log(d);
//         }
//     }
// }

// a();
// console.log(b)


// console.log(q);
// console.log("Daya Sagar");
// console.log(b);
// let a = 10;
// var b = 100;
// const q = 100;
// q = 1000;

// let b = 20;
// {
//     var  c = 3;
//     const b = 2;
//     let a = 1;
// }
// console.log(c);
// var c = 30;
// console.log(c);
// console.log(b);
// console.log(a);


// const  a = 10;

// {
//     const b = 20;
//     {
//         const c = 30;
//         console.log(a);
//     }
// }

// var a = 20;
// function x(){
//     var a = 10;
    
//     function y(){
//         var a = 1000;
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// let ans = x();
// console.log(ans);
// //.................................
// ans();

// function z(){
//     var b = 2000;
//     function x(){
//         var a = 10;
        
//         function y(){
//             // var a = 1000;
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }

// z();




// function x(){

//     for(var i = 1; i <= 5; i++ ){
//         // var i = 100;
//         setTimeout(function() {
//             console.log(i);
//         },i * 1000);
//     }
   
//     // console.log("Nameste javascript");
// }

// x();




// function outer(){
    
//     function inner(){
//         console.log(a);
//     }
//     var a = 10;
//     return inner;
// }
// outer()();



a();
//FUNCTION STATEMENT AKA FUNCTION DECLARATION      
function a (){
    console.log('a called');
}

//  FUNCTION EXPRESSION 
var b = function(){
    console.log("b called");
}

b();

// ANONYMOUS FUNCTION (without name)
// function (){

// }


//NAMED FUNCTION EXPRESSION

var x = function abc(){
    console.log(abc);
    // abc();
}
x();

//DIFFERENCE BETWEEN PARAMETER AND ARGUMENT
function y(param1, param2){ //the value passed in function declartion is called parameter
    console.log('y called');
}

y(1,2);//the value passed in function call is called argument

//FIRST CLASS FUNCTION
//FIRST CLASS CITIZEN
//The abibilty to use function as value in another function


//ARROW FUNCTION


// function table(){
//     for(let i = 1; i <= 10; i++){
//         setTimeout(() => {
//             console.log(i * 2);
//         },i * 1000)
//     }
// }
// table();



























