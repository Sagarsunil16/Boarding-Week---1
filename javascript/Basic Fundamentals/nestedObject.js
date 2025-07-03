const nestedObj = {
  name: "Sagar",
  address: {
    city: "Kochi",
    pin: 682001,
    location: {
      lat: 9.98,
      long: 76.27
    }
  },
  hobbies: ["coding", "traveling"],
  education: {
    school: {
      name: "XYZ School",
      year: 2015
    },
    college: {
      name: "ABC College",
      year: 2019
    }
  }
};



function printNestedValues(obj){
    for(let key in obj){
        if(typeof obj[key] ==="object" && obj[key]!== null){
            printNestedValues(obj[key])
        }else{
            console.log(key,obj[key])
        }
    } 
}

printNestedValues(nestedObj)