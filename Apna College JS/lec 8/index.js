// console.log("Hello");

// let div = document.querySelector("div");

// div.onmouseover = (event) =>{
//     console.log(event.type);
//     console.log(event.clientX, event.clientY);
//     console.log(event.target);
//     console.log(event);
//     console.log("You r inside div")
// }

// let btn = document.querySelector(".btn");

// btn.addEventListener("click",() => {
//     console.log("Event Handeler 1")
// })

// btn.addEventListener("click",() => {
//     console.log("Event Handeler 2")
// })

// btn.addEventListener("click",() => {
//     console.log("Event Handeler 3")
// })

// let handler4 = () => {
//     console.log("Event Handeler 4")
// }
// btn.addEventListener("click", handler4)

// btn.removeEventListener("click", handler4);


let body = document.querySelector("body");
let  btn = document.querySelector(".btn");

let mode = "light";

// btn.addEventListener("click", () => {
//     if(mode === "ligth"){
//         mode = "dark";
//         btn.innerHTML = "Light mode ON"
//         document.body.style.backgroundColor = "white";
//     }
//     else{
//         mode = "ligth";
//         btn.innerHTML = "Dark mode ON"
//         document.body.style.backgroundColor = "grey"
//     }
//     console.log(mode);

// })

btn.addEventListener("click", () => {
    if(mode === "ligth"){
        mode = "dark";
        btn.innerHTML = "Light mode ON"
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        mode = "ligth";
        btn.innerHTML = "Dark mode ON"
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(mode);

})

































