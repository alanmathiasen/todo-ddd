export abstract class ValueObject<T> {
  protected readonly value: T;

  constructor(value: T) {
    this.value = value;
  }

  public getValue(): T {
    return this.value;
  }

  public equals(obj: ValueObject<T>): boolean {
    if (obj === null || obj === undefined) {
      return false;
    }
    return this.value === obj.value;
  }
}
