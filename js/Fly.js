class Fly{
    constructor(bodyA,pointB) {
        var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.1,
          length: 10
        }

     
      this.sling=Constraint.create(options);
      this.pointB = pointB;  
      
      World.add(world, this.sling);

    }

    fly(){
      this.sling.bodyA=null;
    }

    Attach(body){
      this.sling.bodyA=body
    }
      /*display(){

        

        if(this.sling.bodyA){
          var pointA = this.sling.bodyA.position;
          var pointB = this.pointB;
          push();  
          strokeWeight(4);
 
          if(pointA.x < 220) {
           strokeWeight(7);
           line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
           line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
           image(this.sling3,pointA.x -30, pointA.y -10,15,30);
          }
          else{
              strokeWeight(3);
              line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
              line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
              image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
          }
          pop(); 
        }
        
      }*/
}