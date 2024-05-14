// {
// const URL = "https://dog.ceo/api/breeds/image/random";
// const div = document.querySelector("#imgDiv");
// const btn = document.querySelector("#btn");




// // const getfacts = async() => {
// //     console.log("Getting Data.......")
// //     let response = await fetch(URL);
// //     console.log(response);
// //     console.log(response.status);
// //     let data = await response.json();
// //     // console.log(data.message);
// //     div.firstChild.setAttribute("src", data.message);
// //     div.firstChild.style.width = "100vw";
// //     div.firstChild.style.height= "100vh";
// // }

// function getFacts(){
//     fetch(URL).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         div.firstChild.setAttribute("src", data.message);
//     });
// }

// btn.addEventListener("click", getFacts);
// }


const BASE_URL = "https://api.exchangerate-api.com/v4/latest";
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

const dropDowns = document.querySelectorAll(".dropDown select");
const btn = document.querySelector("form button");
let msg = document.querySelector(".msg");


for(select of dropDowns){
    for(currCode in countryList){
        // console.log(currCode,countryList[currCode]);
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }
        else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (event) => {
        updateflag(event.target);
    });
}

const updateflag = (element) => {
    // console.log(element);
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}


btn.addEventListener("click" , async(evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".EnterAmount input");
    let amtval = amount.value;
    // if(amtval === "" || amtval < 1 || isNaN(amount.value)){
    //     amtval = 1;
    //     amount.value = 1;
    //     msg.innerText = "Enter a Valid Amount";
    // }
    

    // console.log(fromCurr.value, toCurr.value);
    const fromURL = `${BASE_URL}/${fromCurr.value}`;
    const toURL = `${BASE_URL}/${toCurr.value}`;

    let responseFrom = await fetch(fromURL);
    let responseTo = await fetch(toURL);
    let data1 = await responseFrom.json();
    let data2 = await responseTo.json();
    let rate = data1.rates[toCurr.value];
    console.log(rate);

    let finalAmount = amtval * rate;
    if(amtval === "" || amtval < 1 || isNaN(amount.value)){
        // msg.classList.add("shake");
        // msg.innerText = "Enter a Valid Amount";
        amount.value = "";
        amount.placeholder = "Enter a Valid amount";
        amount.classList.add('shake');

                // Remove "shake" class after 500ms
                setTimeout(() => {
                    // msg.classList.remove("shake");
                    // amount.placeholder = "";
                    amount.classList.remove("shake");
                }, 500);
        
    }else{
        msg.innerText = `${amtval} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    }
    
    // console.log(finalAmount);
})