
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,ground,box;

var backgroundImg;

var obj;
var superhero ;
var box,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19;

function preload() {
  backgroundImage = loadImage("Images/sky-clipart-2.jpg");
}

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,300,800,10);
  superhero= new Hero(150,50);
  box = new Box(400,230,50,50);
  box1=new Box(400,200,50,50);
  box2=new Box(400,170,50,50);
  box3=new Box(400,140,50,50);
  box4=new Box(400,110,50,50);
  box5=new Box(450,230,50,50);
  box6=new Box(450,200,50,50);
  box7=new Box(450,170,50,50);
  box8=new Box(450,140,50,50);
  box9=new Box(450,110,50,50);
  box10=new Box(500,230,50,50);
  box11=new Box(500,200,50,50);
  box12=new Box(500,170,50,50);
  box13=new Box(500,140,50,50);
  box14=new Box(500,110,50,50);
  box15=new Box(550,230,50,50);
  box16=new Box(550,200,50,50);
  box17=new Box(550,170,50,50);
  box18=new Box(550,140,50,50);
   box19=new Box(550,110,50,50);

   herofly = new Fly(superhero.body,{x:150,y:170});
  
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

  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   
   box18.display();
   box19.display();
   
   

  //rect(obj.position.x,obj.position.y,40,40);

}
function mouseDragged(){
  // Matter.Body.setPosition(body to be set,position to be set)
  Matter.Body.setPosition(superhero.body,{ x : mouseX , y: mouseY});
}

function mouseReleased(){
  herofly.fly();
}

