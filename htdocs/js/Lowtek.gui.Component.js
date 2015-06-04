/*
 * Component is inherited (in)directly by all GUI objects.
 * The layout/render methods exists on this object, but they are
 * intended to be overridden by more specialised methods in the
 * child class.
 */

Lowtek.util.ns('Lowtek.gui');

Lowtek.gui.Component = function(opts) {
    var me = this;

    Lowtek.Core.call(me, opts);
};

Lowtek.util.inherit(Lowtek.gui.Component, Lowtek.Core);

Lowtek.util.merge(Lowtek.gui.Component.prototype, {
    /*
     * Identifier.  Can be used to find a specific component in a
     * container.  It does not have to be unique.
     */
    id: null,

    /*
     * The container this component is inside.  A component can only
     * be inside one container and thus only have one parent.
     */
    parent: null,
    
    /*
     * How many pixels [ top, right, bottom, left ] of extra space to put
     * around the component.
     */
    padding: [ 0, 0, 0, 0 ],

    /*
     * Various layout config options.  Which ones are used depends on
     * the layout manager used by the parent container.
     */
    layoutConfig: {
	align: 'left', // left, right, center, fill
	valign: 'top', // top, bottom, middle, fill
	scrollbars: false, // 'vertical', 'horizontal', 'both' (or true)
    },

    /*
     * The size the component decided upon after the last call to
     * layout()
     */
    layoutSize: null,
    
    /*
     * The canvas to render into.  It is cached in the component so
     * that a new canvas DOM element does not have to be created each
     * time render() or layout() is called.
     */
    canvas: null,
    
    /*
     * layout takes a size (h and w) representing the MAXIMUM size the
     * component can take without overflowing its container.  It must
     * return the MINIMUM size possible.  This can be larger than
     * the maximum size; however, this will clip the container unless
     * scrollbars are enabled.
     *
     * layout is typically only called on application start up and
     * whenever the available area for rendering changes (e.g., the
     * screen changes size).
     */
    layout: function(size) {
	var me = this;

	me.layoutSize = size;
	return size;
    },

    /*
     * render takes a size (representing the available area that can
     * be rendered into without overflowing the container) and must
     * return a canvas which has had the component rendered into it.
     * The returned canvas can have different dimensions than the
     * given size.  If it is bigger, it will either be clipped or have
     * scrollbars applied (depending on layout configuration). If it
     * is smaller, layout configuration and parent container will
     * decide how it is positioned within the available area.
     *
     * render is never called more than once per rendering frame; it
     * may be called less frequently if there is no need to redraw the
     * component.
     */ 
    render: function(size) {
	var me = this;
	return me.getCanvas(size || me.layoutSize);
    },

    /*
     * Return a canvas of the given width and height.
     */
    getCanvas: function(size) {
	var me = this;

	size = size || me.layoutSize;

	if (!me.canvas) {
	    me.canvas = document.createElement("canvas");
	    me.canvas.width = size.w;
	    me.canvas.height = size.h;
	}
	else if (me.canvas.width != size.w || me.canvas.height != size.h) {
	    me.canvas.width = size.w;
	    me.canvas.height = size.h;
	}

	return me.canvas;
    },
});
