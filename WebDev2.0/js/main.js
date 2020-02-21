var startTime = new Date().getTime();
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
        }
    return color;
}
function reAppear(){
    var topPix = Math.random() * 400;

    var leftPix = Math.random() * 400;

    var radi = (Math.random()*400)+100;

    if(Math.random() < 0.5){
        document.getElementById("shape").style.borderRadius = "50%";
    }else
    {
        document.getElementById("shape").style.borderRadius = '0';
    }

    document.getElementById('shape').style.top= topPix + "px";

    document.getElementById('shape').style.left = leftPix + "px";

    document.getElementById('shape').style.width= radi + "px";

    document.getElementById('shape').style.height= radi + "px";

    document.getElementById('shape').style.backgroundColor = getRandomColor();

    document.getElementById('shape').style.display = "block";

    var startTime = new Date().getTime();
}
var timeTaken = 0;
function appearDelay(){
    timeTaken = 0;
    setTimeout(reAppear,Math.random() * 1000);
}
appearDelay();

document.getElementById('shape').onclick = function(){
    document.getElementById('shape').style.display = 'none';
    var endTime = new Date().getTime();
    var timeTaken = (endTime - startTime) / 1000;
    
    document.getElementById('timeTaken').innerHTML = timeTaken + ' s';
    
    appearDelay();
    
}