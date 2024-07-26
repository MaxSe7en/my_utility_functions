// import { drawNumbers } from "./dragon.js";
import { fnSelector } from "./road.js";

let place = "4th";

let form = "P/C";
const check = {
    B: "S",
    S: "B",
    P: "C",
    C: "P",
    O: "E",
    E: "O",
    D: "T",
    T: "D",
    F: "L",
    L: "F",
    Y: "G",
    G: "Y",
    J: "M",
    M: "J",
};

let drawNumbers = initializeRandNumbers();
const regularTree = buildTree(drawNumbers, place, form, "1");
console.log('--------------------> ', regularTree)
const table = document.getElementById("grid");
const derivedTable = document.getElementById("deriveGrid");
let x = null;
document.onload = createTable(7, 100);

function plotTable() {
    clearTable(); // Clear the table before updating
    let tree = null;
    drawNumbers = updateRandNumbers(drawNumbers);
    // console.log("----------> random", drawNumbers5d);
    tree = buildTree(
        drawNumbers.slice(drawNumbers.length / 2),
        "1st",
        "Big/Small"
    )["tree"];

    console.log("----------> random tree", tree);


    regularTree.bigBoy.tree.forEach((rowData, _) => {
        const [rowIndex, colIndex, value] = rowData;
        const row = table.rows[rowIndex];
        if (row) {
            const cell = row.cells[colIndex];
            if (cell) {
                cell.textContent = rowIndex + " " + value + " " + colIndex;
            }
            if (value === "S" || value === "C" || value === "R") {
                cell.style.color = "blue";
            } else if (value === "B" || value === "P") {
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

function createTable(rows, cols) {
    for (let i = 0; i < rows; i++) {
        const row = table.insertRow();
        for (let j = 0; j < cols; j++) {
            const cell = row.insertCell();
            cell.textContent = ""; // Initially empty
        }
    }
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


function countOccurrences(arr, form) {
    const letterMapping = {
        "Big/Small": ["B", "S"],
        "Odd/Even": ["O", "E"],
        "P/C": ["P", "C"],
        "Dragon/Tiger/Tie": ["D", "T"],
        "Dragon/Tiger": ["D", "T"],
        "More First/Last": ["F", "L"],
        "More Odd/Even": ["O", "E"],
        "O/E Sum": ["O", "E"],
        "B/S Sum": ["B", "S"],
        "First/Last": ["F", "L"],
        "Sky/Ground": ["Y", "G"],
        "Poultry/Beast": ["M", "J"],
        "Tail B/S": ["B", "S"],
        "Big/Small(No Tie)": ["B", "S"],
        "P/C Tail Sum": ["P", "C"],
        "B/S Tail Sum": ["B", "S"],
    };
    const letter = letterMapping[form]; //|| ["D", "T"];
    // console.log("letter: =======>", letter, letterMapping, form)
    const counts = { [letter?.[0]]: 0, [letter?.[1]]: 0 };

    arr.forEach((item) => {
        counts[item]++;
    });

    const total = arr.length;
    return {
        [letter[0]]: isNaN(Number(((counts[letter[0]] / total) * 100).toFixed(0)))
            ? 0 + "%"
            : ((counts[letter[0]] / total) * 100).toFixed(0) + "%",
        [letter[1]]: isNaN(Number(((counts[letter[1]] / total) * 100).toFixed(0)))
            ? 0 + "%"
            : ((counts[letter[1]] / total) * 100).toFixed(0) + "%",
    };
}

function buildTree(drawNumbers, place, form, lottery_id) {
    const tree = [];
    const analyzedDrawNumbersResults = transpose(
        fnSelector(drawNumbers, place, form, lottery_id)[form]
    ); // analyzeDrawNumbers(drawNumbers, place)[form];//fnSelector(drawNumbers, place, form, lottery_id)[form]
    console.log(
        "analyzedResults-------------------??????",
        analyzedDrawNumbersResults
    );
    let percentage = countOccurrences(analyzedDrawNumbersResults["newArr"], form);

    const bigEyeBoyArr = [];
    const smallRoadArr = [];
    const cockroachArr = [];
    const bigEyeRoadObj = {};
    const smallRoadObj = {};
    const cockroachObj = {};

    let row = 0;
    let col = 0;
    let whenColIncreaseByMaxRows = 0;
    const dua = {};
    let currentHighestColumn = 0; //to help enforce that all plots are visible in the chart

    const img = analyzedDrawNumbersResults;
    console.log("img----------------->", img);
    img["newArr"].forEach((_value, i) => {
        let previousLetter = img["newArr"][i - 1];
        let currentLetter = img["newArr"][i];
        let nextLetter = img["newArr"][i + 1];
        let newItem = [];

        if (currentLetter !== previousLetter) {
            col = whenColIncreaseByMaxRows;
        } //&& currentLetter !== letterinobj && countsinobj >= 2 row++
        if (previousLetter !== undefined && currentLetter !== previousLetter) {
            // if(currentLetter !== img["consecutiveAs"][`${previousLetter}${i}`] && countsinobj >= 2)
            if (
                form === "Dragon/Tiger/Tie" &&
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

            if (prev === currentLetter && form !== "Dragon/Tiger/Tie") {
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
        // newItem = [row, col, currentLetter];
        newItem.push(row, col, currentLetter !== undefined ? currentLetter : "");

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

        if (col > currentHighestColumn) {
            currentHighestColumn = col;
        }

        newItem = [row, col, img["indexOfA"].includes(i) ? "A" : currentLetter];

        tree.push(newItem);

        derivedRoad(tree, whenColIncreaseByMaxRows, {
            bigEyeBoyArr,
            smallRoadArr,
            cockroachArr,
            bigEyeRoadObj,
            smallRoadObj,
            cockroachObj,
        });
        // derivedRoad(tree, whenColIncreaseByMaxRows, { bigEyeBoyArr, smallRoadArr, cockcroachArr, bigEyeRoadObj });
    });

    // console.log("indexof ssssssssssh ==========>", bigEyeBoyArr)
    const bigBoy = buildDerivedRoadTree(bigEyeBoyArr);
    const smallRoad = buildDerivedRoadTree(smallRoadArr);
    const cockroach = buildDerivedRoadTree(cockroachArr);
    // console.log("colwidth: ccccc", col, tree);
    return {
        tree,
        percentage,
        colWidth: currentHighestColumn,
        bigBoy,
        smallRoad,
        cockroach,
        nextColor: { bigEyeRoadObj, smallRoadObj, cockroachObj },
    };
}



function buildDerivedRoadTree(road) {
    const tree = [];
    let row = 0;
    let col = 0;
    let whenColIncreaseByMaxRows = 0;
    const dua = {};
    let currentHighestColumn = 0;
    road.forEach((currentLetter, i) => {
        const previousLetter = road[i - 1];
        const nextLetter = road[i + 1];
        const newItem = [];
        //   const newItem:  [number, number, string] = [0, 0, ""];

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

            const prevCol = col - 1;
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

        newItem.push(row, col, currentLetter);

        const duplicate = tree.some(
            (item) => item[0] === newItem[0] && item[1] === newItem[1]
        );

        if (duplicate) {
            row--;
            col++;
            newItem[0] = row;
            newItem[1] = col;
        }
        if (col > currentHighestColumn) {
            currentHighestColumn = col;
        }
        dua[row + "|" + col] = currentLetter;

        tree.push(newItem);
    });

    return { tree, colWidth: currentHighestColumn };
}

function derivedRoad(
    tree,
    col,
    {
        bigEyeBoyArr,
        smallRoadArr,
        cockroachArr,
        bigEyeRoadObj,
        smallRoadObj,
        cockroachObj,
    }
) {
    let getLastArrayWithCol2Var = getLastArrayWithColWithoutA(tree, col);
    let currentLetterCurrentCol =
        getLastArrayWithCol2Var != null && getLastArrayWithCol2Var[2]; // Current letter in the current column
    let nextLetterToBreakColumn =
        getLastArrayWithCol2Var != null && check[getLastArrayWithCol2Var[2]]; // Next letter to break the column

    let letter = (val) => (val === "R" ? "B" : "R");

    let updatedBigEyeRoadObj = { ...bigEyeRoadObj };
    let updatedSmallRoadObj = { ...smallRoadObj };
    let updatedCockroachObj = { ...cockroachObj };
    let bigEyeBoy = getLastArrayWithColWithoutA(tree, col - 1);
    let smallRoad = getLastArrayWithColWithoutA(tree, col - 2);
    let cockroach = getLastArrayWithColWithoutA(tree, col - 3);

    if (getLastArrayWithCol2Var && bigEyeBoy) {
        if (currentLetterCurrentCol === "A") {
            bigEyeBoyArr.push(updatedBigEyeRoadObj[currentLetterCurrentCol]);
        } else if (getLastArrayWithCol2Var[0] === bigEyeBoy[0]) {
            if (!Object.keys(bigEyeRoadObj).length) {
                bigEyeRoadObj[nextLetterToBreakColumn] = "R";
            } else {
                Object.keys(bigEyeRoadObj).forEach((key) => delete bigEyeRoadObj[key]);
                bigEyeRoadObj[nextLetterToBreakColumn] = "R";
            }
        } else {
            if (!Object.keys(bigEyeRoadObj).length) {
                bigEyeRoadObj[nextLetterToBreakColumn] = "B";
            } else {
                Object.keys(bigEyeRoadObj).forEach((key) => delete bigEyeRoadObj[key]);
                bigEyeRoadObj[nextLetterToBreakColumn] = "B";
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
        } else if (getLastArrayWithCol2Var[0] === smallRoad[0]) {
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
        } else if (getLastArrayWithCol2Var[0] === cockroach[0]) {
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

            if (!isEmpty(updatedCockroachObj)) {
                if (
                    cockroachObj &&
                    Object.keys(updatedCockroachObj)[0] === currentLetterCurrentCol
                ) {
                    cockroachArr.push(updatedCockroachObj[currentLetterCurrentCol]);
                } else {
                    const firstValue = letter(Object.values(updatedCockroachObj)[0]);
                    cockroachArr.push(firstValue);
                }
            }
        }
    }

    // console.log("bigRoad ssssssssssh ==========>", bigEyeBoyArr, bigEyeRoadObj)
    // console.log("smallRoad ssssssssssh ==========>", smallRoadArr, smallRoadObj)
    // console.log("cockroach ssssssssssh ==========>", cockroachArr, cockroachObj)
}
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

function findNextNonALetterIndex(arr, currentIndexOfA) {
    for (let i = currentIndexOfA + 1; i < arr.length; i++) {
        if (arr[i] !== "A") {
            return i;
        }
    }
    // Return -1 if no non-'A' letter is found after the current index
    return -1;
}

function getPrecedingAs(arr) {
    const result = [];
    let i = 0;

    // Keep going until we find a non-'A'
    while (i < arr?.length && arr[i] === "A") {
        result.push(arr[i]);
        i++;
    }

    // Stop looping once we hit a non-'A'
    return result;
}

function removePrecedingAs(arr, numberOfAsToRemove) {
    return arr.splice(0, numberOfAsToRemove);
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

    return last || [0, 0, ""]; // Return the original array if no modification is needed.
}
function transpose(arr) {
    let newArr = [];
    let indexOfA = [];
    let countOfA = 0;
    const consecutiveAs = {};
    // const consecutiveAs = new Map();
    let previousLetter;

    // removePrecedingAs(arr, precedingAs.length);

    const precedingAs = getPrecedingAs(arr).length;
    if (precedingAs > 0) {
        indexOfA = [...indexOfA, ...convertAsToSucceedingLetter(arr).indexesOfA];
        console.log("------------------>", indexOfA);
    }

    for (let i = 0; i < arr?.length; i++) {
        let nextLetter = arr[i + 1];
        if (nextLetter === "A" && arr[i] !== "A") {
            previousLetter = arr[i];
        }
        // console.log("i", previousLetter, arr[i], previousLetter === undefined);
        if (arr[i] === "A" && previousLetter === undefined) {
            indexOfA.push(i);
            countOfA++;
            let nonAIndex = findNextNonALetterIndex(arr, i);
            // consecutiveAs.set(nextLetter, countOfA);
            consecutiveAs[`${nextLetter}${nonAIndex}`] = countOfA;

            newArr.push(nextLetter);
            countOfA = 0;
        } else if (arr[i] === "A") {
            countOfA++;
            let nonAIndex = findNextNonALetterIndex(arr, i);
            // consecutiveAs.set(`${previousLetter}${i}`, countOfA);
            consecutiveAs[`${previousLetter}${nonAIndex}`] = countOfA;
            indexOfA.push(i);
            newArr.push(previousLetter);
            // countOfA = 0;
        } else {
            countOfA = 0;
            newArr.push(arr[i]);
        }
    }

    // console.log("i ", newArr);
    // console.log("i ", countOfA);
    // console.log("i ", consecutiveAs);
    // console.log("i ", indexOfA);

    return { newArr, indexOfA, countOfA, consecutiveAs };
}

function isEmpty(value) {
    if (value === null || value === undefined || value === 0) {
        return true;
    }

    if (typeof value === 'string' && value.trim() === '') {
        return true;
    }

    if (Array.isArray(value) && value.length === 0) {
        return true;
    }

    return !!(typeof value === 'object' && Object.keys(value).length === 0);
}

function updateRandNumbers(numbersArray) {
    numbersArray.shift(); // Remove the first element
    numbersArray.push(
        Array.from({ length: 5 }, () => Math.floor(Math.random() * 10))
    ); // Append a new array
    return numbersArray;
}

function initializeRandNumbers() {
    return Array.from({ length: 100 }, () =>
        Array.from({ length: 5 }, () => Math.floor(Math.random() * 10))
    );
}

