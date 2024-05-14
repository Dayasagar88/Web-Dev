
// //EventListener
// function eventFunction(){
//     console.log('You have clicked on document')
// }

// // function eventFunction(){
// //     console.log('EventListerner Removed')
// // }

// document.addEventListener('click',eventFunction);

// document.removeEventListener('click', eventFunction);


// let content = document.querySelector('h1');

// content.addEventListener('click', function(event){
//     console.log(event);
// });

// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click' , function(event){
//     event.preventDefault();
//     console.log('Maja Ayaaaaaaa..............');
// });

// let myDiv = document.createElement('div');


// function paraStatus(event){
//     console.log('para ' + event.target.textContent);
// }
// for(let i = 1; i <= 100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is my para ' + i;

//     newElement.addEventListener('click', paraStatus);

//     myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);


let content = document.querySelector('#wrapper');

content.addEventListener('click', function(event){
    if(event.target.nodeName == 'SPAN'){
        console.log('span pr click kiye ho ' + event.target.textContent);
    }
    
})






















































































































































































