// Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and lenght. 
// Add a method named collides(otherRectangle) that returns true only if the current rectangle collides 
// with otherRectangle.

// Test the collides(otherRectangle) method by using multiple test cases.


class rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) { //constructor for class rectangle
        this.x0 = topLeftXPos;
        this.y0 = topLeftYPos;
        this.x1 = topLeftXPos + width;
        this.y1 = topLeftYPos + length;
        this.w = width;
        this.l = length;
    }

    collides(otherRectangle) { // method which returns true in the case of a superposition between 
        return (
            ((otherRectangle.x0 <= this.x0) && (otherRectangle.y0 <= this.y0) && (otherRectangle.x1 >= this.x0) && (otherRectangle.y1 >= this.y0)) ||
            ((otherRectangle.x0 <= this.x0) && (otherRectangle.y0 >= this.y0) && (otherRectangle.y0 <= this.y1) && (otherRectangle.x1 >= this.x0)) ||
            ((otherRectangle.x0 >= this.x0) && (otherRectangle.x0 <= this.x1) && (otherRectangle.y0 <= this.y0) && (otherRectangle.y1 >= this.y0)) ||
            ((otherRectangle.x0 >= this.x0) && (otherRectangle.x0 <= this.x1) && (otherRectangle.y0 >= this.y0) && (otherRectangle.y0 <= this.y1))
        )
    }

}

let rect1 = new rectangle(10, 10, 10, 30);
let rect2 = new rectangle(0, 50, 30, 10); //creating rectangles
console.log(rect1); //showing the first rectangle
console.log(rect2); //showing the second rectangle 
console.log(rect2.collides(rect1)); //showing the results of the method