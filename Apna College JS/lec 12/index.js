// console.log("one");
// setTimeout(() => {
//     console.log("Helo......");
// }, );
// console.log("Three");
// console.log("Two");





//callback in JavaScript
// function sum(a,b){
//     console.log(a+b);
// }
// function calc(a, b , sumCallBack){
//     sumCallBack(a,b);
// }

// calc(4,6, (a,b) => {
//     console.log(a+b);
// });


// const hello = () => {
//     console.log("Kya Haal CHallll");
// }
// setTimeout(() => {
//     console.log("Helloooooo")
// },3000)

// setTimeout(hello, 4000);


// // CallBack Hell
// for(let i = 0; i <= 5; i++){
//     let str = "A";
//     for(let j = 0; j <= 5; j++){
//         str = str + j;
//     }
//     console.log(i, str)
// }

// function getPromise(){
//    return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("Successfully");
//         // reject("Error Ocurred");
//     })
// }

// let promise1 = getPromise();
// promise1.catch((err) => {
//       console.log("Error Caught", err)
// })
// promise1.then((res) => {
//     console.log("Promise fullfilled", res);
// })




// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Data = ' ,dataId);
//             resolve("Sucessfull");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000)
//     })
// }

// let promise = getData(10)


// const getData1 = (dataId, getNextData) => {
//     // 2s
//     setTimeout(() => {
//         console.log('Data = ' ,dataId)
//         if(getNextData){
//             getNextData();
//         }
//     }, 1000)
// }

// console.log("Getting Data 1");
// getData1(1,() =>{
//         console.log("Getting Data 2");
//     getData1(2, () => {
//             console.log("Getting Data 3");
//         getData1(3, () => {
//                 console.log("Getting Data 4");
//             getData1(4, () => {
//                     console.log("Getting Data 5");
//                 getData1(5);
//             });
//         });
//     });
// });


// function asyncFunc1(){
//     return new Promise((resolve, reject ) => {
//         setTimeout(() => {
//             console.log("Mai hu Data 1");
//             resolve("1st Success");
//         },6000)
//     });
// };

// function asyncFunc2(){
//     return new Promise((resolve, reject ) => {
//         setTimeout(() => {
//             console.log("Mai hu Data 2");
//             resolve("2nd Success");
//         },2000)
//     });
// };


// console.log("Fecthing Data 1")
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("Fetching Data 2");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res)
//     });
// });

// console.log("Fecthing Data 1")
// asyncFunc1().then((res) => {
//     // console.log(res);
//     console.log("Fetching Data 2");
//     asyncFunc2().then((res) => {
//         // console.log(res);
//     });
// });

// console.log("Fetching Data 2")
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// })


// function table(){
//     let table = 2;
//     for(let i = 1; i <=  10; i++){
//         setTimeout(() => {
//             console.log(table * i);
//         },i * 200)
//     }
// }
// table();


// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data = ", dataId);
//             resolve("Success");
//             // reject("Error");
//         }, 2000);
//     });
// }

// // getData(1).then((res) => {
// //     console.log(res);
// //     getData(2).then((res) => {
// //         console.log(res);
// //     })
// // })



// //promise chaining
// getData(1).then((res) => {
//     return getData(2);
// }).then(() => {
//     return getData(3);
// }).then((res) => {
//     return getData(4);
// }).then((res) => {
//     console.log(res);
// })


//Async-await functions

// async function sayHello(){
//     await api();
//     await api();
//     await api();
//     await api();
//     await api();
//     await api();
//     console.log("Hey! Hello");
// }
// sayHello();

// let i = 1;
// function api(){
//     return new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("Weather Data Recieved!", i);
//         i++;
//         resolve(200);
//     },3000);
//     });
// }

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data = ", dataId);
            resolve("Success");
            // reject("Error");
        }, 500);
    });
}

let i = 1;
// async function getAllData(){
//     console.log("Getting Data", i+".....");
//     i++;
//     await getData(1);
//     console.log("Getting Data", i+".....");
//     i++;
//     await getData(2);
//     console.log("Getting Data", i+".....");
//     i++;
//     await getData(3);
//     console.log("Getting Data", i+".....");
//     i++;
//     await getData(4);
//     console.log("Getting Data", i+".....");
//     i++;
//     await getData(5);
// }

// getAllData();

// (async () => {
//     console.log("Getting Data", i+".....");
//     i++;
//     await getData(1);
//     console.log("Getting Data", i+".....");
//     i++;
//     await getData(2);
//     console.log("Getting Data", i+".....");
//     i++;
//     await getData(3);
//     console.log("Getting Data", i+".....");
//     i++;
//     await getData(4);
//     console.log("Getting Data", i+".....");
//     i++;
//     await getData(5);
// })();

// IIFE : Immediatly Invoked function Expression
(function(){

})();


(() => {

})();

(async() => {

})();


(function Hello(){
    console.log("Hello.......")
})();

(() => {
    console.log("Hello.......");
})();

(async () => {
    console.log("Helloo........")
})();
