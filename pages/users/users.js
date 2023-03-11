let dropbtnCheckBox = document.getElementsByClassName("dropbtnCheckBox");
let myDropdownCheckBox = document.querySelectorAll(".myDropdownCheckBox");
let chekcBoxoption = document.querySelectorAll(".option");
let check_input = document.getElementsByClassName("check_input");
const activshow = document.getElementsByClassName("show");
const boxContainer = document.getElementsByClassName("box_container");
const box_item = document.getElementsByClassName("box_item");

let showValus = [];
for (let i = 0; i < dropbtnCheckBox.length; i++) {
  dropbtnCheckBox[i].addEventListener("click", function (e) {
    for (let m = 0; m < activshow.length; m++) {
      if (!activshow[m].classList.value.includes("show")) {
        activshow[m].classList.toggle("show");
      } else {
        activshow[m].classList.remove("show");
      }
    }
    title = dropBtn[i].children[0];
    if (myDropdownCheckBox[i].attributes["data-open"]) {
      myDropdownCheckBox[i].classList.remove("show");
      myDropdownCheckBox[i].removeAttribute("data-open");
    } else {
      myDropdownCheckBox[i].classList.add("show");
      myDropdownCheckBox[i].setAttribute("data-open", 1);
    }
    showValus.forEach((el) => {
      boxContainer[0].append(el);
      boxContainer[0].style.display = "block";
    });
  });
}

// for (var k = 0; k < option.length; k++) {
//   option[k].addEventListener("click", function (e) {
//     title.innerHTML = this.innerText;
//     this.parentElement.classList.remove("show");
//   });
// }

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
      const icon = document.createElement("img");
      icon.src = "../../assets/table/Trash.svg";
      icon.classList.add("delletadwswas");
      const span = document.createElement("span");
      span.innerHTML = e.target.value;
      span.classList.add("box_textawdswasd");
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


const create_user = document.getElementById("create_user");
create_user.addEventListener("submit", formValidate)