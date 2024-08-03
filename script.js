const color = "black"

const setSize = document.getElementById("setsize");
setSize.addEventListener("click", genDiv);


const maxWidth = 600;
const board = document.getElementById('container');

const clearb = document.getElementById('clearb');
const rainbowb = document.getElementById('rainbowb');

let ifRainbow = false;
rainbowb.addEventListener('input', (e) => {
    ifRainbow = e.target.checked;
    genDiv();
});

clearb.addEventListener('click', (e) => {
    genDiv();
});

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
            
            if(ifRainbow){
                cell.addEventListener("mouseover", paintRainbow);
            }
            else {
                cell.addEventListener("mouseover", paint);
            }


            row.appendChild(cell);            
        }        
        board.appendChild(row);

        var cells = document.getElementsByClassName("cell"); //sets grid to fit
        for(let k = 0; k < cells.length; k++){
            cells[k].style.width = maxWidth / n -2 + "px";
            cells[k].style.height = maxWidth / n + "px";
        }
    }
}

function paint(){
    this.style.backgroundColor = color;
}

function paintRainbow(){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
}

genDiv();