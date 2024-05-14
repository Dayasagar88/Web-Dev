console.log('Daya Here!');

//Syncronous Code
// function sync(){
//     console.log("First")
// }
// sync();

// console.log("Second");

//Asyncronous Code
// setTimeout(()=>{
//     console.log("Third")
// },5000);

// function sync(){
//     console.log("First")
// }
// sync();

// console.log("Second"); 

// //Promises
// let meraPromise = new Promise(function(resolve, reject){
//    setTimeout(function(){
//     console.log("I am inside Promise 1")
//    }, 3000)
//    //resolve(1000);
//    reject(new Error("Kya kr rha hai bhai tu?"))
// })

// meraPromise.then((value) => {console.log(value)},(error) => {console.log("Recieved an Error")});

// meraPromise.catch((error) => {console.log("Recieved an Error")});



// console.log('Pehla Pyaar');

// let meraPromise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//      console.log("I am inside Promise 2")
//     }, 4000)
//     //resolve(1000);
//     // reject(new Error("Kya kr rha hai bhai tu?"))
//  })
//  console.log('Pehla Pyaar');



// let waddaa_1 = new Promise(function(resolve,reject){
//    setTimeout(() => {
//       console.log('waddaa 1 complete hua');
//    }, 2000);
//    resolve(true);
// })

// let output = waddaa_1.then(() => {
//    let waddaa_2 = new Promise(function(resolve, reject){
//       setTimeout(() => {
//          // console.log('waddaa 2 complete hua');
//       }, 3000);
//       resolve("waddaa 2 bhi complete hua");
//    });                           
//    return waddaa_2;
// });
// output.then((value) => console.log(value));




//async function
// async function sync1(){
//    return 8;
// }

// console.log(sync1);



// async function utility(){

//       let delhiMausam = new Promise(function(resolve, reject){
//          setTimeout(function(){
//             resolve("Delhi Mai Bhot Thand hai");
//          }, 5000);
//       })
      
      
//       let gujratMausam = new Promise(function(resolve, reject){
//          setTimeout(function(){
//             resolve("Gujrat Mai Barish Ho Rhi Hai");
//          }, 1000);
//       })

//       let dM = await delhiMausam;
//       let gM = await gujratMausam;
   
//       return [dM , gM];
// }


// async function utility() {
//    let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//    // let output = await content.json();
//    console.log(content);
// }
// utility();





// async function helper() {
//    let options = {
//       method: 'POST',
//       body: JSON.stringify({
//       title: 'Daya',
//       body: 'Tagddi Body',
//       userId: 1356,
//       }),
//       headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//       },
//    };
//       let content = await fetch('https://jsonplaceholder.typicode.com/posts/1', options);
//       let response = await content.json();
//       return response;
// }

// async function utility(){
//    let ans = helper;
//    console.log(ans);
// }

// utility();



//Closure Function
// let name = "Sagar";         
// function init(){
//    // {
//    //    var name = "Akhil";
//    // }
//    let name = "Mozillaa";
//    function displayName(){
//       // let name = "Daya";
//       console.log(name);
//    }
//    return displayName();
// }

// let func =  init();
// console.log(func);


function makeFunc(){
   const name = "Mozilla";
   function displayName(){
      console.log(name);
   }
   return displayName;
}

const myFunc = makeFunc();
myFunc();














































