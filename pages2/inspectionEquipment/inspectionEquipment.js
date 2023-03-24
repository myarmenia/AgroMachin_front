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
const file_inputs = document.querySelector("#file-upload-box"),
  file_upload = document.querySelector("#file-upload");

file_inputs.addEventListener("click", function () {
  file_upload.click();
});
file_upload.addEventListener("change", function () {
  const id = +this.getAttribute("data-files-input"),
    box = document.querySelector(`[data-files-group="${id}"]`);

  box.innerHTML = "";

  const files = this.files;

  [...files].forEach((file) => {
    const div = document.createElement("div");
    div.className = "file-box";

    div.innerHTML = `
        <div class="file-box-title">
            <a href="${URL.createObjectURL(file)}">
                <img src="../../assets/pdfSVG.svg" alt="" />
            </a>
            <span>${file.name}</span>
        </div>
        <img class="file-delete-img" src="../../assets/redX.svg" alt="" />
    `;

    box.append(div);

    div
      .querySelector(".file-delete-img")
      .addEventListener("click", function () {
        const dt = new DataTransfer(),
          delete_id = +this.getAttribute("data-count");

        [...file_upload.files].forEach((item, i) => {
          if (i !== delete_id) {
            dt.items.add(item);
          }
        });
        file_upload.files = dt.files;

        this.closest(".file-box").remove();
        box.querySelectorAll(".file-delete-img").forEach((elem, i) => {
          elem.setAttribute("data-count", i);
        });
      });
  });

  box.querySelectorAll(".file-delete-img").forEach((elem, i) => {
    elem.setAttribute("data-count", i);
  });
});
// ======================================================================
// ======================================================================
// ======================================================================
