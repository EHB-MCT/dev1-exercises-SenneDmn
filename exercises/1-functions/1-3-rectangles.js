"use strict";

let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');

drawRectangles();

function drawRectangles() {
//vierkant linksboven  
    context.strokeStyle = "red";
    context.beginPath();
    context.rect(50, 50, 150, 150);
    context.stroke();

//vierkant rechtsonder 
    context.strokeStyle = "red";
    context.beginPath();
    context.rect(200, 200, 150, 150);
    context.stroke();

//vierkant midden  
    context.strokeStyle = "red";
    context.beginPath();
    context.rect(125, 125, 150, 150);
    context.stroke();
    context.fill();

//rechtsboven_stroke 
    context.strokeStyle = "red";
    context.beginPath();
    context.rect(275, 75, 50, 50);
    context.stroke();

//rechtsboven_fill 
    context.strokeStyle = "red";
    context.beginPath();
    context.rect(325, 50, 25, 25);
    context.fill();

//linksonder_stroke 
    context.strokeStyle = "red";
    context.beginPath();
    context.rect(75, 275, 50, 50);
    context.stroke();

//linksonder_fill 
    context.strokeStyle = "red";
    context.beginPath();
    context.rect(50, 325, 25, 25);
    context.fill(); 
}