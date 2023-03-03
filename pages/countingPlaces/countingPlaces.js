const new_vehicle = document.getElementsByClassName("new_vehicle")[0];
const new_vehicle2 = document.getElementsByClassName("new_vehicle2")[0];
const new_record_btn = document.getElementById("new_record");
const change_record_btn = document.getElementById("change_record");

function articleToggle() {
  new_vehicle2.classList.remove("new_vehicle_show2");
  new_vehicle.classList.toggle("new_vehicle_show");
}
function articleChangeToggle() {
  new_vehicle.classList.remove("new_vehicle_show");
  new_vehicle2.classList.toggle("new_vehicle_show2");
}
new_record_btn.addEventListener("click", articleToggle);
change_record_btn.addEventListener("click", articleChangeToggle);

document.querySelectorAll(".toggle").forEach((el) => {
  el.addEventListener("click", function () {
    console.log(this);
    showModal("#confirm-modal");
  });
});
