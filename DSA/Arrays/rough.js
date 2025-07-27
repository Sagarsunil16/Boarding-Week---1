// Firs of all i will try to crate a function which will be called on a particular event
//  if the event or message is something like greet
// then on greet i will be awaking the function which will be emitted when message is given or triggered


// emitter(eventname){
// when the particular eventName is matched.. the event which is inside that condition will be called.
// call , print , error , stop, click

// async function addUser(users: User[]) {
//     try {
//         validators.validate.users(users);

//         // this is an async operation
//         dbConnection.users.add(users);
//     } catch(e) {
//         res.json()
//         logger.error(e);
//     }
// }



class emitter{
    constructor(eventName){
        this.event = eventName
    }

    on(){
        console.log("This event is going to be called`")
    }

    emit(){
        console.log("event is emitted")
    }
}


const event = new emitter()
event.on()
