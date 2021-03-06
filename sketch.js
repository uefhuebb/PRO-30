const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

function preload(){
    polygon_img=loadImage('polygon.png');
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stand1=new Stand(690,350,230,10);
    
   
    box1 = new Box(600,325,30,40);
    box2 = new Box(630,325,30,40);
    box3 = new Box(660,325,30,40);
    box4 = new Box(690,325,30,40);
    box5 = new Box(720,325,30,40);
    box6 = new Box(750,325,30,40);
    box7 = new Box(780,325,30,40);
    
    box8 = new Box(630,300,30,40);
    box9 = new Box(660,300,30,40);
    box10 = new Box(690,300,30,40);
    box11 = new Box(720,300,30,40);
    box12 = new Box(750,300,30,40);
    
    box13 = new Box(660,275,30,40);
    box14 = new Box(690,275,30,40);
    box15 = new Box(720,275,30,40);
    
    box16 = new Box(690,250,30,40);

    stand2=new Stand(990,200,180,10);

    
    box17= new Box(930,175,30,40);
    box18 = new Box(960,175,30,40);
    box19 = new Box(990,175,30,40);
    box20 = new Box(1020,175,30,40);
    box21 = new Box(1050,175,30,40);
   
    box22 = new Box(960,135,30,40);
    box23 = new Box(990,135,30,40);
    box24 = new Box(1020,135,30,40);
    
    box25 = new Box(990,95,30,40);

    
    polygon=Bodies.circle(100,200,20);
    World.add(world,polygon);

    chain=new SlingShot(this.polygon,{x:100,y:200});
 
    ground = new Ground(600,height,1200,30);

}

function draw(){
    background(0);
    Engine.update(engine);

    stand1.display();
    stand2.display();
    
    fill('lightblue');
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill('pink');
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill('lightgreen');
    box13.display();
    box14.display();
    box15.display();
    fill('grey');
    box16.display();
    fill('lightblue');
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    fill('lightgreen');
    box22.display();
    box23.display();
    box24.display();
    fill('pink');
    box25.display();

    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
     
    chain.display();

    ground.display();

    
    
}

function mouseDragged(){
	
    Matter.Body.setPosition(this.polygon,{x : mouseX , y : mouseY});


}

function mouseReleased(){
chain.fly();

}

function keyPressed(){
if(keyCode===32){
Matter.Body.setPosition(this.polygon,{x :100 , y : 200})
chain.attach(this.polygon);
}
}

