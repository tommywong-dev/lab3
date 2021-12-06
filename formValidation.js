const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const genders = document.getElementById("gender");
const state = document.getElementById("state");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const agreement = document.getElementById("agreement");

(async function () {
  // call states from API
  let data = await fetch(
    "https://raw.githubusercontent.com/hazz1925/malaysian-states/master/states.json"
  );
  let states = await data.json();

  // populate into select
  states.forEach((val) => {
    let node = document.createElement("option");
    node.setAttribute("value", val);
    node.innerHTML = val;
    state.appendChild(node);
  });
})();

window.onload = () => {
  firstname.addEventListener("input", (event) => {
    if (!firstname.validity.valid) {
      let firstname_validator = document.getElementById("firstname_validator");
      firstname_validator.classList.add("show");
    } else {
      firstname_validator.classList.remove("show");
    }
  });

  lastname.addEventListener("input", (event) => {
    if (!lastname.validity.valid) {
      let lastname_validator = document.getElementById("lastname_validator");
      lastname_validator.classList.add("show");
    } else {
      lastname_validator.classList.remove("show");
    }
  });

  email.addEventListener("input", (event) => {
    if (!email.validity.valid) {
      let email_validator = document.getElementById("email_validator");
      email_validator.classList.add("show");
    } else {
      email_validator.classList.remove("show");
    }
  });

  mobile.addEventListener("input", (event) => {
    if (!mobile.validity.valid) {
      let mobile_validator = document.getElementById("mobile_validator");
      mobile_validator.classList.add("show");
    } else {
      mobile_validator.classList.remove("show");
    }
  });

  state.addEventListener("input", (event) => {
    console.log("state:", state.value);
    if (!state.validity.valid) {
      let state_validator = document.getElementById("state_validator");
      state_validator.classList.add("show");
    } else {
      state_validator.classList.remove("show");
    }
  });

  password.addEventListener("input", (event) => {
    if (!password.validity.valid) {
      let password_validator = document.getElementById("password_validator");
      password_validator.classList.add("show");
    } else {
      password_validator.classList.remove("show");
    }
  });

  cpassword.addEventListener("input", (event) => {
    if (cpassword.value !== password.value) {
      let cpassword_validator = document.getElementById("cpassword_validator");
      cpassword_validator.classList.add("show");
    } else {
      cpassword_validator.classList.remove("show");
    }
  });

  agreement.addEventListener("input", (event) => {
    if (!agreement.validity.valid) {
      let agreement_validator = document.getElementById("agreement_validator");
      agreement_validator.classList.add("show");
    } else {
      agreement_validator.classList.remove("show");
    }
  });
};

function onSubmit() {
  if (!firstname.validity.valid) {
    let firstname_validator = document.getElementById("firstname_validator");
    firstname_validator.classList.add("show");
    return false;
  } else {
    firstname_validator.classList.remove("show");
  }

  if (!lastname.validity.valid) {
    let lastname_validator = document.getElementById("lastname_validator");
    lastname_validator.classList.add("show");
    return false;
  } else {
    lastname_validator.classList.remove("show");
  }

  if (!email.validity.valid) {
    let email_validator = document.getElementById("email_validator");
    email_validator.classList.add("show");
    return false;
  } else {
    email_validator.classList.remove("show");
  }

  if (!mobile.validity.valid) {
    let mobile_validator = document.getElementById("mobile_validator");
    mobile_validator.classList.add("show");
    return false;
  } else {
    mobile_validator.classList.remove("show");
  }

  console.log("state:", state.value);
  if (!state.validity.valid) {
    let state_validator = document.getElementById("state_validator");
    state_validator.classList.add("show");
    return false;
  } else {
    state_validator.classList.remove("show");
  }

  if (!password.validity.valid) {
    let password_validator = document.getElementById("password_validator");
    password_validator.classList.add("show");
    return false;
  } else {
    password_validator.classList.remove("show");
  }

  if (cpassword.value !== password.value) {
    let cpassword_validator = document.getElementById("cpassword_validator");
    cpassword_validator.classList.add("show");
    return false;
  } else {
    cpassword_validator.classList.remove("show");
  }

  if (agreement.value !== "true") {
    let agreement_validator = document.getElementById("agreement_validator");
    agreement_validator.classList.add("show");
    return false;
  } else {
    agreement_validator.classList.remove("show");
  }

  return true;
}
