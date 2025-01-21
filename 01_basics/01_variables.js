const accountID = 144563

let accountEmail = "priyesh@google.com"
var accountPassword = "test1234"

accountCity = "Jaipur"

// accountID = 2

// console.log(accountID)

console.table([accountID,accountEmail,accountPassword,accountCity])

/* 
Always use let since it does not allow re declaration in same scope so it reduces chances of error.

function testVar() {
    if (true) {
        var x = 10;
    }
    console.log(x);  // ✅ Output: 10 (function-scoped)
}

function testLet() {
    if (true) {
        let y = 20;
    }
    console.log(y);  // ❌ ReferenceError: y is not defined (block-scoped)
}

🛠️ 2. Hoisting:

    console.log(a);  // ✅ Output: undefined
    var a = 10;

    console.log(b);  // ❌ ReferenceError: Cannot access 'b' before initialization
    let b = 20;
    
    Hoisting with var: The variable is hoisted to the top and initialized with undefined.
    Hoisting with let: The variable is hoisted but remains in the Temporal Dead Zone until its declaration.


🛠️ 3. Re-declaration:

    var a = 5;
    var a = 10;  // ✅ No error

    let b = 15;
    let b = 20;  // ❌ SyntaxError: Identifier 'b' has already been declared
    
    var allows re-declaration in the same scope.
    let doesn't allow re-declaration in the same scope, preventing potential bugs.

🛠️ 4. Global Object Binding:

    var x = 100;
    console.log(window.x);  // ✅ Output: 100

    let y = 200;
    console.log(window.y);  // ❌ Output: undefined
    
    var creates a property on the global window object.
    let doesn't create properties on the global object, making it safer.

*/


for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Output: 3, 3, 3 (because `i` is function-scoped)

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}

// Output: 0, 1, 2 (because `i` is block-scoped)

/*
    let is block-scoped, meaning a new variable i is created for each iteration of the loop.
    Each callback inside setTimeout() gets a separate copy of i for each iteration.
    When setTimeout() executes after 1 second, each callback has its own i value preserved from the corresponding iteration.
*/

// Example 1: Primitive Values (Cannot Be Changed)
// For primitive values (e.g., numbers, strings, booleans), the value assigned to a const variable cannot be changed.

const x = 10;
x = 20;  // ❌ Error: Assignment to constant variable.

// Example 2: Objects and Arrays (Contents Can Be Changed)
// For objects and arrays, the reference is constant, but the contents (properties or elements) can be modified.

// Objects:
const obj = { name: "Alice" };
obj.name = "Bob";  // ✅ Allowed: Modifying a property.

obj = { age: 30 }; // ❌ Error: Cannot reassign a new object to `obj`.

// Arrays:

const arr = [1, 2, 3];
arr.push(4);       // ✅ Allowed: Modifying the contents of the array.
console.log(arr);  // Output: [1, 2, 3, 4]

arr = [5, 6];      // ❌ Error: Cannot reassign a new array to `arr`.
