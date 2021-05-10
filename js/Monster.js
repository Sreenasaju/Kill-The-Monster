class Monster {
    constructor(x,y) {
      var options = {
         restitution: 1.0,
         friction : 1.0,
         density : 1.0
      }
      this.body = Bodies.rectangle(x,y,175,175,options);
      this.Image= loadImage("Images/Ultra Venom.png");
      this.width = 175;
      this.height = 175;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      
      image(this.Image,pos.x, pos.y,this.width,this.height);
    }
  };