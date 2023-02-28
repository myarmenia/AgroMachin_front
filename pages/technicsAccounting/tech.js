const inp1 = document.querySelector(".subscript");
const inp2 = document.querySelector(".documents");
const file = document.querySelector("#file");
const subscript = document.getElementById("subscript");
const subscriptImg = document.querySelector(".subscript_img");
const documentsImg = document.getElementsByClassName("documents_img")[0];
const deleteImg = document.getElementsByClassName("delete")[0];
const form = document.getElementById("form");
const imgContainer = document.getElementById("documents_img_container");
const delete_icon = document.querySelectorAll(".delete_icon");
let images = [];

inp1.onclick = function () {
  subscript.click();
};

subscript.addEventListener("change", (e) => {
  let image = document.getElementById("output");
  subscriptImg.style.display = "flex";
  image.src = URL.createObjectURL(e.target.files[0]);
  inp1.style.display = "none";
});

deleteImg.addEventListener("click", function () {
  subscriptImg.style.display = "none";
  inp1.style.display = "flex";
});

inp2.onclick = function () {
  file.click();
};

function deleteImage() {
  const index = +this.attributes["data-number"].value;
  const dt = new DataTransfer();
  const { files } = file;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (index !== i) {
      dt.items.add(file);
    }
  }
  file.files = dt.files;
  this.parentElement.remove();
  document.querySelectorAll(".delete_icon").forEach((el, b) => {
    el.setAttribute("data-number", b);
  });
}

function createImage(arr) {
  for (let i = 0; i < arr.length; i++) {
    const container = document.createElement("div");
    container.classList.add("documents_img");
    const icon = document.createElement("img");
    icon.classList.add("delete", "delete_icon");
    icon.setAttribute("id", "delete_icon");
    icon.src = "../../assets/table/Trash.svg";
    icon.alt = "Dellet";
    icon.setAttribute("data-number", i);
    icon.addEventListener("click", deleteImage);
    container.append(icon);
    const img = document.createElement("img");
    img.alt = "#";
    img.classList.add("imgaes");
    img.src = URL.createObjectURL(arr[i]);
    container.append(img);

    imgContainer.append(container);
  }
}

file.addEventListener("change", (e) => {
  let image2 = document.getElementById("output2");

  images = [...e.target.files];
  createImage(images);

  // documentsImg.style.display = "flex";
  // image2.src = URL.createObjectURL(e.target.files[0]);
  // inp2.style.display = "none";
});
// deleteImg2.addEventListener("click", function () {
//   documentsImg.style.display = "none";
//   inp2.style.display = "flex";
// });

function getData(form) {
  const formData = new FormData(form);
  console.log(formData.getAll("inp2"));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getData(e.target);
});
