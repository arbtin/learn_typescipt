import { Shape } from './Shape';

export class Rectangle extends Shape {

  constructor(X: number, Y: number, private _width: number, private _height: number) {
    super(X, Y);
  }

  getInfo(): string {
    return super.getInfo() + `, width=${this._width}, height=${this._height}`;

  }

}
