class TicTacToe {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  lastPlayer = "";

  play(x, y) {
    this.checkAxis(x);
    this.checkAxis(y);
    this.lastPlayer = this.nextPlayer();
    this.setBox(x, y);
    for (let index = 0; index < this.board.length; index++) {
      if (
        this.board[0][index] === this.lastPlayer &&
        this.board[1][index] === this.lastPlayer &&
        this.board[2][index] === this.lastPlayer
      ) {
        return `${this.lastPlayer} is the winner`;
      }
    }
    return "No winner";
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

  nextPlayer() {
    if (this.lastPlayer === "X") return "O";
    return "X";
  }
}
module.exports = TicTacToe;
