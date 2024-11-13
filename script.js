const generateBtn = document.querySelector(".generateBtn");
const GeneratedPassword = document.querySelector(".GeneratedPassword");
const copyBtn = document.querySelector(".copyBtn");

// Array of lowercase alphabets
const alphabetsLower = [..."abcdefghijklmnopqrstuvwxyz"];

// Array of uppercase alphabets
const alphabetsUpper = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

// Array of numbers as strings (0-9)
const numbers = [..."0123456789"];

// Array of common symbols
const symbols = [..."!@#$%^&*()_+-=[]{}|;':\",.<>/?"];

const length = 12;
let allChars = symbols.concat(numbers , alphabetsLower , alphabetsUpper)
function generatePassword() { 
    let sequence = "";
    sequence += numbers[Math.floor(Math.random() * numbers.length)];
    sequence += symbols[Math.floor(Math.random() * symbols.length)];
    sequence += alphabetsUpper[Math.floor(Math.random() * alphabetsUpper.length)];
    sequence += alphabetsLower[Math.floor(Math.random() * alphabetsLower.length)];;
    while (12 > sequence.length){
        sequence+= allChars[Math.floor(Math.random() * allChars.length)]
    }
    GeneratedPassword.textContent = sequence;
}

generateBtn.addEventListener('click', generatePassword
)

function  copyPassword(){
    Password =GeneratedPassword.textContent;
    navigator.clipboard.writeText(Password);
    window.alert('sucessfuly copied')
}   
 
copyBtn.addEventListener('click', copyPassword);