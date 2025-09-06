class User {
    constructor(email,pwd){
        this.email = email;
        this.pwd = pwd
    }

    get email(){ // This is getter and setter now email is not accessible directly
        return this._email;
    }

    set email(value){
        this._email = value.toLowerCase()
    }
}

const user = new User("TEST@gmail.com","abc")
console.log(user.email)