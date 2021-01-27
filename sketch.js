var jerry,tom;
var backgroundImg,tomImg,jerryImg;

function preload() {
    //load the images 
    backgroundImg = loadImage("images/garden.png");
    tomImg = loadImage("images/cat1.png");
    jerryImg = loadImage("images/mouse1.png")
}

function setup(){
    //create a canvas
    createCanvas(500,500);

    //create sprite
    jerry = createSprite(100,400,20,20);
    jerry.addImage(jerryImg);
    jerry.scale = 0.1;
    tom = createSprite(400,400,50,50);
    tom.addImage(tomImg);
    tom.scale = 0.1;

    //give them velocity
    tom.velocityX = -5;
    tom.velocityY = 0;
    
}

function draw() {
    //create background
    background(backgroundImg);
    
    //make the collision
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.velocityY = 0;
    }

    drawSprites();
}



