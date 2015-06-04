Lowtek.util.ns('Lowtek.game.object');

// Class / constructor
Lowtek.game.object.Background = function(opts) {
    var me = this;
    
    Lowtek.game.Object.call(me, opts);
};

// Inheritance
Lowtek.util.inherit(Lowtek.game.object.Background, Lowtek.game.Object);

// Methods
Lowtek.util.merge(Lowtek.game.object.Background.prototype, {
    pos: null,
    
    render: function(ctx, pos) {
	ctx.fillStyle = "rgb(50, 50, 50)";
	ctx.fillRect(pos.x, pos.y, 16, 16);
    },
});

