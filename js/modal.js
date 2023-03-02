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
document.querySelectorAll(".modal .close").forEach((el) => {
  el.addEventListener("click", hideModal);
});
document.getElementById("modal-deny-btn").addEventListener("click", hideModal);
document
  .getElementById("modal-accept-btn")
  .addEventListener("click", hideModal);

window.addEventListener("click", (e) => {
  if (e.target == modal_container) {
    hideModal();
  }
});
// ==================================================================
