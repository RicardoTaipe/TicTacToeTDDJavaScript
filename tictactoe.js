class TicTacToe {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  play(x, y) {
    this.checkAxis(x);
    this.checkAxis(y);
    this.setBox(x, y);
  }

  checkAxis(axis) {
    if (axis < 1 || axis > 3) {
      throw new Error("Outside board");
    }
  }

  setBox(x, y) {
    if (this.board[x - 1][y - 1] !== "") {
      throw new Error("Box is occupied");
    } else {
      this.board[x - 1][y - 1] = "X";
    }
  }
}
module.exports = TicTacToe;
