
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

// ------------------------------------------------------------------
// Modal toggling
// ------------------------------------------------------------------
const modal_container = document.querySelector(".modal-container");
function showModal(name) {
  console.log("show");
  const modal = document.querySelector(name);

  document.body.classList.add("scroll-disabled");
  modal_container.style.display = "block";
  modal.style.display = "block";

  setTimeout(() => {
    modal.classList.remove("modal-close");
    modal_container.classList.remove("modal-close");
    modal_container.classList.add("modal-open");
    modal.classList.add("modal-open");
  }, 1);

  // if (modal.offsetTop + 1000 < 20) {
  //   modal.classList.add("modal-open-sm");
  // } else {
  // }
}
function hideModal() {
  console.log("hide");
  const modals = document.getElementsByClassName("modal");
  for (let i = 0; i < modals.length; i++) {
    const modal = modals[i];

    modal.classList.remove("modal-open", "modal-open-sm");
    modal_container.classList.remove("modal-open");

    modal_container.classList.add("modal-close");
    modal.classList.add("modal-close");
    setTimeout(() => {
      modal_container.style.display = "none";
      modal.style.display = "none";
      document.body.classList.remove("scroll-disabled");
    }, 300);
  }
}
document.querySelectorAll(".modal .close").forEach((el) => {
  el.addEventListener("click", hideModal);
});
window.addEventListener("click", (e) => {
  if (e.target == modal_container) {
    hideModal();
  }
});

// ==================================================================
