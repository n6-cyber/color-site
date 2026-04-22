const container = document.querySelector("#container");
const btn = document.querySelector("#reset-btn");
const rgbBtn = document.querySelector('#rgb');
const btbBtn = document.querySelector('#btb');

let mode = 'black';

rgbBtn.addEventListener("click", () => {
    mode = 'rgb';
});

btbBtn.addEventListener("click", () => {
    mode = 'black';
});

function createGrid(size) {

    if (size > 100) {
        alert("Cannot be above 100 units!");
        return;
    }

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let totalSize = size * size;

    for (let i = 0; i < totalSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.addEventListener('mouseenter', () => {
            if (mode == 'rgb') {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            } else {
                square.style.backgroundColor = 'black';
            }
        });

        square.style.width = `${100 / size}%`;
        square.style.height = `${100 / size}%`;

        container.appendChild(square);
    }
}

btn.addEventListener("click", () => {
    let userInput = prompt("Enter grid size (1-100) max: ");

    let size = parseInt(userInput);

    if (!isNaN(size) && size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert(`Please input a number betwenn 1 and 100 you inputed: ${userInput}`);
    }
});

createGrid(16);