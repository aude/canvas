const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// use the ellipse() function to create the blue circle
// learning from https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/
ctx.beginPath();
ctx.ellipse(400, 300, 200, 200, 0, 0, 2*Math.PI);
ctx.fillStyle = "blue";
ctx.fill();
