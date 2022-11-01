/* Imports */

/* Get DOM Elements */
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const img1 = document.querySelector('#img-1');
const img2 = document.querySelector('#img-2');
const img3 = document.querySelector('#img-3');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');
/* State */
let wins = 0;
let total = 0;

/* Events */
button1.addEventListener('click', () => {
    total++;
    resetPearls();
    const pearlLocation = Math.ceil(Math.random() * 3);
    if (pearlLocation === 1) {
        wins++;
        img1.classList.add('reveal');
    } else if (pearlLocation === 2) {
        img2.classList.add('reveal');
    } else {
        img3.classList.add('reveal');
    }
});

button2.addEventListener('click', () => {
    total++;
    resetPearls();
    const pearlLocation = Math.ceil(Math.random() * 3);
    if (pearlLocation === 1) {
        img1.classList.add('reveal');
    } else if (pearlLocation === 2) {
        wins++;
        img2.classList.add('reveal');
    } else {
        img3.classList.add('reveal');
    }
});

button3.addEventListener('click', () => {
    total++;
    resetPearls();
    const pearlLocation = Math.ceil(Math.random() * 3);
    if (pearlLocation === 1) {
        img1.classList.add('reveal');
    } else if (pearlLocation === 2) {
        img2.classList.add('reveal');
    } else {
        wins++;
        img3.classList.add('reveal');
    }
});

function resetPearls() {
    img1.classList.remove('reveal');
    img2.classList.remove('reveal');
    img3.classList.remove('reveal');
}

/* Display Functions */
function displayResults() {
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;
}

// (don't forget to call any display functions you want to run on page load!)
