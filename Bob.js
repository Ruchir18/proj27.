class Bob {
    constructor(x, y,r) {
      var options = {
        isStatic:false,
        frictionAir: 0.0005,
        density:1.0
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body=Bodies.circle(x,y,this.r/2,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      strokeWeight(3);
      stroke("pink");
      fill(255);
      ellipse(0, 0,this.r);
      pop();
    }
  };
  