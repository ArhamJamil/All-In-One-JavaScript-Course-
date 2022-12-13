/*
    SetTimeOut & SetInterval:
        setTimeout allows us to run a function once after interval of time
        
        Syntax:
            let timeID = setTimeout(function,<delay , in ms>,<arg1>,<arg2>,<arg3>....)
            console.log(timeID) 

        clearTimeout is used to cancel the execution for example:
        clearTimeout(timeTD)

        setInterval has similar syntax as setTimeout:
            let timerID = setIntrval(function, <delay in ms> , <arg1>, <arg2>...)
        All arguments have same meaning , but unlike setTimeout it runs the function infinite after given inteval of time,
        to stop it we use clearInterval
*/ 

const Sum = (a,b,c)=>{
    console.log("Sum of three num is "+ (a+b+c))
}
setTimeout(Sum,5000, 1,2,4)



let a = setTimeout(function hello(b) {
    alert("Hello arham afer 3s")
}, 3000)
console.log(a) // give the timer ID

let b = prompt("Do you want to end setTimeout??")
if (b == "n") {
    clearTimeout(a)
}

// setInterval(
//     function infinit() {
//         alert("infinte running")
//     },3500
// )