class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
let output=true;
let row=[];
let column=[];
let boxes = [[], [], [], [], [], [], [], [], []];

 for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board.length; j++) {
    if(board[i][j]!=="."){
      row.push(board[i][j]);

      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      boxes[boxIndex].push(board[i][j])
    }
    if(board[j][i]!=="."){
      column.push(board[j][i]);
    }
  }
  const cleanRow=[... new Set(row)];
  const cleanCol=[... new Set(column)];

  if(cleanRow.length!==row.length){
    output=false;
  }
  if(cleanCol.length!==column.length){
    output=false;
  }

  row=[];
  column=[];
 }
 for (let k = 0; k < 9; k++) {
  const cleanBox = [...new Set(boxes[k])];
  if (cleanBox.length !== boxes[k].length) {
    output = false;
  }
  }

 return output
    }
}
