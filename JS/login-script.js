function login(){
  var username = document.getElementById("username").value;
  var pass = document.getElementById("pass").value;

  if(username != "" && pass != ""){
      alert("Please enter")
      location.replace("../HTML/profile.html");
  }
  else if (username == "" & pass == "") {
      alert("Do not leave empty spaces");
  }
  else{
      alert("Invalid username or password");
  }
}
function register(){
  var nickname = document.getElementById("nickname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var profile = document.getElementById("profile").value;
  var date = document.getElementById("date").value;
  console.log(email)
  console.log(password)
  
   if(email != "" && password != ""){
       alert("Welcome!")
       location.replace("../HTML/profile.html");
  }
  else if (email == "" & password == "" & profile == "" & date == "") {
      alert("Do not leave empty spaces");
  }
  else{
      alert("Invalid content");
  }
}
function registerForm(){
  document.getElementById("login").style.display = "none";
  document.getElementById("register").style.display = "grid";
}
function loginForm(){
  document.getElementById("register").style.display = "none";
  document.getElementById("login").style.display = "grid";
}