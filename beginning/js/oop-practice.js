/*eslint-env browser*/

//1
function Cat() {
    "use strict";
}
var Dog = function () {
    "use strict";
};

//2
var cat1 = new Cat();
var dog1 = new Dog();

//3
//function Animal() {
//    "use strict";
//    this.createdAlert = "The animal has been created";
//}

//4
//function Animal(arg) {
//    "use strict";
//    this.createdAlert = arg;
//}

//5
function Animal(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}

//6
var Ben = new Animal("human", "human", "white", "6 ft", "Dunno how you measure human length");
Object.keys(Ben);

//7

