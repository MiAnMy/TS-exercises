// Make a Circle with OOP
// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument.
// The circles constructed must have two getters getArea() (PIr^2) and getPerimeter() (2PI*r) which give both respective areas and perimeter (circumference).

class Circle {
  private r: number;
  constructor(r: number) {
    this.r = r;
  }

  public getArea(): number {
    return Math.PI * Math.pow(this.r, 2);
  }

  public getPerimeter() {
    return 2 * Math.PI * this.r;
  }
}

// let circy1: Circle = new Circle(11);
// console.log(circy1.getArea());

// Should return +/- 380.132711084365

// let circy2: Circle = new Circle(4.44);
// console.log(circy2.getPerimeter());

// Should return +/- 27.897342763877365

export default Circle;
