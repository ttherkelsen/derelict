Lowtek.util.ns('Lowtek.game');

// Class / constructor
Lowtek.game.Task = function(opts) {
    var me = this;

    Lowtek.Core.call(me, opts);
};

// Inheritance
Lowtek.util.inherit(Lowtek.game.Task, Lowtek.Core);

// Methods
Lowtek.util.merge(Lowtek.game.Task.prototype, {
    actor: null,

    setActor: function(obj) {
	var me = this;

	me.actor = obj;
    },
    
    simulate: function() {
    },
});
