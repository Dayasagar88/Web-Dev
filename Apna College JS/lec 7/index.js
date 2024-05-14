// let div = document.querySelector("#box");

// let att = div.getAttribute("name");
// console.log(att);


// let att2 = div.setAttribute("class", "Tu_Hai_Class");
// console.log(att2);

// div.style.backgroundColor = "grey";
// div.style.height = "100vh";
// div.style.color = "white";
// div.style.display = "flex";
// div.style.justifyContent = "center";
// div.style.alignItem = "center";

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Here";
// // div.append(newBtn);
// // div.prepend(newBtn);
// // div.before(newBtn);
// div.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>I am new heading</i>";
// document.querySelector("body").prepend(newHeading);


// // document.querySelector("ul").remove();
// let textNode = document.createTextNode("Item 4");
// document.querySelector("ul").appendChild(textNode);

//Practice Question 1
let newBtn = document.createElement("button");
newBtn.innerText = "Click Here!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
document.querySelector("body").prepend(newBtn);



let para = document.querySelector("p");
// para.setAttribute("class", "newpara");
// para.classList.add("newPara");

newBtn.addEventListener("click", function(){
    if(para.classList)
    para.classList.add("newpara");
    // para.classList.remove("para");
})





















