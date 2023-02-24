
// active link

// active link

let arrow = document.querySelectorAll(".arrow");
let iocn_link = document.getElementsByClassName("iocn-link");
for (var i = 0; i < arrow.length; i++) {
  iocn_link[i].addEventListener("click", function (e) {
    var panel = this.nextElementSibling;
    this.classList.toggle("active-accordion");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.classList.remove("active-accordion");
    } else {
      panel.style.maxHeight = panel.scrollHeight + 1 + "px";
    }

    // for (const link of iocn_link) {
    //   const panel = link.nextElementSibling;
    //   panel.style.maxHeight = null;
    // }
  });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
const header = document.getElementsByTagName("header")[0];

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  header.classList.toggle("header-active");
});
// dropdown
let dropBtn = document.querySelectorAll(".dropbtn");

for (var i = 0; i < dropBtn.length; i++) {
  dropBtn[i].addEventListener("click", function (e) {
    var dropOption = this.nextElementSibling;
    dropOption.classList.toggle("show");
  });
}
// dropdown
