let createAccForm = document.getElementsByClassName('create-acc-form')[0];
let createdLabel = document.getElementsByClassName('created')[0];

createAccForm.addEventListener('submit', e=>{
    e.preventDefault();
    
    const preUsrData = new FormData(createAccForm);
    const usrData = new URLSearchParams(preUsrData);
    console.log([...usrData])
    fetch('https://mela-json-server.herokuapp.com/users', {
        method:'POST',
        body:usrData,
    }).then(res => res.json())
    .catch(err => console.log(err));
    createdLabel.innerHTML = "Account Created Successfully Redirecting in 5 seconds";
    setTimeout(()=>{
        window.location.href ="https://melosshabi.github.io/log-in-system/index.html";
    }, 5000);
})