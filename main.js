var stump="";
var edgie="";

function preload(){
stump = loadSound("stump.mp3");
edgie = loadSound("edgie.mp3")  
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}