
function genDiv(){
    //used number will be 16 divs total 4x4 for now
    var n = 4;
    var board = document.getElementById('container');

    for(var i=0;i<n;i++){
        var row = document.createElement("div");
        row.className = "row";
        for(var j = 0;j<n; j++){
            var cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
}

genDiv();