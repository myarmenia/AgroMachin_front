//   const dt = new DataTransfer();
//   const { files } = file;
//   for (let i = 0; i < files.length; i++) {
//     const file = files[i];
//     if (index !== i) {
//       dt.items.add(file);
//     }
//   }
//   file.files = dt.files;

// ----------------------------------------------------------------------
// Variables
// ----------------------------------------------------------------------
const select_person_status = document.querySelectorAll(".select_person_status"),
  physical_person = document.querySelector("#physical_person"),
  juridical_person = document.querySelector("#juridical_person"),
  addBtn = document.querySelector("#add-owner"),
  authorized_person = document.querySelector("#authorized_person"),
  owner_auth_checkbox = document.querySelector("#openAuthorized");

const select_person_status_buyer = document.querySelectorAll(
    ".select_person_status_buyer"
  ),
  physical_person_buyer = document.querySelector("#physical_person_buyer"),
  juridical_person_buyer = document.querySelector("#juridical_person_buyer"),
  addBtn_buyer = document.querySelector("#add-owner_buyer"),
  authorized_person__buyer = document.querySelector("#authorized_person_buyer"),
  owner_auth_checkbox_buyer = document.querySelector("#openAuthorized_buyer");

const attached_materials_file_box = document.querySelector(
    "#attached-materials-file_box"
  ),
  attached_materials_file =
    attached_materials_file_box.querySelector(`input[type="file"]`),
  attached_materials_form = document.querySelector("#attached-materials-form"),
  attached_materials_file_name = document.querySelector(
    "#attached-materials-file_name"
  );

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

// let note_count = 1;
// function addOwner() {
//   const addContainer = `
//   <div class="new_note_title"><div>Այլ սեփականատեր</div><div class="note-title-btnBox"><button type="button" class="note-container-delete">&#x2715;</button></div></div>
//   <div class="note-container">
//     <div class="note-container-child">
//       <div class="input-group"><input name="group[${note_count}][name]" class="input-wrap" placeholder="Անուն*" /></div>
//       <div class="input-group"><input name="group[${note_count}][last_name]" class="input-wrap" placeholder="Ազգանուն*" /></div>
//       <div class="input-group"><input class="input-wrap" placeholder="Հայրանուն*" /></div>
//       <div class="select_mate line" data-mate-select="active">
//         <select onchange="" onclick="return false;"><option value="">Քաղաքացիություն*</option><option value="1">Select option 1</option><option value="2">Select option 2</option></select>
//         <div class="select-title"><p class="selecionado_opcion"></p><span class="icon_select_mate icon"><img src="../../assets/select-chev.svg"/></span></div>
//       </div>
//       <div class="select_mate line" data-mate-select="active">
//         <select onchange="" onclick="return false;"><option value="">Փաստաթղթի տեսակը*</option><option value="1">Select option 1</option><option value="2">Select option 2</option></select>
//         <div class="select-title"><p class="selecionado_opcion"></p><span class="icon_select_mate icon"><img src="../../assets/select-chev.svg"/></span></div>
//       </div>
//       <div class="input-group"><input class="input-wrap" placeholder="Անձնագրի սերիա և համար*" /></div>
//       <div class="input-group"><input class="input-wrap" placeholder="Ում կողմից է տրված*" /></div>
//       <div class="input-group"><input class="input-wrap" placeholder="Երբ է տրված*" /></div>
//       <div class="input-group"><input class="input-wrap" placeholder="ՀԾՀ*" /></div>
//       <div class="input-group"><input class="input-wrap" placeholder="Ծննդյան ամսաթիվ*" /></div>
//       <div class="select_mate line" data-mate-select="active">
//         <select onchange="" onclick="return false;"><option value="">Սեռ*</option><option value="1">Select option 1</option><option value="2">Select option 2</option></select>
//         <div class="select-title"><p class="selecionado_opcion"></p><span class="icon_select_mate icon"><img src="../../assets/select-chev.svg"/></span></div>
//       </div>
//       <a href="" class="main-anchor-blue">Բեռնել</a>
//     </div>
//     <div class="note-container-child">
//       <div class="select_mate line" data-mate-select="active">
//         <select onchange="" onclick="return false;"><option value="">Երկիր*</option><option value="1">Select option 1</option><option value="2">Select option 2</option></select>
//         <div class="select-title"><p class="selecionado_opcion"></p><span class="icon_select_mate icon"><img src="../../assets/select-chev.svg"/></span></div>
//       </div>
//       <div class="input-group"><input class="input-wrap" placeholder="Համայնք/Վարչ․շրջան*" /></div>
//       <div class="input-group"><input class="input-wrap" placeholder="Բնակավայր*" /></div>
//       <div class="input-group"><input class="input-wrap" placeholder="Փոստային դասիչ" /></div>
//       <div class="input-group"><input class="input-wrap" placeholder="Փողոց" /></div>
//       <div class="input-group"><input class="input-wrap" placeholder="Տան տեսակ" /></div>
//       <div class="input-group"><input class="input-wrap" placeholder="Շենք*" /></div>
//       <div class="input-group"><input class="input-wrap" placeholder="Բնակարան/Սենյակ" /></div>
//       <div class="input-group"><input class="input-wrap" placeholder="Բաժնեմասեր (%-ով)" /></div>
//       <div class="input-group"><input class="input-wrap" placeholder="Հեռախոսահամար*" /></div>
//       <div class="input-group"><input class="input-wrap" placeholder="Էլ․փոստ" /></div>
//     </div>
//   </div>
//   `;
//   const box = document.createElement("fieldset");
//   box.className = "new_note_container";
//   box.innerHTML = addContainer;
//   const cont = this.closest(".new_note").querySelector(".note-container-box");
//   cont.append(box);
//   createInputs(box);
//   createSelectOptions(box);
//   box
//     .querySelector(".note-title-btnBox > button")
//     .addEventListener("click", function () {
//       this.closest(".new_note_container").remove();

//       cont.querySelectorAll(".new_note_container").forEach((el, i) => {
//         el.setAttribute("data-box-count", i);
//       });
//     });

//   // cont.querySelectorAll(".new_note_container").forEach((el, i) => {
//   //   el.setAttribute("data-box-count", i);
//   // });
//   // note_count = cont.querySelectorAll(".new_note_container").length - 1;
// }

// document.querySelector("#the_form").addEventListener("submit", function (e) {
//   e.preventDefault();
//   const formData = new FormData(e.target),
//     formObj = Object.fromEntries(formData),
//     group = [];

//   Object.entries(formObj).forEach(([key, value]) => {
//     const key_props = key.split("]").join("").split("["),
//       index = +key_props[1],
//       item_name = key_props[2];

//     if (!group[index]) group[index] = { ...group[index] };

//     Object.assign(group[index], { [item_name]: value });
//   });

//   if (group.length) {
//     console.log(group);
//   }
// });

// [
//   {
//     name: select_person_status,
//     physical_person,
//     juridical_person,
//     addBtn,
//     checkbox: owner_auth_checkbox,
//     authorized_person,
//   },
//   {
//     name: select_person_status_buyer,
//     physical_person: physical_person_buyer,
//     juridical_person: juridical_person_buyer,
//     addBtn: addBtn_buyer,
//     checkbox: owner_auth_checkbox_buyer,
//     authorized_person: authorized_person__buyer,
//   },
// ].forEach(
//   ({
//     name,
//     physical_person,
//     juridical_person,
//     addBtn,
//     checkbox,
//     authorized_person,
//   }) => {
//     name.forEach((el) => {
//       el.addEventListener("change", function () {
//         name.forEach((e) => {
//           const chosenOpt = [...e.options].find(
//               (opt) => opt.value === this.value
//             ),
//             activeOpt = e.closest(".select_mate").querySelectorAll("li");
//           chosenOpt.selected = true;
//           activeOpt.forEach((li) => {
//             if (chosenOpt.innerHTML.trim() == li.innerHTML.trim()) {
//               li.classList.add("active");
//               li
//                 .closest(".select_mate")
//                 .querySelector(".selecionado_opcion").innerHTML =
//                 li.innerHTML.trim();
//             } else li.classList.remove("active");
//           });
//         });
//         if (this.value === "1") {
//           physical_person.style.display = "none";
//           juridical_person.style.display = "flex";
//           addBtn.style.visibility = "hidden";
//         } else {
//           physical_person.style.display = "flex";
//           juridical_person.style.display = "none";
//           addBtn.style.visibility = "visible";
//         }
//       });
//     });

//     checkbox.addEventListener("change", function () {
//       if (this.checked) {
//         authorized_person.style.display = "flex";
//         addBtn.style.visibility = "hidden";
//       } else {
//         authorized_person.style.display = "none";
//         addBtn.style.visibility = "visible";
//       }
//     });

//     addBtn.addEventListener("click", addOwner);
//   }
// );
// =======================================================================

// Nayel mi hat
const handBtnOperator = document.getElementById("handBtnOperator");
const handFirst = document.getElementById("hand-first");
const handSecond = document.getElementById("hand-second");
const cancelBtn = document.getElementById("cancelBtn");
const handBtn = document.getElementById("hand-btn");
handBtnOperator.addEventListener("click", () => {
  handSecond.style.display = "flex";
  handFirst.style.display = "none";
});
cancelBtn.addEventListener("click", () => {
  handSecond.style.display = "none";
  handFirst.style.display = "flex";
});
let checkboxes = document.querySelectorAll(".handCheckbox");

function AreAnyCheckboxesChecked() {
  let trueContainer = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      trueContainer.push(checkboxes[i].checked);
    }
  }
  console.log(trueContainer.length);
  console.log(checkboxes.length);
  if (trueContainer.length === checkboxes.length) {
    handBtn.disabled = false;
  } else {
    handBtn.disabled = true;
  }
  console.log(trueContainer);
}
checkboxes.forEach((_, i) => {
  checkboxes[i].addEventListener("change", AreAnyCheckboxesChecked);
});

// ------------------------------------------------------------------
// Attached Materials
// ------------------------------------------------------------------
let data = [];
attached_materials_file_box.addEventListener("click", function () {
  this.querySelector(`input[type="file"]`).click();
});
attached_materials_file.addEventListener("change", function () {
  attached_materials_file_name.innerHTML = this.files[0].name;
});
attached_materials_form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target),
    formObj = Object.fromEntries(formData),
    form_id = this.getAttribute("data-attached-materials-form"),
    tbody = document.querySelector(
      `[data-attached-materials-tbody="${form_id}"]`
    ),
    input_store = document.querySelector(
      `[data-attached-materials-input="${form_id}"]`
    );

  if (!formObj.file.name) formObj.file = "";

  if (Object.values(formObj).some((e) => !!e)) {
    // input_store.value += JSON.stringify({
    //   ...formObj,
    //   file: JSON.stringify(formObj.file),
    // });
    data = [...data, formObj];

    const tr = document.createElement("div");
    tr.className = "attached-materials-table-box";
    tr.innerHTML = `
      <span>${formObj.type && formObj.type}</span>
      <span>${formObj.price && formObj.price}</span>
      <span>${formObj.number && formObj.number}</span>
      <span>${formObj.date && formObj.date}</span>
      <div>
        ${
          formObj.file &&
          `<a href="${URL.createObjectURL(formObj.file)}" download>
            <img src="../../assets/pdfSVG.svg" alt="def"/>
          </a>`
        }
      </div>
      <img class="attached-materials-table-delete" src="../../assets/redX.svg" alt="def"/>
    `;

    formObj.file && URL.revokeObjectURL(formObj.file);

    tr.querySelector(".attached-materials-table-delete").addEventListener(
      "click",
      function () {
        [...tbody.children].forEach((el, i) => {
          el.querySelector(".attached-materials-table-delete").setAttribute(
            "data-count",
            i
          );
        });

        const delete_id = +this.getAttribute("data-count");
        data = data.filter((_, i) => i !== delete_id);
        this.closest(".attached-materials-table-box").remove();
      }
    );

    tbody.append(tr);

    [...e.target.elements].forEach((el) => {
      if (el.tagName.toLowerCase() !== "button") {
        el.value = "";
        if (el.tagName.toLowerCase() === "select") {
          el
            .closest(".select_mate")
            .querySelector(".selecionado_opcion").innerHTML =
            el.options[0].innerHTML;
          el.options[0].selected = true;
          el.closest(".select_mate")
            .querySelectorAll("li")
            .forEach((elem) => elem.classList.remove("active"));
        }
        el.closest(".input-group")?.classList.remove("focus");
      }
    });
  }

  [...tbody.children].forEach((el, i) => {
    el.querySelector(".attached-materials-table-delete").setAttribute(
      "data-count",
      i
    );
  });
});

// ==================================================================
const viewIcon = document.querySelector(".viewIcon");
const result = document.querySelector(".inspection-result");
const visible = document.querySelector(".visible-arrow");
const searchNote = document.querySelector("#search_note");
const searchTitle = document.querySelector(".note-container");
const horizontalLine = document.querySelector(".horizontal-line");
const searchNoteOffsetHeight = searchNote.offsetHeight;
searchNote.style.height = searchNoteOffsetHeight + "px";
result.style.display = "none";
viewIcon.addEventListener("click", function () {
  result.style.display = "block";
});

visible.addEventListener("click", function () {
  searchNote.classList.toggle("search-note");
  visible.classList.toggle("hidden");
  searchTitle.style.overflow = "hidden";
  // horizontalLine.style.overflow = 'hidden';
  if (searchNote.classList.contains("search-note")) {
    searchNote.style.height = searchNoteOffsetHeight + "px";
  } else {
    searchNote.style.height = 0;
  }
});
