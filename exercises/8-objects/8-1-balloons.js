"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let balloons = [];

setup ();

update ();

function setup() {

    for (let i = 0; i < 60; i++){
    let balloon = {
        x: 100 + Utils.randomNumber(1,30) * 50,
        y: height,
        ySpeed: Utils.randomNumber(2,20),
        hue: Utils.randomNumber(0, 60),

        };
        balloons[i] = balloon;
    }    
}

function update() {
    context.fillStyle = "#b5d7e4";
    context.fillRect(0, 0, width, height);
for (let i = 0; i < balloons.length; i++) {
    let balloon = balloons [i];
    balloon.x += Utils.randomNumber(-2, 2);
    balloon.y += Utils.randomNumber (-1*balloon.ySpeed, 0);

    drawBalloon(balloon);
    }
    requestAnimationFrame(update);
}

function drawBalloon(balloon) {
    context.fillStyle = "black";
    context.fillRect(balloon.x, balloon.y, 3, 100);
    context.fillStyle = Utils.hsl(balloon.hue, 100, 50);
    Utils.fillEllipse(balloon.x, balloon.y, 30, 50);
    
}