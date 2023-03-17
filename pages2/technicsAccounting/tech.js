/** @format */

// const inp1 = document.querySelector(".subscript");
// const inp2 = document.querySelector(".documents");
// const file = document.querySelector("#file");
// const subscript = document.getElementById("subscript");
// const subscriptImg = document.querySelector(".subscript_img");
// const documentsImg = document.getElementsByClassName("documents_img")[0];
// const deleteImg = document.getElementsByClassName("delete")[0];
// const form = document.getElementById("form");
// const imgContainer = document.getElementById("documents_img_container");
// const delete_icon = document.querySelectorAll(".delete_icon");
// const fileName= document.getElementById("file_name")
// let images = [];

// inp1.onclick = function () {
//   subscript.click();
// };

// subscript.addEventListener("change", (e) => {
//   let image = document.getElementById("output");
//   subscriptImg.style.display = "flex";
//   console.log(e.target.files[0]);
//   fileName.innerHTML=e.target.files[0].name
//   // image.src = URL.createObjectURL(e.target.files[0]);
//   inp1.style.display = "none";

// });

// deleteImg.addEventListener("click", function () {
//   subscriptImg.style.display = "none";
//   inp1.style.display = "flex";
//   const dt = new DataTransfer();
//   subscript.files = dt.files;
// });

// inp2.onclick = function () {
//   file.click();
// };

// function deleteImage() {
//   const index = +this.attributes["data-number"].value;
//   const dt = new DataTransfer();
//   const { files } = file;
//   for (let i = 0; i < files.length; i++) {
//     const file = files[i];
//     if (index !== i) {
//       dt.items.add(file);
//     }
//   }
//   file.files = dt.files;
//   this.parentElement.remove();
//   document.querySelectorAll(".delete_icon").forEach((el, b) => {
//     el.setAttribute("data-number", b);
//   });
// }

// function createImage(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const container = document.createElement("div");
//     container.classList.add("documents_img");
//     const icon = document.createElement("img");
//     icon.classList.add("delete", "delete_icon");
//     icon.setAttribute("id", "delete_icon");
//     icon.src = "../../assets/table/Trash.svg";
//     icon.alt = "Dellet";
//     icon.setAttribute("data-number", i);
//     icon.addEventListener("click", deleteImage);
//     container.append(icon);
//     const img = document.createElement("img");
//     img.alt = "#";
//     img.classList.add("imgaes");
//     img.src = URL.createObjectURL(arr[i]);
//     container.append(img);

//     imgContainer.append(container);
//   }
// }

// file.addEventListener("change", (e) => {
//   let image2 = document.getElementById("output2");

//   images = [...e.target.files];
//   createImage(images);

// });

// function getData(form) {
//   const formData = new FormData(form);
//   console.log(formData.getAll("inp2"));
// }

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   getData(e.target);
// });

const tabs = document.getElementsByClassName("tabs_text");
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", (event) => {
    for (const elem of tabs) {
      elem.classList.remove("tabs_activ");
    }
    if (+tabs[i].attributes["data-count"].value === i) {
      tabs[i].classList.add("tabs_activ");
    }
    const app = document.getElementsByClassName("app_activ");
    console.log(app);
    for (const elem of app) {
      console.log(elem.attributes["data-activ_tab"].value);
      if (+elem.attributes["data-activ_tab"].value === i) {
        elem.style.display = "block";
      } else {
        elem.style.display = "none";
      }
    }
  });
}

document
  .querySelector("#transaction-type-modal-btn")
  .addEventListener("click", () => showModal("#transaction-type-modal"));

// --------------------------------------------------------------------
// Modal checkboxes
// --------------------------------------------------------------------
const modal_form = document.querySelectorAll("[data-checkboxes-form]");

modal_form.forEach((el) => {
  el.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(this);
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
            return el.nextElementSibling;
          }
        })
        .filter((el) => el !== undefined);

    if (checkboxes.length) {
      checkboxes_input.value = checkboxes;
      checkboxes_ul.innerHTML = "";
      form_labels.forEach((el) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div>
              <span>${el.innerHTML}</span>
              <button class="transaction-type-ul-delete">
                &#x2715;
              </button>
            </div>`;
        checkboxes_ul.append(li);
        hideModal();
      });
    }
  });
});
// ====================================================================
