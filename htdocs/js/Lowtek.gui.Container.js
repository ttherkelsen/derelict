/*
 * Container is inherited by all GUI objects that wish to contain other
 * objects.  Container itself is a Component.  Normally, all specialisations
 * of Component know how to render themselves, however, Container is the
 * exception to the rule.  Use one of the Container specialisations
 * (e.g. Lowtek.gui.container.Column) for rendering unless you intend to
 * provide your own layout/render methods.
 *
 */

Lowtek.util.ns('Lowtek.gui');

Lowtek.gui.Container = function(opts) {
    var me = this;

    Lowtek.gui.Component.call(me, opts);
};

Lowtek.util.inherit(Lowtek.gui.Container, Lowtek.gui.Component);

Lowtek.util.merge(Lowtek.gui.Container.prototype, {
    children: [],

    addChild: function(cmp) {
	var me = this;

	me.children.push(cmp);
    },

    removeChildAt: function(index) { this.children.splice(index, 1); },
    
    removeChildren: function(id) {
	var me = this;
	
	for (var i = 0; i < me.children.length; i++) {
	    if (me.children[i].id === id) {
		me.children.splice(i, 1);
	    }
	    else if (me.children[i] instanceof Lowtek.gui.Container) {
		me.children[i].removeChild(id, all);
	    }
	}
    },

    /*
     * Returns an array with the indexes of all children with the
     * given id, or null if no children were found
     */
    findChildren: function(id) {
	var me = this;
	var match = [];
	
	for (var i = 0; i < me.children.length; i++) {
	    if (me.children[i].id === id) {
		match.push(i);
	    }
	    else if (me.children[i] instanceof Lowtek.gui.Container) {
		Array.prototype.push.apply(match, me.children[i].findChildren(id));
	    }
	}
	return match.length ? match : null;
    },

    getChildAt: function(index) { return this.children[index]; },
});
