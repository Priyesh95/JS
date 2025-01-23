
// Rest operator in functions same as spread operator but named differently based on usage

function calculatePrice(...num){
    let sum = 0
    for(let i = 0; i < num.length; i++){
        sum += num[i]
    } 
    return sum;
}

console.log(calculatePrice(100,200,300))

function calculatePrice2(num1, num2, ...num){
    let sum = 0
    for(let i = 0; i < num.length; i++){
        sum += num[i]
    } 
    return sum;
}

console.log(calculatePrice2(100,200,300,500))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


