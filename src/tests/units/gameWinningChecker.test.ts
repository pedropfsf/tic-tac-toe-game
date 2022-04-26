import forMatrix from '../../utils/forMatrix';

describe('Tests Unit gameWinningChecker', () => {
  type Matrix<Value> = Value[][];

  type filledBox = {
    value: 'x' | 'o' | ''
  };

  type filledBoxMatrix = Matrix<filledBox>;

  function selectTypeWinPattern(index: string) {
    switch(index) {
      case '0':
        return 'right-diagonal';
      
      case '1':
        return 'left-diagonal';

      case '2':
        return 'horizontal-top-line';
      
      case '3':
        return 'horizontal-middle-line';
      
      case '4':
        return 'horizontal-bottom-line';
      
      case '5':
        return 'left-vertical-line';
      
      case '6':
        return 'middle-vertical-line';

      case '7':
        return 'right-vertical-line';
    }
  }

  function gameWinningChecker(ticTocGameMatrix: filledBoxMatrix) {
    const victoryPatterns = [
      [ 
        ticTocGameMatrix[0][0].value, 
        ticTocGameMatrix[1][1].value,
        ticTocGameMatrix[2][2].value
        // Diagonal line where its bottom edge is facing right
      ],
      [
        ticTocGameMatrix[0][2].value,
        ticTocGameMatrix[1][1].value,
        ticTocGameMatrix[2][0].value
        // Diagonal line where its bottom edge is facing left
      ],
      [
        ticTocGameMatrix[0][0].value,
        ticTocGameMatrix[0][1].value,
        ticTocGameMatrix[0][2].value
        // Line that hits three boxes from above
      ],
      [
        ticTocGameMatrix[1][0].value,
        ticTocGameMatrix[1][1].value,
        ticTocGameMatrix[1][2].value
        // Line that hits the middle of the game horizontally
      ],
      [
        ticTocGameMatrix[2][0].value,
        ticTocGameMatrix[2][1].value,
        ticTocGameMatrix[2][2].value
        // Line that hits three boxes below
      ],
      [
        ticTocGameMatrix[0][0].value,
        ticTocGameMatrix[1][0].value,
        ticTocGameMatrix[2][0].value
        // Left vertical line
      ],
      [
        ticTocGameMatrix[0][1].value,
        ticTocGameMatrix[1][1].value,
        ticTocGameMatrix[2][1].value
        // Middle vertical line
      ],
      [
        ticTocGameMatrix[0][2].value,
        ticTocGameMatrix[1][2].value,
        ticTocGameMatrix[2][2].value
        // Right vertical line
      ]
    ]

    const PATTERN_PLAYER_X_WIN = 'xxx';
    const PATTERN_PLAYER_O_WIN = 'ooo';

    for(let index in victoryPatterns) {
      const patternTurn = victoryPatterns[index].join('');

      if(patternTurn === PATTERN_PLAYER_X_WIN) {
        return {
          type: selectTypeWinPattern(index),
          winner: 'x'
        };
        
      } else if (patternTurn === PATTERN_PLAYER_O_WIN) {
        return {
          type: selectTypeWinPattern(index),
          winner: 'o'
        };
      
      } else {
        continue;
      }
    }

    return 'tied-game';
  }

  test('Capture the right-facing diagonal line pattern of player X and O', () => {
    // SET
    const ticTocGameMatrixPlayerX: filledBoxMatrix = [
      [ { value: 'x' }, { value: '' }, { value: '' } ],
      [ { value: '' }, { value: 'x' }, { value: '' } ],
      [ { value: '' }, { value: '' }, { value: 'x' } ]
    ];
    const ticTocGameMatrixPlayerO: filledBoxMatrix = [
      [ { value: 'o' }, { value: '' }, { value: '' } ],
      [ { value: '' }, { value: 'o' }, { value: '' } ],
      [ { value: '' }, { value: '' }, { value: 'o' } ]
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
    expect(resultPlayerX).toStrictEqual(EXPECT_RESULT_PLAYER_X);
    expect(resultPlayerO).toStrictEqual(EXPECT_RESULT_PLAYER_O);
  });

  test('Capture the left-facing diagonal line pattern of player X and O', () => {
    // SET
    const ticTocGameMatrixPlayerX: filledBoxMatrix = [
      [ { value: '' }, { value: '' }, { value: 'x' } ],
      [ { value: '' }, { value: 'x' }, { value: '' } ],
      [ { value: 'x' }, { value: '' }, { value: '' } ]
    ];
    const ticTocGameMatrixPlayerO: filledBoxMatrix = [
      [ { value: '' }, { value: '' }, { value: 'o' } ],
      [ { value: '' }, { value: 'o' }, { value: '' } ],
      [ { value: 'o' }, { value: '' }, { value: '' } ]
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
    expect(resultPlayerX).toStrictEqual(EXPECT_RESULT_PLAYER_X);
    expect(resultPlayerO).toStrictEqual(EXPECT_RESULT_PLAYER_O);
  });

  test('Capture line that hits the three boxes above', () => {
    // SET
    const ticTocGameMatrixPlayerX: filledBoxMatrix = [
      [ { value: 'x' }, { value: 'x' }, { value: 'x' } ],
      [ { value: '' }, { value: '' }, { value: '' } ],
      [ { value: '' }, { value: '' }, { value: '' } ]
    ];
    const ticTocGameMatrixPlayerO: filledBoxMatrix = [
      [ { value: 'o' }, { value: 'o' }, { value: 'o' } ],
      [ { value: '' }, { value: '' }, { value: '' } ],
      [ { value: '' }, { value: '' }, { value: '' } ]
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
    expect(resultPlayerX).toStrictEqual(EXPECT_RESULT_PLAYER_X);
    expect(resultPlayerO).toStrictEqual(EXPECT_RESULT_PLAYER_O);
  });

  test('Capture line that hits the three middle boxes', () => {
    // SET
    const ticTocGameMatrixPlayerX: filledBoxMatrix = [
      [ { value: '' }, { value: '' }, { value: '' } ],
      [ { value: 'x' }, { value: 'x' }, { value: 'x' } ],
      [ { value: '' }, { value: '' }, { value: '' } ]
    ];
    const ticTocGameMatrixPlayerO: filledBoxMatrix = [
      [ { value: '' }, { value: '' }, { value: '' } ],
      [ { value: 'o' }, { value: 'o' }, { value: 'o' } ],
      [ { value: '' }, { value: '' }, { value: '' } ]
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
    expect(resultPlayerX).toStrictEqual(EXPECT_RESULT_PLAYER_X);
    expect(resultPlayerO).toStrictEqual(EXPECT_RESULT_PLAYER_O);
  });

  test('Capture line that hits the three bottom boxes', () => {
    // SET
    const ticTocGameMatrixPlayerX: filledBoxMatrix = [
      [ { value: '' }, { value: '' }, { value: '' } ],
      [ { value: '' }, { value: '' }, { value: '' } ],
      [ { value: 'x' }, { value: 'x' }, { value: 'x' } ]
    ];
    const ticTocGameMatrixPlayerO: filledBoxMatrix = [
      [ { value: '' }, { value: '' }, { value: '' } ],
      [ { value: '' }, { value: '' }, { value: '' } ],
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
    expect(resultPlayerX).toStrictEqual(EXPECT_RESULT_PLAYER_X);
    expect(resultPlayerO).toStrictEqual(EXPECT_RESULT_PLAYER_O);
  });
  
  test('Capture line that hit the three boxes vertically on the left', () => {
    // SET
    const ticTocGameMatrixPlayerX: filledBoxMatrix = [
      [ { value: 'x' }, { value: '' }, { value: '' } ],
      [ { value: 'x' }, { value: '' }, { value: '' } ],
      [ { value: 'x' }, { value: '' }, { value: '' } ]
    ];
    const ticTocGameMatrixPlayerO: filledBoxMatrix = [
      [ { value: 'o' }, { value: '' }, { value: '' } ],
      [ { value: 'o' }, { value: '' }, { value: '' } ],
      [ { value: 'o' }, { value: '' }, { value: '' } ]
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
    expect(resultPlayerX).toStrictEqual(EXPECT_RESULT_PLAYER_X);
    expect(resultPlayerO).toStrictEqual(EXPECT_RESULT_PLAYER_O);
  });

  test('Capture line that hit the three box vertically in the middle', () => {
    // SET
    const ticTocGameMatrixPlayerX: filledBoxMatrix = [
      [ { value: '' }, { value: 'x' }, { value: '' } ],
      [ { value: '' }, { value: 'x' }, { value: '' } ],
      [ { value: '' }, { value: 'x' }, { value: '' } ]
    ];
    const ticTocGameMatrixPlayerO: filledBoxMatrix = [
      [ { value: '' }, { value: 'o' }, { value: '' } ],
      [ { value: '' }, { value: 'o' }, { value: '' } ],
      [ { value: '' }, { value: 'o' }, { value: '' } ]
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
    expect(resultPlayerX).toStrictEqual(EXPECT_RESULT_PLAYER_X);
    expect(resultPlayerO).toStrictEqual(EXPECT_RESULT_PLAYER_O);
  });

  test('Capture line that hit the three box vertically in the right', () => {
    // SET
    const ticTocGameMatrixPlayerX: filledBoxMatrix = [
      [ { value: '' }, { value: '' }, { value: 'x' } ],
      [ { value: '' }, { value: '' }, { value: 'x' } ],
      [ { value: '' }, { value: '' }, { value: 'x' } ]
    ];
    const ticTocGameMatrixPlayerO: filledBoxMatrix = [
      [ { value: '' }, { value: '' }, { value: 'o' } ],
      [ { value: '' }, { value: '' }, { value: 'o' } ],
      [ { value: '' }, { value: '' }, { value: 'o' } ]
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
    expect(resultPlayerX).toStrictEqual(EXPECT_RESULT_PLAYER_X);
    expect(resultPlayerO).toStrictEqual(EXPECT_RESULT_PLAYER_O);
  });
});