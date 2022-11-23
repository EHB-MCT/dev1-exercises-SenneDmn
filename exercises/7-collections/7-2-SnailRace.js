"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let xPos = [];
let stop = false;
let winner;
let textHeight;


setup();
draw();

function setup() {
    context.textAlign = "center";
    context.fillStyle = "white";
    for( let i = 0; i < 5; i++) {
        xPos[i] = 0;
    }
    draw();
}

function draw() {
    let space = height / 5;

    context.fillStyle = "darkgrey";
            context.fillRect(0,0, width, height);
            context.fillStyle = "grey";
            context.fillRect(0,space, width, space);
            context.fillRect(0,space*3, width, space);

    for(let i = 0; i < 5; i++) {
        xPos[i] += Math.random() * 5;

            
        if(xPos[i] < width){
            drawSnail(xPos[i], (space * i)+space/2 , space, i+1);
            
        }
        else {
            drawSnail(xPos[i], (space * i)+space/2 , space, i+1);
            stop=true;
            winner= i+1;
            textHeight= i;
        }
    }
        if(stop== true){
            cancelAnimationFrame(draw);
            context.fillStyle = "darkred";
        context.font = "pt Arial";
        context.fillText("Snail "+ winner + " has won", width/2, (space * textHeight)+space/2, 350);
        }
        else {
            requestAnimationFrame(draw);
        }
}



function drawSnail(x, y, sizeY, number) {

    let sizeDiff = sizeY / 4 / 5;
    context.beginPath();
    context.fillStyle = "green";
    context.ellipse(x + sizeY / 24, y + sizeY / 4, sizeY / 2, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2, y + sizeY / 8, sizeY / 4, sizeY / 8, Math.PI / 4 * 3, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2 + sizeY / 16, y - sizeY / 8, sizeY / 16, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "orange";
    context.fillStyle = "darkorange";
    for (let i = 0; i < 5; i++) {
        context.beginPath();
        context.arc(x, y, sizeY / 3 - sizeDiff * i, 0, Math.PI * 2);
        context.fill();
        context.stroke();
    }
    context.fillStyle = "black";
    context.font = "bold " + sizeY / 5 + "pt Arial";
    context.fillText(number, x, y + sizeY / 8);
}