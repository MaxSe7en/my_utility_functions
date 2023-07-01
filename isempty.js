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
let brr = [];//["Small|BS3rd", "Big|BS4th", "Prime|PC2nd", "Odd|OE4th", "Odd|OE3rd"]
 let rr= Array.from("Small|BS3rd Big|BS4th Prime|PC2nd Odd|OE4th Composite|PC3rd")
let a = "Big|BS3rd";
//   let a = "Even|OE3rd"
//   let a = "BigBS2nd"
let ab;
function preventDuplicateClassNames(classList, className) {
    if (classList.length === 0) {
        return classList.push(className);
    }else{
        classList.forEach((item, index) => {
          if (className.split("|")[1] === item.split("|")[1]) {
            console.log("---------------", item)
            classList[index] = classList[index].replace(item, className);
            return classList;
          }else{
            console.log("---------------")
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
console.log(preventDuplicateClassNames(brr, "Big|BS4th"));
console.log(preventDuplicateClassNames(brr, "Odd|OE4th"));
console.log(preventDuplicateClassNames(brr, "Prime|PC2nd"));
console.log(preventDuplicateClassNames(brr, "Odd|OE3rd"));
console.log(preventDuplicateClassNames(brr, "Small|BS3rd"));
console.log(preventDuplicateClassNames(brr, "Big|BS4th"));


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