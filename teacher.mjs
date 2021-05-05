import Person from './person';

export default class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log("Teach");
    }
}

// const teacher = new Teacher("Miraz");
// console.log(teacher.name);