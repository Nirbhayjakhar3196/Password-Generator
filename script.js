

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
const strength = document.getElementById('strength')

function generatePassword(){
    let allowedChars = ""

    let strengthCheck = 0;

    if(uppercase.checked){
        allowedChars += upper;
        strengthCheck += 1
    }
    if(lowercase.checked){
        allowedChars += lower;
        strengthCheck += 1
    }
    if(numbersCheckbox.checked){
        allowedChars += numbers;
        strengthCheck += 1
    }
    if(symbolsCheckbox.checked){
        allowedChars += symbols;
        strengthCheck += 1
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

    if(passwordLength.value >= 12){
        strengthCheck += 1
    }

        if(strengthCheck <= 2){
        strength.textContent = "Weak"
    }

    else if(strengthCheck === 3){
        strength.textContent = "Good"
    }

    else if(strengthCheck === 4){
        strength.textContent = "Strong"
    }

    else{
        strength.textContent = "Very Strong"
    }
    if(passwordLength.value <= 4){
    strength.textContent = "Very Weak"
}
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

    if(passwordLength.value >1){
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
