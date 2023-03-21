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

// ----------------------------------------------------------------------
// Variables
// ----------------------------------------------------------------------
const select_person_status = document.querySelectorAll(".select_person_status"),
  physical_person = document.querySelector("#physical_person"),
  juridical_person = document.querySelector("#juridical_person"),
  authorized_person = document.querySelector("#authorized_person"),
  addBtn = document.querySelector("#add-owner");

// ======================================================================
// ======================================================================
// ======================================================================

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
    for (const elem of app) {
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

let note_count = 1;
function addOwner() {
  const addContainer = `
  <div class="new_note_title"><div>Այլ սեփականատեր</div><div class="note-title-btnBox"><button type="button" class="note-container-delete">&#x2715;</button></div></div>
  <div class="note-container">
    <div class="note-container-child">
      <div class="select_mate line" data-mate-select="active">
        <select name="group[${note_count}][status]" onchange="" onclick="return false;"><option value="">Անձի կարգավիճակ*</option><option value="1">Select option 1</option><option value="2">Select option 2</option></select>
        <div class="select-title"><p class="selecionado_opcion"></p><span class="icon_select_mate icon"><img src="../../assets/select-chev.svg"/></span></div>
      </div>
      <div class="input-group"><input name="group[${note_count}][name]" class="input-wrap" placeholder="Անուն*" /></div>
      <div class="input-group"><input name="group[${note_count}][last_name]" class="input-wrap" placeholder="Ազգանուն*" /></div>
      <div class="input-group"><input class="input-wrap" placeholder="Հայրանուն*" /></div>
      <div class="select_mate line" data-mate-select="active">
        <select onchange="" onclick="return false;"><option value="">Քաղաքացիություն*</option><option value="1">Select option 1</option><option value="2">Select option 2</option></select>
        <div class="select-title"><p class="selecionado_opcion"></p><span class="icon_select_mate icon"><img src="../../assets/select-chev.svg"/></span></div>
      </div>
      <div class="select_mate line" data-mate-select="active">
        <select onchange="" onclick="return false;"><option value="">Փաստաթղթի տեսակը*</option><option value="1">Select option 1</option><option value="2">Select option 2</option></select>
        <div class="select-title"><p class="selecionado_opcion"></p><span class="icon_select_mate icon"><img src="../../assets/select-chev.svg"/></span></div>
      </div>
      <div class="input-group"><input class="input-wrap" placeholder="Անձնագրի սերիա և համար*" /></div>
      <div class="input-group"><input class="input-wrap" placeholder="Ում կողմից է տրված*" /></div>
      <div class="input-group"><input class="input-wrap" placeholder="Երբ է տրված*" /></div>
      <div class="input-group"><input class="input-wrap" placeholder="ՀԾՀ*" /></div>
      <div class="input-group"><input class="input-wrap" placeholder="Ծննդյան ամսաթիվ*" /></div>
      <div class="select_mate line" data-mate-select="active">
        <select onchange="" onclick="return false;"><option value="">Սեռ*</option><option value="1">Select option 1</option><option value="2">Select option 2</option></select>
        <div class="select-title"><p class="selecionado_opcion"></p><span class="icon_select_mate icon"><img src="../../assets/select-chev.svg"/></span></div>
      </div>
      <a href="" class="main-anchor-blue">Բեռնել</a>
    </div>
    <div class="note-container-child">
      <div class="select_mate line" data-mate-select="active">
        <select onchange="" onclick="return false;"><option value="">Երկիր*</option><option value="1">Select option 1</option><option value="2">Select option 2</option></select>
        <div class="select-title"><p class="selecionado_opcion"></p><span class="icon_select_mate icon"><img src="../../assets/select-chev.svg"/></span></div>
      </div>
      <div class="input-group"><input class="input-wrap" placeholder="Համայնք/Վարչ․շրջան*" /></div>
      <div class="input-group"><input class="input-wrap" placeholder="Բնակավայր*" /></div>
      <div class="input-group"><input class="input-wrap" placeholder="Փոստային դասիչ" /></div>
      <div class="input-group"><input class="input-wrap" placeholder="Փողոց" /></div>
      <div class="input-group"><input class="input-wrap" placeholder="Տան տեսակ" /></div>
      <div class="input-group"><input class="input-wrap" placeholder="Շենք*" /></div>
      <div class="input-group"><input class="input-wrap" placeholder="Բնակարան/Սենյակ" /></div>
      <div class="input-group"><input class="input-wrap" placeholder="Բաժնեմասեր (%-ով)" /></div>
      <div class="input-group"><input class="input-wrap" placeholder="Հեռախոսահամար*" /></div>
      <div class="input-group"><input class="input-wrap" placeholder="Էլ․փոստ" /></div>
    </div>
  </div>
  `;
  const box = document.createElement("fieldset");
  box.className = "new_note_container";
  box.innerHTML = addContainer;
  const cont = this.closest(".new_note").querySelector(".note-container-box");
  cont.append(box);

  createInputs(box);
  createSelectOptions(box);

  box
    .querySelector(".note-title-btnBox > button")
    .addEventListener("click", function () {
      this.closest(".new_note_container").remove();

      cont.querySelectorAll(".new_note_container").forEach((el, i) => {
        el.setAttribute("data-box-count", i);
      });
    });

  // cont.querySelectorAll(".new_note_container").forEach((el, i) => {
  //   el.setAttribute("data-box-count", i);
  // });
  // note_count = cont.querySelectorAll(".new_note_container").length - 1;
}

addBtn.addEventListener("click", addOwner);

document.querySelector("#the_form").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(e.target),
    formObj = Object.fromEntries(formData),
    group = [];

  Object.entries(formObj).forEach(([key, value]) => {
    const key_props = key.split("]").join("").split("["),
      index = +key_props[1],
      item_name = key_props[2];

    if (!group[index]) group[index] = { ...group[index] };

    Object.assign(group[index], { [item_name]: value });
  });

  if (group.length) {
    console.log(group);
  }
});

select_person_status.forEach((el) => {
  el.addEventListener("change", function () {
    select_person_status.forEach((e) => {
      const chosenOpt = [...e.options].find((opt) => opt.value === this.value),
        activeOpt = e.closest(".select_mate").querySelectorAll("li");
      chosenOpt.selected = true;

      activeOpt.forEach((li) => {
        if (chosenOpt.innerHTML.trim() == li.innerHTML.trim()) {
          li.classList.add("active");
        } else li.classList.remove("active");
      });
    });
    if (this.value === "1") {
      physical_person.style.display = "none";
      juridical_person.style.display = "flex";
      addBtn.style.visibility = "hidden";
    } else {
      physical_person.style.display = "flex";
      juridical_person.style.display = "none";
      addBtn.style.visibility = "visible";
    }
  });
});

document
  .querySelector("#openAuthorized")
  .addEventListener("change", function () {
    if (this.checked) {
      authorized_person.style.display = "flex";
      addBtn.style.visibility = "hidden";
    } else {
      authorized_person.style.display = "none";
      addBtn.style.visibility = "visible";
    }
  });

let checkboxes = document.querySelectorAll(".handCheckbox");
let handBtn = document.querySelectorAll(".main-btn")[0];
console.log(handBtn);
function AreAnyCheckboxesChecked() {
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      console.log(handBtn);
      handBtn.disabled = true;
    }
  }
  handBtn.disabled = false;
}
checkboxes.forEach((_, i) => {
  checkboxes[i].addEventListener("change", AreAnyCheckboxesChecked);
});
