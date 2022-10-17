function Person(name = '', age = null) {
    this.name = 'name';
    this.age = 'age';
    // this.greatings = function (target = 'bro') {
    //     console.log(
    //         `Hola ${target}, soy ${this.name} y tengo ${this.age} años`
    //     );
    // };
}

// Instancia un objeto -> p1 = {}
// Se ejecuta y this apunta al nuevo objeto

const p1 = new Person(); // {name: '', age: null}
const p2 = new Person('Pepe', 22); // {name: 'Pepe', age: 22}
p2.greatings(p1.name);

Person.define = function () {
    console.log('Las personas tenemos cerebro');
};
Person.define(); // Las personas tenemos cerebro

Person.prototype.greatings = function (target = 'bro') {
    console.log(`Hola ${target}, soy ${this.name} y tengo ${this.age} años`);
};

Person.isPerson = function (value) {
    return value instanceof Person;
};
