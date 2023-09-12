const form = document.getElementById('form');
const NaMe = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const msg = document.getElementById('msg');

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




  const Address = () => {
    let ADDRESS = address.value.trim();
  
    if (ADDRESS === "") {
      setError(address, "address is required");
    } else {
      setSuccess(address);
    }
  };
  const Subject = () => {
    let SUBJECT = subject.value.trim();
  
    if (SUBJECT === "") {
      setError(subject, "subject is required");
    } else {
      setSuccess(subject);
    }
  };
  const Message = () => {
    let MESSAGE = msg.value.trim();
  
    if (MESSAGE === "") {
      setError(msg,"Message is required");
    } else {
      setSuccess(msg);
    }
  };


  const Name = () => {
    let NAME = NaMe.value.trim();
  
    if (NAME === "") {
      setError(NaMe, "Name is required");
    } else {
      setSuccess(Name);
    }
  };
  const Email = () => {
    let EMAIL = email.value.trim();
  
    if (EMAIL === "") {
      setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) {
      setError(email, "Provide a valid email address");
    } else {
      setSuccess(email);
    }
  };

  

