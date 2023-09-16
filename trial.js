const drawNumbers = [
    [5, 2, 3, 7, 5],
    [5, 7, 3, 7, 5],
    [5, 2, 3, 7, 5],
    [1, 2, 3, 4, 6],
    [1, 2, 3, 5, 6],
    [6, 2, 4, 6, 6],
    [6, 2, 4, 6, 6],
    [1, 3, 4, 5, 6],
    [2, 3, 4, 6, 6],
    [9, 2, 4, 6, 6],
    [9, 3, 4, 5, 6],
    [4, 0, 4, 5, 1],
    [9, 7, 5, 5, 6],
    [9, 9, 4, 8, 6],
    [8, 3, 5, 5, 6],
    [9, 3, 5, 5, 2],
    [6, 3, 5, 5, 6],
    [9, 3, 5, 5, 6],
    [9, 3, 5, 5, 6],
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
    return ball >= 0 && ball <= 4 ? "small" : "big";
}

function getBigSmallForBall(ball) {
    return ball >= 0 && ball <= 4 ? "S" : "B";
}
function analyzeDraw(drawNumbers, whatToAnalyze) {
    const results = {
        smallBig: [], // Add an array to store detailed dragon-tiger-tie counts
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
// function analyzeDraw(drawNumbers, whatToAnalyze) {

//     const results = {
//         tree: []
//     };

//     let x = 0;
//     let y = 1;
//     let trunkHeight = 0;

//     let prevType;

//     for (const element of drawNumbers) {

//         const draw = element;

//         const ball = draw[parseInt(whatToAnalyze) - 1];

//         const type = getBigSmallForBall(ball);
//         console.log("type", type, "prevType", prevType)
//         if (prevType === undefined) {
//             y = 0;
//         } else if (prevType !== type) {
//             // Transition - increment x
//             x++;
//         }

//         if (type === "B") {
//             console.log("B", x, y)
//             y++;
//             results.tree.push([x, y, "B"]);
//             trunkHeight++;
//         } else {

//             results.tree.push([x, y, "S"]);
//         }

//         prevType = type;

//     }

//     return results;

// }
const tree = [
    [0, 0, "S"],
    [1, 0, "S"],
    [2, 0, "S"],
    [3, 0, "S"],
    [0, 1, "B"],
    [1, 1, "B"],
    [2, 1, "B"],
    [3, 1, "B"],
    [4, 1, "B"],
    [5, 1, "B"],
    [6, 1, "B"],//START BRANCHING
    [6, 2, "B"],
    [6, 3, "B"],
    [0, 2, "S"],
    [1, 2, "S"],
    [2, 2, "S"],
    [3, 2, "S"],
    [4, 2, "S"],
    [5, 2, "S"],
    [5, 3, "S"],
    [5, 4, "S"],
    [6, 4, "S"],
    [0, 3, "B"],
    [1, 3, "B"],
    [2, 3, "B"],
    [3, 3, "B"],
    [4, 3, "B"],
    [4, 4, "B"],
    [4, 5, "B"],
    [5, 5, "B"],
    [6, 5, "B"],
    [6, 6, "B"],
    [6, 7, "B"],
    [6, 8, "B"],
    [0, 4, "S"],
    [1, 4, "S"],
    [2, 4, "S"],
    [3, 4, "S"],
    [3, 5, "S"],
    [3, 6, "S"],
    [4, 6, "S"],
    [5, 6, "S"],
    [5, 7, "S"],
  ]

function buildTree(drawNumbers, whatToAnalyze) {
  const tree = [];
  const analyzedResults = analyzeDraw(drawNumbers, whatToAnalyze).smallBig;

  let row = 0;
  let col = 0;

    console.log(analyzedResults)

    analyzedResults.forEach((value, i) => {
        let previousLetter = analyzedResults[i - 1];
        let currentLetter = analyzedResults[i];
        let nextLetter = analyzedResults[i + 1];

        console.log("currentLetter", currentLetter,  "previousLetter", previousLetter, "nextLetter", nextLetter);
        if(previousLetter != undefined && currentLetter !== previousLetter){
            
            row = 0;
            col++;
            console.log("switching", )
        }
        if(currentLetter === previousLetter){
            row++;
        }
        if(row > 5){
            //I want to keep the row constant and increment the col

            
        }
        // row ++;
        tree.push([row, col, currentLetter]);
    })

console.log(tree)
//   analyzedResults.forEach((value, i) => {
//     let prevValue = analyzedResults[i - 1];
//     console.log("value", value);
//     console.log("prevValue", prevValue);
//     tree.push([row, col, value]);

//     if (prevValue === undefined) {
//       // continue
//     }
//     if (value !== prevValue) {
//       col++;
//       row = 0;
//     }
//     if (value === prevValue) {
//       // col = 0;
//       row++;
//     }

//     if (row > 5) {
//         let lastRow = tree[tree.length - 1][0];
//         console.log("lastRow", lastRow);
//         col ++;
//     //   row= row;
//     }
//     // if (value !== prevValue) {
//     //   col++;
//     //   //   prevValue = value;
//     // } else if (value === prevValue) {
//     //   console.log("value not equal");
//     //   col = 0;
//     //   row++;
//     //   //   prevValue = value;
//     // }
//     // console.log("col ================>",col);

//     // if (col === 6) {
//     //   col = 0;
//     //   row++;
//     // }
//   });
  return tree;
}
const trees = buildTree(drawNumbers, "2nd");
// console.log(trees);

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
