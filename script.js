const body = document.body;
const colors = {
    green: '#6B8E23',
    yellow: '#FFD700',
    red: '#800020'
};

function changeBackgroundColor(color) {
    body.style.backgroundColor = color;
}

function restoreBackgroundColor() {
    changeBackgroundColor('white');
}

const greenButton = document.getElementById('greenButton');
const yellowButton = document.getElementById('yellowButton');
const redButton = document.getElementById('redButton');

greenButton.addEventListener('click', () => {
    changeBackgroundColor(colors.green);
    setTimeout(restoreBackgroundColor, 4000);
});

yellowButton.addEventListener('click', () => {
    changeBackgroundColor(colors.yellow);
    setTimeout(restoreBackgroundColor, 4000);
});

redButton.addEventListener('click', () => {
    changeBackgroundColor(colors.red);
    setTimeout(restoreBackgroundColor, 4000);
});

changeBackgroundColor('white');
