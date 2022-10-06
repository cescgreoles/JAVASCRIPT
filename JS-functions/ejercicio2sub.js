
const avengers = ["Hulksdfasdfsadfsda", "Thor", "IronMan", "Captain A.", "Spiderman", "Captain M."];

function findLongestWord (array) {

     let longestWord = array[0];

 /* for (const element of array) {
        
        if (longestWord.length < element.length) {
            
            longestWord = element;

        }

    } */

     for (let i = 1; i < array.length; i++) {

        const element = array[i];

        if (longestWord.length < element.length) {
         longestWord = element;

    }

}

    return longestWord;

}

console.log(findLongestWord(avengers));

