// Implement a function to check if a parenthesis string (e.g., "((()))", "(()" or "())(") is balanced.

function isBalanced(string){
    let map = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }

    let stack = []
        for(let char of string){
            if(char === "(" || char === "{" || char === "["){
                stack.push(char)
            }else{
                if(stack.pop()!==map[char]){
                    return false
                }
            }
        }
    return stack.length===0
}

console.log(isBalanced("(()"));      
console.log(isBalanced("((()))"));  
console.log(isBalanced("())("));     
console.log(isBalanced("{[()]}"));  
console.log(isBalanced("{[(])}"));   