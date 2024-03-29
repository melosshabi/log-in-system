let signInForm = document.getElementsByClassName("sign-in-form")[0];
let incorrectCreds = document.getElementsByClassName("incorrect")[0];
let passwordField = document.getElementsByClassName('password')[0];
let showPassBtn = document.getElementsByClassName('showPassBtn')[0];
let username;
let email;
let password;
let id;

showPassBtn.addEventListener('click', ()=>{
    if(passwordField.type == "password"){
        passwordField.type = "text";
    }else{
        passwordField.type = "password";
    }
})

signInForm.addEventListener('submit', e =>{
    e.preventDefault();
     username = document.getElementsByClassName('username')[0].value;
     password = document.getElementsByClassName('password')[0].value;

    fetch('https://mela-users.onrender.com/users')
    .then(res => res.json())
    .then(data =>{
        let users = [...data];
        for(let i = 0; i < users.length; i++){
            if(username == users[i].username && password == users[i].password){
                email = users[i].email;
                id = users[i].id;
                localStorage.setItem("username", username);
                localStorage.setItem("email", email);
                localStorage.setItem('password', password);
                localStorage.setItem('id', id);
                window.location.href ="https://melosshabi.github.io/log-in-system/Manage/index.html";
                break;
            }
            if(i === users.length - 1){
                if(username != users[i].username || password != users[i].password){
                    incorrectCreds.innerHTML = "Incorrect username or password";
                    // break;
                }
            }
            
        }
    })
})