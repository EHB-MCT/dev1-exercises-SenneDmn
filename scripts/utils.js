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
    context.ellipse(x, y, radius, radius, 0, 0);
}