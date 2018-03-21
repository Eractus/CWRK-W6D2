class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {

  }

  makeMove($tower) {

  }

  setupTowers() {
    for(let i = 0; i < 3; i++) {
      const $tower = $("<ul>").addClass("tower").data("towerNum", (i+1));
      if (i === 0 ){
        for(let j = 0; j < 3; j++) {
          $tower.append(`<li>Disc ${j + 1}</li>`);
        }
      }
      this.$el.append($tower);
    }
  }
}

module.exports = View;
