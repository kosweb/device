var showModalFeedBack = document.querySelector('button.info-block-button');
var showModalMap = document.querySelector('.contacts-column img');

var modalMap = document.querySelector('.modal-map');
var modalFeedBack = document.querySelector('.modal-feed-back');
var closeModal = document.querySelectorAll('.modal-close');

showModalFeedBack.addEventListener('click', function() {
	modalFeedBack.classList.add('visible')
});

showModalMap.addEventListener('click', function() {
	modalMap.classList.add('visible')
});

closeModal.forEach((btn) => {
  btn.addEventListener('click', () => {
		document.querySelector('.modal.visible').classList.toggle('visible')
  });
});
