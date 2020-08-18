import Circle from "../Make_a_Circle_with_OOP";

describe("Circle exercise", () => {
  test("Arena circle with r=11 should be 380.132711084365", () => {
    const circle: Circle = new Circle(11);
    expect(circle.getArea()).toBe(380.132711084365);
  });

  test("Perimeter circle with r=4.44 should be 27.897342763877365", () => {
    const circle: Circle = new Circle(4.44);
    expect(circle.getPerimeter()).toBe(27.897342763877365);
  });
});
