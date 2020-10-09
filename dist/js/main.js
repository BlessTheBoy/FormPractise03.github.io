//get form and the two inputs
const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //check username
    let usernameValue = username.value.trim();
    if (usernameValue === "") {
        setErrorFor(username, "username cannot be blank");
    } else {
        setSuccessFor(username);
    }

    //check password
    let passwordValue = password.value.trim();
    if (passwordValue === "") {
        setErrorFor(password, "password cannot be blank");
    } else if (passwordValue.length < 6){
        setErrorFor(password, "password must be at least 6 characters");
    } else {
        setSuccessFor(password);
    }
});

function setErrorFor(input, message){  
    let container = input.parentElement;
    container.classList.add('error');
    let error = container.querySelector('small');
    error.innerText = message;
}

function setSuccessFor(input){
    let container = input.parentElement;
    container.classList.remove('error');
}