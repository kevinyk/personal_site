var points = [{x:100, y:20}, {x:250, y:100}, {x:150, y:20}, {x:500, y:200}, {x:300, y:900} ]

function setup() {
	var cnv = createCanvas(1000, 1000);
	cnv.id('p5-background');
	cnv.parent('container');
	strokeWeight(20);
	stroke(51, 100);

	x[x.length-1] = width/10; // Set base x-coordinate
	y[x.length-1] = height;  // Set base y-coordinate
}
