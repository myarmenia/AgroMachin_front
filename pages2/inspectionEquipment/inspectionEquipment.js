const mainBtn = document.querySelector('.main-btn');
const inspectionResult = document.querySelector('.inspection-result');
const inspectionEquipment = document.querySelector('.inspectionEquipment');
const cancel = document.querySelector('.main-btn-white')
mainBtn.addEventListener('click', function() {
    inspectionResult.style.display = 'block';
    inspectionEquipment.style.display = 'none';
})
cancel.addEventListener('click', function() {
    inspectionResult.style.display = 'none';
    inspectionEquipment.style.display = 'block';
})