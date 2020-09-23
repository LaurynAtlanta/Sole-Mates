const slides = document.querySelectorAll('.slide');
const carousel = document.querySelector('.carousel');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

const SLIDES_COUNT = slides.length;

let current_slide=0;

left.addEventListener('click', ()=>{
    current_slide++;
    if(current_slide > SLIDES_COUNT -1){
        current_slide = 0;
    }
    updateCarouse();
})
right.addEventListener('click', ()=>{
    current_slide--;
    if(current_slide < 0){
        current_slide = SLIDES_COUNT -1;
    }
    updateCarouse();
})

function updateCarouse(){
    carousel.style.transform = `translateX(${-current_slide * slides[0].offsetWidth}px)`;
};