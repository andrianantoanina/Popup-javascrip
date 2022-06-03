var btnPopup  = document.getElementById('btnPopup');
var overlay   = document.getElementById('overlay');
var btnClose = document.getElementById('btnClose');

btnPopup.addEventListener('click',openModal);
btnClose.addEventListener('click',ClosePopup);
function openModal(){
    overlay.style.display = 'flex';
}
function ClosePopup(){
    overlay.style.display = 'none';
}
