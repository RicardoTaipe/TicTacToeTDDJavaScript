const TicTacToe = require("./tictactoe");

let ticTacToe = new TicTacToe();

test("whenXOutsideBoardThenException", () => {
  expect(() => ticTacToe.play(5, 3)).toThrow(Error);
  expect(() => ticTacToe.play(-2, 3)).toThrow(Error);
});

test("whenYOutsideBoardThenException", () => {
  expect(() => ticTacToe.play(2, 5)).toThrow(Error);
  expect(() => ticTacToe.play(2, -3)).toThrow(Error);
});

test("whenOccupiedThenException", () => {
  ticTacToe.play(2, 1);
  expect(() => ticTacToe.play(2, 1)).toThrow(Error);
});
