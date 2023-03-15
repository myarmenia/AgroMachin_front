const form_login = document.getElementById("form_log_in");
const passwordError = document.getElementsByClassName("password_error")[0];
const newPasswordError =
  document.getElementsByClassName("newpassword_error")[0];
const newPasswordError1 =
  document.getElementsByClassName("newpassword_error")[1];
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
  passwordError.style.display = "none";
  newPasswordError.style.display = "block";
  newPasswordError1.style.display = "block";
  form_login.style.height = "260px";
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
//custom select Art
custom_selects = document.querySelectorAll("[data-mate-select='active']");
window.onload = function () {
  for (var e = 0; e < custom_selects.length; e++) {
    const optionsContainer = document.createElement("div"),
      optionsUl = document.createElement("ul");
    optionsContainer.className = "cont_list_select_mate";
    optionsUl.className = "cont_select_int";
    optionsUl.style.height = "0";
    optionsContainer.append(optionsUl);
    custom_selects[e].append(optionsContainer);

    var li = [];
    const ul_cont = custom_selects[e].querySelector("ul"),
      select_ = custom_selects[e].querySelector("select"),
      select_optiones = select_.options,
      placeholder = custom_selects[e].querySelector(".selecionado_opcion");

    custom_selects[e].setAttribute("data-is-open", "false");

    for (var i = 0; i < select_optiones.length; i++) {
      li[i] = document.createElement("li");
      if (
        select_optiones[i].selected == true ||
        select_.value == select_optiones[i].innerHTML
      ) {
        li[i].className = "active";
        placeholder.innerHTML = select_optiones[i].innerHTML;
      }
      li[i].setAttribute("data-index", i);
      li[i].addEventListener("click", setSelectOption);

      li[i].innerHTML = select_optiones[i].innerHTML;
      ul_cont.appendChild(li[i]);
    }
  }
};
function openSelect() {
  const select = this.closest(".select_mate"),
    ul = select.querySelector("ul"),
    icon = select.querySelector(".icon_select_mate.icon"),
    ul_cont_li = select.querySelectorAll("li"),
    slect_open = select.getAttribute("data-is-open");
  var hg = 0;
  custom_selects.forEach((select1) => {
    const ul1 = select1.querySelector("ul"),
      icon1 = select1.querySelector(".icon_select_mate");
    ul1.style.height = "0px";
    ///icon1.style.transform = "rotate(0deg)";
    if (select != select1) {
      select1.setAttribute("data-is-open", "false");
    }
  });
  ul_cont_li.forEach((el) => (hg += el.offsetHeight));
  if (slect_open == "false") {
    select.setAttribute("data-is-open", "true");
    ul.style.height = hg + "px";
    //icon.style.transform = "rotate(180deg)";
  } else {
    select.setAttribute("data-is-open", "false");
    //icon.style.transform = "rotate(0deg)";
    ul.style.height = "0px";
  }
}
function closeSelectByLi(li) {
  const select = li.closest(".select_mate"),
    ul = select.querySelector("ul"),
    icon = select.querySelector(".icon_select_mate.icon");
  console.log(select);
  ul.style.height = "0px";
  //icon.style.transform = "rotate(0deg)";
  select.setAttribute("data-is-open", "false");
}
function setSelectOption() {
  const select_box = this.closest(".select_mate"),
    title = select_box.querySelector(".selecionado_opcion"),
    indx = +this.getAttribute("data-index"),
    select_ = select_box.querySelector("select"),
    li_s = select_box.querySelectorAll("li"),
    select_optiones = select_.querySelectorAll("option");
  title.innerHTML = this.innerHTML;
  li_s.forEach((li) => li.classList.remove("active"));
  li_s[indx].className = "active";
  select_optiones[indx].selected = true;
  select_.selectedIndex = indx;
  select_.onchange();
  closeSelectByLi(this);
}
document.querySelectorAll(".select-title").forEach((el) => {
  el.addEventListener("click", openSelect);
});
// custom select Art
