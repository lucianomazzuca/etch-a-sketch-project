const container = document.querySelector('.container');
const btn = document.querySelector('button');

//Create grid
function createGrid(num){    
    container.style.setProperty('--grid-rows', num)
    container.style.setProperty('--grid-cols', num)
    
    for(let i = 0; i < num * num ; i++){
            let box = document.createElement('div');
            box.className = "box";

            container.appendChild(box);
    }
}

function deleteGrid(){
    container.innerHTML = "";
}

function changeGrid(num){
    deleteGrid();
    createGrid(num);
}


function changeBg(){
    let boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('mouseenter', function (e){
            this.style.backgroundColor ="black";
            console.log('selected box')
        })
    })
}


btn.addEventListener('click', function (e) {
    let gridSize = Number(prompt('Insert a grid size', 20));
    changeGrid(gridSize);
    changeBg();
})


createGrid(16)
changeBg();
