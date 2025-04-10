// Assignment #1 - Create a Circle class

class Circle{
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    area() {
        const area = 3.14 * (this.radius * this.radius);
        return area;
    }

    paint() {
        console.log(`Circle painted with ${this.color} color.`);
    }
}

const circ = new Circle(2, "blue");
const area = circ.area();
const color = circ.paint();

console.log(area);
console.log(color);