"use strict";
let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');
    
    drawBox(60, 600);
    drawBox(100, 515);
    drawBox(140, 430);
    drawBox(180, 345);
    drawBox(220, 260);
    drawBox(260, 175);
    drawBox(287, 120);
    drawBox(324, 45);
    
function drawBox(pos, size){

    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    console.log(r, g, b);
    let color = "rgb(" + r + "," + g + "," + b +")";
    
    context.fillStyle = color;
    context.fillRect(pos,pos,size,size);   
}

