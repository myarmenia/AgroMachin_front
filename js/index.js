// ------------------------------------------------------------------
//  Variables
// ------------------------------------------------------------------
// const cur_table = document.getElementById("table-route"),
//   remove_form = document.getElementById("modal-remove-form"),
//   remove_modal = document.getElementById("remove-modal"),
//   accept_btn = document.getElementById("modal-accept-btn"),
//   confirm_modal = document.getElementById("confirm-modal"),
//   table_route_delete = cur_table && cur_table.attributes["data-delete"].value,
//   table_route_route = cur_table && cur_table.attributes["data-route"].value;
const custom_selects = document.querySelectorAll(".select-heading");

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
    ul.style.height = hg + 1 + "px";
    if (icon) icon.style.transform = "rotate(180deg)";
  } else {
    select.setAttribute("data-is-open", "false");
    ul.style.height = "0px";
    if (icon) icon.style.transform = "rotate(0deg)";
  }
}

function closeSelectByElem(elem) {
  document
    .querySelectorAll(".select_mate>.cont_list_select_mate>.cont_select_int")
    .forEach((ul) => {
      ul.style.height = "0px";
    });
  document
    .querySelectorAll(".select_mate>.icon_select_mate.icon")
    .forEach((icon) => {
      if (icon) icon.style.transform = "rotate(0deg)";
    });
  document.querySelectorAll(".select_mate").forEach((select) => {
    select.setAttribute("data-is-open", "false");
  });
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
  // select_.onchange();
  select_.dispatchEvent(new Event("change"));
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
    console.log(select_delay);

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
      ul_cont.appendChild(li);
    }
    window.addEventListener("click", function (e) {
      if ([...ul_cont.children].some((li) => li != e.target)) {
        closeSelectByElem([...ul_cont.children].find((li) => li != e.target));
      }
    });
  }

  rootElement.querySelectorAll(".select-title").forEach((el) => {
    el.addEventListener("click", openSelect);
  });
}
//drop owen checkBox
let dropbtnCheckBox = document.getElementsByClassName("dropbtnCheckBox");
let myDropdownCheckBox = document.querySelectorAll(".myDropdownCheckBox");
let chekcBoxoption = document.querySelectorAll(".option");
let check_input = document.getElementsByClassName("check_input");
const activshow = document.getElementsByClassName("show");
const boxContainer = document.getElementsByClassName("box_container");
const box_item = document.getElementsByClassName("box_item");
const closeSelectsdfhgbf = document.getElementsByClassName("new_user");

let showValus = [];
// closeSelectsdfhgbf[0].addEventListener("click",()=>{
//     if(closeSelectsdfhgbf[0].getAttribute("data-open")==="1"){
//         closeSelectsdfhgbf[0].removeAttribute("data-open")
//         const dropDowenCheckbox = document.querySelectorAll(".myDropdownCheckBox.show")
//         const uls = dropDowenCheckbox[0]
//             .closest(".dropdown")
//             .querySelector(".dropdown-content.myDropdownCheckBox");
//         uls.style.height = 0;
//         uls.classList.remove("show")
//         showValus.forEach((el) => {
//             boxContainer[0].append(el);
//             boxContainer[0].style.display = "flex";
//         });
//     }
// })

for (let i = 0; i < dropbtnCheckBox.length; i++) {
  dropbtnCheckBox[i].addEventListener("click", function (e) {
    closeSelectsdfhgbf[0].setAttribute("data-open", 1);
    const uls = e.target
      .closest(".dropdown")
      .querySelector(".dropdown-content.myDropdownCheckBox");
    let ul_height = 0;
    for (let m = 0; m < activshow.length; m++) {
      if (!activshow[m].classList.value.includes("show")) {
        activshow[m].classList.add("show");
      } else {
        activshow[m].classList.remove("show");
      }
    }

    title = dropbtnCheckBox[i].children[0];
    if (myDropdownCheckBox[i].attributes["data-open"]) {
      e.target
        .closest(".navbar_select")
        .querySelector(".icon").style.transform = "rotate(0)";
      myDropdownCheckBox[i].classList.remove("show");
      myDropdownCheckBox[i].removeAttribute("data-open");
      closeSelectsdfhgbf[0].removeAttribute("data-open");
      uls.style.height = 0;
    } else {
      e.target
        .closest(".navbar_select")
        .querySelector(".icon").style.transform = "rotate(180deg)";
      myDropdownCheckBox[i].classList.add("show");
      myDropdownCheckBox[i].setAttribute("data-open", 1);

      [...uls.children].forEach((el) => {
        ul_height += el.offsetHeight;
      });
      uls.style.height = ul_height + "px";
    }

    showValus.forEach((el) => {
      boxContainer[0].append(el);
      boxContainer[0].style.display = "flex";
    });
    e.stopPropagation();
  });
}

for (let i = 0; i < check_input.length; i++) {
  const element = check_input[i];
  element.addEventListener("change", (e) => {
    if (e.target.checked) {
      const box = document.createElement(`div`);
      box.classList.add("box_item");
      box.setAttribute("data-number", i);
      box.addEventListener("click", (e) => {
        element.checked = false;
        box.remove();
        showValus = showValus.filter((el) => {
          return (
            +el.attributes["data-number"].value !==
            +box.attributes["data-number"].value
          );
        });
        if (!showValus.length) {
          boxContainer[0].style.display = "none";
        }
      });
      const icon = document.createElement("div");
      icon.innerHTML = "X";
      icon.classList.add("delete");
      const span = document.createElement("span");
      span.innerHTML = e.target.value;
      span.classList.add("box_text");
      box.append(span);
      box.append(icon);
      if (
        !showValus.some(
          (el) => Number(el.attributes["data-number"].value) === i
        )
      ) {
        showValus.push(box);
      }
    } else {
      const box = document.getElementsByClassName("box_item");
      showValus = showValus.filter((el) => {
        if (box) {
          for (let i = 0; i < box.length; i++) {
            const element = box[i];
            if (
              +el.attributes["data-number"].value ===
              +element.attributes["data-number"].value
            ) {
              element.remove();
            }
          }
        }
        return +el.attributes["data-number"].value !== i;
      });
      if (!showValus.length) {
        boxContainer[0].style.display = "none";
      }
    }
  });
}
const dropDowenValuse = () => {
  const checkBox = document.querySelectorAll(".check_input");
  checkBox.forEach((element, index) => {
    if (element.checked) {
      const box = document.createElement(`div`);
      box.classList.add("box_item");
      box.setAttribute("data-number", index);
      box.addEventListener("click", (e) => {
        element.checked = false;
        box.remove();
        showValus = showValus.filter((el) => {
          return (
            +el.attributes["data-number"].value !==
            +box.attributes["data-number"].value
          );
        });
        if (!showValus.length) {
          boxContainer[0].style.display = "none";
        }
      });
      const icon = document.createElement("div");
      icon.innerHTML = "X";
      icon.classList.add("delete");
      const span = document.createElement("span");
      span.innerHTML = element.value;
      span.classList.add("box_text");
      box.append(span);
      box.append(icon);
      showValus.push(box);
      boxContainer[0].append(box);
      boxContainer[0].style.display = "flex";
    }
  });
};

window.onload = function () {
  createSelectOptions();
  dropDowenValuse();
};

// custom select Art

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
      options_box.children.length * options_box.children[0].offsetHeight + 1;
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

// --------------------------------------------------------------------
// Select checkboxes
// --------------------------------------------------------------------
const select_checkboxes = document.querySelectorAll(".select-checkboxes-title");
select_checkboxes.forEach((el) => {
  const el_container = el.closest(".select-checkboxes"),
    el_content = el_container.querySelector(".select-checkboxes-content"),
    el_options = el_container.querySelector(".select-checkboxes-options");
  el_content.addEventListener("click", (optEvt) => optEvt.stopPropagation());
  el_content.style.transitionDuration =
    Math.min(select_delay, el_options.children.length * 100) + "ms";
  el_options.style.transitionDuration =
    Math.min(select_delay, el_options.children.length * 100) + "ms";

  el.addEventListener("click", function (evt) {
    evt.stopPropagation();
    const container = this.closest(".select-checkboxes"),
      options = container.querySelector(".select-checkboxes-options"),
      content = container.querySelector(".select-checkboxes-content");

    if (
      container.hasAttribute("data-open") &&
      container.getAttribute("data-open") == "false"
    ) {
      container.setAttribute("data-open", true);
      const options_height =
        options.children.length * options.children[0].offsetHeight + 1;
      options.style.height = options_height + "px";
      content.style.height = Math.min(options_height + 36, 253) + "px";
    } else {
      content.style.height = 0;
      options.style.height = 0;
      container.setAttribute("data-open", false);
    }
  });

  el_container
    .querySelector(".select-checkboxes-btn")
    .addEventListener("click", function () {
      const container = this.closest(".select-checkboxes"),
        content = container.querySelector(".select-checkboxes-content"),
        options = container.querySelector(".select-checkboxes-options"),
        checkboxes = options.querySelectorAll("input[type='checkbox']"),
        select_id = container.getAttribute("data-checkboxes-select"),
        ul = document.querySelector(`[data-checkboxes-ul="${select_id}"]`);

      ul.innerHTML = "";
      if ([...checkboxes].some((e) => e.checked)) {
        [...checkboxes].forEach((e) => {
          if (e.checked && !e.disabled) {
            const options_title = e.nextElementSibling.innerHTML,
              li = document.createElement("li"),
              heading = document.createElement("span"),
              box_content = document.createElement("div"),
              langs = e
                .getAttribute("data-languages")
                .split(",")
                .filter((e) => !!e);

            li.className = "language-group";
            heading.className = "language-group-heading";
            box_content.className = "language-group-content";
            heading.innerHTML = `
                <span>Բաժին՝ ${options_title}</span>
                <i class="language-group-delete">&#x2715;</i>
              `;
            heading
              .querySelector(".language-group-delete")
              .addEventListener("click", function () {
                this.closest(".language-group").remove();
                e.checked = false;
              });
            li.append(heading, box_content);

            langs.forEach((e) => {
              const box = document.createElement("div");
              box.className = "language-box";
              box.innerHTML = `
                    <span class="language-box-title">${e}</span>
                    <div class="input-validatation-box">
                      <input name="sections[${e}][${options_title}]" placeholder="Թարգմանություն" type="text" class="user-input">
                    </div>
                  `;

              box_content.append(box);
            });
            ul.append(li);
          }
        });
      }

      content.style.height = 0;
      options.style.height = 0;
      container.setAttribute("data-open", false);
    });

  window.addEventListener("click", function (wEvt) {
    if ([...el_options.children].some((e) => wEvt.target != e)) {
      el_content.style.height = 0;
      el_options.style.height = 0;
      el_container.setAttribute("data-open", false);
    }
  });

  // --------------------------------------------------------------------
  // Show Success
  // --------------------------------------------------------------------
  const main_div = document.querySelector("main");
  function showSuccess(
    title = "Օրինակ՝ ձեր գործարքը հաջողությամբ կատարվել է։"
  ) {
    const container = document.createElement("div");
    container.className = "success-modal";
    container.innerHTML = `
    <div class="success-modal-head">
      <h3 class="success-modal-title">Success message</h3>
      <div class="success-close">&#x2715;</div>
    </div>
    <div class="success-modal-message">${title}</div>
  `;
    container
      .querySelector(".success-close")
      .addEventListener("click", deleteSuccess);
    main_div.append(container);
    setTimeout(() => (container.style.opacity = "1"), 1);

    setTimeout(() => (container.style.opacity = "0"), 2000);
    setTimeout(() => container.remove(), 2001 + success_duration);
  }
  function deleteSuccess() {
    const container = document.querySelector(".success-modal");
    container.style.opacity = "0";
    setTimeout(() => container.remove(), success_duration);
  }
  // showSuccess("adfadsfasdfasdfasdfsadfasdfasdf")
  // ====================================================================
});
