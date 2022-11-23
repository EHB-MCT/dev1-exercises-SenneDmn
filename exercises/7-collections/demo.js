"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let bubblesAmount = 50;
let xPos = [];
let yPos = [];
let sizes = [];
let ySpeeds = [];

setup();

function setup() {
    for( let i = 0; i < bubblesAmount; i++) {
        xPos[i] = width/2;
        yPos [i] = height - 50;
        sizes[i] = 30 + Math.random() * 20;
        ySpeeds[i] = 10 + Math.random() * 10;
    }
    update (); 
}

function update () {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    for(let i = 0; i < bubblesAmount; i++) {
        yPos[i] -= ySpeeds[i];
        xPos [i] += Math.random() * 10 - 5;
        drawBubble(xPos[i], yPos[i], sizes[i], 180);
    }
    
    requestAnimationFrame(update);
}

function drawBubble(x , y, size, hue) {
    context.fillStyle = Utils.hsl(hue, 50, 50);
    Utils.fillCircle(x, y, size);
    context.fillStyle = Utils.hsl(hue, 50, 75);
    Utils.fillCircle(x + size / 3, y - size / 3, size /4);
}


