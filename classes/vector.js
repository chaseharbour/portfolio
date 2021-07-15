import { toDegrees, toRadians } from "../helpers/conversions";

export default class Vector {
  constructor(...components) {
    this.components = components;
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

  multiply({ components }) {
    return new Vector(
      ...components.map((component, i) => this.components[i] * component)
    );
  }

  divide({ components }) {
    return new Vector(
      ...components.map((component, i) => this.components[i] / component)
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
    const randPosNegX = Math.random() < 0.5 ? -1 : 1;
    const randPosNegY = Math.random() < 0.5 ? -1 : 1;
    return new Vector(
      (Math.random() * (max - min) + min) * randPosNegX,
      (Math.random() * (max - min) + min) * randPosNegY
    );
  }
}
