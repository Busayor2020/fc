// JavaScript for Image Popup
const popup = document.querySelector('.image-popup');
const popupContent = document.querySelector('.popup-content');
const popupImages = document.querySelectorAll('.popup-trigger');
const closeButton = document.querySelector('.close-button');
const popupImage = document.querySelector('.popup-image');

popupImages.forEach((image) => {
    image.addEventListener('click', () => {
        popup.style.display = 'block';
        popupImage.src = image.src;
    });
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});


 
