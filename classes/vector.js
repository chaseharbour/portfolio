import { toDegrees, toRadians } from "../helpers/conversions";

export default class Vector {
  constructor(...components) {
    this.components = components;
    this.x = this.components[0];
    this.y = this.components[1];
  }

  add({ components }) {
    return new Vector(
      ...components.map((component, i) => this.components[i] + component)
    );
  }

  subtract({ components }) {
    return new Vector(
      ...components.map((component, i) => this.components[i] - component)
    );
  }

  scaleBy(num) {
    return new Vector(...this.components.map((component) => component * num));
  }

  length() {
    return Math.hypot(...this.components);
  }

  dotProduct({ components }) {
    return components.reduce(
      (acc, component, i) => acc + component * this.components[i],
      0
    );
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
    return;
  }
}
