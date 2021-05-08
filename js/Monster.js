class Monster {
    constructor(x,y) {
      var options = {
         //restitution: 1.0,
         friction : 1.0,
         density : 1.0
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.Image= loadImage("Images/Ultra Venom.png");
    //   this.width = width;
    //   this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      
      image(this.Image,pos.x, pos.y,300,100);
    }
  };