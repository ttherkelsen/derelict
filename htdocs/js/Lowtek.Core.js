/*
Core is the ancestor of all objects.  It defines various core methods that all objects need.
*/

Lowtek.Core = function(objectType) {
    this.uoid = Lowtek.nextUOID(objectType || "Core");
};

Lowtek.Core.prototype = {
    debug: function() {
	Lowtek.debug.apply(null, [this.uoid+":"].concat(Array.prototype.slice.call(arguments)));
    },
};
