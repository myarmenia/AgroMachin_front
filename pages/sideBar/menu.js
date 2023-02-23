let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    // let arrowParent = e.target.parentElement.parentElement;
    // arrowParent.classList.toggle("showMenu");

    console.log(111);
    e.target.parentElement.classList.toggle("active-accordion");
    var panel = e.target.parentElement.nextElementSibling;
    console.log(e.target.parentElement.nextElementSibling);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 1 + "px";
    }
  });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
