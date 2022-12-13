/*
    Contructors: 
        is a Method of Class that will run by default within the class ,
        The Contructor() method is called automatically by neew, so we can initialize the object there


*/ 

class UserForm{
    constructor(name, Password){
        console.log("Contructor Called ... ")
        this.UserName = name
        this.UserPassword = Password
    }

    submit(){
        alert("Form Submitted: " + "Name: " + this.UserName + " passWord: " + this.UserPassword)
    }
    cancel(){
        alert(this.UserName + " has Cacelled the form")
    }

}

// Creating Users Form
let ArhamForm = new UserForm("Arham", "Password1")
let MadeehaForm = new UserForm('Madeeha', "Password1") 

//  Filling The Form -- No need to Fill the form as we have pass value default to the contructor
// ArhamForm.details("Arham", "Password1")
// MadeehaForm.details("Arham", "Password1")

// Submitting the Form
ArhamForm.submit()
MadeehaForm.submit()

//cancelling the form
MadeehaForm.cancel()