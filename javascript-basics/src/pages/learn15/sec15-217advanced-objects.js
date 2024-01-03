// // reference type
// var object1 = { value: 10 };
// var object2 = object1;
// var object3 = { value: 10 };

// console.log(object1 === object2); // true ชี้ไปที่ ref เดียวกัน
// console.log(object1 === object3); // false value เท่า แต่ไม่ใช่ ref เดียวกัน
// console.log((object1.value = 15));
// console.log((object2.value = 15));
// console.log(object3.value);
// // console.log([] == []);
// // console.log(this); // refer function

// // // context vs scope

// const object4 = {
//   a: function () {
//     console.log(this);
//   },
// };
// object4.a();

// //instantiation
class Player {
  constructor(name, type) {
    console.log(`player`, this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizzard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`Weeee I'm a ${this.type}`);
  }
}

const wizard1 = new Wizzard("Shelly", "Healer");
const wizard2 = new Wizzard("Shaw", "Dark magic");

// wizard1
