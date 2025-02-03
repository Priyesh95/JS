const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Inside promise one");
        resolve({user:"Priyesh", email:"test@gmail.com"})
    },1000);
})

promiseOne.then(function(user){
    console.log(user)
});

const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        console.log("Inside promise two");
        if(!error)
            resolve({user:"Priyesh", email:"test@gmail.com"})
        else{
            reject("Error in promise 2")
        }
    },1000);
})

promiseTwo.then(function(user){
    console.log(user)
})
.catch(function(message) {
    console.log(message)
});


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        console.log("Inside promise three");
        if(!error)
            resolve({name:"Priyesh", email:"test@gmail.com"})
        else{
            reject("Error in promise 3")
        }
    },1000);
})

promiseThree.then(function(user){
    let username = user.name;
    return username;
})
.then(function(username) { // This is called callback hell because if you want to do some operation now on this user then you have to add one more then for this.
    console.log(username)
})
.catch(function(message) {
    console.log(message)
});

//Callback hell example 

function fetchUser(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Fetched user details");
        resolve({ userId, name: "Alice" });
      }, 1000);
    });
  }
  
function fetchOrders(userId) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("Fetched order history");
    resolve(["Order1", "Order2", "Order3"]);
    }, 1000);
});
}
  
// Using Promises
fetchUser(1)
.then(user => {
    console.log("User:", user);
    return fetchOrders(user.userId);
})
.then(orders => {
    console.log("Orders:", orders);
})
.catch(error => {
    console.log("Error:", error);
});


// We can use async await to get better readability for this callback hell
async function getUserAndOrders() {
    try {
      const user = await fetchUser(1); // Wait for user data
      console.log("User:", user);
  
      const orders = await fetchOrders(user.userId); // Wait for orders
      console.log("Orders:", orders);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  getUserAndOrders();



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        console.log("Inside promise four");
        if(!error)
            resolve({name:"Priyesh", email:"test@gmail.com"})
        else{
            reject("Error in promise 4")
        }
    },1000);
})


// For reject in promise if handled using async await then we have to add try catch for rejection from promise
async function usePromiseFour(){
    try{
        const user = await promiseFour;
        console.log(user)
    }
    catch(err){
        console.log(err)
    }
}

usePromiseFour()