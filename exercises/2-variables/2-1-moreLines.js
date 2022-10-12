"use strict";
let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');

let margin = 100;
let width = context.canvas.width;

drawLines();

function drawLines() { 
    context.beginPath();
    context.moveTo(margin,100);
    context.lineTo(width-margin,100);
    context.lineTo(margin,200);
    context.lineTo(width-margin,200);
    context.lineTo(margin,300);
    context.lineTo(width-margin,300);
    context.lineTo(margin,400);
    context.lineTo(width-margin,400);
    context.lineTo(margin,500);
    context.lineTo(width-margin,500);
    context.closePath();
    context.stroke();
}