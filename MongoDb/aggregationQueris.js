//  Get average age of users grouped by status
db.users.aggregate([
  {$group:{_id:"$status",averageAge:{$avg:"$age"},totalUsers:{$sum:1}}}
])

// 3.2 Count number of users per role (flattening roles array)
db.users.aggregate([
  {$unwind:"$roles"},
  {$group:{_id:"$roles",userCount:{$sum:1}}},
  {$sort:{userCount:-1}}
])

//  3.3 Find top 5 most common ages

