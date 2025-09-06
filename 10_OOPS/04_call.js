function setUserName(username){
    this.username = username;
    console.log("called");
}

function createUser(username,email){
    setUserName.call(this,username); // We want this setUserName to set this.username for createUser function. So we use call method and provide 'this' to setUserName function.
    this.email = email;
    return {
        username : this.username,
        email: this.email
    }
}

console.log(new createUser("test","test@gmail.com")) // { username: undefined, email: 'test@gmail.com' } without call and this in setUserName
// { username: 'test', email: 'test@gmail.com' } with call and this in setUserName