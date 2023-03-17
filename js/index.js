// ------------------------------------------------------------------
//  Variables
// ------------------------------------------------------------------
const cur_table = document.getElementById("table-route"),
  remove_form = document.getElementById("modal-remove-form"),
  remove_modal = document.getElementById("remove-modal"),
  accept_btn = document.getElementById("modal-accept-btn"),
  confirm_modal = document.getElementById("confirm-modal"),
  table_route_delete = cur_table && cur_table.attributes["data-delete"].value,
  table_route_route = cur_table && cur_table.attributes["data-route"].value,
  custom_selects = document.querySelectorAll("[data-mate-select='active']");
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
// // ============================================================================
// custom select Art
window.onload = function () {
  for (var e = 0; e < custom_selects.length; e++) {
    const optionsContainer = document.createElement("div"),
      optionsUl = document.createElement("ul");
    optionsContainer.className = "cont_list_select_mate";
    optionsUl.className = "cont_select_int";
    optionsUl.style.height = "0";
    optionsContainer.append(optionsUl);
    custom_selects[e].append(optionsContainer);

    const ul_cont = custom_selects[e].querySelector("ul"),
      select_ = custom_selects[e].querySelector("select"),
      select_optiones = select_.options,
      placeholder = custom_selects[e].querySelector(".selecionado_opcion");

    custom_selects[e].setAttribute("data-is-open", "false");

    for (var i = 0; i < select_optiones.length; i++) {
      const li = document.createElement("li");
      if (
        select_optiones[i].selected == true ||
        select_.value == select_optiones[i].innerHTML
      ) {
        li.className = "active";
        placeholder.innerHTML = select_optiones[i].innerHTML;
      }
      li.setAttribute("data-index", i);
      li.addEventListener("click", setSelectOption);

      li.innerHTML = select_optiones[i].innerHTML;

      window.addEventListener("click", function (e) {
        if (e.target != li) {
          closeSelectByElem(li);
        }
      });
      ul_cont.appendChild(li);
    }
  }
};
function openSelect(e) {
  e.stopPropagation();
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
    icon1.style.transform = "rotate(0deg)";
    if (select != select1) {
      select1.setAttribute("data-is-open", "false");
    }
  });
  ul_cont_li.forEach((el) => (hg += el.offsetHeight));
  if (slect_open == "false") {
    select.setAttribute("data-is-open", "true");
    ul.style.height = hg + "px";
    if (icon) icon.style.transform = "rotate(180deg)";
  } else {
    select.setAttribute("data-is-open", "false");
    ul.style.height = "0px";
    if (icon) icon.style.transform = "rotate(0deg)";
  }
}
function closeSelectByElem(elem) {
  const select = elem.closest(".select_mate"),
    ul = select.querySelector("ul"),
    icon = select.querySelector(".icon_select_mate.icon");

  ul.style.height = "0px";
  if (icon) icon.style.transform = "rotate(0deg)";
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
  closeSelectByElem(this);
}
document.querySelectorAll(".select-title").forEach((el) => {
  el.addEventListener("click", openSelect);
});
// custom select Art

// --------------------------------------------------------------------
// Modal checkboxes
// --------------------------------------------------------------------
const modal_form = document.querySelectorAll("[data-checkboxes-form]");

modal_form.forEach((el) => {
  el.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(111);

    const formData = new FormData(e.target),
      checkboxes = formData.getAll("modal-checkbox"),
      form_id = this.getAttribute("data-checkboxes-form"),
      checkboxes_ul = document.querySelector(
        `[data-checkboxes-ul='${form_id}']`
      ),
      checkboxes_input = document.querySelector(
        `[data-checkboxes-input='${form_id}']`
      ),
      form_labels = [...this.elements]
        .filter((el) => el.tagName.toLowerCase() !== "button")
        .map((el) => {
          if (checkboxes.some((e) => el.value == e)) {
            return [el, el.nextElementSibling];
          }
        })
        .filter((el) => el !== undefined);

    if (checkboxes.length) {
      checkboxes_input.value = checkboxes;
      checkboxes_ul.innerHTML = "";
      form_labels.forEach(([el, span]) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div>
              <span>${span.innerHTML}</span>
              <button type="button" 
                class="transaction-type-ul-delete" 
                data-checkboxes-delete='${el.value}'
                >
                &#x2715;
              </button>
            </div>`;
        checkboxes_ul.append(li);
        hideModal();

        li.querySelector(".transaction-type-ul-delete").addEventListener(
          "click",
          function (e) {
            const id = e.target.getAttribute("data-checkboxes-delete");
            let input_value = checkboxes_input.value.split(",");
            checkboxes_input.value = input_value.filter((el) => el !== id);
            e.target.closest("li").remove();
          }
        );
      });
    }
  });
});
// ====================================================================
