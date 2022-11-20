/* 
    OPERATORS in Js:
        
    (OPERAND (OPERATOR(define below)) OPERAND = RESULT)
        
        # ARITHEMETIC OPERATORS:
            
            1- (+) --> Addition
            2- (-) --> Subtraction
            3- (*) --> Multiply
            4- (/) --> Division
            5- (**) --> Exponenttion
            6- (%) --> modulus
            7- (++) --> increment 
            8- (--) --> decrement

        # ASSIGNMENT OPERATORS:
            
            1- (=) --> x = y 
            2- (+=) --> x= x + y
            3- (-=) --> x = x - y
            4- (*=) --> x = x * y
            5- (/=) --> x = x / y
            6- (%=) --> x = x % y
            7- (**=) --> x = x ** y

        # COMPARISION OPERATORS:
            
            1- (==) --> equal to
            2- (!=) --> not equal to
            3- (===) --> equal value and type
            4- (!==) --> not equal value or not equal type
            5- (>) --> greater tha
            6- (<) --> less than
            7- (>=) --> greater than equals to
            8- (<=) --> less tha equals to
            9- (?) --> turnary operator

        # LOGICAL OPERATORS:

            1- (&&) --> Logical AND
            1- (||) --> Logical OR
            1- (!) --> Logical NOT
*/


let a = 6; // OPERAND
let b = 2; // OPERAND 

console.log("a + b = ", a+b)
console.log("a - b = ", a-b)
console.log("a / b = ", a/b)
console.log("a * b = ", a*b)
console.log("a % b = ", a%b)
console.log("a ** b = ", a**b) // 2*2*2*2*2*2

console.log("++a = ", ++a) // ++a first add value then print a
console.log("a++ = ", a++) // a++ first print a then add value

console.log("--a = ", --a)  // --a first subtract value then print a
console.log("a-- = ", a--) // a-- first print a then subtract value

 
console.log("b++ = ", b++)
console.log("b-- = ", b--) 