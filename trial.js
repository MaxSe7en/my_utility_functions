const drawNumbers = [
    [
        5,
        5,
        3,
        8,
        2
    ],
    [
        2,
        3,
        5,
        8,
        1
    ],
    [
        9,
        7,
        4,
        9,
        1
    ],
    [
        4,
        7,
        9,
        9,
        2
    ],
    [
        6,
        6,
        0,
        0,
        2
    ],
    [
        6,
        9,
        7,
        5,
        1
    ],
    [
        0,
        8,
        0,
        1,
        5
    ],
    [
        7,
        8,
        6,
        0,
        4
    ],
    [
        2,
        3,
        0,
        2,
        3
    ],
    [
        4,
        6,
        3,
        7,
        0
    ],
    [
        5,
        7,
        0,
        3,
        5
    ],
    [
        7,
        9,
        1,
        0,
        9
    ],
    [
        0,
        0,
        1,
        9,
        0
    ],
    [
        6,
        3,
        3,
        0,
        0
    ],
    [
        3,
        6,
        9,
        5,
        8
    ],
    [
        9,
        3,
        3,
        5,
        8
    ],
    [
        9,
        2,
        2,
        0,
        8
    ],
    [
        8,
        0,
        2,
        8,
        1
    ],
    [
        9,
        1,
        1,
        4,
        1
    ],
    [
        4,
        9,
        3,
        4,
        8
    ],
    [
        6,
        8,
        3,
        4,
        6
    ],
    [
        8,
        6,
        0,
        0,
        1
    ],
    [
        8,
        0,
        1,
        6,
        8
    ],
    [
        9,
        1,
        9,
        7,
        1
    ],
    [
        1,
        7,
        9,
        7,
        6
    ],
    [
        3,
        6,
        6,
        3,
        6
    ],
    [
        7,
        2,
        2,
        3,
        2
    ],
    [
        6,
        2,
        3,
        6,
        0
    ],
    [
        8,
        7,
        7,
        3,
        0
    ],
    [
        3,
        7,
        8,
        7,
        3
    ],
    [
        4,
        5,
        2,
        2,
        3
    ],
    [
        4,
        5,
        7,
        1,
        3
    ],
    [
        1,
        3,
        3,
        1,
        3
    ],
    [
        7,
        8,
        3,
        4,
        6
    ],
    [
        3,
        4,
        6,
        7,
        8
    ],
    [
        8,
        1,
        9,
        5,
        6
    ],
    [
        1,
        5,
        6,
        8,
        9
    ],
    [
        9,
        9,
        4,
        2,
        0
    ],
    [
        0,
        2,
        4,
        9,
        0
    ],
    [
        6,
        3,
        2,
        4,
        0
    ],
    [
        2,
        3,
        4,
        6,
        4
    ],
    [
        4,
        5,
        2,
        4,
        2
    ],
    [
        4,
        5,
        9,
        3,
        9
    ],
    [
        4,
        5,
        3,
        4,
        5
    ],
    [
        9,
        6,
        3,
        3,
        6
    ],
    [
        1,
        1,
        3,
        6,
        4
    ],
    [
        7,
        9,
        4,
        7,
        4
    ],
    [
        7,
        9,
        8,
        8,
        1
    ],
    [
        3,
        3,
        1,
        3,
        8
    ],
    [
        0,
        3,
        7,
        6,
        1
    ],
    [
        0,
        1,
        3,
        6,
        7
    ],
    [
        4,
        5,
        0,
        7,
        2
    ],
    [
        0,
        2,
        4,
        5,
        7
    ],
    [
        7,
        1,
        8,
        9,
        4
    ],
    [
        1,
        4,
        7,
        8,
        9
    ],
    [
        6,
        2,
        4,
        1,
        0
    ],
    [
        0,
        1,
        2,
        4,
        6
    ],
    [
        9,
        9,
        3,
        9,
        4
    ],
    [
        3,
        4,
        9,
        7,
        4
    ],
    [
        0,
        5,
        2,
        0,
        2
    ],
    [
        4,
        5,
        7,
        0,
        9
    ],
    [
        6,
        8,
        9,
        0,
        6
    ],
    [
        8,
        9,
        4,
        3,
        5
    ],
    [
        6,
        4,
        3,
        4,
        5
    ],
    [
        6,
        7,
        4,
        5,
        1
    ],
    [
        3,
        1,
        3,
        4,
        5
    ],
    [
        7,
        0,
        4,
        8,
        1
    ],
    [
        9,
        0,
        1,
        4,
        8
    ],
    [
        9,
        8,
        1,
        3,
        5
    ],
    [
        5,
        1,
        3,
        5,
        8
    ],
    [
        2,
        9,
        5,
        3,
        3
    ],
    [
        2,
        3,
        5,
        9,
        7
    ],
    [
        5,
        3,
        6,
        8,
        3
    ],
    [
        5,
        6,
        7,
        8,
        5
    ],
    [
        1,
        6,
        3,
        9,
        1
    ],
    [
        3,
        5,
        6,
        9,
        3
    ],
    [
        2,
        6,
        3,
        3,
        2
    ],
    [
        3,
        6,
        5,
        4,
        7
    ],
    [
        4,
        4,
        4,
        5,
        7
    ],
    [
        7,
        4,
        7,
        8,
        6
    ],
    [
        4,
        6,
        7,
        8,
        7
    ],
    [
        0,
        7,
        3,
        1,
        0
    ],
    [
        1,
        3,
        7,
        3,
        0
    ],
    [
        1,
        6,
        2,
        0,
        1
    ],
    [
        2,
        3,
        6,
        0,
        3
    ],
    [
        8,
        0,
        8,
        0,
        3
    ],
    [
        8,
        8,
        3,
        3,
        6
    ],
    [
        8,
        3,
        6,
        8,
        4
    ],
    [
        1,
        5,
        3,
        0,
        0
    ],
    [
        1,
        3,
        4,
        5,
        8
    ],
    [
        4,
        0,
        5,
        0,
        0
    ],
    [
        4,
        5,
        8,
        4,
        4
    ],
    [
        1,
        0,
        3,
        0,
        1
    ],
    [
        3,
        4,
        6,
        9,
        1
    ],
    [
        1,
        5,
        1,
        5,
        6
    ],
    [
        9,
        4,
        8,
        6,
        1
    ],
    [
        8,
        1,
        4,
        6,
        8
    ],
    [
        0,
        8,
        0,
        4,
        7
    ],
    [
        0,
        4,
        7,
        8,
        7
    ],
    [
        7,
        8,
        2,
        3,
        2
    ],
    [
        3,
        7,
        8,
        0,
        2
    ],
    [
        4,
        9,
        3,
        0,
        2
    ],
    [
        3,
        4,
        9,
        0,
        0
    ],
    [
        7,
        3,
        8,
        0,
        3
    ],
    [
        7,
        8,
        0,
        7,
        5
    ],
    [
        3,
        7,
        0,
        3,
        5
    ],
    [
        7,
        9,
        3,
        5,
        3
    ],
    [
        5,
        3,
        5,
        9,
        5
    ],
    [
        6,
        4,
        1,
        4,
        1
    ],
    [
        4,
        5,
        6,
        4,
        0
    ],
    [
        4,
        5,
        1,
        0,
        1
    ],
    [
        4,
        5,
        1,
        5,
        7
    ],
    [
        7,
        4,
        1,
        4,
        5
    ],
    [
        7,
        7,
        6,
        8,
        1
    ],
    [
        0,
        0,
        1,
        6,
        7
    ],
    [
        8,
        4,
        6,
        2,
        1
    ],
    [
        2,
        1,
        2,
        4,
        6
    ],
    [
        4,
        1,
        9,
        4,
        5
    ],
    [
        1,
        4,
        5,
        9,
        4
    ],
    [
        0,
        7,
        1,
        0,
        0
    ],
    [
        1,
        4,
        7,
        0,
        7
    ],
    [
        5,
        7,
        5,
        0,
        5
    ],
    [
        7,
        1,
        9,
        5,
        4
    ],
    [
        8,
        1,
        4,
        5,
        8
    ],
    [
        9,
        3,
        9,
        7,
        7
    ],
    [
        5,
        3,
        5,
        7,
        9
    ],
    [
        8,
        0,
        4,
        7,
        2
    ],
    [
        0,
        2,
        4,
        7,
        8
    ],
    [
        0,
        9,
        9,
        6,
        0
    ],
    [
        0,
        6,
        9,
        1,
        3
    ],
    [
        3,
        5,
        3,
        1,
        3
    ],
    [
        5,
        3,
        4,
        1,
        5
    ],
    [
        3,
        1,
        3,
        4,
        5
    ],
    [
        3,
        5,
        1,
        5,
        8
    ],
    [
        1,
        3,
        5,
        8,
        6
    ],
    [
        9,
        1,
        4,
        9,
        1
    ],
    [
        4,
        6,
        9,
        8,
        2
    ],
    [
        7,
        4,
        7,
        2,
        4
    ],
    [
        7,
        8,
        6,
        8,
        4
    ],
    [
        9,
        3,
        3,
        4,
        6
    ],
    [
        8,
        9,
        1,
        2,
        5
    ],
    [
        5,
        3,
        1,
        2,
        3
    ],
    [
        5,
        5,
        4,
        6,
        1
    ],
    [
        3,
        1,
        3,
        4,
        5
    ],
    [
        6,
        6,
        2,
        4,
        8
    ],
    [
        5,
        2,
        4,
        5,
        6
    ],
    [
        8,
        8,
        4,
        4,
        7
    ],
    [
        5,
        4,
        5,
        7,
        8
    ],
    [
        5,
        5,
        2,
        9,
        5
    ],
    [
        2,
        5,
        9,
        9,
        2
    ],
    [
        1,
        8,
        6,
        1,
        2
    ],
    [
        6,
        8,
        9,
        1,
        0
    ],
    [
        1,
        7,
        9,
        0,
        1
    ],
    [
        7,
        9,
        7,
        0,
        9
    ],
    [
        9,
        2,
        0,
        2,
        7
    ],
    [
        9,
        4,
        2,
        8,
        7
    ],
    [
        0,
        0,
        2,
        4,
        7
    ],
    [
        8,
        1,
        4,
        2,
        5
    ],
    [
        8,
        1,
        2,
        4,
        5
    ],
    [
        8,
        5,
        6,
        7,
        7
    ],
    [
        7,
        5,
        6,
        7,
        6
    ],
    [
        8,
        6,
        5,
        1,
        1
    ],
    [
        5,
        6,
        8,
        3,
        3
    ],
    [
        7,
        3,
        4,
        3,
        4
    ],
    [
        7,
        6,
        3,
        6,
        3
    ],
    [
        3,
        3,
        6,
        0,
        4
    ],
    [
        6,
        6,
        9,
        0,
        4
    ],
    [
        6,
        9,
        9,
        3,
        9
    ],
    [
        4,
        6,
        3,
        4,
        6
    ],
    [
        9,
        3,
        2,
        5,
        0
    ],
    [
        6,
        0,
        2,
        3,
        5
    ],
    [
        6,
        3,
        5,
        1,
        9
    ],
    [
        4,
        1,
        3,
        4,
        5
    ],
    [
        9,
        0,
        3,
        9,
        7
    ],
    [
        7,
        0,
        3,
        7,
        9
    ],
    [
        5,
        1,
        6,
        8,
        1
    ],
    [
        1,
        5,
        6,
        8,
        6
    ],
    [
        2,
        1,
        6,
        5,
        1
    ],
    [
        2,
        5,
        6,
        5,
        0
    ],
    [
        5,
        6,
        9,
        0,
        5
    ]
];

function analyzeDraw1(drawNumbers, whatToAnalyze) {
    const results = {
        smallBig: [], // Add an array to store detailed dragon-tiger-tie counts
    };

    let prevBigSmall;

    for (const element of drawNumbers) {
        const draw = element;

        let ball;

        ball = draw[parseInt(whatToAnalyze) - 1];

        let bigSmall = getBigSmallForBall(ball);

        // Update counts
        updateCount(bigSmall, results.smallBig, prevBigSmall);

        // Update prev values
        prevBigSmall = bigSmall;
    }

    return results;
}

function updateCount(value, results, prev) {
    if (prev === undefined || value !== prev) {
        results.push(1);
    } else {
        results[results.length - 1]++;
    }
}

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



// function getBigSmallForBall(ball) {
//   return ball >= 5 && ball <= 9 ? "big" : "small";
// }

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

function buildTree(drawNumbers, whatToAnalyze) {
    const tree = [];
    const analyzedResults = analyzeDraw(drawNumbers, whatToAnalyze).smallBig;
    // const analyzedResults1 = analyzeDraw(drawNumbers, whatToAnalyze).oddEven;
    // const analyzedResults2 = analyzeDraw(drawNumbers, whatToAnalyze).primeComposite;
    const previousValues = new Map();
    console.log(analyzedResults);
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
        console.log("row", row, "col", col, "currentLetter", currentLetter);
        newItem = [row, col, currentLetter];

        let duplicate = tree.some((item) => item[0] === newItem[0] && item[1] === newItem[1]);

        if (duplicate) {
            row--;
            col++;
            newItem = [row, col, currentLetter];
        }

        dua[(row + "|" + col)] = currentLetter
        tree.push(newItem);
    });

    console.log(previousValues);
    console.log(tree);
    return tree;
}
const trees = buildTree(drawNumbers, "2nd");

function analyzeDrawssdfsdf(drawNumbers, whatToAnalyze) {
    const results = {
        tree: [],
    };

    let x = 0;
    let y = 0;
    let trunkHeight = 0;

    for (const element of drawNumbers) {
        // Restart trunk height after it reaches 5
        if (trunkHeight >= 5) {
            x = 0;
            y = 0;
            trunkHeight = 0;
        }

        const draw = element;

        let ball;

        ball = draw[parseInt(whatToAnalyze) - 1];

        let bigSmall = getBigSmallForBall(ball);

        if (bigSmall === "B") {
            results.tree.push([x, y, "B"]);
            y++;
            trunkHeight++;
        } else {
            results.tree.push([x, y, "S"]);
        }

        x++;
    }

    return results;
}

analyzeDraw(drawNumbers, "2nd");
// console.log(analyzeDraw(drawNumbers, "2nd"));

// [5, 6, "S"],
// [5, 7, "S"],
// let bbb = [];

// let shouldAdd = tree.some((item) => {
//     // console.log(item)
//     return item[0] === newItem[0] && newItem[1] - item[1] === 1 && item[2] === newItem[2];

// });

// console.log("shouldAdd", shouldAdd);
// if (shouldAdd) {
//     // row++;
//     console.log("before ", newItem);

//     // row--;
//     col++;
//     newItem = [row, col, currentLetter];
//     console.log("after ",newItem);
// }
