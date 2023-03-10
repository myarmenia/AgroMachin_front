// ------------------------------------------------------------------
// Modal toggling
// ------------------------------------------------------------------
const modal_container = document.querySelector(".modal-container");
function showModal(name) {
  const modal = document.querySelector(name);
  document.body.classList.add("scroll-disabled");
  modal_container.style.display = "block";
  modal.style.display = "block";
  setTimeout(() => {
    // modal.classList.remove("modal-close");
    // modal_container.classList.remove("modal-close");
    modal_container.classList.add("modal-open");
    modal.classList.add("modal-open");
  }, 1);
}
document.querySelectorAll(".toggle").forEach((el) => {
  el.addEventListener("click", () => showModal("#confirm-modal"));
});
function hideModal() {
  const modals = document.getElementsByClassName("modal");

  for (let i = 0; i < modals.length; i++) {
    const modal = modals[i];

    modal.classList.remove("modal-open", "modal-open-sm");
    modal_container.classList.remove("modal-open");

    // modal_container.classList.add("modal-close");
    // modal.classList.add("modal-close");
    setTimeout(() => {
      modal_container.style.display = "none";
      modal.style.display = "none";
      document.body.classList.remove("scroll-disabled");
    }, 300);
  }
}

window.addEventListener("click", (e) => {
  if (e.target == modal_container) {
    hideModal();
  }
});
document.querySelectorAll(".modal .close").forEach((el) => {
  el.addEventListener("click", hideModal);
});
document.querySelectorAll(".modal-deny-btn").forEach((el) => {
  el.addEventListener("click", hideModal);
});
// ==================================================================
