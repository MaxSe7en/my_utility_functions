/**
 * Checks if a value is empty.
 * @param value - The value to check.
 * @returns A boolean indicating whether the value is empty.
 */
function isEmpty(value) {
  if (value === null || value === undefined || value < 1) {
    return true;
  }

  if (typeof value === 'string' && value.trim() === '') {
    return true;
  }

  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  if (typeof value === 'object' && Object.keys(value).length === 0) {
    return true;
  }

  return false;
}
// console.log(isEmpty(''))

let checkedBoxes = [1,2,4,5]
function pickGamesSelections(checkBoxes ) {
    // Array of checkbox labels
    const checkBoxArr = ["1st", "2nd", "3rd", "4th", "5th"];
    let c = "";
  
    // Constructing the string representation of selected games
    checkBoxes.forEach((item, index) => {
      console.log("item===================>", item)
      c += checkBoxArr[item - 1] + (index < checkBoxes.length - 1 ? " " : "");
      // c += checkBoxArr[index] + (index < checkBoxes.length - 1 ? " " : "");
    });
  
    return c;
  }
//   ['Small|BS3rd', 'Big|BS4th', 'Prime|PC2nd', 'Odd|OE4th']
//   Small|BS3rd Big|BS4th Prime|PC2nd Odd|OE4th Composite|PC3rd
  let a = "BigBS2nd"
  console.log(a.split())