class Ground {
    //properties
    constructor(xpos,ypos,width,height){
        var options = {
            'isStatic': true
           
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(xpos,ypos,width,height,options);
        World.add(world,this.body);
      }


    //function
    display(){
        var pos = this.body.position;
        
        rectMode(CENTER); 
        fill("grey");
        rect(pos.x,pos.y,this.width,this.height);
       
    }

}