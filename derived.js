const drawNumbers = [
    [5, 5, 3, 8, 2],
    [2, 3, 5, 8, 1],
    [9, 7, 4, 9, 1],
    [4, 7, 9, 9, 2],
    [6, 6, 0, 0, 2],
    [6, 9, 7, 5, 1],
    [0, 8, 0, 1, 5],
    [7, 8, 6, 0, 4],
    [2, 3, 0, 2, 3],
    [4, 6, 3, 7, 0],
    [5, 7, 0, 3, 5],
    [7, 9, 1, 0, 9],
    [0, 0, 1, 9, 0],
    [6, 3, 3, 0, 0],
    [3, 6, 9, 5, 8],
    // [9, 3, 3, 5, 8],
    // [9, 2, 2, 0, 8],
    // [8, 0, 2, 8, 1],
    // [9, 1, 1, 4, 1],
    // [4, 9, 3, 4, 8],
    // [6, 8, 3, 4, 6],
    // [8, 6, 0, 0, 1],
    // [8, 0, 1, 6, 8],
    // [9, 1, 9, 7, 1],
    // [1, 7, 9, 7, 6],
    // [3, 6, 6, 3, 6],
    // [7, 2, 2, 3, 2],
    // [6, 2, 3, 6, 0],
    // [8, 7, 7, 3, 0],
    // [3, 7, 8, 7, 3],
    // [4, 5, 2, 2, 3],
    // [4, 5, 7, 1, 3],
    // [1, 3, 3, 1, 3],
    // [7, 8, 3, 4, 6],
    // [3, 4, 6, 7, 8],
    // [8, 1, 9, 5, 6],
    // [1, 5, 6, 8, 9],
    // [9, 9, 4, 2, 0],
    // [0, 2, 4, 9, 0],
    // [6, 3, 2, 4, 0],
    // [2, 3, 4, 6, 4],
    // [4, 5, 2, 4, 2],
    // [4, 5, 9, 3, 9],
    // [4, 5, 3, 4, 5],
    // [9, 6, 3, 3, 6],
    // [1, 1, 3, 6, 4],
    // [7, 9, 4, 7, 4],
    // [7, 9, 8, 8, 1],
    // [3, 3, 1, 3, 8],
    // [0, 3, 7, 6, 1],
    // [0, 1, 3, 6, 7],
    // [4, 5, 0, 7, 2],
    // [0, 2, 4, 5, 7],
    // [7, 1, 8, 9, 4],
    // [1, 4, 7, 8, 9],
    // [6, 2, 4, 1, 0],
    // [0, 1, 2, 4, 6],
    // [9, 9, 3, 9, 4],
    // [3, 4, 9, 7, 4],
    // [0, 5, 2, 0, 2],
    // [4, 5, 7, 0, 9],
    // [6, 8, 9, 0, 6],
    // [8, 9, 4, 3, 5],
    // [6, 4, 3, 4, 5],
    // [6, 7, 4, 5, 1],
    // [3, 1, 3, 4, 5],
    // [7, 0, 4, 8, 1],
    // [9, 0, 1, 4, 8],
    // [9, 8, 1, 3, 5],
    // [5, 1, 3, 5, 8],
    // [2, 9, 5, 3, 3],
    // [2, 3, 5, 9, 7],
    // [5, 3, 6, 8, 3],
    // [5, 6, 7, 8, 5],
    // [1, 6, 3, 9, 1],
    // [3, 5, 6, 9, 3],
    // [2, 6, 3, 3, 2],
    // [3, 6, 5, 4, 7],
    // [4, 4, 4, 5, 7],
    // [7, 4, 7, 8, 6],
    // [4, 6, 7, 8, 7],
    // [0, 7, 3, 1, 0],
    // [1, 3, 7, 3, 0],
    // [1, 6, 2, 0, 1],
    // [2, 3, 6, 0, 3],
    // [8, 0, 8, 0, 3],
    // [8, 8, 3, 3, 6],
    // [8, 3, 6, 8, 4],
    // [1, 5, 3, 0, 0],
    // [1, 3, 4, 5, 8],
    // [4, 0, 5, 0, 0],
    // [4, 5, 8, 4, 4],
    // [1, 0, 3, 0, 1],
    // [3, 4, 6, 9, 1],
    // [1, 5, 1, 5, 6],
    // [9, 4, 8, 6, 1],
    // [8, 1, 4, 6, 8],
    // [0, 8, 0, 4, 7],
    // [0, 4, 7, 8, 7],
    // [7, 8, 2, 3, 2],
    // [3, 7, 8, 0, 2],
    // [4, 9, 3, 0, 2],
    // [3, 4, 9, 0, 0],
    // [7, 3, 8, 0, 3],
    // [7, 8, 0, 7, 5],
    // [3, 7, 0, 3, 5],
    // [7, 9, 3, 5, 3],
    // [5, 3, 5, 9, 5],
    // [6, 4, 1, 4, 1],
    // [4, 5, 6, 4, 0],
    // [4, 5, 1, 0, 1],
    // [4, 5, 1, 5, 7],
    // [7, 4, 1, 4, 5],
    // [7, 7, 6, 8, 1],
    // [0, 0, 1, 6, 7],
    // [8, 4, 6, 2, 1],
    // [2, 1, 2, 4, 6],
    // [4, 1, 9, 4, 5],
    // [1, 4, 5, 9, 4],
    // [0, 7, 1, 0, 0],
    // [1, 4, 7, 0, 7],
    // [5, 7, 5, 0, 5],
    // [7, 1, 9, 5, 4],
    // [8, 1, 4, 5, 8],
    // [9, 3, 9, 7, 7],
    // [5, 3, 5, 7, 9],
    // [8, 0, 4, 7, 2],
    // [0, 2, 4, 7, 8],
    // [0, 9, 9, 6, 0],
    // [0, 6, 9, 1, 3],
    // [3, 5, 3, 1, 3],
    // [5, 3, 4, 1, 5],
    // [3, 1, 3, 4, 5],
    // [3, 5, 1, 5, 8],
    // [1, 3, 5, 8, 6],
    // [9, 1, 4, 9, 1],
    // [4, 6, 9, 8, 2],
    // [7, 4, 7, 2, 4],
    // [7, 8, 6, 8, 4],
    // [9, 3, 3, 4, 6],
    // [8, 9, 1, 2, 5],
    // [5, 3, 1, 2, 3],
    // [5, 5, 4, 6, 1],
    // [3, 1, 3, 4, 5],
    // [6, 6, 2, 4, 8],
    // [5, 2, 4, 5, 6],
    // [8, 8, 4, 4, 7],
    // [5, 4, 5, 7, 8],
    // [5, 5, 2, 9, 5],
    // [2, 5, 9, 9, 2],
    // [1, 8, 6, 1, 2],
    // [6, 8, 9, 1, 0],
    // [1, 7, 9, 0, 1],
    // [7, 9, 7, 0, 9],
    // [9, 2, 0, 2, 7],
    // [9, 4, 2, 8, 7],
    // [0, 0, 2, 4, 7],
    // [8, 1, 4, 2, 5],
    // [8, 1, 2, 4, 5],
    // [8, 5, 6, 7, 7],
    // [7, 5, 6, 7, 6],
    // [8, 6, 5, 1, 1],
    // [5, 6, 8, 3, 3],
    // [7, 3, 4, 3, 4],
    // [7, 6, 3, 6, 3],
    // [3, 3, 6, 0, 4],
    // [6, 6, 9, 0, 4],
    // [6, 9, 9, 3, 9],
    // [4, 6, 3, 4, 6],
    // [9, 3, 2, 5, 0],
    // [6, 0, 2, 3, 5],
    // [6, 3, 5, 1, 9],
    // [4, 1, 3, 4, 5],
    // [9, 0, 3, 9, 7],
    // [7, 0, 3, 7, 9],
    // [5, 1, 6, 8, 1],
    // [1, 5, 6, 8, 6],
    // [2, 1, 6, 5, 1],
    // [2, 5, 6, 5, 0],
    // [5, 6, 9, 0, 5],
].reverse();

function getBigSmallForBall(ball) {
    return ball >= 0 && ball <= 4 ? "S" : "B";
}

function analyzeDraw(drawNumbers, whatToAnalyze) {
    const results = {
        smallBig: [], // Add an array to store detailed dragon-tiger-tie counts
        oddEven: [], // Add an array to store detailed
        primeComposite: [],
    };

    let prevBigSmall;

    for (const element of drawNumbers) {
        const draw = element;

        let ball;

        ball = draw[parseInt(whatToAnalyze) - 1];

        let bigSmall = getBigSmallForBall(ball);

        // Add the bigSmall value to the results array
        results.smallBig.push(bigSmall);

        // Update prev values
        prevBigSmall = bigSmall;
    }

    return results;
}

// console.log(analyzeDraw(drawNumbers, "2nd"));

function getLastArrayWithCol2(arr, col) {
    let last = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] === col) {
            last = arr[i];
        }
    }
    return last;
}

const data = [
    // [0, 0, "S"],
    // [0, 1, "B"],
    // [0, 2, "S"],
    // [1, 2, "S"],
    // [2, 2, "S"],
    // [3, 2, "S"],
    // [4, 2, "S"],
    // [5, 2, "S"],
    // [5, 3, "S"],
    // [5, 4, "S"],
    // [5, 5, "S"],
    // [5, 6, "S"],
    // [0, 3, "B"],
    // [1, 3, "B"],
    // [0, 4, "S"],
    // [1, 4, "S"],
    // [2, 4, "S"],
    // [3, 4, "S"],
    // [4, 4, "S"],
    // [4, 5, "S"],
    // [4, 6, "S"],
    // [4, 7, "S"],//turning point
    // [5, 7, "S"],
    // [0, 5, "B"],
    // [1, 5, "B"],
    // [2, 5, "B"],

    [0, 0, "S"],
    [0, 1, "B"],
    [0, 2, "S"],
    // [
    //     0,
    //     3,
    //     "B"
    // ],
    // [
    //     0,
    //     4,
    //     "S"
    // ],
];

//   const result = getLastArrayWithCol2(data,2);
//   const result1 = getLastArrayWithCol2(data,2);

//   console.log("dsfsdafsad",result); // [5, 2, "S"]
//   console.log(result1); // [5, 2, "S"]

function getBigSmallForBalls(ball) {
    return ball >= 0 && ball <= 4 ? "S" : "B";
}

function getBigSmallForBall(ball) {
    return ball >= 0 && ball <= 4 ? "S" : "B";
}

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

function getPrimeComposite(ball) {
    const primes = [1, 2, 3, 5, 7];

    if (primes.includes(ball)) {
        return "P";
    } else {
        return "C";
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

        let ball = draw[parseInt(whatToAnalyze) - 1];

        // let bigSmall = getBigSmallForBall(ball);

        // let ball;
        if (whatToAnalyze === "sum") {
            ball = draw.reduce((a, b) => a + b, 0);
        } else {
            ball = draw[parseInt(whatToAnalyze) - 1];
        }

        let oddEven, bigSmall, primeComposite, dragonTiger;
        console.log("ball", ball);
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
console.log("results",results)
    return results;
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
const check = {
    "B": "S",
    "S": "B",
    "P": "C",
    "C": "P",
    "O": "E",
    "E": "O",
}
function buildTree(drawNumbers, whatToAnalyze, type) {
    const tree = [];
    const analyzedResults = analyzeDraw(drawNumbers, whatToAnalyze)[type];
    // console.log(analyzedResults);
    let percentage = countOccurrences(
        analyzeDraw(drawNumbers, whatToAnalyze)[type],
        type
    );

    let bigEyeBoyArr = [];
    let smallRoadArr = [];
    let cockcroachArr = [];
    let bigEyeRoadObj = {};
    // const analyzedResults1 = analyzeDraw(drawNumbers, whatToAnalyze).oddEven;
    // const analyzedResults2 = analyzeDraw(drawNumbers, whatToAnalyze).primeComposite;

    // console.log(percentage);
    let row = 0;
    let col = 0;
    let whenColIncreaseByMaxRows = 0;
    let dua = {};

    analyzedResults.forEach((value, i) => {
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
        } else if (currentLetter !== previousLetter && currentLetter !== nextLetter) {
            col = 0;
            whenColIncreaseByMaxRows = col;
        }

        if (row > 5) {
            row = 5;
            col++;
        }
        // console.log("row", row, "col", col, "currentLetter", currentLetter);
        newItem = [row, col, currentLetter];

        let duplicate = tree.some((item) => item[0] === newItem[0] && item[1] === newItem[1]);

        if (duplicate) {
            row--;
            col++;
            newItem = [row, col, currentLetter];
        }

        dua[row + "|" + col] = currentLetter;

        // generateDerivedRoadColors(tree, whenColIncreaseByMaxRows, { bigEyeBoyArr, smallRoadArr, cockcroachArr, bigEyeRoadObj });
        tree.push(newItem);

        derivedRoad(tree, whenColIncreaseByMaxRows, { bigEyeBoyArr, smallRoadArr, cockcroachArr, bigEyeRoadObj });
    });
    const bigBoy = buildDerivedRoadTree(bigEyeBoyArr)
    const smallRoad = buildDerivedRoadTree(smallRoadArr)
    const cockcroach = buildDerivedRoadTree(cockcroachArr)
    return { tree, percentage, colHeight: whenColIncreaseByMaxRows, bigBoy, smallRoad, cockcroach };
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
        } else if (currentLetter !== previousLetter && currentLetter !== nextLetter) {
            col = 0;
            whenColIncreaseByMaxRows = col;
        }

        if (row > 5) {
            row = 5;
            col++;
        }
        // console.log("row", row, "col", col, "currentLetter", currentLetter);
        newItem = [row, col, currentLetter];

        let duplicate = tree.some((item) => item[0] === newItem[0] && item[1] === newItem[1]);

        if (duplicate) {
            row--;
            col++;
            newItem = [row, col, currentLetter];
        }

        dua[row + "|" + col] = currentLetter;

        tree.push(newItem);

        // console.log(JSON.stringify(tree));
        // console.log(whenColIncreaseByMaxRows);

        // console.log(result); // [5, 2, "S"]
    });

    // console.log(tree);
    return tree;
}

let obj = {};

const card =["sum"]// ["1st"]//, "2nd", "3rd", "4th", "5th", "sum"]
const activePlaceCheckBox = ["Big/Small"]//, "Odd/Even", "P/C"]


card.forEach((card) => {
    activePlaceCheckBox.forEach((form) => {
        const trees = buildTree(drawNumbers, card, form);
        obj[form + "|" + card] = trees;
    });
});

// console.log(obj);

function derivedRoad(tree, col, { bigEyeBoyArr, smallRoadArr, cockcroachArr, bigEyeRoadObj }) {

    let getLastArrayWithCol2Var = getLastArrayWithCol2(tree, col);// "B"
    let currentLetterCurrentCol = getLastArrayWithCol2Var[2]
    let nextLetterToBreakColumn = check[getLastArrayWithCol2Var[2]]// "S"
    let nextbigEyeBoyColor = null
    let smallRoadColor = null
    let cockroachColor = null

    // console.log(currentLetterCurrentCol, nextLetterToBreakColumn, getLastArrayWithCol2Var)

    let letter = (val) => val === "R" ? "R" : "B"
    // let bigEyeRoadObj = {}
    let smallRoadObj = {}
    let cockroachObj = {}
    let updatedBigEyeRoadObj = { ...bigEyeRoadObj }
    let bigEyeBoy = getLastArrayWithCol2(tree, col - 1);
    let smallRoad = getLastArrayWithCol2(tree, col - 2);
    let cockroach = getLastArrayWithCol2(tree, col - 3);

    // console.log("storedNextLexter", Object.keys(bigEyeRoadObj)[0], "curr",  currentLetterCurrentCol, "next", nextLetterToBreakColumn, Object.keys(bigEyeRoadObj)[0] === currentLetterCurrentCol)

    if (bigEyeRoadObj !== undefined && Object.keys(bigEyeRoadObj)[0] === currentLetterCurrentCol) {
        bigEyeBoyArr.push(bigEyeRoadObj[nextLetterToBreakColumn]);

    } else {
        bigEyeBoyArr.push(letter(bigEyeRoadObj[nextLetterToBreakColumn]))
    }


    if (getLastArrayWithCol2Var !== null && bigEyeBoy !== null) {
        if (bigEyeBoy !== null && getLastArrayWithCol2Var[0] === bigEyeBoy[0]) {
            if (Object.keys(bigEyeRoadObj).length === 0) {

                bigEyeRoadObj[nextLetterToBreakColumn] = "R"
            } else {
                Object.keys(bigEyeRoadObj).forEach(k => delete bigEyeRoadObj[k]);

                bigEyeRoadObj[nextLetterToBreakColumn] = "R"


            }
        }
        else {
            if (Object.keys(bigEyeRoadObj).length === 0) {
                bigEyeRoadObj[nextLetterToBreakColumn] = "B"
            } else {
                Object.keys(bigEyeRoadObj).forEach(k => delete bigEyeRoadObj[k]);

                bigEyeRoadObj[nextLetterToBreakColumn] = "B"
            }

        }
        // console.log(tree)
        // console.log("next", nextLetterToBreakColumn, bigEyeRoadObj, getLastArrayWithCol2Var, "col", col)

    }
    // console.log("prev",updatedBigEyeRoadObj, "current",bigEyeRoadObj)
   
}


function generateDerivedRoadColors(tree, col) {
    // let draw = [
    //     [5, 1, 6, 8, 1],
    //     [1, 5, 6, 8, 6],
    //     [2, 1, 6, 5, 1],
    //     [2, 5, 6, 5, 0],
    //     [5, 6, 9, 0, 5]
    // ]

    let getLastArrayWithCol2Var = getLastArrayWithCol2(tree, col);
    let bigEyeBoy = getLastArrayWithCol2(tree, col - 1);
    let smallRoad = getLastArrayWithCol2(tree, col - 2);
    let cockroach = getLastArrayWithCol2(tree, col - 3);
    // const ab = analyzeDraw(draw, "1st");
    console.log(getLastArrayWithCol2Var);

}
 // if (getLastArrayWithCol2Var !== null && smallRoad !== null) {
    //     if (smallRoad !== null && getLastArrayWithCol2Var[0] === smallRoad[0]) {
    //         // smallRoadArr.push("R");
    //         // smallRoadColor = "R"
    //         smallRoadObj[nextLetterToBreakColumn] = "R"
    //     } 
    //     else {
    //         // smallRoadArr.push("B")
    //         smallRoadObj[nextLetterToBreakColumn] = "B"
    //     }
    // }

    // if (getLastArrayWithCol2Var !== null && cockroach !== null) {
    //     if (cockroach !== null && getLastArrayWithCol2Var[0] === cockroach[0]) {
    //         // cockcroachArr.push("R");
    //         cockroachObj[nextLetterToBreakColumn]  = "R"
    //     } 
    //     else {
    //         // cockcroachArr.push("B")
    //         cockroachObj[nextLetterToBreakColumn] = "B"
    //     }


    // }