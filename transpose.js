console.log("transpose.js loaded");

const arr = [
    "A",
    "D",
    "D",
    "D",
    "T",
    "D",
    "A",
    "D",
    "T",
    "D",
    "T",
    "D",
    "D",
    "T",
    "A",
    "D",
    "D",
    "T",
    "D",
    "T",
    "D",
    "D",
    "D",
    "D",
    "D",
    "T",
    "D",
    "D",
    "D",
    "T",
    "T",
    "A",
    "D",
    "D",
    "D",
    "T",
    "D",
    "A",
    "D",
    "D",
    "D",
    "T",
    "D",
    "D",
    "D",
    "D",
    "D",
    "D",
    "T",
    "A",
    "T",
    "A",
    "A",
    "T",
    "T",
    "D",
    "D",
    "D",
    "T",
    "T",
    "T",
    "A",
    "T",
    "T",
    "T",
    "D",
    "D",
    "T",
    "D",
    "T",
    "T",
    "T",
    "D",
    "D",
    "T",
    "T",
    "T",
    "D",
    "T",
    "D",
    "A",
    "T",
    "T",
    "D",
    "T",
    "A",
    "T",
    "T",
    "T",
    "D",
    "T",
    "D",
    "T",
    "T",
    "D",
    "T",
    "A",
    "A",
    "T",
    "D"
];

function transpose(arr) {
    let newArr = [];
    let indexOfA = [];

    let previousLetter;

    for (let i = 0; i < arr.length; i++) {
        let nextLetter = arr[i + 1];
        console.log(previousLetter);
        if (nextLetter === "A" && arr[i] !== "A") {
            previousLetter = arr[i]
        }

        if (arr[i] === "A") {
            indexOfA.push(i);
            newArr.push(previousLetter)
        } else {
            newArr.push(arr[i]);

        }

    }

    console.log(indexOfA);

    return { newArr, indexOfA };
}

// console.log(transpose(arr))
// [1, 2, 3, 4].slice(0, nextNonAIndex)
function removePrecedingAs(arr, numberOfAsToRemove) {
    // arr.splice(0, numberOfAsToRemove);

    return arr.splice(0, numberOfAsToRemove);
}



function convertAtoDorT(arr) {
    let resultArr = [];
    let indexOfA = [];
    let workingArr = [];
    let previousLetter;
    let nextNonAIndex = 0
    // Handle if A is first element
    if (arr[0] === "A") {
        nextNonAIndex = arr.findIndex((letter) => letter !== "A");
        console.log(nextNonAIndex)
        for (let i = 0; i < nextNonAIndex; i++) {
            indexOfA.push(i);
            resultArr.push(arr[nextNonAIndex]);
        }
    }

    arr[0] === "A" ? (workingArr = arr.slice(nextNonAIndex)) : (workingArr = arr);

    console.log(workingArr, nextNonAIndex + 1,)


    for (let i = 0; i < workingArr.length; i++) {
        let nextLetter = workingArr[i + 1];

        if (nextLetter === "A" && workingArr[i] !== "A") {
            previousLetter = workingArr[i];
        }

        if (workingArr[i] === "A") {
            indexOfA.push(i);
            resultArr.push(previousLetter);
        } else {
            resultArr.push(workingArr[i]);
        }
    }

    return { resultArr, indexOfA };
}

function convertAtoDorTs(inputArr) {

    const resultArr = [];
    const aIndices = [];

    let nonAPrefixArr;
    let workingArr;

    // Handle if A is first element
    if (inputArr[0] === 'A') {
        const firstNonAIndex = inputArr.findIndex(letter => letter !== 'A');
        nonAPrefixArr = inputArr.slice(0, firstNonAIndex);
        workingArr = inputArr.slice(firstNonAIndex);
    } else {
        workingArr = inputArr;
    }

    let previousLetter;

    for (let i = 0; i < workingArr.length; i++) {

        const nextLetter = workingArr[i + 1];

        if (nextLetter === 'A' && workingArr[i] !== 'A') {
            previousLetter = workingArr[i];
        }

        if (workingArr[i] === 'A') {
            aIndices.push(i);
            resultArr.push(previousLetter);
        } else {
            resultArr.push(workingArr[i]);
        }
    }

    return { resultArr, aIndices };

}


function countLettersAndGetPercentage(arr) {
    let dCount = 0;
    let tCount = 0;
    let _aCount = 0;

    let lastNonA = null;
    for (const element of arr) {
        let char = element

        if (char === 'A' && lastNonA === null) {
            _aCount++;
        } else {
            if (char === "D") {
                if (_aCount > 0) {
                    dCount++;
                    dCount += _aCount;
                } else {
                    dCount++;
                }
                lastNonA = char;
                _aCount = 0;
            } else if (char === "T") {
                if (_aCount > 0) {
                    tCount++;
                    tCount += _aCount;
                } else {
                    tCount++;
                }
                lastNonA = char;
                _aCount = 0;
            } else {
                _aCount++;
                if (lastNonA == "D") {
                    dCount += _aCount;
                    _aCount = 0;
                } else if (lastNonA === "T") {
                    tCount += _aCount;
                    _aCount = 0;
                }

            }
        }

    }

    // console.log(dCount, tCount)
    const total = dCount + tCount;
    return {
        D: Math.round(dCount / total * 100),
        T: Math.round(tCount / total * 100)
    };
}

console.log(countLettersAndGetPercentage(arr));
// console.log(convertAtoDorT(arr));
