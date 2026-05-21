

let allowedChars = ""

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

const passwordDisplay = document.getElementById('password')
const passwordLength = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbol");
const generateBtn = document.getElementById('addbtn')
const copy = document.getElementById('copybtn')




generateBtn.addEventListener('click' , () => {

    let allowedChars = ""

    if(uppercase.checked){
        allowedChars += upper;
    }
    if(lowercase.checked){
        allowedChars += lower;
    }
    if(numbersCheckbox.checked){
        allowedChars += numbers;
    }
    if(symbolsCheckbox.checked){
        allowedChars += symbols;
    } 

    const randomIndex= Math.floor(Math.random()*allowedChars.length)

    let generatePassword = ""

    passwordDisplay.value
    
    

})



