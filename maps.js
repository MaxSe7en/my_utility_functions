// // const _map = new Map([
// //   ["T", 1],
// //   ["T12", 1],
// //   ["T13", 2],
// //   ["D21", 1],
// //   ["D34", 1],
// //   ["T37", 1],
// //   ["D40", 1],
// //   ["T51", 1],
// //   ["D54", 1],
// //   ["D58", 1],
// //   ["D60", 1],
// //   ["D61", 2],
// //   ["T72", 1],
// //   ["T81", 1],
// //   ["D89", 1],
// //   ["D95", 1],
// //   ["D97", 1],
// // ]);
// // const keys = Array.from(_map.keys());
// // console.log(keys);
// const ob = {
//     "T": 1,
//     "T12": 1,
//     "T13": 2,
//     "D21": 1,
//     "D34": 1,
//     "T37": 1,
//     "D40": 1,
//     "T51": 1,
//     "D54": 1,
//     "D58": 1,
//     "D60": 1,
//     "D61": 2,
//     "T72": 1,
//     "T81": 1,
//     "D89": 1,
//     "D95": 1,
//     "D97": 1
// }
// function getLetter(object) {
//     const result = {};
//   Object.keys(object).forEach((key) => {
//     // console.log(key.charAt(0) , object[key]);
//     const letter = key.charAt(0);
//     // result[letter] = object[key];
//   });
//   return result;
// }
// console.log(Object.keys(ob).map((key) => key.charAt(0)))
// // Object.keys(object).forEach((key) =>
// //      key.charAt(0)
// //   )

// getLetter(ob)
// // console.log("tt",Object.keys(_map))
// // console.log("tt",_map.keys())

function findFirstNonA(arr) {
  let char = "";
  for (let i = 0; i < arr.length; i++) {
    char = arr[i];
    if (char !== "A") {
      return char;
    }
  }
}

function getPrecedingAs(arr) {
  const result = [];
  let i = 0;

  // Keep going until we find a non-'A'
  while (i < arr.length && arr[i] === "A") {
    result.push(arr[i]);
    i++;
  }

  // Stop looping once we hit a non-'A'
  return result;
}

const y = ["A", "A", "A", "A", "D", "T", "D", "T"];

function convertAsToSucceedingLetter(arr) {
  const aSuccessor = findFirstNonA(arr);
  const preceedingAs = getPrecedingAs(arr);
  let count = 0;
  let indexesOfA = [];
  for (let i = 0; i < preceedingAs.length; i++) {
    arr[i] = aSuccessor;
    indexesOfA.push(i);
    count++;
  }
  return {arr, count, indexesOfA};
}

const result = findFirstNonA(y);

// y[0] = "d";
// console.log("KK", result);
console.log(convertAsToSucceedingLetter(y));
