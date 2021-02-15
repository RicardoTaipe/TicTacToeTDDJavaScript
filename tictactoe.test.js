const TicTacToe = require('./tictactoe');

let ticTacToe = new TicTacToe();

test('whenXOutsideBoardThenRuntimeException', () => {
  expect(()=> ticTacToe.play(5,3)).toThrow(Error)
  expect(()=> ticTacToe.play(-2,3)).toThrow(Error)
});

test('whenYOutsideBoardThenRuntimeException', () => {
    expect(()=> ticTacToe.play(2,5)).toThrow(Error)
    expect(()=> ticTacToe.play(2,-3)).toThrow(Error)
  });