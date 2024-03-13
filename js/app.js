//Dichiaro il contenitore dove andro' a mettere le celle
const containerElement = document.querySelector('.game-container');

//Dichiaro la variabile che determina la lunghezza del lato della griglia
let squareSideLength;

//Dichiaro l'elemento del selezionatore di difficolta'
const difficultySelectorElement = document.getElementById('difficulty');

//faccio si' che la lunghezza della griglia sia uguale a quella assegnata alla difficolta' con event listener
difficultySelectorElement.addEventListener('change', (event) => {
  squareSideLength = difficultySelectorElement.value;
})


//dicahiaro il bottone di generazione della griglia
const playButton = document.querySelector('.start');

//aggiongo l'event listener al bottone

/* playButton.addEventListener('click', generateGrid()); */

playButton.addEventListener('click', function() {
  console.log(`Ho cliccato il bottone con difficolta' ${squareSideLength}`)
  containerElement.classList.remove('difficulty-10', 'difficulty-9', 'difficulty-7')
  containerElement.innerHTML = '';
  for (let i = 0; i < Math.pow(squareSideLength, 2); i++) {
      const num = i + 1;
      containerElement.classList.add(`difficulty-${squareSideLength}`)

      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      cellElement.innerHTML = num

      containerElement.append(cellElement);

      cellElement.addEventListener('click', function(){
        this.classList.toggle('bg-secondary')
        console.log(`Hai cliccato la casella ${num}`)
      });
    }
  }
);

//Funzione invocata dall'event listener per generare il tutto

/* function generateGrid() {
  console.log(`Ho cliccato il bottone con difficolta' ${squareSideLength}`)
  containerElement.classList.remove('difficulty-10', 'difficulty-9', 'difficulty-7')
  containerElement.innerHTML = '';
  for (let i = 0; i < Math.pow(squareSideLength, 2); i++) {
      const num = i + 1;
      containerElement.classList.add(`difficulty-${squareSideLength}`)

      const cellElement = document.createElement('div');
      cellElement.classList.add('cell')
      cellElement.innerHTML = num

      containerElement.append(cellElement)
    }
  }
} */