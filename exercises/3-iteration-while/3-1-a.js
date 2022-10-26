"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let step = 25;
 

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawLines();
}

function drawLines() {
    let i = 0;
    while (i<=11) {
        
        Utils.drawLines(75, 75+step*i, 325, 75+step*i);
        i += 1;
    }
}