const dialog = document.querySelector('dialog');

document.querySelector('#open').addEventListener('click', function(){
    dialog.showModal();
});
document.querySelector('.btn--close').addEventListener('click',function(){
    dialog.close();
})