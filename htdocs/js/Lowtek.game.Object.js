Lowtek.util.ns('Lowtek.game');

// Class / constructor
Lowtek.game.Object = function(opts) {
    var me = this;

    Lowtek.Core.call(me, opts);
};

// Inheritance
Lowtek.util.inherit(Lowtek.game.Object, Lowtek.Core);

// Methods
Lowtek.util.merge(Lowtek.game.Object.prototype, {
    environment: null,
    
    setEnvironment: function(obj) { this.environment = obj; },
    getEnvironment: function() { return this.environment; },
    isWall: function() { return false; },
});
