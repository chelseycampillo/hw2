function draw() {
  background(255);
  colorMode(HSB);
  
  stroke(0,0,0);
	strokeWeight(10);
	noFill();
	rect(0,0,340,340);
  
	fill(random(0,60),255,255);
	stroke(0,0,0);
	strokeWeight(8);
	rect(random(0,100),random(0,100),random(100,200),random(100,150));

	fill(random(90,150),255,100);
	stroke(0,0,0);
	strokeWeight(8);
	rect(random(100,200),random(100,200),random(50,100),random(100,200));

	fill(0,0,100);
	stroke(0,0,0);
	strokeWeight(8);
	rect(random(200,300),random(200,300),random(150,250),random(50,100));	

	fill(0,0,100);
	stroke(0,0,0);
	strokeWeight(8);
	rect(random(0,330),random(0,330),random(50,100),random(50,100));
}
