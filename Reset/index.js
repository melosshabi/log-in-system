let resetBtn = document.getElementsByClassName('reset-btn')[0];
let usernameInput = document.getElementsByClassName('username-input')[0];
let passwordInput = document.getElementsByClassName('password-input')[0];
let incorrectUsr = document.getElementsByClassName('incorrect')[0];

resetBtn.addEventListener('click', ()=>{
    fetch('https://mela-json-server.herokuapp.com/users')
    .then(res => res.json())
    .then(data =>{
        let users = [...data];
        for(let i = 0; i < users.length; i++){
            if(usernameInput.value == users[i].username){
                fetch(`https://mela-json-server.herokuapp.com/users/${users[i].id}`,{
                    method:'PATCH',
                    body:JSON.stringify({
                        password:passwordInput.value
                    }),
                    headers:{'Content-Type':'application/json; charset=utf-8'}
                })
                localStorage.setItem('password', passwordInput.value);
                incorrectUsr.innerHTML = "Password Was Reset Successfully"
                setTimeout(()=>{window.open('/log-in-system/index.html')}, 2000)
            }else{
                incorrectUsr.innerHTML = "Incorrect Username!";
            }
        }
    })
})