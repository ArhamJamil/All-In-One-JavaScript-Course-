/* 
    String Practise Set
   
    Q1- Explore the includes , startsWith, endsWith Function of String
    Q2 - Write a program to convert a given String to lowercase
    Q3 - Extract the ammount out of this string -- "please Give Rs 1000"
    Q4- Try to change 4th character of a given String : Were you able to do it ? 


*/
// Solution 1:

const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"

// ---------------------------------------------------

// Solution 2:
console.log(word.toLowerCase())

//Solution3:
let str2 = "Please Give Rs 1000"
let ammount = str2.slice("Please Give Rs ".length)
let ammount2 = str2.slice(15)
console.log(ammount)
console.log(ammount2)


// Solution 4:

let place = "Karachi"
place[1] = "i"
console.log(place)// string cant be change bcz it is immutable
