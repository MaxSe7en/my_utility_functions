const bigEyeBoyArr = [];
const smallRoadArr = [];
const cockroachArr = [];
const bigEyeRoadObj = {};
const smallRoadObj = {};
const cockroachObj = {};

const tSee = [
    [0, 0, "B"],
    [1, 0, "B"],
    [0, 1, "S"],
    [0, 2, "B"],
    [0, 3, "S"],
    [1, 3, "S"],
    [2, 3, "S"],
    [0, 4, "B"],
    [1, 4, "B"],
    [2, 4, "B"],
    [3, 4, "B"],
    [4, 4, "B"],
    [5, 4, "B"],
    [0, 5, "S"],
    [1, 5, "S"],
    [2, 5, "S"],
    [3, 5, "S"],
    [4, 5, "S"],
    [5, 5, "S"],
    [0, 6, "B"],
    [1, 6, "B"],
    [2, 6, "B"],
    [3, 6, "B"],
    [4, 6, "B"],
    [5, 6, "B"],
    [0, 7, "S"],
    [0, 8, "B"],
    [0, 9, "S"],
    [1, 9, "S"],
    [2, 9, "S"],
    [0, 10, "B"],
    [1, 10, "B"],
    [2, 10, "B"],
    [3, 10, "B"],
    [0, 11, "S"],
    [1, 11, "S"],
    [2, 11, "S"],
    [3, 11, "S"],
    [0, 12, "B"],
    [1, 12, "B"],
    [2, 12, "B"],
    [3, 12, "B"],
    [4, 12, "B"],
    [0, 13, "S"],
    [0, 14, "B"],
    [1, 14, "B"],
    [2, 14, "B"],
    [0, 15, "S"],
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
    [1, 22, "B"],
    [2, 22, "B"],
    [0, 23, "S"],
    [1, 23, "S"],
    [2, 23, "S"],
    [3, 23, "S"],
    [4, 23, "S"],
    [0, 24, "B"],
    [1, 24, "B"],
    [0, 25, "S"],
    [1, 25, "S"],
    [2, 25, "S"],
];


tSee.forEach((cell) => {
    let [x, y, type] = cell;
    let cellValue = cell[2];
    console.log(cellValue);
    // derivedRoad()
    // if (type === "B") {
    //     bigEyeBoyArr.push(cellValue);
    //     bigEyeRoadObj[cellValue] = bigEyeRoadObj[cellValue] || [];
    //     bigEyeRoadObj[cellValue].push([x, y]);
    // } else if (type === "S") {
    //     smallRoadArr.push(cellValue);
    //     smallRoadObj[cellValue] = smallRoadObj[cellValue] || [];
    //     smallRoadObj[cellValue].push([x, y]);
    // } else if (type === "C") {
    //     cockroachArr.push(cellValue);
    //     cockroachObj[cellValue] = cockroachObj[cellValue] || [];
    //     cockroachObj[cellValue].push([x, y]);
    // }
})

function derivedRoad(
    tree,
    col,
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
    console.log("indexof ssssssssssh ==========>", bigEyeBoy)

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