"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();
let step=50;

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawGrid();
}

function drawGrid() {
    let i = 0;
    while (i<6) {
        let x = 75;
        let y = x;
        Utils.drawLines(75, 10 + i*step, 325, - i*step);
        Utils.drawLines(x, 75, x, 325);
        i += 1;
    }
}