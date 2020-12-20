let snowflakes = []; 

function setup() {
  createCanvas(600, 600);
  fill(100);
  noStroke();
  
}

function draw() {
  background('lightblue');
  let t = frameCount / 60;
text("MERRY CHRISTMAS", 90,100);
text("MERRY CHRISTMAS", 400,90);
text("MERRY CHRISTMAS", 500,30);
text("MERRY CHRISTMAS", 20,500);
text("MERRY CHRISTMAS", 400,400);
text("MERRY CHRISTMAS", 300,300);
text("MERRY CHRISTMAS", 450,550);
text("MERRY CHRISTMAS", 450,250);
text("MERRY CHRISTMAS", 40,250);
text("MERRY CHRISTMAS", 40,380);

//body
	fill(255);
	ellipse(250, 500, 200, 200);
	ellipse(250, 375, 150, 150);
	ellipse(250, 275, 100, 100);
//hat
	fill(0);
	rect(215, 140, 70, 100);
	ellipse(250, 240, 100, 10);
//eyeballs	
	ellipse(235, 265, 5, 5);
	ellipse(265, 265, 5, 5);
//nose	
	fill(255, 165, 0);
	triangle(250, 275, 250, 285, 290, 300);
	stroke(139, 69, 19);
	strokeWeight(5);
	line(180, 375, 100, 350);
	line(320, 375, 400, 350);
	
//scarf
	strokeWeight(0);
	fill(7, 4, 400);
	rect(205,300, 90, 20);
	rect(205, 300, 20, 80);
	
//buttons
	fill(0);
	ellipse(250, 340, 7, 7);
	ellipse(250, 370, 7, 7);
	ellipse(250, 400, 7, 7); 
  
  
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); 
  }

  
  for (let flake of snowflakes) {
    flake.update(t); 
    flake.display(); 
  }
}


function snowflake() {
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  
  this.radius = sqrt(random(pow(width / 2, 2)));
  this.update = function(time) {
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

  fill(255, 0, 0, 100);           // red fill with transparency
   ellipse(mouseX, mouseY, 50, 50);      //red circle for mouse
  
    this.posY += pow(this.size, 0.5);

    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}