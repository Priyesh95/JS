const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = User("priyesh", 12, true)
const userTwo = User("test", 11, false)
console.log(userOne); // Here userOne will still give test 11 and false since we did not use new keyword. USing new keyword creates a new instance of the function/Object
//console.log(userTwo);

const userOneNew = new User("priyesh", 12, true)
const userTwoNew = new User("test", 11, false)

console.log(userOneNew); 
console.log(userTwoNew); 