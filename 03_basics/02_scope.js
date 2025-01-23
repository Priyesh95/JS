var c = 300;


// Suppose this if else comes from some other file then the above c variable will be overridden which is not correct
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);
    
}

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// This is hoisting where a variable declared before it being initialized throws error. Only with let and const
console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}