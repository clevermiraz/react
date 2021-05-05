class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("walk");
    }
}

// const person = new Person("Miraz");
// console.log(person.name);
// person.walk();

//next level inheritance

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log("Teach");
    }
}

const teacher = new Teacher("Miraz", "Msc");
console.log(teacher.name);
console.log(teacher.degree);
teacher.teach();
