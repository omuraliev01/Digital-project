const feedBack = document.querySelector('.contacts-info__btn');
const modal = document.querySelector('.modal');
const modalForm = document.querySelector('.modal__form')
const modalClose = document.querySelector('.modal__close');
const modalBtn = document.querySelector('.modal__btn');
const modalThanks = document.querySelector('.modal-thanks');
const modalThanksClose = document.querySelector('.modal-thanks__close');
const modalThanksBtn = document.querySelector('.modal-thanks__btn');


feedBack.addEventListener('click', function(e){
    modal.style.display = 'flex';
    modalBtn.addEventListener('click', function(e){
        modal.style.display = 'none';
        modalThanks.style.display = 'flex';
        e.preventDefault();
    })
});

modalClose.addEventListener('click', function() {
    modal.style.display = 'none';
});

// modal.addEventListener('click', function () {
//     modal.style.display = 'none';
// });

modalThanksBtn.addEventListener('click', function() {
    modalThanks.style.display = 'none';
});

modalThanksClose.addEventListener('click', function() {
    modalThanks.style.display = 'none';
});

modalForm.addEventListener('submit', function (e) { 
    console.log(modalForm.name.value)
});
// modalForm.addEventListener('click', function () {
//     modalForm.style.display = 'block'
// });
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        modal.style.display = 'none'
        modalThanks.style.display = 'none';
    }
});
console.log(feedBack, modal);