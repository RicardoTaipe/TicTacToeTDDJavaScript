const TicTacToe = require("./tictactoe");

let ticTacToe;

beforeEach(() => {
  ticTacToe = new TicTacToe();
});

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

test("givenFirstTurnWhenNextPlayerThenX", () => {
  expect(ticTacToe.nextPlayer()).toEqual("X");
});

test("givenLastTurnWasXWhenNextPlayerThenO", () => {
  ticTacToe.play(1, 1);
  expect(ticTacToe.nextPlayer()).toEqual("O");
});

test("whenPlayThenNoWinner", () => {
  const actual = ticTacToe.play(1, 1);
  expect(actual).toEqual("No winner");
});

test("whenPlayAndWholeHorizontalLineThenWinner", () => {
  ticTacToe.play(1, 1); // X
  ticTacToe.play(1, 2); // O
  ticTacToe.play(2, 1); // X
  ticTacToe.play(2, 2); // O
  const actual = ticTacToe.play(3, 1); // X
  expect(actual).toEqual("X is the winner");
});
