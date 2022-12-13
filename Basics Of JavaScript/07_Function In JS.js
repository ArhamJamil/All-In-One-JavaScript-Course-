/*
    What Is Function In JavaScript ?

        A javascript FUNCTION is a block of code designed to
        program a particular block ...

        SYNTAX OF FUNCTION:

        function myFUNC(){
            //Code
        }

        function myFunc2(param1, param2){
            //Code
            (param1, param2) => behaves as a local variables
        }

        -------------------------------------------------------

        A function can also returns a value , the value is returned back to caller

        const Sum =(x,y)=>{
            let C = x+y
            return C --- Return The Sum
            C will print 3
        }
*/


let a = 1
let b = 2
let c = 3

function numAvg(x,y) {
    return (x+y)/2
}
console.log("Average of A and B is ",numAvg(a,b))
console.log("Average of B and C is ",numAvg(b,c))
console.log("Average of C and A is ",numAvg(c,a))

const Sum = (x,y)=>{
    return x + y
}
let y = Sum(a,b)
console.log(y)
console.log(Sum(c,b))


// Bad Piece of code when you have to do multiple times this type of work
/* 
console.log("Average of A and B is ",(a+b)/2)
console.log("Done")
console.log("Average of B and C is ",(b+c)/2)
console.log("Done")
console.log("Average of C and A is ",(c+a)/2)
console.log("Done")
*/
// ----------------------------------------------------------------------