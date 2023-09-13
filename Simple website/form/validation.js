const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordconfirm = document.getElementById("password2");
const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const address = document.getElementById("address");
const phno = document.getElementById("phone");
const age = document.getElementById("age");
const dob = document.getElementById("dob");
const gender = document.getElementById("gender");
const state = document.getElementById("state");
const city = document.getElementById("city");

form.addEventListener('submit', e => {
    e.preventDefault();

   
});


const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const isValidName = (firstname) => {
  const re =
  /^[a-zA-Z]/
  return re.test(String(firstname));
};

const isValidLastName = (lastname) => {
  const re =
  /^[a-zA-Z]/
  return re.test(String(lastname));
};
const isValidPhoneno = (phno) => {
  const re =
  /^\d{10}$/
  return re.test(String(phno));
};



const validateFirstName = () => {
  let FirstName = firstname.value.trim();

  if (FirstName == "") {
    setError(firstname, "first name is required");
  }
  else if (!isValidName(FirstName)) {
    setError(firstname, "Provide a valid name");
   } 
   else {
    setSuccess(firstname);
  }
};

const validateLastName = () => {
  let LastName = lastname.value.trim();

  if (LastName == "") {
    setError(lastname, "first name is required");
  }
  else if (!isValidName(lastname)) {
    setError(lastname, "Provide a valid name");
   } 
   else {
    setSuccess(lastname);
  }
};


const Dob = () => {
  let DOB = dob.value.trim();

  if (DOB === "") {
    setError(dob, "date of birth is required");
  } else {
    setSuccess(dob);
  }
};
const Age = () => {
  let AGE = age.value.trim();

  if (AGE < 18 || AGE == "NaN") {
    setError(age, "You not eligible");
  } else {
    setSuccess(age);
  }
};
const Gender = () => {
  let GENDER = gender.value.trim();

  if (GENDER === "") {
    setError(gender, "gender is required");
  } else {
    setSuccess(gender);
  }
};
const Phoneno = () => {
  let PHONENO = phno.value.trim();

  if (PHONENO === "") {
    setError(phno, "phone no is required");
  } 
  else if (!isValidPhoneno(PHONENO)) {
    setError(phno, "Provide a valid phone no");
   } 
   else {
    setSuccess(phno);
  }
};
const Address = () => {
  let ADDRESS = address.value.trim();

  if (ADDRESS === "") {
    setError(address, "address is required");
  } else {
    setSuccess(address);
  }
};
const State = () => {
  let STATE = state.value.trim();
  if (STATE === "") {
    setError(state, "state name is required");
  } else {
    setSuccess(state);
  }
};
const City = () => {
  let CITY = city.value.trim();

  if (CITY === "") {
    setError(city, "city name is required");
  } else {
    setSuccess(city);
  }
};
const Username = () => {
  let USERNAME = username.value.trim();

  if (USERNAME === "") {
    setError(username, "Username is required");
  } 
  else if (USERNAME.length<3) {
    setError(username, "Username required atleast 3 characters");
  } else {
    setSuccess(username);
  }
};
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
  } else if (PASSWORD.length<6) {
    setError(password, "Password must be at least 6 character.");
  } else {
    setSuccess(password);
  }
};
const PasswordAgain = () => {
  let PASSWORDAGAIN = passwordconfirm.value.trim();

  if (PASSWORDAGAIN === "") {
    setError(passwordconfirm, "Please confirm your password");
  } else if (password!== passwordconfirm) {
    setError(passwordconfirm, "Passwords doesn't match");
  } else {
    setSuccess(passwordconfirm);
  }
};
