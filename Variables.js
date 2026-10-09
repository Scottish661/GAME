const CS = 360;
document.body.style.margin="0px";
let h = document.getElementById("h");
let canvas = document.getElementById("canvas");
if(canvas){
    canvas.style.border = "1px solid blue";
    }
let pen = canvas.getContext("2d");
canvas.width = CS;
canvas.height = CS;
