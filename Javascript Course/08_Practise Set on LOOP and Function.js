/*
    PRACTICE SET :

    1- Write a Program to print the marks of a student in a object using for Loop
    2- Write the program in Q1 using for in Loop
    3- Write the program to print "try agian" until the User enter correct Number
    4- Write a Function to find mean of 5 numbers


*/

//___________________ S O L U T I O N S: _____________________________

// -------------Question 1 ----------------: 

let OBJ_marks= {
    Arham: 90,
    Fatima: 50,
    Sarim: 70,
    Madeeha: 30,
}
console.log(OBJ_marks)
for (let index = 0; index < Object.keys(OBJ_marks).length; index++) {
    console.log("The marks of " + Object.keys(OBJ_marks)[index] + " are " + OBJ_marks[Object.keys(OBJ_marks)[index]])
}

// -------------Question 2 ----------------: 

for (const key in OBJ_marks) {
        console.log(key)
        console.log("The marks of " + key + " are " + OBJ_marks[key])
        // console.log("The marks of " + Object.keys(OBJ_marks)[index] + " are " + OBJ_marks[Object.keys(OBJ_marks)[index]])
        // for (let index = 0; index < key.length; index++) {
        //     console.log(key[index]) }

}

// -------------Question 3 ----------------: 

// let correctNum = -8
// let INPUT 
// INPUT = prompt("enter a number")
// while(INPUT != correctNum){
//     console.log("Try Again")
//     INPUT = prompt("Enter a Number")
    
// }
// console.log("You have entered correct number "+ INPUT)


// -------------Question 4 ----------------: 

let Mean = (a,b,c,d)=>{
    return (a+b+c+d)/4
}
console.log("The mean of 1,2,3,4 is  "+ Mean(1,2,3,4))
