const container = document.querySelector('.container');
const btn = document.querySelector('button');

//Create grid
function createGrid(num){    
    
    for(let i = 0; i < num ; i++){
        // let row = document.createElement('div');
        // row.className = "row";

        // container.appendChild(row);

        for(let j = 0; j < num; j++){
            let box = document.createElement('div');
            box.className = "box";
            gridTemplateRows= "repeat(3, 1fr)"

            container.appendChild(box);
        }
    }
}

function deleteGrid(){
    container.innerHTML = "";
}

const boxes = document.querySelectorAll('.box');

//Change color
boxes.forEach(box => {
    box.addEventListener('mouseenter', function (e){
        this.style.backgroundColor="black"
        console.log('selected box')
    })
})


btn.addEventListener('click', function (e) {
    let gridSize = Number(prompt('Insert a grid size', 20));
    console.log(gridSize)
})

createGrid(16)


