class TicTacToe {
  play(x, y) {
    this.checkAxis(x);
    this.checkAxis(y);
  }

  checkAxis(axis) {
    if (axis < 1 || axis > 3) {
      throw new Error();
    }
  }
}
module.exports = TicTacToe;
