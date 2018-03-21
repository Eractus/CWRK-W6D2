const View = require('./ttt-view.js');// require appropriate file
const Game = require('./../solution/game.js');// require appropriate file

$( () => {

  const htmlSection = $(".ttt");
  const game = new Game();
  const view = new View(game, htmlSection);
});
