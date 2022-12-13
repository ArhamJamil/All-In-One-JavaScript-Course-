/*
    Classes and Objects :
        In Objects Oreinted Programming , a class is an extensible
        program code template for creating object , providing initial values for State(member variables)
        and implementation of behavior (member functions)

        The basic syntax for writing a class is:

        class Myclass{
            // class methods
            contructor(){...}
            method1(){...}
            method2(...)
        }

        We can use 'new Myclass()' to create a new object with all listed methods



*/


class UserForm{
    submit(){
        alert("Form Submitted: " + "Name: " + this.UserName + " passWord: " + this.UserPassword)
    }
    cancel(){
        alert(this.UserName + " has Cacelled the form")
    }
    details(name, Password){
        this.UserName = name
        this.UserPassword = Password
    }
}
// Creating Users Form
let ArhamForm = new UserForm()
let MadeehaForm = new UserForm() 

//  Filling The Form
ArhamForm.details("Arham", "Password1")
MadeehaForm.details('Madeeha', 'Password2')
// Submitting the Form
ArhamForm.submit()
MadeehaForm.submit()

//cancelling the form
MadeehaForm.cancel()