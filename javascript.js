const container = document.querySelector("#container");



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
            square.style.backgroundColor = 'black';
        });

        square.style.width = `${100 / size}%`;
        square.style.height = `${100 / size}%`;

        container.appendChild(square);
    }
}

const btn = document.querySelector("#reset-btn");

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