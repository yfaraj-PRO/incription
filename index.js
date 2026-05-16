const inputnom = document.getElementById("nom");
const inputemail = document.getElementById("email");
const inputpassword = document.getElementById("password");
const inputage = document.getElementById("age");
const submitbtn = document.getElementById("submitbtn");

console.log(inputnom);
console.log(inputemail);
console.log(inputpassword);
console.log(inputage);
console.log(submitbtn);

submitbtn.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("vous avez cliqué sur le bouton submit");
    console.log("nom: " + inputnom.value);
    console.log("email: " + inputemail.value);
    console.log("password: " + inputpassword.value);
    console.log("age: " + inputage.value);
    alert("nom: " + inputnom.value + "\nemail: " + inputemail.value + "\npassword: " + inputpassword.value + "\nage: " + inputage.value);
});