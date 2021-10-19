let slidePostion = 0;
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;

document
    .getElementById('carousel-next')
    .addEventListener("click", function(){
        moveToNextSlide()
    });
document
    .getElementById('carousel-prev')
    .addEventListener("click", function(){
        moveToPrevSlide()
    });

function updateSlidePosition(){
    for (let slide of slides){
        slide.classList.remove('carousel_active');
        slide.classList.add('carousel_hidden');
    }
    slides[slidePostion].classList.add('carousel_active');
}

function moveToNextSlide(){
    if (slidePostion == totalSlides - 1){
        slidePostion = 0;
    } else{
        slidePostion++;
    }
    updateSlidePosition()
}
function moveToPrevSlide(){
    if (slidePostion == 0){
        slidePostion == totalSlides - 1;
    } else{
        slidePostion--;
    }
    updateSlidePosition();
}
