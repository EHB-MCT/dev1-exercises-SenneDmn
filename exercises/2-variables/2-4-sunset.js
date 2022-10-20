"use strict";

let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');

    let width = context.canvas.width;
    let height = context.canvas.height;

    drawSunset();

    function drawSunset (){

        context.beginPath();
        context.fillStyle = "#ea9e24";
        context.rect(0, 0, width, height/4);
        context.fill();

        context.beginPath();
        context.fillStyle = "#fd701b";
        context.rect(0, height/4, width, height/4);
        context.fill();

        context.beginPath();
        context.fillStyle = "#a52002";
        context.rect(0, 2*(height/4), width, height/4);
        context.fill();

        context.beginPath();
        context.fillStyle = "#ffffc8";
        context.ellipse(width/2, 3*(height/4), width/4, width/4, Math.PI, 0, Math.PI*2);
        context.fill();

        context.beginPath();
        context.fillStyle = "#00198c";
        context.rect(0, 3*(height/4), width, height/4);
        context.fill();
    }
  