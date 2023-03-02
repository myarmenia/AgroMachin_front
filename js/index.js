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
let title;
const activ = document.getElementsByClassName("show");
for (let i = 0; i < dropBtn.length; i++) {
  dropBtn[i].addEventListener("click", function (e) {
    for (let m = 0; m < activ.length; m++) {
      activ[m].classList.toggle("show");
    }
    myDropdown[i].classList.toggle("show");
    title = dropBtn[i].children[0];
  });
}

for (var k = 0; k < option.length; k++) {
  option[k].addEventListener("click", function (e) {
    title.innerHTML = this.innerHTML;

    this.parentElement.classList.remove("show");
  });
}

// dropdown
// ------------------------------------------------------------------
// Modal toggling
// ------------------------------------------------------------------
const modal_container = document.querySelector(".modal-container");
function showModal(name) {
  const modal = document.querySelector(name);

  document.body.classList.add("scroll-disabled");
  modal_container.style.display = "block";
  modal.style.display = "block";

  setTimeout(() => {
    // modal.classList.remove("modal-close");
    // modal_container.classList.remove("modal-close");
    modal_container.classList.add("modal-open");
    modal.classList.add("modal-open");
  }, 1);
}
function hideModal() {
  const modals = document.getElementsByClassName("modal");
  for (let i = 0; i < modals.length; i++) {
    const modal = modals[i];

    modal.classList.remove("modal-open", "modal-open-sm");
    modal_container.classList.remove("modal-open");

    // modal_container.classList.add("modal-close");
    // modal.classList.add("modal-close");
    setTimeout(() => {
      modal_container.style.display = "none";
      modal.style.display = "none";
      document.body.classList.remove("scroll-disabled");
    }, 300);
  }
}
document.querySelectorAll(".modal .close").forEach((el) => {
  el.addEventListener("click", hideModal);
});
// document.getElementById("modal-deny-btn").addEventListener("click", hideModal);
// document
//   .getElementById("modal-accept-btn")
//   .addEventListener("click", hideModal);

window.addEventListener("click", (e) => {
  if (e.target == modal_container) {
    hideModal();
  }
});

// ==================================================================
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
// menu activ
