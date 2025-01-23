// Immediately invoked function expressions


// IIFEs are used somethimes when you want DB to connected as soon as program runs and also to protect your scope from getting polluted from global scope.
(function chai() { 
    console.log("DB connected")
})(); //If semicolon is not given then if there is one more iife after this it will throw error. So semicolon after iife is must 

((name) => {
    console.log(`DB connected two ${name}`)
})("Priyesh");