const addBtn = document.getElementsByClassName("add-box")[0];
const licenseBoxChild = document.getElementsByClassName("input-radio-box")[0];
addBtn.addEventListener("click", () => {
  let removeInpBtn = document.querySelectorAll(".removeInpBtn");

  const addContainer = `
            <input type="radio"  name="answer"/>
            <input placeholder="հարց" class="user-input" />
            <img src="../../assets/redX.svg" class="removeInpBtn"/>
    `;
  const inputBox = document.createElement("div");
  inputBox.className = "input-validatation-box";
  inputBox.innerHTML = addContainer;
  licenseBoxChild.append(inputBox);
  removeInpFunction();
});
function removeInpFunction() {
  let removeInpBtn = document.querySelectorAll(".removeInpBtn");
  removeInpBtn.forEach((el) => {
    el.addEventListener("click", function () {
      this.parentElement.remove();
    });
  });
}
removeInpFunction();
const licenseBox = document.getElementById("license-file-box");
const licenseFile = document.getElementById("license-file");
const licenseImgBox = document.getElementById("license-img-box");
licenseBox.addEventListener("click", function () {
  licenseFile.click();
});
licenseFile.addEventListener("change", function () {
  let files = this.files;
  licenseImgBox.innerHTML = "";
  [...files].forEach((file) => {
    const imgBoxChild = document.createElement("div");
    imgBoxChild.className = "img-box-child";
    // img
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    // icon
    const icon = document.createElement("img");
    icon.className = "iconDelete";
    icon.src = "../../assets/redX.svg";
    //
    imgBoxChild.append(icon);
    imgBoxChild.append(img);
    licenseImgBox.append(imgBoxChild);
  });
  const removeImgBtn = document.querySelectorAll(".iconDelete");
  removeImgBtn.forEach((el, i) => {
    files[i].id = i;
    el.addEventListener("click", function () {
      this.parentElement.remove();
      const dt = new DataTransfer();
      const input = document.getElementById("license-file");
      const { files } = input;
      for (let k = 0; k < files.length; k++) {
        const file = files[k];
        if (i !== k) dt.items.add(file); // here you exclude the file. thus removing it.
      }
      input.files = dt.files;
    });
  });
});

// license img upload
const form = document.querySelector("#save-btn");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  document.getElementById("license-file");
  console.log(formData.getAll("license-file"));
  // const data = new FormData(document.querySelector("#save-btn"));
  // console.log(data);
});
