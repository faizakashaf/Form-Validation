//calling all inputs 
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPass");


form.addEventListener("submit", (e) => {
e.preventDefault()
validateInput()

const hasErrors = 
username.parentElement.querySelector(".error").innerText !== "" ||
email.parentElement.querySelector(".error").innerText !== "" ||
phone.parentElement.querySelector(".error").innerText !== "" ||
password.parentElement.querySelector(".error").innerText !== "" ||
confirmPassword.parentElement.querySelector(".error").innerText !== "";

if(!hasErrors){
    setTimeout(()=>{
        window.location.href = "formSubmission.html";
    },1000)
    }
});

//errors messege for every element
const  setErrors = (element,message) => {
const inputControl = element.parentElement;
const span = inputControl.querySelector(".error");
span.innerText = message;
const input = inputControl.querySelector("input");
input.classList.add("red");
input.classList.remove("green");
}

//after settling errors remove error
const clearErrors = (element) =>{
    const inputControl = element.parentElement;
    const span = inputControl.querySelector(".error");
    span.innerText = "";
    const input = inputControl.querySelector("input");
    input.classList.remove("red");
   input.classList.add("green");
}

//phone number validation that user cant input any string
phone.addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
  });

function startsWithNumber(userNameValue) {
    return /^\d/.test(userNameValue);
  }

const validateInput = () => {
const userNameValue = username.value.trim();
const emailValue = email.value.trim();
const phoneValue = phone.value.trim();
const passwordValue = password.value.trim();
const cpassValue = confirmPassword.value.trim();

//username validation
if(userNameValue === ""){
    setErrors(username,"* Username can not be empty");
}

else if(userNameValue.length >15){
    setErrors(username,"* Username is too long and not valid");
}
else if(userNameValue.length < 8){
    setErrors(username,"* Username is too short");
}
else if(startsWithNumber(userNameValue)){
    setErrors(username,"* Username can not start with a digits");
}
else{
    clearErrors(username);  
}

//email validation
if(emailValue === ""){
    setErrors(email,"* Email can not be empty");
}
else if(emailValue.length > 30){
    setErrors(email,"* Email is too long");
}
else if (isEmail(emailValue) === false){
    setErrors(email,"* Email should be in required format")   
}
else{
    clearErrors(email)
}

//phone validation
if(phoneValue === ""){
setErrors(phone,"* Phone number can not be empty")
}

else if(phoneValue.length < 11 || phoneValue.length > 11){
    setErrors(phone,"* Phone number must be of eleven digits")
}
else{
    clearErrors(phone)
}
//password validation

if(passwordValue === ""){
    setErrors(password,"* Password can not be empty");
}
else if(passwordValue.length < 8 || passwordValue.length >20){
setErrors(password,"* min-length: 8 and max-length: 15")
}
else if(isPassword(passwordValue) === false){
    setErrors(password,"* Password should be alphanumeric containing atleast 1 uppercase and 1 special character")
}
else{
    clearErrors(password)
}

//confirm password validation
if(cpassValue === ""){
    setErrors(confirmPassword,"* Password can not be empty");
}
else if(isPassword(cpassValue) === false){
    setErrors(confirmPassword,"* Password should be alphanumeric containing atleast 1 uppercase and 1 special character")
}
else if(cpassValue !== passwordValue){
    setErrors(confirmPassword,"* Password does not match with the new password"); 
}
else{
    clearErrors(confirmPassword)
}

};

function isEmail(emailValue){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailPattern.test(emailValue);
}

function isPassword(passwordValue,cpassValue){
    const passwordPattern = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    return passwordPattern.test(passwordValue,cpassValue);
}







