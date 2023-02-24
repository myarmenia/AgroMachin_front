const inp1 = document.querySelector('.subscript');
const inp2 = document.querySelector('.documents');
const file = document.querySelector('#file');
const subscript = document.querySelector('#subscript');
inp1.onclick = function() {
    subscript.click();
}
inp2.onclick = function() {
    file.click();
}