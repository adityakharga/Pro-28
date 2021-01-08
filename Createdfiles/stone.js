class Stone
 {
    constructor(x,y,width,height) 
    {
      var options = {
        restitution : 0,
        friction : 1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Images/stone.png")
      World.add(world, this.body);
    }
    display()
    {
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };