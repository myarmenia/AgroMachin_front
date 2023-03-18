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
  modal_form = document.querySelectorAll("[data-checkboxes-form]"),
  select_delay = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--select-delay"
    )
  );

// ==================================================================
// ==================================================================
// ==================================================================

// ---------------------------------
// Input cunstucturing
// ---------------------------------
function randomId() {
  const word = "qwertyuiop_asdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  let id = "";
  for (let i = 0; i < 7; i++) {
    id += word[Math.floor(Math.random() * word.length)];
  }
  return id;
}
function createInputs(rootElement = document) {
  rootElement.querySelectorAll(".input-wrap").forEach((input, i) => {
    const placeholder = input.placeholder,
      id = input.id || randomId(),
      group = input.parentElement;

    if (input.value) group.classList.add("focus");
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

  rootElement
    .querySelectorAll(".main-label, .input-wrap")
    .forEach((elem, i) => {
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
}
createInputs();

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

function openSelect(e) {
  e.stopPropagation();
  const select = this.closest(".select_mate"),
    ul = select.querySelector("ul"),
    icon = select.querySelector(".icon_select_mate.icon"),
    ul_cont_li = select.querySelectorAll("li"),
    slect_open = select.getAttribute("data-is-open");
  var hg = 0;

  document
    .querySelectorAll("[data-mate-select='active']")
    .forEach((select1) => {
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
    ul.style.height = hg + 3 + "px";
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

function createSelectOptions(rootElement = document) {
  const custom_selects = rootElement.querySelectorAll(
    "[data-mate-select='active']"
  );
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

    optionsUl.style.transitionDuration =
      Math.min(select_delay, select_optiones.length * 100) + "ms";

    custom_selects[e].setAttribute("data-is-open", "false");

    for (var i = 0; i < select_optiones.length; i++) {
      const li = document.createElement("li");
      if (select_optiones[i].selected) {
        li.className = "active";
        placeholder.innerHTML = select_optiones[i].innerHTML;
      }
      li.setAttribute("data-index", i);
      li.addEventListener("click", setSelectOption);

      li.innerHTML = select_optiones[i].innerHTML;

      window.addEventListener("click", function (e) {
        if (e.target != li) closeSelectByElem(li);
      });
      ul_cont.appendChild(li);
    }
  }

  rootElement.querySelectorAll(".select-title").forEach((el) => {
    el.addEventListener("click", openSelect);
  });
}

window.onload = function () {
  createSelectOptions();
};

// custom select Art

// --------------------------------------------------------------------
// Modal checkboxes
// --------------------------------------------------------------------
modal_form.forEach((el) => {
  el.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(e.target),
      checkboxes = formData.getAll("modal-checkbox"),
      form_id = this.getAttribute("data-checkboxes-form"),
      checkboxes_ul = document.querySelector(
        `[data-checkboxes-ul='${form_id}']`
      ),
      checkboxes_input = document.querySelector(
        `[data-checkboxes-input='${form_id}']`
      ),
      form_items = [...this.elements]
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
      form_items.forEach(([el, span]) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div>
              <span>${span.innerHTML}</span>
              <button type="button" 
                class="transaction-type-ul-delete" 
                data-checkboxes-delete='${el.value}'
                  >&#x2715;
              </button>
            </div>`;
        checkboxes_ul.append(li);
        hideModal();

        li.querySelector(".transaction-type-ul-delete").addEventListener(
          "click",
          function (e) {
            const id = e.target.getAttribute("data-checkboxes-delete");
            let input_value = checkboxes_input.value.split(",");
            checkboxes_input.value = input_value.filter((i) => i !== id);
            e.target.closest("li").remove();
          }
        );
      });
    }
  });
});
// ====================================================================

// --------------------------------------------------------------------
// Search select && input
// --------------------------------------------------------------------
const search_select = document.querySelectorAll(".search-select-box input");
search_select.forEach((el) => {
  const sel_container = el.closest(".search-select-box"),
    sel_options = sel_container.querySelectorAll(".search-select-option");

  sel_options.forEach((ev) => {
    if (sel_container.querySelector("input").value == ev.innerText.trim()) {
      ev.classList.add("active");
    }
  });

  el.addEventListener("focus", function () {
    const container = this.closest(".search-select-box"),
      search_input = this,
      options_box = container.querySelector(".search-select-options");

    let hg =
      options_box.children.length * options_box.children[0].offsetHeight + 3;
    options_box.style.height = hg + "px";
    options_box.style.transitionDuration =
      Math.min(select_delay, options_box.children.length * 100) + "ms";

    setTimeout(
      () => (options_box.style.overflow = "auto"),
      Math.min(select_delay, options_box.children.length * 100)
    );

    options_box.querySelectorAll(".search-select-option").forEach((option) => {
      option.addEventListener("click", function (e) {
        options_box
          .querySelectorAll(".search-select-option")
          .forEach((elem) => elem.classList.remove("active"));
        e.target.classList.add("active");
        // const option_value = e.target.getAttribute("data-value");
        const option_value = e.target.innerText.trim();
        search_input.value = option_value;
        search_input.closest(".input-group").classList.add("focus");
      });
    });
  });
  el.addEventListener("blur", function () {
    const container = this.closest(".search-select-box"),
      options_box = container.querySelector(".search-select-options");

    options_box.style.overflow = "hidden";
    options_box.style.height = 0;
  });
});
// ====================================================================
