const formWrap = document.querySelector(".form1Wrap");
const inp = document.querySelector("#name");
inp.value = "red";

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
formWrap.addEventListener("focusin", handleFocus, true);
formWrap.addEventListener("focusout", handleBlur, true);
