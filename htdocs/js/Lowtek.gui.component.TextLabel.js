/*
 * TextLabel 
 */

Lowtek.util.ns('Lowtek.gui.component');

Lowtek.gui.component.TextLabel = function(opts) {
    var me = this;

    opts = opts || {}
    Lowtek.gui.Component.call(me, opts);
    //? Lowtek.mixin.gui.Font.call(me, opts);
};

Lowtek.util.inherit(Lowtek.gui.component.TextLabel, Lowtek.gui.Component);

Lowtek.util.merge(Lowtek.gui.component.TextLabel.prototype, {
    // The text to put in the label
    text: '',

    // Which font to use
    font: 'c64',

    layout: function(size) {
	var me = this;
	var font = Lowtek.runtime.fontManager.getFont(me.font);
	size = font.layout(me.text);
	return me.callSuper(Lowtek.gui.Component, 'layout', size);
    },

    render: function(size) {
	var me = this;
	var canvas = me.callSuper(Lowtek.gui.Component, 'render');
	var font = Lowtek.runtime.fontManager.getFont(me.font);

	font.render(me.text, canvas);
	return canvas;
    },
});
