let countValue = document.querySelector('#counter');

// const increment = () => {
//     //get the the value
//     let value = parseInt(countValue.innerText);
//     //Update the value
//     value = value + 1;
//     //Set the value onto UI
//     countValue.innerText = value;

// };

// const decrement = () => {
//     //get the the value
//     let value = parseInt(countValue.innerText);
//     //Update the value
//     value = value - 1;
//     //Set the value onto UI
//     countValue.innerText = value;

// };


const Btn1 = document.querySelector(".btn1");
const Btn2 = document.querySelector(".btn2");

function increment() {
    //get the the value
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value + 1;
    //Set the value onto UI
    countValue.innerText = value;

};

Btn1.addEventListener("click" , decrement);


Btn2.addEventListener("click" , increment);


function decrement() {
    //get the the value
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value - 1;
    //Set the value onto UI
    countValue.innerText = value;

};