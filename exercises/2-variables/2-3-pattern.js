"use strict";

let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');

    let width = context.canvas.width;
    let height = context.canvas.height;

    Patterns();
    
    function Patterns (){

        context.beginPath();
        context.fillStyle = "#303d4e";
        context.rect(0, 0, width/3, height/6);
        context.fill();

        context.beginPath();
        context.fillStyle = "#edf0f1";
        context.rect(width/3, 0, width/3, height/6);
        context.fill();

        context.beginPath();
        context.fillStyle = "#303d4e";
        context.rect(2*(width/3), 0, width/3, height/6);
        context.fill();

        context.beginPath();
        context.fillStyle = "#d55745";
        context.rect(0, height/6, width, height/3);
        context.fill();

        context.beginPath();
        context.fillStyle = "#303d4e";
        context.rect(0, height/2, width/3, height/6);
        context.fill();

        context.beginPath();
        context.fillStyle = "#edf0f1";
        context.rect(width/3, height/2, width/3, height/2);
        context.fill();

        context.beginPath();
        context.fillStyle = "#303d4e";
        context.rect(2*(width/3), height/2, width/3, height/6);
        context.fill();

        context.beginPath();
        context.fillStyle = "#5296d5";
        context.rect(0, 2*(height/3), width/3, height/3);
        context.fill();

        context.beginPath();
        context.fillStyle = "#5296d5";
        context.rect(2*(width/3), 2*(height/3), width/3, height/3);
        context.fill();
    }

