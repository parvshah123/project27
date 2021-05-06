class Chain{
  constructor(bodyA,pointB){
      var Option = {
          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.04,
          length:450
      }
      this.pointB = pointB;
      this.chain = Constraint.create(Option);
      World.add(world,this.chain);
  }
  display(){
      var pointA = this.chain.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(6);
      line(pointA.x,pointA.y,pointB.x,pointB.y);
  }

}