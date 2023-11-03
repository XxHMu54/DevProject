//DOM elements
const rotateLeftButton = document.getElementById('rotate-left-button');
const rotateRightButton = document.getElementById('rotate-right-button')
const grittyBorder = document.getElementById('gritty-border');
const gritterForm = document.getElementById('gritty-form');

//global variables
let rotation = 0;

//event handlers
function toggleGritty() {
    const gritty = document.getElementById('toggle-gritty');
    toggleVisibility(gritty);
}

function rotateGritty (event) {
    const gritty = document.getElementById('small-gritty');
    rotateGritty(gritty, event);
}

function addGreet (event) {
    event.preventDefault();
    const greet = gritterForm.greet.value;
    const newGreetLi = document.createElement('li');
    const newGreetAvatar = document.createElement('div');
    newGreetAvatar.className = "avatar";
    const newGreetText = document.createElement('span');
    newGreetText.innerText = greet;
    const greets = document.getElementById('greets').getElementsByTagName('ul') [0];
    const newerGreetLi = greets.appendChild(newGreetLi);
    newerGreetLi.appendChild(newGreetAvatar);
    newerGreetLi.appendChild(newGreetText);
    gritterForm.greet.value = "";

    //helpers
    //given a DOM element, change it's visibility style property from hidden to visible
    function toggleVisibility(element) {
        if(element.style.visibility === 'hidden') {
            element.style.visibility = 'visible'
        } else {
            element.style.visibility = 'hidden'
        }
    } 

    //given a DOM element anda  direction, rotate the element that direction
    function rotae(element, event) {
        if (event.target.id === 'rotate-left-button') {
            rotation = rotation - 15;
        } else {
            rotation = rotaion + 15;
        }
        element.style.transform = 'rotate(' + rotation + 'deg)';
    }

    //add event handlers when mouse events are triggered
    grittyBorder.onmouseenter = toggleGritty;
    grittyBorder.onmouseleave = toggleGritty;
    rotateLeftButton.onclick = rotateGritty;
    rotateRightButton.onclick = rotateGritty;
    gritterForm.onsubmit = addGreet;

}


