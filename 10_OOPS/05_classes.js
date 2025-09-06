class User { 
    constructor(username,email,pwd){
        this.username = username;
        this.email = email;
        static _pwd = pwd; // using let here we can set variables as private. Also we can use #_pwd which will automatically make it private
        
        this.encrytPassword = function(){
            return `${_pwd}abc`
        }
        
    }
    

   
}

const user = new User("test","test@gmail.com","password");
console.log(user._pwd) // using this we can use variables as private. Also we can use #_pwd which will automatically make it private
console.log(user.encrytPassword())