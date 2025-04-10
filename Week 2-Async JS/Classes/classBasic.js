class Rectangle{
    constructor(length, width, color) {
        this.length = length;
        this.width = width;
        this.color = color;
    }

    area() {
        const area = this.length * this.width;
        return area;
    }

    paint() {
        console.log(`Painting with color ${this.color}`);
        // return 0;
    }
}

const rect = new Rectangle(2, 3, "blue");
const area = rect.area();
const color = rect.paint();
console.log(area);
console.log(color);
