const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const line_Width = document.getElementById("line-width");
const color = document.getElementById("color");
const colorOptions = Array.from(document.getElementsByClassName("color-options"));
const fillBtn = document.getElementById("fillBtn");
const clearBtn = document.getElementById("clearAll");
const eraser = document.getElementById("eraser");
const file = document.getElementById("file");
const textInput = document.getElementById("text");
const save = document.getElementById("saveBtn");

canvas.width = 700;
canvas.height = 700;

isPainting = false;
isFilling = false;

function line(event) {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY)
        ctx.stroke();
    }
}
function startDrawing() {
    isPainting = true;
}
function stopDrawing() {
    isPainting = false;
    ctx.beginPath();
}
function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value;
}
function onColorChange(event) {
    ctx.strokeStyle = event.target.value;
}
function onColorOptionsChange(event) {
    ctx.strokeStyle = event.target.dataset.color;
    ctx.fillStyle = event.target.dataset.color;
    color.value = event.target.dataset.color;
}
function fillMode() {
    if (isFilling) {
        isFilling = false;
        fillBtn.innerText = "Fill";
    } else {
        isFilling = true;
        fillBtn.innerText = "Draw";
    }
}
function onCanvasClick() {
    if (isFilling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}
function clearAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function onErase() {
    isFilling = false;
    fillBtn.innerText = "Fill";
    ctx.strokeStyle = "white";
}
function onFileChange(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function () {
        ctx.drawImage(image, 50, 50, 100, 100);
    }
}
function onDoubleClick(event) {
    const text = textInput.value;
    ctx.font = "50px serif";
    ctx.fillText(text, event.offsetX, event.offsetY);
}
function onSave() {
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "My Drawing.png";
    a.click();
}



canvas.addEventListener("mousemove", line);
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseleave", stopDrawing);
line_Width.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach(color => color.addEventListener("click", onColorOptionsChange));
fillBtn.addEventListener("click", fillMode);
canvas.addEventListener("click", onCanvasClick);
clearBtn.addEventListener("click", clearAll);
eraser.addEventListener("click", onErase);
file.addEventListener("change", onFileChange);
canvas.addEventListener("dblclick", onDoubleClick);
save.addEventListener("click", onSave);