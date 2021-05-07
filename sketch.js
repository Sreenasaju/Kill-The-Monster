
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,box;

var backgroundImg;

var obj;
var superhero ;
function preload() {
  backgroundImage = loadImage("Images/sky-clipart-2.jpg");
}

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,300,800,10);
  superhero= new Hero(150,50);
  // var options = {
  //   isStatic : true
  // };

  // obj = Bodies.rectangle(250,300,40,40,options);  // x,y,width,height
  // World.add(world,obj);
  //console.log(obj);
  // create sprites here

}

function draw() {
 // background(backgroundImage);
  background(0);
  Engine.update(engine);
  ground.display();
  superhero.display();
  //rect(obj.position.x,obj.position.y,40,40);

}

