class TicTacToe {
  SIZE = 3;

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
    if (this.isWin()) {
      return `${this.lastPlayer} is the winner`;
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

  isWin() {
    for (let index = 0; index < this.SIZE; index++) {
      const winner = this.lastPlayer.repeat(3);
      if (
        this.board[0][index] + this.board[1][index] + this.board[2][index] ===
        winner
      ) {
        return true;
      }
    }
    return false;
  }
}
module.exports = TicTacToe;
