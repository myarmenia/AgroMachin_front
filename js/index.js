/** @format */

// active link

// active link

let arrow = document.querySelectorAll(".arrow");
let iocn_link = document.getElementsByClassName("iocn-link");
let activeAccordion = document.getElementsByClassName("active-accordion");
for (var i = 0; i < arrow.length; i++) {
  iocn_link[i].addEventListener("click", function (e) {
    let panel = this.nextElementSibling;

    this.classList.toggle("active-accordion");

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 50 + "px";
    }
  });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
const header = document.getElementsByTagName("header")[0];

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  header.classList.toggle("header-active");
});

// dropdown

let dropBtn = document.querySelectorAll(".dropbtn");
let myDropdown = document.querySelectorAll(".myDropdown");
let option = document.querySelectorAll(".option");
let title = "";
const activ = document.getElementsByClassName("show");
for (let i = 0; i < dropBtn.length; i++) {
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

// dropdown

// menu activ
const pages_link = document.querySelectorAll(".nav-links > li");
const menuIconImg = document.querySelectorAll(".bx-grid-alt"); //img
const link_name = document.querySelectorAll("a .link_name"); //span
const chevron = document.querySelectorAll(".bx"); //span
pages_link.forEach((el, i) => {
  el.addEventListener("click", function () {
    menuIconImg.forEach((elem, index) => {
      if (elem.src.includes("(active).svg")) {
        link_name[index].classList.remove("link-active");
        elem.src = menuIconImg[index].src.replace("(active).svg", ".svg");
        chevron[index].style.color = "#fff";
      }
    });
    menuIconImg[i].src = menuIconImg[i].src.replace(".svg", "(active).svg");
    link_name[i].classList.toggle("link-active");
  });
});

// focused
const coustm_input = document.getElementsByClassName("coustm_input");
for (let i = 0; i < coustm_input.length; i++) {
  const element = coustm_input[i];
  element.addEventListener("click", (e) => {
    const input = document.getElementsByClassName("input");
    const input_container = document.getElementsByClassName("input_container");
    const label_container = document.getElementsByClassName("label_container");
    for (let k = 0; k < input.length; k++) {
      if (i === k) {
        input[k].focus();
        input[k].classList.add("input_focused");
      }
    }
    for (let k = 0; k < input_container.length; k++) {
      if (i === k) {
        input_container[k].classList.add("input_container_focused");
      }
    }
    for (let k = 0; k < label_container.length; k++) {
      if (i === k) {
        label_container[k].classList.add("label_container_focused");
      }
    }
  });
}
//blur
const input = document.getElementsByClassName("input");
for (let i = 0; i < input.length; i++) {
  const element = input[i];
  console.log(element.value);
  element.addEventListener("blur", () => {
    const input_container = document.getElementsByClassName("input_container");
    const label_container = document.getElementsByClassName("label_container");
    console.log(element.value);
    if (!element.element.value) {
      element.classList.remove("input_focused");
      input_container[i].classList.remove("input_container_focused");
      label_container[i].classList.remove("label_container_focused");
    }
  });
}
// sign out
const signOutBtn = document.getElementsByClassName("signOutBtn")[0];
const userSignOutContainer = document.getElementsByClassName("userSignOut")[0];
signOutBtn.addEventListener("click", () => {
  console.log(userSignOutContainer);
  userSignOutContainer.classList.toggle("active");
});
// sign out
