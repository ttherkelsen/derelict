/*
 * Component is inherited (in)directly by all GUI objects.
 *
 */

Lowtek.util.ns('Lowtek.gui');

Lowtek.gui.Component = function(objectType) {
    var me = this;

    Lowtek.Core.call(me, objectType || "Component");
};

Lowtek.util.inherit(Lowtek.gui.Component, Lowtek.Core);

Lowtek.util.merge(Lowtek.gui.Component.prototype, {
    /*
     * How many pixels [ top, right, bottom, left ] of extra space to put
     * around the component.
     */
    padding: [ 0, 0, 0, 0 ],
    
    /*
     * layout takes a bounding box (bbox) representing the MAXIMUM size the
     * component can take.  It must return the MINIMUM size possible.
     */
    layout: function(bbox) {
	return bbox;
    },

    /*
     * render takes a 2d rendering context and a bounding bbox and must render
     * graphics to the context, staying within the limits of the bounding box.
     * It is each Component's own responsibility to not render outside the
     * allocated area.
     */ 
    render: function(ctx, bbox) {
    },
});
