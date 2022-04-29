type Callback<Item> = (item: Item, index: number, array: Item[][]) => void;

describe('Test Unit mapMatrix', () => {
  test('it is working correctly', () => {
    // SET
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    let resultFinal: number[] = [];
    const resultExpect = [
      2, 4, 6,
      8, 10, 12,
      14, 16, 18
    ];

    function forMatrix<Item>(callback: Callback<Item>, matrix: Item[][]): void {
      let count = 0;

      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          callback(matrix[i][j], count, matrix);

          count++;
        }
      }
    }

    const multiplyByTwo = (value: number) => value * 2;

    // ACT
    const multiplyByTwoSimulator = jest.fn(multiplyByTwo);
    
    forMatrix(item => {
      resultFinal.push(multiplyByTwoSimulator(item));
    }, matrix);

    const multiplyByTwoCallsLength = multiplyByTwoSimulator.mock.calls.length;

    // ASSERT
    expect(resultFinal).toEqual(resultExpect);
    expect(multiplyByTwoCallsLength).toStrictEqual(resultExpect.length);
  });
});