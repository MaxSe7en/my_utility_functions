// const results = new Map();
// results.set(1, {
//   "Big/Small": [], // Add an array to store detailed dragon-tiger-tie counts
//   "Odd/Even": [], // Add an array to store detailed
//   "P/C": [],
//   "Dragon/Tiger": [],
// });
// results.set(2, {
//   "Big/Small": [],
//   "Odd/Even": [],
//   "Dragon/Tiger": [],
// });
// results.set(3, {
//     "Big/Small": []
// });

const drawNumbers5d = [
  //   [2, 1, 2, 4, 6],
  //   [4, 1, 9, 4, 5],
  //   [1, 4, 5, 9, 4],
  //   [0, 7, 1, 0, 0],
  //   [1, 4, 7, 0, 7],
  //   [5, 7, 5, 0, 5],
  //   [7, 1, 9, 5, 4],
  //   [8, 1, 4, 5, 8],
  //   [9, 3, 9, 7, 7],
  //   [5, 3, 5, 7, 9],
  //   [8, 0, 4, 7, 2],
  //   [0, 2, 4, 7, 8],
  //   [0, 9, 9, 6, 0],
  //   [0, 6, 9, 1, 3],
  //   [3, 5, 3, 1, 3],
  //   [5, 3, 4, 1, 5],
  //   [3, 1, 3, 4, 5],
  //   [3, 5, 1, 5, 8],
  //   [1, 3, 5, 8, 6],
  //   [9, 1, 4, 9, 1],
  //   [4, 6, 9, 8, 2],
  //   [7, 4, 7, 2, 4],
  //   [7, 8, 6, 8, 4],
  //   [9, 3, 3, 4, 6],
  //   [8, 9, 1, 2, 5],
  //   [5, 3, 1, 2, 3],
  //   [5, 5, 4, 6, 1],
  //   [3, 1, 3, 4, 5],
  //   [6, 6, 2, 4, 8],
  //   [5, 2, 4, 5, 6],
  //   [8, 8, 4, 4, 7],
  //   [5, 4, 5, 7, 8],
  //   [5, 5, 2, 9, 5],
  //   [2, 5, 9, 9, 2],
  //   [1, 8, 6, 1, 2],
  //   [6, 8, 9, 1, 0],
  //   [1, 7, 9, 0, 1],
  //   [7, 9, 7, 0, 9],
  //   [9, 2, 0, 2, 7],
  //   [9, 4, 2, 8, 7],
  //   [0, 0, 2, 4, 7],
  //   [8, 1, 4, 2, 5],
  //   [8, 1, 4, 2, 5],
  //   [8, 1, 4, 2, 5],
  //   [8, 1, 4, 2, 5],
  //   [8, 1, 4, 2, 5],
  //   [8, 1, 4, 2, 5],
  //   [8, 1, 2, 4, 5],
  //   [8, 5, 6, 7, 7],
  //   [7, 5, 6, 7, 6],
  //   [8, 6, 5, 1, 1],
  //   [5, 6, 8, 3, 3],
  //   [7, 3, 4, 3, 4],
  //   [7, 6, 3, 6, 3],
  //   [3, 3, 6, 0, 4],
  //   [6, 6, 9, 0, 4],
  //   [6, 9, 9, 3, 9],
  //   [4, 6, 3, 4, 6],
  //   [9, 3, 2, 5, 0],
  //   [6, 0, 2, 3, 5],
  //   [6, 3, 5, 1, 9],
  //   [4, 1, 3, 4, 5],
  //   [9, 0, 3, 9, 7],
  //   [7, 0, 3, 7, 9],
  //   [5, 1, 6, 8, 1],
  //   [1, 5, 6, 8, 6],
  //   [2, 1, 6, 5, 1],
  //   [2, 5, 6, 5, 0],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 7, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 9, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  //   [5, 6, 9, 0, 5],
  [5, 6, 9, 0, 5],
  [1, 6, 9, 0, 3],
  [5, 6, 9, 9, 5],
  [5, 1, 3, 0, 5],
  [5, 6, 9, 0, 5],
  [5, 6, 9, 0, 5],
  [5, 6, 9, 0, 5],
  [5, 6, 9, 0, 0],
  [5, 2, 9, 0, 5],
  [5, 6, 9, 0, 5],
  [3, 6, 9, 7, 5],
].reverse();

const drawNumbersPk10 = [
  //   [5, 6, 4, 7, 6, 6, 3, 5, 7, 6],
  //   [10, 10, 10, 9, 6, 10, 4, 3, 8, 5],
  //   [1, 5, 3, 1, 1, 5, 4, 4, 10, 2],
  //   [6, 4, 1, 7, 4, 1, 6, 7, 5, 7],
  //   [6, 9, 2, 6, 5, 5, 7, 10, 9, 9],
  //   [2, 8, 2, 7, 5, 4, 8, 3, 10, 5],
  //   [4, 6, 4, 5, 6, 8, 6, 3, 3, 5],
  //   [2, 7, 10, 6, 7, 3, 9, 5, 5, 7],
  //   [8, 10, 5, 5, 8, 3, 6, 5, 1, 8],
  //   [4, 1, 2, 5, 9, 8, 7, 1, 7, 3],
  //   [10, 9, 3, 7, 8, 1, 5, 4, 8, 8],
  //   [4, 9, 2, 1, 2, 6, 9, 9, 6, 2],
  //   [2, 2, 1, 8, 5, 9, 10, 1, 3, 7],
  //   [8, 7, 2, 2, 2, 5, 5, 10, 2, 9],
  //   [1, 9, 5, 7, 1, 3, 1, 2, 2, 3],
  //   [1, 7, 6, 4, 2, 5, 3, 3, 8, 9],
  //   [5, 5, 1, 3, 1, 3, 1, 2, 7, 1],
  //   [1, 5, 7, 8, 3, 3, 6, 7, 10, 2],
  //   [4, 2, 8, 6, 10, 4, 2, 10, 8, 6],
  //   [10, 10, 6, 2, 4, 1, 6, 8, 5, 3],
  //   [1, 9, 7, 3, 4, 1, 6, 5, 7, 3],
  //   [1, 8, 8, 9, 4, 1, 9, 9, 7, 9],
  //   [7, 4, 7, 1, 1, 10, 6, 2, 5, 7],
  //   [5, 3, 1, 9, 3, 8, 2, 3, 8, 7],
  //   [10, 5, 1, 9, 7, 6, 4, 6, 1, 8],
  //   [8, 6, 1, 8, 5, 8, 5, 2, 8, 6],
  //   [4, 5, 10, 1, 7, 6, 5, 1, 10, 9],
  //   [9, 8, 3, 10, 7, 5, 9, 6, 5, 5],
  //   [10, 10, 2, 5, 9, 4, 10, 2, 1, 3],
  //   [8, 10, 7, 6, 7, 9, 8, 8, 6, 9],
  //   [3, 8, 9, 7, 1, 2, 6, 2, 7, 6],
  //   [6, 10, 4, 7, 9, 1, 7, 2, 2, 5],
  //   [4, 10, 4, 10, 1, 3, 6, 10, 1, 5],
  //   [6, 4, 7, 9, 9, 7, 8, 6, 9, 7],
  //   [6, 5, 5, 6, 6, 8, 4, 10, 6, 8],
  //   [6, 10, 4, 7, 3, 6, 3, 9, 10, 10],
  //   [5, 10, 7, 8, 9, 2, 8, 2, 3, 7],
  //   [10, 8, 4, 3, 2, 6, 6, 5, 7, 3],
  //   [2, 3, 5, 3, 7, 9, 5, 7, 7, 4],
  //   [9, 2, 2, 8, 10, 9, 8, 6, 8, 3],
  //   [2, 5, 8, 2, 2, 7, 6, 7, 3, 7],
  //   [9, 2, 2, 8, 8, 8, 7, 8, 9, 10],
  //   [5, 7, 1, 6, 8, 10, 1, 3, 6, 9],
  //   [1, 1, 9, 1, 10, 9, 4, 1, 5, 1],
  //   [2, 9, 4, 7, 6, 4, 7, 3, 3, 7],
  //   [2, 8, 2, 6, 9, 6, 9, 3, 1, 4],
  //   [6, 8, 2, 3, 6, 2, 2, 10, 1, 8],
  //   [10, 1, 1, 1, 5, 6, 6, 7, 5, 7],
  //   [5, 3, 8, 7, 4, 7, 2, 2, 4, 5],
  //   [3, 10, 10, 10, 2, 6, 1, 3, 7, 4],
  //   [8, 1, 1, 5, 8, 9, 3, 9, 3, 4],
  //   [4, 5, 10, 3, 4, 8, 4, 3, 4, 1],
  //   [8, 3, 1, 1, 1, 9, 3, 10, 9, 5],
  //   [5, 1, 7, 4, 9, 9, 3, 10, 10, 5],
  //   [10, 10, 10, 8, 10, 10, 8, 9, 5, 3],
  //   [7, 6, 4, 3, 9, 4, 4, 2, 5, 2],
  //   [8, 5, 1, 1, 6, 3, 5, 2, 7, 4],
  //   [5, 4, 2, 2, 2, 7, 10, 10, 7, 8],
  //   [9, 1, 9, 7, 6, 10, 5, 1, 3, 2],
  //   [3, 5, 5, 3, 7, 4, 5, 9, 10, 2],
  //   [3, 4, 6, 4, 10, 10, 3, 4, 5, 7],
  //   [3, 4, 3, 10, 3, 7, 5, 1, 1, 1],
  //   [7, 5, 2, 7, 8, 2, 10, 3, 1, 7],
  //   [3, 6, 1, 8, 6, 9, 3, 2, 4, 6],
  //   [2, 5, 9, 3, 10, 6, 4, 2, 6, 10],
  //   [3, 8, 10, 6, 7, 3, 3, 2, 6, 2],
  //   [3, 7, 5, 7, 4, 10, 2, 5, 3, 4],
  //   [6, 2, 4, 7, 9, 6, 8, 2, 9, 8],
  //   [7, 2, 4, 5, 10, 1, 5, 10, 4, 7],
  //   [7, 2, 5, 8, 4, 6, 3, 7, 2, 4],
  //   [10, 3, 8, 9, 3, 10, 5, 2, 8, 1],
  //   [2, 3, 1, 9, 6, 6, 3, 2, 7, 8],
  //   [4, 2, 10, 8, 3, 9, 10, 5, 9, 2],
  //   [8, 6, 10, 5, 5, 8, 8, 10, 10, 10],
  //   [7, 6, 3, 6, 10, 4, 10, 7, 8, 6],
  //   [7, 9, 3, 6, 3, 5, 2, 2, 10, 7],
  //   [10, 7, 1, 1, 5, 6, 7, 7, 6, 6],
  //   [4, 8, 5, 8, 1, 10, 5, 2, 9, 10],
  //   [2, 5, 9, 7, 4, 5, 6, 9, 9, 9],
  //   [4, 8, 5, 5, 5, 2, 8, 8, 6, 7],
  //   [3, 2, 7, 3, 9, 2, 8, 8, 2, 7],
  //   [3, 2, 3, 9, 5, 6, 2, 4, 8, 6],
  //   [7, 10, 10, 5, 10, 8, 2, 4, 7, 8],
  //   [9, 4, 5, 1, 6, 8, 4, 9, 3, 3],
  //   [6, 2, 2, 5, 7, 6, 9, 4, 6, 5],
  //   [8, 8, 3, 6, 9, 6, 5, 2, 6, 2],
  //   [6, 4, 3, 9, 6, 10, 8, 3, 2, 2],
  //   [8, 10, 5, 4, 5, 7, 2, 9, 10, 1],
  //   [6, 10, 9, 8, 3, 10, 8, 2, 1, 4],
  //   [4, 9, 6, 5, 8, 9, 1, 3, 4, 4],
  //   [3, 4, 3, 1, 6, 7, 1, 6, 8, 5],
  //   [4, 9, 4, 1, 6, 5, 7, 1, 9, 1],
  //   [2, 9, 7, 5, 8, 4, 2, 10, 9, 6],
  //   [2, 2, 5, 8, 3, 10, 4, 10, 9, 3],
  //   [1, 7, 7, 2, 7, 9, 6, 6, 8, 3],
  //   [10, 5, 8, 9, 6, 7, 9, 7, 3, 3],
  //   [6, 4, 10, 5, 5, 2, 6, 6, 2, 5],
  //   [8, 5, 7, 3, 3, 10, 5, 2, 10, 8],
  //   [7, 1, 5, 8, 9, 6, 4, 10, 3, 2],
  //   [7, 5, 2, 1, 3, 7, 6, 3, 1, 7],
  [3, 2, 9, 6, 7, 1, 5, 4, 8, 10],
  [3, 2, 9, 6, 7, 1, 5, 4, 8, 10],
  [3, 10, 4, 7, 9, 2, 8, 6, 1, 5],
  [4, 3, 5, 8, 2, 1, 6, 9, 10, 7],
  [4, 9, 3, 6, 10, 7, 1, 5, 2, 8],
  [4, 9, 3, 6, 10, 7, 1, 5, 2, 8],
  [5, 3, 7, 4, 6, 10, 1, 8, 2, 9],
  [8, 2, 4, 5, 9, 6, 7, 3, 10, 1],
].reverse();

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

function getFormBigSmall(number, range) {
  const num = parseInt(number, 10);
  return num >= range[0] && num <= range[1] ? "B" : "S";
}

function getFormOddEven(number) {
  const num = parseInt(number, 10);
  return num % 2 === 0 ? "E" : "O";
}

function getFormPrimeComposite(num) {
  // Convert the input to a number
  const numericNum = parseInt(num, 10);

  if (isNaN(numericNum) || numericNum <= 1) {
    return "C"; // Invalid input or numbers less than or equal to 1 are not prime
  }

  for (let i = 2; i <= Math.sqrt(numericNum); i++) {
    if (numericNum % i === 0) {
      return "C"; // It has a divisor other than 1 and itself, so it's composite
    }
  }

  return "P"; // It doesn't have any divisors other than 1 and itself, so it's prime
}

function getFormDragonTiger(ballsToCompareArr, putAny) {
  const ballsToCompare = ballsToCompareArr.map((ball) => parseInt(ball, 10));
  if (ballsToCompare[0] > ballsToCompare[1]) {
    return "D";
  } else if (ballsToCompare[0] < ballsToCompare[1]) {
    return "T";
  } else {
    return "A";
  }
}

// 5D PK10 FAST3 3D 11x5 Mark6 Happy8
function fnSelector(drawNumbers, whatToAnalyze, lotteryId) {
  const lotteryIdFn = {
    1: analyze5dDraw,
    2: analyzePK10Draw,
    5: analyzeFast3Draw,
    3: analyze3dDraw,
    6: analyze11x5Draw,
    8: analyzeMark6Draw,
    10: analyzeHappy8Draw,
  };

  if (lotteryIdFn.hasOwnProperty(lotteryId)) {
    return lotteryIdFn[lotteryId](drawNumbers, whatToAnalyze);
  } else {
    return "Invalid lotteryId";
  }
}

function formsAnalyzer(form, num, putAny) {
  const formFn = {
    "Big/Small": getFormBigSmall,
    "Odd/Even": getFormOddEven,
    "P/C": getFormPrimeComposite,
    "Dragon/Tiger": getFormDragonTiger,
  };
  if (formFn.hasOwnProperty(form)) {
    return formFn[form](num, putAny);
  } else {
    return "Invalid form";
  }
}

function analyze5dDraw(drawNumbers, place, form) {
  const results = {
    "Big/Small": [],
    "Odd/Even": [],
    "P/C": [],
    "Dragon/Tiger": [],
  };

  let ball;

  for (const drawNum of drawNumbers) {
    if (place === "sum") {
      ball = drawNum.reduce((a, b) => a + b, 0);
      results[form].push(formsAnalyzer(form, ball, [23, 45]));
      // console.log(ball, "ball");
    } else {
      ball = drawNum[parseInt(place) - 1];
      results[form].push(formsAnalyzer(form, ball));
    }
  }

  return results;
}

//drawNumbers eg [[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10]] i.e. numbers from 1 and 10
function analyzePK10Draw(drawNumbers, place, form) {
  const results = {
    "Big/Small": [],
    "Odd/Even": [],
    "Dragon/Tiger": [],
  };

  let ball;
  for (const drawNum of drawNumbers) {
    if (place === "sumoftop2") {
      ball = drawNum[0] + drawNum[1];
      //   console.log(ball, "ball");
      results[form].push(formsAnalyzer(form, ball, [11, 19]));
    } else {
      if (parseInt(place[0]) > 5 && form == "Dragon/Tiger") return results;

      ball = drawNum[parseInt(place) - 1];
      console.log(place[0], "ball");
      if (form !== "Dragon/Tiger") {
        results[form].push(formsAnalyzer(form, ball, [6, 10]));
      } else {
        results["Dragon/Tiger"].push(
          formsAnalyzer(
            "Dragon/Tiger",
            pk10DTDrawNumberCutter(ball.toString(), drawNum)
          )
        );
      }
    }
  }

  return results;
}

function pk10DTDrawNumberCutter(place, drawNum) {
  switch (place) {
    case "1":
      return [drawNum.at(0), drawNum.at(9)];
    case "2":
      return [drawNum.at(1), drawNum.at(8)];
    case "3":
      return [drawNum.at(2), drawNum.at(7)];
    case "4":
      return [drawNum.at(3), drawNum.at(6)];
    case "5":
      return [drawNum.at(4), drawNum.at(5)];
    default:
      return [];
  }
}

//drawNumbers eg [[1,2,5],[1,2,3], [4,2,3]]//numbers between 1 and 6
function analyzeFast3Draw(drawNumbers, whatToAnalyze) {
  const results = {
    "Big/Small": [],
  };

  results["Big/Small"] = drawNumbers.map((number) => (number > 3 ? "B" : "S"));
  return results;
}

// console.log(analyze5dDraw(drawNumbers5d, "sum", "Big/Small"));
// console.log(analyze5dDraw(drawNumbers5d, "sum", "Odd/Even"));
// console.log(analyze5dDraw(drawNumbers5d, "sum", "P/C"));
// console.log(analyze5dDraw(drawNumbers5d, "sum", "Big/Small"));
// console.log(analyze5dDraw(drawNumbers5d, "1st", "Big/Small"));

// console.log(analyzePK10Draw(drawNumbersPk10, "sumoftop2", "Big/Small"));
// console.log(analyzePK10Draw(drawNumbersPk10, "sumoftop2", "Odd/Even"));
// // console.log(analyzePK10Draw(drawNumbersPk10, "sumoftop2", "Dragon/Tiger"));
// console.log(analyzePK10Draw(drawNumbersPk10, "1st", "Big/Small"));
// console.log(analyzePK10Draw(drawNumbersPk10, "1st", "Odd/Even"));
// console.log(analyzePK10Draw(drawNumbersPk10, "1st", "Dragon/Tiger"));
console.log(analyzePK10Draw(drawNumbersPk10, "6th", "Dragon/Tiger"));
console.log(analyzePK10Draw(drawNumbersPk10, "6th", "Big/Small"));
