

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
const lengthValue = document.getElementById('lengthValue')

function generatePassword(){
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

    let generatePassword = ""

    if(allowedChars === ""){
        alert('Plz select atleast one checkbox')
        return
    }

    for(let i =0 ;i<passwordLength.value;i++){
        const randomIndex= Math.floor(Math.random()*allowedChars.length)

        generatePassword += allowedChars[randomIndex]
    }


    passwordDisplay.value = generatePassword
}


generateBtn.addEventListener('click' , () => {

        generatePassword()
})

copy.addEventListener('click' , () => {
    if(passwordDisplay.value === ""){
        alert('Generate password')
        return
    }
    navigator.clipboard.writeText(passwordDisplay.value);
    
    copy.textContent = "Copied!"

    setTimeout(() => {
        copy.textContent = "Copy"
    },2000)
})

passwordLength.addEventListener('input',() => {
    lengthValue.textContent = passwordLength.value
})

uppercase.checked = true;
lowercase.checked = true;
numbersCheckbox.checked = true;
symbolsCheckbox.checked = true;


generatePassword()
