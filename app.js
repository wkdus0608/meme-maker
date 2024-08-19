const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;


//클릭하면 event.offsetX event.offsetY로 선 그림

const colors = [
    // "#1abc9c",
    // "#2ecc71",
    // "#3498db",
    // "#9b59b6",
    // "#34495e",
    // "#16a085",
    // "#27ae60",
    // "#2980b9",
    // "#8e44ad",
    // "#2c3e50",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
];



function onClick(event) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    const color = colors[Math.floor(Math.random() * colors.length)];

    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("click", onClick);