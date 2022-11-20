/*
    CONSOLE OBJECT Methods:

        The console object has several methods,Some of them are

        1. assert() -> used to assert a condition
        2. clear() -> clears the console
        3. log() -> ouput a message to the console
        4. table() -> Display a tabular data
        5. warn() -> used for warnings
        6. error() -> used for Errors
        7. info() -> USed for special information
*/ 

console.error("This Is Error , Color = `Red`, will be indicated in browser ")
console.assert(5>6) // if statement is False , will display error Asertion failed
console.log(6>5) // if satement is True , will give boolean value True
console.clear()

let Object = {name:"Arham", Skill: "Software Developer", Age:18, dateOfBirth: 2004}
console.table(Object) // represent tabular data
/* ─────────────┬──────────────────────┐
│   (index)   │        Values        │
├─────────────┼──────────────────────┤
│    name     │       'Arham'        │
│    Skill    │ 'Software Developer' │
│     Age     │          18          │
│ dateOfBirth │         2004         │
└─────────────┴──────────────────────┘
*/

let my_Friend =["Shameel", "Amir", "Madeeha", "Fatima"]
console.table(my_Friend)
/*
┌─────────┬───────────┐
│ (index) │  Values   │
├─────────┼───────────┤
│    0    │ 'Shameel' │
│    1    │  'Amir'   │
│    2    │ 'Madeeha' │
│    3    │ 'Fatima'  │
└─────────┴───────────┘
*/ 

console.warn("Hey Please Stop Bullying")
console.info("This is an important info")

console.table(console)
/*
┌────────────────┐
│    (Methods)     │
├────────────────┤
│      log       │
│      warn      │
│      dir       │
│      time      │
│    timeEnd     │
│    timeLog     │
│     trace      │
│     assert     │
│     clear      │
│     count      │
│   countReset   │
│     group      │
│    groupEnd    │
│     table      │
│     debug      │
│      info      │
│     dirxml     │
│     error      │
│ groupCollapsed │
│    Console     │
│    profile     │
│   profileEnd   │
│   timeStamp    │
│    context     │
└────────────────┘
*/ 

console.time(my_Friend)
console.timeEnd(my_Friend) // Shameel,Amir,Madeeha,Fatima: 0.181ms

console.time('forLoop')
for (let index = 0; index < 10; index++) {
    console.log(index)
    
}
console.timeEnd('forLoop')


console.time('whileLoop')
index = 0
while(index < 10) {
    console.log(index)
    index++
}
console.timeEnd('whileLoop')