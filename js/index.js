// ------------------------------------------------------------------
//  Variables
// ------------------------------------------------------------------
const cur_table = document.getElementById("table-route"),
  remove_form = document.getElementById("modal-remove-form"),
  remove_modal = document.getElementById("remove-modal"),
  accept_btn = document.getElementById("modal-accept-btn"),
  confirm_modal = document.getElementById("confirm-modal"),
  table_route_delete = cur_table.attributes["data-delete"].value,
  table_route_route = cur_table.attributes["data-route"].value;

// ==================================================================
// ==================================================================
// ==================================================================
//
// Input cunstucturing
const formWrap = document.querySelectorAll(".form1Wrap");
const handleFocus = (event) => {
  event.target.closest(".controlGroup").classList.add("focus");
};
const handleBlur = (event) => {
  const target = event.target;
  const controlGroup = target.closest(".controlGroup");
  if (!target.value) {
    controlGroup.classList.remove("focus");
  }
};
formWrap.forEach((el) => {
  el.addEventListener("focusin", handleFocus);
});
formWrap.forEach((el) => {
  el.addEventListener("focusout", handleBlur);
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

// ----------------------------------------------------------------------------
// Open modal with checkbox
document.querySelectorAll(".toggle-checkbox").forEach((el, i) => {
  el.setAttribute("data-index", i);
  el.setAttribute("data-checked", el.checked);
  el.addEventListener("click", function () {
    const checkbox_id = this.attributes["data-index"].value,
      checkbox_checked =
        this.attributes["data-checked"].value === "false" ? false : true;

    this.checked = checkbox_checked;

    accept_btn.href = `${table_route_route}/${checkbox_id}/${
      checkbox_checked ? 0 : 1
    }`;
    showModal("#confirm-modal");
  });
});
// ============================================================================

// ----------------------------------------------------------------------------
// Open modal with trashbin
document.querySelectorAll(".trashbin").forEach((el, i) => {
  el.setAttribute("data-index", i);
  el.addEventListener("click", function () {
    const checkbox_id = this.attributes["data-index"].value;

    remove_form.action = `${table_route_delete}/${checkbox_id}`;
    showModal("#remove-modal");
  });
});
// ============================================================================
// sign out
const signOutBtn = document.getElementsByClassName("signOutBtn")[0];
const userSignOutContainer = document.getElementsByClassName("userSignOut")[0];
signOutBtn.addEventListener("click", () => {
  userSignOutContainer.classList.toggle("active");
});
// sign out
