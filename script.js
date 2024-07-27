const color = "black"
//default for now is black color

const setSize = document.getElementById("setsize");
setSize.addEventListener("click", genDiv);

const maxWidth = 600;
const board = document.getElementById('container');

function genDiv(){
    var n = document.getElementById("size").value;

    if(n < 1 || n > 100){
        alert("Invalid entry");
        return;
    }
    
    board.innerHTML = ""; //board clear after size change

    for(var i=0;i<n;i++){
        var row = document.createElement("div");
        row.className = "row";
        for(var j = 0;j<n; j++){
            var cell = document.createElement("div");
            cell.className = "cell";
            cell.addEventListener("mouseover", paint);
            row.appendChild(cell);            
        }        
        board.appendChild(row);

        var cells = document.getElementsByClassName("cell");
        for(let k = 0; k < cells.length; k++){
            cells[k].style.width = maxWidth / n -2 + "px";
            cells[k].style.height = maxWidth / n + "px";
        }
    }
}

function paint(){
    this.style.backgroundColor = color;
}

//idk how i forgot that you can recall the event's object by 'this'. I feel stupid..

genDiv();