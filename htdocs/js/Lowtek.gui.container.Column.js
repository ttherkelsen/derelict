/*
 * The Column container aligns its children in a column.
 *
 */

Lowtek.util.ns('Lowtek.gui.container');

Lowtek.gui.container.Column = function(opts) {
    var me = this;

    Lowtek.gui.Container.call(me, opts);
};

Lowtek.util.inherit(Lowtek.gui.container.Column, Lowtek.gui.Container);

// FIXME: Should not rely directly on me.children
Lowtek.util.merge(Lowtek.gui.container.Column.prototype, {
    layout: function(size) {
	var me = this;
	var max = { h: size.h, w: size.w };
	var min = { w: 0, h: 0 };
	for (var i = 0; i < me.children.length; i++) {
	    child = me.children[i].layout(max);
	    max.h -= child.h;
	    min.h += child.h;
	    if (child.w > min.w) {
		min.w = child.w;
	    }
	}
	return min;
    },

    render: function(size) {
	var me = this;
	var remaining = { w: size.w, h: size.h };
	var canvas = me.getCanvas(size);
	var ctx = canvas.getContext("2d");
	var pos = { x: 0, y: 0 };
	var h, w;

	ctx.clearRect(0, 0, size.w, size.h);
	for (var i = 0; i < me.children.length; i++) {
	    if (remaining.x <= 0 || remaining.y <= 0) {
		// We have no more space to render children into, no point in wasting
		// CPU on rendering them
		break;
		// FIXME: How to deal with overflowing content (scrollbars)?
	    }
	    childCanvas = me.children[i].render(remaining);
	    w = childCanvas.width > remaining.w ? remaining.w : childCanvas.width;
	    h = childCanvas.height > remaining.h ? remaining.h : childCanvas.height;
	    ctx.drawImage(childCanvas, 0, 0, w, h, pos.x, pos.y, w, h);
	    pos.y += h;
	    remaining.h -= h;
	}
	return canvas;
    },
});
