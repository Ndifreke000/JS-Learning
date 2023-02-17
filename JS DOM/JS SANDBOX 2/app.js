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











