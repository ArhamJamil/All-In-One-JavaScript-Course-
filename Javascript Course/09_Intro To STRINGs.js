/*
    What are String: "String are used to Manipulate text"

    Syntax of Making String:
    let name = "Harry"
            OR
    let name = 'Harry'

    TEMPLATE LITERALS :
        Use backticks (``) instead of quotes to define a STRING

        let name = `Harry`

        with template literal it is possible to use both single 
        as well as double quotes inside a string

        let sentence = ` The name "is" Harry's `

        We can insert variable directly in template literal, This is called STRING INTERPOLATION
        let a = `This is ${name}`

*/

let Name1 = "Arham"
let Name2 = 'Fatima'

let sentence1 = `Name1 Love Name2`
console.log(sentence1)
let sentence2 = `${Name1} Love ${Name2}`
console.log(sentence2)