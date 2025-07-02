// 2.1 Update a Single User's Status
// Task: Set status to "inactive" for user with name "User42".
db.users.updateOne({name:'User42'},{$set:{status:'inactive'}})

// 2.2 Update All Users Older Than 60 to senior Status
db.users.updateMany({age:{$gt:60}},{$set:{status:'senior'}})

// 2.3 Add Role "editor" to User10 if not already present
db.users.updateOne({name:'User10'},{$addToSet:{roles:'editor'}})

// 2.4 Remove Role "admin" from all users
db.users.updateMany({},{$pull:{roles:'admin'}})

// 2.5 Increment age by 1 for all users under age 30
db.users.updateMany({age:{$lt:30}},{$inc:{age:1}})

// 2.6 Delete one user with name "User999"
db.users.deleteOne({name:'User999'})

//2.7 Delete all users who are "suspended" and not verified
db.users.deleteMany({status:'suspended',emailVerified:false})

// Unset a field: remove emailVerified field from all users
db.users.deleteMany({},{$unset:{emailVerfied:''}})

// Update all users whose email ends with "@example.com" to set emailVerified: true.
db.users.updateMany({email:/@example\.com$/i},{$set:{emailVerifed:true}})

// Remove "editor" role from all users aged below 25.
db.users.updateMany({age:{$lt:25}},{$pull:{roles:'editor'}})

// Add lastLogin field with current date for all active users
db.users.updateMany({status:"active"},{$set:{lastlogin: new Date()}})