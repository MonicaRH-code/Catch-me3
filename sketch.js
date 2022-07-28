



function setup(){
createCanvas(windowWidth,windowHeight);

}

function draw(){
background(bimg);
if(screen == 0){
    startScreen();
} else if(screen == 1){
    gameOn();
} else if(screen == 2){
    gameEnd();
}
}


function startScreen(){
background(bimg1)
fill("black")
textAlign(CENTER);
textSize(50);
text("Catch Me If You Can!!!", width/2,height/3);
textSize(60);
text("click to start", width/2,height/3+50);
reset();
}


