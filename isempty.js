/**
 * Checks if a value is empty.
 * @param value - The value to check.
 * @returns A boolean indicating whether the value is empty.
 */
function isEmpty(value) {
  if (value === null || value === undefined || value < 1) {
    return true;
  }

  if (typeof value === "string" && value.trim() === "") {
    return true;
  }

  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  if (typeof value === "object" && Object.keys(value).length === 0) {
    return true;
  }

  return false;
}
// console.log(isEmpty(''))

let checkedBoxes = [1, 2, 4, 5];
function pickGamesSelections(checkBoxes) {
  // Array of checkbox labels
  const checkBoxArr = ["1st", "2nd", "3rd", "4th", "5th"];
  let c = "";

  // Constructing the string representation of selected games
  checkBoxes.forEach((item, index) => {
    console.log("item===================>", item);
    c += checkBoxArr[item - 1] + (index < checkBoxes.length - 1 ? " " : "");
    // c += checkBoxArr[index] + (index < checkBoxes.length - 1 ? " " : "");
  });

  return c;
}
let brr = []; //["Small|BS3rd", "Big|BS4th", "Prime|PC2nd", "Odd|OE4th", "Odd|OE3rd"]
let rr = Array.from(
  "Small|BS3rd Big|BS4th Prime|PC2nd Odd|OE4th Composite|PC3rd"
);
let a = "Big|BS3rd";
//   let a = "Even|OE3rd"
//   let a = "BigBS2nd"
let ab;
function preventDuplicateClassNames(classList, className) {
  if (classList.length === 0) {
    return classList.push(className);
  } else {
    classList.forEach((item, index) => {
      if (className.split("|")[1] === item.split("|")[1]) {
        console.log("---------------", item);
        classList[index] = classList[index].replace(item, className);
        return classList;
      } else {
        console.log("---------------");
        classList.push(className);
        return classList;
      }
      //   console.log("============")
    });
  }

  // console.log("=========44444444444===")
  return classList;
}
// console.log(rr);
// console.log(preventDuplicateClassNames(brr, "Big|BS4th"));
// console.log(preventDuplicateClassNames(brr, "Odd|OE4th"));
// console.log(preventDuplicateClassNames(brr, "Prime|PC2nd"));
// console.log(preventDuplicateClassNames(brr, "Odd|OE3rd"));
// console.log(preventDuplicateClassNames(brr, "Small|BS3rd"));
// console.log(preventDuplicateClassNames(brr, "Big|BS4th"));
let ki = undefined;
// let g = 0;
// let h = "Small"
// console.log(isEmpty(g))
// console.log(ki !== h)

let o = {
  id: 4,
  odds: "1.456",
  name: 3,
  key: "NM",
};

let fig = {
  "1st Prize": {
    "4th": {
      NM: {
        0: 10,
        1: 10,
      },
    },
  },
};

let fig2 = { ...fig["1st Prize"]["4th"]["NM"] };
// console.log(fig2)
// let brr = ["Small|BS3rd", "Big|BS4th", "Prime|PC2nd", "Odd|OE4th", "Odd|OE3rd"];
//  let rr= "Small|BS3rd Big|BS4th Prime|PC2nd Odd|OE4th Composite|PC3rd";
// let a = "Big|BS3rd";
// //   let a = "Even|OE3rd"
// //   let a = "BigBS2nd"
// let ab;
// function preventDuplicateClassNames(classList, className) {
//     let _classList = classList.split(" ");
//     _classList.forEach((item, index) => {
//       if (className.split("|")[1] === item.split("|")[1]) {
//         _classList[index] = _classList[index].replace(item, className);
//       }
//     });
//     return _classList;
// }
// console.log(rr);
// console.log(preventDuplicateClassNames(rr, a));
// let gh = ['1st', '2nd']
// let r = gh.map((item, index, arr) => {
//   arr[index] === "1st" ? arr.filter((item, index) => index !== 0) : arr
// })
// console.log(r)

// function duplicateAndDelete(obj, newKey) {
//   if (obj.hasOwnProperty(newKey)) {
//     delete obj[newKey];
//   }

//   obj[newKey] = { ...obj["1st"] };
// }

// // Example usage:
// const obj = {
//   firstplace: {
//     "1st": {
//       "B/S": [
//         "Small",
//         1
//       ],
//       "O/E": [
//         "Even",
//         1
//       ]
//     }
//   }
// };

// console.log("Before duplication and deletion:");
// console.log(obj);

// duplicateAndDelete(obj.firstplace, "1st");

// console.log("After duplication and deletion:");
// console.log(obj);

// betId: u_betId,
//           game_id: game_id,
//           bet_amt: selection,
//           position: place,
//           allSelections: selection,
//           userSelection: a_name + place

function processBetInfos(u_betId, main_name) {
  let results = [];

  for (let place in main_name) {
    let g_name = main_name[place];
    for (let a_name in g_name) {
      let selections = g_name[a_name];
      selections.forEach((selection) => {
        console.log("selection===================>", selection);
        let result = {
          betId: u_betId,
          bet_amt: selection,
          place: place,
          selection: selection,
          game_type_name: a_name + place,
        };
        results.push(result);
      });
    }
  }

  return results;
}

let y = {
  "Sum of Dragon/Tiger/Tie": {
    sum: {
      "B/S": ["Small", 1],
      "O/E": ["Even", 1],
      "D/T": ["Tiger", 1],
      T: ["Tie", 1],
    },
  },
};

// let y = {
//   "sum": {
//       "B/S": [
//           "Small",
//          1
//       ],
//       "O/E": [
//           "Even",
//          1
//       ],
//       "D/T": [
//           "Tiger",
//           1
//       ],
//       "T": [
//           "Tie",
//           1
//       ]
//   }
// }
// console.log(processBetInfo(12345, y));
// function processBetInfo(
//   u_betId,
//   bet_date,
//   bet_time,
//   lottery_id,
//   multiplier,
//   totalBets,
//   uid,
//   unitStaked,
//   main_name
// ) {
//   let results = [];

//   for (let place in main_name) {
//     let g_name = main_name[place];
//     for (let a_name in g_name) {
//       let selection = g_name[a_name];
//       let result = {};

//       if (Array.isArray(selection)) {
//         result = {
//           allSelections: { position: place, selection: selection[0] },
//           betId: u_betId,
//           bet_date: bet_date,
//           bet_time: bet_time,
//           gameId: 4,
//           gameType: main_name,
//           lottery_id: lottery_id,
//           multiplier: multiplier,
//           totalBetAmt: selection[1],
//           totalBets: totalBets,
//           uid: uid,
//           unitStaked: unitStaked,
//           userSelections: a_name + place
//         };
//       } else {
//         result = {
//           allSelections: { position: place, selection: selection },
//           betId: u_betId,
//           bet_date: bet_date,
//           bet_time: bet_time,
//           gameId: 4,
//           gameType: main_name,
//           lottery_id: lottery_id,
//           multiplier: multiplier,
//           totalBetAmt: selection.selection,
//           totalBets: totalBets,
//           uid: uid,
//           unitStaked: unitStaked,
//           userSelections: a_name + place
//         };
//       }

//       results.push(result);
//     }
//   }

//   return results;
// }

// // Usage example:
// let u_betId = 123456789;
// let bet_date = "2023-07-14";
// let bet_time = "11:38:49";
// let lottery_id = 1;
// let multiplier = 1;
// let totalBets = 1;
// let uid = 1;
// let unitStaked = 1;
// let main_name = {
//   g_name: {
//     a_name: ["selection1", 10],
//     a_name1: ["selection2", 20],
//     a_name2: ["selection3", 30],
//     a_name3: ["selection4", 40],
//     a_name4: {
//       selection: 50,
//       // "1": 1,
//       // "2": 1,
//       // "3": 1,
//       // "4": 1,
//       // "5": 1,
//       // "6": 1,
//       // "7": 1,
//       // "8": 1,
//       // "9": 1
//     }
//   }
// };

// let processedBetInfo = processBetInfo(
//   u_betId,
//   bet_date,
//   bet_time,
//   lottery_id,
//   multiplier,
//   totalBets,
//   uid,
//   unitStaked,
//   main_name
// );
// console.log(processedBetInfo);

function processBetInfo(u_betId, date, lottery_id, multiplier, totalBets, uid, unitStaked, main_name) {
  let results = [];

  for (let place in main_name) {
    let g_name = main_name[place];
    for (let a_name in g_name) {
      let selection = g_name[a_name];

      for (let sel in selection) {
        let result = {};

        if (Array.isArray(selection[sel])) {
          let f = {
            allSelections: { position: place, selection: selection[sel][0] },
            betId: u_betId,
            bet_date: date.bet_date,
            bet_time: date.bet_time,
            gameId: 4,
            gameType: main_name,
            lottery_id: lottery_id,
            multiplier: multiplier,
            totalBetAmt: selection[sel][1],
            totalBets: totalBets,
            uid: uid,
            unitStaked: unitStaked,
            userSelections: a_name + place
          };
          result = { ...result, ...f };
        }

        if (!Array.isArray(selection[sel])) {
          for (let key in selection[sel]) {
            let f = {
              allSelections: { position: place, selection: key },
              betId: u_betId,
              bet_date: date.bet_date,
              bet_time: date.bet_time,
              gameId: 4,
              gameType: main_name,
              lottery_id: lottery_id,
              multiplier: multiplier,
              totalBetAmt: selection[sel][key],
              totalBets: totalBets,
              uid: uid,
              unitStaked: unitStaked,
              userSelections: a_name + place
            };
            result = { ...result, ...f };
            results.push(result); // Move the push inside the loop
          }
        } else {
          results.push(result); // Move the push inside the loop
        }
      }
    }
  }

  return results;
}

// Usage example:
let u_betId = 123456789;
let date = { bet_date: "2023-07-14", bet_time: "11:38:49" };
let lottery_id = 1;
let multiplier = 1;
let totalBets = 1;
let uid = 1;
let unitStaked = 1;
let main_name = {
  g_name: {
    a_name: ["selection1", 10],
    a_name1: ["selection2", 20],
    a_name2: ["selection3", 30],
    a_name3: ["selection4", 40],
    a_name4: {
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9
    }
  }
};

let processedBetInfo = processBetInfo(u_betId, date, lottery_id, multiplier, totalBets, uid, unitStaked, main_name);
console.log(processedBetInfo);
