// const new_vehicle = document.getElementsByClassName("new_vehicle")[0];
// const new_vehicle2 = document.getElementsByClassName("new_vehicle2")[0];
// const new_record_btn = document.getElementById("new_record");
// const change_record_btn = document.querySelectorAll("#change_record");

// function articleToggle() {
//   new_vehicle2.classList.remove("new_vehicle_show2");
//   new_vehicle.classList.add("new_vehicle_show");
// }
// function articleChangeToggle() {
//   new_vehicle.classList.remove("new_vehicle_show");
//   new_vehicle2.classList.add("new_vehicle_show2");
// }
// new_record_btn.addEventListener("click", articleToggle);
// for (i = 0; i < change_record_btn.length; i++) {
//   change_record_btn[i].addEventListener("click", articleChangeToggle);
// }

// document.querySelectorAll(".toggle").forEach((el) => {
//     el.addEventListener("click", function () {
//       console.log(this);
//       showModal("#confirm-modal");
//     });
//   });
const new_vehicle = document.getElementsByClassName("new_vehicle")[0];
const new_vehicle2 = document.getElementsByClassName("new_vehicle2")[0];
const new_record_btn = document.getElementById("new_record");
const change_record_btn = document.querySelectorAll(".change_record");
const edit_input = document.querySelector("#edit_input");
const edit_group = document.querySelector("#edit_group");

function articleToggle() {
  new_vehicle2.classList.remove("new_vehicle_show2");
  new_vehicle.classList.add("new_vehicle_show");
}
function articleChangeToggle() {
  new_vehicle.classList.remove("new_vehicle_show");
  new_vehicle2.classList.add("new_vehicle_show2");
}
new_record_btn.addEventListener("click", articleToggle);
for (i = 0; i < change_record_btn.length; i++) {
  change_record_btn[i].addEventListener("click", articleChangeToggle);
}
document.querySelectorAll(".toggle").forEach((el) => {
  el.addEventListener("click", function () {
    console.log(this);
    showModal("#confirm-modal");
  });
});

// ======================================================================
// ======================================================================
// ======================================================================

let dropbtnCheckBox = document.getElementsByClassName("dropbtnCheckBox");
let myDropdownCheckBox = document.querySelectorAll(".myDropdownCheckBox");
let chekcBoxoption = document.querySelectorAll(".option");
let check_input = document.getElementsByClassName("check_input");
const activshow = document.getElementsByClassName("show");
const box_item = document.getElementsByClassName("box_item");

for (let i = 0; i < dropbtnCheckBox.length; i++) {
  dropbtnCheckBox[i].addEventListener("click", function (e) {
    const container = this.closest(".dropdown"),
      uls = container.querySelector(".dropdown-content"),
      input = this.querySelector("input");

    for (let m = 0; m < activshow.length; m++) {
      if (!activshow[m].classList.value.includes("show")) {
        activshow[m].classList.add("show");
      } else {
        activshow[m].classList.remove("show");
      }
    }
    if (myDropdownCheckBox[i].attributes["data-open"]) {
      e.target
        .closest(".navbar_select")
        .querySelector(".icon").style.transform = "rotate(0)";
      myDropdownCheckBox[i].classList.remove("show");
      myDropdownCheckBox[i].removeAttribute("data-open");
      uls.style.height = 0;
    } else {
      e.target
        .closest(".navbar_select")
        .querySelector(".icon").style.transform = "rotate(180deg)";
      myDropdownCheckBox[i].classList.add("show");
      myDropdownCheckBox[i].setAttribute("data-open", 1);

      uls.style.height =
        uls.children[0].offsetHeight * uls.children.length + "px";
    }
  });

  dropbtnCheckBox[i]
    .closest(".dropdown")
    .querySelectorAll(".dropdownoption > input")
    .forEach((elem) => {
      elem.addEventListener("change", function () {
        const input = this.closest(".dropdown").querySelector("input[hidden]"),
          placeholder = input.nextElementSibling,
          checkboxes = this.closest(".dropdown").querySelectorAll(
            ".dropdownoption > input"
          );

        input.value = "";
        placeholder.innerHTML = "";

        let cur_value = [...checkboxes]
          .map((elem) => {
            if (elem.checked) {
              return [elem.value, elem.nextElementSibling.innerHTML];
            }
          })
          .filter((e) => !!e);

        input.value = cur_value.map((e) => e[0]).join(", ");
        placeholder.innerHTML = cur_value.map((e) => e[1]).join(", ");
      });
    });
}

change_record_btn.forEach((el) => {
  el.addEventListener("click", function () {
    const group = this.getAttribute("data-group")
        .split(",")
        .map((e) => e.trim()),
      inp_val = this.getAttribute("data-name");

    const input = new_vehicle2.querySelector(".edit_input"),
      gourp_input = new_vehicle2.querySelector(".edit_group"),
      checkboxes = new_vehicle2.querySelectorAll(".check_input");

    input.value = inp_val;
    gourp_input.value = group.join(", ");

    const gourp_input_value = [...checkboxes]
      .map((e) => {
        if (group.some((elem) => elem === e.value)) {
          e.checked = true;
          return e.nextElementSibling.innerHTML;
        } else e.checked = false;
      })
      .filter((e) => !!e);
    gourp_input.nextElementSibling.innerHTML = gourp_input_value.join(", ");
  });
});
