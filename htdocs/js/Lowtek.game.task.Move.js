Lowtek.util.ns('Lowtek.game.task');

// Class / constructor
Lowtek.game.task.Move = function(opts) {
    var me = this;

    Lowtek.game.Task.call(me, opts);
};

// Inheritance
Lowtek.util.inherit(Lowtek.game.task.Move, Lowtek.game.Task);

// Methods
Lowtek.util.merge(Lowtek.game.task.Move.prototype, {
    path: null,
    
    simulate: function() {
	// 1 - Find path from actor's current position to desired location
	// 2 - If no path can be found, abort
	// 3 - Move actor to first cell in path
    },
});
