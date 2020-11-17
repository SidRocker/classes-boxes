const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1, box2;

function setup(){ 
    var canvas = createCanvas(800,600); 
    engine = Engine.create(); 
    world = engine.world; 
    
    var ground_options ={ 
        //isStatic: true 
    } 
      //  ground = Bodies.rectangle(400,590,400,20,ground_options); 
        
       // World.add(world,ground);


        var ball_options={
         'isStatic': false,
         'restitution': 1.0,
         'friction': 0.001,
         'density': 1.0
        }

        ball=Bodies.circle(200,50,20,ball_options);

        World.add(world,ball);
        //creating object for box class
        box1 = new Box(100,150,50,50);
        box2 = new Box(100,50,70,30);

        ground = new Ground(400,590,800,20);
    
} 
    
function draw(){ 
        background(0); 
        Engine.update(engine); 
        //rectMode(CENTER); 
       // rect(ground.position.x,ground.position.y,800,20);
/*fill("white");
        ellipseMode(RADIUS);
        ellipse(ball.position.x,ball.position.y,20,20);*/
        box1.display();
        box2.display();
        ground.display();
}