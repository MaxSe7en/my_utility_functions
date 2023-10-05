import { mother } from "./extract.js";
const drawNumbers = mother.reverse();
console.log("drawNumbers", mother);

function getNewRowAndCol(currentLetter, previousLetter, row, col) {
    // Logic to determine new row and col
    // Simplified from original with better names
    // Returns [newRow, newCol]
}

function isDuplicateItem(tree, row, col) {
    // Check if duplicate item
}

function getPrecedingAs(arr) {
    const result = [];
    let i = 0;
    console.log("arr", arr[0])
    if (arr[0] == "A" && arr[i] == "A") {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] === 'A' && arr[i - 1] === 'A') {
                result.push(arr[i]);
            }
        }
    }
    console.log("result", result)
    return result;
}

function removePrecedingAs(arr, numberOfAsToRemove) {
    // arr.splice(0, numberOfAsToRemove);


    return arr.splice(0, numberOfAsToRemove);
}

function buildDragonTigerTree(drawNumbers, whatToAnalyze, type) {
    const tree = [];
    const road = analyzeDraw(drawNumbers, whatToAnalyze)[type];
    const roadLength = road.length;
    let row = 0;
    let col = 0;
    const maxNumberOfRows = 5;
    let whenColIncreaseByMaxRows = 0;
    let columnLeader = "";
    let consecutiveAs = 0;
    const dua = new Map();
    const visited = new Set();
    // console.log("before", road)
    const precedingAs = getPrecedingAs(road);
    return
    console.log("precedingAs", precedingAs)
    if (precedingAs.length) {
        console.log("preceding A's", precedingAs && precedingAs);
        for(let i = 0; i < precedingAs.length; i++){
            const currentLetter = precedingAs[i];
            const nextLetter = road[i + 1];
            if (precedingAs[0] == "A" && i == 0) {
                row = 0;
                col = 0;
            }else{
                row++;
                
            }

            if(nextLetter != "A" ){
                    columnLeader = nextLetter;
                }

            if (row > maxNumberOfRows) {
                row = maxNumberOfRows;
                col++;
            }
            if (currentLetter === "A") {
                consecutiveAs++;
            } else {
                consecutiveAs = 0;
            }
            let newItem = [row, col, currentLetter];
            tree.push(newItem);
        }


        removePrecedingAs(road, precedingAs.length);
        console.log("after", consecutiveAs);
    }
    // else{
        for (let i = 0; i < roadLength; i++) {
            const currentLetter = road[i];
            const previousLetter = road[i - 1];
            //get the first letter before the previous letter
            const previousLetterBeforeLetterA = road[i - 2];
            const nextLetter = road[i + 1];
            const firstItem = road[0];
            // if (firstItem == "A" && i == 0) {
            //     row = 0;
            //     col = 0;
            //     // if(nextLetter != "A" ){
            //     //     columnLeader = nextLetter;
            //     // }
            // } else {
            if (currentLetter !== "A") {
                if (previousLetter === "A" && consecutiveAs === 1 && firstItem === "A" && col === 0) {
                    // if(currentLetter !== columnLeader){
                    //     row = 0;
                    //     col++;
                    //     console.log("sdhfksdhafkhsdhfkhasfdhksdhfkhsdf", currentLetter, previousLetter, nextLetter, firstItem, col, row, consecutiveAs, columnLeader, previousLetterBeforeLetterA)
                    // }else{
    
                    //     row++;
                    // }
                    row++;
                }
                // else if (previousLetter === "A" && consecutiveAs  === 1 && firstItem === "A" && col === 0 && previousLetterBeforeLetterA !== currentLetter) {
                //     col++;
                // }
                else if (columnLeader === "D" && consecutiveAs >= 2) {
                    row++;
    
                } else if (columnLeader === "T" && consecutiveAs >= 2 && nextLetter !== "D") {
                    row++;
                } else if (previousLetter === "A" && consecutiveAs === 1 && previousLetterBeforeLetterA === currentLetter) {
                    row++;
                }
                else {
                    if (currentLetter !== previousLetter) {
                        col = whenColIncreaseByMaxRows;
                        columnLeader = currentLetter;
                    }
                    if (previousLetter !== undefined && currentLetter !== previousLetter) {
                        console.log("gold", currentLetter, previousLetter, nextLetter, col, row, consecutiveAs, columnLeader, previousLetterBeforeLetterA)
                        row = 0;
                        col++;
                        if (row === 0) {
                            whenColIncreaseByMaxRows = col;
                            columnLeader = currentLetter;
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
                        columnLeader = currentLetter;
                    }
                }
                // if (row > 5) {
                //   row = 5;
                //   col++;
                // }
                if (row > maxNumberOfRows) {
                    row = maxNumberOfRows;
                    col++;
                }
            } else {
                if (columnLeader === "D") {
                    // stay in column
                    row++;
                } else {
                    // console.log("D");
                    row++;
                }
            }
            // }
    
            if (row > maxNumberOfRows) {
              row = maxNumberOfRows;
              col++;
            }
    
            if (currentLetter === "A") {
                consecutiveAs++;
            } else {
                consecutiveAs = 0;
            }
    
            // Build item for tree
            let newItem = [row, col, currentLetter];
    
            if (visited.has(row + "|" + col)) {
                row--;
                col++;
                newItem[0] = row;
                newItem[1] = col;
            } else {
                visited.add(row + "|" + col);
            }
    
            // // console.log("counter ========>", counter)
            // dua.set(row + "|" + col, currentLetter);
            // let duplicate = tree.some(
            //     (item) => item[0] === newItem[0] && item[1] === newItem[1]
            // );
    
            // if (duplicate) {
            //     row--;
            //     col++;
            //     // newItem = [row, col, currentLetter];
            //     newItem[0] = row;
            //     newItem[1] = col;
            // }
    
            dua[row + "|" + col] = currentLetter;
            tree.push(newItem);
        }
    // }
    // console.log("preceeding A's", precedingAs && precedingAs);
    
    // removePrecedingAs(road, precedingAs.length);
    // console.log("remove", remove);
    // console.log("after", road);
    // return
   
    console.log("sfskdfk", tree);

    return tree;
}
// function buildDragonTigerTree(drawNumbers, whatToAnalyze, type) {
//     const tree = [];
//     const road = analyzeDraw(drawNumbers, whatToAnalyze)[type];
//     const roadLength = road.length;
//     let row = 0;
//     let col = 0;
//     const maxNumberOfRows = 5;
//     let whenColIncreaseByMaxRows = 0;
//     let columnLeader = "";
//     let countLetterA = 0;
//     const dua = new Map();
//     const visited = new Set();
//     let counter = 0

//     for (let i = 0; i < roadLength; i++) {
//         const previousLetter = road[i - 1];
//         //get the first letter before the previous letter
//         const previousLetterBefore = road[i - 2];
//         const currentLetter = road[i];
//         const nextLetter = road[i + 1];

//         //    console.log(previousLetter, currentLetter, nextLetter, countLetterA, previousLetterBefore, columnLeader)
//         // console.log("previousLetter: ", previousLetter, "currentLetter: ", currentLetter, "nextLetter: ", nextLetter, "countLetterA: ", countLetterA, "previousLetterBefore: ", previousLetterBefore, "columnLeader: ", columnLeader)
//         // if (currentLetter !== previousLetter && previousLetter !== "A" && currentLetter !== "A") {
//         //     // col = whenColIncreaseByMaxRows;
//         //     // columnLeader = currentLetter;
//         //     console.log(whenColIncreaseByMaxRows, "currentLetter", currentLetter)
//         // }
//         if (previousLetter !== undefined && currentLetter !== previousLetter && currentLetter !== "A" && previousLetter != "A") {
//             // console.log("rows ", row, "col", col, "currentLetter", currentLetter)
//             col = whenColIncreaseByMaxRows
//             columnLeader = currentLetter
//             row = 0
//             col++
//             if (row === 0) {
//                 counter++
//                 console.log("biiiiiiiiiiiiiiiiiiiiiiiiig jdkfjksdfjksda", row, col, currentLetter, counter)

//                 whenColIncreaseByMaxRows = col;
//             }
//         }
//         //    A A or D D or T T or A T or T A or D A or A D
//         // else if (previousLetter === currentLetter || currentLetter === "A") {
//         //     // if( previousLetter === "A" )
//         //     // console.log("-----------------------------------",countLetterA, countLetterA >= 2)
//         //     // D A A followed by T
//         //     // if( countLetterA >= 2 && columnLeader != "T"){
//         //     //     row = 0;
//         //     //     col++
//         //     // }
//         //     // // but T A A cannot be followed by D
//         //     // else if(countLetterA >= 2 && columnLeader == "T" ){
//         //     //     row = 0;
//         //     //     col++
//         //     // }
//         //     // else{
//         //     //     row++
//         //     // }
//         //     // col = whenColIncreaseByMaxRows
//         //     row++
//         //     let prevCol = col - 1;
//         //     const prev = dua[row + "|" + prevCol];

//         //     if (prev === currentLetter) {
//         //         row--;
//         //         col++;
//         //     }
//         // } else if (countLetterA >= 2 && columnLeader != "T" && currentLetter == columnLeader) {
//         //     // row = 0;
//         //     row++

//         // }

//         // else if (countLetterA <= 1 && columnLeader != "T" && currentLetter != columnLeader && previousLetter != undefined) {
//         //     console.log("biiiiiiiiiiiiiiiiiiiiiiiiig boy", row, col, currentLetter)

//         // }
//         // else if(currentLetter !== previousLetter && previousLetter != undefined){
//         //     console.log("biiiiiiiiiig boooooooooooooooooooy", row, col, currentLetter)
//         //     col = whenColIncreaseByMaxRows
//         //     row = 0
//         //     col++
//         // }

//         if (currentLetter === "A") {
//             countLetterA++;
//         } else {
//             countLetterA = 0;
//         }

//         if (row > maxNumberOfRows) {
//             row = maxNumberOfRows;
//             // whenColIncreaseByMaxRows = col;
//             col++;
//         }
//         // if( countLetterA >= 2 && columnLeader != "T" && currentLetter != columnLeader){
//         //     // row = 0;
//         //     // row++
//         //     console.log("biiiiiiiiiiiiiiiiiiiiiiiiig boy", row, col)
//         // }
//         // but T A A cannot be followed by D
//         // else if(countLetterA >= 2 && columnLeader == "T" ){
//         //     row = 0;
//         //     col++
//         // }
//         console.log("currentLetter: ", currentLetter, countLetterA)
//         const newItem = [row, col, currentLetter];
//         // console.log("visited: ", visited)

//         if (visited.has(row + "|" + col)) {
//             row--;
//             col++;
//             newItem[0] = row;
//             newItem[1] = col;
//         } else {
//             visited.add(row + "|" + col);
//         }

//         dua.set(row + "|" + col, currentLetter);

//         tree.push(newItem);

//         if (row === 0 && col === 12) {
//             // console.log("sitsss", currentLetter, previousLetter, countLetterA)
//             // alert(currentLetter)
//             // console.log("sitsss", road.slice(13, 24))
//         }
//     }
//     console.log("tree: ", tree)
//     return tree;
// }
// function buildDragonTigerTree(drawNumbers, whatToAnalyze, type) {
//     const tree = [];
//     const analyzedResults = analyzeDraw(drawNumbers, whatToAnalyze)[type];

//     let row = 0;
//     let col = 0;
//     let whenColIncreaseByMaxRows = 0;
//     let columnLeader = ""
//     let dua = {};

//     analyzedResults.forEach((_, i) => {
//         let previousLetter = analyzedResults[i - 1];
//         let currentLetter = analyzedResults[i];
//         let nextLetter = analyzedResults[i + 1];
//         let newItem = [];

//         if (currentLetter !== previousLetter) {
//             col = whenColIncreaseByMaxRows;
//         }
//         if (previousLetter !== undefined && currentLetter !== previousLetter) {
//             row = 0;
//             col++;
//             if (row === 0) {
//                 whenColIncreaseByMaxRows = col;
//                 columnLeader = currentLetter;
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
//             columnLeader = currentLetter;
//         }

//         if (row > 5) {
//             row = 5;
//             col++;
//         }
//         newItem = [row, col, currentLetter];

//         let duplicate = tree.some((item) => item[0] === newItem[0] && item[1] === newItem[1]);

//         if (duplicate) {
//             row--;
//             col++;
//             newItem = [row, col, currentLetter];
//         }

//         dua[row + "|" + col] = currentLetter;
//         tree.push(newItem);
//     });
//     console.log(tree)
//     return tree;
// }

const timerStart = performance.now();

// Get the table element by ID
const table = document.getElementById("grid");

// Loop through the data and add rows to the table
// buildDragonTigerTree(drawNumbers, "sum", "D/T")

document.onload = createTable(6, 100);

function createTable(rows, cols) {
    for (let i = 0; i < rows; i++) {
        const row = table.insertRow();
        for (let j = 0; j < cols; j++) {
            const cell = row.insertCell();
            cell.textContent = ""; // Initially empty
            // cell.textContent = i + "" + j; // Initially empty
        }
    }
}

buildDragonTigerTree(drawNumbers, "sum", "D/T").forEach((rowData) => {
    const [rowIndex, colIndex, value] = rowData;
    const row = table.rows[rowIndex];
    if (row) {
        const cell = row.cells[colIndex];
        if (cell) {
            // cell.textContent = rowIndex + " " + value + " " + colIndex;
            cell.textContent = value;
        }
        if (value === "D") {
            cell.style.color = "blue";
        } else if (value === "T") {
            cell.style.color = "red";
        } else if (value === "A") {
            cell.style.color = "green";
        }
        cell.style.fontWeight = "bold";
    }
});
const timerEnd = performance.now();

// Create an empty table with a certain number of rows and columns
// createTable(5, 5); // Adjust the number of rows and columns as needed

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

function analyzeDraw(drawNumbers, whatToAnalyze) {
    const results = {
        "Big/Small": [], // Add an array to store detailed dragon-tiger-tie counts
        "Odd/Even": [], // Add an array to store detailed
        "P/C": [],
        "D/T": [],
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
        results["Big/Small"].push(bigSmall);
        results["Odd/Even"].push(oddEven);
        results["P/C"].push(primeComposite);
        results["D/T"].push(dragonTiger);
    }

    console.log("results", results["D/T"]);
    return results;
}

/*

 for (let i = 0; i < roadLength; i++) {
        const previousLetter = road[i - 1];
        //get the first letter before the previous letter
        const previousLetterBefore = road[i - 2];
        const currentLetter = road[i];
        const nextLetter = road[i + 1];

        if (currentLetter !== previousLetter && previousLetter !== "A" && currentLetter !== "A") {
            col = whenColIncreaseByMaxRows;
            columnLeader = currentLetter;
            console.log(whenColIncreaseByMaxRows, "currentLetter", currentLetter)
        }

        console.log("currentLetter, previousLetter", currentLetter, previousLetter)

        if (previousLetter !== undefined && currentLetter !== previousLetter && currentLetter !== "A") {
            // console.log("come here", currentLetter !== "A", currentLetter !== previousLetter)

            if (countLetterA >= 2 && columnLeader !== "T" && previousLetter === "A") {
                // console.log("does it come here", currentLetter !== "A", columnLeader !== "T")
                // col = whenColIncreaseByMaxRows;
                whenColIncreaseByMaxRows = col;

                row++;
            }
            // else if (currentLetter === columnLeader && previousLetter == "A" && countLetterA === 1 && previousLetterBefore !== currentLetter) {
            //     col = whenColIncreaseByMaxRows;

            //     row = 0;
            //     col++;
            //     console.log("good grace")
            // }
            else if (currentLetter === columnLeader && countLetterA === 1) {
                console.log("last good grace", previousLetterBefore, whenColIncreaseByMaxRows)
                // if (previousLetterBefore !== currentLetter) {
                //     // col = whenColIncreaseByMaxRows;
                //     console.log("good grace", whenColIncreaseByMaxRows)
                //     col = 11
                //     row = 0;
                //     col++;
                // }

                // else {
                //     row++;
                // }
                row++;
                // alert()
                console.log("--==========================--", "come here and change column", currentLetter, previousLetter, countLetterA, columnLeader, previousLetterBefore)
            }
            else if (previousLetter == "A" && countLetterA >= 2 && columnLeader === "T" && currentLetter !== previousLetter) {
                // console.log("im actually here")
                whenColIncreaseByMaxRows = col;
                
                row++;
            }
            // else if(){

            // }
            else {

                //     whenColIncreaseByMaxRows = col;
                // columnLeader = currentLetter;
                console.log("come here and change column", currentLetter, previousLetter, countLetterA, columnLeader)
                col = whenColIncreaseByMaxRows;
                row = 0;
                col++;

            }

            if (row === 0) {
                whenColIncreaseByMaxRows = col;
                // console.log("sdfkaghsdkfkahsdfghkasdhfkasdf")
                columnLeader = currentLetter;
            }
        } else if (currentLetter === "A") {
            row++;
        }
        else if (currentLetter === previousLetter) {
            row++;

            const prevCol = col - 1;
            const prev = dua.get(row + "|" + prevCol);

            if (prev === currentLetter) {
                // console.log("come here")
                row--;
                col++;
            }

        }
        else if (currentLetter !== previousLetter && currentLetter !== nextLetter && currentLetter !== "A") {
            col = 0;
            whenColIncreaseByMaxRows = col;
            columnLeader = currentLetter;
        }

        if (row > 5) {
            row = 5;
            col++;
        }


        if (currentLetter === "A") {
            countLetterA++;
        } else {
            countLetterA = 0;
        }
        // if(previousLetter === "A" && currentLetter === "T"){
        //     // row++;
        //     col = whenColIncreaseByMaxRows;
        //         row = 0;
        //         col++;
        // }
        //   if (countLetterA > 2) {
        //     // console.log("countLetterA: " + countLetterA)
        //     //     row = 0;
        //     //     col++;
        //     //     countLetterA = 0;
        //   }
        // console.log("column leader: ", columnLeader)
        // console.log("row: " + row + " col: " + col + " currentLetter: " + currentLetter + " previousLetter: " + previousLetter + " nextLetter " + nextLetter)//+ " countLetterA: " + countLetterA)//, " columnLeader: " + columnLeader)
        // console.log(previousLetter !== undefined && currentLetter !== "A" && currentLetter !== previousLetter , " currentLetter: " + currentLetter + " previousLetter: " + previousLetter + " nextLetter " + nextLetter, "column leader", columnLeader)
        const newItem = [row, col, currentLetter];
        // console.log("visited: ", visited)
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
        if (row === 0 && col === 12) {
            console.log("sitsss", currentLetter, previousLetter, countLetterA)
            // alert(currentLetter)
            console.log("sitsss", road.slice(13, 24))
        }
    }

*/
