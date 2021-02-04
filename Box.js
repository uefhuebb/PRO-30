class Box {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':false,
          'restitution':0.4,
          'friction':0,
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      this.Visiblity = 255;
      
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed<3){
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
   }
    

else {
  push();
  World.remove(world,this.body);
  
  pop();
}  
  
  
  
  }  

}
  