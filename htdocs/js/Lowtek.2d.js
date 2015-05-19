// Various canvas 2d drawing shortcuts

Lowtek.util.ns('Lowtek.2d');

Lowtek.2d.drawLines = function(lines, options) {
    // lines: [ [ beginX, beginY, deltaX, deltaY ], ... ]
    // options: { fillStyle: ... }
    if (options.fillStyle) {
	ctx.fillStyle = options.fillStyle;
    }
    for (var i = 0; i < lines.length; i++) {
	ctx.beginPath();
	ctx.moveTo(lines[i][0], lines[i][1]);
	ctx.lineTo(lines[i][0] + lines[i][2], lines[i][1] + lines[i][3]);
	ctx.closePath();
	ctx.stroke();
    }
};
