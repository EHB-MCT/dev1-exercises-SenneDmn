"use strict";

let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');

drawName();

function drawName() {
    
    //Letter 's'
    context.beginPath();
    context.strokeStyle = "#885053";
    context.lineWidth = 15;
    context.moveTo(190, 60);
    context.lineTo(180, 50);
    context.lineTo(100, 50);
    context.lineTo(70, 100);
    context.lineTo(70, 130);
    context.lineTo(100, 160);
    context.lineTo(180, 160);
    context.lineTo(210, 210);
    context.lineTo(210, 240);
    context.lineTo(180, 270);
    context.lineTo(90, 270);
    context.lineTo(80, 260);
    context.stroke();

    //Letter 'e'(1)
    context.beginPath();
    context.strokeStyle = "#FE5F55";
    context.moveTo(230, 200);
    context.lineTo(340, 200);
    context.lineTo(315, 150);
    context.lineTo(255, 150);
    context.lineTo(230, 200);
    context.lineTo(230, 220);
    context.lineTo(240, 240);
    context.lineTo(245, 245);
    context.lineTo(250, 250);
    context.lineTo(255, 255);
    context.lineTo(260, 260);
    context.lineTo(265, 265);
    context.lineTo(320, 265);
    context.stroke();

    //Letter 'n'(1)
    context.beginPath();
    context.strokeStyle = "#777DA7";
    context.moveTo(360, 150);
    context.lineTo(360, 265);
    context.lineTo(360, 160);
    context.lineTo(365, 155);
    context.lineTo(370, 152);
    context.lineTo(373, 151);
    context.lineTo(440, 151);
    context.lineTo(443, 152);
    context.lineTo(448, 155);
    context.lineTo(453, 160);
    context.lineTo(453, 265);
    context.stroke();

    //Letter 'n'(2)
    context.beginPath();
    context.strokeStyle = "#94C9A9";
    context.moveTo(480, 150);
    context.lineTo(480, 265);
    context.lineTo(480, 160);
    context.lineTo(485, 155);
    context.lineTo(490, 152);
    context.lineTo(493, 151);
    context.lineTo(560, 151);
    context.lineTo(563, 152);
    context.lineTo(568, 155);
    context.lineTo(573, 160);
    context.lineTo(573, 265);
    context.stroke();

    //Letter 'e'(2)
    context.beginPath();
    context.strokeStyle = "#F0F600";
    context.moveTo(595, 200);
    context.lineTo(705, 200);
    context.lineTo(680, 150);
    context.lineTo(620, 150);
    context.lineTo(595, 200);
    context.lineTo(595, 220);
    context.lineTo(605, 240);
    context.lineTo(610, 245);
    context.lineTo(615, 250);
    context.lineTo(620, 255);
    context.lineTo(625, 260);
    context.lineTo(630, 265);
    context.lineTo(685, 265);
    context.stroke();
}



