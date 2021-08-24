const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

function preload() {
    zombie1 = loadImage("./assets/zombie1.png");
    zombie2 = loadImage("./assets/zombie2.png");

    zombie3 = loadImage("./assets/zombie3.png");
    zombie4 = loadImage("./assets/zombie4.png");

    backgroundImage = loadImage("./assets/background.png");
}

function setup() {
    zombie = createSprite(width/2, height - 110);
    zombie.addAnimation("leftoright", zombie1, zombie2, zombie1);
    zombie.addAnimation("rightoleft", zombie3, zombie4, zombie3);
    zombie.scale = 0.1;
    zombie.velocityX = 10;

    breakButton = createButton("");
    breakButton.position(width - 200, height / 2 - 50);
    breakButton.class("breakButton");
    breakButton.mousePressed(handleButtonPress);
}

function draw() {
    drawSprites();
}

function handleButtonPress() {
    jointLink.detach();
    setTimeout(() => {
    bridge.break();
    }, 1500);
}