const sudoku_table = document.getElementById("sudoku_table");
var c;
var r;
var row0 = document.getElementById("row0");
var row1 = document.getElementById("row1");
var row2 = document.getElementById("row2");
var row3 = document.getElementById("row3");
var row4 = document.getElementById("row4");
var row5 = document.getElementById("row5");
var row6 = document.getElementById("row6");
var row7 = document.getElementById("row7");
var row8 = document.getElementById("row8");
var prevElement = 0;
var newElement;
var checkHor;
var checkVer;

var activeCell;

var grid = [];
var count = 0;


//console.log(row);

let cellArray = [newElement, prevElement];



var x = document.getElementById("sudoku_table").rows[0].cells.length;
console.log(x);


function addArray() {

    for (let i = 0; i < 9; i++) {
        grid[i] = [];

        for (let j = 0; j < 1; j++) {
            if(r === 0){ grid[i][j] = row0.innerText.split('\t'); }
            if(r === 1){ grid[i][j] = row1.innerText.split('\t'); }
            if(r === 2){ grid[i][j] = row2.innerText.split('\t'); }
            if(r === 3){ grid[i][j] = row3.innerText.split('\t'); }
            if(r === 4){ grid[i][j] = row4.innerText.split('\t'); }
            if(r === 5){ grid[i][j] = row5.innerText.split('\t'); }
            if(r === 6){ grid[i][j] = row6.innerText.split('\t'); }
            if(r === 7){ grid[i][j] = row7.innerText.split('\t'); }
            if(r === 8){ grid[i][j] = row8.innerText.split('\t'); }
        }
    }

    console.log(grid[r][c]);
    //console.log();
    //checkRow();
    checkCol();

    
}

function  getId(element) {

    newElement = element;
    activeCell = element;

    r = element.closest('tr').rowIndex
    c = element.closest('td').cellIndex

    console.log("row " + r + " -column " + c);

    newElement.classList.add('activeCell');

    console.log("PREV " + prevElement);

    if(prevElement != 0) {
    prevElement.classList.remove('activeCell'); }    

    prevElement = element;

    addArray();
    //checkRowAndColumn();
}


document.addEventListener('keypress', logKey);

function logKey(e) {
    if(e.code === "Digit1") {activeCell.textContent = `1`; activeCell.classList.add("addedNumber");};
    if(e.code === "Digit2") {activeCell.textContent = `2`; activeCell.classList.add("addedNumber");};
    if(e.code === "Digit3") {activeCell.textContent = `3`; activeCell.classList.add("addedNumber");};
    if(e.code === "Digit4") {activeCell.textContent = `4`; activeCell.classList.add("addedNumber");};
    if(e.code === "Digit5") {activeCell.textContent = `5`; activeCell.classList.add("addedNumber");};
    if(e.code === "Digit6") {activeCell.textContent = `6`; activeCell.classList.add("addedNumber");};
    if(e.code === "Digit7") {activeCell.textContent = `7`; activeCell.classList.add("addedNumber");};
    if(e.code === "Digit8") {activeCell.textContent = `8`; activeCell.classList.add("addedNumber");};
    if(e.code === "Digit9") {activeCell.textContent = `9`; activeCell.classList.add("addedNumber");};
    if(e.code === "KeyE") {activeCell.textContent = ``; activeCell.classList.remove("addedNumber");};
}

function checkRow() {
    for (var i = 0; i < 9; i++) {
        checkHor = grid[r][c][i];
        console.log(checkHor);
        if(checkHor === '7'){
            console.log("INNEHOLDER 7");
        }
    }
}

function checkCol() {
    console.log(grid[0][0][0]);
    // for (var i = 0; i < 9; i++) {
    //     checkVer = grid[r][c][i];
    //     console.log(checkVer);
        // if(checkVer === '7'){
        //     console.log("INNEHOLDER 7");
        // }
    // }
}


