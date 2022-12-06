    window.addEventListener('load', ()=>{
    let spinner = document.getElementsByClassName('spinner-container')[0];
    setTimeout(()=>{
        spinner.style.display = "none";
    }, 1500)

    if(localStorage.length == 0){
        window.location.replace('../index.html');
    }
    let sidebarUserName = document.getElementsByClassName('users-name')[0];
    let sidebarEmail = document.getElementsByClassName('users-email')[0];
    let username = localStorage.getItem('username');
    let email = localStorage.getItem('email');
    let password = localStorage.getItem('password');
    let id = localStorage.getItem('id');
    sidebarUserName.innerHTML = username;
    sidebarEmail.innerHTML = email;

    let usernameField = document.getElementsByClassName('username')[0];
    let emailField = document.getElementsByClassName('email')[0];
    let passwordField = document.getElementsByClassName('password')[0];
    let changeUsername = document.getElementsByClassName('change-username')[0];
    let changeEmail = document.getElementsByClassName('change-email')[0];
    let changePassword = document.getElementsByClassName('change-password')[0];
    
    usernameField.value = username;
    emailField.value = email;
    passwordField.value = password;

    usernameField.disabled = true;
    emailField.disabled = true;
    passwordField.disabled = true;

    let saveChanges = document.getElementsByClassName('save-changes')[0];

    changeUsername.addEventListener('click', ()=>{
    usernameField.disabled = false;
    usernameField.classList.add("enabled");
    })

    changeEmail.addEventListener('click', ()=>{
        emailField.disabled = false;
        emailField.classList.add('enabled');
    })

    changePassword.addEventListener('click', ()=>{
        passwordField.disabled = false;
        passwordField.classList.add('enabled');
        passwordField.type = "text";
    })

    saveChanges.addEventListener('click', ()=>{
        let updatedUsername = usernameField.value;
        let updatedEmail = emailField.value;
        let updatedPassword = passwordField.value;

        usernameField.disabled = true;
        usernameField.classList.remove('enabled');
        localStorage.setItem('username', updatedUsername);
        
        emailField.disabled = true;
        emailField.classList.remove('enabled');
        localStorage.setItem('email', updatedEmail)

        passwordField.disabled = true;
        passwordField.classList.remove('enabled');
        localStorage.setItem('password', updatedPassword);
        passwordField.type = "password";
      

        fetch('https://mela-users.onrender.com/users')
        .then(res => res.json())
        .then(data => {
            let users = [...data];
            for(let i = 0; i < users.length; i++){
                if(id == users[i].id){
                    fetch(`https://mela-users.onrender.com/users/${id}`,{
                        method:'PATCH',
                        body:JSON.stringify({
                            username:updatedUsername,
                            email:updatedEmail,
                            password:updatedPassword
                        }),
                        headers:{'Content-Type':'application/json; charset=UTF-8',}
                    })
                }
            }
        })
        alert("Your Data was updated succsessfully. Reloading");
        window.location.reload();
    })
})