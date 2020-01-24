const $generateBtn = document.querySelector("#generate");
$generateBtn.addEventListener("click", generatePassword);

function generatePassword() {

    let passwordLength = parseInt(document.getElementById("passLength").value);
    let lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz"
    let upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numericCharacters = "0123456789"
    let specialCharCharacters = "!@#$%^&*_+"
    let validCharacters = ""
    let password = ""
    
    if (document.getElementById("lowerBox").checked) {
        validCharacters += lowerCaseCharacters
    }
    if (document.getElementById("upperBox").checked) {
        validCharacters += upperCaseCharacters
    }
    if (document.getElementById("numbersBox").checked) {
        validCharacters += numericCharacters
    }
    if (document.getElementById("symbolsBox").checked) {
        validCharacters += specialCharCharacters
    }
    for (let i=0; i<passwordLength; i++) {
        let index = Math.floor(Math.random()*validCharacters.length);
        password += validCharacters[index]
    }
    console.log("Password",password)
    document.getElementById("passwordtextfield").innerHTML=password;

}

function copypassword() {
    let passwordText = document.querySelector("#passwordtextfield")
    passwordText.select()
    document.execCommand("copy")
    alert("Your Password Has Been Copied")
}