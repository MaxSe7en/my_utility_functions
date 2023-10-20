console.log("divisor.js loaded");

function divisors(integer) {
    if (integer < 2) return;
    let divisors = new Array();
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            divisors.push(i);
        }
    }

    if (divisors.length == 0) {
        return `${integer} is prime`;
    }

    return divisors;
}

// console.log(divisors(11))
/**
 * 
 * Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
    If you want to know more: http://en.wikipedia.org/wiki/DNA

    In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

    More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

    Example: (input --> output)

    "ATTGC" --> "TAACG"
    "GTAT" --> "CATA"} dna 
 * 
 */

function DNAStrand(dna) {
    let dnaStrand = "";
    dna.split("").forEach((strand) => dnaStrand += getComplementaryStrand(strand))
    return dnaStrand;
}

function getComplementaryStrand(strand) {
    return strands[`${strand}`]
}

const strands = {
    A: "T",
    T: "A",
    G: "C",
    C: "G"
}

// console.log(DNAStrand("ATTGC"))
// console.log({ A: 'T', T: 'A', C: 'G', G: 'C' }["G"])


// function DNAStrand(dna) {
//     return dna.replace(/./g, function (c) {
//         return DNAStrand.pairs[c]
//     })
// }

// DNAStrand.pairs = {
//     A: 'T',
//     T: 'A',
//     C: 'G',
//     G: 'C',
// }



// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

function digPow(n, p) {
    let mul = 0;
    let k = 0;
    n.toString().split("").forEach((num, i) => mul += num ** (p + i));
    Number.isInteger(mul / n) ? k = mul / n : k = -1;
    return k;
}

// console.log(digPow(89, 1))
// console.log(digPow(92, 1))
// console.log(digPow(695, 2))
// console.log(digPow(46288, 3))

// Question 4
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
    let multiplicativePersistence = 1;
    let persistence = 0;

    num = num.toString(); // convert to string

    while (num.length > 1) {

        multiplicativePersistence = num.split("").reduce((acc, curr) => {
            return acc * parseInt(curr);
        }, 1);

        num = multiplicativePersistence.toString();

        persistence++;

    }

    return persistence;

}
console.log(persistence(999))
console.log(persistence(39))
console.log(persistence(25))
// console.log(persistence(999))