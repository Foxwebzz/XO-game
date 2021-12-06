const boxesContainer = document.querySelector('.boxes')
let boxes = "";

createTable()
function createTable() {
    let text = ""
    
    for (let i = 0; i < 9; i++) {
        text += `
        <div class="box"></div>
        `
    }
    boxesContainer.innerHTML = text
    boxes = document.querySelectorAll('.box')
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', addSymbol)
    }
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
    checkLines()
}


function checkLines() {
    let lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ]

    lines.forEach(function(line) {
        let box1 = boxes [line[0]]       
        let box2 = boxes [line[1]]       
        let box3 = boxes [line[2]]       

        if (box1.innerHTML === box2.innerHTML && 
            box1.innerHTML === box3.innerHTML &&
            box1.innerHTML != "") {
                
                setTimeout(function() {
                    box1.style.background = "green"
                    box2.style.background = "green"
                    box3.style.background = "green"
                },1000)

                setTimeout(function() {
                    box1.style.background = "transparent"
                    box2.style.background = "transparent"
                    box3.style.background = "transparent"
                    createTable()

                },3000)
        }
    })

}

