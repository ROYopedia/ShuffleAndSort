let numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  cellContainer = document.getElementById('cell-container');

numbersArray.forEach((number) => {
  cellContainer.innerHTML += '<li data-item=' + number + '>' + number + '</li>'
})

arrangeArray = () => {  
  cellContainer.innerHTML = ''
  for(let index of numbersArray){
    let item = document.createElement("li");
    item.innerHTML = index;
    item.setAttribute('data-item', index);
    cellContainer.appendChild(item);
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