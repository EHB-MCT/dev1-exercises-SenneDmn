"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

/** @type {CanvasRenderingContext2D} */
 

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawLines();
}

function drawLines() {
    let i = 1;
    while (i<=11) {
        
        Utils.drawLine(30, i * 10, 270, i*10);
        i ++ ;
    }
}