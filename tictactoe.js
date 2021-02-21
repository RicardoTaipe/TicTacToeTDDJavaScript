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
    if (this.isWin(x, y)) {
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
  setBox(x, y, lastPlayer) {
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

  isWin(x, y) {
    const playerTotal = this.lastPlayer.repeat(3);
    let diagonal1 =""
      let diagonal2=""
      let horizontal=""
      let vertical = "";
    for (let index = 0; index < this.SIZE; index++) {
      horizontal += this.board[index][y - 1];
      vertical += this.board[x - 1][index];
      diagonal1 += this.board[index][index];
      diagonal2 += this.board[index][this.SIZE - index - 1];
    }
    if (
      horizontal === playerTotal ||
      vertical === playerTotal ||
      diagonal1 === playerTotal ||
      diagonal2 === playerTotal
    ) {
      return true;
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
