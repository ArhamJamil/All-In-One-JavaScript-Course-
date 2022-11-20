let person1 = prompt("Enter Option S,W,G").toUpperCase()
let choice = ["S", "W", "G"]
let person2 = choice[Math.floor(Math.random(choice.length)*3)]
console.log(person2)
console.log(person1)

if (person1 == person2) {
    document.write("both have same choice")
}
else if(person1 == "S" && person2 == "W"){
    document.write("Person 1 won")
}
else if(person1 == "S" && person2 == "G"){
    document.write("Person 2 won")
}
else if(person1 == "W" && person2 == "S"){
    document.write("Person 2 won")
}
else if(person1 == "G" && person2 == "W"){
    document.write("Person 2 won")
}
else if(person1 == "W" && person2 == "G"){
    document.write("Person 1 won")
}
else if(person1 == "G" && person2 == "S"){
    document.write("Person 1 won")
}



