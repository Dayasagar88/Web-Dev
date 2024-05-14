// document.body.childNodes[3].innerText = "Hello";

// let heading = document.getElementById("heading");
// console.dir(heading);

// let para = document.getElementsByClassName("para");
// console.dir(para);

// let para2 = document.getElementsByTagName("p");
// console.log(para2)

// let para3 = document.querySelectorAll(".para");
// console.dir(para3);

// let btn = document.querySelector("#btn");

// let div = document.querySelector("div");

let head = document.querySelector("#heading");
console.log(head.innerText);
head.innerText = head.innerText + " from apna college student";

let boxes = document.querySelectorAll(".box");
console.log(boxes);

// let idx = 1;
// for(box of boxes){
//     box.innerText = `App ho div ${idx}`;
//     idx++;
// }

// for(let i = 1; i <= boxes.length; i++){
//     boxes[i-1].innerText = `App ho div ${i}`;
// }

boxes.forEach((val, idx) => {
    console.log(val,idx);
    val.innerText = `App ho div ${idx + 1}`;

    // boxes[idx].innerText = `App ho div`
})


// box[0].innerText = "App ho pehle div";
// box[1].innerText = "App ho dusre div";
// box[2].innerText = "App ho tisre div"














