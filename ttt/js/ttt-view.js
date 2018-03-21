class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();

  }

  bindEvents() {
    $(".square").on("click", (e) =>{
      // const mark = this.game.currentPlayer;
      let $currentTarget = $(e.currentTarget);
      this.makeMove($currentTarget);
    });

  }

  makeMove($square) {
    if ($square.hasClass("unclicked")) {
      $square.addClass(`${this.game.currentPlayer}`);
      $square.removeClass("unclicked");
      this.game.playMove($square.data("pos"));
    }



    // console.dir($square.data("pos"));
    if (this.game.isOver() && this.game.board.winner()) {
      this.$el = this.$el.append("<h1>Congrats you winner you</h1>");
    } else if (this.game.isOver()) {
      this.$el = this.$el.append("<h1>Cats Game</h1>");
    }
  }

  setupBoard() {
    for(let rowIdx = 0; rowIdx < 3; rowIdx++) {
      const $row = $("<ul>").addClass("row");
      for(let colIdx = 0; colIdx < 3; colIdx++) {
        const $square = $("<li>").addClass("square unclicked").data("pos", [rowIdx, colIdx]);
        $row.append($square);
      }
      this.$el.append($row);
    }
  }
}

module.exports = View;
