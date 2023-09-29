/**
 * Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

    Return any array that satisfies this condition.
 */
const nums = [4,1,2,3]//[3,1,2,4]

function sortArrayByParity(arr) {
    let even = []
    let odd = []

    arr.forEach((item)=> {
        item % 2 === 0 ? even.push(item): odd.push(item)
    })

return [...even,...odd]
}

// console.log(sortArrayByParity(nums))


// const sorted = (a, b)=> {
//     console.log("a", a, "b", b)
//     console.log(a % 2 === 0)
//      return a % 2 === 0
//  }

// console.log(nums.sort(sorted))

function sortEvenOdd(arr){
    let even = []
    let odd = []
    let evenIndex = 0
    arr.reverse().forEach((item, index)=> {
    //     // console.log(index, index % 2 === 0)

        if(index % 2 === 0) {  
            [arr[evenIndex], arr[index]] = [arr[index], arr[evenIndex]]
            evenIndex +=1
        } 
        
    })

    console.log(arr)
    return arr
}

console.log(sortEvenOdd(nums))
