var canvas, box, surface1, surface2, surface3, surface4;
var music, edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,590,180,20);
    surface1.shapeColor = "red";

    surface2 = createSprite(300,590,180,20);
    surface2.shapeColor = "green";

    surface3 = createSprite(500,590,180,20);
    surface3.shapeColor = "blue";

    surface4 = createSprite(700,590,180,20);
    surface4.shapeColor = "yellow";

    box = createSprite(random(20,700),random(10,590),20,20);
    box.shapeColor = "white";
    box.setVelocity(5,14);

    edges=createEdgeSprites();
    //create box sprite and give velocity

}

function draw() {
    background(0);
    //create edgeSprite

    if (box.isTouching(surface1)){
        box.shapeColor = "white";
        box.setVelocity(0,0);
        textSize(20);
        fill("white");
        text("Press 'R' to Reset !!",320,300);
    }
    if (box.isTouching(surface2) && box.bounceOff(surface2)){
        box.shapeColor = surface2.shapeColor;
    }
    if (box.isTouching(surface3) && box.bounceOff(surface3)){
        box.shapeColor = surface3.shapeColor;
    }
    if (box.isTouching(surface4) && box.bounceOff(surface4)){
        box.shapeColor = surface4.shapeColor;
    }
    if (keyDown("r")){
    box.x = random(20,700);
    box.y = random(10,590);
    box.setVelocity(5,14);
    }


    //add condition to check if box touching surface and make it box
    box.bounceOff(edges);
    //box.bounceOff(surface1);
    box.bounceOff(surface2);
    box.bounceOff(surface3);
    box.bounceOff(surface4);
    drawSprites();
}
