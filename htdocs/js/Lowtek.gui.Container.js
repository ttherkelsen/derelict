/*
 * Container is inherited by all GUI objects that wish to contain other
 * objects.  Container itself is a Component.
 *
 */

Lowtek.util.ns('Lowtek.gui');

Lowtek.gui.Container = function(objectType) {
    var me = this;

    Lowtek.gui.Component.call(me, objectType || "Container");
};

Lowtek.util.inherit(Lowtek.gui.Container, Lowtek.gui.Component);

Lowtek.util.merge(Lowtek.gui.Container.prototype, {
    children: [],
});
