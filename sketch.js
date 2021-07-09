const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;



function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var ball_options = {
		restitution: 20
	  }

	

	ball = Bodies.circle(300,300,20,ball_options);
  World.add(world,ball);

  ball2=Bodies.circle(302,300,20,ball_options);
  World.add(world,ball2);

  ball3=Bodies.circle(305,300,12,ball_options);
  World.add(world,ball3);

  ball4=Bodies.circle(308,300,12,ball_options);
  World.add(world,ball4);

  ball5=Bodies.circle(400,300,12,ball_options);
  World.add(world,ball5);

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,12);
  ellipse(ball3.position.x,ball2.position.y,12);
  ellipse(ball4.position.x,ball2.position.y,12);
  ellipse(ball5.position.x,ball2.position.y,12);
  rect(roof.position.x,roof.position.y,230,20);

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y,ball3.position.x,ball3.position.y,ball4.position.x,ball4.position.y,ball5.position.x,ball5.position.y)
  pop();

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
}
