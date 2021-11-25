class Animal {
	constructor() {
		this.name = 'Foxi';
	}

	printName = () => {
		console.log(this.name);
	}
}

class Cat extends Animal {
	constructor() {
		super();
		this.name = 'Cat: Vasia';
	}
}

class Dog extends Animal {
	constructor() {
		super();
		this.name = 'Dog: Lady';
	}
}

class Hourse extends Animal {
	constructor() {
		super();
		this.name = 'Hourse: Gordon';
	}
}



const animalCat = new Cat();
const animalDog = new Dog();
const animalHourse = new Hourse();

animalCat.printName();
animalDog.printName();
animalHourse.printName();