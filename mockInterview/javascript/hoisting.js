// Q3: Hoisting
// javascript
// Copy
// Edit
function test() {
  console.log(a);
  var a = 10;
}
test();
// 👉 Output and explanation?
// log will be undefined as because even the function is hoisted at the top but inside the function the vaiable is used before declaration, so it will be undefined