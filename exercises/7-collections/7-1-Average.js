"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let numbers = [];

setup();

function setup(){
    for( let i = 0; i < 1000; i++) {
    numbers[i] = Utils.randomIntFromInterval(0, 100);
    }
    calculateAverage();
}

function calculateAverage(){

    let average = sumArray()/1000;
    console.log(average);
}

function sumArray() {
    let sum = 0;

    for (let j = 0; j < 1000; j++){
        sum += numbers[j];
    }

    return sum;
}