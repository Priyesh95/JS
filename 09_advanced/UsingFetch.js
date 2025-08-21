async function getAllUsers() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // console.log(response);
        const jsonResponse = await response.json();
        // console.log(jsonResponse);
    }
    catch(error){
        console.log("Error fetching users:", error);
    }
    
}

// getAllUsers()

// All error codes are returned in resolve and not as reject. Reject is when connect did not happen

fetch("https://jsonplaceholder.typicode.com/users")
.then((users) => {
    return users.json(); 
})
.then((users) => { //since users.json will also take time hence we need one more then
    console.log(users);
})
.catch((err) => {
    console.log(err);
    
});