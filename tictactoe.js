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
    } else if (this.isDraw()) {
      return "The result is draw";
    } else {
      return "No winner";
    }
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
    let diagonal1 = "";
    let diagonal2 = "";
    for (let index = 0; index < this.SIZE; index++) {
      diagonal1 += this.board[index][index];
      diagonal2 += this.board[index][this.SIZE - index - 1];
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
      if (diagonal1 === playerTotal || diagonal2 === playerTotal) {
        return true;
      }
    }
    return false;
  }

  isDraw() {
    for (let i = 0; i < this.SIZE; i++) {
      for (let j = 0; j < this.SIZE; j++) {
        if (this.board[i][j] === "") {
          return false;
        }
      }
    }
    return true;
  }
}
module.exports = TicTacToe;
