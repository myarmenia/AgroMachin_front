const cur_table = document.getElementById("table-route"),
  // remove_btn = document.getElementById("modal-remove-btn"),
  // remove_modal = document.getElementById("remove-modal"),
  accept_btn = document.getElementById("modal-accept-btn"),
  accept_form = document.getElementById("modal-accept-form"),
  confirm_modal = document.getElementById("confirm-modal");

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
    modal.classList.add("modal-open");
    if (modal.offsetHeight > window.innerHeight)
      modal.classList.add("modal-open-sm");

    modal_container.classList.add("modal-open");
  }, 1);
}
document.querySelectorAll(".toggle").forEach((el) => {
  el.addEventListener("click", () => showModal("#confirm-modal"));
});
// --------------------------------------------------------------------
// Modal checkboxes
// --------------------------------------------------------------------
let check_boxes = document.querySelectorAll("input.modal_checkbox");
let prevChekBoxs = [],
  nextChekBobs = [];
check_boxes.forEach((el) => {
  el.addEventListener("change", (e) => {
    if (e.target.checked) {
      nextChekBobs.push(e.target.value);
    } else if (
      !e.target.checked &&
      nextChekBobs.some((i) => i === e.target.value)
    ) {
      nextChekBobs = nextChekBobs.filter((i) => i !== e.target.value);
    }
  });
});

const showModalValues = () => {
  let check_boxes = document.querySelectorAll("input.modal_checkbox:checked");
  const inp = document.getElementById("input_checkboxes");
  let inpVal = [];
  check_boxes.forEach((el) => {
    inpVal.push(el.value);
  });
  if (inp != null) {
    inp.value = inpVal;
  }
  let ul = document.querySelectorAll(".transaction-type-ul");
  check_boxes.forEach((el) => {
    prevChekBoxs.push(el.value);
    let span = el.closest("li").querySelector("span");
    const li = document.createElement("li");
    li.innerHTML = `
              <div>
                <span>${span.innerHTML}</span>
                <button type="button"
                  class="transaction-type-ul-delete"
                  data-checkboxes-delete='${el.value}'
                    >&#x2715;</button>
              </div>`;
    ul[0].append(li);
  });
  nextChekBobs = [...prevChekBoxs, ...nextChekBobs];
  document.querySelectorAll(".transaction-type-ul-delete").forEach((el) => {
    el.addEventListener("click", function (e) {
      const id = e.target.getAttribute("data-checkboxes-delete");
      let check_boxes = document.querySelectorAll("input.modal_checkbox");

      check_boxes.forEach((el) => {
        if (id === el.value) {
          el.checked = false;
          prevChekBoxs = prevChekBoxs.filter((i) => i !== el.value);
          nextChekBobs = prevChekBoxs;
        }
      });
      // let input_value = checkboxes_input.value.split(",");
      // checkboxes_input.value = input_value.filter((i) => i !== id);
      e.target.closest("li").remove();
    });
  });
};
showModalValues();
(modal_form = document.querySelectorAll("[data-checkboxes-form]")),
  (select_delay = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--select-delay"
    )
  ));
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
            console.log(el.nextElementSibling);
            return [el, el.nextElementSibling];
          }
        })
        .filter((el) => el !== undefined);
    if (checkboxes.length) {
      checkboxes_input.value = checkboxes;
      checkboxes_ul.innerHTML = "";
      let set = new Set([].concat(prevChekBoxs, nextChekBobs));
      prevChekBoxs = [];
      set.forEach((value, valueAgain, set) => {
        prevChekBoxs.push(value);
      });
      // prevChekBoxs = [...prevChekBoxs,...nextChekBobs]
      form_items.forEach(([el, span]) => {
        const li = document.createElement("li");

        li.innerHTML = `
              <div>
                <span>${span.innerHTML}</span>
                <button type="button"
                  class="transaction-type-ul-delete"
                  data-checkboxes-delete='${el.value}'
                    >&#x2715;</button>
              </div>`;
        checkboxes_ul.append(li);
        hideModal();

        li.querySelector(".transaction-type-ul-delete").addEventListener(
          "click",
          function (e) {
            const id = e.target.getAttribute("data-checkboxes-delete");
            let check_boxes = document.querySelectorAll("input.modal_checkbox");

            check_boxes.forEach((el) => {
              if (id === el.value) {
                el.checked = false;
                prevChekBoxs = prevChekBoxs.filter((i) => i !== el.value);
                nextChekBobs = prevChekBoxs;
              }
            });
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
const isEqualArr = (prev, next) => {
  if (prev.length !== next.length) {
    return true;
  }
  let isEqual = false;
  for (let i = 0; i < prev.length; i++) {
    if (prev[i] !== next[i]) return true;
  }
  return false;
};

function hideModal() {
  const modals = document.getElementsByClassName("modal");
  if (
    modal_container.classList.value.includes("modal-open") &&
    isEqualArr(prevChekBoxs.sort(), nextChekBobs.sort())
  ) {
    let check_boxes = document.querySelectorAll("input.modal_checkbox");
    check_boxes.forEach((el) => {
      if (prevChekBoxs.some((value) => value === el.value)) {
        el.checked = true;
      } else {
        el.checked = false;
      }
    });
  }
  modal_container.classList.remove("modal-open");
  setTimeout(() => {
    modal_container.style.display = "none";
    document.body.classList.remove("scroll-disabled");
  }, 300);
  for (let i = 0; i < modals.length; i++) {
    const modal = modals[i];
    modal.classList.remove("modal-open", "modal-open-sm");
    setTimeout(() => (modal.style.display = "none"), 300);
  }
}

window.addEventListener("click", (e) => {
  if (e.target == modal_container) {
    hideModal();
  }
});
document.querySelectorAll(".modal .close").forEach((el) => {
  el.addEventListener("click", hideModal);
});
document.querySelectorAll("#modal-accept-btn").forEach((el) => {
  el.addEventListener("click", hideModal);
});
document.querySelectorAll("#modal-deny-btn").forEach((el) => {
  el.addEventListener("click", hideModal);
});
//

// ----------------------------------------------------------------------------
// Open modal with checkbox
document.querySelectorAll(".toggle-checkbox").forEach((el, i) => {
  el.addEventListener("click", function () {
    const checkbox_id = this.attributes["data-id"].value,
      checkbox_checked = this.checked,
      route_name = cur_table.attributes["data-route"].value;
    form_method.value = "";
    confirm_modal.attributes["data-status-id"].value = checkbox_id;

    accept_form.action = `${route_name}/${checkbox_id}/${
      checkbox_checked ? 1 : 0
    }`;

    let status_elem_id = confirm_modal.attributes["data-status-id"].value;

    showModal("#confirm-modal");
    confirm_modal.setAttribute("data-modal-id", checkbox_id);
  });
});

// ----------------------------------------------------------------------------
// Open modal with trashbin
document.querySelectorAll(".trashbin").forEach((el, i) => {
  el.addEventListener("click", function () {
    const checkbox_id = this.attributes["data-id"].value,
      route_name = cur_table.attributes["data-delete"].value;
    form_method.value = "delete";
    confirm_modal.attributes["data-status-id"].value = "";

    accept_form.action = `${route_name}/${checkbox_id}`;

    showModal("#confirm-modal");
    confirm_modal.setAttribute("data-modal-id", checkbox_id);
  });
});
// ============================================================================
