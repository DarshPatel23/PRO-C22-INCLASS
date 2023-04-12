class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.canon_image = loadImage("assets/canon.png");
    this.cannonBase_image = loadImage("assets/cannonBase.png")
    
  }
  
  display(){
    //code to create cannon top
    push()
    imageMode(CENTER)
    image(this.canon_image,this.x,this.y,this.width,this.height);
    pop()
    
    //code to create cannon base
    image(this.cannonBase_image,70,20,200,200)
    noFill()
  }
}
