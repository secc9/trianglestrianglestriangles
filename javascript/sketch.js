let canvas;
let r, g, b;
let length = 0;
let alpha = 255;
let amt = 0.0;
let amt2 = 0;
let graphics;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element
    graphics = createGraphics(windowWidth, windowHeight);
 // createEasyCam();

}

function draw() {

  // rotateZ(amt2);
    // rotateX(mouseX);
//     rotateY(mouseX);
//alpha = frameCount % 255;
  
    
  graphics.background(200, 255);
    camera(0, 6000, 5000);
    for(let i = -7000-width/128; i < windowWidth; i += 1000){
	for(let j = -7000-height/128 ; j < windowHeight; j += 1000){
	    for(let k = -1000; k < 10000; k += 1000){
		triangleRotation(i, j, k);
	}
    }
    }
    
  

        amt = amt + 0.001;
    amt2 = amt2 + 0.01;

    console.log(alpha);
}


function triangleRotation(x, y, z){
    alpha = frameCount % 255;
    r = frameCount % 255;
    g = frameCount % 254;
    b = frameCount % 253;
    for(let i = 0; i < 300; i += 1000){
	push();
	translate(x, y, z);
	rotate(amt*amt*amt);
	noFill();
	strokeWeight(2);
	stroke(r, g, b, alpha);
        triangle(0+i*noise(amt),  length +900*noise(amt), 32+i*noise(amt*amt), length + 1800*noise(amt), 344*noise(amt*amt), length + 300+i*noise(amt/amt));
	pop();
	length = length + 0.0001;
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
