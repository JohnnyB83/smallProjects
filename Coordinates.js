//return x and y coords of 1 that is only 1 in row and column give a 2D array

function findOne(arr) {
  let solutionArr = []
  
  for(let i = 0; i < arr.length; i++) {
    //find if row has only one 1 in it
    let rowAdd = arr[i].reduce((accum, current) => { return accum + current })
    if(rowAdd === 1) {
      //get the x position of it
      let xPos = arr[i].indexOf(1);
      
      let columnAdd = 0;
      for(let j = 0; j < arr.length; j++) {
        //traverse down the column and add everything up
      	columnAdd += arr[j][xPos];
        if(arr[j][xPos] === 1) {
          //add the solution we found to our solutions array since the column direction sums to one as well
          solutionArr.push([xPos, j]);
        }
      }
    }
  }
  return solutionArr;
}

findOne([[1,0,0],[0,0,1],[0,0,0],[0,1,0],[0,0,0]])
