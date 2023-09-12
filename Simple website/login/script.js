const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
    e.preventDefault();

    
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const Email = () => {
    let EMAIL = email.value.trim();
  
    if (EMAIL === "") {
      setError(email, "Email is required");
    } else if (!isValidEmail(EMAIL)) {
      setError(email, "Provide a valid email address");
    } else {
      setSuccess(email);
    }
  };
  const Password = () => {
    let PASSWORD = password.value.trim();
  
    if (PASSWORD === "") {
      setError(password, "Password is required");
    } else if (passwordValue.length < 8) {
      setError(password, "Password must be at least 8 character.");
    } else {
      setSuccess(password);
    }
  };