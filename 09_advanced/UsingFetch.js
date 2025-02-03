async function getAllUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(response);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    
}

// getAllUsers()

// All error codes are returned in resolve and not as reject. Reject is when connect did not happen

fetch("https://jsonplaceholder.typicode.com/users")
.then((users) => {
    return users.json();
})
.then((users) => {
    console.log(users);
})
.catch((err) => {
    console.log(err);
    
});