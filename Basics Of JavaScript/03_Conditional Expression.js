/* # CONDITIONAL STATEMENTS:

    --> " Sometimes we might have to execute a block of code
        for example a prompt might ask for the age of user and if its greater
        than 18 display a message (special) "
        
    --> In JavaScriptg we have three forms of CONDITIONAL STATEMENTS:

        1- IF statement
        2- IF ... ELSE ... statement
        3- IF ... ELSE IF ... ELSE statement

  
*/

let UserInput = 19;
UserInput = Number.parseInt(UserInput); // converting the string to a integer

if (UserInput == 18){
    console.log("Youre ", UserInput)
}
else if(UserInput< 17){
    console.log("youre", UserInput)
}
else{
    console.log("ok youre", UserInput)
}