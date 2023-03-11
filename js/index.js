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
function randomNum() {
  const word = "qwertyuiop_asdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  let id = "";
  for (let i = 0; i < 7; i++) {
    id += word[Math.floor(Math.random() * word.length)];
  }
  return id;
}
document.querySelectorAll(".input-wrap").forEach((input, i) => {
  const placeholder = input.placeholder,
    id = input.id || randomNum(),
    group = input.parentElement;

  if (input.value) {
    group.classList.add("focus");
  }
  input.remove();

  const box = document.createElement("div"),
    label = document.createElement("label");

  box.className = "input-box";
  label.className = "main-label";
  label.innerHTML = placeholder;
  label.setAttribute("for", id);
  input.id = id;
  box.append(label, input);

  group.prepend(box);
});
document.querySelectorAll(".main-label, .input-wrap").forEach((elem, i) => {
  elem.addEventListener("focus", function (event) {
    event.stopPropagation();
    if (!this.value) {
      this.closest(".input-group").classList.remove("focus");
    }
    this.closest(".input-group").classList.add("focus");
  });
  elem.addEventListener("blur", function (event) {
    event.stopPropagation();
    if (!this.value) {
      this.closest(".input-group").classList.remove("focus");
    }
  });
});
// ============================================================
// ============================================================
// ============================================================
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

  custom_selects.forEach((el) => {
    el.closest(".custom-select").classList.remove("options-open");
  });

  const options = this.closest(".custom-select").children[1],
    select = this.closest(".custom-select"),
    input = this.children[0],
    span = this.children[1];

  select.classList.toggle("options-open");

  [...options.children].forEach((option, i) => {
    if (option.attributes["data-selected"]) {
      option.classList.add("option-active");
    }
    option.addEventListener("click", function () {
      input.value = this.attributes["data-value"].value;
      span.innerText = option.innerText.trim();
      select.classList.remove("options-open");

      [...options.children].forEach((e) => {
        e.removeAttribute("data-selected");
        e.classList.remove("option-active");
      });
      this.classList.add("option-active");
      this.setAttribute("data-selected", true);

      input.dispatchEvent(new Event("input"));
    });
  });
}

custom_selects.forEach((select, i) => {
  const input = select.children[0],
    span = select.children[1];

  select.addEventListener("click", selectToggle);
  const options = select.closest(".custom-select").children[1];

  window.addEventListener("click", (wEvent) => {
    if (wEvent.target !== options) {
      custom_selects.forEach((sel) => {
        sel.closest(".custom-select").classList.remove("options-open");
      });
    }
  });
  [...options.children].forEach((option) => {
    if (option.attributes["data-selected"]) {
      option.classList.add("option-active");
      input.value = option.attributes["data-value"].value;
      span.innerText = option.innerText.trim();

      [...options.children].forEach((e) => {
        e.removeAttribute("data-selected");
        e.classList.remove("option-active");
      });

      option.classList.add("option-active");
      option.setAttribute("data-selected", true);
    }
  });
});

// ============================================================================

// ----------------------------------------------------------------------------
// Form validation
// ----------------------------------------------------------------------------
// Elements in form must have "input-should-validate" className
function formValidate(e) {
  const formItems = this.elements;

  [...formItems].forEach((elem) => {
    if (
      elem.tagName.toLowerCase() !== "button" &&
      elem.classList.contains("input-should-validate")
    ) {
      const selectBox = elem.closest(".custom-select");
      const item = selectBox || elem;

      elem.classList.add("input-validate");
      if (!elem.value) {
        e.preventDefault();

        item.classList.add("input-invalid");
        if (
          !item.nextElementSibling ||
          (item.nextElementSibling &&
            item.nextElementSibling.className !== "input-error-message")
        ) {
          const error = document.createElement("div");
          error.className = "input-error-message";
          error.innerHTML =
            item.attributes["data-error"]?.value || "error arya";
          item.after(error);
        }
      } else {
        if (
          item.nextElementSibling &&
          item.nextElementSibling.classList.contains("input-error-message")
        ) {
          item.nextElementSibling.remove();
        }
        item.classList.remove("input-invalid");
      }
    }
  });

  document.querySelectorAll(".input-validate").forEach((el) => {
    el.addEventListener("input", function () {
      const selectBox = this.closest(".custom-select");
      const item = selectBox || this;
      if (!this.value) {
        if (
          !item.nextElementSibling ||
          (item.nextElementSibling &&
            !item.nextElementSibling.classList.contains("input-error-message"))
        ) {
          const error = document.createElement("div");
          error.className = "input-error-message";
          error.innerHTML =
            item.attributes["data-error"]?.value || "error arya";
          item.after(error);
        }
        item.classList.add("input-invalid");
      } else {
        if (
          item.nextElementSibling &&
          item.nextElementSibling.classList.contains("input-error-message")
        ) {
          console.log(item.nextElementSibling);
          item.nextElementSibling.remove();
        }
        item.classList.remove("input-invalid");
      }
    });
  });
}
// ============================================================================
