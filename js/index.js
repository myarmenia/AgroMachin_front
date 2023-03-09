// ------------------------------------------------------------------
//  Variables
// ------------------------------------------------------------------
const cur_table = document.getElementById("table-route"),
  remove_form = document.getElementById("modal-remove-form"),
  remove_modal = document.getElementById("remove-modal"),
  accept_btn = document.getElementById("modal-accept-btn"),
  confirm_modal = document.getElementById("confirm-modal"),
  custom_selects = document.querySelectorAll(".select-heading"),
  table_route_delete = cur_table && cur_table.attributes["data-delete"].value,
  table_route_route = cur_table && cur_table.attributes["data-route"].value;
// ==================================================================
// ==================================================================
// ==================================================================

// ---------------------------------
// Input cunstucturing
// ---------------------------------
document.querySelectorAll(".input-wrap").forEach((input, i) => {
  const placeholder = input.placeholder,
    id = input.id,
    className = input.className;
  group = input.parentElement;

  group.innerHTML = `
    <div class="input-box ${input.value ? "focus" : ""}">
      <span class="main-label">${placeholder}</span>
      <input placeholder="${placeholder}" class="${className}" value="${
    input.value
  }" />
    </div>
  `;
});

document.querySelectorAll(".main-label, .input-wrap").forEach((elem, i) => {
  elem.addEventListener("focus", function (event) {
    event.stopPropagation();
    if (!this.value) {
      this.parentElement.classList.remove("focus");
    }
    this.parentElement.classList.add("focus");
  });
});

document.querySelectorAll(".main-label, .input-wrap").forEach((elem, i) => {
  elem.addEventListener("blur", function (event) {
    event.stopPropagation();
    if (!this.value) {
      this.parentElement.classList.remove("focus");
    }
  });
});
// ==================================================================
// ==================================================================
// ==================================================================

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

// sign out
const signOutBtn = document.getElementsByClassName("signOutBtn")[0];
const userSignOutContainer = document.getElementsByClassName("userSignOut")[0];
signOutBtn.addEventListener("click", () => {
  userSignOutContainer.classList.toggle("active");
});
// sign out

// ----------------------------------------------------------------------------
// Custom select
function selectToggle(e) {
  e.stopPropagation();

  const options = this.closest(".custom-select").children[1],
    input = this.children[0],
    span = this.children[1];
  options.classList.toggle("options-open");

  [...options.children].forEach((option, i) => {
    window.addEventListener("click", (e) => {
      if (e.target != option) {
        options.classList.remove("options-open");
      }
    });
    if (option.attributes["data-selected"]) {
      option.classList.add("option-active");
    }
    option.addEventListener("click", function () {
      input.value = this.attributes["data-value"].value;
      span.innerText = option.innerText;
      options.classList.remove("options-open");

      [...options.children].forEach((e) => {
        e.removeAttribute("data-selected");
        e.classList.remove("option-active");
      });
      this.classList.add("option-active");
      this.setAttribute("data-selected", true);
    });
  });
}

function loggg() {
  console.log(inpppp.value);
}

custom_selects.forEach((select, i) => {
  select.addEventListener("click", selectToggle);
});

// ============================================================================
