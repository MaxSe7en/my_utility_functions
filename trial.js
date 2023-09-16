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

function getBigSmallForBall(ball) {
  return ball >= 0 && ball <= 4 ? "small" : "big";
}

const drawNumbers = [
  [5, 2, 3, 7, 5],
  [5, 2, 3, 7, 5],
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
  [9, 3, 5, 5, 6],
  [9, 4, 4, 8, 6],
  [8, 3, 5, 5, 6],
  [9, 3, 5, 5, 2],
  [6, 3, 5, 5, 6],
  [9, 3, 5, 5, 6],
  [9, 3, 5, 5, 6],
];

console.log(analyzeDraw(drawNumbers, "1st"));
