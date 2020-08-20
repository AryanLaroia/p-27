class Bob {
    constructor(x,y,radius) {
      var options = {
          
        'restitution':0.8,
        'friction':0.3,
        'density':0.11,
        isStatic : true
        
      }
      
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
     this.image = loadImage("hello.png");
     //this.body.scale = 0.001;
      World.add(world, this.body);
      
    }
    display(){

      rectMode(CENTER);
      ellipse(this.body.position.x,this.body.position.y,this.radius);
      

      
      
    }
  }