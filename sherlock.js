let sherlock = {
    surname: 'Holmes',

    address: {
        street: 'Baker',
        number: 22,
        city: 'London',
    },

    greetings: (b = 'amigo') => {
        console.log('Hola' + b);
    },
};

let john = {};
//Para copiar a un nivel
john.address = { ...sherlock.address };
john.address = { ...sherlock.address, city: 'Londres' };

//Para copiar todos los niveles que exitan dentro
//Stringigy cambia los datos a string
//Parse convierte los strings del stringify otra vez en datos
//Esto se hace para pasar datos cliente - servidor o para clonar cosas con muchos niveles
john.address = JSON.parse(JSON.stringify(sherlock.address));

let obj = {};
console.log(obj);
console.log(obj.algo?.foo?.masAlgo);

obj.initialDate = new Date();
let objClon = JSON.parse(JSON.stringify(obj));
objClon.initialDate = new Date(objClon.initialDate);
console.log(objClon);

let a = 10;
a = true;
a = 20;

let b = {};
b.property = 'mutation';

const foo = (obj) => {
    let newO = { ...obj };
    newO.name = 'Pepe';
    return newO;
};

const objTest = { name: 'Ernesto' };
const newObjt = foo(objTest);
console.log(objTest);
console.log(newObjt);

let pizza = {};
console.log(pizza.taste); // "pineapple"

let human = {
    teeth: 32,
};
let gwen = {
    // We added this line:
    __proto__: human,
    age: 19,
};

let human = {
    teeth: 32,
};
let gwen = {
    __proto__: human,
    // This object has its own teeth property:
    teeth: 31,
};

const person = {
    arms: 2,
};

const alumno = {
    course: 'CODERS',
    __proto__: person,
};

const pepe = {
    age: 23,
    __prote__: alumno,
};

console.log(pepe.course); // CODERS
console.log(pepe.arms); // 2
console.log(pepe.__proto__); // {course: 'CODERS'}
console.log(person.__proto__); // [Object: null prototype {}]

Object.prototype.taste = 'beacon';
console.log(pepe.taste); // beacon
console.log(ernest.taste); // beacon

const ernest = {
    taste: 'pineapple',
};
console.log(ernest.taste); // pineapple
