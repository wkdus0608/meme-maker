const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("width-range");
const color = document.getElementById("color");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const modeBtn = document.getElementById("mode-btn");
const removeBtn = document.getElementById("removeAll-btn");
const eraserBtn = document.getElementById("eraser-btn");


canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

let isPainting = false;
let isFilling = false;

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
    ctx.beginPath();
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
function onColorOptionClick(event) {
    ctx.beginPath();
    ctx.strokeStyle = event.target.dataset.color;
    ctx.fillStyle = event.target.dataset.color;
    color.value = event.target.dataset.color;
}
function onFillChange() {
    if (isFilling) {
        isFilling = false;
        modeBtn.innerText = "Fill Mode";
    } else {
        isFilling = true;
        modeBtn.innerText = "Draw Mode";
    }

}
function onCanvasClick(event) {
    if (isFilling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}
function onRemoveAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function onEraser() {
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill Mode";
}


canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
canvas.addEventListener("click", onCanvasClick);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach(color => color.addEventListener("click", onColorOptionClick));
modeBtn.addEventListener("click", onFillChange);
removeBtn.addEventListener("click", onRemoveAll);
eraserBtn.addEventListener("click", onEraser);