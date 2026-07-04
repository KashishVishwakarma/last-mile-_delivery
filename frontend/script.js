document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault();

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

if(email=="admin@gmail.com" && password=="123456"){

window.location="dashboard.html";

}
else{

alert("Invalid Email or Password");

}

});
