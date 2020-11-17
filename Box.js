class Box {
    //properties
    constructor(xpos,ypos,width,height){
        var options = {
            'restitution': 1,
            'friction': 0.001,
            'density': 1.0
           
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(xpos,ypos,width,height,options);
        World.add(world,this.body);
      }


    //function
    display(){
        var pos = this.body.position;
        var angle  = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER); 
        fill("blue");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }

}