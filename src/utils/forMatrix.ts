type Callback<Item> = (item: Item, index: number, array: Item[][]) => void;

function forMatrix<Item>(callback: Callback<Item>, matrix: Item[][]): void {
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      callback(matrix[i][j], count, matrix);

      count++;
    }
  }
}

export default forMatrix;