//  Get average age of users grouped by status
db.users.aggregate([
  {
    $group: {
      _id: "$status",
      averageAge: { $avg: "$age" },
      totalUsers: { $sum: 1 },
    },
  },
]);

// 3.2 Count number of users per role (flattening roles array)
db.users.aggregate([
  { $unwind: "$roles" },
  { $group: { _id: "$roles", userCount: { $sum: 1 } } },
  { $sort: { userCount: -1 } },
]);

//  3.3 Find top 5 most common ages
db.users.aggregate([
  {
    $group: {
      _id: "$age",
      count: { $sum: 1 },
    },
  },
  {
    $sort: {
      count: -1,
    },
  },
  {
    $limit: 5,
  },
]);

//  3.4 Find average age of verified users only
db.users.aggregate([
  {$match:{"emailVerified":true}},
  {$group:{_id:"null",avgAge:{$avg:"$age"}}}
])

//3.5 List all users who are both admin and under age 30
db.users.aggregate([
  {$match:{roles:"admin",age:{$lte:30}}},
  {$project:{name:1,age:1,roles:1,_id:1}}
])

//  3.6 Show how many users joined each day (based on createdAt)
db.users.aggrega([
  {$group:{_id:{$dateToString:{format: '%Y-%m-%d',date:"$createdAt"}},users:{$sum:1}}},
  {$sort:{"_id":-1}}
])