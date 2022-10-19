"use strict";
import context from "./context";

/**
 * Draws a filled ellipse of whicht the center is at a x, y
 * @param {number} x x coordinate of the center of the ellipe
 * @param {number} y y coordinate of the center of the ellipe
 * @param {number} rX horizontal radius of the ellipe (half of the width)
 * @param {number} rY vertical radius of the ellipe (half of the height)
 */

export function fillEllipse(x, y, rX, rY) {
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
    context.fill();
}

/**
 * 
 * @param {number} x1 
 * @param {number} y1 
 * @param {number} x2 
 * @param {number} y2 
 */
export function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}