const container = document.querySelector("#container");

function createRow() {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let i = 0; i < 16; i++){
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        row.appendChild(square);
        square.addEventListener("mouseover", () => {
            square.setAttribute("class", "changed");
        })
    }
    container.appendChild(row)
}

for (let i = 0; i < 16; i++){
    createRow();
}

