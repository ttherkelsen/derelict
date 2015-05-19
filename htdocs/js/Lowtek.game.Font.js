Lowtek.util.ns('Lowtek.game');

Lowtek.game.Font = function(font, objectType) {
    var me = this;

    Lowtek.game.Core.call(me, objectType || "Font");
    me.fontData = font;
    me.loadFont();
};

Lowtek.util.inherit(Lowtek.game.Font, Lowtek.game.Core);

Lowtek.util.merge(Lowtek.game.Font.prototype, {
    loadFont: function() {
	var me = this;
	var index = me.fontData.glyphIndex.split("");
	var canvas = document.createElement("canvas");
	canvas.height = me.fontData.height;
	canvas.width = me.fontData.width * index.length;
	var ctx = canvas.getContext("2d");

	for (var i = 0; i < index.length; i++) {
	    me.renderGlyph(ctx, { x: i*me.fontData.width, y: 0 }, index[i]);
	};

	me.canvas = canvas;
	me.ctx = ctx;
    },

    renderGlyph: function(ctx, pos, glyph, colours) {
	var me = this;
	var img = ctx.createImageData(me.fontData.width, me.fontData.height);
	var glyphData = me.fontData.glyphs[glyph];
	colours = colours || me.fontData.colours;
	
	if (!glyphData) glyphData = me.fontData.glyphs.__UNKNOWN__;

	for (var y = 0; y < me.fontData.height; y++) {
	    var row = glyphData[y].split('');
	    for (var x = 0; x < me.fontData.width; x++) {
		var colour = colours[glyphData[y][x]];
		
		if (!colour) colour = me.fontData.colours.__UNKNOWN__;

		for (var i = 0; i < 4; i++) {
		    img.data[y*me.fontData.width*4 + x*4 + i] = colour[i];
		}
	    }
	}
	ctx.putImageData(img, pos.x, pos.y);
    },
});
