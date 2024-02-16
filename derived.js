const drawNumbers5d = [
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
    [9, 3, 3, 5, 8],
    [9, 2, 2, 0, 8],
    [8, 0, 2, 8, 1],
    [9, 1, 1, 4, 1],
    [4, 9, 3, 4, 8],
    [6, 8, 3, 4, 6],
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
    // [8, 1, 4, 2, 5],
    // [8, 1, 4, 2, 5],
    // [8, 1, 4, 2, 5],
    // [8, 1, 4, 2, 5],
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
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    // [5, 6, 9, 0, 5],
    [3, 6, 9, 0, 5],
].reverse();


const drawNumbersPk = [
  [5, 6, 4, 7, 6, 6, 3, 5, 7, 6],
  [10, 10, 10, 9, 6, 10, 4, 3, 8, 5],
  [1, 5, 3, 1, 1, 5, 4, 4, 10, 2],
  [6, 4, 1, 7, 4, 1, 6, 7, 5, 7],
  [6, 9, 2, 6, 5, 5, 7, 10, 9, 9],
  [2, 8, 2, 7, 5, 4, 8, 3, 10, 5],
  [4, 6, 4, 5, 6, 8, 6, 3, 3, 5],
  [2, 7, 10, 6, 7, 3, 9, 5, 5, 7],
  [8, 10, 5, 5, 8, 3, 6, 5, 1, 8],
  [4, 1, 2, 5, 9, 8, 7, 1, 7, 3],
  [10, 9, 3, 7, 8, 1, 5, 4, 8, 8],
  [4, 9, 2, 1, 2, 6, 9, 9, 6, 2],
  [2, 2, 1, 8, 5, 9, 10, 1, 3, 7],
  [8, 7, 2, 2, 2, 5, 5, 10, 2, 9],
  [1, 9, 5, 7, 1, 3, 1, 2, 2, 3],
  [1, 7, 6, 4, 2, 5, 3, 3, 8, 9],
  [5, 5, 1, 3, 1, 3, 1, 2, 7, 1],
  [1, 5, 7, 8, 3, 3, 6, 7, 10, 2],
  [4, 2, 8, 6, 10, 4, 2, 10, 8, 6],
  [10, 10, 6, 2, 4, 1, 6, 8, 5, 3],
  [1, 9, 7, 3, 4, 1, 6, 5, 7, 3],
  [1, 8, 8, 9, 4, 1, 9, 9, 7, 9],
  [7, 4, 7, 1, 1, 10, 6, 2, 5, 7],
  [5, 3, 1, 9, 3, 8, 2, 3, 8, 7],
  [10, 5, 1, 9, 7, 6, 4, 6, 1, 8],
  [8, 6, 1, 8, 5, 8, 5, 2, 8, 6],
  [4, 5, 10, 1, 7, 6, 5, 1, 10, 9],
  [9, 8, 3, 10, 7, 5, 9, 6, 5, 5],
  [10, 10, 2, 5, 9, 4, 10, 2, 1, 3],
  [8, 10, 7, 6, 7, 9, 8, 8, 6, 9],
  [3, 8, 9, 7, 1, 2, 6, 2, 7, 6],
  [6, 10, 4, 7, 9, 1, 7, 2, 2, 5],
  [4, 10, 4, 10, 1, 3, 6, 10, 1, 5],
  [6, 4, 7, 9, 9, 7, 8, 6, 9, 7],
  [6, 5, 5, 6, 6, 8, 4, 10, 6, 8],
  [6, 10, 4, 7, 3, 6, 3, 9, 10, 10],
  [5, 10, 7, 8, 9, 2, 8, 2, 3, 7],
  [10, 8, 4, 3, 2, 6, 6, 5, 7, 3],
  [2, 3, 5, 3, 7, 9, 5, 7, 7, 4],
  [9, 2, 2, 8, 10, 9, 8, 6, 8, 3],
  [2, 5, 8, 2, 2, 7, 6, 7, 3, 7],
  [9, 2, 2, 8, 8, 8, 7, 8, 9, 10],
  [5, 7, 1, 6, 8, 10, 1, 3, 6, 9],
  [1, 1, 9, 1, 10, 9, 4, 1, 5, 1],
  [2, 9, 4, 7, 6, 4, 7, 3, 3, 7],
  [2, 8, 2, 6, 9, 6, 9, 3, 1, 4],
  [6, 8, 2, 3, 6, 2, 2, 10, 1, 8],
  [10, 1, 1, 1, 5, 6, 6, 7, 5, 7],
  [5, 3, 8, 7, 4, 7, 2, 2, 4, 5],
  [3, 10, 10, 10, 2, 6, 1, 3, 7, 4],
  [8, 1, 1, 5, 8, 9, 3, 9, 3, 4],
  [4, 5, 10, 3, 4, 8, 4, 3, 4, 1],
  [8, 3, 1, 1, 1, 9, 3, 10, 9, 5],
  [5, 1, 7, 4, 9, 9, 3, 10, 10, 5],
  [10, 10, 10, 8, 10, 10, 8, 9, 5, 3],
  [7, 6, 4, 3, 9, 4, 4, 2, 5, 2],
  [8, 5, 1, 1, 6, 3, 5, 2, 7, 4],
  [5, 4, 2, 2, 2, 7, 10, 10, 7, 8],
  [9, 1, 9, 7, 6, 10, 5, 1, 3, 2],
  [3, 5, 5, 3, 7, 4, 5, 9, 10, 2],
  [3, 4, 6, 4, 10, 10, 3, 4, 5, 7],
  [3, 4, 3, 10, 3, 7, 5, 1, 1, 1],
  [7, 5, 2, 7, 8, 2, 10, 3, 1, 7],
  [3, 6, 1, 8, 6, 9, 3, 2, 4, 6],
  [2, 5, 9, 3, 10, 6, 4, 2, 6, 10],
  [3, 8, 10, 6, 7, 3, 3, 2, 6, 2],
  [3, 7, 5, 7, 4, 10, 2, 5, 3, 4],
  [6, 2, 4, 7, 9, 6, 8, 2, 9, 8],
  [7, 2, 4, 5, 10, 1, 5, 10, 4, 7],
  [7, 2, 5, 8, 4, 6, 3, 7, 2, 4],
  [10, 3, 8, 9, 3, 10, 5, 2, 8, 1],
  [2, 3, 1, 9, 6, 6, 3, 2, 7, 8],
  [4, 2, 10, 8, 3, 9, 10, 5, 9, 2],
  [8, 6, 10, 5, 5, 8, 8, 10, 10, 10],
  [7, 6, 3, 6, 10, 4, 10, 7, 8, 6],
  [7, 9, 3, 6, 3, 5, 2, 2, 10, 7],
  [10, 7, 1, 1, 5, 6, 7, 7, 6, 6],
  [4, 8, 5, 8, 1, 10, 5, 2, 9, 10],
  [2, 5, 9, 7, 4, 5, 6, 9, 9, 9],
  [4, 8, 5, 5, 5, 2, 8, 8, 6, 7],
  [3, 2, 7, 3, 9, 2, 8, 8, 2, 7],
  [3, 2, 3, 9, 5, 6, 2, 4, 8, 6],
  [7, 10, 10, 5, 10, 8, 2, 4, 7, 8],
  [9, 4, 5, 1, 6, 8, 4, 9, 3, 3],
  [6, 2, 2, 5, 7, 6, 9, 4, 6, 5],
  [8, 8, 3, 6, 9, 6, 5, 2, 6, 2],
  [6, 4, 3, 9, 6, 10, 8, 3, 2, 2],
  [8, 10, 5, 4, 5, 7, 2, 9, 10, 1],
  [6, 10, 9, 8, 3, 10, 8, 2, 1, 4],
  [4, 9, 6, 5, 8, 9, 1, 3, 4, 4],
  [3, 4, 3, 1, 6, 7, 1, 6, 8, 5],
  [4, 9, 4, 1, 6, 5, 7, 1, 9, 1],
  [2, 9, 7, 5, 8, 4, 2, 10, 9, 6],
  [2, 2, 5, 8, 3, 10, 4, 10, 9, 3],
  [1, 7, 7, 2, 7, 9, 6, 6, 8, 3],
  [10, 5, 8, 9, 6, 7, 9, 7, 3, 3],
  [6, 4, 10, 5, 5, 2, 6, 6, 2, 5],
  [8, 5, 7, 3, 3, 10, 5, 2, 10, 8],
  [7, 1, 5, 8, 9, 6, 4, 10, 3, 2],
  [7, 5, 2, 1, 3, 7, 6, 3, 1, 7],
].reverse();

function getBigSmallForBallss(ball) {
  return ball >= 0 && ball <= 4 ? "S" : "B";
}

function analyzeDrawsss(drawNumbers, whatToAnalyze) {
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

function analyzeDraw(drawNumbers, whatToAnalyze, lottery_id = 1) {
  // const results = {
  //     "Big/Small": [], // Add an array to store detailed dragon-tiger-tie counts
  //     "Odd/Even": [], // Add an array to store detailed
  //     "P/C": [],
  //     "D/T": [],
  // };
  const results = {
    1: {
      "Big/Small": [],
      "Odd/Even": [],
      "P/C": [],
      "Dragon/Tiger": [],
    },
    2: {
      "Big/Small": [],
      "Odd/Even": [],
      "Dragon/Tiger": [],
    },
    3: {
      "Big/Small": [],
    },
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
    results[lottery_id]["Big/Small"].push(bigSmall);
    results[lottery_id]["Odd/Even"].push(oddEven);
    results[lottery_id]["P/C"].push(primeComposite);
    results[lottery_id]["Dragon/Tiger"].push(dragonTiger);
  }

  console.log(results["Dragon/Tiger"]);
  // console.log("results",results["D/T"])
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
  B: "S",
  S: "B",
  P: "C",
  C: "P",
  O: "E",
  E: "O",
};
function buildTree(drawNumbers, whatToAnalyze, type) {
  const tree = [];
  console.log(type, whatToAnalyze);
  const analyzedResults = analyzeDraw(drawNumbers, whatToAnalyze)[type];
  console.log(analyzedResults);
  return;

  let percentage = countOccurrences(analyzedResults, type);

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
  const img = transpose(analyzedResults);
  console.log("analy", img);
  img["newArr"].forEach((value, i) => {
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
    // console.log("row", row, "col", col, "currentLetter", currentLetter);

    let duplicate = tree.some(
      (item) => item[0] === newItem[0] && item[1] === newItem[1]
    );

    if (duplicate) {
      row--;
      col++;
      newItem = [row, col, currentLetter];
    }

    dua[row + "|" + col] = currentLetter;
    // newItem = [row, col, img["indexOfA"].includes(i) ? "A" : currentLetter];

    // generateDerivedRoadColors(tree, whenColIncreaseByMaxRows, { bigEyeBoyArr, smallRoadArr, cockcroachArr, bigEyeRoadObj });
    tree.push(newItem);

    derivedRoad(tree, whenColIncreaseByMaxRows, {
      bigEyeBoyArr,
      smallRoadArr,
      cockcroachArr,
      bigEyeRoadObj,
    });
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

function buildDragonTigerTreed(drawNumbers, whatToAnalyze, type) {
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

function transpose(arr) {
  let newArr = [];
  let indexOfA = [];

  let previousLetter;
  let dCount = 0;
  let tCount = 0;
  let _aCount = 0;

  let lastNonA = null;
  for (let i = 0; i < arr.length; i++) {
    let nextLetter = arr[i + 1];

    if (arr[i] === "D" || arr[i] === "T") {
      lastNonA = arr[i];
    }
    //  else if (arr[i] === "T") {
    //   tCount++;
    // }

    if (nextLetter === "A" && arr[i] !== "A") {
      previousLetter = arr[i];
    }

    if (arr[i] === "A") {
      indexOfA.push(i);
      newArr.push(previousLetter);
    } else {
      newArr.push(lastNonA);
    }
  }

  console.log(newArr);
  console.log(indexOfA);

  return { newArr, indexOfA };
}

const timerStart = performance.now();
buildTree(drawNumbers, "sum", "D/T");
const timerEnd = performance.now();

function buildDerivedRoadTree(road) {
  const tree = [];
  const roadLength = road.length;
  let row = 0;
  let col = 0;
  let whenColIncreaseByMaxRows = 0;
  const dua = new Map();
  const visited = new Set();

  for (let i = 0; i < roadLength; i++) {
    const previousLetter = road[i - 1];
    const currentLetter = road[i];
    const nextLetter = road[i + 1];

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
      if (row > 5) {
        row = 5;
        col++;
      }
      const prevCol = col - 1;
      const prev = dua.get(row + "|" + prevCol);

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

    const newItem = [row, col, currentLetter];

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
  }

  return tree;
}

// let obj = {};

// const card = ["sum"]//["1st"]//, "2nd", "3rd", "4th", "5th", "sum"]
// const activePlaceCheckBox = ["Big/Small"]//, "Odd/Even", "P/C"]

// const timerStart = performance.now()

// card.forEach((card) => {
//     activePlaceCheckBox.forEach((form) => {
//         const trees = buildTree(drawNumbers, card, form);
//         obj[form + "|" + card] = trees;
//     });
// });

// const timerEnd = performance.now()

console.log(`Execution time: ${timerEnd - timerStart}`);
// console.log(obj);

function derivedRoad(
  tree,
  col,
  { bigEyeBoyArr, smallRoadArr, cockcroachArr, bigEyeRoadObj }
) {
  let getLastArrayWithCol2Var = getLastArrayWithCol2(tree, col); // "B"
  let currentLetterCurrentCol = getLastArrayWithCol2Var[2];
  let nextLetterToBreakColumn = check[getLastArrayWithCol2Var[2]]; // "S"

  // console.log(currentLetterCurrentCol, nextLetterToBreakColumn, getLastArrayWithCol2Var)

  let letter = (val) => (val === "R" ? "R" : "B");
  // let bigEyeRoadObj = {}
  let smallRoadObj = {};
  let cockroachObj = {};
  let updatedBigEyeRoadObj = { ...bigEyeRoadObj };
  let bigEyeBoy = getLastArrayWithCol2(tree, col - 1);
  let smallRoad = getLastArrayWithCol2(tree, col - 2);
  let cockroach = getLastArrayWithCol2(tree, col - 3);

  // console.log("storedNextLexter", Object.keys(bigEyeRoadObj)[0], "curr",  currentLetterCurrentCol, "next", nextLetterToBreakColumn, Object.keys(bigEyeRoadObj)[0] === currentLetterCurrentCol)

  if (
    bigEyeRoadObj !== undefined &&
    Object.keys(bigEyeRoadObj)[0] === currentLetterCurrentCol
  ) {
    bigEyeBoyArr.push(bigEyeRoadObj[nextLetterToBreakColumn]);
  } else {
    bigEyeBoyArr.push(letter(bigEyeRoadObj[nextLetterToBreakColumn]));
  }

  if (getLastArrayWithCol2Var !== null && bigEyeBoy !== null) {
    if (bigEyeBoy !== null && getLastArrayWithCol2Var[0] === bigEyeBoy[0]) {
      if (Object.keys(bigEyeRoadObj).length === 0) {
        bigEyeRoadObj[nextLetterToBreakColumn] = "R";
      } else {
        Object.keys(bigEyeRoadObj).forEach((k) => delete bigEyeRoadObj[k]);

        bigEyeRoadObj[nextLetterToBreakColumn] = "R";
      }
    } else {
      if (Object.keys(bigEyeRoadObj).length === 0) {
        bigEyeRoadObj[nextLetterToBreakColumn] = "B";
      } else {
        Object.keys(bigEyeRoadObj).forEach((k) => delete bigEyeRoadObj[k]);

        bigEyeRoadObj[nextLetterToBreakColumn] = "B";
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
// OLD IMPLEMENTATION
// function buildDerivedRoadTree(road) {
//     const tree = [];
//     let row = 0;
//     let col = 0;
//     let whenColIncreaseByMaxRows = 0;
//     let dua = {};

//     road.forEach((value, i) => {
//         let previousLetter = road[i - 1];
//         let currentLetter = road[i];
//         let nextLetter = road[i + 1];
//         let newItem = [];

//         if (currentLetter !== previousLetter) {
//             col = whenColIncreaseByMaxRows;
//         }
//         if (previousLetter !== undefined && currentLetter !== previousLetter) {
//             row = 0;
//             col++;
//             if (row === 0) {
//                 whenColIncreaseByMaxRows = col;
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
//         }

//         if (row > 5) {
//             row = 5;
//             col++;
//         }
//         // console.log("row", row, "col", col, "currentLetter", currentLetter);
//         newItem = [row, col, currentLetter];

//         let duplicate = tree.some((item) => item[0] === newItem[0] && item[1] === newItem[1]);

//         if (duplicate) {
//             row--;
//             col++;
//             newItem = [row, col, currentLetter];
//         }

//         dua[row + "|" + col] = currentLetter;

//         tree.push(newItem);

//         // console.log(JSON.stringify(tree));
//         // console.log(whenColIncreaseByMaxRows);

//         // console.log(result); // [5, 2, "S"]
//     });

//     // console.log(tree);
//     return tree;
// }
