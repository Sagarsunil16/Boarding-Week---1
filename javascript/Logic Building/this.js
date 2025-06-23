// Practice 3: Fix the broken context – ★★☆


const user = {
  name: "Sagar",
  sayHi: function () {
    console.log(`Hi, ${this.name}`);
  },
};

setTimeout(user.sayHi, 1000); //undefined
setTimeout(()=>user.sayHi(),1000) //works well
setTimeout(user.sayHi.bind(user),1000) // manualy binded so iit will the the scope to the user obj
