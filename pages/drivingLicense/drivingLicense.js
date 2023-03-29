const addBtn = document.getElementsByClassName("add-box")[0];
const licenseBoxChild = document.getElementsByClassName("input-radio-box")[0];
addBtn.addEventListener("click", () => {
  licenseBoxChild.innerHTML += `
          <div class="input-validatation-box">
            <input type="radio"  name="answer"/>
            <input placeholder="հարց" class="user-input" />
          </div>
    `;
});
// license img upload

const licenseBox = document.getElementById("license-file-box");
const licenseFile = document.getElementById("license-file");
const licenseImgBox = document.getElementById("license-img-box");
licenseBox.addEventListener("click", function () {
    licenseFile.click();
  });

licenseFile.addEventListener("change", function () {
  const files = this.files;
  licenseImgBox.innerHTML = "";
  [...files].forEach((file) => {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    licenseImgBox.append(img);
  });
});
// license img upload
