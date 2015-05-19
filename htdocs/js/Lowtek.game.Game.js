// Primary game object.  This is the entry point for all aspects of the
// game.

Lowtek.util.ns('Lowtek.game', 'Lowtek.runtime');

Lowtek.game.Game = function(objectType) {
    Lowtek.Core.call(this, objectType || 'Game');
};

Lowtek.util.inherit(Lowtek.game.Game, Lowtek.Core);

Lowtek.util.merge(Lowtek.game.Game.prototype, {
    // The id of the div tag that should end up containing the canvas
    canvasDivId: null, // string

    // Size of the canvas, in terms of tiles
    canvasSize: { width: 20, height: 20 },

    // Size of a tile, in pixels
    tileSize: { width: 16, height: 16 },

    // Objects that have registered for simulation time
    simulations: [],

    // Used for drawing the map
    ctx: null, // CanvasRenderingContext2D

    // Used for drawing the mouse overlay
    mouseCtx: null,

    // Whether to track mosue movements or not?
    trackMouse: false,

    // Last recorded mouse tile coordinate position
    mousePos: { x: 1, y: 1 },

    // Is a mouse button pressed?
    mouseButtonPressed: false,

    // Positions of last mouseup and mousedown events
    mouseButtonPos: { up: null, down: null },

    // The div that contains all the canvas elements,
    canvasDiv: null,

    start: function(divId) {
	var me = this;

	me.debug('start called');
	me.canvasDivId = divId;
	me.setupCanvas();

	me.map = new Lowtek.game.Map(Lowtek.data.map.testmap);

	me.crew = new Lowtek.game.object.Crew();
	var cell = me.map.getCellAt({ x: 14, y: 14 });
	cell.addObject(me.crew);

	me.render(me.ctx);
	me.renderMouseOverlay(me.mouseCtx);

	//var font = new Lowtek.game.Font(Lowtek.data.font.c64);
	//me.canvasDiv.appendChild(font.canvas);

    },

    setupCanvas: function() {
	var me = this;
	var canvasDiv = document.getElementById(me.canvasDivId);
	var canvas = document.createElement("canvas");

	canvas.className = "map";
	canvas.width = me.canvasSize.width * me.tileSize.width;
	canvas.height = me.canvasSize.height * me.tileSize.height;
	canvasDiv.appendChild(canvas);
	me.ctx = canvas.getContext("2d");

	canvas = document.createElement("canvas");
	canvas.className = "mouse";
	canvas.width = me.canvasSize.width * me.tileSize.width;
	canvas.height = me.canvasSize.height * me.tileSize.height;
	canvasDiv.appendChild(canvas);
	canvasDiv.addEventListener("mousemove", me, false);
	canvasDiv.addEventListener("mousedown", me, false);
	canvasDiv.addEventListener("mouseup", me, false);
	canvasDiv.addEventListener("mouseenter", me, false);
	canvasDiv.addEventListener("mouseleave", me, false);
	me.canvasDiv = canvasDiv;
	me.mouseCtx = canvas.getContext("2d");
    },

    screen2tile: function(x, y) {
	var me = this;
	var offset = Lowtek.dom.getOffset(me.canvasDiv);

	return { x: ((x - offset.x) / 16)|0, y: ((y - offset.y) / 16)|0 };
    },
    
    handleEvent: function(event) {
	var me = this;
	var pos = me.screen2tile(event.clientX, event.clientY);

	switch (event.type) {
	case 'mouseenter':
	    me.trackMouse = true;
	    if (pos.x == me.mousePos.x && pos.y == me.mousePos.y) {
		return;
	    }
	    me.mousePos = pos;
	    break;
	case 'mouseleave':
	    me.trackMouse = false;
	    me.renderMouseOverlay(me.mouseCtx);
	    break;
	case 'mousemove':
	    if (pos.x == me.mousePos.x && pos.y == me.mousePos.y) {
		return;
	    }
	    me.mousePos = pos;
	    break;
	case 'mousedown':
	    me.mouseButtonPressed = true;
	    me.mouseButtonPos.down = pos;
	    break;
	case 'mouseup':
	    me.mouseButtonPressed = false;
	    me.mouseButtonPos.up = pos;
	    if (me.mouseButtonPos.up.x == me.mouseButtonPos.down.x
		&& me.mouseButtonPos.up.y == me.mouseButtonPos.down.y) {
		me.mouseClick(pos);
	    }
	    break;
	}

	if (me.trackMouse) {
	    me.renderMouseOverlay(me.mouseCtx);
	}
    },

    mouseClick: function(pos) {
	var me = this;
	
	me.debug('mouse clicked on cell', pos);
	me.crew.clearTasks();
	me.crew.addTask(new Lowtek.game.task.Move(pos))
    },
    
    render: function(ctx) {
	var me = this;

	me.map.render(ctx);
    },

    renderMouseOverlay: function(ctx) {
	var me = this;

	ctx.clearRect(
	    0, 0,
	    me.canvasSize.width * me.tileSize.width, me.canvasSize.height * me.tileSize.height
	);
	
	if (!me.trackMouse) return;
	
	ctx.fillStyle = "rgb(255, 215, 0)";
	ctx.fillRect(me.mousePos.x * 16, me.mousePos.y * 16, 16, 16);
	ctx.clearRect(me.mousePos.x * 16 + 2, me.mousePos.y * 16 + 2, 16 - 4, 16 - 4);
	ctx.clearRect(me.mousePos.x * 16 + 4, me.mousePos.y * 16 + 1, 16 - 8, 16 - 2);
	ctx.clearRect(me.mousePos.x * 16 + 1, me.mousePos.y * 16 + 4, 16 - 2, 16 - 8);

	if (me.mouseButtonPressed) {
	    ctx.fillStyle = "rgba(255, 215, 0, 0.5)";
	    ctx.fillRect(me.mousePos.x * 16, me.mousePos.y * 16, 16, 16);
	}
    },
    
    registerSimulation: function(obj) {
	var me = this;

	me.simulations.push(obj);
    },
    
    update: function() {
	var me = this;

	for (var i = 0; i < me.simulations.length; i++) {
	    me.simulations[i].simulate();
	}
    },
});
