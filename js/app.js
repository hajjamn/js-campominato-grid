const containerElement = document.querySelector('.game-container');
let squareSideLenght = 10;

for (let i = 0; i < Math.pow(squareSideLenght, 2); i++) {
  const num = i + 1;

  const cellElement = document.createElement('div');
  cellElement.classList.add('cell')
  cellElement.innerHTML = num

  containerElement.append(cellElement)
}