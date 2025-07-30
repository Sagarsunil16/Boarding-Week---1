try {
  console.log(a, "var, before declaration"); // undefined
  console.log(b, "let, before declaration"); // ReferenceError
  console.log(c, "const, before declaration"); // ReferenceError
} catch (err) {
  console.log("Error above:", err.message);
}

var a = 0;
let b = 0;
const c = 0;

console.log(a, "var, after declaration"); // 0
console.log(b, "let, after declaration"); // 0
console.log(c, "const, after declaration"); // 0
