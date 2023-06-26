// --------------------------------------------------------------------
// Show Success
// --------------------------------------------------------------------
const main_div = document.querySelector("main");

function showSuccess(
  title = "Օրինակ՝ ձեր գործարքը հաջողությամբ կատարվել է։",
  dur = 500
) {
  const container = document.createElement("div");
  container.className = "success-modal";
  container.innerHTML = `
    <div class="success-modal-head">
      <h3 class="success-modal-title">Success message</h3>
      <div class="success-close">&#x2715;</div>
    </div>
    <div class="success-modal-message">${title}</div>
  `;
  container
    .querySelector(".success-close")
    .addEventListener("click", () => deleteSuccess());
  main_div.append(container);
  setTimeout(() => (container.style.opacity = "1"), 1);

  setTimeout(() => (container.style.opacity = "0"), 2000);
  setTimeout(() => container.remove(), 2001 + dur);
}
function deleteSuccess(dur = 500) {
  const container = document.querySelector(".success-modal");
  container.style.opacity = "0";
  setTimeout(() => container.remove(), dur);
}

// showSuccess("adfadsfasdfasdfasdfsadfasdfasdf");
// ====================================================================
