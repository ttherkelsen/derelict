Lowtek.util.ns('Lowtek.game');

// Class / constructor
Lowtek.game.Object = function(objectType) {
    var me = this;

    Lowtek.Core.call(me, objectType || "Object");
    
    me.environment = null;
};

// Inheritance
Lowtek.util.inherit(Lowtek.game.Object, Lowtek.Core);

// Methods
Lowtek.util.merge(Lowtek.game.Object.prototype, {
    setEnvironment: function(obj) { this.environment = obj; },
    getEnvironment: function() { return this.environment; },
    isWall: function() { return false; },
});
