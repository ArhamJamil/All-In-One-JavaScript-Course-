// Premitives datatypes are fundamental datatypes which are built in 

// There are 7 premitives data type :
/* 

    1- NULL
    2- NUMBER
    3-SYMBOL
    4- STRING
    5-BOOLEAN
    6-BIGINT
    7-UNDEFINED

*/

let a = null;
let b = 345;
let c = true;
let d = BigInt('567')
let e = "Arham"
let f = Symbol("Iam a nice Symbol")
let g = undefined
console.log(a, b, c, d, e, f, g)
console.log(typeof (a)) // typeof () function print type of datatype valu
console.log(typeof (b))
console.log(typeof (c))
console.log(typeof (d))
console.log(typeof (e))
console.log(typeof (f))
console.log(typeof (g))
// Non - Premitive Datatype in Js = "OBJECTS" 

/* 
    An "OBJECT" in JS could be as Follow:

    const Item = {
        name: "Arham", // here name is byVar and having value Arham in string
        price: "Dollar"
    }

*/

const BioData = {
    "Arham": String,
    18: BigInt,
    "Full stack developer": true
}
console.log(BioData)