// //Adding 100 Para
// const t1 = performance.now();
// for(let i = 1; i <= 100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log('This took ' + (t2 - t1) + 'ms'); 

 
 


// //optimising a bit
// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i = 1; i <= 100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = "This is second para " + i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// const t4 = performance.now();
// console.log("This took " + (t4 - t3) + 'ms'); 



//Fragment
// let fragment = document.createDocumentFragment();
// for(let i = 1; i <= 100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment);//singel reflow and single repaint


//Threading 
//Javascript is single threaded language
// function addPara(){
//     let para = document.createElement('p');
//     para.textContent = "JS is single threaded language";
//     document.body.appendChild(para);
// }


// function appendNewMessage(){
//     let para = document.createElement('p');
//     para.textContent = "Kya haal chal bhailog";
//     document.body.appendChild(para);
// }

// addPara();
// appendNewMessage();



//Event loop
// let element = document.getElementById("head");
// element.addEventListener('click', function(){
//     console.log("Hello!")
// })

// let element2 = document.getElementById("head2")
// element2.addEventListener('click', function(){
//     console.log('Clicked')
// })

// for(let i = 1;i <= 100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     document.body.appendChild(newElement);
// }


//SetTimeOut
setTimeout(function(){
    console.log('Hello Everyone');
}, 5000);

setTimeout(function(){
    console.log('Hello Everyone');
}, 10000);


























































































