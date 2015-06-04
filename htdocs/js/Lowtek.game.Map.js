Lowtek.util.ns('Lowtek.game');

Lowtek.game.Map = function(opts) {
    var me = this;

    Lowtek.Core.call(me, opts);
    me.load();
};

Lowtek.util.inherit(Lowtek.game.Map, Lowtek.Core);

Lowtek.util.merge(Lowtek.game.Map.prototype, {
    load: function() {
	var me = this;

	var cells = [];
	for (var y = 0; y < me.mapData.height; y++) {
	    var row = me.mapData.data[y].split('');
	    for (var x = 0; x < me.mapData.width; x++) {
		var obj = me.mapData.objects[row[x]];

		row[x] = new Lowtek.game.Cell({ pos: { x: x, y: y }, map: me });
		row[x].addObject(new (me.mapData.defaultBackground)());
		if (obj) {
		    row[x].addObject(new (obj)());
		}
	    }
	    cells.push(row);
	}
	me.cells = cells;
    },

    render: function(ctx, pos) {
	var me = this;

	pos = pos || { x: 0, y: 0 };

	for (var y = 0; y < me.mapData.height; y++) {
	    for (var x = 0; x < me.mapData.width; x++) {
		me.cells[y][x].render(ctx, { x: pos.x + x*16, y: pos.y + y*16 });
	    }
	}
    },

    getCellAt: function(pos) {
	var me = this;
	return me.cells[pos.y][pos.x];
    },
    
    getCellNeighbours: function(pos) {
	var me = this;
	var n = { n: null, s: null, e: null, w: null };

	if (pos.x > 0) {
	    n.w = me.cells[pos.y][pos.x - 1];
	}
	if (pos.x < me.mapData.width - 1) {
	    n.e = me.cells[pos.y][pos.x + 1];
	}
	if (pos.y > 0) {
	    n.n = me.cells[pos.y - 1][pos.x];
	}
	if (pos.y < me.mapData.height - 1) {
	    n.s = me.cells[pos.y + 1][pos.x];
	}

	return n;
    },
});

