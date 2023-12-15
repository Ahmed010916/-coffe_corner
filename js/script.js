



var UserName = document.getElementById("username");
var Password = document.getElementById("password");
var textlogin = document.getElementById("textlogin");
var a_login = document.getElementById("a_login");
var loyout = document.getElementById("loyout");
var element = document.getElementsByName("element");
var form = document.getElementById("form");



if(localStorage.getItem('Login') == "true"){
    textlogin.innerHTML  = localStorage.getItem('username');
    a_login.href =  '#loyout';
    console.log(a_login.href);
}else {
    element.forEach((e)=>{
        e.classList.add("butHidden");
    });
}

var btn = document.getElementById("btn");

loyout.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("Login");


    location.reload();

});


form.addEventListener("submit", (e) => {
    e.preventDefault();

    localStorage.setItem("username", UserName.value);
    localStorage.setItem("password", Password.value);
    localStorage.setItem("Login", true);

    a_login.href =  '';

    location.reload();

});


console.log(localStorage.getItem('Login'));

