const form = document.querySelector('form');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const pwd = document.querySelector('#pwd');

console.log(document.querySelector('#fname-error').parentElement.firstElementChild);


form.addEventListener("submit", (e) => {
e.preventDefault();

if (fname.value === "" || fname.value == null) {
    document.querySelector('#fname-error').parentElement.firstElementChild.style.display = "block";
    document.querySelector('#fname-error').style.display = "block";
    fname.classList.add('input-error');
} else {
    document.querySelector('#fname-error').parentElement.firstElementChild.style.display = "none";
    document.querySelector('#fname-error').style.display = "none";
    fname.classList.remove('input-error');
}

if (lname.value === "" || lname.value == null) {
    document.querySelector('#lname-error').parentElement.firstElementChild.style.display = "block";
    document.querySelector('#lname-error').style.display = "block";
    lname.classList.add('input-error');
} else {
    document.querySelector('#lname-error').parentElement.firstElementChild.style.display = "none";
    document.querySelector('#lname-error').style.display = "none";
    lname.classList.remove('input-error');
}

if (email.value === "" || email.value == null) {
    document.querySelector('#email-error').parentElement.firstElementChild.style.display = "block";
    document.querySelector('#email-error').innerText = "Email cannot be empty";
    document.querySelector('#email-error').style.display = "block";
    email.classList.add('input-error');
} else if (validateEmail(email.value) == false) {
    document.querySelector('#email-error').parentElement.firstElementChild.style.display = "block";
    document.querySelector('#email-error').innerText = "Email is invalid";
} else {
    document.querySelector('#email-error').parentElement.firstElementChild.style.display = "none";
    document.querySelector('#email-error').style.display = "none";
    email.classList.remove('input-error');
}

if (pwd.value === "" || pwd.value == null) {
    document.querySelector('#pwd-error').parentElement.firstElementChild.style.display = "block";
    document.querySelector('#pwd-error').style.display = "block";
    pwd.classList.add('input-error');
} else {
    document.querySelector('#pwd-error').parentElement.firstElementChild.style.display = "none";
    document.querySelector('#pwd-error').style.display = "none";
    pwd.classList.remove('input-error');
}

});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
/*
  submit.addEventListener('click', function() {
    var email = emailInput.value;
    if (validateEmail(email)) {
      emailInput.value = '';
      alert.innerText = '';
      alert.style.visibility = 'hidden';
    } else if(String(email).toLowerCase() === '') {
      alert.style.visibility = 'visible';
      emailInput.value = '';
      alert.innerText = 'Please enter your email';
      emailInput.style.borderColor = 'red';
    } else {
      alert.style.visibility = 'visible';
      emailInput.value = '';
      alert.innerText = 'Please provide a valid email address';
      emailInput.style.borderColor = 'red';
    }
  }); */