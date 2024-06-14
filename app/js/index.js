const negativeButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const title = document.getElementById('title');
const finalPart = document.getElementById('final');
// const denyText = document.getElementById('denyText');

const denialTexts = [
    "Di que sí",
    "¿Segura que no?",
    "¿De veras de veras?"
];

function changeButtonPosition(){
    let moveLength = 150;
    let moveLengthX = 150;

    if(Math.random() > 0.5){ moveLength = -moveLength; }
    if(Math.random() > 0.5){ moveLengthX = -moveLengthX; }

    let randomX = Math.round(Math.random() * moveLengthX);
    let randomY = Math.round(Math.random() * moveLength);
    if(randomX < window.innerWidth && randomY < window.innerHeight){
        negativeButton.style.top = Math.floor(randomY) - negativeButton.style.height + 'px';
        negativeButton.style.left = Math.floor(randomX) - negativeButton.style.width + 'px';
    }

    title.innerText = denialTexts[Math.floor(Math.random() * denialTexts.length)];
}


document.addEventListener('DOMContentLoaded', () => {
    
    negativeButton.addEventListener('mouseenter', changeButtonPosition);
    negativeButton.addEventListener('click', changeButtonPosition);
    yesButton.addEventListener('click', () => {
        negativeButton.classList.add('d-none');
        yesButton.classList.add('d-none');
        title.classList.add('d-none');
        finalPart.classList.remove('d-none');        
    })
})
    