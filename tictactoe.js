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
    this.setBox(x, y, this.lastPlayer);
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
  //order change y,x due to array javascript order
  setBox(y, x, lastPlayer) {
    if (this.board[x - 1][y - 1] !== "") {
      throw new Error("Box is occupied");
    } else {
      this.board[x - 1][y - 1] = lastPlayer;
    }
  }

  nextPlayer() {
    if (this.lastPlayer === "X") return "O";
    return "X";
  }

  isWin() {
    const playerTotal = this.lastPlayer.repeat(3);
    for (let index = 0; index < this.SIZE; index++) {
      if (
        this.board[0][index] + this.board[1][index] + this.board[2][index] ===
        playerTotal
      ) {
        return true;
      } else if (
        this.board[index][0] + this.board[index][1] + this.board[index][2] ===
        playerTotal
      ) {
        return true;
      }
    }
    return false;
  }
}
module.exports = TicTacToe;
