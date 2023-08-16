var mouse_event="empty";
var last_x,last_y;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color="cyan";
width=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value ;
    width=document.getElementById("width").value ;
    mouse_event="mouseDown";

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouse_event="mouseUP";
    
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseleave";
    
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    if(mouse_event=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = color; 
    ctx.lineWidth = width;
ctx.moveTo(last_x,last_y);
ctx.lineTo(current_x,current_y);
ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y; 
}
function clear_area() 
{ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);}