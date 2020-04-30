class Animal {
	constructor(name, age = 50) {
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating`;
	}
	breath() {
		return `${this.name} is breathing`;
	}
}

class Owl extends Animal {
	constructor(name, age, vesion = 850) {
		super(name, age);
		this.vesion = vesion;
	}
	see() {
		return `${this.name} sees ${this.vesion} meters`;
	}
}

class Lion extends Animal {
	bite() {
		return `${this.name} bite is deadly`;
	}
}

const owl = new Owl("owl");
owl.see();
