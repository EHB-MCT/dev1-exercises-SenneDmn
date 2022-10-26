"use strict";
import context from "./context.js";

/**
 * Draws a line between 2 points
 * @param {number} x1 coordinate begin x
 * @param {number} y1 coordinate begin y
 * @param {number} x2 coordinate end x
 * @param {number} y2 coordinate end y
 */
export function drawLines(x1, y1, x2, y2){
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

/**
 * Draws a circle
 * @param {*} x coordinate middle x
 * @param {*} y coordinate middle y
 * @param {*} radius radius of the  circle
 */

export function strokeCircle (x, y, radius){
    context.beginPath();
    context.ellipse(x, y, radius, radius, 0, 0, Math.PI*2);
    context.stroke(); 
}

/**
 * Draws a filled circle
 * @param {*} x coordinate middle x
 * @param {*} y coordinate middle y
 * @param {*} radius radius of the  circle
 */

 export function fillAndStrokeCircle (x, y, radius){
    context.beginPath();
    context.ellipse(x, y, radius, radius, 0, 0, Math.PI*2);
    context.fill(); 
}

/**
 * Draws a filled circle
 * @param {*} x coordinate middle x
 * @param {*} y coordinate middle y
 * @param {*} rX X radius
 * @param {*} rY Y radios
 */

 export function fillAndStrokeEllipse (x, y, rX, rY){
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI*2);
    context.fill(); 
}

/**
 * @param {*} r red number between 0 and 255
 * @param {*} g green number between 0 and 255
 * @param {*} b blue number between 0 and 255
 */

 export function rgb (r, g, b){
    let rgb = "rgb(" + r + "," + g + "," + b + ")";
    return rgb;
 }

 /**
  * @param {*} max maximum
  * @param {*} min minimum
  */

 export function randomIntFromInterval(min, max) {
    return Math.floor (Math.random()* (max -min + 1)+min);
 }

 /**
  * @param {*} H Hue
  * @param {*} S Saturaton
  * @param {*} L Lightness
  * @param {*} a Alpha
  */

  export function hsla (H, S, L, a) {
    let hsla = "hsla("+ H + "," + S + "%," + L + "%," + a + ")"; 
    return hsla;
 }