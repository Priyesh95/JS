const user = {
    userName : "Priyesh Nagar",
    email : "test@gmail.com",
    welcomMessage : function(){
        console.log(`${this.userName} , Welcome to course`) // this can only be accessed inside object and not inside only function see line 13
        console.log(this)
    }
}

// user.welcomMessage()
user.userName = "Sam"
// user.welcomMessage()

function check(){
    let userName = "test";
    console.log(this.userName);
}
check()


// this cannot be accessed inside function line 13
const check2 = () => {
    let userName = "test";
    console.log(this.userName);
}

check2()

const addTwo = (num1,num2) => {
    return num1 + num2;
}

console.log(addTwo(200,300));


const addTwoImplicitReturn = (num1,num2) =>  (num1 + num2);
console.log(addTwoImplicitReturn(100,400));
