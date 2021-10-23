video=""
Status=true
objects=[]
function preload() {
video=createVideo("video.mp4")
video.hide()
}
function setup() {
    canvas=createCanvas(580,380)
    canvas.center()
}
function Start() {
    objectDetector=ml5.objectDetector("cocossd",model_loaded)
    document.getElementById("Status").innerHTML="Status:Detecting Objects"
}
function model_loaded() {
    console.log("Model loaded");
    Status=true
    video.loop()
    video.speed(1)
    video.volume(0)
}
function getResults(error,results) {
    if (error) {
        console.log(error)
    }else{
        console.log(results)
    objects=results
    }
}
function draw(){
    image(video,0,0,580,380)
    if (Status!="") {
        objectDetector.detect(video,getResults)
    for (let i = 0; i < objects.length; i++) {
     document.getElementById("Status").innerHTML="Status: Objects detected"
     document.getElementById("Number").innerHTML="Number of objects found:"+ objects.length
     fill("#39a377")   
    percent=floor(objects[i].confidence*100)
    text(objects[i].label+"" +percent+ "%",objects[i].x +15,objects[i].y+15)
    noFill()
    stroke("#39a377")
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
    }
    }
}