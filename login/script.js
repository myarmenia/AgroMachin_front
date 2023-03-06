const form_login = document.getElementById("form_log_in");
const passwordError = document.getElementsByClassName('password_error')[0];
const newPasswordError = document.getElementsByClassName('newpassword_error')[0];
const newPasswordError1 = document.getElementsByClassName('newpassword_error')[1];
function getData(form) {
  console.log("test");
  const formData = new FormData(form);
  const password = document.getElementById("password");
  const disbleClass = document.getElementsByClassName("disabledpassword");
  password.style.display = "none";
  password.disabled = true;
  for (const elem of disbleClass) {
    elem.style.display = "block";
    elem.disabled = false;
  }

  // iterate through entries...

  // ...or output as an object

  //   elemnt1.classList.remove("active");
  //   elemnt2.classList.add("active");
  console.log(Object.fromEntries(formData));
}

form_login.addEventListener("submit", function (e) {
  e.preventDefault();
  getData(e.target);
  passwordError.style.display = 'none';
  newPasswordError.style.display = 'block';
  newPasswordError1.style.display = 'block';
  form_login.style.height = '260px';
});
let dropBtn = document.querySelectorAll(".dropbtn");
let myDropdown = document.querySelectorAll(".myDropdown");
let option = document.querySelectorAll(".option");
let title = "";
const activ = document.getElementsByClassName("show");
for (let i = 0; i < dropBtn.length; i++) {
  console.log("test");
  dropBtn[i].addEventListener("click", function (e) {
    for (let m = 0; m < activ.length; m++) {
      activ[m].classList.toggle("show");
    }
    title = dropBtn[i].children[0];
    myDropdown[i].classList.toggle("show");
  });
}
for (var k = 0; k < option.length; k++) {
  option[k].addEventListener("click", function (e) {
    title.innerHTML = this.innerHTML;

    this.parentElement.classList.remove("show");
  });
}