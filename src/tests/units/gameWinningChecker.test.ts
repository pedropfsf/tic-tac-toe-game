import forMatrix from '../../utils/forMatrix';

describe('Tests Unit gameWinningChecker', () => {
  type Matrix<Value> = Value[][];

  type filledBox = {
    value: 'x' | 'o' | ''
  };

  type filledBoxMatrix = Matrix<filledBox>;

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

    for(let pattern of victoryPatterns) {
      if(pattern.join('') === 'xxx') {
        return 'x';

      } else if (pattern.join('') === 'ooo') {
        return 'o';
      
      } else {
        return '';
      
      }
    }
  }

  test('Capturing the right-facing diagonal line pattern of player X and O', () => {
    // SET
    const ticTocGameMatrixPlayerX: filledBoxMatrix = [
      [ { value: 'x' }, { value: '' }, { value: '' } ],
      [ { value: '' }, { value: 'x' }, { value: '' } ],
      [ { value: '' }, { value: '' }, { value: 'x' } ],
    ];
    const ticTocGameMatrixPlayerO: filledBoxMatrix = [
      [ { value: 'o' }, { value: '' }, { value: '' } ],
      [ { value: '' }, { value: 'o' }, { value: '' } ],
      [ { value: '' }, { value: '' }, { value: 'o' } ],
    ];

    const EXPECT_RESULT_PLAYER_X = 'x';
    const EXPECT_RESULT_PLAYER_O = 'o';

    // ACT
    const resultPlayerX = gameWinningChecker(ticTocGameMatrixPlayerX);
    const resultPlayerO = gameWinningChecker(ticTocGameMatrixPlayerO);

    // ASSERT
    expect(resultPlayerX).toStrictEqual(EXPECT_RESULT_PLAYER_X);
    expect(resultPlayerO).toStrictEqual(EXPECT_RESULT_PLAYER_O);
  });

  test('Capturing the left-facing diagonal line pattern of player X and O', () => {
    // Continue

    // SET
    const ticTocGameMatrixPlayerX: filledBoxMatrix = [
      [ { value: '' }, { value: '' }, { value: 'x' } ],
      [ { value: '' }, { value: 'x' }, { value: '' } ],
      [ { value: 'x' }, { value: '' }, { value: '' } ],
    ];
    const ticTocGameMatrixPlayerO: filledBoxMatrix = [
      [ { value: '' }, { value: '' }, { value: 'o' } ],
      [ { value: '' }, { value: 'o' }, { value: '' } ],
      [ { value: 'o' }, { value: '' }, { value: '' } ],
    ];

    const EXPECT_RESULT_PLAYER_X = 'x';
    const EXPECT_RESULT_PLAYER_O = 'o';

    // ACT
    const resultPlayerX = gameWinningChecker(ticTocGameMatrixPlayerX);
    const resultPlayerO = gameWinningChecker(ticTocGameMatrixPlayerO);

    // ASSERT
    expect(resultPlayerX).toStrictEqual(EXPECT_RESULT_PLAYER_X);
    expect(resultPlayerO).toStrictEqual(EXPECT_RESULT_PLAYER_O);
  });
});