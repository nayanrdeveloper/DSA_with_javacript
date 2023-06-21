// reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

object1 == object2; // true => because object1 store same reference

object1 == object3; // false => because object1 and object3 both store in different objects

// context vs scope

const object4 = {
  // {} are scope
  a: function () {
    console.log(this);
  },
};

// Instantiation

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi am i ${this.name} and my type is ${this.type}`);
  }
}

class Wizard extends Player{
    constructor(name, type){
        super(name, type);
    }

    play(){
        console.log(`WEEEEEEE I'm a${this.type}`);
    }
}

const wizard1 = new Wizard("nayan", "Cricket");
const wizard2 = new Wizard("Mayur", "Hocky");

console.log(wizard1.introduce());
