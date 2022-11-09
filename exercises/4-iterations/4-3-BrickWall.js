"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawBricks();

function drawBricks() {
    context.fillStyle = "#7f170f";
    for (let i = 0; i < 6; i++ ){
        for (let j = 0; j < 6; j++){
            context.fillRect((50 + i * 95)+(j*50), 50 + j * 55, 90, 50);
        }
    }
}
