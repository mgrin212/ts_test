function main(){
    let carl = new Dog("Carl", DogMood.HUNGRY);
    carl.bark();
    carl.printName();
    carl.printMood();
}


export function printWord(word: string){
    console.log(word);
}

enum DogMood{
    HUNGRY, HAPPY
};


class Dog{

    name: string;
    mood: DogMood;
    constructor(dogName: string, mood: DogMood){
        this.name = dogName;
        this.mood = mood;
    }

    bark(){
        console.log("WOOF");
    }

    printName(){
        console.log(this.name);
    }

    printMood(){
        switch (this.mood){
            case DogMood.HUNGRY:
                printWord("Hungry");
                break;
            case DogMood.HAPPY:
                printWord("Happy");
                break;
            default:
                break;
        }
    }
};

main();
