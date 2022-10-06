const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

let longuestWord = "";

function getlonguestWord (array) {

for (const element of array){
// console.log(avenger);

  
if (longuestWord.length < array.length){
    longuestWord = element; 
}
}

return longuestWord;  

}

console.log(getlonguestWord(avengers));