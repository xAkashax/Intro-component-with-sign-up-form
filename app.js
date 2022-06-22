const btn = document.querySelector('.submit');
const inputs = document.querySelectorAll('.form input');
const errorIcons = document.querySelectorAll('.error-icon');
const errorTexts = document.querySelectorAll('p.error-text');

function checkForm() {
  for (i = 0; i < inputs.length; i++) {
    checkInput(i);
  }
};

function checkInput(index) {
  if (inputs[index].value === "" || !validateEmail(inputs[index])) {
    errorIcons[index].style.visibility = "visible";
    errorTexts[index].style.visibility = "visible";
    inputs[index].style.border = "1px solid hsl(0, 100%, 74%)";
    btn.disabled = true;
  } else {
    errorIcons[index].style.visibility = "hidden";
    errorTexts[index].style.visibility = "hidden"; 
    inputs[index].style.border = "1px solid hsl(246, 25%, 77%)";
  }
};

function validateEmail(input) {
  if (input.type === "email") {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.value.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  } 
  return true;
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  checkForm();
});

inputs.forEach(input => {
  input.addEventListener('input', (e) => {
    const newArray = Array.from(inputs);
    let newIndex = newArray.indexOf(input);
    btn.disabled = false;
    checkInput(newIndex);
  });
});