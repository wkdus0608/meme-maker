const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("width-range");
const color = document.getElementById("color");


canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

let isPainting = false;

function onMove(event) {
    if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}
function onMouseDown() {
    isPainting = true;
}
function stopPainting() {
    isPainting = false;
}
function onLineWidthChange(event) {
    ctx.beginPath();
    ctx.lineWidth = event.target.value;
}
function onColorChange(event) {
    ctx.beginPath();
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}


canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);

lineWidth.addEventListener("change", onLineWidthChange);

color.addEventListener("change", onColorChange);