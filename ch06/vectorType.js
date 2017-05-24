function Vector(x,y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(vec) {
    return new Vector(this.x+vec.x, this.y+vec.y)
}

Vector.prototype.minus = function(vec) {
    return new Vector(this.x-vec.x, this.y-vec.y)
}

console.log(new Vector(1,2).plus(new Vector(2,3)));
console.log(new Vector(1,2).minus(new Vector(2,3)));
console.log(new Vector(3,4).length);