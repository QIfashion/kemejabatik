let currentIndex = 0;
const images = document.querySelectorAll('.image-scroll img');
const imageScrollContainer = document.querySelector('.image-scroll-container');

function scrollImages() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }


    if (currentIndex === 0) {
        imageScrollContainer.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    } else {
        imageScrollContainer.scrollTo({
            left: images[currentIndex].offsetLeft,
            behavior: 'smooth'
        });
    }
}

setInterval(scrollImages, 5000);





function openFullscreen(image) {
    const modal = document.getElementById('fullscreenModal');
    const moadalImage = document.getElementById('fullscreenImage');
    modal.style.display = 'flex';
    moadalImage.src = image.src;
}

function closeFullscreen() {
    const modal = document.getElementById('fullscreenModal');
    modal.style.display = 'none';
}