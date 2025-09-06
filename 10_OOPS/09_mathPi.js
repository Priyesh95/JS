const value = Object.getOwnPropertyDescriptor(Math,"PI");

console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI); // This cannot be overrridden
console.log(value) // Here you can see that writable is false so that is the reason.

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false, // This will disallow any overrides
    enumerable: true, // While iterating name property will not be accissible
     
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}