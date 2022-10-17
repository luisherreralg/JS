// ES6+ - ES2015 - ES2022

class Person {
    static isPerson(value) {
        return value instanceof Object;
    }

    constructor(name = '', age = null) {
        this.name = name;
        this.age = age;
    }

    greetings(target = 'bro') {
        console.log(
            `Hola ${target}, soy ${this.name} y tengo ${this.age} años`
        );
    }
}

class Student extends Person {
    constructor(name, age, course) {
        // Super es una manera de decirle al constructor de Person que se encarge
        super(name, age);
        this.course = course;
    }

    // Se pueden meter objetos como parámetros y aún así funcionar
    greetings(target = { name: 'bro' }) {
        super.greatings(target);
        console.log(`Estudio ${this.course}`);
    }
}

const s1 = new Student('Pepito', 12, 'Angular');
console.log(s1);
s1.greatings();
// Hola bro, soy Pepito y tengo 12 años
// Estudio Angular
