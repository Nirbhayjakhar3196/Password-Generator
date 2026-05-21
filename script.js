

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
const reloadBtn = document.getElementById('reloadBtn')
const copy = document.getElementById('copybtn')
const lengthValue = document.getElementById('lengthValue')
const minusbtn = document.getElementById('minusbtn')
const plusbtn = document.getElementById('plusbtn')

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


reloadBtn.addEventListener('click' , () => {

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

plusbtn.addEventListener('click',()=> {

    if(passwordLength.value < 32){
        passwordLength.value = Number(passwordLength.value) + 1

        lengthValue.textContent = passwordLength.value

        generatePassword()
    }
    
})
minusbtn.addEventListener('click',()=> {

    if(passwordLength.value >4){
        passwordLength.value = Number(passwordLength.value) - 1

        lengthValue.textContent = passwordLength.value

        generatePassword()
    }
    
})

uppercase.checked = true;
lowercase.checked = true;
numbersCheckbox.checked = true;
symbolsCheckbox.checked = true;


generatePassword()
