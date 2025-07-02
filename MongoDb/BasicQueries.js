//  1.1 Find users who are "active"
db.users.find({status:"active"})

//  1.2 Find users aged between 25 and 35
db.users.find({age:{$gt:25 , $lt:35}})

// 1.3 Find users who have both roles: user and admin
db.users.find({roles:{$in:["user","admin"]}})

//  1.4 Find users with email not verified
db.users.find({emailVerified:false})

// 1.5 Find users whose name starts with "User1"
db.users.find({name:{$regex:'^User1',$options:'i'}})

// 1.6 Find users who are suspended OR age > 60
db.users.find({$or:[
    {status:'suspended'},
    {age:{$gt:60}}
]})

// 1.7 Find all users sorted by age (descending)
db.users.find({}).sort({age:-1})

//  1.8 Count users by a condition (e.g., active + verified)
db.users.countDocuments({status:'active', emailVerified:true})

//  1.9 Find only name, email of all users (Projection)
db.users.find({},{name:1,age:1,email:1,_id:0})

// 1.10 Pagination: Skip 10 users and show next 5
db.users.find().skip(10).limit(5)