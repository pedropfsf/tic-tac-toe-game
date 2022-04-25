import forMatrix from '../../utils/forMatrix';

describe('Tests Unit gameWinningChecker', () => {
  test('Working perfectly', () => {
    // SET
    type Matrix<Value> = Value[][];

    type filledBox = {
      value: 'x' | 'o' | ''
    };

    type filledBoxMatrix = Matrix<filledBox>;
    
    const ticTocGameMatrix: filledBoxMatrix = [
      [ { value: 'x' }, { value: '' }, { value: '' } ],
      [ { value: '' }, { value: 'x' }, { value: '' } ],
      [ { value: '' }, { value: '' }, { value: 'x' } ],
    ];

    const result_expect = 'x';

    function gameWinningChecker(ticTocGameMatrix: filledBoxMatrix) {
      const victoryPatterns = [
        [ 
          ticTocGameMatrix[0][0], 
          ticTocGameMatrix[1][1],
          ticTocGameMatrix[2][2]
          // Diagonal line where its bottom edge is facing right
        ],
        [
          ticTocGameMatrix[0][2],
          ticTocGameMatrix[1][1],
          ticTocGameMatrix[2][0]
          // Diagonal line where its bottom edge is facing left
        ],
        [
          ticTocGameMatrix[0][0],
          ticTocGameMatrix[0][1],
          ticTocGameMatrix[0][2]
          // Line that hits three boxes from above
        ],
        [
          ticTocGameMatrix[1][0],
          ticTocGameMatrix[1][1],
          ticTocGameMatrix[1][2]
          // Line that hits the middle of the game horizontally
        ],
        [
          ticTocGameMatrix[2][0],
          ticTocGameMatrix[2][1],
          ticTocGameMatrix[2][2]
          // Line that hits three boxes below
        ],
        [
          ticTocGameMatrix[0][0],
          ticTocGameMatrix[1][0],
          ticTocGameMatrix[2][0]
          // Left vertical line
        ],
        [
          ticTocGameMatrix[0][1],
          ticTocGameMatrix[1][1],
          ticTocGameMatrix[2][1]
          // Middle vertical line
        ],
        [
          ticTocGameMatrix[0][2],
          ticTocGameMatrix[1][2],
          ticTocGameMatrix[2][2]
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

    // ACT
    const result = gameWinningChecker(ticTocGameMatrix);

    // ASSERT
    expect(result).toStrictEqual(result_expect);
  });
});