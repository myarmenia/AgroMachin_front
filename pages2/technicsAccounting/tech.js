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

const addBtn = document.querySelector("#add-owner");

let note_count = 1;
function addOwner() {
  const addContainer = `
  <div class="new_note_title"><div>Այլ սեփականատեր</div><div class="note-title-btnBox"><button type="button" class="note-container-delete">&#x2715;</button></div></div>
  <div class="note-container">
    <div class="note-container-child">
      <div class="select_mate line" data-mate-select="active">
        <select name="${randomId()}" onchange="" onclick="return false;"><option value="">Անձի կարգավիճակ*</option><option value="1">Select option 1</option><option value="2">Select option 2</option></select>
        <div class="select-title"><p class="selecionado_opcion"></p><span class="icon_select_mate icon"><img src="../../assets/select-chev.svg"/></span></div>
      </div>
      <div class="input-group"><input name="${randomId()}" class="input-wrap" placeholder="Անուն*" /></div>
      <div class="input-group"><input name="${randomId()}" class="input-wrap" placeholder="Ազգանուն*" /></div>
      <div class="input-group"><input name="${randomId()}" class="input-wrap" placeholder="Հայրանուն*" /></div>
      <div class="select_mate line" data-mate-select="active">
        <select name="${randomId()}" onchange="" onclick="return false;"><option value="">Քաղաքացիություն*</option><option value="1">Select option 1</option><option value="2">Select option 2</option></select>
        <div class="select-title"><p class="selecionado_opcion"></p><span class="icon_select_mate icon"><img src="../../assets/select-chev.svg"/></span></div>
      </div>
      <div class="select_mate line" data-mate-select="active">
        <select name="${randomId()}" onchange="" onclick="return false;"><option value="">Փաստաթղթի տեսակը*</option><option value="1">Select option 1</option><option value="2">Select option 2</option></select>
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
      <div class="new-note-btn">Բեռնել</div>
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
      <div class="input-group"><input class="input-wrap" placeholder="Բաժնեմասեր" /></div>
      <div class="input-group"><input class="input-wrap" placeholder="Հեռախոսահամար*" /></div>
      <div class="input-group"><input class="input-wrap" placeholder="Էլ․փոստ" /></div>
    </div>
  </div>
  `;
  const box = document.createElement("div");
  box.className = "new_note_container";
  box.setAttribute("data-box-count", note_count);
  box.innerHTML = addContainer;
  const cont = this.closest(".new_note").querySelector(".note-container-box");
  cont.append(box);
  note_count++;

  createInputs(box);
  createSelectOptions(box);
  
  box.querySelectorAll(".select-title").forEach((el) => {
    el.addEventListener("click", openSelect);
  });
  box
    .querySelector(".note-title-btnBox > button")
    .addEventListener("click", function () {
      this.closest(".new_note_container").remove();
    });
}

addBtn.addEventListener("click", addOwner);

document.querySelector("#the_form").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(Object.fromEntries(new FormData(e.target)));
});
