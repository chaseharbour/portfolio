import { toDegrees, toRadians } from "../helpers/conversions";

export default class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  add(vec) {
    return new Vector(this.x + vec.x, this.y + vec.y);
  }

  addByNum(num) {
    return new Vector(this.x + num, this.y + num);
  }

  subtract(vec) {
    return new Vector(this.x - vec.x, this.y - vec.y);
  }

  multiply(vec) {
    return new Vector(this.x * vec.x, this.y * vec.y);
  }

  multiplyByNum(num) {
    return new Vector(this.x * num, this.y * num);
  }

  divideByVec(vec) {
    return new Vector(this.x / vec.x, this.y / vec.y);
  }

  divideByNum(num) {
    return new Vector(this.x / num, this.y / num);
  }

  scaleBy(num) {
    return new Vector(this.x * num, this.y * num);
  }

  length() {
    return Math.hypot(this.x, this.y);
  }

  dotProduct(vec) {
    return this.x * vec.x + this.y * vec.y;
  }

  normalize() {
    return this.scaleBy(1 / this.length());
  }

  angleBetween(other) {
    return toDegrees(
      Math.acos(this.dotProduct(other) / (this.length() * other.length))
    );
  }

  negate() {
    return this.scaleBy(-1);
  }

  limit(newLength) {
    return this.normalize().scaleBy(newLength);
  }

  random2D(min, max) {
    const randPosNegX = Math.random() < 0.5 ? -1 : 1;
    const randPosNegY = Math.random() < 0.5 ? -1 : 1;
    return new Vector(
      (Math.random() * (max - min) + min) * randPosNegX,
      (Math.random() * (max - min) + min) * randPosNegY
    );
  }
}
