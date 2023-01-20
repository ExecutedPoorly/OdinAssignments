function Student(name, grade) {
  this.name = name
  this.grade = grade
}

Student.prototype.sayName = function() { // .prototype adds sayName function to Student class. Function(){} prevents IIFE.
  console.log(this.name)
}

const bob = new Student("bob", 11);
bob.sayName() //calls added
bob.goToProm;

///////////////////////////////////////

function Student() {
}

Student.prototype.sayName = function() { //adds sayName function to Student.
  console.log(this.name)
}

function EighthGrader(name) {
  this.name = name
  this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)
//

const carl = new EighthGrader("carl")
carl.sayName() // console.logs "carl" needs() as sayName is a function
carl.grade // 8

//////////////////////////////// Object.create() /////////////////////////////////////

const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"
