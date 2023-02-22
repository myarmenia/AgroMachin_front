const form_login = document.getElementById("form_log_in");
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
});
