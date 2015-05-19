// Prepare the game to be started -- onLoad event must start the game
// Cannot rely on the DOM being fully formed at this point, but all
// necessary code has been loaded as this code is guaranteed to be the
// last code to be run prior to onLoad event

Lowtek.runtime.game = new Lowtek.game.Game();
