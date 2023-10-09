import { mother } from "./extract.js";
const drawNumbers = [
//   [9, 7, 7, 8, 7],
//   [6, 6, 3, 5, 9],
//   [5, 5, 6, 0, 2],
//   [1, 5, 1, 2, 1],
//   [3, 4, 8, 9, 8],
//   [3, 1, 3, 5, 7],
//   [4, 3, 3, 1, 8],
//   [6, 0, 0, 5, 0],
//   [7, 2, 8, 7, 9],
//   [3, 4, 4, 4, 5],
//   [0, 3, 3, 4, 5],
//   [0, 8, 7, 0, 9],
//   [1, 7, 1, 9, 5],
//   [6, 1, 1, 3, 6],
//   [4, 3, 5, 4, 1],
//   [9, 9, 7, 8, 9],
//   [1, 9, 1, 6, 6],
//   [0, 9, 6, 5, 3],
//   [5, 6, 3, 7, 5],
//   [8, 8, 8, 2, 2],
//   [6, 8, 0, 1, 6],
//   [0, 5, 8, 2, 0],
//   [4, 4, 5, 2, 7],
//   [4, 8, 6, 3, 4],
//   [9, 7, 3, 0, 4],
//   [2, 6, 1, 6, 0],
//   [1, 5, 2, 0, 2],
//   [4, 9, 9, 9, 4],
//   [7, 7, 9, 8, 1],
//   [4, 0, 0, 0, 8],
//   [5, 4, 4, 4, 6],
//   [9, 8, 4, 2, 9],
//   [9, 4, 3, 7, 9],
//   [1, 9, 2, 9, 5],
//   [5, 2, 4, 8, 5],
//   [2, 0, 0, 7, 1],
//   [3, 7, 1, 2, 9],
//   [7, 8, 8, 3, 0],
//   [0, 1, 7, 1, 2],
//   [9, 6, 7, 8, 4],
//   [4, 5, 6, 0, 1],
//   [6, 7, 5, 4, 7],
//   [1, 0, 6, 8, 0],
//   [7, 0, 0, 7, 3],
//   [0, 4, 4, 1, 5],
//   [4, 9, 6, 4, 0],
//   [6, 7, 5, 3, 8],
//   [7, 0, 4, 3, 3],
//   [2, 0, 7, 4, 2],
//   [4, 3, 6, 1, 6],
//   [2, 3, 3, 9, 8],
//   [7, 8, 4, 6, 1],
//   [6, 9, 4, 1, 4],
//   [1, 0, 1, 6, 1],
//   [0, 7, 3, 7, 3],
//   [7, 8, 8, 1, 3],
//   [0, 3, 5, 7, 5],
//   [3, 1, 9, 6, 9],
//   [9, 9, 6, 3, 6],
//   [0, 0, 8, 3, 8],
//   [0, 2, 4, 6, 6],
//   [8, 4, 0, 8, 5],
//   [2, 1, 8, 0, 2],
//   [1, 1, 7, 0, 3],
//   [4, 5, 0, 6, 9],
//   [7, 7, 6, 0, 6],
//   [8, 8, 3, 0, 4],
//   [7, 9, 4, 9, 0],
//   [1, 2, 9, 9, 1],
//   [0, 6, 4, 7, 3],
//   [0, 0, 7, 8, 2],
//   [1, 3, 0, 2, 1],
//   [5, 1, 0, 5, 5],
//   [5, 4, 8, 2, 8],
//   [3, 0, 0, 0, 8],
//   [9, 7, 5, 7, 1],
//   [9, 5, 0, 1, 0],
//   [0, 2, 8, 4, 1],
//   [7, 9, 5, 9, 4],
//   [6, 5, 5, 5, 3],
//   [9, 9, 4, 7, 1],
//   [8, 3, 4, 1, 4],
//   [6, 0, 7, 0, 1],
//   [3, 8, 5, 9, 3],
//   [3, 3, 4, 9, 0],
//   [4, 7, 6, 0, 5],
//   [9, 9, 2, 8, 9],
//   [4, 2, 3, 2, 1],
//   [2, 2, 8, 2, 6],
//   [3, 3, 2, 4, 2],
//   [9, 6, 5, 1, 7],
//   [6, 9, 4, 9, 7],
//   [3, 4, 0, 9, 1],
//   [7, 6, 8, 9, 5],
//   [8, 8, 1, 1, 2],
//   [1, 0, 2, 1, 4],
//   [0, 9, 3, 3, 0],
  [3, 6, 5, 2, 7],
  [5, 8, 6, 7, 0],
  [5, 8, 6, 7, 5],
//   [5, 8, 6, 7, 5],
//   [5, 8, 6, 7, 5],
//   [5, 8, 6, 7, 5],
//   [5, 8, 6, 7, 5],
//   [5, 8, 6, 7, 5],
].reverse(); //mother.reverse();
console.log("drawNumbers", mother);

function getNewRowAndCol(currentLetter, previousLetter, row, col) {
  // Logic to determine new row and col
  // Simplified from original with better names
  // Returns [newRow, newCol]
}

function isDuplicateItem(tree, row, col) {
  // Check if duplicate item
}

function getPrecedingAss(arr) {
  const result = [];
  let i = 0;
  if (arr[0] == "A" && arr[i] == "A") {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === "A" && arr[i - 1] === "A") {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

function getPrecedingAs(arr) {
  const result = [];

  let i = 0;

  // Keep going until we find a non-'A'
  while (i < arr.length && arr[i] === "A") {
    result.push(arr[i]);
    i++;
  }

  // Stop looping once we hit a non-'A'
  return result;
}

function removePrecedingAs(arr, numberOfAsToRemove) {
  // arr.splice(0, numberOfAsToRemove);

  return arr.splice(0, numberOfAsToRemove);
}

function buildDragonTigerTrees(drawNumbers, whatToAnalyze, type) {
  const tree = [];
  const road = analyzeDraw(drawNumbers, whatToAnalyze)[type];
  const roadLength = road.length;
  let row = 0;
  let col = 0;
  const maxNumberOfRows = 5;
  let whenColIncreaseByMaxRows = 0;
  let columnLeader = "";
  let consecutiveAs = 0;
  const dua = new Map();
  const visited = new Set();
  // console.log("before", road)
  const precedingAs = getPrecedingAs(road);

  // console.log("precedingAs", precedingAs)

  /* this if statement is to check if A's started the drawNumbers */
  if (precedingAs.length) {
    // console.log("preceding A's", precedingAs && precedingAs);
    for (let i = 0; i < precedingAs.length; i++) {
      const currentLetter = precedingAs[i];
      const nextLetter = road[i + 1];
      if (precedingAs[0] == "A" && i == 0) {
        row = 0;
        col = 0;
      } else {
        row++;
      }

      if (nextLetter != "A") {
        columnLeader = nextLetter;
      }

      if (row > maxNumberOfRows) {
        row = maxNumberOfRows;
        col++;
      }
      if (currentLetter === "A") {
        consecutiveAs++;
      } else {
        consecutiveAs = 0;
      }
      let newItem = [row, col, currentLetter];
      tree.push(newItem);
    }

    if (precedingAs.length === 1) {
      row = 1;
    }
    console.log("tree", JSON.stringify(tree));
    removePrecedingAs(road, precedingAs.length);
    console.log("after", road);
  }

  for (let i = 0; i < roadLength; i++) {
    const currentLetter = road[i];
    const previousLetter = road[i - 1];
    //get the first letter before the previous letter
    const previousLetterBeforeLetterA = road[i - 2];
    const nextLetter = road[i + 1];
    const firstItem = road[0];

    if (currentLetter !== "A") {
      if (
        previousLetter === "A" &&
        consecutiveAs === 1 &&
        firstItem === "A" &&
        col === 0
      ) {
        row++;
      } else if (columnLeader === "D" && consecutiveAs >= 2) {
        row++;
      } else if (
        columnLeader === "T" &&
        consecutiveAs >= 2 &&
        nextLetter !== "D"
      ) {
        row++;
      } else if (
        columnLeader === "T" &&
        consecutiveAs >= 2 &&
        currentLetter == "T"
      ) {
        if (currentLetter == "D") {
          col++;
        } else {
          row++;
        }
      } else if (
        previousLetter === "A" &&
        consecutiveAs === 1 &&
        previousLetterBeforeLetterA === currentLetter
      ) {
        row++;
      } else {
        if (currentLetter !== previousLetter) {
          col = whenColIncreaseByMaxRows;
          columnLeader = currentLetter;
        }

        if (previousLetter !== undefined && currentLetter !== previousLetter) {
          row = 0;
          col++;
          if (row === 0) {
            whenColIncreaseByMaxRows = col;
            columnLeader = currentLetter;
          }
        } else if (currentLetter === previousLetter) {
          row++;

          let prevCol = col - 1;
          const prev = dua[row + "|" + prevCol];

          if (prev === currentLetter) {
            row--;
            col++;
          }
        } else if (
          currentLetter !== previousLetter &&
          currentLetter !== nextLetter
        ) {
          col = 0;
          whenColIncreaseByMaxRows = col;
          columnLeader = currentLetter;
        } else {
          row++;
        }
      }

      if (row > maxNumberOfRows) {
        row = maxNumberOfRows;
        col++;
      }
    } else {
      if (columnLeader === "D") {
        // stay in column
        row++;
      } else {
        row++;
      }
    }

    if (row > maxNumberOfRows) {
      row = maxNumberOfRows;
      col++;
    }

    if (currentLetter === "A") {
      consecutiveAs++;
    } else {
      consecutiveAs = 0;
    }

    // Build item for tree
    let newItem = [row, col, currentLetter];

    if (visited.has(row + "|" + col)) {
      row--;
      col++;
      newItem[0] = row;
      newItem[1] = col;
    } else {
      visited.add(row + "|" + col);
    }

    // // console.log("counter ========>", counter)
    // dua.set(row + "|" + col, currentLetter);
    // let duplicate = tree.some(
    //     (item) => item[0] === newItem[0] && item[1] === newItem[1]
    // );

    // if (duplicate) {
    //     row--;
    //     col++;
    //     // newItem = [row, col, currentLetter];
    //     newItem[0] = row;
    //     newItem[1] = col;
    // }

    dua[row + "|" + col] = currentLetter;
    tree.push(newItem);
  }
  // }
  // console.log("preceeding A's", precedingAs && precedingAs);

  // removePrecedingAs(road, precedingAs.length);
  // console.log("remove", remove);
  // console.log("after", road);
  // return

  console.log("sfskdfk", tree);

  return tree;
}
const countOccurrences = (arr, type) => {
  let letter =
    type == "Big/Small"
      ? ["B", "S"]
      : type === "Odd/Even"
      ? ["O", "E"]
      : type === "P/C"
      ? ["P", "C"]
      : ["D", "T"];
  const counts = { [letter[0]]: 0, [letter[1]]: 0 };

  arr.forEach((item) => {
    counts[item]++;
  });

  const total = arr.length;
  return {
    [letter[0]]: ((counts[letter[0]] / total) * 100).toFixed(0) + "%",
    [letter[1]]: ((counts[letter[1]] / total) * 100).toFixed(0) + "%",
  };
};
/**
 * Builds a Dragon Tiger tree based on given drawNumbers, analysis type, and type.
 *
 * @param {Array} drawNumbers - The array of drawNumbers to analyze.
 * @param {string} whatToAnalyze - The analysis type to consider.
 * @param {string} type - The type of analysis.
 * @returns {Array} - The Dragon Tiger tree as an array of arrays. take this as coordinates to be plotted on the grid
 */
function buildDragonTigerTree(drawNumbers, whatToAnalyze, type) {
  const tree = []; // Initialize an empty tree.

  const road = analyzeDraw(drawNumbers, whatToAnalyze)[type]; // Analyze drawNumbers and get the specified type of road.
  const roadLength = road.length;
  let percentage = countOccurrences(road, type);
  let row = 0;
  let col = 0;
  let bigEyeBoyArr = [];
  let smallRoadArr = [];
  let cockcroachArr = [];
  let bigEyeRoadObj = {};
  let smallRoadObj = {};
  let cockroachObj = {};
  /**
   * the max number of rows in the grid
   *  at this point it tree starts plotting from left to right
   */
  const maxNumberOfRows = 5;

  /**
   *  this variable is declared to keep track of the column when the row is at
   *  its max which is 5 at this point columns increases
   */
  let whenColIncreaseByMaxRows = 0;
  /**
   * this variable is declared to keep track of the column leader i.e the first letter in the column
   */
  let columnLeader = "";

  /**
   * this variable is declared to keep track of the number of consecutive "A"s
   */
  let consecutiveAs = 0;
  const dua = new Map(); // Map to store previous values in the tree.
  const visited = new Set(); // Set to keep track of visited positions in the tree.

  const precedingAs = getPrecedingAs(road); // Get the preceding "A"s in the road.
  console.log(precedingAs.length);
  // Handle cases where "A"s precede the road.
  /* this if statement is to check if A's started the drawNumbers */
  if (precedingAs.length) {
    for (let i = 0; i < precedingAs.length; i++) {
      const currentLetter = precedingAs[i];
      const nextLetter = road[i + 1];
      if (precedingAs[0] == "A" && i == 0) {
        row = 0;
        col = 0;
      } else {
        row++;
      }

      if (nextLetter != "A") {
        columnLeader = nextLetter;
      }

      if (row > maxNumberOfRows) {
        row = maxNumberOfRows;
        col++;
      }
      if (currentLetter === "A") {
        consecutiveAs++;
      } else {
        consecutiveAs = 0;
      }
      let newItem = [row, col, currentLetter];
      tree.push(newItem);
    }

    removePrecedingAs(road, precedingAs.length);
    if (precedingAs.length === 1 && tree.length === 1) {
      row++;
    }
  }
  // console.log("columnLeader", columnLeader, "consecutiveAs", consecutiveAs,)//"row", row, "col", col, "road", road, "precedingAs", precedingAs, "tree", tree, "dua", dua, "visited", visited, "maxNumberOfRows", maxNumberOfRows, "whenColIncreaseByMaxRows", whenColIncreaseByMaxRows, "percentage", percentage)
  // Loop through the remaining letters in the road.
  for (let i = 0; i < roadLength; i++) {
    const currentLetter = road[i];
    const previousLetter = road[i - 1];
    const previousLetterBeforeLetterA = road[i - 2];
    const nextLetter = road[i + 1];
    const firstItem = road[0];

    if (currentLetter !== "A") {
      if (
        previousLetter === "A" &&
        consecutiveAs === 1 &&
        firstItem === "A" &&
        col === 0
      ) {
        row++;
      } else if (columnLeader === "D" && consecutiveAs >= 2) {
        row++;
      } else if (
        columnLeader === "T" &&
        consecutiveAs >= 2 &&
        nextLetter !== "D" &&
        currentLetter == "T"
      ) {
        // console.log("Sdfsfsdfsdfsafsa", nextLetter)
        row++;
      } else if (
        columnLeader === "T" &&
        consecutiveAs >= 2 &&
        currentLetter == "T"
      ) {
        if (currentLetter == "D") {
          col++;
        } else {
          row++;
        }
      } else if (
        previousLetter === "A" &&
        consecutiveAs === 1 &&
        previousLetterBeforeLetterA === currentLetter
      ) {
        row++;
      } else {
        if (currentLetter !== previousLetter) {
          col = whenColIncreaseByMaxRows;
          columnLeader = currentLetter;
        }

        if (previousLetter !== undefined && currentLetter !== previousLetter) {
          row = 0;
          col++;
          if (row === 0) {
            whenColIncreaseByMaxRows = col;
            columnLeader = currentLetter;
          }
        } else if (currentLetter === previousLetter) {
          row++;

          let prevCol = col - 1;
          const prev = dua[row + "|" + prevCol];

          if (prev === currentLetter) {
            row--;
            col++;
          }
        } else if (
          currentLetter !== previousLetter &&
          currentLetter !== nextLetter
        ) {
          col = 0;
          whenColIncreaseByMaxRows = col;
          columnLeader = currentLetter;
        } else {
          if (
            (tree.length == 0 && road[0] == "T") ||
            road[0] == "D" ||
            tree[0]
          ) {
            row;
          } else {
            row++;
          }
          // if it is empty I want to use below
          // row
          // else if not empty use row ++
          // row++
        }
      }

      if (row > maxNumberOfRows) {
        row = maxNumberOfRows;
        col++;
      }
    } else {
      if (columnLeader === "D") {
        // Stay in column
        row++;
      } else {
        row++;
      }
    }

    if (row > maxNumberOfRows) {
      row = maxNumberOfRows;
      col++;
    }

    if (currentLetter === "A") {
      consecutiveAs++;
    } else {
      consecutiveAs = 0;
    }

    // Build item for tree
    let newItem = [row, col, currentLetter];

    if (visited.has(row + "|" + col)) {
      row--;
      col++;
      newItem[0] = row;
      newItem[1] = col;
    } else {
      visited.add(row + "|" + col);
    }

    dua[row + "|" + col] = currentLetter;
    tree.push(newItem);
    // console.log(tree)

    derivedRoad(
      tree,//  removeInitialAs(tree),
      whenColIncreaseByMaxRows,
      row,
      {
        bigEyeBoyArr,
        smallRoadArr,
        cockcroachArr,
        bigEyeRoadObj,
        smallRoadObj,
        cockroachObj,
      },
      columnLeader
    );
  }
  // console.log(bigEyeBoyArr)
  const bigBoy = buildDerivedRoadTree(bigEyeBoyArr);
  // const smallRoad = buildDerivedRoadTree(smallRoadArr)
  // const cockcroach = buildDerivedRoadTree(cockcroachArr)
  // console.log(tree)

  return { tree, percentage, colWidth: whenColIncreaseByMaxRows, bigBoy }; //smallRoad, cockcroach, nextColor: { bigEyeRoadObj, smallRoadObj, cockroachObj } };
}

const check = {
  B: "S",
  S: "B",
  P: "C",
  C: "P",
  O: "E",
  E: "O",
  D: "T",
  T: "D",
};

function getLastArrayWithColWithoutAss(arr, col) {
  let last = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i][1] === col && arr[i][2] !== "A") {
      last = arr[i];
      break;
    }
  }

  return last;
}

function getLastArrayWithColWithoutA(arr, col) {
    let last = null;
    let lastIndex = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][1] === col) {
        last = arr[i];
        lastIndex = i;
      }
    }
  
    if (lastIndex !== -1 && last[2] === "A") {
      // Search for the predecessor that is not "A" within the same column.
      for (let i = lastIndex - 1; i >= 0; i--) {
        if (arr[i][1] === col && arr[i][2] !== "A") {
          // Create a new array with the modified value.
          return [last[0], last[1], arr[i][2]];
        }
      }
    }
  
    return last; // Return the original array if no modification is needed.
  }
// function getLastArrayWithCol2(arr, col) {

//     let last = null;

//     for (let i = arr.length - 1; i >= 0; i--) {
//       if (arr[i][1] === col && arr[i][2] !== "A") {
//         last = arr[i];
//         break;
//       }
//     }

//     return last;

//   }


function removeInitialAs(arr) {
  let output = [];
  let skip = true;

  for (let row of arr) {
    if (row[2] === 'A' && skip) {
      continue;
    }
    
    skip = false;
    output.push(row);
  }

  return output; 
}

function derivedRoad(
  tree,
  col,
  row,
  {
    bigEyeBoyArr,
    smallRoadArr,
    cockcroachArr,
    bigEyeRoadObj,
    smallRoadObj,
    cockroachObj,
  }
) {
  let getLastArrayWithCol2Var = getLastArrayWithColWithoutA(tree, col);
  let currentLetterCurrentCol =  getLastArrayWithCol2Var[2]; //current letter in the current column
  let nextLetterToBreakColumn = check[getLastArrayWithCol2Var[2]]; //next letter to break the column

  let letter = (val) => (val === "R" ? "B" : "R");

  let updatedBigEyeRoadObj = { ...bigEyeRoadObj };
  let updatedSmallRoadObj = { ...smallRoadObj };
  let updatedCockroachObj = { ...cockroachObj };
  let bigEyeBoy = getLastArrayWithColWithoutA(tree, col - 1);
  let smallRoad = getLastArrayWithColWithoutA(tree, col - 2);
  let cockroach = getLastArrayWithColWithoutA(tree, col - 3);
  console.log("treeeeeeeeeeeee", tree);
  console.log("good day", bigEyeBoy, getLastArrayWithCol2Var, currentLetterCurrentCol, nextLetterToBreakColumn)// a && u

  if (getLastArrayWithCol2Var && bigEyeBoy ) {
    // console.log(
    //   "good day ",
    //   bigEyeBoy,
    //   getLastArrayWithCol2Var,
    //   currentLetterCurrentCol,
    //   nextLetterToBreakColumn
    // );
    if (currentLetterCurrentCol === "A") {
      bigEyeBoyArr.push(updatedBigEyeRoadObj[currentLetterCurrentCol]);
    } else {
      if (getLastArrayWithCol2Var[0] === bigEyeBoy[0]) {
        if (!Object.keys(bigEyeRoadObj).length) {
          bigEyeRoadObj[nextLetterToBreakColumn] = "R";
        } else {
          Object.keys(bigEyeRoadObj).forEach(
            (key) => delete bigEyeRoadObj[key]
          );
          bigEyeRoadObj[nextLetterToBreakColumn] = "R";
        }
      } else {
        if (!Object.keys(bigEyeRoadObj).length) {
          bigEyeRoadObj[nextLetterToBreakColumn] = "B";
        } else {
          Object.keys(bigEyeRoadObj).forEach(
            (key) => delete bigEyeRoadObj[key]
          );
          bigEyeRoadObj[nextLetterToBreakColumn] = "B";
        }
      }

      if (!isEmpty(updatedBigEyeRoadObj)) {
        if (
          bigEyeRoadObj &&
          Object.keys(updatedBigEyeRoadObj)[0] === currentLetterCurrentCol
        ) {
          bigEyeBoyArr.push(updatedBigEyeRoadObj[currentLetterCurrentCol]);
        } else {
          const firstValue = letter(Object.values(updatedBigEyeRoadObj)[0]);
          bigEyeBoyArr.push(firstValue);
        }
      }
    }
  }

  if (getLastArrayWithCol2Var && smallRoad && !tree[0].includes("A")) {
    if (currentLetterCurrentCol === "A") {
      bigEyeBoyArr.push(updatedBigEyeRoadObj[currentLetterCurrentCol]);
    } else {
      if (getLastArrayWithCol2Var[0] === smallRoad[0]) {
        if (!Object.keys(smallRoadObj).length) {
          smallRoadObj[nextLetterToBreakColumn] = "R";
        } else {
          Object.keys(smallRoadObj).forEach((key) => delete smallRoadObj[key]);
          smallRoadObj[nextLetterToBreakColumn] = "R";
        }
      } else {
        if (!Object.keys(smallRoadObj).length) {
          smallRoadObj[nextLetterToBreakColumn] = "B";
        } else {
          Object.keys(smallRoadObj).forEach((key) => delete smallRoadObj[key]);
          smallRoadObj[nextLetterToBreakColumn] = "B";
        }
      }

      if (!isEmpty(updatedSmallRoadObj)) {
        if (
          smallRoadObj &&
          Object.keys(updatedSmallRoadObj)[0] === currentLetterCurrentCol
        ) {
          smallRoadArr.push(updatedSmallRoadObj[currentLetterCurrentCol]);
        } else {
          const firstValue = letter(Object.values(updatedSmallRoadObj)[0]);
          smallRoadArr.push(firstValue);
        }
      }
    }
  }

  if (getLastArrayWithCol2Var && cockroach && !tree[0].includes("A")) {
    if (currentLetterCurrentCol === "A") {
      bigEyeBoyArr.push(updatedBigEyeRoadObj[currentLetterCurrentCol]);
    } else {
      if (getLastArrayWithCol2Var[0] === cockroach[0]) {
        if (!Object.keys(cockroachObj).length) {
          cockroachObj[nextLetterToBreakColumn] = "R";
        } else {
          Object.keys(cockroachObj).forEach((key) => delete cockroachObj[key]);
          cockroachObj[nextLetterToBreakColumn] = "R";
        }
      } else {
        if (!Object.keys(cockroachObj).length) {
          cockroachObj[nextLetterToBreakColumn] = "B";
        } else {
          Object.keys(cockroachObj).forEach((key) => delete cockroachObj[key]);
          cockroachObj[nextLetterToBreakColumn] = "B";
        }
      }

      if (!isEmpty(updatedCockroachObj)) {
        if (
          cockroachObj &&
          Object.keys(updatedCockroachObj)[0] === currentLetterCurrentCol
        ) {
          cockcroachArr.push(updatedCockroachObj[currentLetterCurrentCol]);
        } else {
          const firstValue = letter(Object.values(updatedCockroachObj)[0]);
          cockcroachArr.push(firstValue);
        }
      }
    }
  }
}

function isEmpty(value) {
  if (value === null || value === undefined || value < 1) {
    return true;
  }

  if (typeof value === "string" && value.trim() === "") {
    return true;
  }

  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  if (typeof value === "object" && Object.keys(value).length === 0) {
    return true;
  }

  return false;
}

function getLastArrayWithCol2(arr, col) {
  let last = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] === col) {
      last = arr[i];
    }
  }
  return last;
}

// function buildDragonTigerTree(drawNumbers, whatToAnalyze, type) {
//     const tree = [];
//     const road = analyzeDraw(drawNumbers, whatToAnalyze)[type];
//     const roadLength = road.length;
//     let row = 0;
//     let col = 0;
//     const maxNumberOfRows = 5;
//     let whenColIncreaseByMaxRows = 0;
//     let columnLeader = "";
//     let countLetterA = 0;
//     const dua = new Map();
//     const visited = new Set();
//     let counter = 0

//     for (let i = 0; i < roadLength; i++) {
//         const previousLetter = road[i - 1];
//         //get the first letter before the previous letter
//         const previousLetterBefore = road[i - 2];
//         const currentLetter = road[i];
//         const nextLetter = road[i + 1];

//         //    console.log(previousLetter, currentLetter, nextLetter, countLetterA, previousLetterBefore, columnLeader)
//         // console.log("previousLetter: ", previousLetter, "currentLetter: ", currentLetter, "nextLetter: ", nextLetter, "countLetterA: ", countLetterA, "previousLetterBefore: ", previousLetterBefore, "columnLeader: ", columnLeader)
//         // if (currentLetter !== previousLetter && previousLetter !== "A" && currentLetter !== "A") {
//         //     // col = whenColIncreaseByMaxRows;
//         //     // columnLeader = currentLetter;
//         //     console.log(whenColIncreaseByMaxRows, "currentLetter", currentLetter)
//         // }
//         if (previousLetter !== undefined && currentLetter !== previousLetter && currentLetter !== "A" && previousLetter != "A") {
//             // console.log("rows ", row, "col", col, "currentLetter", currentLetter)
//             col = whenColIncreaseByMaxRows
//             columnLeader = currentLetter
//             row = 0
//             col++
//             if (row === 0) {
//                 counter++
//                 console.log("biiiiiiiiiiiiiiiiiiiiiiiiig jdkfjksdfjksda", row, col, currentLetter, counter)

//                 whenColIncreaseByMaxRows = col;
//             }
//         }
//         //    A A or D D or T T or A T or T A or D A or A D
//         // else if (previousLetter === currentLetter || currentLetter === "A") {
//         //     // if( previousLetter === "A" )
//         //     // console.log("-----------------------------------",countLetterA, countLetterA >= 2)
//         //     // D A A followed by T
//         //     // if( countLetterA >= 2 && columnLeader != "T"){
//         //     //     row = 0;
//         //     //     col++
//         //     // }
//         //     // // but T A A cannot be followed by D
//         //     // else if(countLetterA >= 2 && columnLeader == "T" ){
//         //     //     row = 0;
//         //     //     col++
//         //     // }
//         //     // else{
//         //     //     row++
//         //     // }
//         //     // col = whenColIncreaseByMaxRows
//         //     row++
//         //     let prevCol = col - 1;
//         //     const prev = dua[row + "|" + prevCol];

//         //     if (prev === currentLetter) {
//         //         row--;
//         //         col++;
//         //     }
//         // } else if (countLetterA >= 2 && columnLeader != "T" && currentLetter == columnLeader) {
//         //     // row = 0;
//         //     row++

//         // }

//         // else if (countLetterA <= 1 && columnLeader != "T" && currentLetter != columnLeader && previousLetter != undefined) {
//         //     console.log("biiiiiiiiiiiiiiiiiiiiiiiiig boy", row, col, currentLetter)

//         // }
//         // else if(currentLetter !== previousLetter && previousLetter != undefined){
//         //     console.log("biiiiiiiiiig boooooooooooooooooooy", row, col, currentLetter)
//         //     col = whenColIncreaseByMaxRows
//         //     row = 0
//         //     col++
//         // }

//         if (currentLetter === "A") {
//             countLetterA++;
//         } else {
//             countLetterA = 0;
//         }

//         if (row > maxNumberOfRows) {
//             row = maxNumberOfRows;
//             // whenColIncreaseByMaxRows = col;
//             col++;
//         }
//         // if( countLetterA >= 2 && columnLeader != "T" && currentLetter != columnLeader){
//         //     // row = 0;
//         //     // row++
//         //     console.log("biiiiiiiiiiiiiiiiiiiiiiiiig boy", row, col)
//         // }
//         // but T A A cannot be followed by D
//         // else if(countLetterA >= 2 && columnLeader == "T" ){
//         //     row = 0;
//         //     col++
//         // }
//         console.log("currentLetter: ", currentLetter, countLetterA)
//         const newItem = [row, col, currentLetter];
//         // console.log("visited: ", visited)

//         if (visited.has(row + "|" + col)) {
//             row--;
//             col++;
//             newItem[0] = row;
//             newItem[1] = col;
//         } else {
//             visited.add(row + "|" + col);
//         }

//         dua.set(row + "|" + col, currentLetter);

//         tree.push(newItem);

//         if (row === 0 && col === 12) {
//             // console.log("sitsss", currentLetter, previousLetter, countLetterA)
//             // alert(currentLetter)
//             // console.log("sitsss", road.slice(13, 24))
//         }
//     }
//     console.log("tree: ", tree)
//     return tree;
// }
// function buildDragonTigerTree(drawNumbers, whatToAnalyze, type) {
//     const tree = [];
//     const analyzedResults = analyzeDraw(drawNumbers, whatToAnalyze)[type];

//     let row = 0;
//     let col = 0;
//     let whenColIncreaseByMaxRows = 0;
//     let columnLeader = ""
//     let dua = {};

//     analyzedResults.forEach((_, i) => {
//         let previousLetter = analyzedResults[i - 1];
//         let currentLetter = analyzedResults[i];
//         let nextLetter = analyzedResults[i + 1];
//         let newItem = [];

//         if (currentLetter !== previousLetter) {
//             col = whenColIncreaseByMaxRows;
//         }
//         if (previousLetter !== undefined && currentLetter !== previousLetter) {
//             row = 0;
//             col++;
//             if (row === 0) {
//                 whenColIncreaseByMaxRows = col;
//                 columnLeader = currentLetter;
//             }
//         } else if (currentLetter === previousLetter) {
//             row++;

//             let prevCol = col - 1;
//             const prev = dua[row + "|" + prevCol];

//             if (prev === currentLetter) {
//                 row--;
//                 col++;
//             }
//         } else if (currentLetter !== previousLetter && currentLetter !== nextLetter) {
//             col = 0;
//             whenColIncreaseByMaxRows = col;
//             columnLeader = currentLetter;
//         }

//         if (row > 5) {
//             row = 5;
//             col++;
//         }
//         newItem = [row, col, currentLetter];

//         let duplicate = tree.some((item) => item[0] === newItem[0] && item[1] === newItem[1]);

//         if (duplicate) {
//             row--;
//             col++;
//             newItem = [row, col, currentLetter];
//         }

//         dua[row + "|" + col] = currentLetter;
//         tree.push(newItem);
//     });
//     console.log(tree)
//     return tree;
// }

const timerStart = performance.now();

// Get the table element by ID
const table = document.getElementById("grid");
const derivedTable = document.getElementById("deriveGrid");

// Loop through the data and add rows to the table
// buildDragonTigerTree(drawNumbers, "sum", "D/T")

document.onload = createTable(6, 100);
document.onload = createDerivedTable(6, 100);

function createTable(rows, cols) {
  for (let i = 0; i < rows; i++) {
    const row = table.insertRow();
    for (let j = 0; j < cols; j++) {
      const cell = row.insertCell();
      cell.textContent = ""; // Initially empty
      // cell.textContent = i + "" + j; // Initially empty
    }
  }
}

buildDragonTigerTree(drawNumbers, "sum", "D/T")["tree"].forEach((rowData) => {
  const [rowIndex, colIndex, value] = rowData;
  const row = table.rows[rowIndex];
  if (row) {
    const cell = row.cells[colIndex];
    if (cell) {
      // cell.textContent = rowIndex + " " + value + " " + colIndex;
      cell.textContent = value;
    }
    if (value === "D") {
      cell.style.color = "blue";
    } else if (value === "T") {
      cell.style.color = "red";
    } else if (value === "A") {
      cell.style.color = "green";
    }
    cell.style.fontWeight = "bold";
  }
});
function createDerivedTable(rows, cols) {
  for (let i = 0; i < rows; i++) {
    const row = derivedTable.insertRow();
    for (let j = 0; j < cols; j++) {
      const cell = row.insertCell();
      cell.textContent = ""; // Initially empty
      // cell.textContent = i + "" + j; // Initially empty
    }
  }
}

buildDragonTigerTree(drawNumbers, "sum", "D/T")["bigBoy"].forEach((rowData) => {
  const [rowIndex, colIndex, value] = rowData;
  const row = derivedTable.rows[rowIndex];
  if (row) {
    const cell = row.cells[colIndex];
    if (cell) {
      // cell.textContent = rowIndex + " " + value + " " + colIndex;
      cell.textContent = value;
    }
    if (value === "D") {
      cell.style.color = "blue";
    } else if (value === "T") {
      cell.style.color = "red";
    } else if (value === "A") {
      cell.style.color = "green";
    }
    cell.style.fontWeight = "bold";
  }
});
const timerEnd = performance.now();

// Create an empty table with a certain number of rows and columns
// createTable(5, 5); // Adjust the number of rows and columns as needed

function firstAndLast(arr) {
  if (arr.length === 0) {
    return []; // Return an empty array for an empty input array.
  }

  const first = arr[0];
  const last = arr[arr.length - 1];

  return [first, last];
}

// Helper functions
function getOddEven(num) {
  return num % 2 === 0 ? "E" : "O";
}

function getBigSmallForSum(sum) {
  return sum >= 23 && sum <= 45 ? "B" : "S";
}

function getDragonTiger(lastTwo) {
  if (lastTwo[0] > lastTwo[1]) {
    return "D";
  } else if (lastTwo[0] < lastTwo[1]) {
    return "T";
  } else {
    return "A";
  }
}

function analyzeDraw(drawNumbers, whatToAnalyze) {
  const results = {
    "Big/Small": [], // Add an array to store detailed dragon-tiger-tie counts
    "Odd/Even": [], // Add an array to store detailed
    "P/C": [],
    "D/T": [],
  };

  for (const element of drawNumbers) {
    const draw = element;

    // let ball = draw[parseInt(whatToAnalyze) - 1];

    // let bigSmall = getBigSmallForBall(ball);

    let ball;
    if (whatToAnalyze === "sum") {
      ball = draw.reduce((a, b) => a + b, 0);
    } else {
      ball = draw[parseInt(whatToAnalyze) - 1];
    }

    let oddEven, bigSmall, primeComposite, dragonTiger;
    // console.log("ball", ball);
    if (whatToAnalyze === "sum") {
      // console.log("dsfkjksdafkhsadhfkhsdakhfklsdfklhsdaf")
      oddEven = getOddEven(ball);
      bigSmall = getBigSmallForSum(ball);

      let lastTwo = firstAndLast(draw);
      dragonTiger = getDragonTiger(lastTwo);
    } else {
      oddEven = getOddEven(ball);
      bigSmall = getBigSmallForBall(ball);

      primeComposite = getPrimeComposite(ball);
      dragonTiger = getDragonTiger(["dragon", "tiger", "tie"]); // Initialize dragonTiger value
    }
    // Add the bigSmall value to the results array
    results["Big/Small"].push(bigSmall);
    results["Odd/Even"].push(oddEven);
    results["P/C"].push(primeComposite);
    results["D/T"].push(dragonTiger);
  }

  console.log("results", results["D/T"]);
  return results;
}
function buildDerivedRoadTree(road) {
  const tree = [];
  let row = 0;
  let col = 0;
  let whenColIncreaseByMaxRows = 0;
  let dua = {};

  road.forEach((value, i) => {
    let previousLetter = road[i - 1];
    let currentLetter = road[i];
    let nextLetter = road[i + 1];
    let newItem = [];

    if (currentLetter !== previousLetter) {
      col = whenColIncreaseByMaxRows;
    }
    if (previousLetter !== undefined && currentLetter !== previousLetter) {
      row = 0;
      col++;
      if (row === 0) {
        whenColIncreaseByMaxRows = col;
      }
    } else if (currentLetter === previousLetter) {
      row++;

      let prevCol = col - 1;
      const prev = dua[row + "|" + prevCol];

      if (prev === currentLetter) {
        row--;
        col++;
      }
    } else if (
      currentLetter !== previousLetter &&
      currentLetter !== nextLetter
    ) {
      col = 0;
      whenColIncreaseByMaxRows = col;
    }

    if (row > 5) {
      row = 5;
      col++;
    }
    newItem = [row, col, currentLetter];

    let duplicate = tree.some(
      (item) => item[0] === newItem[0] && item[1] === newItem[1]
    );

    if (duplicate) {
      row--;
      col++;
      newItem = [row, col, currentLetter];
    }

    dua[row + "|" + col] = currentLetter;

    tree.push(newItem);
  });

  // console.log(tree);
  return tree;
}
/*

 for (let i = 0; i < roadLength; i++) {
        const previousLetter = road[i - 1];
        //get the first letter before the previous letter
        const previousLetterBefore = road[i - 2];
        const currentLetter = road[i];
        const nextLetter = road[i + 1];

        if (currentLetter !== previousLetter && previousLetter !== "A" && currentLetter !== "A") {
            col = whenColIncreaseByMaxRows;
            columnLeader = currentLetter;
            console.log(whenColIncreaseByMaxRows, "currentLetter", currentLetter)
        }

        console.log("currentLetter, previousLetter", currentLetter, previousLetter)

        if (previousLetter !== undefined && currentLetter !== previousLetter && currentLetter !== "A") {
            // console.log("come here", currentLetter !== "A", currentLetter !== previousLetter)

            if (countLetterA >= 2 && columnLeader !== "T" && previousLetter === "A") {
                // console.log("does it come here", currentLetter !== "A", columnLeader !== "T")
                // col = whenColIncreaseByMaxRows;
                whenColIncreaseByMaxRows = col;

                row++;
            }
            // else if (currentLetter === columnLeader && previousLetter == "A" && countLetterA === 1 && previousLetterBefore !== currentLetter) {
            //     col = whenColIncreaseByMaxRows;

            //     row = 0;
            //     col++;
            //     console.log("good grace")
            // }
            else if (currentLetter === columnLeader && countLetterA === 1) {
                console.log("last good grace", previousLetterBefore, whenColIncreaseByMaxRows)
                // if (previousLetterBefore !== currentLetter) {
                //     // col = whenColIncreaseByMaxRows;
                //     console.log("good grace", whenColIncreaseByMaxRows)
                //     col = 11
                //     row = 0;
                //     col++;
                // }

                // else {
                //     row++;
                // }
                row++;
                // alert()
                console.log("--==========================--", "come here and change column", currentLetter, previousLetter, countLetterA, columnLeader, previousLetterBefore)
            }
            else if (previousLetter == "A" && countLetterA >= 2 && columnLeader === "T" && currentLetter !== previousLetter) {
                // console.log("im actually here")
                whenColIncreaseByMaxRows = col;
                
                row++;
            }
            // else if(){

            // }
            else {

                //     whenColIncreaseByMaxRows = col;
                // columnLeader = currentLetter;
                console.log("come here and change column", currentLetter, previousLetter, countLetterA, columnLeader)
                col = whenColIncreaseByMaxRows;
                row = 0;
                col++;

            }

            if (row === 0) {
                whenColIncreaseByMaxRows = col;
                // console.log("sdfkaghsdkfkahsdfghkasdhfkasdf")
                columnLeader = currentLetter;
            }
        } else if (currentLetter === "A") {
            row++;
        }
        else if (currentLetter === previousLetter) {
            row++;

            const prevCol = col - 1;
            const prev = dua.get(row + "|" + prevCol);

            if (prev === currentLetter) {
                // console.log("come here")
                row--;
                col++;
            }

        }
        else if (currentLetter !== previousLetter && currentLetter !== nextLetter && currentLetter !== "A") {
            col = 0;
            whenColIncreaseByMaxRows = col;
            columnLeader = currentLetter;
        }

        if (row > 5) {
            row = 5;
            col++;
        }


        if (currentLetter === "A") {
            countLetterA++;
        } else {
            countLetterA = 0;
        }
        // if(previousLetter === "A" && currentLetter === "T"){
        //     // row++;
        //     col = whenColIncreaseByMaxRows;
        //         row = 0;
        //         col++;
        // }
        //   if (countLetterA > 2) {
        //     // console.log("countLetterA: " + countLetterA)
        //     //     row = 0;
        //     //     col++;
        //     //     countLetterA = 0;
        //   }
        // console.log("column leader: ", columnLeader)
        // console.log("row: " + row + " col: " + col + " currentLetter: " + currentLetter + " previousLetter: " + previousLetter + " nextLetter " + nextLetter)//+ " countLetterA: " + countLetterA)//, " columnLeader: " + columnLeader)
        // console.log(previousLetter !== undefined && currentLetter !== "A" && currentLetter !== previousLetter , " currentLetter: " + currentLetter + " previousLetter: " + previousLetter + " nextLetter " + nextLetter, "column leader", columnLeader)
        const newItem = [row, col, currentLetter];
        // console.log("visited: ", visited)
        if (visited.has(row + "|" + col)) {
            row--;
            col++;
            newItem[0] = row;
            newItem[1] = col;
        } else {
            visited.add(row + "|" + col);
        }

        dua.set(row + "|" + col, currentLetter);

        tree.push(newItem);
        if (row === 0 && col === 12) {
            console.log("sitsss", currentLetter, previousLetter, countLetterA)
            // alert(currentLetter)
            console.log("sitsss", road.slice(13, 24))
        }
    }

*/
