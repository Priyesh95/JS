const myObj = {
    name : "Priyesh",
    "full name" : "Priyesh Nagar",
    email: "test@gmail.com",
    isLoggedIn: false
}

// console.log(myObj["email"]);
// console.log(myObj.email);
// console.log(myObj["full name"]); // Only this will work as key is having space

// Object.freeze(myObj);  // Now noone can change this object

myObj.greeting = function(){
    console.log(`Hello from function ${this.name}`);
}

myObj.greeting();

const obj1 = {a:1, b:2};
const obj2 = {c:1, d:2};

console.log(Object.assign({},obj1,obj2));

const obj3 = {...obj1,...obj2}
console.log(obj3);
