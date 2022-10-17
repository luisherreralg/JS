const user = {
    name: 'Pepe',
    renderUpper: function () {
        console.log(this.name.toLocaleUpperCase());
    },
};

const user2 = {
    name: 'Ernest',
    renderUpper: function () {
        console.log(this.name.toLocaleUpperCase());
    },
};

user.renderUpper(); // PEPE
user2.renderUpper(); //ERNEST
