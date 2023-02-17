//DOM Manipulation
// const headtitle = document.querySelector('#main-heading');
// headtitle.style.color = 'red';
// console.log(headtitle);



// const listItems = document.querySelectorAll()


// //Get Elements by ID()
// const title = document.getElementById('main-heading');

// console.log(title);

// //Get ELement by className()
// const listItems = document.getElementsByClassName('list-items');

// console.log(listItems);

// // Get Elemennts by tagName()
// const taglistItems = document.getElementsByTagName('li');

// console.log(taglistItems);

// // Get Elements by querySelector()
// const container = document.querySelector('div');

// console.log(container);

// // querySelectorAll()
// const containers = document.querySelectorAll('div');

// console.log(containers);

// creating elements

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// Adding Elements

// ul.append(li)

//Modifying the text

// li.innerText = 'X-men';

// var myElement = document.getElementById("intro");
// document.getElementById("demo").innerHTML = 
// "The text from the intro paragraph is " + myElement.innerHTML;

// document.write(Date());

document.getElementById('intro').innerHTML = "Titan";

function changeText(id) {
    id.innerHTML = "Ooops!";
  }

  function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }

  document.getElementById("myBtn").onclick = displayDate;

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}