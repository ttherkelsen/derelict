Lowtek.util.ns('Lowtek.game');

// Class / constructor
Lowtek.game.Cell = function(pos, map, objectType) {
    var me = this;

    Lowtek.Core.call(me, objectType || "Cell");
    me.pos = pos;
    me.inventory = [];
    me.map = map
};

// Inheritance
Lowtek.util.inherit(Lowtek.game.Cell, Lowtek.Core);

// Methods
Lowtek.util.merge(Lowtek.game.Cell.prototype, {
    addObject: function(obj) {
	var me = this;

	obj.setEnvironment(me);

	var i = 0;
	while (i < me.inventory.length) {
	    if (me.inventory[i].layer < obj.layer) {
		me.inventory.splice(i, 0, obj);
		return;
	    }
	    i++;
	}
	me.inventory.push(obj);
    },

    hasWall: function() {
	var me = this;

	for (var i = 0; i < me.inventory.length; i++) {
	    if (me.inventory[i].isWall()) {
		return true;
	    }
	}

	return false;
    },

    isOpen: function() {
	var me = this;

	return !me.hasWall();
    },

    getNeighbours: function() { return this.map.getCellNeighbours(this.pos); },

    render: function(ctx, pos) {
	var me = this;

	for (var i = 0; i < me.inventory.length; i++) {
	    me.inventory[i].render(ctx, pos);
	}
    },
});
