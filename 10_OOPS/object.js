function createUser(username, score){
    this.username = username;
    this.score = score;
}

// this create user in itself is an object just like array, promise and all. 
// Prototype is available on all objects which allows you to access methods defined for that object for example array.map is basically array.prototype.map
// For us to add an custom function to the object we have to use prototype to set it but we can access it directly.

createUser.prototype.getScore = function(){
    return this.score;
}

const userOne = new createUser("Priyesh",100); // IF new is not used then getScore will not be added to createUser.

console.log(userOne.getScore()); 

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/