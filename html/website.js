const slide = document.querySelector('.slider');
const sliderimgs = document.querySelectorAll('.slider img');

//Botones
const antBtn = document.querySelector('#antBtn');
const sgtBtn = document.querySelector('#sgtBtn');

//contador
let counter = 1;
const size = sliderimgs[0].clientWidth;
slide.style.transform =  'translateX(' + (-size * counter) + 'px';

//Listeners

sgtBtn.addEventListener('click',()=>{
    if(counter >= sliderimgs.length - 1) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

antBtn.addEventListener('click',()=>{
    if(counter <= 0) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

slide.addEventListener('transitionend', ()=> {
    if(sliderimgs[counter].id === 'ultima') {
        slide.style.transition = "none";
        counter = sliderimgs.length - 2;
        slide.style.transform =  'translateX(' + (-size * counter) + 'px';
    }
    if(sliderimgs[counter].id === 'primera') {
        slide.style.transition = "none";
        counter = sliderimgs.length - counter;
        slide.style.transform =  'translateX(' + (-size * counter) + 'px';
    }
})