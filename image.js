
let currentSlide = 0;
const images = ['wed3.jpg.', 'wed3.jpg', 'wed3 - Copy.jpg']; 

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = images.length - 1;
    } else if (currentSlide >= images.length) {
        currentSlide = 0;
    }
    document.getElementById('slider-image').src = images[currentSlide];
}

function updateText() {
    const textInput = document.getElementById('text-input').value;
    document.getElementById('slider-text').innerText = textInput;
}

function changeFont() {
    const fontSelect = document.getElementById('font-select');
    const selectedFont = fontSelect.value;
    document.getElementById('slider-text').style.fontFamily = selectedFont;
}