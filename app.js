const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.moveTo(50,50);
ctx.lineTo(100,50);
ctx.lineTo(100,100);
ctx.lineTo(50,100);
ctx.lineTo(50,50);

ctx.fill();