let numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  cellContainer = document.getElementById('cell-container');

numbersArray.forEach((number) => {
  cellContainer.innerHTML += '<li data-item=' + number + '>' + number + '</li>'
})

arrangeArray = () => {  
  cellContainer.innerHTML = ''
  for(let index of numbersArray){
    let cubeItem = document.createElement("li");
    cubeItem.innerHTML = index;
    cubeItem.setAttribute('data-item', index);
    cellContainer.appendChild(cubeItem);
  }
}

shuffle = function () {
  let index = 0
  numbersArray = numbersArray.sort(() =>  .5 - Math.random() );
  arrangeArray()
}

sort = () => {
  let index = 0
  numbersArray = numbersArray.sort((a, b) => { return a - b });
  arrangeArray();
}