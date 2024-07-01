const sendBtn = document.querySelector(".btn");
const errorMsg = document.querySelector(".error-msg");
const errorIcon = document.querySelector(".error-icon");
const inputEl = document.querySelector(".email");
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

sendBtn.addEventListener("click", function () {
  if (inputEl.value.length === 0 || !inputEl.value.match(emailValidation)) {
    errorMsg.style.display = "inline";
    errorIcon.style.display = "inline";
    inputEl.style.border = "2px solid var(--Soft-Red)";
    errorMsg.style.color = "red";
    errorMsg.textContent = "Please provide a valid email ";
  } else {
    errorMsg.style.display = "inline";
    errorMsg.style.color = "green";
    inputEl.style.border = "2px solid var(--Desaturated-Red)";
    errorIcon.style.display = "none";
    errorMsg.textContent = "Thank you for connect with our new Fashion store";
  }
});
