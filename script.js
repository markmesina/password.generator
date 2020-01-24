//grabbing generate button from html
const $generateBtn = document.querySelector("#generate");
$generateBtn.addEventListener("click", generatePassword);

//generate password functionality
function generatePassword() {
    //password length via user input
    let passwordLength = parseInt(document.getElementById("passLength").value);
    // possible characters
    let lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz"
    let upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numericCharacters = "0123456789"
    let specialCharCharacters = "!@#$%^&*_+"
    //placeholder for valid characters from user selection
    let validCharacters = ""
    //placeholder for password
    let password = ""
    //if statements for user selected characters
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
    //for loop that gathers characters from validCharacters and creating characters for password
    for (let i=0; i<passwordLength; i++) {
        let index = Math.floor(Math.random()*validCharacters.length);
        password += validCharacters[index]
    }
    //console logging password
    console.log("Password",password)
    //writing down password onto html page
    document.getElementById("passwordtextfield").innerHTML=password;

}
//BONUS
function copypassword() {
    let passwordText = document.querySelector("#passwordtextfield")
    passwordText.select()
    document.execCommand("copy")
    alert("Your Password Has Been Copied")
}