var numSegments = 5,
	x = [],
	y = [],
	angle = [],
	segLength = 50,
	targetX, targetY;

	for (var i = 0; i < numSegments; i++) {
		x[i] = 0;
		y[i] = 0;
		angle[i] = 0;
	}

	function setup() {
		var cnv = createCanvas(1000, 1000);
		cnv.id('p5-background');
		cnv.parent('container');
		strokeWeight(20);
		stroke(51, 100);

		x[x.length-1] = width/10; // Set base x-coordinate
		y[x.length-1] = height;  // Set base y-coordinate
	}

	function draw() {
		background('white');

		reachSegment(0, mouseX, mouseY);
		for(var i=1; i<numSegments; i++) {
			reachSegment(i, targetX, targetY);
		}
		for(var j=x.length-1; j>=1; j--) {
			positionSegment(j, j-1);
		}
		for(var k=0; k<x.length; k++) {
			segment(x[k], y[k], angle[k], (k+1)*2);
		}
	}

	function positionSegment(a, b) {
		x[b] = x[a] + cos(angle[a]) * segLength;
		y[b] = y[a] + sin(angle[a]) * segLength;
	}

	function reachSegment(i, xin, yin) {
		var dx = xin - x[i];
		var dy = yin - y[i];
		angle[i] = atan2(dy, dx);
		targetX = xin - cos(angle[i]) * segLength;
		targetY = yin - sin(angle[i]) * segLength;
	}

	function segment(x, y, a, sw) {
		strokeWeight(sw);
		push();
		translate(x, y);
		rotate(a);
		line(0, 0, segLength, 0);
		pop();
	}