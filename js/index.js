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
// Custom select hin
// function selectToggle(e) {
//   e.stopPropagation();

//   custom_selects.forEach((el) => {
//     el.closest(".custom-select").classList.remove("options-open");
//   });

//   const options = this.closest(".custom-select").children[1],
//     select = this.closest(".custom-select"),
//     input = this.children[0],
//     span = this.children[1];

//   select.classList.toggle("options-open");

//   [...options.children].forEach((option, i) => {
//     if (option.attributes["data-selected"]) {
//       option.classList.add("option-active");
//     }
//     option.addEventListener("click", function () {
//       input.value = this.attributes["data-value"].value;
//       span.innerText = option.innerText.trim();
//       select.classList.remove("options-open");

//       [...options.children].forEach((e) => {
//         e.removeAttribute("data-selected");
//         e.classList.remove("option-active");
//       });
//       this.classList.add("option-active");
//       this.setAttribute("data-selected", true);

//       input.dispatchEvent(new Event("input"));
//     });
//   });
// }

// custom_selects.forEach((select, i) => {
//   const input = select.children[0],
//     span = select.children[1];

//   select.addEventListener("click", selectToggle);
//   const options = select.closest(".custom-select").children[1];

//   window.addEventListener("click", (wEvent) => {
//     if (wEvent.target !== options) {
//       custom_selects.forEach((sel) => {
//         sel.closest(".custom-select").classList.remove("options-open");
//       });
//     }
//   });
//   [...options.children].forEach((option) => {
//     if (option.attributes["data-selected"]) {
//       option.classList.add("option-active");
//       input.value = option.attributes["data-value"].value;
//       span.innerText = option.innerText.trim();

//       [...options.children].forEach((e) => {
//         e.removeAttribute("data-selected");
//         e.classList.remove("option-active");
//       });

//       option.classList.add("option-active");
//       option.setAttribute("data-selected", true);
//     }
//   });
// });

// ============================================================================

// ----------------------------------------------------------------------------
// Form validation
// ----------------------------------------------------------------------------
// Elements in form must have "input-should-validate" className
// function formValidate(e) {
//   const formItems = this.elements;

//   [...formItems].forEach((elem) => {
//     if (
//       elem.tagName.toLowerCase() !== "button" &&
//       elem.classList.contains("input-should-validate")
//     ) {
//       const selectBox = elem.closest(".custom-select");
//       const item = selectBox || elem;

//       elem.classList.add("input-validate");
//       if (!elem.value) {
//         e.preventDefault();

//         item.classList.add("input-invalid");
//         if (
//           !item.nextElementSibling ||
//           (item.nextElementSibling &&
//             item.nextElementSibling.className !== "input-error-message")
//         ) {
//           const error = document.createElement("div");
//           error.className = "input-error-message";
//           error.innerHTML =
//             item.attributes["data-error"]?.value || "error arya";
//           item.after(error);
//         }
//       } else {
//         if (
//           item.nextElementSibling &&
//           item.nextElementSibling.classList.contains("input-error-message")
//         ) {
//           item.nextElementSibling.remove();
//         }
//         item.classList.remove("input-invalid");
//       }
//     }
//   });

//   document.querySelectorAll(".input-validate").forEach((el) => {
//     el.addEventListener("input", function () {
//       const selectBox = this.closest(".custom-select");
//       const item = selectBox || this;
//       if (!this.value) {
//         if (
//           !item.nextElementSibling ||
//           (item.nextElementSibling &&
//             !item.nextElementSibling.classList.contains("input-error-message"))
//         ) {
//           const error = document.createElement("div");
//           error.className = "input-error-message";
//           error.innerHTML =
//             item.attributes["data-error"]?.value || "error arya";
//           item.after(error);
//         }
//         item.classList.add("input-invalid");
//       } else {
//         if (
//           item.nextElementSibling &&
//           item.nextElementSibling.classList.contains("input-error-message")
//         ) {
//           console.log(item.nextElementSibling);
//           item.nextElementSibling.remove();
//         }
//         item.classList.remove("input-invalid");
//       }
//     });
//   });
// }
// // ============================================================================
// custom select Art
window.onload = function () {
  crear_select();
};

function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

var li = new Array();
function crear_select() {
  var div_cont_select = document.querySelectorAll(
    "[data-mate-select='active']"
  );
  var select_ = "";
  for (var e = 0; e < div_cont_select.length; e++) {
    div_cont_select[e].setAttribute("data-indx-select", e);
    div_cont_select[e].setAttribute("data-selec-open", "false");
    var ul_cont = document.querySelectorAll(
      "[data-indx-select='" + e + "'] > .cont_list_select_mate > ul"
    );
    select_ = document.querySelectorAll(
      "[data-indx-select='" + e + "'] >select"
    )[0];
    if (isMobileDevice()) {
      select_.addEventListener("change", function () {
        _select_option(select_.selectedIndex, e);
      });
    }
    var select_optiones = select_.options;
    document
      .querySelectorAll(
        "[data-indx-select='" + e + "']  > .selecionado_opcion "
      )[0]
      .setAttribute("data-n-select", e);
    document
      .querySelectorAll(
        "[data-indx-select='" + e + "']  > .icon_select_mate "
      )[0]
      .setAttribute("data-n-select", e);
    for (var i = 0; i < select_optiones.length; i++) {
      li[i] = document.createElement("li");
      if (
        select_optiones[i].selected == true ||
        select_.value == select_optiones[i].innerHTML
      ) {
        li[i].className = "active";
        document.querySelector(
          "[data-indx-select='" + e + "']  > .selecionado_opcion "
        ).innerHTML = select_optiones[i].innerHTML;
      }
      li[i].setAttribute("data-index", i);
      li[i].setAttribute("data-selec-index", e);
      // funcion click al selecionar
      li[i].addEventListener("click", function () {
        _select_option(
          this.getAttribute("data-index"),
          this.getAttribute("data-selec-index")
        );
      });

      li[i].innerHTML = select_optiones[i].innerHTML;
      ul_cont[0].appendChild(li[i]);
    } // Fin For select_optiones
  } // fin for divs_cont_select
} // Fin Function

var cont_slc = 0;
function open_select(idx) {
  var idx1 = idx.getAttribute("data-n-select");
  var ul_cont_li = document.querySelectorAll(
    "[data-indx-select='" + idx1 + "'] .cont_select_int > li"
  );
  var hg = 0;
  var slect_open = document
    .querySelectorAll("[data-indx-select='" + idx1 + "']")[0]
    .getAttribute("data-selec-open");
  var slect_element_open = document.querySelectorAll(
    "[data-indx-select='" + idx1 + "'] select"
  )[0];
  if (isMobileDevice()) {
    if (window.document.createEvent) {
      // All
      var evt = window.document.createEvent("MouseEvents");
      evt.initMouseEvent(
        "mousedown",
        false,
        true,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      slect_element_open.dispatchEvent(evt);
    } else if (slect_element_open.fireEvent) {
      // IE
      slect_element_open.fireEvent("onmousedown");
    } else {
      slect_element_open.click();
    }
  } else {
    for (var i = 0; i < ul_cont_li.length; i++) {
      hg += ul_cont_li[i].offsetHeight;
    }
    if (slect_open == "false") {
      document
        .querySelectorAll("[data-indx-select='" + idx1 + "']")[0]
        .setAttribute("data-selec-open", "true");
      document.querySelectorAll(
        "[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul"
      )[0].style.height = hg + "px";
      document.querySelectorAll(
        "[data-indx-select='" + idx1 + "'] > .icon_select_mate.icon"
      )[0].style.transform = "rotate(180deg)";
    } else {
      document
        .querySelectorAll("[data-indx-select='" + idx1 + "']")[0]
        .setAttribute("data-selec-open", "false");
      document.querySelectorAll(
        "[data-indx-select='" + idx1 + "'] > .icon_select_mate"
      )[0].style.transform = "rotate(0deg)";
      document.querySelectorAll(
        "[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul"
      )[0].style.height = "0px";
    }
  }
} // fin function open_select

function salir_select(indx) {
  var select_ = document.querySelectorAll(
    "[data-indx-select='" + indx + "'] > select"
  )[0];
  document.querySelectorAll(
    "[data-indx-select='" + indx + "'] > .cont_list_select_mate > ul"
  )[0].style.height = "0px";
  document.querySelector(
    "[data-indx-select='" + indx + "'] > .icon_select_mate.icon"
  ).style.transform = "rotate(0deg)";
  document
    .querySelectorAll("[data-indx-select='" + indx + "']")[0]
    .setAttribute("data-selec-open", "false");
}

function _select_option(indx, selc) {
  if (isMobileDevice()) {
    selc = selc - 1;
  }
  var select_ = document.querySelectorAll(
    "[data-indx-select='" + selc + "'] > select"
  )[0];

  var li_s = document.querySelectorAll(
    "[data-indx-select='" + selc + "'] .cont_select_int > li"
  );
  var p_act = (document.querySelectorAll(
    "[data-indx-select='" + selc + "'] > .selecionado_opcion"
  )[0].innerHTML = li_s[indx].innerHTML);
  var select_optiones = document.querySelectorAll(
    "[data-indx-select='" + selc + "'] > select > option"
  );
  for (var i = 0; i < li_s.length; i++) {
    if (li_s[i].className == "active") {
      li_s[i].className = "";
    }
    li_s[indx].className = "active";
  }
  select_optiones[indx].selected = true;
  select_.selectedIndex = indx;
  select_.onchange();
  salir_select(selc);
}

// custom select Art
