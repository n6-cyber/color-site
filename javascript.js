const container = document.querySelector("#container");



function createGrid(size) {

    if (size > 100) {
        alert("Cannot be above 100 units!");
        return;
    }

    while (container.firstChild()) {
        container.removeChild(container.firstChild);
    }

    let totalSize = size * size;

    for (let i = 0; i < totalGridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${100 / size}%`;
        square.style.height = `${100 / size}%`;

        container.appendChild(square);
    }
}

const btn = document.querySelector("#reset-btn");
