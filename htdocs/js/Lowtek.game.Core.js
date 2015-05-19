Lowtek.util.ns('Lowtek.game');

/*
game.Core is the ancestor of all game related objects.  It defines
various core methods that all game objects need.
*/

Lowtek.game.Core = function(objectType) {
    this.uoid = Lowtek.nextUOID(objectType || "Core");
};

Lowtek.game.Core.prototype = {
    debug: function() {
	Lowtek.debug.apply(null, [this.uoid+":"].concat(Array.prototype.slice.call(arguments)));
    },
};
