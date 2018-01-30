background(200);
colorMode(HSB);
noStroke();

while(true) {
  fill(random(85,155), 255, random(100));
  beginShape(TRIANGLES);
 	vertex(170, 170);
	vertex(random(80,170),220);
	vertex(random(170,220), 220);
  endShape();
}
