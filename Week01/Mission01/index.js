const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const age = document.getElementById("age");
const password = document.getElementById("password");
const checkPassword = document.getElementById("checkPassword");
const nameValidation = document.getElementById("nameValidation");
const emailValidation = document.getElementById("emailValidation");
const ageValidation = document.getElementById("ageValidation");
const passwordValidation = document.getElementById("passwordValidation");
const checkPasswordValidation = document.getElementById(
  "checkPasswordValidation"
);
const submit = document.getElementById("submit");
const modal = document.getElementById("modal-wrapper");
const closeBtn = document.getElementById("close");

function validateName() {
  if (name.value) {
    nameValidation.style.color = "green";
    nameValidation.innerText = "멋진 이름이네요!";
    return true;
  } else {
    nameValidation.style.color = "red";
    nameValidation.innerText = "필수 입력 항목입니다!";
  }
  return false;
}

function validateEmail() {
  if (email.value.includes("@")) {
    emailValidation.style.color = "green";
    emailValidation.innerText = "올바른 이메일 형식입니다!";
    return true;
  } else {
    emailValidation.style.color = "red";
    emailValidation.innerText = "올바른 이메일 형식이 아닙니다!";
  }
  return false;
}

function validateAge() {
  if (age.value % 1 != 0) {
    ageValidation.style.color = "red";
    ageValidation.innerText = "나이는 소수가 될 수 없습니다!";
  } else if (age.value < 0) {
    ageValidation.style.color = "red";
    ageValidation.innerText = "나이는 음수가 될 수 없습니다!";
  } else if (age.value < 19) {
    ageValidation.style.color = "red";
    ageValidation.innerText = "미성년자는 가입할 수 없습니다!";
  } else {
    ageValidation.style.color = "green";
    ageValidation.innerText = "올바른 나이 형식입니다!";
    return true;
  }
  return false;
}

function validatePassword() {
  const pwCheck = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#%^&*])$/;

  if (pwCheck.test(password.value)) {
    passwordValidation.style.color = "red";
    passwordValidation.innerText = "비밀번호는 최소 4자리 이상이어야 합니다.";
  } else if (password.value.length < 4) {
    passwordValidation.style.color = "red";
    passwordValidation.innerText = "비밀번호는 최소 4자리 이상이어야 합니다.";
  } else if (password.value.length > 12) {
    passwordValidation.style.color = "red";
    passwordValidation.innerText = "비밀번호는 최대 12자리까지 가능합니다.";
  } else {
    passwordValidation.style.color = "green";
    passwordValidation.innerText = "올바른 비밀번호입니다!";
    return true;
  }
  return false;
}

function validateCheckPassword() {
  if (
    password.value.length >= 4 &&
    password.innerText == checkPassword.innerText
  ) {
    checkPasswordValidation.style.color = "green";
    checkPasswordValidation.innerText = "비밀번호가 일치합니다.";
    return true;
  } else {
    checkPasswordValidation.style.color = "red";
    checkPasswordValidation.innerText = "비밀번호가 일치하지 않습니다.";
  }
  return false;
}

submit.onclick = () => {
  validateName();
  validateAge();
  validateEmail();
  validatePassword();
  validateCheckPassword();

  if (
    nameValidation.style.color == "green" &&
    emailValidation.style.color == "green" &&
    ageValidation.style.color == "green" &&
    passwordValidation.style.color == "green" &&
    checkPasswordValidation.style.color == "green"
  )
    modal.style.display = "flex";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};
