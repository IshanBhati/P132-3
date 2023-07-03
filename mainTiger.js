statuses = "";

function preload()
{
    img = loadImage("tigerOBJ.jpg");
}

function setup()
{
   canvas = createCanvas(450,450);
   canvas.center();

   objectDetector = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded");
    statuses = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(results, error)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    object = results;
}