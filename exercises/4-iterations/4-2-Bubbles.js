"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let margin = 200;

draw ();

function draw(){
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    drawBubbles();
}

function drawBubbles(){
    for(let i = 0; i < 70; i++){
        let x = Utils.randomIntFromInterval(200, width-200);
        let y = Utils.randomIntFromInterval(200, height-200);
        let h = Utils.randomIntFromInterval (0, 180);
        let a = Math.random();

        let radius = Utils.randomIntFromInterval(20, 70);

        context.fillStyle = Utils.hsla(h,50,50,a);
         Utils.fillAndStrokeCircle(x, y, radius);
    }
}

