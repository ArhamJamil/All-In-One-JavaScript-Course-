/* 
    STRING Properties & Methods:

    ->Property such as .length can be invoked without paranthesis
    -> Method such as UpperCase is function so can be incoked with paranthesis

*/

let myName = "Arham"
console.log(myName.length) // give the lenght of string or num of chracters

console.log(myName.toUpperCase()) // print the String in UPPERCASE
console.log(myName.toLowerCase()) // print the String in lowercase
// Arham => a[0],r[1],h[2],a[3],m[4]
console.log(myName[0])
console.log(myName[1])
console.log(myName[2])
console.log(myName[3])
console.log(myName[4])
myName[5]= "he" // this is invalid to replace 
console.log(myName[5])


console.log(myName.slice(2,4)) // break the String from index position from 2 till 3 bcz end param at slice doesnot count
console.log(myName.slice(2)) // break the string till position 2 and print all thing after index 2

let friend = "  meena   "
console.log(friend)
console.log(friend.trim()) // removes all spaces in string

for (let index = 0; index < myName.length; index++) {
    console.log(myName[index])
}
