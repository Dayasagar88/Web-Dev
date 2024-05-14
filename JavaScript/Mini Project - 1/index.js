const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMessage]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#number");
const symbolCheck = document.querySelector("#symbol");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generate-btn");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols  = "!@#$%^&*(){}[]_+><:;',.\/";
const passType = document.querySelector(".password-type");

let password = "";
let passwordLength = 10;
let checkCount = 0;

function passMessage(){
    
        if(checkCount == 0) 
        passType.classList.add("password-type-active");

        setTimeout(() =>{
            passType.classList.remove("password-type-active")
        }, 2000)
}


// passType.classList.add("password-type-active");


handleSlider();
//password ki length ko set krega
 function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ((passwordLength - min) * 100/(max - min)) + "% 100%";
}

 function setIndicator(color){
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`
    // shadow
 }
// setIndicator("#ccc");

function getRndNumber(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function gererateRndNumber(){
    return getRndNumber(0,9);
}

function getRndLowercase(){
    return String.fromCharCode(getRndNumber(97,123));
}

function getRndUppercase(){
    return String.fromCharCode(getRndNumber(65,91));
}

function getRndSymbol(){
    const RndNumber = getRndNumber(0, symbols.length);
    return symbols.charAt(RndNumber);
}

function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;
    
    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numberCheck.checked) hasNumber = true;
    if(symbolCheck.checked) hasSymbol = true;

    if(hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8){
        setIndicator("#0f0");
    }
    else if((hasLower || hasUpper) && (hasNumber || hasSymbol) && passwordLength >= 6){
        setIndicator("#ff0");
    }
    else{
        setIndicator("#f00");
    }
}

async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "Copied!"
    }
    catch{
        copyMsg.innerText = "Failed";
    }
    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active");
    },2000);
}

function shufflePassword(array){
    //Fisher Yates Method
    for (let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

function handleCheckBoxChange(){
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if(checkbox.checked)
        checkCount++;
    });

    //special condition
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}



allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener("change", handleCheckBoxChange);
})

inputSlider.addEventListener("input", (e) => {
    passwordLength = e.target.value;
    handleSlider();
});

copyBtn.addEventListener("click", () => {
    if(passwordDisplay.value)
    copyContent();
})

generateBtn.addEventListener("click", () => {
    //none of the checkbox are selected
    if(checkCount == 0) 
        passType.classList.add("password-type-active")

        setTimeout(() =>{
            passType.classList.remove("password-type-active")
        }, 2000) 
    

    if(passwordLength < checkCount){
       passwordLength = checkCount;
       handleSlider();
    }

    //Let's start the journey to find new password

    //Remove old password
    password = "";
    //Let's put the stuff mentioned by checkbox
    // if(uppercaseCheck.checked){
    //     password += getRndUppercase();
    // }

    // if(lowercaseCheck.checked){
    //     password += getRndLowercase();
    // }

    // if(numberCheck.checked){
    //     password += gererateRndNumber();
    // }

    // if(symbolCheck.checked){
    //     password += getRndSymbol();
    // }


    let funcArr = [];

    if(uppercaseCheck.checked)
        funcArr.push(getRndUppercase);
    
    if(lowercaseCheck.checked)
        funcArr.push(getRndLowercase);
    
    if(numberCheck.checked)
        funcArr.push(gererateRndNumber);

    if(symbolCheck.checked)
        funcArr.push(getRndSymbol);



    //compulsory additon
    for(let i = 0; i <funcArr.length; i++){
        password += funcArr[i]();
    }

    //remaining addition
    for(let i = 0; i < passwordLength - funcArr.length; i++){
        let rndIndex = getRndNumber(0 , funcArr.length);
        password += funcArr[rndIndex]();
    }    

    //shuffle the password
    password = shufflePassword(Array.from(password));

    //Show in UI
    passwordDisplay.value = password;
    // calculate strength
    calcStrength();
})

























