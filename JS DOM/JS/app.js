// // Person constructor
// function Person(name, dob) {
//   this.name = name;
//   // this.age = age;
//   this.birthday = new Date(dob);
//   this.calculateAge = function(){
//     const diff =  Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
// }

// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

// console.log(john.age);

// const brad = new Person('Brad', '9-10-1981');
// console.log(brad.calculateAge());






























// PROTOTYPES EXPLAINED
// OBJECT.PROTOTYPE


function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lasttName = lastName;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff =  Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new  