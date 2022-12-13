/*
    In Programming we often take something and then extend it ....
    For example : We might want to create a User objecvt and "admiin" and 
    "guest" will be slightly modified variants of it

    [[Prototype]]
    Javascript objects have a special property called proptotype that is either null
    or references of another object

    when we try to read a property from a proptotype and it is missing, javascript automatically 
    takes it from prototype . This is called "Prototype inhertance"

    Setting ProtoType:
    
    We can Set prototype by setting --proto-- Now if
    we read a property from the object which is not in object and is present
    in the Prototype , JavaScript will take it from the prototype

    If we have a method in object it will be called from the object, if it is missing in object and
    presen in prototype , it is called from the prototype


*/ 


let myObj = {
    Name : "Arham",
    Role: "Software Developer",
    Age: 18
}
console.log(myObj)

let proto_Object = {
    run: ()=>{
        alert("i am running ")
    }
}

proto_Object.__proto__ = {
    college: "whales College"
}
// proto_Object.run() -- it will run because protoObject has it proto and when its method will be called it will execute
// myObj.run() -- // will not run because myObj doesn't have proto of run()

// Assigning run () to myObj via Proto:
myObj.__proto__ = proto_Object
myObj.run() 
console.log(myObj.college)
