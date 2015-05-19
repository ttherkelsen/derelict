Lowtek.util.ns('Lowtek.game.object');

// Class / constructor
Lowtek.game.object.Crew = function(objectType) {
    Lowtek.game.Object.call(this, objectType || "Crew");
    Lowtek.runtime.game.registerSimulation(this);
};

// Inheritance
Lowtek.util.inherit(Lowtek.game.object.Crew, Lowtek.game.Object);

// Methods
Lowtek.util.merge(Lowtek.game.object.Crew.prototype, {
    tasks: [],
    
    clearTasks: function() {
	var me = this;

	me.tasks = [];
    },

    addTask: function(task, priority) {
	// FIXME: make it a priority queue so that a later added task can take
	// precedence if necessary
	me.tasks.push(task);
	task.setActor(me);
    },
    
    simulate: function() {
	var me = this;
	var result;

	for (var i = 0; i < me.tasks.length; i++) {
	    result = me.tasks[i].simulate();
	    switch (result) {
	    case Lowtek.TASK_RUNNING:
		return;
	    case Lowtek.TASK_ENDED:
		me.tasks.shift();
		return;
		break;
	    case Lowtek.TASK_ABORTED:
		me.tasks.shift();
		break;
	    case Lowtek.TASK_SKIPPED:
		break;
	    }
	}
    },
    
    render: function(ctx, pos) {
	var me = this;

	ctx.fillStyle = "rgb(80, 200, 80)";
	ctx.lineWidth = 2;
	ctx.strokeStyle = "rgb(255, 255, 255)";
	ctx.beginPath();
	ctx.arc(pos.x + 8, pos.y + 8, 6, 0, Math.PI*2);
	ctx.fill();
	ctx.stroke();
    },
});

