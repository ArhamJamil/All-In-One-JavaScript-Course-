/*
    Class Inheritance:
        is a way for one class to extend another class , this is done by using
        extend keyword

        The EXTEND KEYWORD: 
            extends keyword is used to extend another class

            class Child extend Parents

            The methods uses in class cant be used with parent class because they are specifically defined for the particular class


*/ 


class UserForm{
    constructor(name, Password, AdminName, AdminPassword){
        console.log("Contructor Called ... ")
        this.UserName = name
        this.UserPassword = Password
        this.AdminUserName = AdminName
        this.AdminUserPassword = AdminPassword
    }

    submit(){
        alert("Form Submitted: " + "Name: " + this.UserName + " passWord: " + this.UserPassword)
    }
    cancel(){
        alert(this.UserName + " has Cacelled the form")
    }

}

/*

class AdminForm{
    constructor(Adminname, AdminPassword){
        console.log("Contructor Called ... ")
        this.UserName = Adminname
        this.UserPassword = AdminPassword
    }
    SignIN(){
        alert("Logged in SuccessFully with : " + "Name: " + this.UserName + " passWord: " + this.UserPassword)
    }
    SignOut(){
        alert(this.UserName + " has Cacelled been Loged Out")
    }
}

This is a bad practice for making a new class which requires prerequisite of another class with some additional
information , for example in admin form i had to change name from userForm to adimin form i had to this again again manually
which will take time and code will not be efficient for debuging bugs and for user experience ... so the solution is to create a new 
class using 'extend keyword' which will bring all the parameters of Default class inside a new class

*/

class AdminForm extends UserForm {
    SignIN(){
        alert("Logged in SuccessFully with : " + "Name: " + this.AdminUserName + " passWord: " + this.AdminUserPassword)
    }
    SignOut(){
        alert(this.AdminUserName + " has been Loged Out")
    }
}


let ArhamForm = new UserForm("Arham", "muhammad")
let Admin = new AdminForm("","","Muhammad Arham Jamil", "123_codewithArham")

ArhamForm.submit()
Admin.SignIN()

