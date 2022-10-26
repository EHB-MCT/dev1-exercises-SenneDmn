"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

draw ();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#f2a93b";
    context.fillRect(0, 0, width, height);
    drawLines();
    drawLines2();
}


function drawLines() {
    let step = 10;
    let amount = width / step;
    for(let i = 0; i < amount; i++) {
        Utils.drawLines(step * i, 0, width - (step * i), height);
    }
}

function drawLines2() {
    let step = 10;
    let amount = height / step;
    for(let i = 0; i < amount; i++) {
        Utils.drawLines(0, step * i, width, height - (step * i));
    }
}