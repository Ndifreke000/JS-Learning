document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  e.preventDefault();
  const number = document.getElementById('number').value;
  console.log(number)

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function(){
    if(this.status === 200){
      const response = JSON.parse(this.responseText);
      // wrapping it in the jason file is to make it loop ables
      // shows you the jokes array
      


      // to initialize it on the DOM
      let output = '';
// make sure the type is success


      if(response.type === 'success') {
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`
        });
      } else {
        output += '<li>Something went wrong</li>'
      }

        document.querySelector('.jokes').innerHTML = output;

    }
  }

  xhr.send();
}