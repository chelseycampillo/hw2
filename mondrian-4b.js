
background(0,0,255);
colorMode(HSB);

stroke(0,0,0);
strokeWeight(10);
noFill();
rect(0,0,340,340);

fill(0,0,100);
stroke(0,0,0);
strokeWeight(8);
rect(200,0,50,100);

fill(0,0,100);
stroke(0,0,0);
strokeWeight(8);
rect(200,100,50,100);

fill(0,0,100);
stroke(0,0,0);
strokeWeight(8);
rect(0,200,50,70);

fill(0,0,100);
stroke(0,0,0);
strokeWeight(8);
rect(0,270,50,70);

function draw() {
	fill(random(30,60),255,100);
	stroke(0,0,0);
	strokeWeight(8);
	rect(250,0,90,200);
  
  fill(random(300,360),255,100);
	stroke(0,0,0);
	strokeWeight(8);
	rect(0,0,200,200);
  
  fill(random(180,240),255,100);
	stroke(0,0,0);
	strokeWeight(8);
	rect(50,200,290,140);
}
