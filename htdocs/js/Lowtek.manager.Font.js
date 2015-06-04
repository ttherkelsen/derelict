Lowtek.util.ns('Lowtek.manager');

Lowtek.manager.Font = function(opts) {
};

Lowtek.util.merge(Lowtek.manager.Font.prototype, {
    fonts: {},

    getFont: function(font, colours) {
	var me = this;
	var fontCache;
	colours = colours || { '#': [ 255, 255, 255, 255 ], '.': [ 0, 0, 0, 255 ] };

	fontCache = font+JSON.stringify(colours);
	
	if (!(fontCache in me.fonts)) {
	    // Load font if not cached, then return font data
	    me.fonts[fontCache] = new Lowtek.gui.Font({
		font: font,
		colours: colours,
	    });
	}
	return me.fonts[fontCache];
    },
});
