import { TypeLineWinGame } from '../types/GameContextTypes';

type Matrix<Value> = Value[][];

type filledBox = {
  value: 'x' | 'o' | ''
};

export type filledBoxMatrix = Matrix<filledBox>;

function selectTypeWinPattern(index: string): TypeLineWinGame {
  switch (index) {
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
    
    default:
      return '';
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

  for (let index in victoryPatterns) {
    const patternTurn = victoryPatterns[index].join('');

    if (patternTurn === PATTERN_PLAYER_X_WIN) {
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

  return 'progress';
}

export default gameWinningChecker;