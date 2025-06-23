// Q: Create a function that stores a secret, and only returns it via another function
const secretHolder = createSecret("password123");
console.log(secretHolder()); // → password123

function  createSecret(password){
    let secret = password
    return function(){
        return secret
    }
}