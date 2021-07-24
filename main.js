const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

const checkInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if(usernameValue.length < 3) {
    //show error
    setErrorFor(username, 'Username must be at least 3 characters');
  } else {
    //add success
    setSuccessFor(username);
  }

  if(emailValue === '') {
    //show error
    setErrorFor(email, 'Email cannot be blank');
  } else if(!isEmail(emailValue)){
    setErrorFor(email, 'Email is not valid');
  } else {
    //add success
    setSuccessFor(email);
  }

  if(passwordValue.length < 6) {
    //show error
    setErrorFor(password, 'Password must be at least 6 characters');
  } else {
    //add success
    setSuccessFor(password);
  }

  if(password2Value === '') {
    //show error
    setErrorFor(password2, 'Confirm your password please');
  } else if(passwordValue !== password2Value){
    setErrorFor(password2, 'passwords does not match');
  } else {
    //add success
    setSuccessFor(password2);
  }

}

const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;

  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}