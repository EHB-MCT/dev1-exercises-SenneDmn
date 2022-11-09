"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawMazeLine();

function drawMazeLine() {

    for (let j = 0; j < height/10; j++){
    for (let i = 0; i < width/10; i++) {
        let number = Math.round(Math.random());
        let r = Utils.randomIntFromInterval (0, 255);
        let g = Utils.randomIntFromInterval (0, 255);
        let b = Utils.randomIntFromInterval (0, 255);
        console.log(number);

        if (number == 1) {
            Utils.drawLine(0+(10*i),0+(10*j),10+(10*i),10+(10*j));
        } else if (number == 0){
            Utils.drawLine(0+(10*i),10+(10*j),10+(10*i),0+(10*j));
        }
        context.lineWidth=5;
        context.strokeStyle= Utils.rgb(r,g,b);
    }
}
}