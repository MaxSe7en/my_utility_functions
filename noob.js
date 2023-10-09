function countA(arr) {
    let dCount = 0;
    let tCount = 0;

    let lastNonA = null;
    for (let i = 0; i < arr.length; i++) {
        const char = arr[i];
        if (char === 'A') {
            if (lastNonA === 'D') {
                dCount++;
            } else if (lastNonA === 'T') {
                tCount++;
            }
        } else {
            lastNonA = char;
        }
    }

    const total = dCount + tCount;
    return {
        D: dCount / total * 100,
        T: tCount / total * 100
    };
}

function countAs(arr) {
    let dCount = 0;
    let tCount = 0;
    let _a = 0;

    let lastNonA = null;
    for (let i = 0; i < arr.length; i++) {
        let char = arr[i]

        if (char === 'A' && lastNonA === null) {
            _a++;
        } else {
            if (char === "D") {
                if (_a > 0) {
                    dCount++;
                    dCount += _a;
                } else {
                    dCount++;
                }
                lastNonA = char;

                _a = 0;
            } else if (char === "T") {
                if (_a > 0) {
                    tCount++;
                    tCount += _a;
                } else {
                    tCount++;
                }
                lastNonA = char;
                _a = 0;
            } else {
                _a++;
                if (lastNonA == "D") {
                    dCount += _a;
                    _a = 0;
                } else if (lastNonA === "T") {
                    tCount += _a;
                    _a = 0;
                }

            }
        }

    }

    console.log(dCount, tCount)
    const total = dCount + tCount;
    return {
        D: Math.round(dCount / total * 100),
        T: Math.round(tCount / total * 100)
    };
}
const data = ['A', 'A', "A", "D", "A", "T", "T", "A", "T", "A", "T", "D", "D", "D", "T", "D", "D", "A"]//"T", "D", "A", "T", "D", "A", "D", "D", "D", "D", "D", "T", "D", "D", "T", "T", "A", "A", "T", "T", "A", "D", "D", "D", "T", "T", "A", "D", "T", "T", "D", "T", "T", "D", "T", "A", "D", "D", "T", "T", "A", "D", "T", "D", "T", "D", "D", "T", "D", "D", "T", "D", "T", "D", "A", "T", "A", "A", "T", "T", "D", "A", "T", "D", "D", "A", "T", "A", "A", "D", "A", "T", "T", "A", "D", "A", "T", "T", "T", "T", "T", "D", "T", "T", "T", "A", "D", "T", "D", "D", "A", "A", "A", "T", "A", "D", "A", "T", "T", "A", "A", "A", "A", "A", "A", "A", "A"];

console.log(countAs(data));//&& arr[i] === "A"