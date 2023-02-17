// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));
// });

// console.log(val);

// CHAPTER 3
// DOM SELECTORS FOR MULTIPLE ELEMENTS
// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].style.color =  'blue';
// items[2].style.color =  'pink';
// items[1].style.color =  'orange';
// items[3].textContent = 'Hello';

// Convert HTML Collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// DOCUMENT.QUERYSELECTOR ALL
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(li){
//   items.textContent = `${index}:Hello`;
// });

// const liOdd = document



















// TRAVERSING THE DOM
// MOVING UP AND DOWM,DEALING WITH PARENTS
// let vall;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// vall = listItem; 
// vall = list;

// // Get Child Node
// vall = list.childNodes;
// vall = list.childNodes[0].nodeName;
// vall = list.childNodes[1].nodeType;

// // Get children element nodes
// // vall = list.children;

// console.log(vall);



















// CREATING ELEMENTS
// document.create elements create elements from scratch

// const li = document.createElement('li');

// // add class
// li.className = 'collection-item';

// // add id
// li.id = 'new-item';

// // add attribute
// li.setAttribute('title', 'New Item');

// // create text node and append
// // li.appendChild(document.createTextNode('Hello World'));
// // can be put in a variable
// var nodetext = document.createTextNode('Hello World')
// li.appendChild(nodetext);

// // adding li as a child to ul, showing it on the DOM
// document.querySelector('ul.collection').appendChild(li);

// // create new link element
// var link = document.createElement('a');

// // // add classes
// link.className = 'delete-item secondary-content';

// // // Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';

// // append link into li
// li.appendChild(link);

// console.log(li)




















// REMOVING AND REPLACING ELEMENTS
// Create Element

// const newHeading = document.createElement('h2');
// // Add id
// newHeading.id = 'task-title';
// // New text node
// newHeading.appendChild(document.createTextNode('Task List'));

// // Set the old heading
// const oldHeading = document.getElementById('task-title');
// // parent
// const cardAction = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);

// // REMOVE ELEMENT
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // remove list item
// lis[0].remove();

// // remove child elements
// list.removeChild(lis[3]);

// // console.log(newHeading);

// // CLASSES AND ATTRIBUTES
// const firstLi = document.querySelector('li:first-child');
// console.log(firstLi.children[0]);

// let val;

// // CLasses
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// // Attributs
// val = link.getAttribute('href');
// val = link.setAttribute('href', '')

// console.log(val);























// EVENT LISTENERS AND THE EVENT OBJECT
// document.querySelector('.clear-tasks').addEventListener
// ('click', function(e){
//     console.log('Hello World');

//     e.preventDefault();
// });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e){
//     // console.log('Clicked');
//     let val;

//     val = e;

//     // Event target elements
//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;

// //    Event type
//     val = e.type;

//     // Timestamp
//     val = e.timeStamp;

//     // coords event relative to the window
//     val = e.clientY;
//     val = e.clientX;

//       // coords event relative to the element
//       val = e.offsetY;
//       val = e.offsetX;
    
//     console.log(val);
// }




























// MOUSE EVENTS

// variables that point to selectors
// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// Click is a keyword
// clearBtn.addEventListener('click', runEvent);

// Double click
// clearBtn.addEventListener('dblclick', runEvent);

// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);

// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);

// Mouseenter
// card.addEventListener('mouseenter', runEvent);

// Mouse leave
// card.addEventListener('mouseleave', runEvent);

// Mouse over
// card.addEventListener('mouseover', runEvent);

// Mouse out
// card.addEventListener('mouseout', runEvent);

// mouse move
// card.addEventListener('mousemove', runEvent);

// THIS PARTICULAR LINE OF CODE?? 
// WAHALA
// MAY GOD HELP YOU

// Event Handler
// runevent takes in event object
// function runEvent(e){
//   console.log(`EVENT TYPE: ${e.type}`);

//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
// };




























// KEYBOARD & INPUT EVENTS
// input and form events

// const form = document.querySelector('form');
// const taskInput = document.querySelector('#task');
// const heading = document.querySelector('h5');

// to clear out the form from the console
// taskInput.value = '';

// form.addEventListener('submit', runEvent);


// KeyDown
// taskInput.addEventListener('keydown', runEvent);

// KeyUp
// taskInput.addEventListener('keyup', runEvent);

// KeyPress
// taskInput.addEventListener('keypress', runEvent);


// taskInput.addEventListener('input', runEvent);

// function runEvent(e){
//   console.log(`EVENT TYPE: ${e.type}`);


  // target is the element the event happens on
  // value is the input
  // console.log(e.target.value);


  // heading.innerText = e.target.value;

  // getting input fields or getting values
  // console.log(taskInput.value);

//   e.preventDefault();
// }
































// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');

// // Clear input
// taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
//taskInput.addEventListener('keydown', runEvent);
// Keydown
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);
// Input
// taskInput.addEventListener('input', runEvent);
// // Change
// select.addEventListener('change', runEvent);

// function runEvent(e){
//   console.log(`EVENT TYPE: ${e.type}`);

//   //console.log(e.target.value);

//   // heading.innerText = e.target.value;

//   // Get input value
//   // console.log(taskInput.value);

//   // e.preventDefault();
// }


















// EVENT BUBBLING AND DELEGATION
//EVENT BUBBLING
// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// });

// EVENT DELEGATION
// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);

// event delegation is when somefstuff dont work

// function deleteItem(){
    // console.log('delete item');
    // console.log(e.target);

//     if(e.target.className === 'fa fa-remove'){
//         console.log('delete item');
//     }
// }




































// LOCAL AND SESSION STORAGE
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');


// set session storage item
// sessionStorage.setItem('name', 'Beth');


// remove from local storage
// localStorage.removeItem('name');


//get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');


// clear local storage
// localStorage.clear();

// console.log(name, age);


const aware = document.querySelector('form');
aware.addEventListener('submit', function(e){

  const task = document.querySelector('#task').value;


let tasks;

if (localStorage.getItem('tasks') === null) {
  tasks = [];
} else {
  tasks = JSON.parse(localStorage.getItem('tasks'));
}

tasks.push(task);

localStorage.setItem('tasks', JSON.stringify(tasks));

  localStorage.setItem('task', task);
  alert('Task saved'); 

  e.preventDefault();
})