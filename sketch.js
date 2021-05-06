
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,box;

var backgroundImg;

function preload() {
  backgroundImage = loadImage("Images/sky-clipart-2.jpg");
}

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  // create sprites here

}

function draw() {
  background(backgroundImage);
  //background(0);
  Engine.update(engine);

}

