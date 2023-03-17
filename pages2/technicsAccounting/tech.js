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

const addBtn = document.querySelector("#add-owner"),
  addContainer = `
     <div class="new_note_title">
       <div>Սեփականատերեր</div>
       <div></div>
     </div>
     <div class="note-container">
       <div class="note-container-child">
         <div class="select_mate line" data-mate-select="active" data-is-open="false">
           <select name="" onchange="" onclick="return false;" id="">
             <option value="">Անձի կարգավիճակ*</option>
             <option value="1">Select option 1</option>
             <option value="2">Select option 2</option>
           </select>
           <div class="select-title">
             <p class="selecionado_opcion">Անձի կարգավիճակ*</p>
             <span class="icon_select_mate icon" style="transform: rotate(0deg);"><img src="../../assets/select-chev.svg"></span>
           </div>
         <div class="cont_list_select_mate"><ul class="cont_select_int" style="height: 0px;"><li class="active" data-index="0">Անձի կարգավիճակ*</li><li data-index="1">Select option 1</li><li data-index="2">Select option 2</li></ul></div></div>   
         <div class="input-group"><div class="input-box"><label class="main-label" for="ysFomeE">Անուն*</label><input class="input-wrap" placeholder="Անուն*" id="ysFomeE"></div>

         </div>   
         <div class="input-group"><div class="input-box"><label class="main-label" for="vcrbEeT">Ազգանուն*</label><input class="input-wrap" placeholder="Ազգանուն*" id="vcrbEeT"></div>

         </div>   
         <div class="input-group"><div class="input-box"><label class="main-label" for="kfMPvGV">Հայրանուն*</label><input class="input-wrap" placeholder="Հայրանուն*" id="kfMPvGV"></div>

         </div>
         <div class="select_mate line" data-mate-select="active" data-is-open="false">
           <select name="" onchange="" onclick="return false;" id="">
             <option value="">Քաղաքացիություն*</option>
             <option value="1">Select option 1</option>
             <option value="2">Select option 2</option>
           </select>
           <div class="select-title">
             <p class="selecionado_opcion">Քաղաքացիություն*</p>
             <span class="icon_select_mate icon" style="transform: rotate(0deg);"><img src="../../assets/select-chev.svg"></span>
           </div>
         <div class="cont_list_select_mate"><ul class="cont_select_int" style="height: 0px;"><li class="active" data-index="0">Քաղաքացիություն*</li><li data-index="1">Select option 1</li><li data-index="2">Select option 2</li></ul></div></div>
         <div class="select_mate line" data-mate-select="active" data-is-open="false">
           <select name="" onchange="" onclick="return false;" id="">
             <option value="">Փաստաթղթի տեսակը*</option>
             <option value="1">Select option 1</option>
             <option value="2">Select option 2</option>
           </select>
           <div class="select-title">
             <p class="selecionado_opcion">Փաստաթղթի տեսակը*</p>
             <span class="icon_select_mate icon" style="transform: rotate(0deg);"><img src="../../assets/select-chev.svg"></span>
           </div>
         <div class="cont_list_select_mate"><ul class="cont_select_int" style="height: 0px;"><li class="active" data-index="0">Փաստաթղթի տեսակը*</li><li data-index="1">Select option 1</li><li data-index="2">Select option 2</li></ul></div></div>
         <div class="input-group"><div class="input-box"><label class="main-label" for="ToJbssO">Անձնագրի սերիա և համար*</label><input class="input-wrap" placeholder="Անձնագրի սերիա և համար*" id="ToJbssO"></div>

         </div>
         <div class="input-group"><div class="input-box"><label class="main-label" for="tTFpucG">Ում կողմից է տրված*</label><input class="input-wrap" placeholder="Ում կողմից է տրված*" id="tTFpucG"></div>

         </div>
         <div class="input-group"><div class="input-box"><label class="main-label" for="KrhecLn">Երբ է տրված*</label><input class="input-wrap" placeholder="Երբ է տրված*" id="KrhecLn"></div>

         </div>
         <div class="input-group"><div class="input-box"><label class="main-label" for="XyUHP_H">ՀԾՀ*</label><input class="input-wrap" placeholder="ՀԾՀ*" id="XyUHP_H"></div>

         </div>
         <div class="input-group"><div class="input-box"><label class="main-label" for="vZHSKFO">Ծննդյան ամսաթիվ*</label><input class="input-wrap" placeholder="Ծննդյան ամսաթիվ*" id="vZHSKFO"></div>

         </div>
         <div class="select_mate line" data-mate-select="active" data-is-open="false">
           <select name="" onchange="" onclick="return false;" id="">
             <option value="">Սեռ*</option>
             <option value="1">Select option 1</option>
             <option value="2">Select option 2</option>
           </select>
           <div class="select-title">
             <p class="selecionado_opcion">Սեռ*</p>
             <span class="icon_select_mate icon" style="transform: rotate(0deg);"><img src="../../assets/select-chev.svg"></span>
           </div>
         <div class="cont_list_select_mate"><ul class="cont_select_int" style="height: 0px;"><li class="active" data-index="0">Սեռ*</li><li data-index="1">Select option 1</li><li data-index="2">Select option 2</li></ul></div></div>
         <div class="new-note-btn">Բեռնել</div>
       </div>
       <div class="note-container-child">
         <div class="select_mate line" data-mate-select="active" data-is-open="false">
           <select name="" onchange="" onclick="return false;" id="">
             <option value="">Երկիր*</option>
             <option value="1">Select option 1</option>
             <option value="2">Select option 2</option>
           </select>
           <div class="select-title">
             <p class="selecionado_opcion">Երկիր*</p>
             <span class="icon_select_mate icon" style="transform: rotate(0deg);"><img src="../../assets/select-chev.svg"></span>
           </div>
         <div class="cont_list_select_mate"><ul class="cont_select_int" style="height: 0px;"><li class="active" data-index="0">Երկիր*</li><li data-index="1">Select option 1</li><li data-index="2">Select option 2</li></ul></div></div>
         <div class="input-group"><div class="input-box"><label class="main-label" for="iAktlSX">Համայնք/Վարչ․շրջան*</label><input class="input-wrap" placeholder="Համայնք/Վարչ․շրջան*" id="iAktlSX"></div>

         </div>
         <div class="input-group"><div class="input-box"><label class="main-label" for="ufTPpyn">Բնակավայր*</label><input class="input-wrap" placeholder="Բնակավայր*" id="ufTPpyn"></div>

         </div>
         <div class="input-group"><div class="input-box"><label class="main-label" for="rtRtkhq">Փոստային դասիչ</label><input class="input-wrap" placeholder="Փոստային դասիչ" id="rtRtkhq"></div>

         </div>
         <div class="input-group"><div class="input-box"><label class="main-label" for="mHUJQLM">Փողոց</label><input class="input-wrap" placeholder="Փողոց" id="mHUJQLM"></div>

         </div>
         <div class="input-group"><div class="input-box"><label class="main-label" for="iOqgBFj">Տան տեսակ</label><input class="input-wrap" placeholder="Տան տեսակ" id="iOqgBFj"></div>

         </div>
         <div class="input-group"><div class="input-box"><label class="main-label" for="FmfRIOc">Շենք*</label><input class="input-wrap" placeholder="Շենք*" id="FmfRIOc"></div>

         </div>
         <div class="input-group"><div class="input-box"><label class="main-label" for="ENyRUip">Բնակարան/Սենյակ</label><input class="input-wrap" placeholder="Բնակարան/Սենյակ" id="ENyRUip"></div>

         </div>
         <div class="input-group"><div class="input-box"><label class="main-label" for="ExBdQUJ">Բաժնեմասեր</label><input class="input-wrap" placeholder="Բաժնեմասեր" id="ExBdQUJ"></div>

         </div>
         <div class="input-group"><div class="input-box"><label class="main-label" for="A_Dojhz">Հեռախոսահամար*</label><input class="input-wrap" placeholder="Հեռախոսահամար*" id="A_Dojhz"></div>

         </div>
         <div class="input-group"><div class="input-box"><label class="main-label" for="hToGXUc">Էլ․փոստ</label><input class="input-wrap" placeholder="Էլ․փոստ" id="hToGXUc"></div>

         </div>
       </div>
     </div>
                    
  `;

function addOwner() {
  const box = document.createElement("div");
  box.className = "new_note_container";
  box.innerHTML = addContainer;
  const cont = this.closest(".new_note").querySelector(".note-container-box");
  cont.append(box);
}

addBtn.addEventListener("click", addOwner);
