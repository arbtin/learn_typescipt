import { Shape } from './Shape';

export class Circle extends Shape {
  constructor(X: number, Y: number, private _radius: number) {
    super(X, Y);
  }

  public get radius(): number {
    return this._radius;
  }

  public set radius(value: number) {
    this._radius = value;
  }

  getInfo(): string {
    return super.getInfo() + `, radius=${this._radius}`;
  }

  calculateArea(): number {
    return Math.PI * Math.pow(this._radius, 2);
  }
}
