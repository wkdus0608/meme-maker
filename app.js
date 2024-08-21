const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const line_Width = document.getElementById("line-width");
const color = document.getElementById("color");
const colorOptions = Array.from(document.getElementsByClassName("color-options"));
const fillBtn = document.getElementById("fillBtn");
const clearBtn = document.getElementById("clearBtn");
const eraseBtn = document.getElementById("eraseBtn");
const fileInput = document.getElementById("file");
const textInput = document.getElementById("inputText");

canvas.width = 700;
canvas.height = 700;

ctx.lineCap = "round";

isPainting = false;
isFilling = false;

function onPainting(event) {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    }
    // ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
    isPainting = true;
}
function stopPainting() {
    isPainting = false;
    ctx.beginPath();
}
function widthChange(event) {
    ctx.lineWidth = event.target.value;
}
function colorChange(event) {
    console.log(event);
    ctx.strokeStyle = event.target.value;
}
function colorOptionsChange(event) {
    ctx.beginPath();
    ctx.strokeStyle = event.target.dataset.color;
    ctx.fillStyle = event.target.dataset.color;
    color.value = event.target.dataset.color;
}
function fillBtnClick() {
    if (isFilling) {
        isFilling = false;
        fillBtn.innerText = "Fill Mode";
    } else {
        isFilling = true;
        fillBtn.innerText = "Draw Mode";
    }
}
function canvasClick() {
    if (isFilling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}
function clearAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function eraseBtnClick() {
    isFilling = false;
    fillBtn.innerText = "Fill Mode";
    ctx.strokeStyle = "white";
}
function onFileChange(event) {
    console.dir(event.target);
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function() {
        ctx.drawImage(image, 50, 50, 700, 700);
    }
}
function onDoubleClick(event) {
    ctx.save();
    const text = textInput.value;
    ctx.lineWidth = 1; 
    ctx.font = "48px serif";
    console.log(event.offsetX, event.offsetY);
    ctx.fillText(text, event.offsetX, event.offsetY);
    ctx.restore();
}



canvas.addEventListener("mousemove", onPainting);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
line_Width.addEventListener("change", widthChange);
color.addEventListener("change", colorChange);
colorOptions.forEach(color => color.addEventListener("click", colorOptionsChange));
fillBtn.addEventListener("click", fillBtnClick);
canvas.addEventListener("click", canvasClick);
clearBtn.addEventListener("click", clearAll);
eraseBtn.addEventListener("click", eraseBtnClick);
fileInput.addEventListener("change", onFileChange);
canvas.addEventListener("dblclick", onDoubleClick);
