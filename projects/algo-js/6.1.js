class circle {
    constructor (xPos, yPos, radius) { //constructor for class circle
        this.xPos=xPos;
        this.yPos= yPos;
        this.radius= radius;
    }

    move(xOffset, yOffset) { // move method which resets the value of xPos and yPos when used
        this.xPos=xOffset;
        this.yPos= yOffset;
    }

    get surface () { //getter accessor which returns the surface of the circle
        return Math.PI *this.radius *this.radius;
    }
}

let circ1 = new circle(4,5,2); //creating a circle
console.log(circ1); //displaying it in the console
circ1.move(2,4); //changing its location
console.log(circ1); //diplaying the change
console.log(circ1.surface) //displaying its surface