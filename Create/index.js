let createAccForm = document.getElementsByClassName('createAccForm')[0];
let showPassword = document.getElementsByClassName('showPassBtn')[0];
let password = document.getElementsByClassName('password')[0];

showPassword.addEventListener('click', e=>{
    if(password.type == "password"){
        password.type = "text";
    }else{
        password.type = "password";
    }
   
})
createAccForm.addEventListener('submit', e =>{
    e.preventDefault();
    
    const preUsrData = new FormData(createAccForm);
    const usrData = new URLSearchParams(preUsrData);

    fetch('https://mela-users.onrender.com/users', {
        method:'POST',
        body:usrData,
    }).then(() => window.location.href = "https://melosshabi.github.io/log-in-system/index.html");
    

})
