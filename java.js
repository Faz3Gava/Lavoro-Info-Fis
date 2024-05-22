//frasi a slide
const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkboxes);

checkboxes()

function checkboxes(){
 console.log()
    const triggerbottom = window.innerHeight / 1;
console.log(triggerbottom); console.log(boxes)
    var i=0;
boxes.forEach(box => {const boxtop = box.getBoundingClientRect().top; 
    i+=1;
    if(boxtop < triggerbottom){
        box.classList.add('show')
    } else {

        box.classList.remove('show');
    } console.log(boxtop)
} ) }


//menù a tendina


const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('off-screen-menu-active');
})
