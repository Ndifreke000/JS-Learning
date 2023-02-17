// const personPrototypes = {
//   greeting : function () {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   },

//   getsMarried: function(newLastName) {
//     this.lastName = newLastName;
//   }

// }

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// mary.getsMarried('Thompson');

// console.log(mary.greeting());




// const brad = Object.create(personPrototypes, {
//   firstName:{value: 'Brad'},
//   lastName: {value: 'Travesty'},
//   age: {value: 36}
// });

// console.log(brad);
// console.log(brad.greeting());




















// ES6 CLASSES
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = 15;
  }

  greeting() {
    return `Hello there ${this.firstName}`
  }

}

const mary = new Person('Mary', 'Williams');

console.log(mary);