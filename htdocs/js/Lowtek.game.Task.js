Lowtek.util.ns('Lowtek.game');

// Class / constructor
Lowtek.game.Task = function(objectType) {
    var me = this;

    Lowtek.game.Core.call(me, objectType || "Task");
};

// Inheritance
Lowtek.util.inherit(Lowtek.game.Task, Lowtek.game.Core);

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
