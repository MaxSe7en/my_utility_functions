// import { mother } from "./extract.js";
const drawNumbers = [
  [0, 3, 7, 0, 3],
  [0, 1, 7, 6, 3],
  [3, 0, 3, 4, 3],
  [2, 8, 4, 8, 0],
  [2, 7, 0, 6, 7],
  [3, 7, 7, 4, 2],
  [0, 5, 7, 0, 7],
  [4, 5, 9, 4, 8],
  [5, 6, 3, 6, 3],
  [4, 7, 5, 5, 8],
  [2, 1, 0, 3, 4],
  [6, 2, 3, 9, 0],
  [6, 6, 5, 9, 5],
  [7, 0, 5, 2, 1],
  [5, 5, 3, 6, 3],
  [8, 3, 6, 3, 4],
  [8, 2, 0, 3, 3],
  [3, 9, 7, 2, 1],
  [3, 1, 5, 8, 3],
  [5, 9, 9, 3, 5],
  [7, 6, 9, 0, 8],
  [2, 0, 4, 5, 5],
  [2, 6, 1, 5, 9],
  [2, 1, 3, 3, 4],
  [2, 3, 8, 9, 7],
  [9, 6, 6, 9, 6],
  [1, 6, 2, 3, 5],
  [4, 9, 8, 5, 9],
  [2, 5, 5, 8, 3],
  [9, 1, 3, 5, 1],
  [9, 5, 7, 4, 9],
  [6, 2, 8, 1, 4],
  [0, 1, 1, 0, 2],
  [5, 6, 0, 8, 2],
  [5, 8, 1, 5, 3],
  [8, 0, 9, 5, 7],
  [7, 3, 5, 8, 0],
  [7, 1, 1, 3, 6],
  [4, 1, 2, 6, 2],
  [0, 4, 8, 9, 4],
  [5, 0, 8, 5, 0],
  [3, 4, 8, 7, 0],
  [3, 7, 7, 1, 2],
  [6, 8, 1, 8, 1],
  [9, 7, 1, 3, 7],
  [5, 7, 7, 8, 0],
  [8, 9, 0, 2, 6],
  [4, 3, 7, 6, 6],
  [0, 8, 5, 8, 7],
  [6, 7, 3, 0, 7],
  [2, 0, 9, 1, 6],
  [9, 6, 2, 9, 3],
  [0, 0, 4, 9, 1],
  [0, 6, 1, 1, 6],
  [1, 6, 5, 8, 5],
  [9, 0, 9, 1, 7],
  [8, 6, 6, 2, 1],
  [4, 1, 8, 7, 6],
  [9, 5, 3, 6, 2],
  [3, 7, 3, 8, 3],
  [2, 6, 3, 8, 4],
  [0, 7, 8, 8, 3],
  [4, 8, 9, 8, 2],
  [7, 7, 6, 9, 3],
  [6, 5, 4, 8, 4],
  [9, 3, 6, 1, 0],
  [1, 8, 0, 5, 7],
  [3, 1, 1, 8, 6],
  [4, 1, 9, 0, 3],
  [2, 0, 1, 8, 0],
  [3, 1, 9, 1, 8],
  [9, 0, 2, 5, 1],
  [9, 1, 9, 4, 0],
  [2, 2, 5, 9, 2],
  [1, 7, 6, 5, 6],
  [0, 4, 9, 6, 7],
  [5, 9, 8, 5, 2],
  [0, 8, 5, 1, 9],
  [5, 8, 6, 5, 4],
  [3, 2, 7, 0, 6],
  [3, 1, 5, 7, 4],
  [5, 7, 0, 2, 3],
  [6, 8, 8, 0, 4],
  [5, 1, 4, 6, 1],
  [5, 1, 6, 8, 6],
  [7, 0, 0, 4, 8],
  [9, 7, 0, 0, 2],
  [0, 8, 6, 8, 9],
  [8, 4, 7, 1, 2],
  [1, 0, 8, 0, 1],
  [8, 5, 0, 9, 4],
  [8, 9, 8, 7, 8],
  [9, 3, 3, 5, 3],
  [3, 0, 4, 3, 4],
  [6, 7, 7, 5, 9],
  [9, 6, 4, 1, 1],
  [9, 0, 3, 3, 1],
  [6, 7, 5, 2, 3],
  [6, 0, 2, 2, 4],
  [0, 0, 7, 1, 2],
].reverse();
//mother.reverse();
// console.log("drawNumbers", mother);

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

function getPrecedingAsss(arr) {
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

function removePrecedingAsss(arr, numberOfAsToRemove) {
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
      } else if (
        previousLetter === "A" &&
        consecutiveAs === 1 &&
        columnLeader === "D" &&
        previousLetterBeforeLetterA === "T"
      ) {
        if (row >= maxNumberOfRows) {
          //  row = maxNumberOfRows;
          col++;
        } else {
          row++;
        }
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
        } else if (
          (tree.length === 0 && road[0] === "T") ||
          road[0] === "D" ||
          tree[0]
        ) {
          row = row;
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
    if (currentLetter !== undefined) {
      tree.push(newItem);
    }

    derivedRoad(
      tree, //  removeInitialAs(tree),
      whenColIncreaseByMaxRows,
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
  const smallRoad = buildDerivedRoadTree(smallRoadArr);
  const cockcroach = buildDerivedRoadTree(cockcroachArr);
  // console.log(tree)

  return {
    tree,
    percentage,
    colWidth: whenColIncreaseByMaxRows,
    bigBoy,
    smallRoad,
    cockcroach,
    nextColor: { bigEyeRoadObj, smallRoadObj, cockroachObj },
  };
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
    if (row[2] === "A" && skip) {
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
  let currentLetterCurrentCol =
    getLastArrayWithCol2Var != null && getLastArrayWithCol2Var[2]; //current letter in the current column
  let nextLetterToBreakColumn =
    getLastArrayWithCol2Var != null && check[getLastArrayWithCol2Var[2]]; //next letter to break the column

  let letter = (val) => (val === "R" ? "B" : "R");

  console.log("getLastArrayWithCol2Var", getLastArrayWithCol2Var);

  let updatedBigEyeRoadObj = { ...bigEyeRoadObj };
  let updatedSmallRoadObj = { ...smallRoadObj };
  let updatedCockroachObj = { ...cockroachObj };
  let bigEyeBoy = getLastArrayWithColWithoutA(tree, col - 1);
  let smallRoad = getLastArrayWithColWithoutA(tree, col - 2);
  let cockroach = getLastArrayWithColWithoutA(tree, col - 3);

  if (getLastArrayWithCol2Var && bigEyeBoy) {
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

  if (getLastArrayWithCol2Var && smallRoad) {
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

  if (getLastArrayWithCol2Var && cockroach) {
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
const derivedTable1 = document.getElementById("deriveGrid1");
const derivedTable2 = document.getElementById("deriveGrid2");

// Loop through the data and add rows to the table
// buildDragonTigerTree(drawNumbers, "sum", "D/T")

document.onload = createTable(6, 100);
// document.onload = createDerivedTable(6, 100);
// document.onload = createDerivedTable1(6, 100);
// document.onload = createDerivedTable2(6, 100);

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

buildTreesss(drawNumbers, "sum", "D/T")["tree"].forEach((rowData, index) => {
  const [rowIndex, colIndex, value] = rowData;
  const row = table.rows[rowIndex];
  if (row) {
    const cell = row.cells[colIndex];
    if (cell) {
      cell.textContent = index + " " + value; //+ " " + colIndex;
      // cell.textContent = rowIndex + " " + value + " " + colIndex;
      // cell.textContent = value;
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

// buildTree(drawNumbers, "sum", "D/T")["bigBoy"].forEach((rowData) => {
//   const [rowIndex, colIndex, value] = rowData;
//   const row = derivedTable.rows[rowIndex];
//   if (row) {
//     const cell = row.cells[colIndex];
//     if (cell) {
//       // cell.textContent = rowIndex + " " + value + " " + colIndex;
//       cell.textContent = value;
//     }
//     if (value === "B") {
//       cell.style.color = "blue";
//     } else if (value === "R") {
//       cell.style.color = "red";
//     } else if (value === "A") {
//       cell.style.color = "green";
//     }
//     cell.style.fontWeight = "bold";
//   }
// });

// function createDerivedTable1(rows, cols) {
//   for (let i = 0; i < rows; i++) {
//     const row = derivedTable1.insertRow();
//     for (let j = 0; j < cols; j++) {
//       const cell = row.insertCell();
//       cell.textContent = ""; // Initially empty
//       // cell.textContent = i + "" + j; // Initially empty
//     }
//   }
// }

// buildTree(drawNumbers, "sum", "D/T")["smallRoad"].forEach(
//   (rowData) => {
//     const [rowIndex, colIndex, value] = rowData;
//     const row = derivedTable1.rows[rowIndex];
//     if (row) {
//       const cell = row.cells[colIndex];
//       if (cell) {
//         // cell.textContent = rowIndex + " " + value + " " + colIndex;
//         cell.textContent = value;
//       }
//       if (value === "B") {
//         cell.style.color = "blue";
//       } else if (value === "R") {
//         cell.style.color = "red";
//       } else if (value === "A") {
//         cell.style.color = "green";
//       }
//       cell.style.fontWeight = "bold";
//     }
//   }
// );
// function createDerivedTable2(rows, cols) {
//   for (let i = 0; i < rows; i++) {
//     const row = derivedTable2.insertRow();
//     for (let j = 0; j < cols; j++) {
//       const cell = row.insertCell();
//       cell.textContent = ""; // Initially empty
//       // cell.textContent = i + "" + j; // Initially empty
//     }
//   }
// }

// buildTree(drawNumbers, "sum", "D/T")["cockcroach"].forEach(
//   (rowData) => {
//     const [rowIndex, colIndex, value] = rowData;
//     const row = derivedTable2.rows[rowIndex];
//     if (row) {
//       const cell = row.cells[colIndex];
//       if (cell) {
//         // cell.textContent = rowIndex + " " + value + " " + colIndex;
//         cell.textContent = value;
//       }
//       if (value === "B") {
//         cell.style.color = "blue";
//       } else if (value === "R") {
//         cell.style.color = "red";
//       } else if (value === "A") {
//         cell.style.color = "green";
//       }
//       cell.style.fontWeight = "bold";
//     }
//   }
// );
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

function buildTreesss(drawNumbers, whatToAnalyze, type) {
  const tree = [];

  const analyzedResults = analyzeDraw(drawNumbers, whatToAnalyze)[type];

  let percentage = countOccurrences(analyzedResults, type);

  let bigEyeBoyArr = [];
  let smallRoadArr = [];
  let cockcroachArr = [];
  let bigEyeRoadObj = {};
  let countConsecutiveAs = 0;
  // const analyzedResults1 = analyzeDraw(drawNumbers, whatToAnalyze).oddEven;
  // const analyzedResults2 = analyzeDraw(drawNumbers, whatToAnalyze).primeComposite;

  // console.log(percentage);
  let row = 0;
  let col = 0;
  let whenColIncreaseByMaxRows = 0;
  let dua = {};
  const { transposed, asIndexes, consecutiveCounts } =
    transpose(analyzedResults);
  const img = transpose(analyzedResults);
  console.log("img", img);
  transposed.forEach((value, i) => {
    let previousLetter = transposed[i - 1];
    console.log(transposed)
    let currentLetter = transposed[i];
    let nextLetter = transposed[i + 1];
    let newItem = [];

    if (currentLetter !== previousLetter) {
      col = whenColIncreaseByMaxRows;
    } //&& currentLetter !== letterinobj && countsinobj >= 2 row++
    if (previousLetter !== undefined && currentLetter !== previousLetter) {
      // if(currentLetter !== img["consecutiveAs"][`${previousLetter}${i}`] && countsinobj >= 2)
      console.log(
        "dd",
        img["consecutiveAs"][`${previousLetter}${i}`],
        JSON.stringify(img["consecutiveAs"]),
        previousLetter,
        currentLetter,
        i
      );
      if (
        type === "D/T" &&
        img["consecutiveAs"][`${previousLetter}${i}`] >= 2 &&
        previousLetter === "D"
      ) {
        // alert(currentLetter)
        row++;
      } else {
        row = 0;
        col++;
        if (row === 0) {
          whenColIncreaseByMaxRows = col;
        }
      }
    } else if (currentLetter === previousLetter) {
      row++;

      let prevCol = col - 1;
      const prev = dua[row + "|" + prevCol];
      console.log("prev", prev);
      //handles branching where I skip a grid col
      if (prev === currentLetter && type !== "D/T") {
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
    // console.log("row", row, "col", col, "currentLetter", currentLetter);
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
    // console.log("indexof", img["indexOfA"])
    newItem = [row, col, img["indexOfA"].includes(i) ? "A" : currentLetter];

    // if(img["indexOfA"].includes(i)){
    //   countConsecutiveAs++; // count consecutive As
    //   if(countConsecutiveAs >= 2){
    //     row++;
    //     col--
    //     newItem = [row, col, img["indexOfA"].includes(i) ? "A" : currentLetter];
    //
    //   }else{
    //    newItem = [row, col, img["indexOfA"].includes(i) ? "A" : currentLetter];
    // }
    // generateDerivedRoadColors(tree, whenColIncreaseByMaxRows, { bigEyeBoyArr, smallRoadArr, cockcroachArr, bigEyeRoadObj });
    // console.log(newItem);
    tree.push(newItem);

    // derivedRoad(tree, whenColIncreaseByMaxRows, { bigEyeBoyArr, smallRoadArr, cockcroachArr, bigEyeRoadObj });
  });
  // console.log(bigEyeBoyArr)
  const bigBoy = buildDerivedRoadTree(bigEyeBoyArr);
  const smallRoad = buildDerivedRoadTree(smallRoadArr);
  const cockcroach = buildDerivedRoadTree(cockcroachArr);
  return {
    tree,
    percentage,
    colHeight: whenColIncreaseByMaxRows,
    bigBoy,
    smallRoad,
    cockcroach,
  };
}

function buildDragonTigerTreer(drawNumbers, whatToAnalyze, type) {
  const tree = [];
  const analyzedResults = analyzeDraw(drawNumbers, whatToAnalyze)[type];

  let row = 0;
  let col = 0;
  let whenColIncreaseByMaxRows = 0;
  let dua = {};

  analyzedResults.forEach((_, i) => {
    let previousLetter = analyzedResults[i - 1];
    let currentLetter = analyzedResults[i];
    let nextLetter = analyzedResults[i + 1];
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
  console.log(tree);
  return tree;
}

function getLetter(object) {
  Object.keys(object).forEach((key) => {
    console.log(key, object[key]);
  });
}

function findFirstNonAs(arr) {
  let char = "";
  for (let i = 0; i < arr.length; i++) {
    char = arr[i];
    if (char !== "A") {
      return char;
    }
  }
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
  return arr.splice(0, numberOfAsToRemove);
}

// function convertAsToSucceedingLetter(arr) {
//   const aSuccessor = findFirstNonA(arr);
//   const preceedingAs = getPrecedingAs(arr).length;
//   for (let i = 0; i < preceedingAs.length; i++) {
//     arr[i] = aSuccessor;
//   }
//   return { arr, preceedingAs };
// }

// Utils

function isNonAChar(char) {
  return char !== "A";
}

function findFirstNonA(arr) {
  return arr.find(isNonAChar);
}

// Core logic

function convertAsToSuccessor(arr, successor) {
  const asIndexes = [];

  const output = arr.map((char, i) => {
    if (char === "A") {
      asIndexes.push(i);
      return successor;
    }
    return char;
  });

  return { output, asIndexes };
}

function countConsecutiveAs(arr) {
  const counts = {};

  let consecutiveCount = 0;
  let prevChar;

  for (let char of arr) {
    if (char === "A") {
      consecutiveCount++;
    } else {
      if (consecutiveCount > 0 && prevChar) {
        counts[`${prevChar}${consecutiveCount}`] = consecutiveCount;
      }
      consecutiveCount = 0;
      prevChar = char;
    }
  }

  return counts;
}

// Public function

 function transpose(arr) {
  validateArray(arr);

  const successor = findFirstNonA(arr);

  const { output, asIndexes } = convertAsToSuccessor(arr, successor);

  const consecutiveCounts = countConsecutiveAs(output);

  return {
    transposed: output,
    asIndexes,
    consecutiveCounts,
  };
}
function validateArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  if (arr.length === 0) {
    throw new Error("Array cannot be empty");
  }

  // Additional checks like data types, etc
}

// // Tests

// import { transpose } from './transpose';

// test('transforms as expected', () => {
//   // ...test cases
// });

function convertAsToSucceedingLetter(arr) {
  const aSuccessor = findFirstNonA(arr);
  const preceedingAs = getPrecedingAs(arr);
  let count = 0;
  const indexesOfA = [];
  for (let i = 0; i < preceedingAs.length; i++) {
    arr[i] = aSuccessor;
    indexesOfA.push(i);
    count++;
  }
  return { arr, count, indexesOfA };
}

// function transpose(arr) {
//   let newArr = [];
//   let indexOfA = [];
//   let countOfA = 0;
//   const consecutiveAs = {};
//   // const consecutiveAs = new Map();
//   let previousLetter;

//   // removePrecedingAs(arr, precedingAs.length);

//   const aSuccessor = findFirstNonA(arr);
//   const precedingAs = getPrecedingAs(arr).length;
//   if (precedingAs > 0) {
//     indexOfA = [...indexOfA,...convertAsToSucceedingLetter(arr).indexesOfA]
//     console.log("------------------>",indexOfA)
//   }

//   for (let i = 0; i < arr.length; i++) {
//     let nextLetter = arr[i + 1];
//     if (nextLetter === "A" && arr[i] !== "A") {
//       previousLetter = arr[i];
//     }
//     // console.log("i", previousLetter, arr[i], previousLetter === undefined);
//     if (arr[i] === "A" && previousLetter === undefined) {
//       indexOfA.push(i);
//       countOfA++;
//       let nonAIndex = findNextNonALetterIndex(arr, i);
//       // consecutiveAs.set(nextLetter, countOfA);
//       consecutiveAs[`${nextLetter}${nonAIndex}`] = countOfA;

//       newArr.push(nextLetter);
//       countOfA = 0;
//     } else if (arr[i] === "A") {
//       countOfA++;
//       let nonAIndex = findNextNonALetterIndex(arr, i);
//       // consecutiveAs.set(`${previousLetter}${i}`, countOfA);
//       consecutiveAs[`${previousLetter}${nonAIndex}`] = countOfA;
//       indexOfA.push(i);
//       newArr.push(previousLetter);
//       // countOfA = 0;
//     } else {
//       countOfA = 0;
//       newArr.push(arr[i]);
//     }
//   }

//   console.log("i ", newArr);
//   console.log("i ", countOfA);
//   console.log("i ", consecutiveAs);
//   console.log("i ", indexOfA);

//   return { newArr, indexOfA, countOfA, consecutiveAs };
// }

function findNextNonALetterIndex(arr, currentIndexOfA) {
  for (let i = currentIndexOfA + 1; i < arr.length; i++) {
    if (arr[i] !== "A") {
      return i;
    }
  }
  // Return -1 if no non-'A' letter is found after the current index
  return -1;
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

function buildTree(drawNumbers, whatToAnalyze, type) {
  const tree = [];
  console.log(type);
  const analyzedResults = analyzeDraw(drawNumbers, whatToAnalyze)[type];
  // console.log(analyzedResults);
  let percentage = countOccurrences(analyzedResults, type);

  let bigEyeBoyArr = [];
  let smallRoadArr = [];
  let cockcroachArr = [];
  let bigEyeRoadObj = {};
  let countConsecutiveAs = 0;
  // const analyzedResults1 = analyzeDraw(drawNumbers, whatToAnalyze).oddEven;
  // const analyzedResults2 = analyzeDraw(drawNumbers, whatToAnalyze).primeComposite;

  // console.log(percentage);
  let row = 0;
  let col = 0;
  let whenColIncreaseByMaxRows = 0;
  let dua = {};
  const img = transpose(analyzedResults);
  console.log("img", analyzedResults);
  console.log("img", img["transposed"]);
  img["transposed"].forEach((value, i) => {
    let previousLetter = img["transposed"][i - 1];
    let currentLetter = img["transposed"][i];
    let nextLetter = img["transposed"][i + 1];
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
    // console.log("row", row, "col", col, "currentLetter", currentLetter);
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
    console.log("indexof", img["indexOfA"]);
    newItem = [row, col, img["indexOfA"].includes(i) ? "A" : currentLetter];

    // if(img["indexOfA"].includes(i)){
    //   countConsecutiveAs++; // count consecutive As
    //   if(countConsecutiveAs >= 2){
    //     row++;
    //     col--
    //     newItem = [row, col, img["indexOfA"].includes(i) ? "A" : currentLetter];
    //
    //   }else{
    //    newItem = [row, col, img["indexOfA"].includes(i) ? "A" : currentLetter];
    // }
    // generateDerivedRoadColors(tree, whenColIncreaseByMaxRows, { bigEyeBoyArr, smallRoadArr, cockcroachArr, bigEyeRoadObj });
    console.log(newItem);
    tree.push(newItem);

    // derivedRoad(tree, whenColIncreaseByMaxRows, { bigEyeBoyArr, smallRoadArr, cockcroachArr, bigEyeRoadObj });
  });
  // console.log(bigEyeBoyArr)
  const bigBoy = buildDerivedRoadTree(bigEyeBoyArr);
  const smallRoad = buildDerivedRoadTree(smallRoadArr);
  const cockcroach = buildDerivedRoadTree(cockcroachArr);
  return {
    tree,
    percentage,
    colHeight: whenColIncreaseByMaxRows,
    bigBoy,
    smallRoad,
    cockcroach,
  };
}

// function transpose3(arr) {
//   let newArr = [];
//   let indexOfA = [];
//   let countOfA = 0;
//   const consecutiveAs = {};

//   for (let i = 0; i < arr.length; i++) {
//     let currentLetter = arr[i];
//     let nextLetter = arr[i + 1];

//     if (currentLetter === "A" && nextLetter !== "A") {
//       // Start of consecutive 'A' letters
//       indexOfA.push(i);
//       countOfA = 1;
//     } else if (currentLetter === "A" && nextLetter === "A") {
//       // Consecutive 'A' letters
//       countOfA++;
//     } else if (currentLetter !== "A" && nextLetter === "A") {
//       // End of consecutive 'A' letters
//       countOfA++;
//       let nonAIndex = findNextNonALetterIndex(arr, i);
//       consecutiveAs[`${currentLetter}${nonAIndex}`] = countOfA;
//       newArr.push(currentLetter);
//     } else {
//       // Non-'A' letter
//       newArr.push(currentLetter);
//     }
//   }

//   return { newArr, indexOfA, countOfA, consecutiveAs };
// }
// function findNonALetterIndex(arr) {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "A") {
//       const nonAIndex = arr.indexOf("A", i + 1);
//       const nonALetterIndex = nonAIndex !== -1 ? nonAIndex : arr.length;
//       result.push(nonALetterIndex);
//     }
//   }

//   return result;
// }

// function convertAtoDorT(arr) {
//   let newArr = [];
//   let indexOfA = [];

//   // Handle if A is first element
//   if (arr[0] === "A") {
//     let nextNonAIndex = arr.findIndex((letter) => letter !== "A");
//     for (let i = 0; i < nextNonAIndex; i++) {
//       newArr.push(arr[nextNonAIndex]);
//     }
//   }

//   let previousLetter;
//   for (let i = 0; i < arr.length; i++) {
//     let nextLetter = arr[i + 1];

//     if (nextLetter === "A" && arr[i] !== "A") {
//       previousLetter = arr[i];
//     }

//     if (arr[i] === "A") {
//       indexOfA.push(i);
//       newArr.push(previousLetter);
//     } else {
//       newArr.push(arr[i]);
//     }
//   }

//   return { newArr, indexOfA };
// }
// const precedingAs = getPrecedingAs(road); // Get the preceding "A"s in the road.

// // Handle cases where "A"s precede the road.
// /* this if statement is to check if A's started the drawNumbers */
// if (precedingAs.length) {
//   for (let i = 0; i < precedingAs.length; i++) {
//     const currentLetter = precedingAs[i];
//     const nextLetter = road[i + 1];
//     if (precedingAs[0] == "A" && i == 0) {
//       row = 0;
//       col = 0;
//     } else {
//       row++;
//     }

//     if (nextLetter != "A") {
//       columnLeader = nextLetter;
//     }

//     if (row > maxNumberOfRows) {
//       row = maxNumberOfRows;
//       col++;
//     }
//     if (currentLetter === "A") {
//       consecutiveAs++;
//     } else {
//       consecutiveAs = 0;
//     }
//     let newItem = [row, col, currentLetter];
//     tree.push(newItem);
//   }

//   if (precedingAs.length === 1) {
//     row = 1;
//   }
//   removePrecedingAs(road, precedingAs.length);
// }
