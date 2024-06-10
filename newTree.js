import { buildTreesss, SND } from "./dragon.js";
function checkForPossibleDragon(tree, letters) {
  return checkLetterCount(tree.slice(-5), letters[0], 5) ||
    checkLetterCount(tree.slice(-5), letters[1], 5)
    ? "Dragon"
    : "";
}

function checkLetterCount(arr, targetLetter, targetCount) {
  let count = 0;
  for (let subArray of arr) {
    for (let item of subArray) {
      if (item === targetLetter) {
        count++;
        if (count === targetCount) {
          return true; // Return true if we reach the target count
        }
      } else if (typeof item === "string") {
        return false; // Return false if we encounter a different letter
      }
    }
  }
  return false; // Return false if we don't reach the target count
}

function checkForPossibleConsecutiveColumns(
  [columnCounts1, columnCounts2],
  letters
) {
  if (!hasColumnWithValueOne(columnCounts1, letters[0])) {
    return "CONSEC";
  } else if (!hasColumnWithValueOne(columnCounts2, letters[1])) {
    return "CONSEC";
  } else {
    return "";
  }
}

function checkForPossibleJump([columnCounts1, columnCounts2], letters) {
  if (hasColumnWithOnlyOneForm(columnCounts1, letters[0])) {
    return "Jump";
  } else if (hasColumnWithOnlyOneForm(columnCounts2, letters[1])) {
    return "Jump";
  } else {
    return "";
  }
}

function checkForPossibleSimply3([columnCounts1, columnCounts2], letters) {
  if (
    hasColumnWithNoFormGreaterThan3(columnCounts1, letters[0]) &&
    hasColumnWithNoFormGreaterThan3(columnCounts2, letters[1])
  ) {
    return "Simply 3";
  } else {
    return "";
  }
}

function checkForPossibleRowConsecutive(
  [columnCounts1, columnCounts2],
  letters
) {
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

function createTable(rows, cols) {
  for (let i = 0; i < rows; i++) {
    const row = table.insertRow();
    for (let j = 0; j < cols; j++) {
      const cell = row.insertCell();
      cell.textContent = ""; // Initially empty
    }
  }
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
  for (const element of table.rows) {
    for (let j = 0; j < element.cells.length; j++) {
      element.cells[j].textContent = "";
      element.cells[j].style.color = "";
      element.cells[j].style.fontWeight = "";
    }
  }
}

let drawNumbers5d = initializeRandNumbers();

// console.log("----------> random",drawNumbers5d);
const table = document.getElementById("grid");
const derivedTable = document.getElementById("deriveGrid");
let x = null;
document.onload = createTable(1, 100);
const qqq = [
  [0, 0, "S"],
  [1, 0, "S"],
  [2, 0, "S"],
  [0, 1, "B"],
  [0, 2, "S"],
  [0, 3, "B"],
  [1, 3, "B"],
  [0, 4, "S"],
  [0, 5, "B"],
  [0, 6, "S"],
  [0, 7, "B"],
  [1, 7, "B"],
  [0, 8, "S"],
  [1, 8, "S"],
  [0, 9, "B"],
  [1, 9, "B"],
  [2, 9, "B"],
  [0, 10, "S"],
  [1, 10, "S"],
  [2, 10, "S"],
  [3, 10, "S"],
  [0, 11, "B"],
  [1, 11, "B"],
  [0, 12, "S"],
  [1, 12, "S"],
  [0, 13, "B"],
  [0, 14, "S"],
  [0, 15, "B"],
  [1, 15, "B"],
  [2, 15, "B"],
  [0, 16, "S"],
  [0, 17, "B"],
  [0, 18, "S"],
  [1, 18, "S"],
  [2, 18, "S"],
  [0, 19, "B"],
  [1, 19, "B"],
  [2, 19, "B"],
  [0, 20, "S"],
  [0, 21, "B"],
  [0, 22, "S"],
  [1, 22, "S"],
  [2, 22, "S"],
  [0, 23, "B"],
  [0, 24, "S"],
  [0, 25, "B"],
  [0, 26, "S"],
  [0, 27, "B"],
  [0, 28, "S"],
  [0, 29, "B"],
  [1, 29, "B"],
  [2, 29, "B"],
  [3, 29, "B"],
  [4, 29, "B"],
  [5, 29, "B"],
  [6, 29, "B"],
  [6, 30, "B"],
  [6, 31, "B"],
  [0, 30, "S"],
  [1, 30, "S"],
  [2, 30, "S"],
  [3, 30, "S"],
  [4, 30, "S"],
  [5, 30, "S"],
  [5, 31, "S"],
  [5, 32, "S"],
  // [6, 32, "S"],
];
function plotTable() {
  clearTable(); // Clear the table before updating
  let tree = null;
  drawNumbers5d = updateRandNumbers(drawNumbers5d);
  // console.log("----------> random", drawNumbers5d);
  tree = buildTreesss(
    drawNumbers5d.slice(drawNumbers5d.length / 2),
    "1st",
    "Big/Small"
  )["tree"];
  const [columnCounts1, columnCounts2] = countFormsInColumns(tree, ["B", "S"]);

  console.log("----------> random tree", columnCounts1);
  console.log("----------> random tree", columnCounts2);
  console.log("----------> random tree", tree);
  console.log(
    checkForPossibleConsecutiveColumns(
      [columnCounts1, columnCounts2],
      ["B", "S"]
    )
  );
  console.log(checkForPossibleJump([columnCounts1, columnCounts2], ["B", "S"]));
  console.log(
    checkForPossibleSimply3([columnCounts1, columnCounts2], ["B", "S"])
  );
  console.log(
    checkForPossibleRowConsecutive([columnCounts1, columnCounts2], ["B", "S"])
  );
  console.log(checkForPossibleDragon([
    [0, 0, "P"],
    [1, 0, "P"],
    [2, 0, "P"],
    [3, 0, "P"],
    [0, 1, "C"],
    [0, 2, "P"],
    [1, 2, "P"],
    [0, 3, "C"],
    [0, 4, "P"],
    [0, 5, "C"],
    [1, 5, "C"],
    [0, 6, "P"],
    [0, 7, "C"],
    [1, 7, "C"],
    [2, 7, "C"],
    [3, 7, "C"],
    [0, 8, "P"],
    [1, 8, "P"],
    [0, 9, "C"],
    [1, 9, "C"],
    [2, 9, "C"],
    [3, 9, "C"],
    [4, 9, "C"],
    [0, 10, "P"],
    [0, 11, "C"],
    [1, 11, "C"],
    [2, 11, "C"],
    [3, 11, "C"],
    [4, 11, "C"],
    [5, 11, "C"],
    [0, 12, "P"],
    [1, 12, "P"],
    [2, 12, "P"],
    [3, 12, "P"],
    [4, 12, "P"],
    [5, 12, "P"],
    [0, 13, "C"],
    [1, 13, "C"],
    [0, 14, "P"],
    [0, 15, "C"],
    [1, 15, "C"],
    [2, 15, "C"],
    [3, 15, "C"],
    [0, 16, "P"],
    [1, 16, "P"],
    [0, 17, "C"],
    [1, 17, "C"],
    [2, 17, "C"],
    [3, 17, "C"],
    [4, 17, "C"],
  ], ["P", "C"]));
  console.log(
    checkForPossibleSingleHop([columnCounts1, columnCounts2], ["B", "S"])
  );
  console.log(
    checkForPossibleTwoByTwo([columnCounts1, columnCounts2], ["B", "S"])
  );
  console.log(
    checkForPossibleTwoByOne([columnCounts1, columnCounts2], ["B", "S"])
  );
  console.log(
    checkForPossibleTwoByOne([columnCounts1, columnCounts2], ["B", "S"])
  );

  tree.forEach((rowData, _) => {
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
  // clearInterval(x);
}

plotTable();

x = setInterval(plotTable, 15000);

export function fiveDFantanResults(drawNumber, game, optionalBallPosition = 1) {
  const DRAW_NUMBERS = [...drawNumber].map(Number);
  const SUM_OF_DRAW_NUMBERS = DRAW_NUMBERS.reduce((acc, curr) => acc + curr, 0);
  const GAME_RESULTS = [];
  const SUM_OF_THREE = DRAW_NUMBERS.slice(2).reduce(
    (acc, curr) => acc + curr,
    0
  );

  switch (game.toLowerCase()) {
    case "main": {
      GAME_RESULTS.push(
        bigSmall(SUM_OF_DRAW_NUMBERS, 23, 45, 0, 22),
        oddEven(SUM_OF_DRAW_NUMBERS),
        ...findHighestPosition(DRAW_NUMBERS),
        getDragonTiger(DRAW_NUMBERS)
      );
      break;
    }
    case "fantan 1": {
      GAME_RESULTS.push(...fantan1(SUM_OF_THREE));
      break;
    }
    case "fantan 2": {
      GAME_RESULTS.push(...fantan2(SUM_OF_THREE));
      break;
    }
    case "sum of last 3": {
      const [num1, num2, num3] = DRAW_NUMBERS.slice(2);
      GAME_RESULTS.push(
        getColorRange(SUM_OF_THREE),
        bigSmall(SUM_OF_THREE, 14, 27, 0, 13),
        oddEven(SUM_OF_THREE),
        ...getWinCombinations(num1, num2, num3)
      );
      break;
    }
    case "last 3 sums": {
      GAME_RESULTS.push(sumAndRange(DRAW_NUMBERS.slice(2).map(String)));
      break;
    }
    case "ball position": {
      const ballPositionObject = positionOfBallNode(DRAW_NUMBERS);
      console.log(ballPositionObject);
      const selectedBallPosition = ballPositionObject[optionalBallPosition - 1];
      const nonNumericValues = Object?.values(
        selectedBallPosition || {}
      ).filter((item) => typeof item !== "number");
      GAME_RESULTS.push(...nonNumericValues);
      break;
    }
    default: {
      throw new Error("Invalid game type");
    }
  }
  return GAME_RESULTS;
}

function positionOfBallNode(nums) {
  const isBig = (num) => num >= 5 && num <= 9;
  const isSmall = (num) => num >= 0 && num <= 4;
  const isEven = (num) => num % 2 === 0;
  const isOdd = (num) => num % 2 !== 0;

  return nums.map((num, index) => {
    const position = index + 1;
    let bigSmall = null;
    let oddEven = null;

    if (isBig(num)) {
      bigSmall = "Big";
    } else if (isSmall(num)) {
      bigSmall = "Small";
    }

    if (isEven(num)) {
      oddEven = "Even";
    } else if (isOdd(num)) {
      oddEven = "Odd";
    }

    return {
      position,
      number: `${num}`,
      bigSmall,
      oddEven,
    };
  });
}
// console.log(fiveDFantanResults(
//   [1,2,3,4,5],
//   "ball position",
//    1
// ));
