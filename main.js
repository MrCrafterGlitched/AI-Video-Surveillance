video=""
Status=true
function preload() {
video=createVideo("video.mp4")
video.hide()
}
function setup() {
    canvas=createCanvas(580,380)
    canvas.center()
}
function draw(){
image(video,0,0,580,380)

}
function Start() {
    ObjectDetector=ml5.objectDetector("COCOSSD",model_loaded)
    document.getElementById("Status").innerHTML="Status:Detecting Objects"
}
function model_loaded() {
    console.log("Model loaded");
    Status=true
    video.loop()
    video.speed(1)
    video.volume(0)
}