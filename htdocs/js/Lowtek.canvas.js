// Various canvas 2d drawing shortcuts

Lowtek.util.ns('Lowtek.canvas');

Lowtek.canvas.drawLines = function(ctx, options, lines) {
    // lines: [ [ beginX, beginY, deltaX, deltaY ], ... ]
    // options: { strokeStyle: ... }
    if (options.strokeStyle) {
	ctx.strokeStyle = options.strokeStyle;
    }
    for (var i = 0; i < lines.length; i++) {
	ctx.beginPath();
	//ctx.translate(0.5, 0.5);
	ctx.moveTo(lines[i][0], lines[i][1]);
	ctx.lineTo(lines[i][0] + lines[i][2], lines[i][1] + lines[i][3]);
	ctx.stroke();
    }
    //ctx.translate(0, 0);
};
