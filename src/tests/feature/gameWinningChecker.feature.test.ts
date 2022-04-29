import gameWinningChecker, { filledBoxMatrix } from "../../utils/gameWinningChecker";

describe('Tests Feature gameWinningChecker', () => {
  
  test('Capture line that hits right-facing diagonal amid random values', () => {
    // SET
    const ticTocGameMatrixPlayerX: filledBoxMatrix = [
      [ { value: 'x' }, { value: 'o' }, { value: 'o' } ],
      [ { value: 'o' }, { value: 'x' }, { value: 'x' } ],
      [ { value: 'x' }, { value: 'o' }, { value: 'x' } ]
    ];

    const ticTocGameMatrixPlayerO: filledBoxMatrix = [
      [ { value: 'o' }, { value: 'o' }, { value: 'x' } ],
      [ { value: 'x' }, { value: 'o' }, { value: 'o' } ],
      [ { value: 'o' }, { value: 'x' }, { value: 'o' } ]
    ];
    
    const EXPECT_RESULT_PLAYER_X = {
      type: 'right-diagonal',
      winner: 'x'
    };

    const EXPECT_RESULT_PLAYER_O = {
      type: 'right-diagonal',
      winner: 'o'
    };

    // ACT
    const resultPlayerX = gameWinningChecker(ticTocGameMatrixPlayerX);
    const resultPlayerO = gameWinningChecker(ticTocGameMatrixPlayerO);

    // ASSERT
    expect(resultPlayerX).toStrictEqual(EXPECT_RESULT_PLAYER_X)
    expect(resultPlayerO).toStrictEqual(EXPECT_RESULT_PLAYER_O)
  });

  test('Capture line that hits the left-facing diagonal amid random values', () => {
    // SET
    const ticTocGameMatrixPlayerX: filledBoxMatrix = [
      [ { value: 'x' }, { value: 'o' }, { value: 'x' } ],
      [ { value: 'o' }, { value: 'x' }, { value: 'x' } ],
      [ { value: 'x' }, { value: 'o' }, { value: 'o' } ]
    ];

    const ticTocGameMatrixPlayerO: filledBoxMatrix = [
      [ { value: 'o' }, { value: 'o' }, { value: 'o' } ],
      [ { value: 'x' }, { value: 'o' }, { value: 'o' } ],
      [ { value: 'o' }, { value: 'x' }, { value: 'x' } ]
    ];
    
    const EXPECT_RESULT_PLAYER_X = {
      type: 'left-diagonal',
      winner: 'x'
    };

    const EXPECT_RESULT_PLAYER_O = {
      type: 'left-diagonal',
      winner: 'o'
    };

    // ACT
    const resultPlayerX = gameWinningChecker(ticTocGameMatrixPlayerX);
    const resultPlayerO = gameWinningChecker(ticTocGameMatrixPlayerO);

    // ASSERT
    expect(resultPlayerX).toStrictEqual(EXPECT_RESULT_PLAYER_X)
    expect(resultPlayerO).toStrictEqual(EXPECT_RESULT_PLAYER_O)
  });

  test('Capture line that hits the top three boxes amid random values', () => {
    // SET
    const ticTocGameMatrixPlayerX: filledBoxMatrix = [
      [ { value: 'x' }, { value: 'x' }, { value: 'x' } ],
      [ { value: 'o' }, { value: 'x' }, { value: 'x' } ],
      [ { value: 'o' }, { value: 'o' }, { value: 'o' } ]
    ];

    const ticTocGameMatrixPlayerO: filledBoxMatrix = [
      [ { value: 'o' }, { value: 'o' }, { value: 'o' } ],
      [ { value: 'x' }, { value: 'x' }, { value: 'o' } ],
      [ { value: 'o' }, { value: 'x' }, { value: 'x' } ]
    ];
    
    const EXPECT_RESULT_PLAYER_X = {
      type: 'horizontal-top-line',
      winner: 'x'
    };

    const EXPECT_RESULT_PLAYER_O = {
      type: 'horizontal-top-line',
      winner: 'o'
    };

    // ACT
    const resultPlayerX = gameWinningChecker(ticTocGameMatrixPlayerX);
    const resultPlayerO = gameWinningChecker(ticTocGameMatrixPlayerO);

    // ASSERT
    expect(resultPlayerX).toStrictEqual(EXPECT_RESULT_PLAYER_X)
    expect(resultPlayerO).toStrictEqual(EXPECT_RESULT_PLAYER_O)
  });

  test('Capture line that hits the middle three boxes horizontally amid random values', () => {
    // SET
    const ticTocGameMatrixPlayerX: filledBoxMatrix = [
      [ { value: 'x' }, { value: 'o' }, { value: 'x' } ],
      [ { value: 'x' }, { value: 'x' }, { value: 'x' } ],
      [ { value: 'o' }, { value: 'x' }, { value: 'o' } ]
    ];

    const ticTocGameMatrixPlayerO: filledBoxMatrix = [
      [ { value: 'x' }, { value: 'o' }, { value: 'x' } ],
      [ { value: 'o' }, { value: 'o' }, { value: 'o' } ],
      [ { value: 'o' }, { value: 'x' }, { value: 'x' } ]
    ];
    
    const EXPECT_RESULT_PLAYER_X = {
      type: 'horizontal-middle-line',
      winner: 'x'
    };

    const EXPECT_RESULT_PLAYER_O = {
      type: 'horizontal-middle-line',
      winner: 'o'
    };

    // ACT
    const resultPlayerX = gameWinningChecker(ticTocGameMatrixPlayerX);
    const resultPlayerO = gameWinningChecker(ticTocGameMatrixPlayerO);

    // ASSERT
    expect(resultPlayerX).toStrictEqual(EXPECT_RESULT_PLAYER_X)
    expect(resultPlayerO).toStrictEqual(EXPECT_RESULT_PLAYER_O)
  });

  test('Capture line that hits the bottom three boxes amid random values', () => {
    // SET
    const ticTocGameMatrixPlayerX: filledBoxMatrix = [
      [ { value: 'x' }, { value: 'x' }, { value: 'o' } ],
      [ { value: 'o' }, { value: 'o' }, { value: 'x' } ],
      [ { value: 'x' }, { value: 'x' }, { value: 'x' } ]
    ];

    const ticTocGameMatrixPlayerO: filledBoxMatrix = [
      [ { value: 'o' }, { value: 'o' }, { value: 'x' } ],
      [ { value: 'x' }, { value: 'x' }, { value: 'o' } ],
      [ { value: 'o' }, { value: 'o' }, { value: 'o' } ]
    ];
    
    const EXPECT_RESULT_PLAYER_X = {
      type: 'horizontal-bottom-line',
      winner: 'x'
    };

    const EXPECT_RESULT_PLAYER_O = {
      type: 'horizontal-bottom-line',
      winner: 'o'
    };

    // ACT
    const resultPlayerX = gameWinningChecker(ticTocGameMatrixPlayerX);
    const resultPlayerO = gameWinningChecker(ticTocGameMatrixPlayerO);

    // ASSERT
    expect(resultPlayerX).toStrictEqual(EXPECT_RESULT_PLAYER_X)
    expect(resultPlayerO).toStrictEqual(EXPECT_RESULT_PLAYER_O)
  });

  test('Capture line that hits the left three boxes amid random values', () => {
    // SET
    const ticTocGameMatrixPlayerX: filledBoxMatrix = [
      [ { value: 'x' }, { value: 'x' }, { value: 'o' } ],
      [ { value: 'x' }, { value: 'o' }, { value: 'x' } ],
      [ { value: 'x' }, { value: 'o' }, { value: 'x' } ]
    ];

    const ticTocGameMatrixPlayerO: filledBoxMatrix = [
      [ { value: 'o' }, { value: 'o' }, { value: 'x' } ],
      [ { value: 'o' }, { value: 'x' }, { value: 'o' } ],
      [ { value: 'o' }, { value: 'o' }, { value: 'x' } ]
    ];
    
    const EXPECT_RESULT_PLAYER_X = {
      type: 'left-vertical-line',
      winner: 'x'
    };

    const EXPECT_RESULT_PLAYER_O = {
      type: 'left-vertical-line',
      winner: 'o'
    };

    // ACT
    const resultPlayerX = gameWinningChecker(ticTocGameMatrixPlayerX);
    const resultPlayerO = gameWinningChecker(ticTocGameMatrixPlayerO);

    // ASSERT
    expect(resultPlayerX).toStrictEqual(EXPECT_RESULT_PLAYER_X)
    expect(resultPlayerO).toStrictEqual(EXPECT_RESULT_PLAYER_O)
  });

  test('Capture line that hits the middle three boxes vertically amid random values', () => {
    // SET
    const ticTocGameMatrixPlayerX: filledBoxMatrix = [
      [ { value: 'x' }, { value: 'x' }, { value: 'o' } ],
      [ { value: 'o' }, { value: 'x' }, { value: 'x' } ],
      [ { value: 'x' }, { value: 'x' }, { value: 'o' } ]
    ];

    const ticTocGameMatrixPlayerO: filledBoxMatrix = [
      [ { value: 'o' }, { value: 'o' }, { value: 'x' } ],
      [ { value: 'x' }, { value: 'o' }, { value: 'o' } ],
      [ { value: 'o' }, { value: 'o' }, { value: 'x' } ]
    ];
    
    const EXPECT_RESULT_PLAYER_X = {
      type: 'middle-vertical-line',
      winner: 'x'
    };

    const EXPECT_RESULT_PLAYER_O = {
      type: 'middle-vertical-line',
      winner: 'o'
    };

    // ACT
    const resultPlayerX = gameWinningChecker(ticTocGameMatrixPlayerX);
    const resultPlayerO = gameWinningChecker(ticTocGameMatrixPlayerO);

    // ASSERT
    expect(resultPlayerX).toStrictEqual(EXPECT_RESULT_PLAYER_X)
    expect(resultPlayerO).toStrictEqual(EXPECT_RESULT_PLAYER_O)
  });

  test('Capture line that hits the right three boxes vertically amid random values', () => {
    // SET
    const ticTocGameMatrixPlayerX: filledBoxMatrix = [
      [ { value: 'o' }, { value: 'x' }, { value: 'x' } ],
      [ { value: 'o' }, { value: 'o' }, { value: 'x' } ],
      [ { value: 'x' }, { value: 'o' }, { value: 'x' } ]
    ];

    const ticTocGameMatrixPlayerO: filledBoxMatrix = [
      [ { value: 'x' }, { value: 'o' }, { value: 'o' } ],
      [ { value: 'x' }, { value: 'x' }, { value: 'o' } ],
      [ { value: 'o' }, { value: 'x' }, { value: 'o' } ]
    ];
    
    const EXPECT_RESULT_PLAYER_X = {
      type: 'right-vertical-line',
      winner: 'x'
    };

    const EXPECT_RESULT_PLAYER_O = {
      type: 'right-vertical-line',
      winner: 'o'
    };

    // ACT
    const resultPlayerX = gameWinningChecker(ticTocGameMatrixPlayerX);
    const resultPlayerO = gameWinningChecker(ticTocGameMatrixPlayerO);

    // ASSERT
    expect(resultPlayerX).toStrictEqual(EXPECT_RESULT_PLAYER_X)
    expect(resultPlayerO).toStrictEqual(EXPECT_RESULT_PLAYER_O)
  });

  test('If there is no winner', () => {
    // SET
    const ticTocGameMatrixPlayerX: filledBoxMatrix = [
      [ { value: 'x' }, { value: 'x' }, { value: 'o' } ],
      [ { value: 'o' }, { value: 'o' }, { value: 'x' } ],
      [ { value: 'x' }, { value: 'x' }, { value: 'o' } ]
    ];

    const ticTocGameMatrixPlayerO: filledBoxMatrix = [
      [ { value: 'x' }, { value: 'x' }, { value: 'o' } ],
      [ { value: 'o' }, { value: 'o' }, { value: 'x' } ],
      [ { value: 'x' }, { value: 'x' }, { value: 'o' } ]
    ];
    
    const EXPECT_RESULT_PLAYER_X = 'progress';

    const EXPECT_RESULT_PLAYER_O = 'progress';

    // ACT
    const resultPlayerX = gameWinningChecker(ticTocGameMatrixPlayerX);
    const resultPlayerO = gameWinningChecker(ticTocGameMatrixPlayerO);

    // ASSERT
    expect(resultPlayerX).toStrictEqual(EXPECT_RESULT_PLAYER_X)
    expect(resultPlayerO).toStrictEqual(EXPECT_RESULT_PLAYER_O)
  });
});