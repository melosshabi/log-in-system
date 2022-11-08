let signInForm = document.getElementsByClassName("sign-in-form")[0];
let incorrectCreds = document.getElementsByClassName("incorrect-credentials")[0];

let username;
let email;
let password;
let id;
signInForm.addEventListener('submit', e =>{
    e.preventDefault();
     username = document.getElementsByClassName('username-field')[0].value;
     password = document.getElementsByClassName('password-field')[0].value;

    fetch('https://mela-json-server.herokuapp.com/users')
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
                window.open('https://melosshabi.github.io/log-in-system/Manage/index.html');
            }
            if(username != users[i].username || password != users[i].password){
                incorrectCreds.innerHTML = "Incorrect username or password";
            }
        }
    })
})