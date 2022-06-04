// #1
function calculateSum(arr) {
  return arr.reduce((previousValue, value) => previousValue + value , 0)
}

// console.log(calculateSum([1,2,3,4,5])); //15

// #2
function isTriangle(a, b, c) {
    if (a + b > c && a + c > b && c + b > a) {
        return true;
    }
    return false;
}

// console.log(isTriangle(5,6,7)); //true
// console.log(isTriangle(2,9,3)); //false

// #3
function isIsogram(word) {
    const letters = word.toLowerCase().split('');
    for (let i = 0; i < letters.length; i++) {
        for (let j = i + 1; j < letters.length; j++) {
            if (letters[i] === letters[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(isIsogram('Dermatoglyphics')); //true
console.log(isIsogram('abab')); //false

// #4
function isPalindrome(word) {
    let reverseWord = word.toLowerCase().split('').reverse().join('');
    if (word.toLowerCase() === reverseWord) {
        return true;
    }
    return false;
}

console.log(isPalindrome('Dermatoglyphics')); //false
console.log(isPalindrome('abbabba')); //true

// #5
function showFormattedDate(dateObj) {
    const date = dateObj.getDate();
    const month = dateObj.toLocaleString('en-us', {month: 'long'});
    const year = dateObj.getFullYear();
    return `${date} of ${month}, ${year}`;
}

console.log(showFormattedDate(new Date('05/12/22'))); //'12 of May, 2022'

// #6
const letterCount = (str, letter) => {
    let total = 0;
    let letters = str.split('');
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === letter) {
            total += 1;
        }
    }
    return total;
}

console.log(letterCount('abbaba', 'b')); //3

// #7
function countRepetitions(arr) {
    let obj = {};
    for (let i of arr) {
        obj[i] ? obj[i]++ : obj[i] = 1;
    }
    return obj;
}

console.log(countRepetitions(['banana', 'apple', 'banana'])); // { banana: 2, apple: 1 }

// #8
function calculateNumber(arr) {
    const array = arr.reverse();
    const two = 2;
    let number = 0;
    let degree = 1;
    for (let i = 0; i < array.length; i++) {
        number += array[i] * degree;
        degree *= two;
    }
    return number;
}

console.log(calculateNumber([0, 1, 0, 1])); //5
console.log(calculateNumber([1, 0, 0, 1])); //9
