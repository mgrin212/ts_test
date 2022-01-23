"use strict";
exports.__esModule = true;
exports.printWord = void 0;
function main() {
    var carl = new Dog("Carl", DogMood.HUNGRY);
    carl.bark();
    carl.printName();
    carl.printMood();
}
function printWord(word) {
    console.log(word);
}
exports.printWord = printWord;
var DogMood;
(function (DogMood) {
    DogMood[DogMood["HUNGRY"] = 0] = "HUNGRY";
    DogMood[DogMood["HAPPY"] = 1] = "HAPPY";
})(DogMood || (DogMood = {}));
;
var Dog = /** @class */ (function () {
    function Dog(dogName, mood) {
        this.name = dogName;
        this.mood = mood;
    }
    Dog.prototype.bark = function () {
        console.log("WOOF");
    };
    Dog.prototype.printName = function () {
        console.log(this.name);
    };
    Dog.prototype.printMood = function () {
        switch (this.mood) {
            case DogMood.HUNGRY:
                printWord("Hungry");
                break;
            case DogMood.HAPPY:
                printWord("Happy");
                break;
            default:
                break;
        }
    };
    return Dog;
}());
;
main();
