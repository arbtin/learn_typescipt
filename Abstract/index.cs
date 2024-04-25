import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let newCircle = new Circle(10, 15, 20);
let newRectangle = new Rectangle(0, 0, 3, 7);

let shapes: Shape[] = [];

shapes.push(newCircle);
shapes.push(newRectangle);

for (let each of shapes) {
  console.log(each.getInfo());
  console.log(each.calculateArea());
}
