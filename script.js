// Request length of password to be generated
let passwordLength = parseInt( prompt("Enter the length of the password"));
// Request lowercase/uppercase/numeric/special characters boolean value
let lowerCase = confirm("Would you like to have lowercase in your password?");
let upperCase = confirm("Would you like to have uppercase in your password?");
let numeric = confirm("Would you like to have numbers in your password?");
let specialChar = confirm("Would you like to have special characters in your password?");
// Generate Password
let lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz"
let upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numericCharacters = "0123456789"
let specialCharCharacters = "!@#$%^&*_+"
let validCharacters = ""
let password = ""
if (lowerCase) {
    validCharacters += lowerCaseCharacters
}
if (upperCase) {
    validCharacters += upperCaseCharacters
}
if (numeric) {
    validCharacters += numericCharacters
}
if (specialChar) {
    validCharacters += specialCharCharacters
}
for (let i=0; i<passwordLength; i++) {
    let index = Math.floor(Math.random()*validCharacters.length);
    password += validCharacters[index]
}
console.log("Password",password)
// Display it on the html page
document.getElementById("passwordtextfield").innerHTML=password
function copypassword() {
    let passwordText = document.querySelector("#passwordtextfield")
    passwordText.select()
    document.execCommand("copy")
    alert("Your Password Has Been Copied")
}