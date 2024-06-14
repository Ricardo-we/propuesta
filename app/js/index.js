const negativeButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const title = document.getElementById('title');
const finalPart = document.getElementById('final');

function changeButtonPosition(){
    let moveLength = 400;
    let randomX = Math.round(Math.random() * moveLength);
    let randomY = Math.round(Math.random() * moveLength);
    if(randomX < window.innerWidth && randomY < window.innerHeight){
        negativeButton.style.top = Math.floor(randomY) - negativeButton.style.height + 'px';
        negativeButton.style.left = Math.floor(randomX) - negativeButton.style.width + 'px';
    }

    console.log(window.getComputedStyle(negativeButton).marginTop);
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
    