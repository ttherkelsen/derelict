Lowtek.util.ns('Lowtek.game.object');

// Class / constructor
Lowtek.game.object.Wall = function(opts) {
    var me = this;
    
    Lowtek.game.Object.call(this, opts);
};

// Inheritance
Lowtek.util.inherit(Lowtek.game.object.Wall, Lowtek.game.Object);

// Methods
Lowtek.util.merge(Lowtek.game.object.Wall.prototype, {
    isWall: function() { return true; },

    render: function(ctx, pos) {
	var me = this;

	var n = me.getEnvironment().getNeighbours();

	ctx.fillStyle = "rgb(180, 180, 180)";
	ctx.fillRect(pos.x + 4, pos.y + 4, 8, 8);

	if (n.s.hasWall()) {
	    ctx.fillStyle = "rgb(180, 180, 180)";
	    ctx.fillRect(pos.x + 4, pos.y + 12, 8, 4);
	    ctx.fillStyle = "rgb(220, 220, 220)";
	    ctx.fillRect(pos.x + 2, pos.y + 13, 1, 3);
	    ctx.fillRect(pos.x + 3, pos.y + 12, 1, 4);
	    ctx.fillStyle = "rgb(140, 140, 140)";
	    ctx.fillRect(pos.x + 13, pos.y + 13, 1, 3);
	    ctx.fillRect(pos.x + 12, pos.y + 12, 1, 4);
	}
	else {
	    ctx.fillStyle = "rgb(140, 140, 140)";
	    ctx.fillRect(pos.x + 2, pos.y + 13, 12, 1);
	    ctx.fillRect(pos.x + 3, pos.y + 12, 10, 1);
	}
	
	if (n.e.hasWall()) {
	    ctx.fillStyle = "rgb(180, 180, 180)";
	    ctx.fillRect(pos.x + 12, pos.y + 4, 4, 8);
	    ctx.fillStyle = "rgb(220, 220, 220)";
	    ctx.fillRect(pos.x + 13, pos.y + 2, 3, 1);
	    ctx.fillRect(pos.x + 12, pos.y + 3, 4, 1);
	    ctx.fillStyle = "rgb(140, 140, 140)";
	    ctx.fillRect(pos.x + 13, pos.y + 13, 3, 1);
	    ctx.fillRect(pos.x + 12, pos.y + 12, 4, 1);
	}
	else {
	    ctx.fillStyle = "rgb(140, 140, 140)";
	    ctx.fillRect(pos.x + 13, pos.y + 2, 1, 12);
	    ctx.fillRect(pos.x + 12, pos.y + 3, 1, 10);
	}

	if (n.w.hasWall()) {
	    ctx.fillStyle = "rgb(180, 180, 180)";
	    ctx.fillRect(pos.x, pos.y + 4, 4, 8);
	    ctx.fillStyle = "rgb(220, 220, 220)";
	    ctx.fillRect(pos.x, pos.y + 2, 3, 1);
	    ctx.fillRect(pos.x, pos.y + 3, 4, 1);
	    ctx.fillStyle = "rgb(140, 140, 140)";
	    ctx.fillRect(pos.x, pos.y + 13, 3, 1);
	    ctx.fillRect(pos.x, pos.y + 12, 4, 1);
	}
	else {
	    ctx.fillStyle = "rgb(220, 220, 220)";
	    ctx.fillRect(pos.x + 2, pos.y + 2, 1, 12);
	    ctx.fillRect(pos.x + 3, pos.y + 3, 1, 10);
	}
	
	if (n.n.hasWall()) {
	    ctx.fillStyle = "rgb(180, 180, 180)";
	    ctx.fillRect(pos.x + 4, pos.y, 8, 4);
	    ctx.fillStyle = "rgb(220, 220, 220)";
	    ctx.fillRect(pos.x + 2, pos.y, 1, 3);
	    ctx.fillRect(pos.x + 3, pos.y, 1, 4);
	    ctx.fillStyle = "rgb(140, 140, 140)";
	    ctx.fillRect(pos.x + 13, pos.y, 1, 3);
	    ctx.fillRect(pos.x + 12, pos.y, 1, 4);
	}
	else {
	    ctx.fillStyle = "rgb(220, 220, 220)";
	    ctx.fillRect(pos.x + 2, pos.y + 2, 12, 1);
	    ctx.fillRect(pos.x + 3, pos.y + 3, 10, 1);
	}

    },
});

