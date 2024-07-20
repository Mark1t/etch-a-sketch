var color = "black"
//default for now is black color

var setSize = document.getElementById("setsize");
setSize.addEventListener("click", genDiv);


function genDiv(){
    //used number will be 16 divs total 4x4 for now
    var n = document.getElementById("size").value;

    if(n < 1 || n > 16){
        alert("Invalid entry");
        return;
    }

    var board = document.getElementById('container');
    board.innerHTML = "";

    for(var i=0;i<n;i++){
        var row = document.createElement("div");
        row.className = "row";
        for(var j = 0;j<n; j++){
            var cell = document.createElement("div");
            cell.className = "cell";
            
            cell.addEventListener("mouseover", paint)
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
}

function paint(){
    //console.log("Mouse hovered over cell");
    this.style.backgroundColor = color;
}

//idk how i forgot that you can recall the event's object by 'this'. I feel stupid..

genDiv();