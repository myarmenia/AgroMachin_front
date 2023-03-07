// ------------------------------------------------------------------
//  Variables
// ------------------------------------------------------------------
const cur_table = document.getElementById("table-route"),
  remove_btn = document.getElementById("modal-remove-btn"),
  remove_modal = document.getElementById("remove-modal"),
  accept_btn = document.getElementById("modal-accept-btn"),
  confirm_modal = document.getElementById("confirm-modal");

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

//cousm input
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

// ----------------------------------------------------------------------------
// Open modal with checkbox
document.querySelectorAll(".toggle-checkbox").forEach((el, i) => {
  el.setAttribute("data-index", i);
  el.setAttribute("data-checked", el.checked);
  el.addEventListener("click", function () {
    const checkbox_id = this.attributes["data-index"].value,
      checkbox_checked =
        this.attributes["data-checked"].value === "false" ? false : true,
      route_name = cur_table.attributes["data-route"].value;

    this.checked = checkbox_checked;

    accept_btn.href = `${route_name}/${checkbox_id}/${
      checkbox_checked ? 0 : 1
    }`;
    showModal("#confirm-modal");
    confirm_modal.setAttribute("data-modal-id", checkbox_id);
  });
});
// ============================================================================

// ----------------------------------------------------------------------------
// Open modal with trashbin
document.querySelectorAll(".trashbin").forEach((el, i) => {
  el.setAttribute("data-index", i);
  el.addEventListener("click", function () {
    const checkbox_id = this.attributes["data-index"].value,
      route_name = cur_table.attributes["data-route"].value;

    remove_btn.href = `${route_name}/${checkbox_id}`;
    showModal("#remove-modal");
    remove_modal.setAttribute("data-modal-id", checkbox_id);
  });
});
// ============================================================================
// sign out
const signOutBtn = document.getElementsByClassName("signOutBtn")[0];
const userSignOutContainer = document.getElementsByClassName("userSignOut")[0];
signOutBtn.addEventListener("click", () => {
  console.log(userSignOutContainer);
  userSignOutContainer.classList.toggle("active");
});
// sign out
