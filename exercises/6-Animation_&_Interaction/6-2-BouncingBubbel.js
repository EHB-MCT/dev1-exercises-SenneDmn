"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let frameCount = 0;
let xPos = 0;
let yPos = 0;
let moveRight = true;
let moveDown = true;


drawBubble();


function drawBubble (){
    frameCount++;
    console.log(xPos);

    if (moveRight == true) {

        if (moveDown == true){
            context.fillStyle = "white";
            context.fillRect(0, 0, width, height);
            context.fillStyle = "blue";
            Utils.fillCircle(xPos, yPos, 50);
        
            xPos += 10;
            yPos += 10;

            if(yPos > width) {
                moveDown = false;
            }
            if(xPos > width) {
                moveRight = false;
            }
        }

        if (moveDown == false) {
            context.fillStyle = "white";
            context.fillRect(0, 0, width, height);
            context.fillStyle = "blue";
            Utils.fillCircle(xPos, yPos, 50);
        
            xPos += 10;
            yPos -= 10;

            if(xPos > width) {
                moveRight = false;
            }
        }
    }

    if (moveRight == false) {

        if (moveDown == true){
        context.fillStyle = "white";
        context.fillRect(0, 0, width, height);
        context.fillStyle = "blue";
        Utils.fillCircle(xPos, 300, 50);
    
        xPos -= 10;
        yPos += 10;

        if (yPos > height){
            moveDown = false;
        }

        if (xPos == 0) {
            moveRight = true;
        }
    }
    if (moveDown == false){
        context.fillStyle = "white";
        context.fillRect(0, 0, width, height);
        context.fillStyle = "blue";
        Utils.fillCircle(xPos, yPos, 50);
    
        xPos -= 10;
        yPos -= 10;

        if (yPos == 0){
            moveDown = true;
        }

        if (xPos == 0) {
            moveRight = true;
        }
    }
    }
    requestAnimationFrame(drawBubble);
}