const circle1= {
    Radius:5,
    getDiameter() {
        return 2*this.Radius;
    }
};
console.log(circle1.getDiameter());

const circle2 = {
    Radius:10,
    getDiameter() {
        return 2*this.Radius;
    }
};

console.log(circle2.getDiameter());
