class Hero {
    constructor(x,y) {
      var options = {
         //restitution: 1.0,
         friction : 1.0,
         density : 1.0
      }
      this.body = Bodies.rectangle(x,y,300,100,options);
      this.Image= loadImage("Images/Superhero.png");
      this.width = 300;
      this.height = 100;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      
      image(this.Image,pos.x, pos.y,this.width,this.height);
    }
  };