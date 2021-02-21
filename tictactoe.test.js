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

test("whenPlayAndWholeVeticalLineThenWinner", () => {
  ticTacToe.play(2, 1); // X
  ticTacToe.play(1, 1); // O
  ticTacToe.play(3, 1); // X
  ticTacToe.play(1, 2); // O
  ticTacToe.play(2, 2); // X
  const actual = ticTacToe.play(1, 3); // O
  //console.table(ticTacToe); //this help to see the actual board
  expect(actual).toEqual("O is the winner");
});

test("whenPlayAndTopBottomDiagonalLineThenWinner", () => {
  ticTacToe.play(1, 1); // X
  ticTacToe.play(1, 2); // O
  ticTacToe.play(2, 2); // X
  ticTacToe.play(1, 3); // O
  const actual = ticTacToe.play(3, 3); // X
  //console.table(ticTacToe);
  expect(actual).toEqual("X is the winner");
});

test("whenPlayAndBottomTopDiagonalLineThenWinner", () => {
  ticTacToe.play(1, 3); // X
  ticTacToe.play(1, 1); // O
  ticTacToe.play(2, 2); // X
  ticTacToe.play(1, 2); // O
  const actual = ticTacToe.play(3, 1); // X
  expect(actual).toEqual("X is the winner");
});

test("whenAllBoxesAreFilledThenDraw", () => {
  ticTacToe.play(1, 1);
  ticTacToe.play(1, 2);
  ticTacToe.play(1, 3);
  ticTacToe.play(2, 1);
  ticTacToe.play(2, 3);
  ticTacToe.play(2, 2);
  ticTacToe.play(3, 1);
  ticTacToe.play(3, 3);
  const actual = ticTacToe.play(3, 2);
  expect(actual).toEqual("The result is draw");
});
