// Q: What will be printed?
let a = 10;
function testScope() {
  let a = 20;
  console.log(a);
}
testScope();
console.log(a);


// first a = 20 then a = 10