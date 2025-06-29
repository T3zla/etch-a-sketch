const container = document.querySelector("#container");

for (let i = 0; i < 16; i++){
    const grid = document.createElement("div");
    grid.setAttribute("class", "square");
    container.appendChild(grid);
    console.log("div made")
    grid.addEventListener("mouseover", () => {
        grid.setAttribute("class", "changed");
    })
}