const inp1 = document.querySelector('.subscript');
const inp2 = document.querySelector('.documents');
const file = document.querySelector('#file');
const subscript = document.getElementById('subscript');
const subscriptImg = document.querySelector('.subscript_img');
const documentsImg = document.getElementsByClassName('documents_img')[0];
const deleteImg = document.getElementsByClassName('delete')[0];
const deleteImg2 = document.getElementsByClassName('delete2')[0];
inp1.onclick = function() {
    subscript.click()
}
subscript.addEventListener("change",(e)=>{
    let image = document.getElementById('output')
    subscriptImg.style.display = 'flex';
    image.src = URL.createObjectURL(e.target.files[0]);
    inp1.style.display = 'none';
})
deleteImg.addEventListener('click', function() {
    subscriptImg.style.display = 'none';
    inp1.style.display = 'flex';
})

inp2.onclick = function() {
    file.click();
}
file.addEventListener("change",(e)=>{
    let image2 = document.getElementById('output2')
    documentsImg.style.display = 'flex';
    image2.src = URL.createObjectURL(e.target.files[0]);
    inp2.style.display = 'none';
})
deleteImg2.addEventListener('click', function() {
    documentsImg.style.display = 'none';
    inp2.style.display = 'flex';
})