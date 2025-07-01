// ## **CALLBACK HELL**

//  where multiple nested callbacks create code that is difficult to read and maintain. This often happens when performing several asynchronous operations in sequence, and each operation requires a callback function to handle its result.
getUserData(userId, function(user) {
  getPostsByUser(user.id, function(posts) {
    getCommentsByPost(posts[0].id, function(comments) {
      console.log(comments);
    });
  });
});