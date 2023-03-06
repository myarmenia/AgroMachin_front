const formWrap = document.querySelectorAll(".form1Wrap");
const handleFocus = (event) => {
  event.target.closest(".controlGroup").classList.add("focus");
};
const handleBlur = (event) => {
  const target = event.target;
  const controlGroup = target.closest(".controlGroup");
  if (!target.value) {
    controlGroup.classList.remove("focus");
  }
};
formWrap.forEach((el) => {
  el.addEventListener("focusin", handleFocus, true);
});
formWrap.forEach((el) => {
  el.addEventListener("focusout", handleBlur, true);
});