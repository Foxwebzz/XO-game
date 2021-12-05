const boxesContainer = document.querySelector('.boxes')

createTable()

function createTable() {
    let text = ""
    
    for (let i = 0; i < 9; i++) {
        text += `
        <div class="box"></div>
        `
    }
    boxesContainer.innerHTML = text
}

let boxes = document.querySelectorAll('.box')


for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', addSymbol)
}

let symbol = "X" 

function addSymbol() {
    if(symbol === "X"){
        symbol = "O"
    }else{
        symbol="X"
    }
    this.innerHTML = symbol
    this.removeEventListener('click', addSymbol)
  
}