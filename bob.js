class Bob{
    constructor(x, y, r){
    var options = {
        isStatic : false,
        restitution : 0.3,
        friction : 0,
        density : .12
    }
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x, this.y, this.r, options);
    //this.image = loadImage("paper.png");
    World.add(world, this.body);   
}  
display(){
    var pos = this.body.position;
    //pos.x = mouseX;
    //pos.y = mouseY;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("white");
    //rectMode(CENTER);
    //rect(0, 0, this.width, this.height);
    ellipseMode(RADIUS);
    ellipse(0, 0, this.r, this.r);
    pop();
}
}