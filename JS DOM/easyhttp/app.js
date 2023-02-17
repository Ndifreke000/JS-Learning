const http = new easyHTTP;

// // Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });


// const http = new easyHTTP;

// get posts
// const posts = http.get('https://jsonplaceholder.typicode.com/posts',
// function(err, posts){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// console.log(posts);




























// GET SINGLE POST
// http.get('https://jsonplaceholder.typicode.com/posts/1',
// function(err, post){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });



// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};


// create post
// http.post('https://jsonplaceholder.typicode.com/posts',
// data, function(err, post){
//   if(err) {
//         console.log(err);
//       } else {
//         console.log(post);
//       }
// });



// UPDATE POST
// http.put('https://jsonplaceholder.typicode.com/posts/1', 
// data, function(err, post){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });








// DELETE POST
http.delete('https://jsonplaceholder.typicode.com/post/1',
function(err, posts){
  if(err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});