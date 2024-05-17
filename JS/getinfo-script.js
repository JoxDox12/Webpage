let register = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let passw = document.getElementById('password').value;
    let profile = document.getElementById('profile').value;
    let date = document.getElementById('date').value;
    document.getElementById('name').innerHTML = name;
    document.getElementById('email').innerHTML = email;
    document.getElementById('passw').innerHTML = passw;
    document.getElementById('date').innerHTML = date;
    document.getElementById('profile').innerHTML = profile;
}
document.getElementById('registerbtn').addEventListener("click", register);