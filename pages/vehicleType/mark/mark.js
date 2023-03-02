const new_vehicle = document.getElementsByClassName("new_vehicle")[0],
  new_record_btn = document.getElementById("new_record");

function articleToggle() {
  new_vehicle.classList.toggle("new_vehicle_show");
}
new_record_btn.addEventListener("click", articleToggle);
