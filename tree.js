import { buildTreesss, drawNumbers } from "./dragon.js";

const a = [
  [0, 0, "S"],
  [0, 1, "B"],
  [1, 1, "B"],
  [2, 1, "B"],
  [3, 1, "B"],
  [4, 1, "B"],
  [0, 2, "S"],
  [0, 3, "B"],
  [1, 3, "B"],
  [2, 3, "B"],
  [0, 4, "S"],
  [0, 5, "B"],
  [0, 6, "S"],
  [0, 7, "B"],
  [1, 7, "B"],
  [2, 7, "B"],
  [3, 7, "B"],
  [4, 7, "B"],
  [5, 7, "B"],
  [0, 8, "S"],
  [1, 8, "S"],
  [0, 9, "B"],
  [0, 10, "S"],
  [0, 11, "B"],
  [0, 12, "S"],
  [1, 12, "S"],
  [2, 12, "S"],
  [0, 13, "B"],
  [1, 13, "B"],
  [0, 14, "S"],
  [1, 14, "S"],
  [2, 14, "S"],
  [3, 14, "S"],
  [4, 14, "S"],
  [0, 15, "B"],
  [1, 15, "B"],
  [2, 15, "B"],
  [0, 16, "S"],
  [1, 16, "S"],
  [2, 16, "S"],
  [3, 16, "S"],
  [0, 17, "B"],
  [0, 18, "S"],
  [0, 19, "B"],
  [1, 19, "B"],
  [0, 20, "S"],
  [1, 20, "S"],
  [2, 20, "S"],
  [0, 21, "B"],
  [0, 22, "S"],
  [0, 23, "B"],
  [0, 24, "S"],
  [1, 24, "S"],
  [0, 25, "B"],
  [1, 25, "B"],
  [2, 25, "B"],
  [3, 25, "B"],
  [0, 26, "S"],
  [1, 26, "S"],
  [0, 27, "B"],
  [0, 28, "S"],
  [1, 28, "S"],
  [0, 29, "B"],
  [1, 29, "B"],
  [2, 29, "B"],
  [3, 29, "B"],
  [4, 29, "B"],
  [0, 30, "S"],
  [0, 31, "B"],
  [1, 31, "B"],
  [2, 31, "B"],
  [0, 32, "S"],
  [1, 32, "S"],
  [2, 32, "S"],
  [0, 33, "B"],
  [0, 34, "S"],
  [1, 34, "S"],
  [2, 34, "S"],
  [3, 34, "S"],
  [0, 35, "B"],
  [1, 35, "B"],
  [0, 36, "S"],
  [1, 36, "S"],
  [0, 37, "B"],
  [1, 37, "B"],
  [2, 37, "B"],
  [3, 37, "B"],
  [4, 37, "B"],
  [5, 37, "B"],
  [0, 38, "S"],
  [1, 38, "S"],
  [0, 39, "B"],
  [0, 40, "S"],
  [1, 40, "S"],
  [2, 40, "S"],
  [3, 40, "S"],
  [4, 40, "S"],
  [5, 40, "S"],
  [5, 41, "S"],
  [5, 42, "S"],
];

const dragonTree = [
  [0, 0, "B"],
  [0, 1, "S"],
  [1, 1, "S"],
  [0, 2, "B"],
  [1, 2, "B"],
  [2, 2, "B"],
  [3, 2, "B"],
  [0, 3, "S"],
  [1, 3, "S"],
  [0, 4, "B"],
  [0, 5, "S"],
  [1, 5, "S"],
  [0, 6, "B"],
  [1, 6, "B"],
  [2, 6, "B"],
  [3, 6, "B"],
  [4, 6, "B"],
  [0, 7, "S"],
  [0, 8, "B"],
  [1, 8, "B"],
  [2, 8, "B"],
  [0, 9, "S"],
  [1, 9, "S"],
  [2, 9, "S"],
  [0, 10, "B"],
  [0, 11, "S"],
  [1, 11, "S"],
  [2, 11, "S"],
  [3, 11, "S"],
  [0, 12, "B"],
  [1, 12, "B"],
  [0, 13, "S"],
  [1, 13, "S"],
  [0, 14, "B"],
  [1, 14, "B"],
  [2, 14, "B"],
  [3, 14, "B"],
  [4, 14, "B"],
  [5, 14, "B"],
  [0, 15, "S"],
  [1, 15, "S"],
  [0, 16, "B"],
  [0, 17, "S"],
  [1, 17, "S"],
  [2, 17, "S"],
  [3, 17, "S"],
  [4, 17, "S"],
  [5, 17, "S"],
  [5, 18, "S"],
  [5, 19, "S"],
  // [0, 20, "B"],
  // [1, 20, "B"],
];

const singleHopTree = [
  [0, 0, "B"],
  [0, 1, "S"],
  [1, 1, "S"],
  [0, 2, "B"],
  [1, 2, "B"],
  [2, 2, "B"],
  [3, 2, "B"],
  [0, 3, "S"],
  [1, 3, "S"],
  [0, 4, "B"],
  [0, 5, "S"],
  [1, 5, "S"],
  [0, 6, "B"],
  [1, 6, "B"],
  [2, 6, "B"],
  [3, 6, "B"],
  [4, 6, "B"],
  [0, 7, "S"],
  [0, 8, "B"],
  [1, 8, "B"],
  [2, 8, "B"],
  [0, 9, "S"],
  [1, 9, "S"],
  [2, 9, "S"],
  [0, 10, "B"],
  [0, 11, "S"],
  [1, 11, "S"],
  [2, 11, "S"],
  [3, 11, "S"],
  [0, 12, "B"],
  [1, 12, "B"],
  [0, 13, "S"],
  [1, 13, "S"],
  [0, 14, "B"],
  [1, 14, "B"],
  [2, 14, "B"],
  [3, 14, "B"],
  [4, 14, "B"],
  [5, 14, "B"],
  [0, 15, "S"],
  [1, 15, "S"],
  [0, 16, "B"],
  [0, 17, "S"],
  [0, 18, "B"],
  [0, 19, "S"],
  [0, 20, "B"],
  [0, 21, "S"],
  [0, 22, "B"],
  [0, 23, "S"],
];
const twoByTwoTree = [
  [0, 0, "B"],
  [0, 1, "S"],
  [1, 1, "S"],
  [0, 2, "B"],
  [1, 2, "B"],
  [2, 2, "B"],
  [3, 2, "B"],
  [0, 3, "S"],
  [1, 3, "S"],
  [0, 4, "B"],
  [0, 5, "S"],
  [1, 5, "S"],
  [0, 6, "B"],
  [1, 6, "B"],
  [2, 6, "B"],
  [3, 6, "B"],
  [4, 6, "B"],
  [0, 7, "S"],
  [0, 8, "B"],
  [1, 8, "B"],
  [2, 8, "B"],
  [0, 9, "S"],
  [1, 9, "S"],
  [2, 9, "S"],
  [0, 10, "B"],
  [0, 11, "S"],
  [1, 11, "S"],
  [2, 11, "S"],
  [3, 11, "S"],
  [0, 12, "B"],
  [1, 12, "B"],
  [0, 13, "S"],
  [1, 13, "S"],
  [0, 14, "B"],
  [1, 14, "B"],
  [2, 14, "B"],
  [3, 14, "B"],
  [4, 14, "B"],
  [5, 14, "B"],
  [0, 15, "S"],
  [1, 15, "S"],
  [0, 16, "B"],
  [0, 17, "S"],
  [0, 18, "B"],
  [1, 18, "B"],
  [0, 19, "S"],
  [1, 19, "S"],
  [0, 20, "B"],
  [1, 20, "B"],
  [0, 21, "S"],
  [1, 21, "S"],
  [0, 22, "B"],
  [1, 22, "B"],
  [0, 23, "S"],
  [1, 23, "S"],
];

const twoByOneTreeT1 = [
  [0, 0, "B"],
  [0, 1, "S"],
  [1, 1, "S"],
  [0, 2, "B"],
  [1, 2, "B"],
  [2, 2, "B"],
  [3, 2, "B"],
  [0, 3, "S"],
  [1, 3, "S"],
  [0, 4, "B"],
  [0, 5, "S"],
  [1, 5, "S"],
  [0, 6, "B"],
  [1, 6, "B"],
  [2, 6, "B"],
  [3, 6, "B"],
  [4, 6, "B"],
  [0, 7, "S"],
  [0, 8, "B"],
  [1, 8, "B"],
  [2, 8, "B"],
  [0, 9, "S"],
  [1, 9, "S"],
  [2, 9, "S"],
  [0, 10, "B"],
  [0, 11, "S"],
  [1, 11, "S"],
  [2, 11, "S"],
  [3, 11, "S"],
  [0, 12, "B"],
  [1, 12, "B"],
  [0, 13, "S"],
  [1, 13, "S"],
  [0, 14, "B"],
  [1, 14, "B"],
  [2, 14, "B"],
  [3, 14, "B"],
  [4, 14, "B"],
  [5, 14, "B"],
  [0, 15, "S"],
  [1, 15, "S"],
  [0, 16, "B"],
  [0, 17, "S"],
  [0, 18, "B"],
  [1, 18, "B"],
  [0, 19, "S"],
  [1, 19, "S"],
  [0, 20, "B"],
  [0, 21, "S"],
  [1, 21, "S"],
  [0, 22, "B"],
  [0, 23, "S"],
  [1, 23, "S"],
];

const twoByOneTreeT2 = [
  [0, 0, "B"],
  [0, 1, "S"],
  [1, 1, "S"],
  [0, 2, "B"],
  [1, 2, "B"],
  [2, 2, "B"],
  [3, 2, "B"],
  [0, 3, "S"],
  [1, 3, "S"],
  [0, 4, "B"],
  [0, 5, "S"],
  [1, 5, "S"],
  [0, 6, "B"],
  [1, 6, "B"],
  [2, 6, "B"],
  [3, 6, "B"],
  [4, 6, "B"],
  [0, 7, "S"],
  [0, 8, "B"],
  [1, 8, "B"],
  [2, 8, "B"],
  [0, 9, "S"],
  [1, 9, "S"],
  [2, 9, "S"],
  [0, 10, "B"],
  [0, 11, "S"],
  [1, 11, "S"],
  [2, 11, "S"],
  [3, 11, "S"],
  [0, 12, "B"],
  [1, 12, "B"],
  [0, 13, "S"],
  [1, 13, "S"],
  [0, 14, "B"],
  [1, 14, "B"],
  [2, 14, "B"],
  [3, 14, "B"],
  [4, 14, "B"],
  [5, 14, "B"],
  [0, 15, "S"],
  [1, 15, "S"],
  [0, 16, "B"],
  [0, 17, "S"],
  [0, 18, "B"],
  [1, 18, "B"],
  [0, 19, "S"],
  [1, 19, "S"],
  [0, 20, "B"],
  [1, 20, "B"],
  [0, 21, "S"],
  [0, 22, "B"],
  [1, 22, "B"],
  [0, 23, "S"],
];

const consecutiveTree = [
  [0, 0, "B"],
  [1, 0, "B"],
  [0, 1, "S"],
  [1, 1, "S"],
  [0, 2, "B"],
  [1, 2, "B"],
  [2, 2, "B"],
  [3, 2, "B"],
  [0, 3, "S"],
  [1, 3, "S"],
  [0, 4, "B"],
  [1, 4, "B"],
  [2, 4, "B"],
  [0, 5, "S"],
  [1, 5, "S"],
  [0, 6, "B"],
  [1, 6, "B"],
  [2, 6, "B"],
  [3, 6, "B"],
  [4, 6, "B"],
  [0, 7, "S"],
  [1, 7, "S"],
  [0, 8, "B"],
  [1, 8, "B"],
  [2, 8, "B"],
  [0, 9, "S"],
  [1, 9, "S"],
  [2, 9, "S"],
  [0, 10, "B"],
  [1, 10, "B"],
  [0, 11, "S"],
  [1, 11, "S"],
  [2, 11, "S"],
  [3, 11, "S"],
  [0, 12, "B"],
  [1, 12, "B"],
  [0, 13, "S"],
  [1, 13, "S"],
  [0, 14, "B"],
  [1, 14, "B"],
  [2, 14, "B"],
  [3, 14, "B"],
  [4, 14, "B"],
  [5, 14, "B"],
  [5, 15, "B"],
  [5, 16, "B"],
  [0, 15, "S"],
  [1, 15, "S"],
  [0, 16, "B"],
  [1, 16, "B"],
  [0, 17, "S"],
  [1, 17, "S"],
  [0, 18, "B"],
  [1, 18, "B"],
  [0, 19, "S"],
  [1, 19, "S"],
  [0, 20, "B"],
  [1, 20, "B"],
  [0, 21, "S"],
  [1, 21, "S"],
  [0, 22, "B"],
  [1, 22, "B"],
  [0, 23, "S"],
  // [1, 23, "S"],
];

const jumpTree = [
  [0, 0, "B"],
  [1, 0, "B"],
  [0, 1, "S"],
  // [1, 1, "S"],
  [0, 2, "B"],
  [1, 2, "B"],
  [2, 2, "B"],
  [3, 2, "B"],
  [0, 3, "S"],
  // [1, 3, "S"],
  [0, 4, "B"],
  [1, 4, "B"],
  [2, 4, "B"],
  [0, 5, "S"],
  // [1, 5, "S"],
  [0, 6, "B"],
  [1, 6, "B"],
  [2, 6, "B"],
  [3, 6, "B"],
  [4, 6, "B"],
  [0, 7, "S"],
  [0, 8, "B"],
  [1, 8, "B"],
  [2, 8, "B"],
  [0, 9, "S"],
  // [1, 9, "S"],
  // [2, 9, "S"],
  [0, 10, "B"],
  [1, 10, "B"],
  [0, 11, "S"],
  // [1, 11, "S"],
  // [2, 11, "S"],
  // [3, 11, "S"],
  [0, 12, "B"],
  [1, 12, "B"],
  [0, 13, "S"],
  // [1, 13, "S"],
  [0, 14, "B"],
  [1, 14, "B"],
  [2, 14, "B"],
  [3, 14, "B"],
  [4, 14, "B"],
  [5, 14, "B"],
  [5, 15, "B"],
  [5, 16, "B"],
  [0, 15, "S"],
  // [1, 15, "S"],
  [0, 16, "B"],
  [1, 16, "B"],
  [0, 17, "S"],
  [0, 18, "B"],
  [1, 18, "B"],
  [0, 19, "S"],
  // [1, 19, "S"],
  [0, 20, "B"],
  [1, 20, "B"],
  [0, 21, "S"],
  [0, 22, "B"],
  [1, 22, "B"],
  [0, 23, "S"],
];

const simply3Tree = [
  [0, 0, "B"],
  [1, 0, "B"],
  [0, 1, "S"],
  // [1, 1, "S"],
  [0, 2, "B"],
  [1, 2, "B"],
  [2, 2, "B"],
  // [3, 2, "B"],
  [0, 3, "S"],
  // [1, 3, "S"],
  [0, 4, "B"],
  [1, 4, "B"],
  [2, 4, "B"],
  [0, 5, "S"],
  // [1, 5, "S"],
  [0, 6, "B"],
  [1, 6, "B"],
  [2, 6, "B"],
  // [3, 6, "B"],
  // [4, 6, "B"],
  [0, 7, "S"],
  [0, 8, "B"],
  [1, 8, "B"],
  [2, 8, "B"],
  [0, 9, "S"],
  // [1, 9, "S"],
  // [2, 9, "S"],
  [0, 10, "B"],
  [1, 10, "B"],
  [0, 11, "S"],
  // [1, 11, "S"],
  // [2, 11, "S"],
  // [3, 11, "S"],
  [0, 12, "B"],
  [1, 12, "B"],
  [0, 13, "S"],
  // [1, 13, "S"],
  [0, 14, "B"],
  [1, 14, "B"],
  [2, 14, "B"],
  // [3, 14, "B"],
  // [4, 14, "B"],
  // [5, 14, "B"],
  // [5, 15, "B"],
  // [5, 16, "B"],
  [0, 15, "S"],
  // [1, 15, "S"],
  [0, 16, "B"],
  [1, 16, "B"],
  [0, 17, "S"],
  [0, 18, "B"],
  [1, 18, "B"],
  [0, 19, "S"],
  // [1, 19, "S"],
  [0, 20, "B"],
  [1, 20, "B"],
  [0, 21, "S"],
  [0, 22, "B"],
  [1, 22, "B"],
  [0, 23, "S"],
];

const rowConsecutiveTree = [
  [0, 0, "B"],
  [1, 0, "B"],
  [0, 1, "S"],
  [0, 2, "B"],
  [1, 2, "B"],
  [2, 2, "B"],
  [0, 3, "S"],
  [0, 4, "B"],
  [1, 4, "B"],
  [2, 4, "B"],
  [0, 5, "S"],
  [0, 6, "B"],
  [1, 6, "B"],
  [2, 6, "B"],
  [0, 7, "S"],
  [0, 8, "B"],
  [1, 8, "B"],
  [2, 8, "B"],
  [0, 9, "S"],
  [0, 10, "B"],
  [1, 10, "B"],
  [0, 11, "S"],
  [0, 12, "B"],
  [1, 12, "B"],
  [0, 13, "S"],
  [0, 14, "B"],
  [1, 14, "B"],
  [2, 14, "B"],
  [0, 15, "S"],
  [0, 16, "B"],
  [1, 16, "B"],
  [0, 17, "S"],
  [0, 18, "B"],
  [1, 18, "B"],
  [0, 19, "S"],
  [0, 20, "B"],
  [1, 20, "B"],
  [0, 21, "S"],
  [1, 21, "S"],
  [0, 22, "B"],
  [1, 22, "B"],
  [0, 23, "S"],
  [1, 23, "S"],
];

function checkForPossibleTrend(tree) {
  // switch
  tree.map((treeNode, index) => {});
}

// function checkForPossibleDragon(tree) {
//   const g = tree.map((treeNode, index) => {
//     return treeNode[1];
//   });
//   return tree[g.indexOf(Math.max(...g))][0] >= 4 && "Dragon";
// }

function checkForPossibleDragon(tree) {
  const midPoint = Math.floor(tree.length / 2);
  let maxLevel = -1;
  let maxIndex = -1;

  for (let i = midPoint; i < tree.length; i++) {
    const [index, level] = tree[i];
    if (level > maxLevel) {
      maxLevel = level;
      maxIndex = index;
    } else if (level === maxLevel && index > maxIndex) {
      maxIndex = index;
    }
  }

  return maxIndex >= 4 ? "Dragon" : "";
}

function checkForPossibleSingleHop(tree) {
  const lastFive = tree.slice(-5);
  return lastFive.every((treeNodes) => treeNodes[0] === 0) ? "Single-Hop" : "";
}

function checkForPossibleTwoByTwo(tree) {
  const lastSix = tree.slice(-6);
  const firstTreeNodes = lastSix.map((node) => node[0]);
  return JSON.stringify(firstTreeNodes) === "[0,1,0,1,0,1]" ? "Two By Two" : "";
}

function checkForPossibleTwoByOne(tree) {
  const lastSix = tree.slice(-6);
  const firstTreeNodes = lastSix.map((node) => node[0]);
  return JSON.stringify(firstTreeNodes) === "[0,1,0,0,1,0]" ||
    JSON.stringify(firstTreeNodes) === "[0,0,1,0,0,1]"
    ? "Two By One"
    : "";
}

// function checkForPossibleTwoByTwo(tree) {
//   // Get the last 6 items from the tree
//   const lastSix = tree.slice(-6);

//   // Extract the first elements of each of these last 6 items
//   const firstTreeNodes = lastSix.map(node => node[0]);

//   // Check if the first elements match the pattern [0, 1, 0, 1, 0, 1]
//   const expectedPattern = [0, 1, 0, 1, 0, 1];
//   const isMatch = firstTreeNodes.every((value, index) => value === expectedPattern[index]);

//   return isMatch ? "Two By Two" : "";
// }
function findRepeatedTrees(trees) {
  // Dictionary to store the counts of each letter per column
  const columnCounts = {};

  // Fill the dictionary with the counts
  trees.forEach(([row, col, letter]) => {
    if (!columnCounts[col]) {
      columnCounts[col] = {};
    }
    if (!columnCounts[col][letter]) {
      columnCounts[col][letter] = 0;
    }
    columnCounts[col][letter] += 1;
  });

  // Identify columns where any letter occurs more than once
  const repeatedTrees = {};
  for (const col in columnCounts) {
    for (const letter in columnCounts[col]) {
      if (columnCounts[col][letter] > 1) {
        if (!repeatedTrees[col]) {
          repeatedTrees[col] = [];
        }
        repeatedTrees[col].push([letter, columnCounts[col][letter]]);
      }
    }
  }

  return repeatedTrees;
}
function countFormsInColumns(trees, letters) {
  const columnCounts1 = {};
  const columnCounts2 = {};
  let previousRowB = 0;
  let previousRowS = 0;
  // console.log(row, letter);
  for (const [row, column, letter] of trees) {
    if (letters[0] === letter) {
      if (previousRowB !== row || previousRowB === 0) {
        columnCounts1[column] = columnCounts1[column] || {};
        columnCounts1[column][letters[0]] =
          (columnCounts1[column][letter] || 0) + 1;
        previousRowB = row;
      }
    }

    if (letters[1] === letter) {
      if (previousRowS !== row || previousRowS === 0) {
        columnCounts2[column] = columnCounts2[column] || {};
        columnCounts2[column][letters[1]] =
          (columnCounts2[column][letter] || 0) + 1;
        previousRowS = row;
      }
    }
  }
  return [columnCounts1, columnCounts2];
}
function findConsecutiveColumns(trees, letters) {
  const columnCounts = {};

  // Count occurrences of each letter for each column
  for (const [row, col, letter] of trees) {
    if (letters.includes(letter)) {
      columnCounts[col] = columnCounts[col] || {};
      columnCounts[col][letter] = (columnCounts[col][letter] || 0) + 1;
    }
  }
  //   console.log(columnCounts);
  // console.log(
  //   Object.values(columnCounts).forEach((count) => console.log(count))
  // );
  // Find columns where any of the letters occur more than once
  for (const [col, counts] of Object.entries(columnCounts)) {
    for (const letter of letters) {
      if (counts[letter] <= 3) {
        return "CONSECUTIVE";
      }
    }
  }

  if (hasColumnWithNoFormGreaterThan3(columnCounts)) {
    return "Simply 3";
  } else {
    return "";
  }

  return "";
}

function checkForPossibleConsecutiveColumns(trees, letters) {
  const [columnCounts1, columnCounts2] = countFormsInColumns(trees, letters);

  if (!hasColumnWithValueOne(columnCounts1, letters[0])) {
    return "CONSEC";
  } else if (!hasColumnWithValueOne(columnCounts2, letters[1])) {
    return "CONSEC";
  } else {
    return "";
  }
}

function checkForPossibleJump(trees, letters) {
  const [columnCounts1, columnCounts2] = countFormsInColumns(trees, letters);

  if (hasColumnWithOnlyOneForm(columnCounts1, letters[0])) {
    return "Jump";
  } else if (hasColumnWithOnlyOneForm(columnCounts2, letters[1])) {
    return "Jump";
  } else {
    return "";
  }
}

function checkForPossibleSimply3(trees, letters) {
  const [columnCounts1, columnCounts2] = countFormsInColumns(trees, letters);

  if (
    hasColumnWithNoFormGreaterThan3(columnCounts1, letters[0]) &&
    hasColumnWithNoFormGreaterThan3(columnCounts2, letters[1])
  ) {
    return "Simply 3";
  } else {
    return "";
  }
}

function checkForPossibleRowConsecutive(trees, letters) {
  const [columnCounts1, columnCounts2] = countFormsInColumns(trees, letters);

  if (
    hasLast4ColumnsWithFormGreaterThan1(
      Object.values(columnCounts1).slice(-2),
      letters[0]
    ) &&
    hasLast4ColumnsWithFormGreaterThan1(
      Object.values(columnCounts2).slice(-2),
      letters[1]
    )
  ) {
    return "Row CONSEC";
  } else {
    return "";
  }
}

function hasColumnWithValueOne(columnCounts1, form) {
  if (typeof columnCounts1 !== "object" || columnCounts1 === null) {
    return false;
  }
  const columnValues = Object.values(columnCounts1);
  return columnValues.some(
    (item) => item.hasOwnProperty(form) && item[form] === 1
  );
}

function hasColumnWithOnlyOneForm(columnCounts1, form) {
  if (typeof columnCounts1 !== "object" || columnCounts1 === null) {
    return false;
  }
  const columnValues = Object.values(columnCounts1);
  return columnValues.every(
    (item) => item.hasOwnProperty(form) && item[form] === 1
  );
}

function hasColumnWithNoFormGreaterThan3(columnCounts1, form) {
  if (typeof columnCounts1 !== "object" || columnCounts1 === null) {
    return false;
  }
  const columnValues = Object.values(columnCounts1);
  return columnValues.every(
    (item) => item.hasOwnProperty(form) && item[form] <= 3
  );
}

function hasLast4ColumnsWithFormGreaterThan1(columnCounts1, form) {
  if (typeof columnCounts1 !== "object" || columnCounts1 === null) {
    return false;
  }

  const columnValues = Object.values(columnCounts1).slice(-2);

  return columnValues.every(
    (item) => item.hasOwnProperty(form) && item[form] > 1
  );
}

// console.log(checkForPossibleConsecutiveColumns(consecutiveTree, ["B", "S"]));
// console.log(checkForPossibleConsecutiveColumns(consecutiveTree, ["B", "S"]));
// console.log(checkForPossibleJump(jumpTree, ["B", "S"]));
// console.log(checkForPossibleSimply3(simply3Tree, ["B", "S"]));
// console.log(checkForPossibleRowConsecutive(rowConsecutiveTree, ["B", "S"]));
// console.log(checkForPossibleDragon(dragonTree));
// console.log(checkForPossibleSingleHop(singleHopTree));
// console.log(checkForPossibleTwoByTwo(twoByTwoTree));
// console.log(checkForPossibleTwoByOne(twoByOneTreeT1));
// console.log(checkForPossibleTwoByOne(twoByOneTreeT2));
// console.log(findConsecutiveColumns(consecutiveTree));
// .==
// console.log("hus",a.slice(a.length / 2));
// console.log(checkForPossibleTwoByOne(twoByOneTreeT1));
// console.log(checkForPossibleTwoByOne(twoByOneTreeT2));
// function createTable(rows, cols) {
//   for (let i = 0; i < rows; i++) {
//     const row = table.insertRow();
//     for (let j = 0; j < cols; j++) {
//       const cell = row.insertCell();
//       cell.textContent = ""; // Initially empty
//       // cell.textContent = i + "" + j; // Initially empty
//     }
//   }
// }
// // console.log("----------> random", generateRandNumbers());
// function generateRandNumbers() {
//   const numbersArray = Array.from({ length: 100 }, () =>
//     Array.from({ length: 5 }, () => Math.floor(Math.random() * 10))
//   );
//   console.log("----------> random",numbersArray);
//   return numbersArray;
// }
// let drawNumbers5d = null;

// const table = document.getElementById("grid");
// const derivedTable = document.getElementById("deriveGrid");
// document.onload = createTable(6, 100);
// function plotTable(){
//   drawNumbers5d = generateRandNumbers();

//   const tree = buildTreesss(drawNumbers5d, "1st", "Big/Small")["tree"];
// tree.forEach((rowData, index) => {
//   const [rowIndex, colIndex, value] = rowData;
//   const row = table.rows[rowIndex];
//   if (row) {
//     const cell = row.cells[colIndex];
//     if (cell) {
//       // cell.textContent = index + " " + value; //+ " " + colIndex;
//       cell.textContent = rowIndex + " " + value + " " + colIndex;
//       // cell.textContent = value;
//     }
//     if (value === "S") {
//       cell.style.color = "blue";
//     } else if (value === "B") {
//       cell.style.color = "red";
//     } else if (value === "A") {
//       cell.style.color = "green";
//     }
//     cell.style.fontWeight = "bold";
//   }
// });
// }

// setInterval(plotTable, 10000)
function createTable(rows, cols) {
  for (let i = 0; i < rows; i++) {
    const row = table.insertRow();
    for (let j = 0; j < cols; j++) {
      const cell = row.insertCell();
      cell.textContent = ""; // Initially empty
    }
  }
}

function initializeRandNumbers() {
  return Array.from({ length: 100 }, () =>
    Array.from({ length: 5 }, () => Math.floor(Math.random() * 10))
  );
}

function updateRandNumbers(numbersArray) {
  numbersArray.shift(); // Remove the first element
  numbersArray.push(
    Array.from({ length: 5 }, () => Math.floor(Math.random() * 10))
  ); // Append a new array
  return numbersArray;
}

function clearTable() {
  for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      table.rows[i].cells[j].textContent = "";
      table.rows[i].cells[j].style.color = "";
      table.rows[i].cells[j].style.fontWeight = "";
    }
  }
}
const typ = [
  [
      6,
      8,
      8,
      4,
      8
  ],
  [
      7,
      8,
      7,
      8,
      3
  ],
  [
      6,
      9,
      0,
      4,
      1
  ],
  [
      5,
      0,
      7,
      5,
      0
  ],
  [
      4,
      4,
      4,
      5,
      1
  ],
  [
      3,
      1,
      0,
      1,
      2
  ],
  [
      4,
      0,
      5,
      0,
      5
  ],
  [
      9,
      2,
      9,
      9,
      1
  ],
  [
      3,
      9,
      8,
      9,
      1
  ],
  [
      9,
      0,
      9,
      5,
      3
  ],
  [
      2,
      7,
      2,
      3,
      6
  ],
  [
      9,
      6,
      5,
      2,
      1
  ],
  [
      2,
      9,
      8,
      4,
      2
  ],
  [
      0,
      5,
      8,
      3,
      2
  ],
  [
      8,
      9,
      9,
      8,
      4
  ],
  [
      8,
      8,
      4,
      6,
      0
  ],
  [
      0,
      3,
      1,
      1,
      4
  ],
  [
      0,
      6,
      8,
      7,
      8
  ],
  [
      8,
      7,
      8,
      6,
      9
  ],
  [
      8,
      5,
      7,
      9,
      5
  ],
  [
      9,
      4,
      3,
      7,
      2
  ],
  [
      2,
      1,
      0,
      7,
      9
  ],
  [
      2,
      9,
      0,
      1,
      3
  ],
  [
      1,
      4,
      5,
      9,
      2
  ],
  [
      3,
      8,
      3,
      9,
      1
  ],
  [
      6,
      4,
      2,
      4,
      1
  ],
  [
      0,
      1,
      1,
      1,
      8
  ],
  [
      9,
      2,
      2,
      8,
      7
  ],
  [
      8,
      2,
      0,
      5,
      0
  ],
  [
      3,
      6,
      6,
      9,
      1
  ],
  [
      5,
      9,
      2,
      1,
      8
  ],
  [
      2,
      6,
      1,
      6,
      5
  ],
  [
      1,
      0,
      8,
      6,
      8
  ],
  [
      2,
      2,
      9,
      5,
      8
  ],
  [
      8,
      1,
      3,
      6,
      2
  ],
  [
      2,
      0,
      7,
      6,
      0
  ],
  [
      6,
      1,
      6,
      6,
      2
  ],
  [
      0,
      6,
      5,
      1,
      7
  ],
  [
      3,
      5,
      0,
      8,
      3
  ],
  [
      4,
      0,
      3,
      1,
      0
  ],
  [
      4,
      5,
      1,
      8,
      2
  ],
  [
      8,
      2,
      4,
      3,
      2
  ],
  [
      5,
      7,
      0,
      0,
      2
  ],
  [
      7,
      4,
      2,
      5,
      1
  ],
  [
      5,
      2,
      9,
      9,
      5
  ],
  [
      6,
      6,
      8,
      4,
      1
  ],
  [
      8,
      4,
      9,
      4,
      2
  ],
  [
      5,
      4,
      4,
      0,
      9
  ],
  [
      0,
      0,
      9,
      6,
      2
  ],
  [
      7,
      9,
      0,
      2,
      3
  ],
  [
      4,
      2,
      5,
      9,
      2
  ],
  [
      0,
      1,
      7,
      3,
      1
  ],
  [
      1,
      1,
      3,
      5,
      0
  ],
  [
      8,
      8,
      6,
      4,
      5
  ],
  [
      1,
      0,
      2,
      8,
      7
  ],
  [
      8,
      1,
      5,
      5,
      3
  ],
  [
      5,
      9,
      7,
      8,
      8
  ],
  [
      1,
      3,
      3,
      8,
      5
  ],
  [
      4,
      8,
      6,
      6,
      2
  ],
  [
      2,
      7,
      2,
      4,
      6
  ],
  [
      8,
      7,
      0,
      7,
      4
  ],
  [
      3,
      5,
      3,
      0,
      3
  ],
  [
      5,
      1,
      0,
      2,
      5
  ],
  [
      0,
      5,
      8,
      1,
      5
  ],
  [
      2,
      3,
      6,
      8,
      4
  ],
  [
      8,
      7,
      1,
      8,
      6
  ],
  [
      3,
      7,
      1,
      5,
      5
  ],
  [
      8,
      0,
      2,
      7,
      1
  ],
  [
      6,
      8,
      9,
      2,
      3
  ],
  [
      3,
      6,
      3,
      9,
      1
  ],
  [
      6,
      9,
      8,
      5,
      3
  ],
  [
      9,
      7,
      7,
      3,
      8
  ],
  [
      1,
      0,
      5,
      8,
      4
  ],
  [
      4,
      3,
      9,
      5,
      8
  ],
  [
      2,
      3,
      9,
      9,
      7
  ],
  [
      8,
      3,
      3,
      0,
      0
  ],
  [
      9,
      8,
      3,
      9,
      4
  ],
  [
      8,
      2,
      8,
      0,
      3
  ],
  [
      9,
      4,
      0,
      2,
      3
  ],
  [
      4,
      2,
      3,
      1,
      8
  ],
  [
      6,
      5,
      3,
      9,
      0
  ],
  [
      8,
      9,
      7,
      7,
      3
  ],
  [
      4,
      9,
      9,
      3,
      0
  ],
  [
      0,
      8,
      9,
      4,
      0
  ],
  [
      3,
      1,
      5,
      8,
      8
  ],
  [
      8,
      1,
      6,
      4,
      7
  ],
  [
      3,
      2,
      9,
      1,
      6
  ],
  [
      5,
      9,
      9,
      7,
      9
  ],
  [
      2,
      1,
      2,
      5,
      0
  ],
  [
      9,
      6,
      7,
      3,
      1
  ],
  [
      2,
      3,
      6,
      5,
      6
  ],
  [
      2,
      7,
      5,
      2,
      0
  ],
  [
      9,
      5,
      9,
      8,
      9
  ],
  [
      6,
      8,
      9,
      0,
      8
  ],
  [
      3,
      1,
      8,
      0,
      0
  ],
  [
      3,
      7,
      9,
      9,
      6
  ],
  [
      7,
      4,
      1,
      7,
      0
  ],
  [
      8,
      6,
      2,
      7,
      1
  ],
  [
      3,
      9,
      9,
      6,
      6
  ],
  [
      4,
      4,
      1,
      1,
      4
  ]
]
let drawNumbers5d = initializeRandNumbers();

// console.log("----------> random",drawNumbers5d);
const table = document.getElementById("grid");
const derivedTable = document.getElementById("deriveGrid");

document.onload = createTable(6, 100);

function plotTable() {
  clearTable(); // Clear the table before updating

  drawNumbers5d = updateRandNumbers(drawNumbers5d);
  console.log("----------> random", drawNumbers5d);
  const tree = buildTreesss(drawNumbers5d, "1st", "Big/Small")["tree"];
  console.log(checkForPossibleConsecutiveColumns(tree, ["B", "S"]));
  console.log(checkForPossibleJump(tree, ["B", "S"]));
  console.log(checkForPossibleSimply3(tree, ["B", "S"]));
  console.log(checkForPossibleRowConsecutive(tree, ["B", "S"]));
  console.log(checkForPossibleDragon(tree, ["B", "S"]));
  console.log(checkForPossibleSingleHop(tree, ["B", "S"]));
  console.log(checkForPossibleTwoByTwo(tree, ["B", "S"]));
  console.log(checkForPossibleTwoByOne(tree, ["B", "S"]));
  console.log(checkForPossibleTwoByOne(tree, ["B", "S"]));
  tree.forEach((rowData, index) => {
    const [rowIndex, colIndex, value] = rowData;
    const row = table.rows[rowIndex];
    if (row) {
      const cell = row.cells[colIndex];
      if (cell) {
        cell.textContent = rowIndex + " " + value + " " + colIndex;
      }
      if (value === "S") {
        cell.style.color = "blue";
      } else if (value === "B") {
        cell.style.color = "red";
      } else if (value === "A") {
        cell.style.color = "green";
      }
      cell.style.fontWeight = "bold";
    }
  });
}

setInterval(plotTable, 10000);

// console.log(checkForPossibleConsecutiveColumns(tree, ["B", "S"]));
// console.log(checkForPossibleJump(tree, ["B", "S"]));
// console.log(checkForPossibleSimply3(tree, ["B", "S"]));
// console.log(checkForPossibleRowConsecutive(tree, ["B", "S"]));
// console.log(checkForPossibleDragon(tree, ["B", "S"]));
// console.log(checkForPossibleSingleHop(tree, ["B", "S"]));
// console.log(checkForPossibleTwoByTwo(tree, ["B", "S"]));
// console.log(checkForPossibleTwoByOne(tree, ["B", "S"]));
// console.log(checkForPossibleTwoByOne(tree, ["B", "S"]));
