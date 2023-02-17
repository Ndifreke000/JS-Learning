document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);


//Get local text file data
function getText() {
  fetch('test.txt')//fetch always returns promises and promises uses .then
    .then(res => res.text())
    .then(data => {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}


// Get local json data
function getJson() {
  fetch('posts.json')//fetch always returns promises and promises uses .then
    .then(res => res.json())
    .then(data =>  {
      console.log(data);
      let output = '';
      data.forEach(function(post){
        output += `<li>${post.title}</li>`
      });
      document.getElementById('output').innerHTML = output;
      // document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}



// Get from external API
function getExternal() {
  fetch('https://api.github.com/users')//fetch always returns promises and promises uses .then
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(user => {
        output += `<li>${user.login}</li>`
      });
      document.getElementById('output').innerHTML = output;
      // document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err))
}

