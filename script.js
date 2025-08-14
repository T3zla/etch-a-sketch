const container = document.querySelector("#container");

//Rows are created with divs, amount of divs to be determined
function createRow(gridSize) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let i = 0; i < gridSize; i++){
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        row.appendChild(square);
        square.addEventListener("mouseover", () => {
            square.classList.add("class", "changed");
        })
    }
    container.appendChild(row)
}

// Creates multiple rows to create a grid
function makeGrid(gridSize){
    for (let i = 0; i < gridSize; i++){
        createRow(gridSize)
    }
}

let currentGridSize = 16;
makeGrid(currentGridSize);

//Create the input div activated on Reset button
const userInput = document.createElement("div");
userInput.setAttribute("id", "userIn");
userInput.classList.add("inactive");
userInput.textContent = "Choose your grid size";

const userSelection = document.createElement("input");
userInput.appendChild(userSelection); 
document.body.appendChild(userInput);
userSelection.type = "number";
userSelection.min = 1;
userSelection.max = 100;
userSelection.value = currentGridSize;


const doItBtn = document.createElement("button");
doItBtn.setAttribute("id", "MakeGridBtn");
doItBtn.textContent = "Make my grid";
userInput.appendChild(doItBtn);

//const allSquares = document.querySelectorAll(".square");
const resetBtn = document.querySelector("#reset")

resetBtn.addEventListener("click", () => { 
    const allSquares = document.querySelectorAll(".square");
    userInput.classList.toggle("inactive");
    allSquares.forEach((square) => {
        square.classList.remove("changed");  
   
    })
})

doItBtn.addEventListener("click", () =>{
    currentGridSize = Number(userSelection.value);
    container.innerHTML = '';
    makeGrid(currentGridSize);
    userInput.classList.toggle("inactive");
    
})





